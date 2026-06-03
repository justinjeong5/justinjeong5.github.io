import assert from 'node:assert/strict';
import { test } from 'node:test';

import { SITE_URL, DEFAULT_META, STATIC_META, toCanonical, normalizePath, resolveMeta } from './seo.js';
import { ROUTES } from './routes.js';

test('toCanonical: 홈/빈 경로는 루트 슬래시', () => {
  assert.equal(toCanonical('/'), `${SITE_URL}/`);
  assert.equal(toCanonical(''), `${SITE_URL}/`);
  assert.equal(toCanonical(undefined), `${SITE_URL}/`);
  assert.equal(toCanonical('//'), `${SITE_URL}/`);
});

test('toCanonical: 정적/상세 경로는 trailing-slash 정본', () => {
  assert.equal(toCanonical('/cases'), `${SITE_URL}/cases/`);
  assert.equal(toCanonical('/cases/'), `${SITE_URL}/cases/`);
  assert.equal(toCanonical('/notes/my-slug'), `${SITE_URL}/notes/my-slug/`);
});

test('toCanonical: 중복/누락 슬래시 정규화', () => {
  assert.equal(toCanonical('/cases//'), `${SITE_URL}/cases/`);
  assert.equal(toCanonical('cases'), `${SITE_URL}/cases/`);
});

test('toCanonical: query/hash를 방어적으로 제거한다', () => {
  assert.equal(toCanonical('/notes/x?utm=1'), `${SITE_URL}/notes/x/`);
  assert.equal(toCanonical('/notes/x#top'), `${SITE_URL}/notes/x/`);
  assert.equal(toCanonical('/cases?a=b#c'), `${SITE_URL}/cases/`);
});

test('STATIC_META: 홈은 DEFAULT_META를 재사용한다', () => {
  assert.equal(STATIC_META['/'], DEFAULT_META);
});

test('STATIC_META: 모든 정적 라우트가 title과 description을 가진다', () => {
  for (const [path, meta] of Object.entries(STATIC_META)) {
    assert.ok(meta.title, `${path} title 누락`);
    assert.ok(meta.description, `${path} description 누락`);
  }
});

test('STATIC_META는 routes.js의 모든 정적 라우트를 커버한다 (parity)', () => {
  // 누락 시 getMeta가 DEFAULT로 폴백해 페이지별 메타가 사라지므로 드리프트를 막는다.
  const staticRoutes = Object.values(ROUTES).filter((v) => typeof v === 'string');
  for (const r of staticRoutes) {
    assert.ok(r in STATIC_META, `STATIC_META에 정적 라우트 ${r} 누락`);
  }
});

test('normalizePath: query/hash/trailing-slash 제거 후 lookup 키', () => {
  assert.equal(normalizePath('/cases/'), '/cases');
  assert.equal(normalizePath('/cases/x?a=b#c'), '/cases/x');
  assert.equal(normalizePath('/'), '/');
  assert.equal(normalizePath(''), '/');
  assert.equal(normalizePath(undefined), '/');
});

// resolveMeta는 getter를 주입받는 순수함수라 vite 없이 단위 테스트할 수 있다.
const stubGetters = {
  cases: (slug) => (slug === 'known' ? { title: '케이스 제목', summary: '케이스 요약' } : undefined),
  notes: (slug) => (slug === 'n1' ? { title: '노트 제목', summary: '' } : undefined),
  essays: () => undefined,
};

test('resolveMeta: 정적 라우트는 STATIC_META + 정본 canonical', () => {
  const m = resolveMeta('/cases', stubGetters);
  assert.equal(m.title, STATIC_META['/cases'].title);
  assert.equal(m.canonical, `${SITE_URL}/cases/`);
});

test('resolveMeta: 홈은 DEFAULT_META', () => {
  const m = resolveMeta('/', stubGetters);
  assert.equal(m.title, DEFAULT_META.title);
  assert.equal(m.canonical, `${SITE_URL}/`);
});

test('resolveMeta: 상세는 frontmatter title/summary + 정본 canonical', () => {
  const m = resolveMeta('/cases/known', stubGetters);
  assert.equal(m.title, '케이스 제목 | 정경하');
  assert.equal(m.description, '케이스 요약');
  assert.equal(m.canonical, `${SITE_URL}/cases/known/`);
});

test('resolveMeta: summary가 비면 DEFAULT description으로 폴백', () => {
  const m = resolveMeta('/notes/n1', stubGetters);
  assert.equal(m.description, DEFAULT_META.description);
});

test('resolveMeta: 존재하지 않는 slug는 throw (silent 홈 폴백 방지)', () => {
  assert.throws(() => resolveMeta('/essays/missing', stubGetters), /알 수 없는 콘텐츠/);
});

test('resolveMeta: 서로 다른 경로는 서로 다른 canonical (홈 복제 회귀 가드)', () => {
  const canons = [
    resolveMeta('/', stubGetters).canonical,
    resolveMeta('/cases', stubGetters).canonical,
    resolveMeta('/notes', stubGetters).canonical,
    resolveMeta('/cases/known', stubGetters).canonical,
  ];
  assert.equal(new Set(canons).size, 4, '경로별 canonical이 고유해야 함');
});
