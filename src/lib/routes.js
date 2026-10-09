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
  { label: '글', to: ROUTES.cases },
  { label: '소개', to: ROUTES.about },
];

export const SECONDARY_NAV = [
  { label: '도구', to: ROUTES.uses },
  { label: '요즘', to: ROUTES.now },
  { label: '읽은 책', to: ROUTES.reading },
];
