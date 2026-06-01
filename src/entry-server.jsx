import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { AppRoutes } from './components/App';
import { getAllCases, getAllNotes, getAllEssays } from './lib/content';
import { ROUTES } from './lib/routes';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );
}

export function getAllPaths() {
  const staticPaths = Object.values(ROUTES).filter((v) => typeof v === 'string');
  const dyn = (type, list) => list.map((entry) => `/${type}/${entry.slug}`);
  return [
    ...staticPaths,
    ...dyn('cases', getAllCases()),
    ...dyn('notes', getAllNotes()),
    ...dyn('essays', getAllEssays()),
  ];
}
