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
  { label: 'Cases', to: ROUTES.cases },
  { label: 'Notes', to: ROUTES.notes },
  { label: 'Essays', to: ROUTES.essays },
  { label: 'Logs', to: ROUTES.logs },
  { label: 'About', to: ROUTES.about },
];

export const SECONDARY_NAV = [
  { label: 'Uses', to: ROUTES.uses },
  { label: 'Now', to: ROUTES.now },
  { label: 'Reading', to: ROUTES.reading },
  { label: 'CV', to: ROUTES.cv },
];
