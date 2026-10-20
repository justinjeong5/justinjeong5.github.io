import assert from 'node:assert/strict';
import { test } from 'node:test';

import { buildDocsFrom, buildCurrentDocsFrom, groupByType } from './search-docs.js';

const sample = {
  cases: [{ slug: 'c1', title: '케이스1', summary: '케summary', tags: ['a', 'b'] }],
  notes: [{ slug: 'n1', title: '노트1', summary: '노summary', topics: ['t1'], growth: 'Evergreen' }],
  essays: [{ slug: 'e1', title: '에세이1', summary: '에summary', tags: ['캐시'] }],
};

test('current search excludes archived library types before the result budget', () => {
  const notes = Array.from({ length: 100 }, (_, i) => ({ slug: `n${i}`, title: '동일 검색어' }));
  const docs = buildCurrentDocsFrom({ ...sample, notes });
  assert.deepEqual(docs.map((entry) => entry.type), ['case', 'essay']);
  assert.ok(docs.slice(0, 24).some((entry) => entry.slug === 'c1'));
  assert.equal(docs.length, 2);
});

test('buildDocsFrom: 타입별 문서 shape·라벨·url을 만든다', () => {
  const docs = buildDocsFrom(sample);
  assert.equal(docs.length, 3);
  const byType = Object.fromEntries(docs.map((d) => [d.type, d]));

  assert.equal(byType.case.typeLabel, 'Case');
  assert.equal(byType.case.url, '/cases/c1');
  assert.deepEqual(byType.case.topics, ['a', 'b']); // 케이스는 tags → topics

  assert.equal(byType.note.typeLabel, 'Note');
  assert.equal(byType.note.url, '/notes/n1');
  assert.deepEqual(byType.note.topics, ['t1']); // 노트는 topics 그대로
  assert.equal(byType.note.growth, 'Evergreen');

  assert.equal(byType.essay.url, '/essays/e1');
  assert.deepEqual(byType.essay.topics, ['캐시']);
});

test('buildDocsFrom: 결과 순서는 cases → notes → essays', () => {
  const docs = buildDocsFrom(sample);
  assert.deepEqual(docs.map((d) => d.type), ['case', 'note', 'essay']);
});

test('buildDocsFrom: 누락 필드는 안전한 기본값(summary 빈 문자열·topics 빈 배열·growth Seedling)', () => {
  const docs = buildDocsFrom({
    cases: [{ slug: 'c', title: 'C' }], // summary·tags 없음
    notes: [{ slug: 'n', title: 'N' }], // topics·growth 없음
  });
  const byType = Object.fromEntries(docs.map((d) => [d.type, d]));
  assert.equal(byType.case.summary, '');
  assert.deepEqual(byType.case.topics, []);
  assert.deepEqual(byType.note.topics, []);
  assert.equal(byType.note.growth, 'Seedling');
});

test('buildDocsFrom: 인자 없으면 빈 배열', () => {
  assert.deepEqual(buildDocsFrom(), []);
  assert.deepEqual(buildDocsFrom({}), []);
});

test('buildDocsFrom: archived aliases are not searchable', () => {
  const archived = { slug: 'old', title: 'Old', archived: true };
  assert.deepEqual(buildDocsFrom({ cases: [archived], notes: [archived], essays: [archived] }), []);
});

test('buildDocsFrom: Draft essay is not searchable', () => {
  assert.deepEqual(buildDocsFrom({ essays: [{ slug: 'draft', status: 'Draft', title: '초안' }] }), []);
});

test('groupByType: 타입별로 그룹핑하고 알 수 없는 타입은 무시', () => {
  const results = [
    { type: 'case', slug: 'c1' },
    { type: 'note', slug: 'n1' },
    { type: 'note', slug: 'n2' },
    { type: 'essay', slug: 'e1' },
    { type: 'unknown', slug: 'x' },
  ];
  const groups = groupByType(results);
  assert.deepEqual(groups.case.map((r) => r.slug), ['c1']);
  assert.deepEqual(groups.note.map((r) => r.slug), ['n1', 'n2']);
  assert.deepEqual(groups.essay.map((r) => r.slug), ['e1']);
});

test('groupByType: 빈 입력은 빈 그룹 3종', () => {
  assert.deepEqual(groupByType([]), { case: [], note: [], essay: [] });
});
