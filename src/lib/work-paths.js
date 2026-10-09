import { ROUTES } from './routes.js';
import { compareContextDates } from './article-dates.js';

export const WORK_SERIES = 'work-evidence-2026';

export const RECOMMENDED_READS = [
  { label: '제품을 만든 과정', title: '콘텐츠 허브는 링크 목록만으로 완성되지 않았다', description: '초기 구축에서 참여 흐름, QA와 매체 출시까지.', to: ROUTES.caseDetail('playhub-product-architecture') },
  { label: '기술적으로 파고든 문제', title: '로그를 줄이면서 한 사람의 흐름은 끊지 않기', description: '제품 지표와 진단을 나누고, 필요한 흐름은 남기기.', to: ROUTES.caseDetail('playhub-diagnostic-sampling') },
  { label: '동료와 설계를 바꾸는 방식', title: '동료의 반론이 설계의 경계를 바꿀 때', description: '공용 도구와 출시 조건을 다시 정한 대화와 구현.', to: ROUTES.essayDetail('self-persona-blocking') },
];

export const WORK_CASE_SLUGS = [
  'playhub-product-architecture',
  'playhub-product-flow',
  'playhub-diagnostic-sampling',
  'deployment-config-contracts',
  'ai-cross-functional-delivery',
  'article-content-integration',
  'playhub-reward-reveal',
  'ad-preload-lifecycle',
  'canvas-input-lifecycle',
  'cs-workflow-product',
  'bulk-partial-results',
  'automation-unknown-state',
  'budget-rule-compatibility',
  'retention-report-boundaries',
  'ad-response-recovery',
  'bridge-observation-contract',
  'latest-request-boundaries',
  'build-cache-compatibility',
  'frontend-delivery-boundary',
  'experiment-routing-context',
  'external-entry-viewport',
  'diagnostic-error-information',
  'shared-popup-locale',
  'date-filter-preset-state',
  'operator-next-inquiry',
  'http-test-boundary',
  'grouped-response-positions',
];

export const WORK_PATHS = [
  {
    id: 'operator',
    label: '제품과 운영자',
    question: '사용자가 상태를 이해하고 행동할 수 있게 했는가?',
    description: '제품의 참여 규칙, 운영자의 판단, 실제 출시와 후속 개선을 연결한 기록.',
    caseSlugs: ['playhub-product-flow', 'article-content-integration', 'cs-workflow-product', 'playhub-reward-reveal', 'ai-cross-functional-delivery', 'canvas-input-lifecycle', 'bulk-partial-results', 'automation-unknown-state', 'budget-rule-compatibility', 'retention-report-boundaries', 'experiment-routing-context', 'ad-response-recovery', 'date-filter-preset-state', 'operator-next-inquiry', 'shared-popup-locale'],
  },
  {
    id: 'contracts',
    label: '외부 응답과 상태',
    question: '통제할 수 없는 응답과 기존 계약을 어떻게 다뤘는가?',
    description: '광고 준비와 완료, 복귀 상태, 진단 수집과 최신 요청의 경계를 설계한 기록.',
    caseSlugs: ['playhub-diagnostic-sampling', 'ad-preload-lifecycle', 'playhub-reward-reveal', 'playhub-product-flow', 'article-content-integration', 'deployment-config-contracts', 'bridge-observation-contract', 'latest-request-boundaries', 'ad-response-recovery', 'automation-unknown-state', 'budget-rule-compatibility', 'diagnostic-error-information', 'http-test-boundary', 'grouped-response-positions'],
  },
  {
    id: 'delivery',
    label: '기술 선택과 변경',
    question: '도입 이후의 호환·회귀·전환 비용까지 설명할 수 있는가?',
    description: '배포 도구의 설정 계약, FE 전환, 입력 경로, AI 위임 뒤 실제 전달까지 다룬 기록.',
    caseSlugs: ['deployment-config-contracts', 'ai-cross-functional-delivery', 'canvas-input-lifecycle', 'playhub-product-flow', 'ad-preload-lifecycle', 'article-content-integration', 'build-cache-compatibility', 'frontend-delivery-boundary', 'experiment-routing-context', 'bridge-observation-contract', 'external-entry-viewport', 'shared-popup-locale', 'http-test-boundary', 'diagnostic-error-information'],
  },
].map((path) => ({ ...path, caseSlugs: ['playhub-product-architecture', ...path.caseSlugs] }));

export function resolveWorkPath(id) {
  return WORK_PATHS.find((path) => path.id === id);
}

export function selectWorkCases(entries, pathId) {
  const slugs = resolveWorkPath(pathId)?.caseSlugs || WORK_CASE_SLUGS;
  const bySlug = new Map(visibleEntries(entries).filter((entry) => entry.series === WORK_SERIES).map((entry) => [entry.slug, entry]));
  return slugs.map((slug) => bySlug.get(slug)).filter(Boolean).sort(compareContextDates);
}

export function workPathUrl(id) {
  return id === 'previous' || resolveWorkPath(id) ? `${ROUTES.cases}?view=${id}` : ROUTES.cases;
}

export function caseStudyUrl(slug, pathId) {
  const query = caseListUrl({ slug, series: WORK_CASE_SLUGS.includes(slug) ? WORK_SERIES : undefined }, pathId).slice(ROUTES.cases.length);
  return `${ROUTES.caseDetail(slug)}${query}`;
}

export function caseListUrl(entry, pathId) {
  if (entry.archived) return ROUTES.cases;
  if (pathId === 'previous') return entry.series !== WORK_SERIES ? workPathUrl(pathId) : ROUTES.cases;
  return resolveWorkPath(pathId)?.caseSlugs.includes(entry.slug) ? workPathUrl(pathId) : ROUTES.cases;
}

export function visibleEntries(entries) {
  return entries.filter((entry) => entry.archived !== true);
}

export function readingPathsFor(slug) {
  return WORK_PATHS.filter((path) => path.caseSlugs.includes(slug));
}
