import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

import {
  classifyRef,
  extractMarkdownTargets,
  findDeadContentLinks,
} from './check-content-links.mjs';

test('classifyRef: 상세/로그앵커만 분류하고 정적·외부는 null', () => {
  assert.deepEqual(classifyRef('/cases/home-radar-system'), { kind: 'detail', type: 'cases', slug: 'home-radar-system' });
  assert.deepEqual(classifyRef('/notes/my-note/'), { kind: 'detail', type: 'notes', slug: 'my-note' });
  assert.deepEqual(classifyRef('/logs#2026-06-09-x'), { kind: 'logAnchor', slug: '2026-06-09-x' });
  assert.equal(classifyRef('/cases'), null); // 정적 목록 라우트
  assert.equal(classifyRef('/about'), null);
  assert.equal(classifyRef('https://example.com/cases/x'), null); // 외부
  assert.equal(classifyRef('/logs'), null);
});

test('extractMarkdownTargets: 마크다운 링크 타깃만 추출', () => {
  const t = '보라 [케이스](/cases/a) 그리고 [로그](/logs#b) 외부 [x](https://y.com).';
  assert.deepEqual(extractMarkdownTargets(t), ['/cases/a', '/logs#b', 'https://y.com']);
});

test('extractMarkdownTargets: 제목 붙은 링크도 경로만 추출(거짓음성 방지)', () => {
  assert.deepEqual(extractMarkdownTargets('[a](/cases/x "설명")'), ['/cases/x']);
  assert.deepEqual(extractMarkdownTargets("[a](/notes/y '설명')"), ['/notes/y']);
  assert.deepEqual(extractMarkdownTargets('[a]( /essays/z )'), ['/essays/z']);
});

test('extractMarkdownTargets: 코드 펜스·인라인 코드 내 링크는 무시(거짓양성 방지)', () => {
  // 마크다운 링크 문법을 코드 예시로 보여주는 글이 존재하지 않는 예시 경로로 build를 깨면 안 된다.
  const fenced = '설명\n```\n[예시](/notes/does-not-exist)\n```\n[진짜](/cases/real)';
  assert.deepEqual(extractMarkdownTargets(fenced), ['/cases/real']);
  const inline = '인라인 `[예시](/notes/does-not-exist)` 뒤 [진짜](/essays/real)';
  assert.deepEqual(extractMarkdownTargets(inline), ['/essays/real']);
});

// ---- fixture: 임시 콘텐츠 디렉터리로 검출력 검증 ----

async function makeFixture(files) {
  const dir = await mkdtemp(path.join(tmpdir(), 'content-links-'));
  for (const [rel, body] of Object.entries(files)) {
    const full = path.join(dir, rel);
    await mkdir(path.dirname(full), { recursive: true });
    await writeFile(full, body);
  }
  return dir;
}

test('findDeadContentLinks: 모든 참조가 유효하면 dead link 0', async () => {
  const dir = await makeFixture({
    'cases/good-case.mdx': '본문 [노트로](/notes/live-note) 그리고 [로그](/logs#2026-01-01-ok)',
    'notes/live-note.mdx': '노트',
    'logs/2026-01-01-ok.mdx': '로그',
    'essays/live-essay.mdx': '에세이',
    'site.json': JSON.stringify({ featuredCaseSlugs: ['good-case'], featuredEssaySlugs: ['live-essay'] }),
    'about.json': JSON.stringify({ highlights: [{ to: '/cases/good-case' }] }),
  });
  try {
    assert.deepEqual(await findDeadContentLinks(dir), []);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('findDeadContentLinks: mdx 내부 링크의 삭제된 slug와 로그 앵커를 검출', async () => {
  const dir = await makeFixture({
    'cases/c.mdx': '[없는 노트](/notes/deleted-note) [없는 로그](/logs#2099-12-31-gone)',
    'notes/live-note.mdx': '노트',
    'site.json': JSON.stringify({}),
    'about.json': JSON.stringify({}),
  });
  try {
    const dead = await findDeadContentLinks(dir);
    const refs = dead.map((d) => d.ref).sort();
    assert.deepEqual(refs, ['/logs#2099-12-31-gone', '/notes/deleted-note']);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('findDeadContentLinks: site.json featured 케이스·에세이 삭제 참조를 모두 검출', async () => {
  const dir = await makeFixture({
    'cases/exists.mdx': '케이스',
    'essays/exists-essay.mdx': '에세이',
    'site.json': JSON.stringify({
      featuredCaseSlugs: ['exists', 'curated-out'],
      featuredEssaySlugs: ['exists-essay', 'curated-out-essay'],
    }),
    'about.json': JSON.stringify({}),
  });
  try {
    const dead = await findDeadContentLinks(dir);
    const bySource = Object.fromEntries(dead.map((d) => [d.source, d.ref]));
    assert.equal(dead.length, 2);
    assert.equal(bySource['site.json:featuredCaseSlugs'], '/cases/curated-out');
    assert.equal(bySource['site.json:featuredEssaySlugs'], '/essays/curated-out-essay');
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('findDeadContentLinks: about.json highlights의 삭제된 경로를 검출', async () => {
  const dir = await makeFixture({
    'cases/exists.mdx': '케이스',
    'site.json': JSON.stringify({}),
    'about.json': JSON.stringify({ highlights: [{ to: '/cases/exists' }, { to: '/essays/gone' }] }),
  });
  try {
    const dead = await findDeadContentLinks(dir);
    assert.equal(dead.length, 1);
    assert.equal(dead[0].ref, '/essays/gone');
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('findDeadContentLinks: about.json highlights의 to 필드 누락/null은 안전하게 스킵', async () => {
  // 구현의 방어(h.to || '')를 명시적으로 검증 — 향후 정리 리팩토링 시 회귀 방지.
  const dir = await makeFixture({
    'cases/exists.mdx': '케이스',
    'site.json': JSON.stringify({}),
    'about.json': JSON.stringify({ highlights: [{ to: '/cases/exists' }, {}, { to: null }] }),
  });
  try {
    assert.deepEqual(await findDeadContentLinks(dir), []);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test('findDeadContentLinks: 실제 저장소 콘텐츠는 dead link 0 (회귀 가드)', async () => {
  // 기본 콘텐츠 디렉터리(src/content) 대상 — 큐레이션으로 dead link가 생기면 실패한다.
  assert.deepEqual(await findDeadContentLinks(), []);
});
