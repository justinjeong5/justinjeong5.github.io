import { compareContextDates } from './article-dates.js';
import { selectAllWorkArticles } from './work-paths.js';

export const PRIMARY_ARTICLES = [
  ['case', 'playhub-product-architecture'],
  ['case', 'playhub-diagnostic-sampling'],
  ['case', 'cs-workflow-product'],
  ['case', 'ai-cross-functional-delivery'],
  ['case', 'deployment-config-contracts'],
  ['case', 'frontend-delivery-boundary'],
  ['case', 'article-content-integration'],
  ['case', 'playhub-reward-reveal'],
  ['case', 'ad-preload-lifecycle'],
  ['case', 'latest-request-boundaries'],
  ['case', 'external-entry-viewport'],
  ['essay', 'automation-doesnt-reduce-work'],
];

export const ARTICLE_COLLECTIONS = [
  { id: 'stories', label: '대표 글', url: '/cases' },
  { id: 'records', label: '기술 기록', url: '/cases?view=support' },
];

export function articleCollection(entry) {
  return ARTICLE_COLLECTIONS.find((collection) => collection.id === entry?.collection);
}

export function selectEditorialArticles(cases, essays, supplementary = false) {
  return selectAllWorkArticles(cases, essays)
    .filter((entry) => entry.collection === (supplementary ? 'records' : 'stories'))
    .sort(compareContextDates);
}

export function consolidationTarget(entry) {
  return entry?.archived === true && /^\/(cases|essays)\/[a-z0-9-]+$/.test(entry.supersededBy || '') ? entry.supersededBy : null;
}
