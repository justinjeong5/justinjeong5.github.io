import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const about = JSON.parse(readFileSync(new URL('../content/about.json', import.meta.url), 'utf8'));
const careerPaths = JSON.parse(readFileSync(new URL('../../scripts/career-linked-paths.json', import.meta.url), 'utf8')).paths;

test('career page keeps a readable role history and actual-use technology context', () => {
  assert.ok(about.headline.trim());
  assert.ok(about.bio.trim());
  assert.deepEqual(about.career.map((item) => item.period), [
    '2025.10–현재',
    '2023.11–2025.09',
    '2021.04–2023.11',
  ]);
  assert.ok(about.career.every((item) => item.title && item.summary && item.stack));
  assert.ok(about.technologies.every((item) => item.area && item.tools && item.usage));
});

test('representative work links point to current career articles and explain problem, choice, and result', () => {
  assert.equal(about.highlights.length, 6);
  assert.equal(new Set(about.highlights.map((work) => work.to)).size, about.highlights.length);
  for (const work of about.highlights) {
    for (const field of ['period', 'title', 'problem', 'decision', 'result']) {
      assert.ok(work[field]?.trim(), `${work.to} ${field}`);
    }
    assert.ok(careerPaths.includes(`${work.to}/`), `${work.to} 경력 링크 보호 대상 아님`);
    const slug = work.to.match(/^\/cases\/([a-z0-9-]+)$/)?.[1];
    assert.ok(slug, work.to);
    const article = readFileSync(new URL(`../content/cases/${slug}.mdx`, import.meta.url), 'utf8');
    assert.doesNotMatch(article, /^archived: true$/m, work.to);
  }
});

test('career outcomes keep sampling and shared-DB ownership boundaries explicit', () => {
  const diagnostic = about.highlights.find((work) => work.to === '/cases/playhub-diagnostic-sampling');
  assert.match(diagnostic.decision, /클라이언트 표본에서 제외/);
  assert.match(diagnostic.result, /데이터 플랫폼 담당자.*진단 이벤트 약 86% 감소/);
  assert.doesNotMatch(diagnostic.result, /54%|비용 절감/);

  const server = about.highlights.find((work) => work.to === '/cases/ai-cross-functional-delivery');
  assert.match(server.decision, /미지원 요청.*거절되는지 테스트/);
  assert.match(server.result, /DBA.*완료 보고.*서버 변경을 병합/);
});
