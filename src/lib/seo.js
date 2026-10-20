// SEO 정본(canonical) URL 규칙과 라우트별 메타 — prerender(entry-server)와
// generate-sitemap이 공유하는 단일 진실 공급원(SSOT).
//
// 순수 ESM(JSX·json·import.meta.glob 없이)으로 유지해 vite 번들과 node 양쪽에서
// 그대로 import할 수 있게 한다.

export const SITE_URL = 'https://justinjeong5.github.io';

export const DEFAULT_META = {
  title: '정경하 | Frontend Engineer',
  description:
    '광고·리워드 제품과 운영 도구를 만들며 겪은 문제와 실제로 바꾼 부분을 기록합니다.',
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
  '/writing': {
    title: '글 | 정경하',
    description: '제품을 만들고 고치면서 직접 겪은 일을 적었습니다.',
  },
  '/cases': {
    title: '글 | 정경하',
    description: '제품을 만들고 고치면서 직접 겪은 일을 적었습니다.',
    robots: 'noindex, follow',
    canonical: toCanonical('/writing'),
  },
  '/notes': {
    title: '글 | 정경하',
    description: '제품을 만들고 고치면서 직접 겪은 일을 적었습니다.',
    robots: 'noindex, follow',
    canonical: toCanonical('/writing'),
  },
  '/essays': {
    title: '글 | 정경하',
    description: '제품을 만들고 고치면서 직접 겪은 일을 적었습니다.',
    robots: 'noindex, follow',
    canonical: toCanonical('/writing'),
  },
  '/logs': {
    title: '지난 작업 기록 | 정경하',
    description: '예전에 남긴 짧은 작업 기록입니다. 최근 글은 개발 경험에서 볼 수 있습니다.',
    robots: 'noindex, follow',
  },
  '/uses': {
    title: '2026년 5월의 도구 기록 | 정경하',
    description: '2026년 5월에 적어 둔 도구 목록입니다. 현재 사용 여부는 확인하지 않았습니다.',
    robots: 'noindex, follow',
  },
  '/now': {
    title: '2026년 5월에 남긴 기록 | 정경하',
    description: '2026년 5월에 적어 둔 관심사입니다. 지금 하는 일을 뜻하지 않습니다.',
    robots: 'noindex, follow',
  },
  '/reading': {
    title: '2026년 5월의 독서 메모 | 정경하',
    description: '2026년 5월에 적어 둔 독서 기록입니다. 현재 목록은 아닙니다.',
    robots: 'noindex, follow',
  },
  '/about': {
    title: '경력·소개 | 정경하',
    description: '버즈빌에서 광고 운영 도구부터 앱·웹 리워드 제품까지 맡아 온 경력과 대표 작업을 소개합니다.',
  },
  '/cv': {
    title: '경력·소개 | 정경하',
    description: '버즈빌에서 광고 운영 도구부터 앱·웹 리워드 제품까지 맡아 온 경력과 대표 작업을 소개합니다.',
    robots: 'noindex, follow',
    canonical: toCanonical('/about'),
  },
};

// 경로를 STATIC_META 조회용 키로 정규화한다(query/hash 제거 + trailing-slash strip).
export function normalizePath(url) {
  const pathOnly = (url || '/').split(/[?#]/)[0].replace(/\/+$/, '');
  return pathOnly || '/';
}

// cases/notes/essays 슬러그 상세 경로 정규식 — isDetailPath와 resolveMeta가 공유한다.
const DETAIL_PATH_RE = /^\/(cases|notes|essays)\/([^/]+)$/;

// 경로가 상세 페이지(cases/notes/essays 슬러그)인지 판별한다.
export function isDetailPath(path) {
  return DETAIL_PATH_RE.test(path);
}

// 라우트별 head 메타를 해석한다. 상세 페이지는 주입된 getter로 frontmatter를 조회한다.
// getters = { cases, notes, essays } (각 (slug) => entry|undefined).
// vite 의존(content.js)을 entry-server 쪽에 두고 이 함수는 순수하게 유지해 단위 테스트한다.
export function resolveMeta(url, getters) {
  const path = normalizePath(url);
  const canonical = toCanonical(path);

  const detail = path.match(DETAIL_PATH_RE);
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
      canonical: entry.archived === true && (entry.supersededBy === '/writing' || /^\/(cases|notes|essays)\/[^/?#]+$/.test(entry.supersededBy || '')) ? toCanonical(entry.supersededBy) : canonical,
      robots: entry.archived === true || entry.status === 'Draft' ? 'noindex, follow' : 'index, follow',
      ogType: entry.archived === true || entry.status === 'Draft' ? 'website' : 'article',
      datePublished: entry.dateBasis === 'context' ? undefined : entry.date || undefined,
      dateModified: entry.updated || entry.lastTendedAt || (entry.dateBasis === 'context' ? undefined : entry.date) || undefined,
    };
  }

  const meta = STATIC_META[path] || DEFAULT_META;
  return {
    title: meta.title,
    description: meta.description || DEFAULT_META.description,
    canonical: meta.canonical || canonical,
    robots: meta.robots || 'index, follow',
    ogType: 'website',
  };
}
