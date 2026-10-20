import { compareContextDates } from './article-dates.js';
import { selectAllWorkArticles, visibleEntries } from './work-paths.js';

export const PRIMARY_ARTICLES = [
  ['case', 'pullup-record-driven-coach'],
  ['case', 'poketokenbar-account-cache'],
  ['case', 'experiment-routing-context'],
  ['case', 'shared-ad-execution-delivery'],
  ['case', 'gateway-rendering-context'],
  ['case', 'playhub-product-architecture'],
  ['case', 'advertiser-integration-workflow'],
  ['case', 'selectable-mission-product'],
  ['case', 'inapp-content-participation'],
  ['case', 'playhub-diagnostic-sampling'],
  ['case', 'cs-workflow-product'],
  ['case', 'ai-cross-functional-delivery'],
  ['case', 'deployment-config-contracts'],
  ['case', 'frontend-delivery-boundary'],
  ['case', 'article-content-integration'],
];

export const ARTICLE_COLLECTIONS = [
  { id: 'stories', label: '개발 경험', url: '/writing#all-writing' },
  { id: 'records', label: '기술 기록', url: '/writing#all-writing' },
];

export const WRITING_ARTICLES = [
  {
    slug: 'playhub-product-architecture',
    label: '제품 구축',
  },
  {
    slug: 'cs-workflow-product',
    label: '운영 도구',
  },
  {
    slug: 'playhub-diagnostic-sampling',
    label: '관측 설계',
  },
  {
    slug: 'ai-cross-functional-delivery',
    label: '서버 협업',
  },
  {
    slug: 'shared-ad-execution-delivery',
    label: '공용 광고 실행',
  },
  {
    slug: 'frontend-delivery-boundary',
    label: '개발·배포',
  },
  {
    slug: 'gateway-rendering-context',
    label: 'WebView 진입',
  },
  {
    slug: 'article-content-integration',
    label: '콘텐츠 제품',
  },
  {
    slug: 'experiment-routing-context',
    label: '추천·보너스',
  },
  {
    slug: 'pullup-record-driven-coach',
    label: '개인 제품',
  },
  {
    slug: 'poketokenbar-account-cache',
    label: '오픈소스 기여',
  },
];
export const SUBMITTED_ARTICLE_SLUGS = WRITING_ARTICLES.map((article) => article.slug);

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

export function selectWritingIndex(cases) {
  const bySlug = new Map(visibleEntries(cases).map((entry) => [entry.slug, entry]));
  return WRITING_ARTICLES.map(({ slug, label }) => {
    const entry = bySlug.get(slug);
    if (!entry) throw new Error(`글 목록의 공개 글을 찾을 수 없습니다: ${slug}`);
    if (!entry.summary?.trim()) throw new Error(`글 목록의 요약을 찾을 수 없습니다: ${slug}`);
    return { ...entry, kind: 'case', label };
  }).sort(compareContextDates);
}

export function selectTechnicalRecords(essays) {
  return visibleEntries(essays)
    .filter((entry) => entry.collection === 'records')
    .sort(compareContextDates);
}

export function consolidationTarget(entry) {
  return entry?.archived === true && (entry.supersededBy === '/writing' || /^\/(cases|notes|essays)\/[a-z0-9-]+$/.test(entry.supersededBy || '')) ? entry.supersededBy : null;
}
