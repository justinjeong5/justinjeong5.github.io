// Prerender head 유틸 — 라우트별 메타를 HTML 템플릿 head에 주입하는 순수 함수들.
//
// prerender.mjs에서 분리해 단위 테스트가 가능하도록 한다(빌드 산출물 의존 없음).
// 안전 경계 assertInsideDist는 dist/ 밖 쓰기를 차단한다.

import { resolve } from 'node:path';

// SEO 가변 메타 블록. index.html에서 <!-- seo:start -->...<!-- seo:end -->로 감싼다.
const SEO_BLOCK = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;

export function htmlEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// 라우트 메타로 head의 SEO 블록 내용을 생성한다. 마커는 제거되고 메타 태그만 남는다.
// 첫 줄 들여쓰기는 템플릿의 <!-- seo:start --> 줄 들여쓰기가 그대로 남으므로 생략한다.
export function buildHeadMeta({ title, description, canonical }) {
  const e = htmlEscape;
  return [
    `<meta name="description" content="${e(description)}" />`,
    `    <meta property="og:title" content="${e(title)}" />`,
    `    <meta property="og:description" content="${e(description)}" />`,
    `    <meta property="og:url" content="${e(canonical)}" />`,
    `    <meta name="twitter:title" content="${e(title)}" />`,
    `    <meta name="twitter:description" content="${e(description)}" />`,
    `    <link rel="canonical" href="${e(canonical)}" />`,
    `    <title>${e(title)}</title>`,
  ].join('\n');
}

// 템플릿의 SEO 마커 블록을 라우트 메타로 치환한다.
// 마커가 없으면 throw해 silent fail(홈 메타 복제 회귀)을 막는다.
// replacer를 함수로 전달해 메타값의 $&·$1 등 특수 치환 패턴이 해석되지 않게 한다.
export function applyHeadMeta(template, meta) {
  if (!SEO_BLOCK.test(template)) {
    throw new Error('seo 마커(<!-- seo:start -->...<!-- seo:end -->)가 템플릿 head에 없다');
  }
  return template.replace(SEO_BLOCK, () => buildHeadMeta(meta));
}

// 안전 경계: 쓰기 대상이 dist/ 안인지 검증한다.
export function assertInsideDist(target, dist) {
  const r = resolve(target);
  const root = resolve(dist);
  if (r !== root && !r.startsWith(root + '/')) {
    throw new Error(`SAFETY: write 경로가 dist/ 밖이다: ${r}`);
  }
  return r;
}
