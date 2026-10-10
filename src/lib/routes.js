export const ROUTES = {
  home: '/',
  cases: '/cases',
  caseDetail: (slug) => `/cases/${slug}`,
  notes: '/notes',
  noteDetail: (slug) => `/notes/${slug}`,
  essays: '/essays',
  essayDetail: (slug) => `/essays/${slug}`,
  logs: '/logs',
  uses: '/uses',
  now: '/now',
  reading: '/reading',
  about: '/about',
  cv: '/cv',
};

export const PRIMARY_NAV = [
  { label: '개발 경험', to: ROUTES.cases },
  { label: '기술 노트', to: ROUTES.cases + '?view=support' },
  { label: '소개', to: ROUTES.about },
];

export function isPrimaryNavActive(item, pathname, search = '', collection) {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (!item.to.startsWith(ROUTES.cases)) return path === item.to;
  const detail = /^\/(cases|essays)\/[^/]+$/.test(path);
  if (path !== ROUTES.cases && !detail) return false;
  const selected = detail ? collection : new URLSearchParams(search).get('view') === 'support' ? 'records' : 'stories';
  return selected === (item.to.includes('view=support') ? 'records' : 'stories');
}

export const SECONDARY_NAV = [
  { label: '도구', to: ROUTES.uses },
  { label: '요즘', to: ROUTES.now },
  { label: '읽은 책', to: ROUTES.reading },
];
