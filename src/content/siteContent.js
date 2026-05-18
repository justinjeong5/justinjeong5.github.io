export const profile = {
  name: '정경하',
  role: 'Product-minded Frontend Engineer',
  headline:
    '제품 문제를 구조화하고, 프론트엔드와 자동화를 연결해 실제 운영 흐름까지 굴러가게 만드는 개발자.',
  summary:
    '기술 이름보다 사용자가 겪는 문제, 팀이 내리는 판단, 운영에서 남는 결과를 더 중요하게 봅니다. 이 사이트는 앞으로 공개 가능한 업무 사례와 배운 점을 계속 쌓아가는 신뢰 허브로 운영합니다.',
  location: 'Seoul, Korea',
  email: 'justin.jeong5@gmail.com',
  github: 'https://github.com/justinjeong5',
  avatar: 'https://github.com/justinjeong5.png?size=512',
};

export const trustSignals = [
  {
    label: '첫 판단',
    value: '10초 안에 읽히는 소개',
    detail: '방문자가 역할, 강점, 최근 관심사를 바로 파악하도록 구성합니다.',
  },
  {
    label: '증거',
    value: '프로젝트보다 사례',
    detail: '무엇을 만들었는지보다 왜 만들었고 어떤 판단을 했는지 남깁니다.',
  },
  {
    label: '지속성',
    value: '업무 로그 축적',
    detail: '공개 가능한 경험을 짧은 기록으로 쌓아 다음 대화의 재료로 만듭니다.',
  },
];

export const focusAreas = [
  '사용자가 빠르게 이해하는 인터페이스',
  '운영 흐름을 줄이는 자동화',
  '데이터와 알림을 통한 제품 판단',
  '작게 배포하고 검증하는 개발 루프',
];

export const caseStudies = [
  {
    tag: 'Current',
    title: '개인 사이트를 신뢰 허브로 재구성',
    summary:
      '기술 스택 나열형 포트폴리오를 방문자 관점의 판단 보조 페이지로 바꾸는 리빌드입니다.',
    problem:
      '오래된 포트폴리오는 어떤 사람인지보다 어떤 라이브러리를 써봤는지만 보여주고 있었습니다.',
    approach:
      '첫 화면에 역할과 강점을 압축하고, 대표 작업은 문제-판단-결과 흐름의 케이스 스터디로 분리했습니다.',
    outcome:
      '앞으로 실제 업무 사례와 회고를 계속 추가할 수 있는 데이터 중심 구조를 만들었습니다.',
    links: [
      { label: 'GitHub', href: 'https://github.com/justinjeong5/justinjeong5.github.io' },
    ],
  },
  {
    tag: 'Archive',
    title: 'React Slack',
    summary: 'WebSocket 기반 실시간 채팅 서비스 구현 경험을 정리할 수 있는 과거 프로젝트입니다.',
    problem:
      '실시간 메시지, 채널, 사용자 상태처럼 즉시성이 중요한 UI 흐름을 직접 구현해보는 것이 목표였습니다.',
    approach:
      'React UI와 Node.js 서버를 나누고, Socket.IO 기반 통신 흐름과 배포 환경을 구성했습니다.',
    outcome:
      '실시간 협업 제품의 상태 관리, 네트워크 이벤트, 배포 경험을 축적했습니다.',
    links: [
      { label: 'Live', href: 'https://slack.shinywaterjeong.com' },
      { label: 'GitHub', href: 'https://github.com/justinjeong5/react-slack' },
    ],
  },
  {
    tag: 'Archive',
    title: 'React Tweeter',
    summary: '게시글, 댓글, 좋아요 등 SNS 제품의 핵심 상호작용을 구현한 프로젝트입니다.',
    problem:
      '사용자 생성 콘텐츠가 많은 서비스에서 피드, 댓글, 반응, 인증 흐름이 어떻게 연결되는지 학습했습니다.',
    approach:
      'Next.js, Node.js, MySQL 기반으로 화면과 API를 구성하고 이미지 업로드와 배포 흐름을 다뤘습니다.',
    outcome:
      '콘텐츠 중심 제품의 데이터 모델, API 계약, UI 상태 전환 경험을 쌓았습니다.',
    links: [
      { label: 'Live', href: 'https://tweeter.shinywaterjeong.com' },
      { label: 'GitHub', href: 'https://github.com/justinjeong5/react-tweeter' },
    ],
  },
];

export const builderLogs = [
  {
    date: '2026.05.18',
    title: 'github.io 리빌드 시작',
    summary:
      '기술 스택 중심 소개를 걷어내고 신뢰 허브, 케이스 스터디, 빌더 로그 구조로 전환했습니다.',
    status: 'Shipped',
  },
  {
    date: 'Next',
    title: '업무 자동화 사례 정리',
    summary:
      '반복 작업을 줄였거나 알림/리포트/운영 흐름을 개선한 사례를 공개 가능한 범위로 정리합니다.',
    status: 'Draft',
  },
  {
    date: 'Next',
    title: '사용자 행동 기반 개선 사례 정리',
    summary:
      '방문, 전환, 응답, 사용 흐름 같은 데이터를 보고 판단을 바꾼 경험을 케이스로 남깁니다.',
    status: 'Draft',
  },
  {
    date: 'Next',
    title: '작은 실험과 배운 점 기록',
    summary:
      '업무 중 배운 UI, 자동화, 데이터 처리, 협업 패턴을 짧은 노트로 쌓아갑니다.',
    status: 'Draft',
  },
];

export const caseStudyTemplate = [
  '문제: 누가 어떤 불편을 겪었나',
  '역할: 내가 직접 판단하고 만든 부분은 무엇인가',
  '접근: 버린 선택지와 채택한 이유는 무엇인가',
  '결과: 수치, 반응, 운영 변화 중 무엇이 남았나',
  '회고: 지금 다시 한다면 무엇을 다르게 할 것인가',
];
