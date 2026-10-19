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
  { id: 'records', label: '기술 기록', url: '/writing' },
];

export const WRITING_ARTICLES = [
  {
    slug: 'playhub-product-architecture',
    label: '제품 구축',
    situation: '앱과 외부 웹은 같은 참여 상태를 읽어도 완료를 확인하는 시점이 달랐습니다.',
    teaser: '초기 허브 출시 뒤 공통 규칙과 환경별 실행을 나눠 후속 참여에 적용했습니다.',
  },
  {
    slug: 'cs-workflow-product',
    label: '운영 도구',
    situation: '문의 처리를 요청한 뒤에도 운영 화면에는 이전 적립 상태가 남을 수 있었습니다.',
    teaser: '한 문의의 근거를 모으고, 반영을 확인하는 동안 ‘확인 중’으로 안내했습니다.',
  },
  {
    slug: 'playhub-diagnostic-sampling',
    label: '관측 설계',
    situation: '참여 흐름을 조사할 상세 기록이 필요했지만 수집량이 커졌습니다.',
    teaser: '제품 집계 이벤트는 표본에서 제외하고 진단만 기기별 고정 표본으로 줄였습니다.',
  },
  {
    slug: 'ai-cross-functional-delivery',
    label: '서버 협업',
    situation: '새 문의 기능은 화면 외에 서버의 분류 조회와 DB 값도 바뀌어야 했습니다.',
    teaser: '미지원 요청을 저장 전에 막고, DBA 반영 뒤 서버 변경을 병합했습니다.',
  },
  {
    slug: 'shared-ad-execution-delivery',
    label: '공용 광고 실행',
    situation: '다른 팀 제품은 광고 정보를 받았지만 SDK 실행 경로가 빠져 있었습니다.',
    teaser: '공용 실행 코드와 그 제품의 호출 경로를 함께 연결하고 QA 후 배포했습니다.',
  },
  {
    slug: 'frontend-delivery-boundary',
    label: '개발·배포',
    situation: '참여 화면의 문구만 바꿔도 광고 서버 배포를 기다려야 했습니다.',
    teaser: '정적 FE 앱과 검사·배포 절차를 붙여 일부 상품부터 새 경로로 옮겼습니다.',
  },
  {
    slug: 'gateway-rendering-context',
    label: 'WebView 진입',
    situation: '일부 WebView에서 중간 페이지 이동 뒤 첫 화면이 비어 보였습니다.',
    teaser: '지원 기능과 URL 반영을 확인한 뒤 같은 경로에서 목적 화면을 그리도록 바꿨습니다.',
  },
  {
    slug: 'article-content-integration',
    label: '콘텐츠 제품',
    situation: '기사 카드 시안을 제품에 쓰려면 실제 데이터와 참여·노출 기준을 연결해야 했습니다.',
    teaser: '디자이너의 시안을 제품 화면에 통합하고 새 광고 할당·복귀 조건을 맞췄습니다.',
  },
  {
    slug: 'experiment-routing-context',
    label: '추천·보너스',
    situation: '추천 배너를 누른 뒤에도 혜택과 남은 시간을 같은 기준으로 보여줘야 했습니다.',
    teaser: '추천 API와 참여 식별자·만료·실험 노출을 여러 화면에서 연결했습니다.',
  },
  {
    slug: 'pullup-record-driven-coach',
    label: '개인 제품',
    situation: '풀업 기록을 남겨도 다음 운동의 무게와 목표를 다시 계산해야 했습니다.',
    teaser: '실제 완료 기록을 다음 계획에 반영하고 기기 간 동기화까지 확장했습니다.',
  },
  {
    slug: 'poketokenbar-account-cache',
    label: '오픈소스 기여',
    situation: '계정을 바꾸면 메뉴바에 이전 계정의 사용 한도가 남을 수 있었습니다.',
    teaser: '토큰 파일과 캐시를 보완하고 공개 리뷰의 반례를 테스트에 넣었습니다.',
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
  return WRITING_ARTICLES.map(({ slug, label, situation, teaser }) => {
    const entry = bySlug.get(slug);
    if (!entry) throw new Error(`글 목록의 공개 글을 찾을 수 없습니다: ${slug}`);
    return { ...entry, kind: 'case', label, situation, teaser };
  });
}

export function consolidationTarget(entry) {
  return entry?.archived === true && (entry.supersededBy === '/writing' || /^\/(cases|notes|essays)\/[a-z0-9-]+$/.test(entry.supersededBy || '')) ? entry.supersededBy : null;
}
