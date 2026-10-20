import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import {
  BASE,
  STATIC_PATHS,
  parseLastmod,
  collectSlugs,
  collectUrls,
  buildXml,
} from './generate-sitemap.mjs';
import { ROUTES } from '../src/lib/routes.js';
import { STATIC_META, toCanonical } from '../src/lib/seo.js';

// 임시 content 디렉토리에 fixture mdx 파일을 만든다.
function makeFixtureContent() {
  const root = mkdtempSync(join(tmpdir(), 'sitemap-test-'));
  const write = (type, name, body) => {
    const dir = join(root, type);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, name), body);
  };
  write('cases', 'my-case.mdx', '---\ntitle: C\ndate: 2026-05-19\n---\nbody');
  write('cases', 'old-case.mdx', '---\ntitle: Old\narchived: true\nsupersededBy: "/cases/my-case"\n---\nbody');
  write('notes', 'b-note.mdx', '---\ntitle: N\nplantedAt: 2026-05-01\nlastTendedAt: 2026-05-28\n---\nbody');
  write('notes', 'a-note.mdx', '---\ntitle: N2\nplantedAt: 2026-05-02\n---\nbody');
  write('essays', 'my-essay.mdx', "---\ntitle: E\ndate: '2026-05-29'\n---\nbody");
  write('essays', 'draft-essay.mdx', '---\ntitle: Draft\nstatus: Draft\n---\nbody');
  // mdx가 아닌 파일은 무시되어야 한다.
  write('notes', 'README.md', 'not mdx');
  return root;
}

test('parseLastmod는 lastTendedAt > plantedAt > date 우선순위로 파싱', () => {
  assert.equal(parseLastmod('plantedAt: 2026-05-01\nlastTendedAt: 2026-05-28'), '2026-05-28');
  assert.equal(parseLastmod('plantedAt: 2026-05-02'), '2026-05-02');
  assert.equal(parseLastmod("date: '2026-05-29'"), '2026-05-29');
  assert.equal(parseLastmod('date: 2026-05-19'), '2026-05-19');
  assert.equal(parseLastmod('title: no date here'), null);
});

test('collectSlugs는 .mdx 파일명에서 슬러그를 추출하고 정렬한다', () => {
  const root = makeFixtureContent();
  try {
    const notes = collectSlugs('notes', { contentDir: root });
    assert.deepEqual(
      notes.map((n) => n.slug),
      ['a-note', 'b-note'], // 정렬됨, README.md 제외
    );
    assert.equal(notes.find((n) => n.slug === 'b-note').lastmod, '2026-05-28');
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('존재하지 않는 타입 디렉토리는 빈 배열', () => {
  const root = makeFixtureContent();
  try {
    assert.deepEqual(collectSlugs('nonexistent', { contentDir: root }), []);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('collectUrls는 정적 라우트를 모두 포함하고 BASE prefix를 붙인다', () => {
  const root = makeFixtureContent();
  try {
    const urls = collectUrls({ contentDir: root });
    const locs = urls.map((u) => u.loc);
    for (const path of STATIC_PATHS.filter((path) => STATIC_META[path]?.robots !== 'noindex, follow')) {
      assert.ok(locs.includes(toCanonical(path)), `정적 URL 누락: ${path}`);
    }
    for (const archived of ['/cases', '/notes', '/essays', '/uses', '/now', '/reading', '/cv']) {
      assert.ok(!locs.includes(toCanonical(archived)));
    }
    for (const loc of locs) {
      assert.ok(loc.startsWith(BASE), `BASE prefix 없음: ${loc}`);
      assert.ok(loc.endsWith('/'), `정본 URL은 trailing-slash여야 함: ${loc}`);
    }
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('collectUrls는 cases/notes/essays 상세 URL을 포함한다', () => {
  const root = makeFixtureContent();
  try {
    const locs = collectUrls({ contentDir: root }).map((u) => u.loc);
    assert.ok(locs.includes(`${BASE}/cases/my-case/`));
    assert.ok(locs.includes(`${BASE}/notes/a-note/`));
    assert.ok(locs.includes(`${BASE}/notes/b-note/`));
    assert.ok(locs.includes(`${BASE}/essays/my-essay/`));
    assert.ok(!locs.includes(`${BASE}/essays/draft-essay/`));
    assert.ok(!locs.includes(`${BASE}/cases/old-case/`));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('buildXml은 sitemap 0.9 스키마 구조를 출력한다', () => {
  const xml = buildXml([
    { loc: `${BASE}/`, lastmod: null },
    { loc: `${BASE}/notes/x/`, lastmod: '2026-05-28' },
  ]);
  assert.match(xml, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(xml, /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
  assert.match(xml, /<loc>https:\/\/justinjeong5\.github\.io\/<\/loc>/);
  assert.match(xml, /<loc>https:\/\/justinjeong5\.github\.io\/notes\/x\/<\/loc>/);
  assert.match(xml, /<lastmod>2026-05-28<\/lastmod>/);
  assert.match(xml, /<\/urlset>\n$/);
});

test('lastmod가 없는 URL은 <lastmod> 태그를 생략한다', () => {
  const xml = buildXml([{ loc: `${BASE}/uses/`, lastmod: null }]);
  assert.ok(!xml.includes('<lastmod>'), 'lastmod 없으면 태그 생략');
  assert.match(xml, /<loc>https:\/\/justinjeong5\.github\.io\/uses\/<\/loc>/);
});

test('STATIC_PATHS는 routes.js의 정적 경로와 일치한다 (parity)', () => {
  // ROUTES의 string 값(함수형 동적 라우트 제외)이 정적 경로다.
  const staticRoutes = Object.values(ROUTES)
    .filter((v) => typeof v === 'string')
    .sort();
  assert.deepEqual([...STATIC_PATHS].sort(), staticRoutes);
});
