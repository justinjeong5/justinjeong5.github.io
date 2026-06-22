import assert from 'node:assert/strict';
import { test } from 'node:test';

import { DEFAULT_META, SITE_URL } from './seo.js';
import { resolveMetaSafe, applyMetaToDom } from './client-meta.js';
import { buildHeadMeta } from '../../scripts/prerender-head.mjs';

const stubGetters = {
  cases: (slug) => (slug === 'known' ? { title: '케이스 제목', summary: '케이스 요약' } : undefined),
  notes: () => undefined,
  essays: () => undefined,
};

test('resolveMetaSafe: 유효 정적 경로는 resolveMeta 결과를 그대로 반환', () => {
  const m = resolveMetaSafe('/cases', stubGetters);
  assert.equal(m.canonical, `${SITE_URL}/cases/`);
  assert.equal(m.ogType, 'website');
});

test('resolveMetaSafe: 유효 상세 경로는 article 메타', () => {
  const m = resolveMetaSafe('/cases/known', stubGetters);
  assert.equal(m.title, '케이스 제목 | 정경하');
  assert.equal(m.ogType, 'article');
  assert.equal(m.canonical, `${SITE_URL}/cases/known/`);
});

test('resolveMetaSafe: 알 수 없는 상세 slug는 throw하지 않고 기본 메타로 폴백', () => {
  // resolveMeta는 throw하지만(빌드 회귀 가드), 클라이언트 런타임은 네비게이션을 깨면 안 된다.
  let m;
  assert.doesNotThrow(() => {
    m = resolveMetaSafe('/essays/missing', stubGetters);
  });
  assert.equal(m.title, DEFAULT_META.title);
  assert.equal(m.description, DEFAULT_META.description);
  assert.equal(m.ogType, 'website');
  assert.equal(m.canonical, `${SITE_URL}/essays/missing/`);
});

// ---- applyMetaToDom: fake document로 DOM 변이 검증 (jsdom 없이) ----

function makeEl() {
  return {
    textContent: '',
    attrs: {},
    setAttribute(name, value) {
      this.attrs[name] = value;
    },
  };
}

function makeFakeDoc() {
  const els = {
    title: makeEl(),
    'meta[name="description"]': makeEl(),
    'meta[property="og:type"]': makeEl(),
    'meta[property="og:title"]': makeEl(),
    'meta[property="og:description"]': makeEl(),
    'meta[property="og:url"]': makeEl(),
    'meta[name="twitter:title"]': makeEl(),
    'meta[name="twitter:description"]': makeEl(),
    'link[rel="canonical"]': makeEl(),
  };
  return {
    els,
    querySelector: (sel) => els[sel] || null,
  };
}

const sampleMeta = {
  title: '케이스 제목 | 정경하',
  description: '케이스 요약',
  canonical: `${SITE_URL}/cases/known/`,
  ogType: 'article',
};

test('applyMetaToDom: title·canonical·og·twitter·description을 모두 동기화', () => {
  const doc = makeFakeDoc();
  applyMetaToDom(doc, sampleMeta);

  assert.equal(doc.els.title.textContent, sampleMeta.title);
  assert.equal(doc.els['meta[name="description"]'].attrs.content, sampleMeta.description);
  assert.equal(doc.els['meta[property="og:type"]'].attrs.content, 'article');
  assert.equal(doc.els['meta[property="og:title"]'].attrs.content, sampleMeta.title);
  assert.equal(doc.els['meta[property="og:description"]'].attrs.content, sampleMeta.description);
  assert.equal(doc.els['meta[property="og:url"]'].attrs.content, sampleMeta.canonical);
  assert.equal(doc.els['meta[name="twitter:title"]'].attrs.content, sampleMeta.title);
  assert.equal(doc.els['meta[name="twitter:description"]'].attrs.content, sampleMeta.description);
  assert.equal(doc.els['link[rel="canonical"]'].attrs.href, sampleMeta.canonical);
});

test('applyMetaToDom: ogType 누락 시 website로 기본값', () => {
  const doc = makeFakeDoc();
  applyMetaToDom(doc, { title: 'T', description: 'D', canonical: `${SITE_URL}/x/` });
  assert.equal(doc.els['meta[property="og:type"]'].attrs.content, 'website');
});

test('applyMetaToDom: 누락된 head 요소가 있어도 throw하지 않는다', () => {
  const doc = { querySelector: () => null };
  assert.doesNotThrow(() => applyMetaToDom(doc, sampleMeta));
});

test('applyMetaToDom: doc 또는 meta가 없으면 no-op', () => {
  assert.doesNotThrow(() => applyMetaToDom(null, sampleMeta));
  assert.doesNotThrow(() => applyMetaToDom({ querySelector: () => null }, null));
});

// ---- drift 가드: prerender(buildHeadMeta) ↔ client(applyMetaToDom) 태그 셋 동기화 ----

// CSS 선택자를 태그 정체성으로 정규화한다(applyMetaToDom이 건드리는 셀렉터 → 정체성).
function tagIdFromSelector(selector) {
  if (selector === 'title') return 'title';
  const name = selector.match(/^meta\[name="([^"]+)"\]$/);
  if (name) return `name:${name[1]}`;
  const prop = selector.match(/^meta\[property="([^"]+)"\]$/);
  if (prop) return `property:${prop[1]}`;
  const link = selector.match(/^link\[rel="([^"]+)"\]$/);
  if (link) return `rel:${link[1]}`;
  throw new Error(`알 수 없는 셀렉터: ${selector}`);
}

// prerender HTML 문자열에서 가변 메타 태그 정체성을 추출한다(JSON-LD script는 대상 아님 → 자연 제외).
function tagIdsFromHtml(html) {
  const ids = new Set();
  if (/<title>/.test(html)) ids.add('title');
  for (const m of html.matchAll(/<meta\s+name="([^"]+)"/g)) ids.add(`name:${m[1]}`);
  for (const m of html.matchAll(/<meta\s+property="([^"]+)"/g)) ids.add(`property:${m[1]}`);
  for (const m of html.matchAll(/<link\s+rel="([^"]+)"/g)) ids.add(`rel:${m[1]}`);
  return ids;
}

test('drift 가드: buildHeadMeta(prerender)와 applyMetaToDom(client)은 동일한 가변 메타 태그 셋을 다룬다', () => {
  // 한쪽에만 새 필드(og:image·robots 등)가 추가되면 이 테스트가 깨져 의식적 동기화를 강제한다.
  // JSON-LD는 의도적으로 client에서 제외(크롤러 전용)되며 meta/link/title이 아니라 비교에서 빠진다.
  const meta = {
    title: 'T',
    description: 'D',
    canonical: `${SITE_URL}/cases/x/`,
    ogType: 'article',
    datePublished: '2024-01-01',
    dateModified: '2024-02-01',
  };

  const prerenderIds = tagIdsFromHtml(buildHeadMeta(meta));

  const touched = new Set();
  applyMetaToDom({ querySelector: (sel) => (touched.add(sel), null) }, meta);
  const clientIds = new Set([...touched].map(tagIdFromSelector));

  assert.deepEqual(
    [...clientIds].sort(),
    [...prerenderIds].sort(),
    'client(applyMetaToDom)와 prerender(buildHeadMeta)의 메타 태그 셋이 어긋났다 — 양쪽을 함께 갱신하라',
  );
});
