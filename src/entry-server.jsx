import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { AppRoutes } from './components/App';
import {
  getAllCases,
  getAllNotes,
  getAllEssays,
  getCase,
  getNote,
  getEssay,
} from './lib/content';
import { ROUTES } from './lib/routes';
import { resolveMeta } from './lib/seo';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );
}

const DETAIL_GETTERS = { cases: getCase, notes: getNote, essays: getEssay };

// 라우트별 head 메타 생성. 라우팅/폴백 로직은 순수함수 resolveMeta(seo.js)에 있고,
// 여기서는 frontmatter getter(content.js, vite 의존)만 주입한다.
export function getMeta(url) {
  return resolveMeta(url, DETAIL_GETTERS);
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
