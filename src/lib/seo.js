// SEO 정본(canonical) URL 규칙과 라우트별 메타 — prerender(entry-server)와
// generate-sitemap이 공유하는 단일 진실 공급원(SSOT).
//
// 순수 ESM(JSX·json·import.meta.glob 없이)으로 유지해 vite 번들과 node 양쪽에서
// 그대로 import할 수 있게 한다.

export const SITE_URL = 'https://justinjeong5.github.io';

export const DEFAULT_META = {
  title: '정경하 | Product-minded Frontend Engineer',
  description:
    '정경하의 개인 사이트. 제품 문제 해결, 프론트엔드, 자동화, 운영 경험을 케이스 스터디와 빌더 로그로 정리합니다.',
};

// 경로를 정본 URL로 정규화한다. 홈('/')은 루트, 나머지는 trailing slash를 붙인다.
// GitHub Pages가 /cases → /cases/로 301하므로 정본은 trailing-slash 형태다.
// query/hash가 섞여 들어와도 방어적으로 제거해 항상 path-only 정본을 만든다.
export function toCanonical(path) {
  if (!path) return `${SITE_URL}/`;
  const pathOnly = path.split(/[?#]/)[0];
  const trimmed = pathOnly.replace(/^\/+/, '').replace(/\/+$/, '');
  return trimmed ? `${SITE_URL}/${trimmed}/` : `${SITE_URL}/`;
}

// 정적 라우트별 메타. 각 페이지 h1·성격을 반영해 큐레이션한다(검색 스니펫 최적화).
// description이 없으면 DEFAULT_META.description으로 폴백한다.
export const STATIC_META = {
  '/': DEFAULT_META,
  '/cases': {
    title: '일하는 방식의 기록 | 정경하',
    description: '문제 → 의사결정(버린 선택지) → 산출물 → 임팩트로 정리한 제품·실무 케이스와 빌더 로그.',
  },
  '/notes': {
    title: '디지털 가든 | 정경하',
    description: '완성된 글이 아니라 토픽별로 자라는 디지털 가든 노트. 🌱 새싹부터 🌳 상록수까지.',
  },
  '/essays': {
    title: '긴 글로만 풀리는 생각 | 정경하',
    description: '짧은 노트로는 담기지 않는, 긴 호흡으로 풀어낸 글 모음.',
  },
  '/logs': {
    title: '빌더 로그 | 정경하',
    description: '오늘 만든 것·막힌 것·다음 시도를 시간순으로 쌓는 빌더 로그.',
  },
  '/uses': {
    title: '지금 쓰는 도구 | 정경하',
    description: '지금 일과 개발에 쓰는 하드웨어·소프트웨어·서비스 목록.',
  },
  '/now': {
    title: '지금 무엇에 집중하고 있는지 | 정경하',
    description: '요즘 무엇에 집중하고 있는지 기록하는 now 페이지.',
  },
  '/reading': {
    title: '읽은 책 · Antilibrary | 정경하',
    description: '읽은 책과 아직 읽지 않은 책(antilibrary) 기록.',
  },
  '/about': {
    title: 'About | 정경하',
    description: '정경하가 일하는 방식과 운영 원칙, 그리고 이 사이트에 대하여.',
  },
  '/cv': {
    title: '시간순 이력 | 정경하',
    description: '정경하의 시간순 경력과 이력.',
  },
};

// 경로를 STATIC_META 조회용 키로 정규화한다(query/hash 제거 + trailing-slash strip).
export function normalizePath(url) {
  const pathOnly = (url || '/').split(/[?#]/)[0].replace(/\/+$/, '');
  return pathOnly || '/';
}

// 라우트별 head 메타를 해석한다. 상세 페이지는 주입된 getter로 frontmatter를 조회한다.
// getters = { cases, notes, essays } (각 (slug) => entry|undefined).
// vite 의존(content.js)을 entry-server 쪽에 두고 이 함수는 순수하게 유지해 단위 테스트한다.
export function resolveMeta(url, getters) {
  const path = normalizePath(url);
  const canonical = toCanonical(path);

  const detail = path.match(/^\/(cases|notes|essays)\/([^/]+)$/);
  if (detail) {
    const entry = getters[detail[1]](detail[2]);
    // getAllPaths는 유효 slug만 생성한다. 매칭됐는데 콘텐츠가 없으면 회귀(콘텐츠 삭제 등)이므로
    // 홈 메타로 조용히 폴백하지 않고 throw해 빌드 실패로 조기에 드러낸다.
    if (!entry) {
      throw new Error(`resolveMeta: 알 수 없는 콘텐츠 경로 ${path} — getAllPaths의 유효 slug만 허용된다`);
    }
    return {
      title: `${entry.title} | 정경하`,
      description: entry.summary || DEFAULT_META.description,
      canonical,
    };
  }

  const meta = STATIC_META[path] || DEFAULT_META;
  return {
    title: meta.title,
    description: meta.description || DEFAULT_META.description,
    canonical,
  };
}
