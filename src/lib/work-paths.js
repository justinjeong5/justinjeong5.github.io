import { ROUTES } from './routes.js';

export const WORK_SERIES = 'work-evidence-2026';

export const WORK_CASE_SLUGS = [
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
    description: '입력과 필터, 부분 실패, 다음 작업을 화면의 상태·API 계약과 함께 다룬 기록.',
    caseSlugs: ['bulk-partial-results', 'automation-unknown-state', 'budget-rule-compatibility', 'retention-report-boundaries', 'experiment-routing-context', 'ad-response-recovery', 'date-filter-preset-state', 'operator-next-inquiry', 'shared-popup-locale'],
  },
  {
    id: 'contracts',
    label: '외부 응답과 상태',
    question: '통제할 수 없는 응답과 기존 계약을 어떻게 다뤘는가?',
    description: '대기와 최신 결과, 진단 정보, HTTP 응답과 묶음 결과의 계약을 구분한 기록.',
    caseSlugs: ['bridge-observation-contract', 'latest-request-boundaries', 'ad-response-recovery', 'automation-unknown-state', 'budget-rule-compatibility', 'diagnostic-error-information', 'http-test-boundary', 'grouped-response-positions'],
  },
  {
    id: 'delivery',
    label: '기술 선택과 변경',
    question: '도입 이후의 호환·회귀·전환 비용까지 설명할 수 있는가?',
    description: '빌드와 전달 구조, 브라우저 진단, 공용 기능의 의존성과 검증 경계를 다룬 기록.',
    caseSlugs: ['build-cache-compatibility', 'frontend-delivery-boundary', 'experiment-routing-context', 'bridge-observation-contract', 'external-entry-viewport', 'shared-popup-locale', 'http-test-boundary', 'diagnostic-error-information'],
  },
];

export function resolveWorkPath(id) {
  return WORK_PATHS.find((path) => path.id === id);
}

export function selectWorkCases(entries, pathId) {
  const slugs = resolveWorkPath(pathId)?.caseSlugs || WORK_CASE_SLUGS;
  const bySlug = new Map(visibleEntries(entries).filter((entry) => entry.series === WORK_SERIES).map((entry) => [entry.slug, entry]));
  return slugs.map((slug) => bySlug.get(slug)).filter(Boolean);
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
