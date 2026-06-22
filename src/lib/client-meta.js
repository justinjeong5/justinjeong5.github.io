// SPA 클라이언트 라우트 변경 시 head 메타를 prerender와 동일하게 동기화하는 유틸.
//
// prerender(entry-server + prerender-head)는 초기 로드/크롤러용 정적 HTML에만 메타를 주입한다.
// 브라우저 안에서 라우트를 이동하면 그 정적 메타가 갱신되지 않으므로, 같은 메타를 런타임에
// DOM head에 반영한다. SSOT는 seo.js의 resolveMeta(빌드/런타임 공유).
//
// 순수 모듈로 유지(React·content.js 비의존)해 node 단위 테스트가 가능하다.
// document는 호출부에서 주입한다(SSR-safe: 모듈 로드 시 DOM에 접근하지 않는다).

import { resolveMeta, DEFAULT_META, toCanonical } from './seo.js';

// resolveMeta는 알 수 없는 상세 slug에 throw한다(빌드 시 콘텐츠 삭제 회귀를 조기 검출).
// 클라이언트 런타임에서는 잘못된 URL로 직접 진입해도 네비게이션이 깨지면 안 되므로
// throw를 잡아 사이트 기본 메타로 폴백한다(해당 상세 라우트는 자체 404 UI를 렌더).
export function resolveMetaSafe(url, getters) {
  try {
    return resolveMeta(url, getters);
  } catch {
    return {
      title: DEFAULT_META.title,
      description: DEFAULT_META.description,
      canonical: toCanonical(url),
      ogType: 'website',
    };
  }
}

// 라우트 메타를 document head의 가변 태그에 반영한다.
// prerender-head.mjs의 buildHeadMeta와 같은 태그 집합을 동기화한다.
// JSON-LD는 크롤러 전용(prerender HTML)이라 client 동기화 대상에서 제외한다.
// doc은 querySelector를 제공하는 객체(테스트 시 fake document 주입 가능).
export function applyMetaToDom(doc, meta) {
  if (!doc || !meta) return;

  const setText = (selector, value) => {
    const el = doc.querySelector(selector);
    if (el) el.textContent = value;
  };
  const setAttr = (selector, attr, value) => {
    const el = doc.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  };

  const ogType = meta.ogType || 'website';
  setText('title', meta.title);
  setAttr('meta[name="description"]', 'content', meta.description);
  setAttr('meta[property="og:type"]', 'content', ogType);
  setAttr('meta[property="og:title"]', 'content', meta.title);
  setAttr('meta[property="og:description"]', 'content', meta.description);
  setAttr('meta[property="og:url"]', 'content', meta.canonical);
  setAttr('meta[name="twitter:title"]', 'content', meta.title);
  setAttr('meta[name="twitter:description"]', 'content', meta.description);
  setAttr('link[rel="canonical"]', 'href', meta.canonical);
}
