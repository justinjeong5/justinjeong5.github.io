export const ROUTES = {
  home: '/',
  writing: '/writing',
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
  { label: '대표 작업', to: ROUTES.home },
  { label: '경력·소개', to: ROUTES.about },
  { label: '글', to: ROUTES.writing },
];

export function isPrimaryNavActive(item, pathname, hasContent = true) {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (item.to === ROUTES.writing) {
    return [ROUTES.writing, ROUTES.cases, ROUTES.notes, ROUTES.essays, ROUTES.logs].includes(path)
      || (hasContent && /^\/(cases|notes|essays)\/[^/]+$/.test(path));
  }
  return path === item.to;
}
