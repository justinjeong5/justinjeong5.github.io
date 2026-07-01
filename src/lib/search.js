import Fuse from 'fuse.js';

import {
  getAllCases,
  getAllEssays,
  getAllLogs,
  getAllNotes,
} from './content';
import { buildDocsFrom, groupByType } from './search-docs.js';

let cachedIndex = null;
let cachedDocs = null;

function buildDocs() {
  return buildDocsFrom({
    cases: getAllCases(),
    notes: getAllNotes(),
    essays: getAllEssays(),
    logs: getAllLogs(),
  });
}

function ensureIndex() {
  if (cachedIndex) return cachedIndex;
  cachedDocs = buildDocs();
  cachedIndex = new Fuse(cachedDocs, {
    keys: [
      { name: 'title', weight: 0.6 },
      { name: 'summary', weight: 0.3 },
      { name: 'topics', weight: 0.1 },
    ],
    threshold: 0.4,
    ignoreLocation: true,
    includeScore: false,
  });
  return cachedIndex;
}

export function searchAll(query, limit = 24) {
  const index = ensureIndex();
  if (!query || !query.trim()) {
    return cachedDocs.slice(0, limit);
  }
  return index.search(query, { limit }).map((result) => result.item);
}

// 순수 매핑/그룹핑은 search-docs.js가 소유한다. 기존 소비자(CommandPalette) 호환을 위해 re-export.
export { groupByType };
