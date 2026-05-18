export const profile = {
  name: '정경하',
  role: 'Product-minded Frontend Engineer',
  headline:
    '제품 문제를 빠르게 구조화하고, 프론트엔드와 자동화를 연결해 실제 운영 흐름까지 개선합니다.',
  summary:
    '이 사이트는 이력서의 예쁜 버전이 아니라, 공개 가능한 업무 사례와 판단 과정을 계속 쌓아가는 proof-of-work 허브입니다. 지금은 뼈대를 먼저 세우고, 실제 프로젝트가 생길 때마다 증거를 채워갑니다.',
  location: 'Seoul, Korea',
  email: 'justin.jeong5@gmail.com',
  github: 'https://github.com/justinjeong5',
  avatar: 'https://github.com/justinjeong5.png?size=512',
  currentFocus: [
    '반복 운영 업무를 줄이는 자동화',
    '사용자 행동 데이터를 읽는 제품 개선',
    '작게 배포하고 검증하는 프론트엔드 루프',
  ],
};

export const heroProof = [
  {
    label: 'What I optimize',
    value: '판단 속도',
    detail: '모호한 요청을 문제, 사용자, 성공 조건으로 쪼개 실행 가능한 단위로 만듭니다.',
  },
  {
    label: 'How I ship',
    value: '작은 배포',
    detail: '큰 개편도 먼저 검증 가능한 구조로 나누고, 빌드와 브라우저 확인까지 묶습니다.',
  },
  {
    label: 'What I record',
    value: '근거와 회고',
    detail: '성과 수치가 없으면 수치를 만들 계획까지 남겨 다음 개선의 입력으로 삼습니다.',
  },
];

export const visitorPaths = [
  {
    audience: 'Hiring manager',
    question: '이 사람이 우리 제품 문제를 맡길 수 있을까?',
    answer: '케이스 스터디에서 문제 정의, 역할, 판단, 결과를 빠르게 확인합니다.',
    anchor: '#cases',
  },
  {
    audience: 'Teammate',
    question: '같이 일하면 어떤 방식으로 움직일까?',
    answer: '운영 원칙과 피드백 루프에서 협업 방식과 검증 습관을 봅니다.',
    anchor: '#operating-system',
  },
  {
    audience: 'Future me',
    question: '업무 중 무엇을 기록해 다음 기회로 바꿀까?',
    answer: '빌더 로그와 케이스 템플릿에 공개 가능한 사례를 계속 축적합니다.',
    anchor: '#logs',
  },
];

export const operatingPrinciples = [
  {
    title: '문제를 먼저 고정합니다',
    detail:
      '화면, API, 자동화보다 먼저 누가 어떤 불편을 겪는지와 성공 조건을 문장으로 고정합니다.',
  },
  {
    title: '증거가 남는 방식으로 만듭니다',
    detail:
      '배포 링크, 로그, 스크린샷, 테스트, 전후 비교 중 최소 하나가 남도록 작업을 설계합니다.',
  },
  {
    title: '작게 배포하고 다시 읽습니다',
    detail:
      '한 번에 완성하려 하기보다 작은 릴리즈 후 사용자 반응과 운영 비용을 다시 확인합니다.',
  },
  {
    title: '다음 사람이 고치기 쉽게 둡니다',
    detail:
      '콘텐츠와 화면 구조를 분리하고, 반복되는 사례는 데이터만 추가해 확장되게 만듭니다.',
  },
];

export const evidenceSystem = [
  {
    step: '01',
    title: 'Problem',
    prompt: '누가 어떤 상황에서 막혔는지 한 문장으로 적습니다.',
    artifact: '사용자 흐름, 운영 로그, 요청 원문',
  },
  {
    step: '02',
    title: 'Decision',
    prompt: '선택지와 버린 이유를 남겨 판단력을 보여줍니다.',
    artifact: '옵션 비교, trade-off, 범위 결정',
  },
  {
    step: '03',
    title: 'Artifact',
    prompt: '실제 산출물을 볼 수 있게 링크나 캡처를 붙입니다.',
    artifact: 'PR, 데모, 스크린샷, 문서',
  },
  {
    step: '04',
    title: 'Impact',
    prompt: '수치가 있으면 수치로, 없으면 관찰 가능한 변화로 적습니다.',
    artifact: '시간 절감, 오류 감소, 응답 증가, 회고',
  },
];

export const caseStudies = [
  {
    status: 'Live case',
    title: '개인 사이트를 proof-of-work 허브로 리빌드',
    oneLine:
      '6년 전 포트폴리오를 기술 스택 나열형에서 케이스 스터디와 빌더 로그 중심의 사이트로 바꿨습니다.',
    role: '기획, 정보 구조, 프론트엔드 구현, 배포 자동화',
    timeframe: '2026.05',
    problem:
      '방문자가 “무슨 기술을 써봤는지”만 보고 떠나는 구조라, 일하는 방식과 판단 근거가 드러나지 않았습니다.',
    decisions: [
      '기술 스택 섹션을 제거하고 방문자별 질문에 답하는 구조로 재배치',
      '프로젝트 카드를 문제, 접근, 결과, 보강할 증거로 분해',
      'GitHub 프로필 사진과 GitHub Pages 자동 배포를 연결',
    ],
    evidence: ['Vite build 통과', '모바일 390px 가로 오버플로 없음', 'GitHub Pages 배포 성공'],
    impact:
      '앞으로 업무 중 공개 가능한 사례가 생기면 데이터만 추가해 사이트가 계속 살아있게 됩니다.',
    nextProof: '실제 업무 사례 2개 이상을 공개 가능한 범위로 추가하고 각 사례에 전후 근거를 붙이기',
    links: [
      { label: 'Repository', href: 'https://github.com/justinjeong5/justinjeong5.github.io' },
      { label: 'Live site', href: 'https://justinjeong5.github.io/' },
    ],
  },
  {
    status: 'To be rewritten',
    title: '운영 알림/브리핑 자동화 사례',
    oneLine:
      '반복 확인이 필요한 업무를 알림과 요약으로 바꿔, 사람이 놓치기 쉬운 운영 신호를 빠르게 보게 한 사례를 채울 예정입니다.',
    role: '문제 정의, 데이터 수집, 메시지 포맷, 자동 실행 검증',
    timeframe: 'Draft',
    problem:
      '운영 정보가 여러 곳에 흩어지면 중요한 변화가 늦게 보이고, 반복 확인이 개인의 기억에 의존하게 됩니다.',
    decisions: [
      '원본 데이터와 해석을 분리해 모바일에서 읽기 쉬운 카드로 구성',
      '중복 발송과 실패 로그를 추적 가능한 형태로 남김',
      '스케줄 실행 후 dry-run 또는 로그 확인을 검증 루프로 포함',
    ],
    evidence: ['추가 예정: 전후 업무 시간', '추가 예정: 알림 예시', '추가 예정: 실패/복구 로그'],
    impact:
      '채워 넣을 때는 “얼마나 덜 확인하게 됐는지”와 “어떤 판단이 빨라졌는지”를 중심으로 정리합니다.',
    nextProof: '공개 가능한 화면 캡처와 전후 비교 수치를 확보하기',
    links: [],
  },
  {
    status: 'Archive',
    title: 'React Slack',
    oneLine:
      '실시간 채팅 제품을 직접 만들며 이벤트 기반 UI, 상태 관리, 배포 흐름을 익힌 과거 프로젝트입니다.',
    role: '프론트엔드, 실시간 통신, 서버 연동, 배포',
    timeframe: '2020-2021',
    problem:
      '메시지, 채널, 사용자 상태처럼 즉시성이 중요한 제품에서 UI와 네트워크 이벤트가 어떻게 맞물리는지 학습해야 했습니다.',
    decisions: [
      'Socket.IO 기반으로 실시간 메시지 흐름 구현',
      '클라이언트 상태와 서버 이벤트를 분리해 화면 업데이트 구성',
      '배포 환경과 도메인 연결까지 직접 경험',
    ],
    evidence: ['Live link', 'GitHub repository', '스크린샷/회고 추가 예정'],
    impact:
      '실시간 협업 제품의 상태 전환, 이벤트 처리, 배포 경험을 만든 학습 기반 프로젝트입니다.',
    nextProof: '현재 기준으로 다시 보면 무엇을 바꿀지 회고 문서 추가',
    links: [
      { label: 'Live', href: 'https://slack.shinywaterjeong.com' },
      { label: 'GitHub', href: 'https://github.com/justinjeong5/react-slack' },
    ],
  },
];

export const builderLogs = [
  {
    date: '2026.05.18',
    title: '포트폴리오를 케이스 스터디 시스템으로 재설계',
    summary:
      '단순 자기소개 페이지가 아니라 방문자별 경로, 증거 체크리스트, 빌더 로그가 있는 구조로 바꿨습니다.',
    proof: '빌드, audit, 브라우저 검증, GitHub Pages 배포 확인',
    status: 'Shipped',
  },
  {
    date: 'Next',
    title: '업무 자동화 사례 1개를 공개 가능한 범위로 정리',
    summary:
      '반복 확인을 줄인 업무를 문제, 자동화 방식, 결과, 남은 리스크로 정리합니다.',
    proof: '필요: 전후 시간 비교 또는 알림 예시',
    status: 'Draft',
  },
  {
    date: 'Next',
    title: '제품 판단을 바꾼 데이터/사용자 흐름 사례 추가',
    summary:
      '방문, 전환, 응답, 이탈 같은 신호를 보고 어떤 결정을 바꿨는지 기록합니다.',
    proof: '필요: 익명화된 지표와 의사결정 메모',
    status: 'Draft',
  },
];

export const writingIdeas = [
  {
    title: '좋은 알림은 정보를 줄이는 것이 아니라 판단을 줄인다',
    type: 'Note',
    status: 'Idea',
  },
  {
    title: '개인 사이트를 오래 살아있게 만드는 콘텐츠 구조',
    type: 'Post',
    status: 'Draft',
  },
  {
    title: '작은 자동화에도 검증 루프가 필요한 이유',
    type: 'Memo',
    status: 'Idea',
  },
];

export const qualityRubric = [
  '첫 화면에서 역할과 강점이 10초 안에 읽힌다',
  '방문자별 탐색 경로가 있다',
  '대표 케이스가 문제, 역할, 결정, 증거, 결과를 가진다',
  '앞으로 사례를 추가하는 운영 방식이 보인다',
  '모바일에서 가로 스크롤 없이 읽힌다',
  '빌드와 audit가 통과한다',
];
