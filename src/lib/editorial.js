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

export const WRITING_SECTIONS = [
  {
    id: 'reward-products',
    label: '광고·리워드 제품',
    description: '광고·리워드 제품을 만들고 운영하며 화면, 진단, 서버 협업, 배포까지 다룬 기록입니다.',
  },
  {
    id: 'personal-and-open-source',
    label: '개인 제품과 오픈소스',
    description: '개인 앱과 외부 프로젝트에서 기능을 만들고 고친 과정입니다.',
  },
];

export const WRITING_ARTICLES = [
  {
    slug: 'playhub-product-architecture',
    label: '제품 구축',
    section: 'reward-products',
  },
  {
    slug: 'cs-workflow-product',
    label: '운영 도구',
    section: 'reward-products',
  },
  {
    slug: 'playhub-diagnostic-sampling',
    label: '관측 설계',
    section: 'reward-products',
  },
  {
    slug: 'ai-cross-functional-delivery',
    label: '서버 협업',
    section: 'reward-products',
  },
  {
    slug: 'shared-ad-execution-delivery',
    label: '공용 광고 실행',
    section: 'reward-products',
  },
  {
    slug: 'frontend-delivery-boundary',
    label: '개발·배포',
    section: 'reward-products',
  },
  {
    slug: 'gateway-rendering-context',
    label: 'WebView 진입',
    section: 'reward-products',
  },
  {
    slug: 'article-content-integration',
    label: '콘텐츠 제품',
    section: 'reward-products',
  },
  {
    slug: 'experiment-routing-context',
    label: '추천·보너스',
    section: 'reward-products',
  },
  {
    slug: 'pullup-record-driven-coach',
    label: '개인 제품',
    section: 'personal-and-open-source',
  },
  {
    slug: 'poketokenbar-account-cache',
    label: '오픈소스 기여',
    section: 'personal-and-open-source',
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
  return WRITING_ARTICLES.map(({ slug, label, section }) => {
    const entry = bySlug.get(slug);
    if (!entry) throw new Error(`글 목록의 공개 글을 찾을 수 없습니다: ${slug}`);
    if (!entry.summary?.trim()) throw new Error(`글 목록의 요약을 찾을 수 없습니다: ${slug}`);
    if (!WRITING_SECTIONS.some((item) => item.id === section)) throw new Error(`글 목록의 섹션을 찾을 수 없습니다: ${slug}`);
    return { ...entry, kind: 'case', label, section };
  }).sort(compareContextDates);
}

export function selectWritingSections(cases) {
  const articles = selectWritingIndex(cases);
  return WRITING_SECTIONS.map((section) => ({
    ...section,
    articles: articles.filter((entry) => entry.section === section.id),
  }));
}

export function writingSectionForSlug(slug) {
  const article = WRITING_ARTICLES.find((entry) => entry.slug === slug);
  return WRITING_SECTIONS.find((section) => section.id === article?.section);
}

export function selectTechnicalRecords(essays) {
  return visibleEntries(essays)
    .filter((entry) => entry.collection === 'records')
    .sort(compareContextDates);
}

export function consolidationTarget(entry) {
  return entry?.archived === true && (entry.supersededBy === '/writing' || /^\/(cases|notes|essays)\/[a-z0-9-]+$/.test(entry.supersededBy || '')) ? entry.supersededBy : null;
}
