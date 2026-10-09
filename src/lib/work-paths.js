import { ROUTES } from './routes.js';
import { compareContextDates } from './article-dates.js';

export const WORK_SERIES = 'work-evidence-2026';

export const RECOMMENDED_READS = [
  { label: '제품을 만든 과정', title: '리워드 제품의 참여 흐름을 앱과 웹에 연결하기', description: '초기 구축에서 참여 흐름, QA와 매체 출시까지.', to: ROUTES.caseDetail('playhub-product-architecture') },
  { label: '기술적으로 파고든 문제', title: '진단 로그를 줄이면서도 조사할 수 있는 흐름을 남기기', description: '제품 지표와 진단을 나누고 필요한 흐름을 남기기.', to: ROUTES.caseDetail('playhub-diagnostic-sampling') },
  { label: '운영자의 작업을 연결하기', title: '적립 문의 관리 제품을 만들고, 실사용의 시간차를 해결하기', description: '판단 근거와 상태 반영, 다음 처리의 흐름.', to: ROUTES.caseDetail('cs-workflow-product') },
];

export const WORK_TOPICS = [
  { id: 'product', label: '제품 구축·상태 설계', description: '새 제품의 핵심 FE와 운영 흐름을 만들고 출시하기',
    caseSlugs: ['playhub-product-architecture', 'playhub-product-flow', 'cs-workflow-product', 'article-content-integration', 'bulk-partial-results', 'budget-rule-compatibility', 'automation-unknown-state', 'date-filter-preset-state', 'experiment-routing-context', 'operator-next-inquiry'],
    essaySlugs: ['two-sided-market-decisions', 'why-not-traditional-resume'] },
  { id: 'runtime', label: '비동기·SDK·브라우저', description: '외부 실행과 복귀, 입력·요청의 수명을 다루기',
    caseSlugs: ['latest-request-boundaries', 'ad-preload-lifecycle', 'canvas-input-lifecycle', 'playhub-reward-reveal', 'ad-response-recovery', 'external-entry-viewport', 'shared-popup-locale'],
    essaySlugs: ['context-before-preference', 'same-defect-class-across-repos', 'silent-truncation-recurrence'] },
  { id: 'observability', label: '관측·데이터', description: '조사에 필요한 정보와 제품 지표의 의미를 지키기',
    caseSlugs: ['playhub-diagnostic-sampling', 'bridge-observation-contract', 'diagnostic-error-information', 'retention-report-boundaries'],
    essaySlugs: ['data-trust-two-sided'] },
  { id: 'tooling', label: '개발환경·검증·배포', description: '개발 구조의 전환과 기존 동작을 보존하는 검증',
    caseSlugs: ['frontend-delivery-boundary', 'deployment-config-contracts', 'build-cache-compatibility', 'http-test-boundary', 'grouped-response-positions'],
    essaySlugs: ['automation-doesnt-reduce-work', 'deterministic-design-loop'] },
  { id: 'collaboration', label: 'AI·협업', description: '팀의 병목을 맡고 동료의 판단을 구현에 연결하기',
    caseSlugs: ['ai-cross-functional-delivery'],
    essaySlugs: ['ai-coding-tools-six-months', 'self-persona-blocking', 'delegation-autonomy-calibration', 'ai-workflow-chains'] },
];

export function resolveWorkTopic(id) {
  return WORK_TOPICS.find((topic) => topic.id === id);
}

export function selectTopicArticles(cases, essays, topicId) {
  const topic = resolveWorkTopic(topicId);
  if (!topic) return [];
  const byCase = new Map(visibleEntries(cases).map((entry) => [entry.slug, entry]));
  const byEssay = new Map(visibleEntries(essays).map((entry) => [entry.slug, entry]));
  return [
    ...topic.caseSlugs.map((slug) => byCase.get(slug)).filter(Boolean).map((entry) => ({ ...entry, kind: 'case' })),
    ...topic.essaySlugs.map((slug) => byEssay.get(slug)).filter(Boolean).map((entry) => ({ ...entry, kind: 'essay' })),
  ].sort(compareContextDates);
}

export function selectAllWorkArticles(cases, essays) {
  return [
    ...selectWorkCases(cases).map((entry) => ({ ...entry, kind: 'case' })),
    ...visibleEntries(essays).map((entry) => ({ ...entry, kind: 'essay' })),
  ].sort(compareContextDates);
}

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
  return id === 'previous' || id === 'support' || resolveWorkPath(id) || resolveWorkTopic(id) ? `${ROUTES.cases}?view=${id}` : ROUTES.cases;
}

export function caseStudyUrl(slug, pathId) {
  const query = caseListUrl({ slug, series: WORK_CASE_SLUGS.includes(slug) ? WORK_SERIES : undefined }, pathId).slice(ROUTES.cases.length);
  return `${ROUTES.caseDetail(slug)}${query}`;
}

export function caseListUrl(entry, pathId) {
  if (entry.archived) return ROUTES.cases;
  if (pathId === 'support' && entry.series === WORK_SERIES) return workPathUrl('support');
  if (pathId === 'previous') return entry.series !== WORK_SERIES ? workPathUrl(pathId) : ROUTES.cases;
  if (resolveWorkTopic(pathId)?.caseSlugs.includes(entry.slug)) return workPathUrl(pathId);
  return resolveWorkPath(pathId)?.caseSlugs.includes(entry.slug) ? workPathUrl(pathId) : ROUTES.cases;
}

export function essayListUrl(slug, view) {
  if (view === 'all') return ROUTES.cases;
  if (view === 'support') return workPathUrl('support');
  return resolveWorkTopic(view)?.essaySlugs.includes(slug) ? workPathUrl(view) : ROUTES.essays;
}

export function essayStudyUrl(slug, view) {
  const retainView = view === 'all' || view === 'support' || resolveWorkTopic(view)?.essaySlugs.includes(slug);
  return `${ROUTES.essayDetail(slug)}${retainView ? `?view=${view}` : ''}`;
}

export function visibleEntries(entries) {
  return entries.filter((entry) => entry.archived !== true);
}

export function readingPathsFor(slug) {
  return WORK_PATHS.filter((path) => path.caseSlugs.includes(slug));
}
