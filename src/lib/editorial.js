import { compareContextDates } from './article-dates.js';
import { selectAllWorkArticles, visibleEntries } from './work-paths.js';

export const PRIMARY_ARTICLES = [
  ['case', 'pullup-record-driven-coach'],
  ['case', 'poketokenbar-account-cache'],
  ['case', 'ai-product-analysis'],
  ['case', 'experiment-routing-context'],
  ['case', 'shared-ad-execution-delivery'],
  ['case', 'report-data-user-workflow'],
  ['case', 'playhub-product-architecture'],
  ['case', 'playhub-bonus-session'],
  ['case', 'advertiser-integration-workflow'],
  ['case', 'selectable-mission-product'],
  ['case', 'inapp-content-participation'],
  ['case', 'playhub-diagnostic-sampling'],
  ['case', 'cs-workflow-product'],
  ['case', 'ai-cross-functional-delivery'],
  ['case', 'deployment-config-contracts'],
  ['case', 'frontend-delivery-boundary'],
  ['case', 'article-content-integration'],
  ['case', 'playhub-reward-reveal'],
  ['case', 'ad-preload-lifecycle'],
  ['essay', 'automation-doesnt-reduce-work'],
];

export const ARTICLE_COLLECTIONS = [
  { id: 'stories', label: '개발 경험', url: '/cases' },
  { id: 'records', label: '기술 노트', url: '/cases?view=support' },
];

export function articleCollection(entry) {
  return ARTICLE_COLLECTIONS.find((collection) => collection.id === entry?.collection);
}

export function selectEditorialArticles(cases, essays, supplementary = false) {
  const personal = visibleEntries(cases)
    .filter((entry) => entry.series === 'personal-projects')
    .map((entry) => ({ ...entry, kind: 'case' }));
  return [...selectAllWorkArticles(cases, essays), ...personal]
    .filter((entry) => entry.collection === (supplementary ? 'records' : 'stories'))
    .sort(compareContextDates);
}

export function consolidationTarget(entry) {
  return entry?.archived === true && /^\/(cases|essays)\/[a-z0-9-]+$/.test(entry.supersededBy || '') ? entry.supersededBy : null;
}
