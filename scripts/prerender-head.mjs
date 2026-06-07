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

// JSON-LD를 <script type="application/ld+json"> 태그로 직렬화한다.
// JSON.stringify 후 </script> 종료 시퀀스를 막기 위해 '</' → '<\/' 치환(XSS-safe).
export function serializeJsonLd(obj) {
  const json = JSON.stringify(obj, null, 2).replace(/<\//g, '<\\/');
  return `<script type="application/ld+json">\n${json}\n</script>`;
}

// 사이트 공통 Person 스텁(JSON-LD author 재사용).
const PERSON_STUB = {
  '@type': 'Person',
  name: '정경하',
  url: 'https://justinjeong5.github.io/',
  jobTitle: 'Product-minded Frontend Engineer',
  sameAs: ['https://github.com/justinjeong5'],
};

// 라우트 메타로 JSON-LD 구조화 데이터 객체를 생성한다.
// - 홈('/'): Person 스키마
// - 상세(ogType==='article'): Article 스키마
// - 그 외: null(JSON-LD 생략)
export function buildJsonLd({ canonical, ogType, title, description, datePublished, dateModified }) {
  if (canonical === 'https://justinjeong5.github.io/') {
    return {
      '@context': 'https://schema.org',
      ...PERSON_STUB,
    };
  }
  if (ogType === 'article') {
    const article = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      url: canonical,
      mainEntityOfPage: canonical,
      author: PERSON_STUB,
    };
    if (datePublished) article.datePublished = datePublished;
    if (dateModified) article.dateModified = dateModified;
    return article;
  }
  return null;
}

// 라우트 메타로 head의 SEO 블록 내용을 생성한다. 마커는 제거되고 메타 태그만 남는다.
// 첫 줄 들여쓰기는 템플릿의 <!-- seo:start --> 줄 들여쓰기가 그대로 남으므로 생략한다.
// ogType(기본 'website')을 og:type 태그로 항상 주입 — index.html 템플릿의 고정 og:type과 중복을 없앤다.
export function buildHeadMeta({ title, description, canonical, ogType = 'website', datePublished, dateModified }) {
  const e = htmlEscape;
  const lines = [
    `<meta name="description" content="${e(description)}" />`,
    `    <meta property="og:type" content="${e(ogType)}" />`,
    `    <meta property="og:title" content="${e(title)}" />`,
    `    <meta property="og:description" content="${e(description)}" />`,
    `    <meta property="og:url" content="${e(canonical)}" />`,
    `    <meta name="twitter:title" content="${e(title)}" />`,
    `    <meta name="twitter:description" content="${e(description)}" />`,
    `    <link rel="canonical" href="${e(canonical)}" />`,
    `    <title>${e(title)}</title>`,
  ];

  const ld = buildJsonLd({ canonical, ogType, title, description, datePublished, dateModified });
  if (ld) {
    lines.push(`    ${serializeJsonLd(ld)}`);
  }

  return lines.join('\n');
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
