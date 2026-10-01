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
];

export const WORK_PATHS = [
  {
    id: 'operator',
    label: '제품과 운영자',
    question: '사용자가 상태를 이해하고 행동할 수 있게 했는가?',
    description: '입력 순서, 부분 실패, 미확정 상태를 디자인·QA·API 계약과 함께 다룬 기록.',
    caseSlugs: ['bulk-partial-results', 'automation-unknown-state', 'budget-rule-compatibility', 'retention-report-boundaries', 'experiment-routing-context', 'ad-response-recovery'],
  },
  {
    id: 'contracts',
    label: '외부 응답과 상태',
    question: '통제할 수 없는 응답과 기존 계약을 어떻게 다뤘는가?',
    description: '대기·탈출, 관측 소비자의 오류, 이전 요청과 최신 결과의 경계를 구분한 기록.',
    caseSlugs: ['bridge-observation-contract', 'latest-request-boundaries', 'ad-response-recovery', 'automation-unknown-state', 'budget-rule-compatibility'],
  },
  {
    id: 'delivery',
    label: '기술 선택과 변경',
    question: '도입 이후의 호환·회귀·전환 비용까지 설명할 수 있는가?',
    description: '빌드 병목, 캐시 변경, 전달 구조, 리뷰에서 드러난 제약과 후속 선택의 기록.',
    caseSlugs: ['build-cache-compatibility', 'frontend-delivery-boundary', 'experiment-routing-context', 'bridge-observation-contract'],
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
