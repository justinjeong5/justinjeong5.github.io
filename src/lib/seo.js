// SEO 정본(canonical) URL 규칙과 라우트별 메타 — prerender(entry-server)와
// generate-sitemap이 공유하는 단일 진실 공급원(SSOT).
//
// 순수 ESM(JSX·json·import.meta.glob 없이)으로 유지해 vite 번들과 node 양쪽에서
// 그대로 import할 수 있게 한다.

export const SITE_URL = 'https://justinjeong5.github.io';

export const DEFAULT_META = {
  title: '정경하 | Frontend Engineer',
  description:
    '제품과 운영 도구를 개발하며 만난 문제, 설계 선택과 바뀐 판단을 하나의 개발 이야기로 기록합니다.',
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
    title: '개발 경험 | 정경하',
    description: '제품 개발과 깊이 있는 기술 문제를 시작부터 판단·구현·검증·결과까지 연결한 글입니다.',
  },
  '/notes': {
    title: '짧은 기록 아카이브 | 정경하',
    description: '이전에 남긴 설계 메모를 보관합니다. 최근의 개발 과정은 경험 기록에서 읽을 수 있습니다.',
  },
  '/essays': {
    title: '기술 에세이 | 정경하',
    description: '설계와 검증, 동료와의 협업, AI 위임과 제품 전달의 판단을 실제 개발 경험으로 풀어 쓴 글입니다.',
  },
  '/logs': {
    title: '지난 작업 기록 | 정경하',
    description: '이전의 시간순 작업 기록을 보관합니다. 현재는 문제와 설계 판단을 묶은 경험 기록을 중심으로 글을 씁니다.',
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
    title: '실제 기록을 먼저 읽기 | 정경하',
    description: '이전 이력 페이지 대신 판단과 구현의 기록을 읽는 안내입니다.',
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
      canonical: entry.archived === true && /^\/(cases|notes|essays)\/[^/?#]+$/.test(entry.supersededBy || '') ? toCanonical(entry.supersededBy) : canonical,
      robots: entry.archived === true ? 'noindex, follow' : 'index, follow',
      ogType: 'article',
      datePublished: entry.dateBasis === 'context' ? undefined : entry.date || undefined,
      dateModified: entry.updated || entry.lastTendedAt || (entry.dateBasis === 'context' ? undefined : entry.date) || undefined,
    };
  }

  const meta = STATIC_META[path] || DEFAULT_META;
  return {
    title: meta.title,
    description: meta.description || DEFAULT_META.description,
    canonical,
    ogType: 'website',
  };
}
