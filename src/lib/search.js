import Fuse from 'fuse.js';

import {
  getAllCases,
  getAllEssays,
  getAllLogs,
  getAllNotes,
} from './content';
import { ROUTES } from './routes';
import { logUrl } from './log-url';

let cachedIndex = null;
let cachedDocs = null;

function buildDocs() {
  const cases = getAllCases().map((entry) => ({
    type: 'case',
    typeLabel: 'Case',
    slug: entry.slug,
    title: entry.title,
    summary: entry.summary || '',
    topics: entry.tags || [],
    url: ROUTES.caseDetail(entry.slug),
  }));
  const notes = getAllNotes().map((entry) => ({
    type: 'note',
    typeLabel: 'Note',
    slug: entry.slug,
    title: entry.title,
    summary: entry.summary || '',
    topics: entry.topics || [],
    growth: entry.growth || 'Seedling',
    url: ROUTES.noteDetail(entry.slug),
  }));
  const essays = getAllEssays().map((entry) => ({
    type: 'essay',
    typeLabel: 'Essay',
    slug: entry.slug,
    title: entry.title,
    summary: entry.summary || '',
    topics: [],
    url: ROUTES.essayDetail(entry.slug),
  }));
  const logs = getAllLogs().map((entry) => ({
    type: 'log',
    typeLabel: 'Log',
    slug: entry.slug,
    title: entry.title,
    summary: entry.summary || '',
    topics: [],
    date: entry.date,
    url: logUrl(entry.slug, ROUTES.logs),
  }));
  return [...cases, ...notes, ...essays, ...logs];
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

export function groupByType(results) {
  const groups = { case: [], note: [], essay: [], log: [] };
  for (const item of results) {
    if (groups[item.type]) groups[item.type].push(item);
  }
  return groups;
}
