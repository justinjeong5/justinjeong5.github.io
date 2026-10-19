export const STORY_STARTS = [
  {
    slug: 'playhub-bonus-session',
    context: 'PlayHub · 참여',
    situation: '혜택을 참여 전에 보여줘야 할 때',
    question: '회차별 진행·완료·취소를 어떤 상태로 나눴을까?',
    scope: '참여 전 혜택과 보너스 상품의 구현·출시',
    related: [{ slug: 'playhub-reward-reveal', reason: '참여 뒤 지급된 보상의 안내가 사라진 경우' }],
  },
  {
    slug: 'ad-preload-lifecycle',
    context: 'PlayHub · 광고 SDK',
    situation: '광고 대기를 줄이려고 미리 준비할 때',
    question: 'SDK 준비와 실제 광고 표시·집계를 어떻게 구별했을까?',
    scope: '공급사 클릭 원인은 추론 단계였고 속도 효과는 통제 실험으로 입증하지 않았습니다.',
    related: [{ slug: 'shared-ad-execution-delivery', reason: '여러 제품에서 쓸 광고 실행의 책임 경계' }],
  },
  {
    slug: 'advertiser-integration-workflow',
    context: '광고주 도구',
    situation: '첫 연동 테스트가 집행 판단을 막을 때',
    question: '입력·테스트 링크·전환 조회를 다음 결정에 어떻게 연결했을까?',
    scope: '광고주의 실제 검증과 첫 테스트를 막던 조건의 후속 수정',
  },
  {
    slug: 'report-data-user-workflow',
    context: '고객 리포트',
    situation: '내려받은 날짜를 계산에 쓰지 못할 때',
    question: '표시 문제가 아니라 자료형·고객의 후속 업무 문제라고 어떻게 다시 정의했을까?',
    scope: '기존 리포트의 개선이며 신규 제품 전체의 단독 구축은 아닙니다.',
  },
  {
    slug: 'shared-ad-execution-delivery',
    context: '공용 광고 실행',
    situation: '다른 제품에서도 같은 광고 실행이 필요할 때',
    question: '제품의 후보 순회와 공급사의 실행 책임을 어디서 나눴을까?',
    scope: '다른 제품의 호출 경로와 타팀 QA·배포까지 연결한 범위',
    related: [{ slug: 'ad-preload-lifecycle', reason: '실제 SDK 준비·표시·공급사 관측의 경계' }],
  },
  {
    slug: 'frontend-delivery-boundary',
    context: '프론트엔드 전달',
    situation: '화면 변경도 서버 배포를 기다릴 때',
    question: '기존 인프라를 유지하며 어떤 참여 화면부터 분리했을까?',
    scope: '일부 상품부터 독립 FE 개발·배포로 옮긴 점진 전환',
  },
];

export const STORY_QUICK_READS = [
  {
    slug: 'cs-workflow-product',
    situation: '적립 요청은 성공했는데 운영 화면에 이전 상태가 남을 때',
    question: '요청 수락과 상태 반영을 어떻게 나누고 확인 중이라고 안내했을까?',
    note: '홈에서도 소개한 작업',
  },
  {
    slug: 'playhub-reward-reveal',
    situation: '보상은 지급됐는데 확인 화면이 사라졌을 때',
    question: '다시 지급하지 않고 안내를 어떻게 복구했을까?',
  },
];

export const TECH_STARTS = [
  {
    slug: 'latest-request-boundaries',
    situation: '이전 조회 결과가 새 보너스 준비를 덮을 때',
    question: '결과를 적용할 소유권과 이전 요청을 정리할 시점을 어떻게 정했을까?',
  },
  {
    slug: 'canvas-input-lifecycle',
    situation: '마지막 터치가 Canvas에서 반응하지 않을 때',
    question: '입력이 도착했는지와 Canvas가 준비됐는지를 어떻게 따로 확인했을까?',
  },
  {
    slug: 'ad-response-recovery',
    situation: '광고 응답을 기다리는데 완료 신호가 오지 않을 때',
    question: '기다릴지 기존 건너뛰기 경로로 나갈지의 선택을 어떻게 남겼을까?',
  },
  {
    slug: 'bulk-partial-results',
    situation: '일괄 저장에서 일부만 성공했을 때',
    question: '이미 끝난 항목과 아직 남은 입력을 어떻게 구별했을까?',
  },
  {
    slug: 'date-filter-preset-state',
    situation: '달력의 선택 날짜와 조회 기간이 다를 때',
    question: '선택 표시·초기화·실제 요청의 기간을 어떻게 맞췄을까?',
  },
  {
    slug: 'http-test-boundary',
    situation: '함수 검사는 통과했는데 API 오류 응답이 다를 때',
    question: '내부 예외에서 실제 HTTP 소비자가 받는 계약까지 어떻게 확인했을까?',
  },
];

export const findGuideLens = (slug) => [...STORY_STARTS, ...STORY_QUICK_READS, ...TECH_STARTS]
  .find((item) => item.slug === slug)?.question;
