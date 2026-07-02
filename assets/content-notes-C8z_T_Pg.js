import{n as e}from"./rolldown-runtime-QTnfLwEv.js";import{f as t,m as n}from"./content-cases-CBUDB2ZQ.js";var r=e({default:()=>te,frontmatter:()=>ee}),i=t(),ee={title:`광고 지표 함정 — CTR·CVR·viewability·정산 불일치`,growth:`Seedling`,topics:[`advertising`,`data`,`metrics`,`backend`],summary:`광고주와 매체가 같은 "클릭"을 두고 싸운다. 버그가 아니라 정의 차이였고, 나는 지표를 양면 시장의 신뢰 계약으로 바꿨다.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function a(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`같은 이름, 다른 숫자`}),`
`,(0,i.jsx)(t.p,{children:`광고주가 "클릭 수가 안 맞는다"며 정산을 걸고넘어졌다. 그쪽 대시보드는 1만 클릭, 우리 매체 대시보드는 1만 3천. 돈이 걸린 양면 시장에서 이런 숫자 분쟁은 곧 신뢰 비용이고, 한 번 터지면 광고주도 매체도 데이터 전체를 의심하기 시작한다.`}),`
`,(0,i.jsxs)(t.p,{children:[`며칠을 파보니 코드에는 버그가 없었다. 양쪽이 같은 "클릭"을 다른 `,(0,i.jsx)(t.strong,{children:`정의`}),`로 세고 있었을 뿐이다 — 분모도, 집계 윈도우도, dedup 규칙도 달랐다. 그래서 나는 개별 분쟁을 땜질하는 대신, 우리 플랫폼이 반복해서 밟던 함정 4가지를 정리하고 지표 정의 자체를 양쪽이 합의하는 계약으로 바꿨다.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정 1 — CTR의 분모`}),`
`,(0,i.jsx)(t.p,{children:`CTR = 클릭 / 노출. 단순해 보이지만 분모(노출)의 정의가 갈린다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`요청(request) 기준`}),`: 광고 요청이 온 횟수`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`응답(response) 기준`}),`: 광고를 실제로 내려준 횟수`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`렌더(rendered) 기준`}),`: 클라이언트에서 실제로 그려진 횟수`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`viewable 기준`}),`: 화면에 실제로 보인 횟수`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`같은 캠페인의 CTR이 분모를 무엇으로 잡느냐에 따라 2~3배 차이 난다. 요청 분모 CTR 1%가 viewable 분모로는 3%다.`}),`
`,(0,i.jsxs)(t.p,{children:[`→ `,(0,i.jsx)(t.strong,{children:`분모를 명시`}),`한다. "CTR"이 아니라 "viewable CTR" / "rendered CTR". 대시보드에 정의를 박는다.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정 2 — viewability 기준`}),`
`,(0,i.jsx)(t.p,{children:`"광고가 보였다"의 기준 (IAB 표준):`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`디스플레이: 픽셀의 `,(0,i.jsx)(t.strong,{children:`50%가 1초 이상`}),` 노출`]}),`
`,(0,i.jsx)(t.li,{children:`비디오: 픽셀의 50%가 2초 이상`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`그런데 측정 시점이 갈린다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`광고가 viewport에 들어온 순간?`}),`
`,(0,i.jsx)(t.li,{children:`IntersectionObserver가 50% threshold를 발화한 순간?`}),`
`,(0,i.jsx)(t.li,{children:`1초 타이머가 완료된 순간?`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`클라이언트 측정(IntersectionObserver)과 서버 집계 사이에 비동기 지연이 있으면, 사용자가 빠르게 스크롤하면 "들어왔다 나간" 노출이 viewable로 잡힐지 안 잡힐지 경계에서 흔들린다.`}),`
`,(0,i.jsxs)(t.p,{children:[`→ viewability는 `,(0,i.jsx)(t.strong,{children:`클라이언트에서 1초 타이머 완료 후에만 이벤트 전송`}),`. viewport 진입만으로 보내면 과집계.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정 3 — conversion 윈도우와 늦은 전환`}),`
`,(0,i.jsx)(t.p,{children:`conversion(전환)은 클릭 후 며칠 안의 구매를 센다. 윈도우가 정의를 바꾼다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`click-through 7일 / view-through 1일 (흔한 기본)`}),`
`,(0,i.jsx)(t.li,{children:`윈도우가 길수록 conversion ↑ (당연히)`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`늦은 전환(late conversion) 문제`}),`: 클릭은 오늘, 구매는 5일 후. 오늘 집계한 conversion에는 안 잡히고 5일 후 소급 반영된다. 그래서 `,(0,i.jsx)(t.strong,{children:`어제 숫자가 오늘 바뀐다`}),`. 실시간 대시보드를 믿은 사람은 "데이터가 변한다"고 항의.`]}),`
`,(0,i.jsxs)(t.p,{children:[`→ conversion 지표에는 `,(0,i.jsx)(t.strong,{children:`집계 기준 시각 + 윈도우`}),`를 항상 표기. "5/29 기준, 7일 윈도우"처럼. 소급 반영을 정상 동작으로 설명.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정 4 — 정산 dedup`}),`
`,(0,i.jsx)(t.p,{children:`정산은 돈이라 가장 엄격하다. 같은 클릭/전환이 두 번 세어지면 과금 분쟁.`}),`
`,(0,i.jsx)(t.p,{children:`중복 발생 원인:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`네트워크 재시도 (클라이언트가 같은 이벤트 2번 전송)`}),`
`,(0,i.jsx)(t.li,{children:`사용자 더블 클릭`}),`
`,(0,i.jsx)(t.li,{children:`봇/어뷰징`}),`
`,(0,i.jsx)(t.li,{children:`여러 디바이스의 같은 사용자`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`→ dedup 키 설계가 핵심. `,(0,i.jsx)(t.code,{children:`(user_id, ad_id, event_type, time_bucket)`}),` 같은 복합 키로 일정 윈도우 내 중복 제거. 멱등성 키 패턴이 그대로 적용된다.`]}),`
`,(0,i.jsx)(t.h2,{children:`지표 정의를 계약으로`}),`
`,(0,i.jsxs)(t.p,{children:[`위 4가지 함정은 결국 하나로 모인다. 개별 숫자를 맞추려 들면 끝없는 디버깅이지만, `,(0,i.jsx)(t.strong,{children:`지표 정의 자체를 명시적 계약`}),`으로 올려두면 분쟁의 토대가 사라진다. 그래서 나는 분쟁이 들어올 때마다 답하는 대신, 정의를 한곳에 못 박는 쪽으로 방향을 틀었다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`각 지표의 분모·집계 윈도우·dedup 규칙을 문서화`}),`
`,(0,i.jsx)(t.li,{children:`광고주·매체 양쪽에 공개`}),`
`,(0,i.jsx)(t.li,{children:`측정 도구(MMP) discrepancy 허용 범위를 사전 합의 (보통 ±10%)`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`정의가 계약이 되자 "숫자 다름"이 더는 항의가 아니라 "정의 차이"로 설명되는 대화가 됐다. 같은 질문에 매번 다시 답하지 않아도 됐다는 뜻이다.`}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`지표 이름만 같으면 같은 값이라 가정`}),`: 분모·윈도우가 다르면 다른 값. 이름에 정의를 붙인다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`실시간 대시보드를 정산 기준으로`}),`: 늦은 전환으로 숫자가 바뀐다. 정산은 윈도우 마감 후 확정값.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`클라이언트 측정을 100% 신뢰`}),`: adblock·네트워크 손실·봇으로 클라이언트 이벤트는 항상 누락/과집계. 서버 보정 필요.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`dedup 윈도우 없음`}),`: 무한 dedup은 메모리 폭발. 시간 버킷으로 윈도우 한정.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`MMP discrepancy를 버그로 취급`}),`: 측정 도구가 다르면 ±10%는 정상. 0% 일치를 기대하면 영원히 디버깅.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`양면 시장에서 "숫자가 안 맞는다"는 보통 버그가 아니라 정의 차이다. 코드를 고치는 대신 지표 정의를 양쪽의 계약으로 만들면, 신뢰 비용이 들던 분쟁이 설명 가능한 차이로 바뀐다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/essays/two-sided-market-decisions`,children:`/essays/two-sided-market-decisions`}),` — 양면 시장에서 지표가 신뢰 비용인 이유
`,(0,i.jsx)(t.a,{href:`/essays/data-trust-two-sided`,children:`/essays/data-trust-two-sided`}),` — 양쪽이 숫자를 불신하는 구조`]})]})}function te(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}var ne=e({default:()=>ie,frontmatter:()=>re}),re={title:`AI 반복 위임의 mode collapse — 출력이 한 점으로 수렴한다`,growth:`Seedling`,topics:[`ai`,`workflow`,`collaboration`,`content`],summary:`AI에게 "5개 더"를 반복했더니 다섯 묶음이 다 닮아 있었다. 다양성은 모델의 기본값이 아니다 — 워크플로우로 강제해야 나온다.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function o(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`다섯 묶음을 한자리에 놓고서야 알았다`}),`
`,(0,i.jsx)(t.p,{children:`이 사이트의 주간 글을 AI에게 맡기는 잡을 돌리고 있다. 매주 "초안 5개 써줘"를 던지고, 다음 주에 또 "5개 더"를 던졌다. 한 묶음씩 보면 매번 괜찮았다. 그러다 몇 주치를 한 화면에 펼쳐 놓고서야 보였다 — 같은 목소리, 같은 뼈대, 같은 추상화 수준. 형식도 관점도 거의 한 점으로 모여 있었다.`}),`
`,(0,i.jsxs)(t.p,{children:[`코드에서도 같은 걸 봤다. "테스트 케이스 더 만들어줘"는 같은 형태만 반복했고, "이 컴포넌트 변형 만들어줘"는 미묘하게 같은 레이아웃을 돌려줬다. 개별 산출물의 품질 문제가 아니었다. 묶음의 `,(0,i.jsx)(t.strong,{children:`분포`}),`가 죽어 있었다. 이게 mode collapse다.`]}),`
`,(0,i.jsx)(t.h2,{children:`왜 수렴하는가`}),`
`,(0,i.jsxs)(t.p,{children:[`LLM은 다음 토큰을 확률 분포에서 고른다. 별다른 제약이 없으면 `,(0,i.jsx)(t.strong,{children:`고확률 영역`}),`(가장 "전형적"인 표현)을 반복 샘플링한다. 같은 프롬프트를 반복하면 매번 그 분포의 중심 근처에서 뽑으니 출력이 한 점으로 모인다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`사람은 "지난번과 다르게 써야지"라는 메타 인지가 자동으로 작동한다. AI는 그 제약을 프롬프트에 명시하지 않으면 매 호출을 `,(0,i.jsx)(t.strong,{children:`독립적으로`}),` 처리해서 직전 출력을 회피하지 않는다.`]}),`
`,(0,i.jsx)(t.p,{children:`(용어 주의: "mode collapse"는 본래 GAN에서 생성기가 소수 출력만 내는 현상을 가리킨다. LLM의 반복 생성 수렴은 엄밀히는 mode-seeking 샘플링·낮은 다양성에 가깝지만, "출력이 한 점으로 모인다"는 직관이 같아 빌려 쓴다.)`}),`
`,(0,i.jsxs)(t.p,{children:[`핵심: `,(0,i.jsx)(t.strong,{children:`다양성은 모델의 기본값이 아니다.`}),` 명시적 제약이 없으면 평균으로 수렴한다.`]}),`
`,(0,i.jsx)(t.h2,{children:`잡 자체를 고쳤다`}),`
`,(0,i.jsx)(t.p,{children:`그래서 글쓰기 잡의 프롬프트를 바꿨다. 핵심은 매번 분포를 다른 영역으로 밀어내는 제약을 명시적으로 넣는 것이었다.`}),`
`,(0,i.jsx)(t.p,{children:`먼저 라운드마다 "이번 묶음의 시그니처"를 박아 넣었다. "5개 더"가 아니라 "직전과 다른 축으로 5개"가 프롬프트다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:`직전 5개: 메타 운영 관점, 자기 경험 소스
이번 5개: 외부 데이터 소스(API·통계), 구체 코드 중심
→ 관점·소스·추상화 수준을 직전과 다르게
`})}),`
`,(0,i.jsx)(t.p,{children:`그리고 직전에 이미 만든 것들의 목록을 회피 대상으로 같이 던진다. "이것들과 토픽·구조가 겹치지 않게." 모델이 회피 제약을 받으면 분포의 중심이 아니라 다른 영역에서 샘플링한다.`}),`
`,(0,i.jsx)(t.p,{children:`묶음 안의 분산은 차원 매트릭스로 강제했다. 5개가 각각 다른 셀을 채우도록 먼저 표를 정의해 두면, 생성이 자동으로 흩어진다.`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`항목`}),(0,i.jsx)(t.th,{children:`형식`}),(0,i.jsx)(t.th,{children:`관점`}),(0,i.jsx)(t.th,{children:`추상화`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`1`}),(0,i.jsx)(t.td,{children:`코드 노트`}),(0,i.jsx)(t.td,{children:`구체`}),(0,i.jsx)(t.td,{children:`낮음`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`2`}),(0,i.jsx)(t.td,{children:`회고`}),(0,i.jsx)(t.td,{children:`경험`}),(0,i.jsx)(t.td,{children:`중간`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`3`}),(0,i.jsx)(t.td,{children:`에세이`}),(0,i.jsx)(t.td,{children:`원칙`}),(0,i.jsx)(t.td,{children:`높음`})]})]})]}),`
`,(0,i.jsxs)(t.p,{children:[`마지막으로, 만든 뒤에 묶음을 분포로 다시 측정한다. "5개 중 4개가 같은 형식"이면 또 수렴한 것이고, 그건 `,(0,i.jsx)(t.a,{href:`/notes/coverage-gap-analysis`,children:`coverage gap 분석`}),`으로 잡는다. 사람이 눈으로 닮음을 발견하던 단계를 잡 안으로 끌어들인 셈이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`일반화 — 콘텐츠만의 문제가 아니다`}),`
`,(0,i.jsx)(t.p,{children:`mode collapse는 모든 반복 AI 위임에 나타난다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`코드 생성`}),`: 같은 패턴·같은 추상화. "다른 접근으로 한 번 더"를 명시 안 하면 첫 답의 변주만.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`테스트 생성`}),`: happy path만 반복. "엣지·에러·경계 케이스"를 차원으로 명시해야 분산.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`디자인 변형`}),`: 미묘하게 같은 레이아웃. "완전히 다른 레이아웃 원리로"를 강제.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`네이밍·카피`}),`: 같은 톤. 후보를 뽑을 때 "톤이 다른 3개"를 명시.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`"창의적으로 해줘"로 다양성 기대`}),`: 추상적 지시는 약하다. 구체적 회피 대상·차원을 명시해야 분산.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`temperature만 높이기`}),`: 무작위성은 늘지만 품질이 떨어지고 진짜 다른 관점은 안 나온다. 제약이 무작위성보다 효과적.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`한 번에 다 시키기`}),`: "20개 써줘"는 더 심한 수렴. 5개씩 + 직전 회피가 낫다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`수렴을 품질 문제로 오진`}),`: 각 항목은 잘 썼는데 묶음이 단조로운 것. 개별 품질이 아니라 분포의 문제.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`사람도 같은 함정`}),`: 사람도 관성으로 비슷하게 만든다. mode collapse는 AI 고유가 아니라 명시적 다양성 제약의 부재 문제.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`AI를 반복 위임할 때 진짜 일은 프롬프트 한 줄이 아니라, `,(0,i.jsx)(t.strong,{children:`수렴을 감지하고 분포를 다시 벌리는 루프를 잡 안에 넣는 것`}),`이다. 다양성은 모델이 주는 게 아니라 워크플로우가 만든다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/coverage-gap-analysis`,children:`/notes/coverage-gap-analysis`}),` — 생성물의 분포를 측정해 수렴 감지
`,(0,i.jsx)(t.a,{href:`/notes/operationalizing-vague-requests`,children:`/notes/operationalizing-vague-requests`}),` — "다양하게"를 측정 기준으로
`,(0,i.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 다른 모델로 분포 자체를 다양화
`,(0,i.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`}),` — 3 에이전트 경쟁도 수렴 회피의 한 형태
`,(0,i.jsx)(t.a,{href:`/essays/ai-coding-tools-six-months`,children:`/essays/ai-coding-tools-six-months`}),` — AI 도구 6개월 사용 회고`]})]})}function ie(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var ae=e({default:()=>l,frontmatter:()=>s}),s={title:`자동화 시스템 vs 거버넌스 부담 — 숨은 trade-off`,growth:`Seedling`,topics:[`workflow`,`automation`,`governance`,`tradeoff`],summary:`자동화는 사람 부담을 줄이려는 의도지만, 보안·품질 검증·운영 의지 같은 거버넌스 요구가 증가하면 net 부담은 늘 수 있다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-28`};function c(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`직관`}),`
`,(0,i.jsx)(t.p,{children:`"자동화하면 일이 줄어든다." — 보통 맞다. 하지만 항상은 아니다.`}),`
`,(0,i.jsx)(t.h2,{children:`반례`}),`
`,(0,i.jsxs)(t.p,{children:[`이번에 일일 콘텐츠 자동 추출 시스템 PoC를 4 페르소나(SWE·법무·콘텐츠·운영 사용자)로 평가했더니, 자동화가 만드는 `,(0,i.jsx)(t.strong,{children:`거버넌스 부담`}),`이 본 작업보다 클 수 있다는 결론이 나왔다.`]}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`영역`}),(0,i.jsx)(t.th,{children:`자동화 전 (수동)`}),(0,i.jsx)(t.th,{children:`자동화 후`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`작성`}),(0,i.jsx)(t.td,{children:`매일 30분`}),(0,i.jsx)(t.td,{children:`매일 0분 (자동)`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`보안 검토`}),(0,i.jsx)(t.td,{children:`N/A`}),(0,i.jsx)(t.td,{children:`false positive 컨펌, redaction 룰 튜닝`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`품질 검토`}),(0,i.jsx)(t.td,{children:`N/A`}),(0,i.jsx)(t.td,{children:`AI 톤 오염 감시, 1인칭 톤 보호`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`시스템 운영`}),(0,i.jsx)(t.td,{children:`N/A`}),(0,i.jsx)(t.td,{children:`cron·hook 유지, 사고 시 incident response`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:`합계`})}),(0,i.jsx)(t.td,{children:`30분`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:`30분 이상 가능`})})]})]})]}),`
`,(0,i.jsx)(t.h2,{children:`함의 — 자동화 전 자문할 세 가지`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:`자동화가 만드는 거버넌스 일이 자동화하는 실작업보다 작은가?`})}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`거버넌스 일은 누가 책임지는가?`}),` (자동화의 보안 사고 = 결국 사람이 수습)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`사고 1건의 비용 vs 자동화의 시간 절감 누적 가치`}),`를 비교했는가?`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`이번 PoC에서는 법무 검토자가 "현 PLAN 상태로 publish 절대 금지, 4주 dry-run 필요"라고 단호하게 못박았다. 자동화 1주 작업 vs 4주 dry-run 운영 — 시간 절감 가설이 깨진다.`}),`
`,(0,i.jsx)(t.h2,{children:`운영 사용자의 BLOCKING`}),`
`,(0,i.jsxs)(t.p,{children:[`내가 가장 두려운 건 검토 부담이 아니라 `,(0,i.jsx)(t.strong,{children:`회사 정보 유출 1건`}),`이다. 자동화 수준을 높일수록 이 리스크가 비선형으로 커진다. 익명화 필터의 false negative rate를 어떻게 측정·신뢰할지가 진짜 blocker. 이게 해결 안 되면 차라리 시스템을 안 만드는 게 낫다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`이건 SRE·법무·콘텐츠 전략가 누구도 짚지 못한 BLOCKING이었다. `,(0,i.jsx)(t.strong,{children:`본인 페르소나로 자기 평가했을 때`}),`만 나오는 솔직한 신호.`]}),`
`,(0,i.jsx)(t.h2,{children:`자동화는 일을 줄이는 게 아니라`}),`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`일의 종류를 바꾼다.`})}),`
`,(0,i.jsx)(t.p,{children:`수동 작성 → 거버넌스 운영. 둘 중 어느 쪽이 자신에게 더 sustainable한지가 결정 기준이지, "자동화 = 무조건 이득"은 아니다.`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`후속(2026-06): 이 PoC의 보수적 결론은 이후 주간 봇이 "자동 초안 작성 + PR 게이트"로 전환되며 일부 뒤집혔다. 핵심 명제는 그대로다 — 거버넌스는 사라지지 않고 "공개 전 사람이 PR을 보는 게이트" 형태로 남았다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`자동화 인프라 자체가 essential complexity인 줄 알지만 대부분 accidental complexity다 (Brooks).`}),`
`,(0,i.jsx)(t.li,{children:`자동화의 ROI 측정에는 사고 risk-adjusted 비용을 포함해야 한다 — 빈도 × 회복 비용.`}),`
`,(0,i.jsx)(t.li,{children:`"자동화하면 미래에 시간 절약" 같은 미래 가치는 할인율을 빼고 계산하기 쉽다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`}),` — 자동 라우팅이 만드는 거버넌스 부담을 dispatch 패턴 관점에서 본 사례
`,(0,i.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`/notes/one-way-two-way-door`}),` — 자동화는 보통 one-way door, 거버넌스 설계 전 의사결정 방향 확인
`,(0,i.jsx)(t.a,{href:`/notes/self-persona-evaluation`,children:`/notes/self-persona-evaluation`}),` — 같은 PoC에서 본인 페르소나가 짚은 솔직한 BLOCKING
`,(0,i.jsx)(t.a,{href:`/notes/coderabbit-cubic-double-review`,children:`/notes/coderabbit-cubic-double-review`}),` — 자동 리뷰 도구가 만드는 거버넌스 부담의 한 사례
`,(0,i.jsx)(t.a,{href:`/cases/automation-poc-design`,children:`/cases/automation-poc-design`}),` — 거버넌스 부담을 평가한 자동화 PoC 케이스
`,(0,i.jsx)(t.a,{href:`/logs#2026-06-08-writing-bot-reversal`,children:`/logs#2026-06-08-writing-bot-reversal`}),` — 이 보수적 결론을 2주 운영 후 자동 초안+PR 게이트로 전환한 후속`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}var u=e({default:()=>se,frontmatter:()=>oe}),oe={title:`코드 리뷰의 진짜 가치 — 코드보다 결정`,growth:`Budding`,topics:[`code-review`,`swe`,`decision-making`],summary:`코드 리뷰에서 가장 가치 있는 코멘트는 변수명·스타일 지적이 아니라 "이 결정의 이유는?"이다. 코드는 자명하면 충분, 결정은 자명하지 않으면 영영 잃는다.`,plantedAt:`2026-03-15`,lastTendedAt:`2026-05-28`};function d(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`흔한 코드 리뷰`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-diff`,children:`- const userCount = users.length
+ const userCount = users?.length ?? 0
`})}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`"?? 0 으로 안전하게 처리"`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`이게 잘못된 건 아닙니다. 다만 가장 큰 가치가 아닙니다.`}),`
`,(0,i.jsx)(t.h2,{children:`더 가치 있는 코멘트`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-js`,children:`// users 배열이 null일 수 있는 케이스는 OAuth race condition.
// ?? 0으로 처리하면 카운트가 잘못 표시되어 throw로 변경.
`})}),`
`,(0,i.jsxs)(t.p,{children:[`이 리뷰는 코드가 아니라 `,(0,i.jsx)(t.strong,{children:`결정`}),`에 대해 묻습니다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`왜 ?? 0이 아니라 throw인가?`}),`
`,(0,i.jsx)(t.li,{children:`race condition을 코드로 처리하지 않고 호출자에게 넘기는 결정의 근거는?`}),`
`,(0,i.jsx)(t.li,{children:`다른 race condition도 같은 패턴으로 처리해야 하는가?`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`코드는 시간이 지나면 자명해질 수 있습니다 (또는 리팩토링됩니다). 결정의 근거는 시간이 지나면 사라집니다.`}),`
`,(0,i.jsx)(t.h2,{children:`코드 리뷰 우선순위`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`결정의 이유`}),`: "왜 이 방향?" — 가장 가치 있음`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`놓친 케이스`}),`: "이 입력에서는?" — 사용자 영향 큼`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`호출자 영향`}),`: "이 변경이 X에 어떻게?" — side effect`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`유지보수성`}),`: "6개월 후 읽기 어렵다" — 중간`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`스타일·네이밍`}),`: "이름 X가 더 명확" — 가장 낮음 (linter 자동)`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`좋은 리뷰의 시그널`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`코드 라인 자체보다 PR 본문 / commit 메시지에 대한 코멘트가 많은가`}),`
`,(0,i.jsx)(t.li,{children:`"왜 이거 아닌가?"가 "이거 잘못됨"보다 많은가`}),`
`,(0,i.jsx)(t.li,{children:`approver가 코드 변경 외에 "이 코드가 사라질 때를 대비한 테스트가 있는가" 같은 영속성 질문을 하는가`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`결정 질문은 작성자가 답하기 어려움 → 리뷰 시간 ↑. 그래서 PR 본문에 미리 결정 근거 적기.`}),`
`,(0,i.jsx)(t.li,{children:`"다 잘 보였어요" 리뷰는 가치 0. 작성자에게 "결정 근거"를 묻지 않은 신호.`}),`
`,(0,i.jsx)(t.li,{children:`사소한 스타일 코멘트 5개 = 가치 있는 결정 코멘트 1개 안 됨.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`코드 리뷰는 코드를 보는 게 아니라 `,(0,i.jsx)(t.strong,{children:`이 변경이 만든 결정`}),`을 보는 일이다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 리뷰 코멘트가 부족할 때 외부 에이전트와 경쟁시켜 결정의 사각지대를 노출
`,(0,i.jsx)(t.a,{href:`/notes/coderabbit-cubic-double-review`,children:`/notes/coderabbit-cubic-double-review`}),` — 자동 리뷰는 결정보다 코드만 봄, 사람 리뷰는 결정 자리`]})]})}function se(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}var ce=e({default:()=>ue,frontmatter:()=>le}),le={title:`CodeRabbit + Cubic 이중 자동 리뷰 — 노이즈인가 신호인가`,growth:`Seedling`,topics:[`code-review`,`tools`,`automation`,`pr`],summary:`PR마다 CodeRabbit과 Cubic AI가 둘 다 리뷰를 단다. 두 자동 리뷰를 같이 쓰는 게 가치인지 노이즈인지를 며칠 써본 후의 관찰.`,plantedAt:`2026-05-26`,lastTendedAt:`2026-05-26`};function f(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`두 리뷰어가 동시에`}),`
`,(0,i.jsxs)(t.p,{children:[`5/21에 CodeRabbit config(`,(0,i.jsx)(t.code,{children:`.coderabbit.yaml`}),`)를 추가했다. 사이드 프로젝트 홈레이더에서 이미 쓰던 도구. 이 사이트에도 도입.`]}),`
`,(0,i.jsx)(t.p,{children:`문제는 이 사이트는 이미 Cubic AI가 자동 PR 리뷰를 달고 있었다는 것. PR을 올리면 두 개의 자동 리뷰가 동시에 달린다.`}),`
`,(0,i.jsx)(t.p,{children:`처음에는 직관적으로 "노이즈"라 생각했다. 같은 PR에 비슷한 지적이 두 번. 그런데 며칠 써보니 그림이 달라졌다.`}),`
`,(0,i.jsx)(t.h2,{children:`두 리뷰어가 보는 게 다르다`}),`
`,(0,i.jsxs)(t.p,{children:[`CodeRabbit과 Cubic은 같은 코드를 보는데 `,(0,i.jsx)(t.strong,{children:`다른 것에 집중`}),`한다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`CodeRabbit`}),`: 변경 라인 단위 리뷰. "이 함수 시그니처는 더 명확하게", "여기는 null check 누락", "타입 정의 위치는 다른 파일이 맞다"는 식의 구체적 지적.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`Cubic`}),`: 변경 전체의 흐름 리뷰. "이 PR의 핵심 변경이 무엇인가", "사이드 이펙트는 어디", "테스트 누락"이라는 큰 그림 지적.`]}),`
`,(0,i.jsx)(t.p,{children:`같은 코드를 보지만 시야가 다르다. 둘 다 자동인데도 겹치는 지적은 30-40% 정도다. 60-70%는 한쪽만 본 것.`}),`
`,(0,i.jsx)(t.h2,{children:`신호 vs 노이즈를 가르는 기준`}),`
`,(0,i.jsx)(t.p,{children:`이중 리뷰가 신호인지 노이즈인지를 가르는 게 있다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`신호`}),`: 한쪽만 본 지적 + 양쪽이 같이 본 지적이 둘 다 가치 있을 때.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`한쪽만 본 지적: 다른 한쪽의 사각지대를 보완한다.`}),`
`,(0,i.jsx)(t.li,{children:`양쪽 본 지적: 한 번 더 강조 신호 (둘 다 봤다는 건 진짜다).`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`노이즈`}),`: 두 리뷰가 같은 시야인데 표현만 다를 때.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`두 리뷰가 다 변경 라인만 보면: 같은 지적의 다른 표현. 노이즈.`}),`
`,(0,i.jsx)(t.li,{children:`두 리뷰가 다 큰 그림만 보면: 같은 추상화 수준의 다른 표현. 노이즈.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`CodeRabbit + Cubic은 시야가 명확히 다르다. 그래서 신호 쪽.`}),`
`,(0,i.jsx)(t.h2,{children:`비용`}),`
`,(0,i.jsx)(t.p,{children:`두 자동 리뷰의 비용은 두 가지다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`리뷰 시간`}),`: 사람이 PR을 열 때 두 리뷰를 다 읽는 시간. 한 PR당 +1-2분.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`대응 시간`}),`: 두 리뷰의 지적을 합산하면 1.5-2배. 한 리뷰만 있을 때보다 대응이 길어진다.`]}),`
`,(0,i.jsx)(t.p,{children:`이게 가치 있는가? 이 사이트 같은 1인 운영 사이트에서는 가치 있다고 본다. 이유:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`사람 리뷰어가 없다. 자동 리뷰가 유일한 외부 시야.`}),`
`,(0,i.jsx)(t.li,{children:`외부 시야가 한 종류면 같은 사각지대를 공유한다.`}),`
`,(0,i.jsx)(t.li,{children:`두 시야는 시야 자체의 다양성을 만든다.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`회사 코드처럼 사람 리뷰어가 N명 있으면 이중 자동 리뷰는 과할 수 있다. 사람 리뷰가 큰 그림을 보고 자동 리뷰가 변경 라인을 보면 충분.`}),`
`,(0,i.jsx)(t.h2,{children:`운영 팁`}),`
`,(0,i.jsx)(t.p,{children:`며칠 써본 결과 두 리뷰를 효율적으로 같이 쓰는 방법.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`CodeRabbit을 먼저 봄`}),`: 라인 단위 지적은 즉시 수정. push로 빠르게 회신.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`Cubic은 거리 두고 봄`}),`: 큰 그림 지적은 한 번 더 생각하고 답. PR 본문 보강 또는 별도 노트로 자산화.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`겹치는 지적은 한 번만 답`}),`: 두 리뷰 모두에 같은 답 다는 건 시간 낭비. 한쪽에 답하고 다른 쪽에는 "위 답변 참조".`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`약한 지적은 reject`}),`: 자동 리뷰는 false positive가 있다. 모든 지적을 적용할 의무 없음. 약한 지적은 명시적으로 reject하고 이유 적기.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`자동 리뷰가 사람 리뷰를 대체한다 착각`}),`: 자동 리뷰는 변경 라인과 흐름을 본다. `,(0,i.jsx)(t.strong,{children:`제품 의도·UX·전략`}),`은 못 본다. 그건 사람.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`자동 리뷰 지적 100% 적용`}),`: 자동 리뷰는 컨벤션 보수적이다. 의도적으로 컨벤션을 벗어난 경우도 "위반"으로 본다. 적용 vs reject 판단은 사람.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`두 리뷰 결과를 단순 합산`}),`: 두 리뷰의 시야가 다르면 합산이 의미 없다. 시야 차이를 인식하고 각자 다른 가치로 활용.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`이중 리뷰가 머지를 느리게 만듦`}),`: 두 리뷰 다 통과해야 머지하는 규칙으로 만들면 머지가 느려진다. 둘 다 참고용 — 머지 판단은 사람.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`두 리뷰가 같은 모델이면`}),`: CodeRabbit과 Cubic이 같은 LLM 백엔드를 쓰면 시야가 같을 수 있다. 시야 차이가 보장된 도구 조합인지 확인 필요.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`이중 자동 리뷰의 가치는 `,(0,i.jsx)(t.strong,{children:`시야 차이`}),`에서 나온다. 시야가 같으면 노이즈, 다르면 신호. CodeRabbit(라인) + Cubic(흐름)은 다른 시야여서 신호.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/code-review-real-value`,children:`/notes/code-review-real-value`}),` — 코드 리뷰의 진짜 가치
`,(0,i.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 두 모델 경쟁의 일반화`]})]})}function ue(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}var de=e({default:()=>pe,frontmatter:()=>fe}),fe={title:`Codex 경쟁 — 모든 작업을 두 번 굴려보기`,growth:`Evergreen`,topics:[`claude`,`workflow`,`ai`,`verification`],summary:`중요한 작업은 Claude와 Codex 두 모델에 동시에 던지고, 결론이 갈리는 지점만 사람이 판단한다. 내 검증 루프에 두 번째 모델을 상시 배치한 방식.`,plantedAt:`2026-04-25`,lastTendedAt:`2026-05-30`};function p(e){let t={a:`a`,em:`em`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:`보안 리뷰를 돌리다 Claude가 "문제 없음"을 내놨다. 같은 diff를 Codex에도 똑같이 던졌다. Codex는 한 군데를 짚었고, 다시 보니 진짜였다. 그날 이후로 나는 중요한 작업을 한 모델에만 맡기지 않는다. 코딩·추론·리뷰 — 무게가 있는 건 Claude와 Codex 두 모델에 동시에 던지고, 두 결과가 갈리는 지점을 내 검증의 출발점으로 삼는다.`}),`
`,(0,i.jsx)(t.h2,{children:`왜 두 번 굴리는가`}),`
`,(0,i.jsx)(t.p,{children:`한 모델이 만들고 그 모델이 자기 결과를 평가하는 건 confirmation bias의 함정이다. 만든 쪽과 검증하는 쪽이 같은 사각지대를 공유하기 때문이다. 그래서 검증 루프에 아예 다른 모델을 상시 한 자리 끼워 넣었다.`}),`
`,(0,i.jsx)(t.p,{children:`다른 모델(Codex)로 동일 작업을 병렬 수행하고 두 결과를 비교하면:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`양쪽 모두 같은 결론에 도달하면 신뢰도 ↑`}),`
`,(0,i.jsx)(t.li,{children:`결론이 갈리면 어디서 갈리는지가 그 자체로 디버깅 단서`}),`
`,(0,i.jsx)(t.li,{children:`한쪽만 발견한 엣지 케이스는 거의 확실히 진짜 엣지 케이스`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`트레이드오프`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`비용`}),`: 토큰 두 배. 시간도 늘어남 (직렬이면 ×2, 병렬이면 max).`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`가치`}),`: 작업 종류에 따라 다르다. 빠른 단순 코드는 경쟁 가치 ↓. 설계 결정·복잡한 리팩토링·보안 리뷰는 경쟁 가치 ↑.`]}),`
`,(0,i.jsx)(t.h2,{children:`어떻게 운영하는가`}),`
`,(0,i.jsx)(t.p,{children:`기본값은 두 번 굴리는 것이다. 설계 결정, 보안 리뷰, 복잡한 리팩토링처럼 틀렸을 때 비싼 작업은 예외 없이 Claude와 Codex 양쪽에 던진다. 반대로 한 줄 수정이나 뻔한 fetch는 경쟁의 값어치가 없어서 단독으로 끝낸다. 내가 "코덱스 없이"라고 못 박는 건 그 작업을 충분히 신뢰한다는 신호다.`}),`
`,(0,i.jsx)(t.p,{children:`두 결과가 나오면 둘 다 끝까지 읽는다. 일치하는 부분은 그대로 채택하고, 갈리는 부분만 따로 떼어 내가 직접 판단하거나 더 깊이 판다. 시간이 드는 건 언제나 이 마지막 한 조각, 두 모델이 의견을 달리한 지점이다.`}),`
`,(0,i.jsx)(t.h2,{children:`단일 모델 수렴을 깨는 도구`}),`
`,(0,i.jsxs)(t.p,{children:[`경쟁의 또 다른 가치는 `,(0,i.jsx)(t.a,{href:`/notes/ai-output-mode-collapse`,children:`단일 모델 mode collapse`}),`를 깨는 것이다. 한 모델을 반복 호출하면 그 모델 분포의 중심으로 수렴한다. 다른 모델(Codex)은 다른 분포를 가져서, 한쪽이 빠진 영역을 다른 쪽이 채운다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`그래서 경쟁은 검증 도구이자 `,(0,i.jsx)(t.strong,{children:`다양성 도구`}),`다. 같은 작업을 두 모델이 다르게 풀면, 그 차이 자체가 단일 모델로는 안 보였을 선택지 공간을 드러낸다.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`두 모델이 같은 학습 데이터 기반이면 같은 편향 공유 가능. 진짜 다른 관점이 아닐 수 있다.`}),`
`,(0,i.jsxs)(t.li,{children:[`종합 단계에서 "둘 다 비슷하니까 OK"로 빠지면 경쟁의 의미가 사라짐. `,(0,i.jsx)(t.strong,{children:`일치 자체가 검증은 아님`}),`, 일치하는 `,(0,i.jsx)(t.em,{children:`근거`}),`가 검증.`]}),`
`,(0,i.jsxs)(t.li,{children:[`두 결과가 갈릴 때 "더 그럴듯한 쪽"을 고르면 confirmation bias. 갈리는 `,(0,i.jsx)(t.em,{children:`지점`}),`을 더 깊이 파야 검증.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`한 줄로`}),`
`,(0,i.jsx)(t.p,{children:`나는 AI를 답을 받는 창구가 아니라 서로 교차 검증시키는 시스템으로 다룬다. 두 모델이 갈리는 지점에 내 판단을 집중하는 것 — 그게 내가 결과를 신뢰하는 방식이다.`}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — 사람 개입 없이 검증되는 루프
`,(0,i.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`/notes/quality-gate-loop`}),` — 결과 비교를 평가 rubric으로
`,(0,i.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`}),` — 라우팅도 경쟁으로
`,(0,i.jsx)(t.a,{href:`/notes/ai-output-mode-collapse`,children:`/notes/ai-output-mode-collapse`}),` — 단일 모델 수렴을 경쟁으로 깬다`]})]})}function pe(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}var me=e({default:()=>ge,frontmatter:()=>he}),he={title:`커버리지 갭 분석 — 강한 곳 말고 빈 곳을 측정으로 찾기`,growth:`Seedling`,topics:[`process`,`analysis`,`quality`,`testing`],summary:`사람은 잘하는 영역에 더 추가하고 빈 영역은 못 본다. 작업물의 분포를 측정하면 어디가 비었는지 객관적으로 드러난다. 테스트·콘텐츠·문서·스킬 포트폴리오 공통.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function m(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`문제 — 강한 곳에 더 쌓는 편향`}),`
`,(0,i.jsxs)(t.p,{children:[`작업물을 늘릴 때 사람은 `,(0,i.jsx)(t.strong,{children:`잘하는 영역`}),`에 더 추가한다. 프론트엔드를 잘하면 프론트엔드 글을 더 쓰고, 익숙한 모듈에 테스트를 더 짠다. 쉽고 즐거우니까.`]}),`
`,(0,i.jsxs)(t.p,{children:[`문제는 가치는 보통 `,(0,i.jsx)(t.strong,{children:`빈 영역`}),`에 있다. 이미 두꺼운 곳을 더 두껍게 하는 건 한계 효용이 낮고, 비어 있는 곳은 위험이 숨어 있다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`그런데 빈 영역은 `,(0,i.jsx)(t.strong,{children:`안 보인다`}),`. 본인 머릿속 분포는 최근 작업에 편향돼서 "골고루 하고 있다"는 착각이 든다. 측정해야 보인다.`]}),`
`,(0,i.jsx)(t.h2,{children:`해법 — 분포를 측정한다`}),`
`,(0,i.jsx)(t.p,{children:`작업물을 차원별로 집계해서 분포를 본다. 강한 셀과 빈 셀이 숫자로 드러난다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-bash`,children:`# 예: 노트를 토픽별로 집계
grep -h "^topics:" src/content/notes/*.mdx \\
  | tr -d '[]' | sed 's/topics: //' | tr ',' '\\n' \\
  | sed 's/^ *//' | sort | uniq -c | sort -rn
`})}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:`10 frontend     ← 두꺼움
 9 workflow
 5 performance
 4 backend       ← frontend의 절반
 1 security      ← 거의 빔 ← 여기
 0 testing       ← 완전히 빔 ← 여기
`})}),`
`,(0,i.jsx)(t.p,{children:`"security 1, testing 0"이 한눈에 보인다. 머릿속으로는 "골고루"였는데 측정하면 편향이 드러난다.`}),`
`,(0,i.jsx)(t.h2,{children:`어느 차원으로 자르나`}),`
`,(0,i.jsx)(t.p,{children:`같은 작업물도 자르는 차원에 따라 다른 갭이 보인다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`주제(topic)`}),`: 어느 도메인이 비었나`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`형식(format)`}),`: 어느 형태가 부족한가 (노트만 많고 케이스 없음)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`관점(perspective)`}),`: 구체 vs 추상, 기술 vs 운영`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`난이도/깊이`}),`: 입문만 많고 심화 없음`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`시간(recency)`}),`: 오래된 것만, 최근 것 없음`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`여러 차원으로 잘라봐야 한 차원에선 안 보이던 갭이 드러난다.`}),`
`,(0,i.jsx)(t.h2,{children:`일반화 — 어디에나 적용`}),`
`,(0,i.jsx)(t.p,{children:`분포 측정 → 갭 발견은 도메인 무관하게 작동한다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`테스트 커버리지`}),`: 모듈별 테스트 수. 핵심 모듈이 비었나 (라인 커버리지 %만 보면 "어느 종류"가 안 보임 — 모듈·경로별로 자른다)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`문서`}),`: 기능별 문서 유무. 자주 묻는 기능이 문서 0인가`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`에러 처리`}),`: 코드 경로별 에러 핸들링. happy path만 있고 실패 경로 비었나`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`스킬 포트폴리오`}),`: 본인 역량을 도메인별로. 한쪽만 두껍나`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`고객/매출`}),`: 세그먼트별 분포. 한 고객 의존도 과한가`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`측정 → 우선순위`}),`
`,(0,i.jsx)(t.p,{children:`갭을 찾았다고 다 채우는 게 아니다. 갭 × 중요도로 우선순위.`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`갭`}),(0,i.jsx)(t.th,{children:`중요도`}),(0,i.jsx)(t.th,{children:`우선순위`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`testing 0`}),(0,i.jsx)(t.td,{children:`높음 (회귀 위험)`}),(0,i.jsx)(t.td,{children:`1`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`security 1`}),(0,i.jsx)(t.td,{children:`높음`}),(0,i.jsx)(t.td,{children:`2`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`design 4`}),(0,i.jsx)(t.td,{children:`낮음 (충분)`}),(0,i.jsx)(t.td,{children:`—`})]})]})]}),`
`,(0,i.jsxs)(t.p,{children:[`비어 있어도 중요하지 않으면 안 채워도 된다. `,(0,i.jsx)(t.strong,{children:`빈 영역 + 높은 중요도`}),`가 진짜 타깃.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`머릿속 분포를 신뢰`}),`: "골고루 하고 있다"는 최근 편향. 반드시 측정.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`총량만 보기`}),`: "100개나 있네"는 분포를 안 보여준다. 차원별로 자른다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`한 차원만 보기`}),`: 주제로는 골고루인데 형식으로는 편향일 수 있다. 여러 차원.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`갭=무조건 채우기`}),`: 중요하지 않은 빈 곳까지 채우면 자원 낭비. 갭 × 중요도.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`커버리지 %에 속기`}),`: "80% 커버"가 핵심 경로를 포함하는지는 % 만으론 모름. 경로·모듈별로 분해.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`측정을 게임`}),`: "갭 0 만들기"가 목표가 되면 억지로 채운 저품질이 분포만 채운다. 측정은 방향이지 점수가 아님.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`사람은 강한 곳에 더 쌓고 빈 곳을 못 본다. `,(0,i.jsx)(t.strong,{children:`작업물의 분포를 차원별로 측정`}),`하면 머릿속 편향이 숫자로 드러난다. 그다음 갭 × 중요도로 우선순위를 정해 빈 곳을 채운다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/ai-output-mode-collapse`,children:`/notes/ai-output-mode-collapse`}),` — 생성물 분포 측정으로 수렴 감지
`,(0,i.jsx)(t.a,{href:`/notes/recurring-trap-to-checklist`,children:`/notes/recurring-trap-to-checklist`}),` — 빈 곳에 숨은 위험을 검사로
`,(0,i.jsx)(t.a,{href:`/notes/recruiter-10-seconds`,children:`/notes/recruiter-10-seconds`}),` — 포트폴리오의 분포가 첫인상을 결정`]})]})}function ge(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}var _e=e({default:()=>ye,frontmatter:()=>ve}),ve={title:`일일 카운트는 자정이 아니라 비즈니스 경계에 앵커한다 — 일일 집계·cap·랭킹의 자정 선점`,growth:`Seedling`,topics:[`backend`,`distributed`,`timezone`,`scheduling`],summary:`하루 단위 집계·상한을 UTC나 서버 로컬 자정에 묶으면 자정 직전 항목이 다음 날 버킷을 미리 선점한다. 의미 있는 운영 경계 시각에 명시적으로 앵커한다.`,plantedAt:`2026-06-18`,lastTendedAt:`2026-06-18`};function h(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`문제 — "하루"의 경계가 암묵적이다`}),`
`,(0,i.jsx)(t.p,{children:`daily-cap("하루 N건까지"), 랭킹 기준일, 일일 집계 — 전부 "하루"라는 버킷 경계가 필요하다. 그런데 그 경계가 어디인지 명시하지 않으면, 대개 두 기본값 중 하나로 조용히 떨어진다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`UTC 자정`}),`: `,(0,i.jsx)(t.code,{children:`datetime.utcnow().date()`}),` 또는 `,(0,i.jsx)(t.code,{children:`floor(ts / 86400)`})]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`서버 로컬 자정`}),`: 서버 타임존에 따라 달라짐 (배포 환경마다 다를 수 있음)`]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`둘 다 "사용자가 체감하는 하루"와 어긋난다. KST(UTC+9) 사용자에게 UTC 자정은 `,(0,i.jsx)(t.strong,{children:`오전 9시`}),`다. 운영팀이 보는 하루, 사용자가 느끼는 하루, 코드가 세는 하루가 전부 다른 시각에 리셋된다.`]}),`
`,(0,i.jsx)(t.h2,{children:`자정 선점 — 경계 직전 항목이 다음 날을 먹는다`}),`
`,(0,i.jsx)(t.p,{children:`가장 사고가 잘 나는 지점은 경계 근처다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:`하루 cap = 3, 경계 = UTC 자정
23:56 UTC  알림 1  → 오늘 버킷  (오늘 1건)
23:58 UTC  알림 2  → 오늘 버킷  (오늘 2건)
23:59 UTC  알림 3  → 오늘 버킷  (오늘 3건 = cap 도달)
00:00 UTC  알림 4  → 내일 버킷  (내일 1건)  ← 4분 만에 4건이지만 cap 미위반
`})}),`
`,(0,i.jsxs)(t.p,{children:[`사용자는 4분 안에 4건을 받았는데 daily-cap은 모두 통과한다. 오늘 버킷은 cap(3)까지 정확히 찼고, 4번째 알림은 자정을 막 넘긴 "내일" 버킷에 `,(0,i.jsx)(t.strong,{children:`선점(preempt)`}),` 됐기 때문이다. 카운팅 로직은 한 건도 틀리지 않았는데, 경계가 사용자 의미와 어긋난 탓에 실제 체감은 "4분에 4건"이 된다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`이건 정렬·재시도·timeout 같은 분산 문제가 아니라 `,(0,i.jsx)(t.strong,{children:`버킷 경계를 잘못 그은`}),` 문제다. 카운팅 로직이 아무리 정확해도, 경계가 사용자 의미와 어긋나면 cap은 의도대로 동작하지 않는다.`]}),`
`,(0,i.jsx)(t.h2,{children:`해결 — 의미 있는 운영 경계에 명시적으로 앵커`}),`
`,(0,i.jsxs)(t.p,{children:[`"하루"를 자정이 아니라 `,(0,i.jsx)(t.strong,{children:`운영상 의미 있는 시각`}),`에 앵커한다. 예를 들어 알림이 오전에 시작되는 서비스라면, 사용자 타임존 기준 이른 아침을 하루 경계로 잡는다. 핵심은 경계가 "아무도 활동하지 않는 시각"에 오도록 골라, 경계 폭발이 실제 사용자에게 닿지 않게 하는 것이다.`]}),`
`,(0,i.jsx)(t.p,{children:`(아래는 개념 전달용 일반 예시다. 특정 서비스의 코드가 아니다.)`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-python`,children:`from datetime import time, date, timedelta
from zoneinfo import ZoneInfo  # Python 3.9+ 표준 라이브러리

# 경계를 코드 상수로 박는다 — 자정이 아니라 운영 시작 시각
BUSINESS_TZ = ZoneInfo("Asia/Seoul")
DAY_ANCHOR = time(7, 0)  # 매일 07:00 KST에 새 "하루"가 시작

def business_day(ts) -> date:
    """경계 이전이면 전날로 귀속시킨 '비즈니스 기준일'을 돌려준다."""
    local = ts.astimezone(BUSINESS_TZ)
    if local.time() < DAY_ANCHOR:
        local -= timedelta(days=1)
    return local.date()
`})}),`
`,(0,i.jsxs)(t.p,{children:[`그리고 `,(0,i.jsx)(t.strong,{children:`모든 비교를 이 기준일로`}),` 한다. cap 키, 집계 GROUP BY, 랭킹 기준일이 전부 `,(0,i.jsx)(t.code,{children:`business_day(ts)`}),`를 거치게 만든다. 일부만 자정 기준이고 일부만 앵커 기준이면 경계가 둘로 쪼개져 더 나쁘다.`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-python`,children:`key = f"cap:{user_id}:{business_day(now)}"  # date()가 아니라 business_day()
`})}),`
`,(0,i.jsx)(t.h2,{children:`왜 상수로 박아야 하나`}),`
`,(0,i.jsx)(t.p,{children:`경계 시각을 환경 변수나 요청 타임존에서 동적으로 끌어오면, 배포·리전·서버 시간대에 따라 경계가 흔들린다. 경계가 흔들리면 같은 사건이 환경마다 다른 버킷에 들어가 디버깅이 불가능해진다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`타임존을 IANA 이름으로`}),` (`,(0,i.jsx)(t.code,{children:`Asia/Seoul`}),`), `,(0,i.jsx)(t.code,{children:`UTC+9`}),` 같은 오프셋 하드코딩 금지 — DST·서머타임 변경을 라이브러리가 처리한다 (KST는 DST가 없지만, 이 원칙은 DST 있는 타임존에서 사고를 막는다)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`앵커 시각을 명시 상수로`}),` — 코드를 읽는 사람이 "하루가 언제 시작하는지" 한 줄로 안다`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`단위 테스트로 경계를 고정`}),` — 앵커 직전/직후 타임스탬프가 의도한 기준일로 가는지 검증. 이게 "자정 선점이 다시 들어왔는지"를 자동으로 잡는 결정론적 루프다`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`실제 사례 — 알림 봇의 daily-cap`}),`
`,(0,i.jsxs)(t.p,{children:[`개인 자동화(공개 레포)의 알림 봇에서 daily-cap 기준일을 `,(0,i.jsx)(t.strong,{children:`KST 07:00 시작`}),`으로 앵커해 자정 선점을 막은 적이 있다(2026-06-10). UTC 자정 기준일 때는 KST 오전 9시에 카운터가 리셋돼, 이른 아침 알림과 전날 밤 알림이 같은 "하루"로 묶이지 않는 어긋남이 있었다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`floor(ts / 86400)`}),`(UTC 자정) → `,(0,i.jsx)(t.code,{children:`business_day(ts, anchor=07:00 KST)`}),`로 바꾼 것이 전부다. 로직은 한 함수만 건드렸고, 경계 직전/직후 타임스탬프에 대한 테스트가 회귀를 막는 장치가 됐다. 핵심은 `,(0,i.jsx)(t.strong,{children:`단순 자정이 아니라 운영 시작 시각(07:00)에 맞춘`}),` 것 — 사람이 활동하지 않는 시각이 경계여야 경계 폭발이 사용자에게 닿지 않는다.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`암묵적 UTC 자정`}),`: `,(0,i.jsx)(t.code,{children:`utcnow().date()`}),`는 KST 사용자에게 오전 9시 경계다. "하루"의 시작을 코드가 결정하게 두지 말고 명시한다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`서버 로컬 시간 의존`}),`: 배포 환경 타임존에 따라 경계가 바뀐다. 같은 코드가 다른 버킷을 만든다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`오프셋 하드코딩`}),`: `,(0,i.jsx)(t.code,{children:`UTC+9`}),` 직접 더하기는 DST 있는 타임존에서 깨진다. IANA 이름 + 표준 라이브러리로 (위 "왜 상수로 박아야 하나" 참조).`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`경계 = 사용자 활동 피크`}),`: 앵커를 사람이 활발한 시각에 두면 경계 폭발이 그대로 사용자에게 노출된다. 한산한 시각으로 잡아야 선점이 사용자에게 닿지 않는다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`경계 테스트 누락`}),`: 앵커 직전/직후 타임스탬프 테스트가 없으면 자정 선점 회귀를 못 잡는다. 이 한 쌍의 테스트가 결정론적 안전장치다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`"하루"는 자정이 아니다. 일일 카운트의 경계는 사용자·운영이 체감하는 의미 있는 시각에 명시적으로 앵커하고, 그 경계를 코드 상수로 박아 모든 비교를 한 기준으로 통일한다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/frequency-capping-distributed`,children:`/notes/frequency-capping-distributed`}),` — 고정 윈도우 자정 리셋의 경계 폭발과 슬라이딩 윈도우
`,(0,i.jsx)(t.a,{href:`/essays/same-defect-class-across-repos`,children:`/essays/same-defect-class-across-repos`}),` — 경계 가정 오류가 여러 봇에 반복되는 결함 클래스`]})]})}function ye(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}var be=e({default:()=>_,frontmatter:()=>xe}),xe={title:`죽은 재시도 인프라 — 만들어두고 연결 안 한 retry는 0번 재시도한다`,growth:`Seedling`,topics:[`reliability`,`backend`,`retry`,`automation`],summary:`재시도를 만들어두고 연결을 안 하면 0번 재시도하고, 무제한으로 풀면 폭주하고, 영구 에러까지 재시도하면 헛고생을 반복한다. 세 증상의 공통 원인은 빠진 한 조각이다.`,plantedAt:`2026-06-18`,lastTendedAt:`2026-06-18`};function g(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`문제 — 재시도 코드가 있는데 한 번도 재시도하지 않는다`}),`
`,(0,i.jsxs)(t.p,{children:[`재시도 헬퍼를 만든다. `,(0,i.jsx)(t.code,{children:`retry_with_backoff(fn, max_attempts=3)`}),` 같은 거. 테스트도 통과한다. 그리고 끝낸다.`]}),`
`,(0,i.jsx)(t.p,{children:`문제는 실제 호출 경로가 그 헬퍼를 거치지 않는다는 것이다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-python`,children:`def with_retry(fn, max_attempts=3):
    for attempt in range(max_attempts):
        try:
            return fn()
        except Exception:
            if attempt == max_attempts - 1:
                raise
            time.sleep(backoff(attempt))

# 그런데 실제 호출은:
result = notion.create_page(payload)   # with_retry를 안 거친다
`})}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`with_retry`}),`는 어디서도 호출되지 않는다. import 0건, 콜그래프상 unreachable. 코드는 있지만 `,(0,i.jsx)(t.strong,{children:`0번 재시도한다`}),`. 이건 단순 dead code가 아니라 `,(0,i.jsx)(t.em,{children:`있다고 믿게 만드는`}),` dead infra다. "재시도 붙였으니 일시 장애는 알아서 넘어가겠지"라는 가정이 조용히 깨진다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`근거: 개인 자동화 j-home-radar(부동산 레이더, 공개 레포)에서 retry 헬퍼는 있었지만 Notion 쓰기 경로에 wiring이 안 돼 있었다. 일시 5xx가 곧장 잡 실패로 이어졌고, 그제야 "재시도가 한 번도 안 돌았다"는 걸 발견했다. (실제 코드는 TypeScript의 `,(0,i.jsx)(t.code,{children:`withRetry`}),`/`,(0,i.jsx)(t.code,{children:`classifyError`}),`다. 아래 예시는 언어에 종속되지 않게 Python pseudo-code로 옮겼다.)`]}),`
`,(0,i.jsx)(t.h2,{children:`1단계: 연결 — wiring을 콜그래프로 검증한다`}),`
`,(0,i.jsxs)(t.p,{children:[`"재시도 있음"의 진짜 신호는 헬퍼의 존재가 아니라 `,(0,i.jsx)(t.strong,{children:`호출 경로가 헬퍼를 통과하는가`}),`다. 검증은 결정론적으로 한다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`with_retry`}),`의 참조 수를 센다. 정의 1 + 호출 N. 호출 N이 0이면 dead.`]}),`
`,(0,i.jsx)(t.li,{children:`실제 외부 호출(HTTP·DB·SDK)이 전부 헬퍼를 거치는지 grep으로 교차 확인한다.`}),`
`,(0,i.jsx)(t.li,{children:`테스트에서 transient 에러를 주입하고 호출 횟수가 2 이상인지 단언한다.`}),`
`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-python`,children:`def test_wiring_actually_retries():
    calls = []
    def flaky():
        calls.append(1)
        if len(calls) < 2:
            raise TransientError()
        return "ok"
    assert create_page_with_retry(flaky) == "ok"
    assert len(calls) == 2   # 0번이 아니라 실제로 재시도했다
`})}),`
`,(0,i.jsxs)(t.p,{children:[`존재 테스트(`,(0,i.jsx)(t.code,{children:`with_retry`}),`를 직접 호출하는 유닛 테스트)는 통과하면서도 wiring은 비어 있을 수 있다. 그래서 `,(0,i.jsx)(t.strong,{children:`실제 호출 경로`}),`를 타는 테스트가 필요하다.`]}),`
`,(0,i.jsx)(t.h2,{children:`2단계: 상한 — 무제한 재시도는 폭주한다. bounded로 감싼다`}),`
`,(0,i.jsx)(t.p,{children:`wiring만 연결하면 반대 위험이 생긴다. 영구 장애에 무한 재시도를 걸면 폭주한다. 상한을 둔다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`최대 시도(max attempts)`}),`: 보통 3~5. 그 이상은 가치가 급감한다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`지수 백오프 + jitter`}),`: `,(0,i.jsx)(t.code,{children:`base * 2**attempt`}),`를 천장으로 두고 `,(0,i.jsx)(t.code,{children:`[0, 천장]`}),`에서 무작위로 뽑는다(AWS의 full jitter). jitter가 없으면 모든 클라이언트가 같은 간격으로 동시에 재시도하는 thundering herd가 난다. full jitter는 0 근처 값도 뽑을 수 있어 호출자들을 더 넓게 분산시킨다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`상한 캡(max backoff)`}),`: 천장이 무한히 커지지 않게 캡(예: 30s)을 둔다. jitter는 `,(0,i.jsx)(t.code,{children:`[0, min(cap, base*2**attempt)]`}),`에서 뽑으므로 실효 최대 지연도 cap을 넘지 않는다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`동시성 제한`}),`: 재시도 큐가 동시에 N개를 넘지 않게. 안 그러면 다운스트림을 재시도가 밀어버린다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`전체 deadline`}),`: 시도 총합에 시간 상한. 호출자가 무한정 매달리지 않게.`]}),`
`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-python`,children:`def bounded_retry(fn, max_attempts=4, base=0.5, cap=30, deadline=60):
    start = time.monotonic()
    for attempt in range(max_attempts):
        try:
            return fn()
        except PermanentError:
            raise                                    # 즉시 포기 (3단계)
        except TransientError:
            if attempt == max_attempts - 1:
                raise
            ceiling = min(cap, base * 2 ** attempt)  # 캡으로 클램프한 백오프 천장
            delay = random.uniform(0, ceiling)       # full jitter: [0, ceiling]에서 무작위
            if time.monotonic() - start + delay > deadline:
                raise
            time.sleep(delay)
`})}),`
`,(0,i.jsxs)(t.p,{children:[`실제 j-home-radar는 jitter 대신 고정 백오프 테이블(`,(0,i.jsx)(t.code,{children:`[1s, 2s, 4s, … 64s]`}),`)을 쓰고 `,(0,i.jsx)(t.code,{children:`MAX_RETRY_DELAY_MS=60s`}),`로 최종 클램프해 cron 타임박스를 보호한다. 핵심은 같다 — `,(0,i.jsx)(t.strong,{children:`백오프에 천장을 두고, 그 천장을 넘지 않게 최종값을 클램프한다`}),`.`]}),`
`,(0,i.jsx)(t.h2,{children:`3단계: 분류 — 모든 에러를 재시도하면 안 된다. transient vs permanent`}),`
`,(0,i.jsx)(t.p,{children:`재시도의 핵심은 "재시도할 가치가 있는 에러만 재시도한다"는 것이다. 분류가 틀리면 재시도가 해가 된다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`transient(재시도 가치)`}),`: 네트워크 타임아웃, 연결 끊김, 429 Too Many Requests, 502/503/504, DB 데드락. 다시 하면 성공할 수 있다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`permanent(즉시 포기)`}),`: 400 Bad Request, 401/403 인증·권한, 404, 422 검증 실패, 스키마 불일치. 똑같이 다시 보내도 똑같이 실패한다. 재시도는 시간 낭비 + 다운스트림 부하만 키운다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`맥락 의존(상황 따라)`}),`: 409 Conflict가 대표적이다. 쓰기 충돌(write conflict)은 짧게 대기 후 재시도하면 풀리는 경우가 많아 transient에 가깝지만, 영구적 상태 불일치로 인한 409는 재시도해도 똑같이 막힌다. status code 하나로 단정하지 말고 충돌 종류로 가른다. j-home-radar는 Notion의 409를 "짧은 대기 후 재시도"(`,(0,i.jsx)(t.code,{children:`notion-retry`}),`, 100ms 백오프)로 다룬다.`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`j-home-radar에서 고친 두 번째 버그가 이 분류였다. Notion API의 검증 에러(영구)를 transient로 묶어 재시도하고 있었다. 잘못된 payload를 4번 더 보내봐야 4번 더 거절당할 뿐이다. 분류를 갈라 permanent는 즉시 실패시키고, transient만 bounded 재시도로 넘겼다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-python`,children:`def classify(err):
    if err.status in (429, 500, 502, 503, 504):
        return Transient
    if err.status == 409:
        return Transient if is_write_conflict(err) else Permanent  # 맥락 의존
    if err.status in (400, 401, 403, 404, 422):
        return Permanent
    return Permanent   # 모르면 보수적으로 포기 — 폭주보다 낫다
`})}),`
`,(0,i.jsxs)(t.p,{children:[`기본값이 중요하다. 분류 안 되는 에러는 `,(0,i.jsx)(t.strong,{children:`transient가 아니라 permanent`}),`로 둔다. 알 수 없는 에러를 재시도하면 무한 폭주 쪽으로 기운다.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`헬퍼 존재 = 재시도 동작이라는 착각`}),`: 정의됐다고 호출되는 게 아니다. 콜그래프상 참조 0이면 0번 실행된다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`존재 테스트만 있고 wiring 테스트가 없음`}),`: 헬퍼 유닛 테스트는 통과하는데 실제 경로는 헬퍼를 안 탄다. 호출 경로를 타는 테스트로 검증.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`무제한 재시도`}),`: 상한 없는 재시도는 영구 장애 시 폭주. max attempts·deadline·동시성 캡 필수.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`jitter 없는 백오프`}),`: 모든 클라이언트가 같은 간격으로 동시 재시도 → thundering herd. `,(0,i.jsx)(t.code,{children:`[0, 천장]`}),`에서 뽑는 full jitter로 분산.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`permanent를 재시도`}),`: 400/401/422는 다시 보내도 똑같이 실패. 다운스트림 부하만 키운다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`알 수 없는 에러를 transient로 기본 처리`}),`: 모르는 에러는 permanent로 보수 처리. 기본값이 폭주를 막는다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`재시도가 멱등성을 가정`}),`: 재시도는 같은 요청을 또 보낸다. 멱등하지 않으면 중복 부작용. 쓰기 경로는 멱등성 키와 짝지어야 안전.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`재시도는 만든다고 도는 게 아니다. `,(0,i.jsx)(t.strong,{children:`연결(wiring)·상한(bounded)·분류(transient vs permanent)`}),` 셋이 모두 있어야 비로소 의미 있는 재시도다. 셋 중 하나라도 빠지면 0번 재시도하거나, 폭주하거나, 헛고생을 반복한다.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}var v=e({default:()=>x,frontmatter:()=>y}),y={title:`결정론적 루프 — 사람 개입 없이 스스로 검증하는 작업`,growth:`Evergreen`,topics:[`workflow`,`ai`,`verification`],summary:`"잘해"는 사람이 확인해야 하지만 "A와 B가 동일한지 확인해"는 기계가 스스로 검증 가능하다. 생산성의 핵심 차이.`,plantedAt:`2026-03-01`,lastTendedAt:`2026-05-28`};function b(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`핵심 명제`}),`
`,(0,i.jsxs)(t.p,{children:[`생산성은 `,(0,i.jsx)(t.strong,{children:`사람 속도`}),`에 bound 되어 있는가, `,(0,i.jsx)(t.strong,{children:`기계 속도`}),`에 bound 되어 있는가에 따라 갈린다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"잘해" → 사람이 확인 → 사람 속도`}),`
`,(0,i.jsx)(t.li,{children:`"A와 B가 동일한지 확인해" → 기계가 검증 → 기계 속도`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`6단계 루프 (표준 형태)`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsx)(t.li,{children:`목표·범위를 구체적으로 재진술`}),`
`,(0,i.jsx)(t.li,{children:`성공 조건을 기계적으로 확인 가능한 체크리스트로 변환`}),`
`,(0,i.jsx)(t.li,{children:`체크리스트 순서대로 실행`}),`
`,(0,i.jsx)(t.li,{children:`누락·모순·숨은 가정 셀프 점검`}),`
`,(0,i.jsx)(t.li,{children:`가장 강한 검증 실행 (테스트, 타입체크, 린트, 검색, API 조회)`}),`
`,(0,i.jsx)(t.li,{children:`근거·결과·남은 리스크 보고`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`적용 영역`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`코드 변경 → 빌드·테스트·타입체크`}),`
`,(0,i.jsx)(t.li,{children:`콘텐츠 작성 → 링크 깨짐 검사·맞춤법`}),`
`,(0,i.jsx)(t.li,{children:`자동화 → dry-run + 로그 확인`}),`
`,(0,i.jsx)(t.li,{children:`의사결정 → 옵션 비교 후 기록 (#버린-선택지)`}),`
`,(0,i.jsx)(t.li,{children:`실험·A/B 테스트 → 통계 + 멈춤 신호 5가지 (정성·인프라·외부 컨텍스트)`}),`
`,(0,i.jsx)(t.li,{children:`사이트 콘텐츠 → 빌드 PASS + cross-link 무결성 + frontmatter schema`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`결정론적이지 못한 경우`}),`
`,(0,i.jsxs)(t.p,{children:[`검증이 본질적으로 사람 판단인 경우 (예: "디자인이 예쁜가?"). 이때는 `,(0,i.jsx)(t.code,{children:`미검증`}),` 표시 + 사람 확인 단계 명시.
근거를 지어내지 말 것.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`루프 자체가 무거워지면 실행을 안 하게 됨`}),`: 6단계가 모두 정성적이면 사람 검증 단계 누락. 한 단계라도 기계 검증으로 줄인다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`검증 단계를 "테스트 다 통과"로 끝냄`}),`: 통과 ≠ 정확. 회귀 테스트는 보안 패치를 잡지 못함. 가장 강한 검증을 자문.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.code,{children:`미검증`}),`을 그냥 통과`]}),`: 검증 불가 항목을 표시만 하고 사람 확인 없이 진행. 표시 + `,(0,i.jsx)(t.strong,{children:`사람 확인 강제`}),`가 진짜.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`6단계 그대로 보고`}),`: 출력 포맷을 그대로 베끼면 노이즈. 결과·증거·리스크만 짧게.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 두 모델 교차로 검증을 결정론으로
`,(0,i.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`/notes/quality-gate-loop`}),` — 결정론적 루프의 평가/개선 버전
`,(0,i.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`}),` — 의도 분류 자체를 결정론으로
`,(0,i.jsx)(t.a,{href:`/notes/coderabbit-cubic-double-review`,children:`/notes/coderabbit-cubic-double-review`}),` — 자동 리뷰 두 개로 검증 시야 분리
`,(0,i.jsx)(t.a,{href:`/essays/deterministic-design-loop`,children:`/essays/deterministic-design-loop`}),` — 결정론 루프를 디자인에 적용한 에세이`]})]})}function x(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}var S=e({default:()=>T,frontmatter:()=>C}),C={title:`dispatch — 의도 기반 라우팅 패턴`,growth:`Evergreen`,topics:[`claude`,`workflow`,`routing`,`ai`],summary:`모든 사용자 메시지를 3 에이전트 경쟁으로 최적 스킬에 라우팅. 키워드 매칭이 아닌 의미론적 의도 분석.`,plantedAt:`2026-04-12`,lastTendedAt:`2026-05-29`};function w(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`왜 라우팅이 필요한가`}),`
`,(0,i.jsxs)(t.p,{children:[`Claude Code에 30+ 스킬이 있다면, 매번 사람이 "이건 `,(0,i.jsx)(t.code,{children:`/ship`}),`으로, 저건 `,(0,i.jsx)(t.code,{children:`/review`}),`로"를 판단하는 건 사람 속도다. dispatch가 의도를 읽어 최적 스킬을 부르도록 두면 생산성이 기계 속도로 바뀐다.`]}),`
`,(0,i.jsx)(t.h2,{children:`작동 방식`}),`
`,(0,i.jsx)(t.p,{children:`3 에이전트가 병렬로 판단한다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`maximizer`}),` — 토큰 최대화 편향. "더 깊은 분석이 가능한 스킬은?"`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`synergist`}),` — 체인 편향. "조합이 1+1>2인가?"`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`pragmatist`}),` — 의도 매칭. "사용자 발화의 진짜 의도는?"`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`각자 후보 스킬·예상 성과·놓치기 쉬운 측면을 제시한다. 합의 시 즉시 채택, 이견 시 점수 공식으로 해소.`}),`
`,(0,i.jsx)(t.h2,{children:`왜 키워드 매칭이 아닌가`}),`
`,(0,i.jsxs)(t.p,{children:[`"PR 만들어줘"는 단순 매칭으로 `,(0,i.jsx)(t.code,{children:`/create-pr`}),`에 보내면 된다. 그러나 "이 변경을 어떻게 마무리하지?"는 맥락 의존이다. 의도 기반 판단은 후자도 처리한다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`dispatch가 키워드를 보지 않고 발화의 의미를 본다는 점이 핵심이다. "Redux로 상태관리 추가해줘" 같은 단일 기술 매몰 신호를 감지하면 `,(0,i.jsx)(t.code,{children:`/personas`}),` 비교를 먼저 끼워 넣는다.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정 세 가지`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`자기 자신 추천 → 무한 루프`}),`. dispatch는 자기 자신(`,(0,i.jsx)(t.code,{children:`/dispatch`}),`)을 절대 제안하지 않도록 규칙으로 막음.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`매번 dispatch 호출 = 토큰 비용`}),`. fast route(만장일치 시 점수화 생략)로 절감.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`단순 확인 응답("네")까지 dispatch 보내면 비효율`}),`. PASS 분류 별도.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`결정론적 평가가 핵심`}),`
`,(0,i.jsx)(t.p,{children:`dispatch가 채택한 결과를 사람이 매번 검증할 수 없다면 무용지물이다. 그래서 dispatch는 채택 직후 결과 보고(스킬명 + 점수 + 놓치기 쉬운 측면)를 항상 표면화한다. 사람이 "아, 이거 잘못 골랐네"를 1초 안에 발견할 수 있어야 한다.`}),`
`,(0,i.jsxs)(t.p,{children:[`채택된 스킬이 다시 결정론적 평가 루프를 돌리는 패턴(예: `,(0,i.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`quality-gate`}),`)을 이어가면, 사람 개입 없이 자율 검증되는 워크플로우가 완성된다.`]}),`
`,(0,i.jsx)(t.h2,{children:`3 에이전트가 수렴을 막는다`}),`
`,(0,i.jsxs)(t.p,{children:[`단일 판단자가 라우팅하면 그 판단자의 편향으로 수렴한다 — 같은 종류 요청을 늘 같은 스킬로 보낸다. 3 에이전트(maximizer·synergist·pragmatist)는 서로 다른 편향을 가져서, 한 관점이 놓친 후보를 다른 관점이 올린다. `,(0,i.jsx)(t.a,{href:`/notes/ai-output-mode-collapse`,children:`단일 모델 수렴`}),`을 라우팅 단계에서 깨는 구조다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`핵심은 세 편향이 `,(0,i.jsx)(t.strong,{children:`의도적으로 다르다`}),`는 것. 같은 프롬프트로 3개를 돌리면 수렴하지만, 토큰 최대화·시너지·적합성이라는 다른 목적함수를 주면 분산된다.`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — 라우팅 결정 자체를 사람 개입 없이
`,(0,i.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 라우팅 외 모든 작업도 경쟁으로
`,(0,i.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`/notes/quality-gate-loop`}),` — 채택된 스킬이 다시 평가 루프
`,(0,i.jsx)(t.a,{href:`/notes/ai-output-mode-collapse`,children:`/notes/ai-output-mode-collapse`}),` — 다른 목적함수로 수렴 회피
`,(0,i.jsx)(t.a,{href:`/essays/delegation-autonomy-calibration`,children:`/essays/delegation-autonomy-calibration`}),` — 라우팅 자동화도 자율성 보정의 일부
`,(0,i.jsx)(t.a,{href:`/cases/dispatch-routing-system`,children:`/cases/dispatch-routing-system`}),` — 이 패턴을 실제 시스템으로 구축한 케이스
`,(0,i.jsx)(t.a,{href:`/essays/ai-workflow-chains`,children:`/essays/ai-workflow-chains`}),` — 라우팅이 워크플로우 체인의 입구
`,(0,i.jsx)(t.a,{href:`/cases/claude-md-meta-system`,children:`/cases/claude-md-meta-system`}),` — dispatch를 강제하는 CLAUDE.md 메타 시스템 케이스`]})]})}function T(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}var E=e({default:()=>k,frontmatter:()=>D}),D={title:`지표를 보기 전에 나를 빼라 — 내부 트래픽이 작은 서비스의 KPI를 오염시킨다`,growth:`Seedling`,topics:[`metrics`,`data`,`analytics`],summary:`청첩장 사이트의 '방문 수' 셋 중 하나는 나였다. 작은 서비스의 KPI에서 측정자 자신을 먼저 빼야 진짜 사용자가 보인다.`,plantedAt:`2026-06-18`,lastTendedAt:`2026-06-18`};function O(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`문제`}),`
`,(0,i.jsx)(t.p,{children:`청첩장 사이트의 KPI를 정리하다 멈췄다. 하루 방문 30, 그중 셋 중 하나가 나였다.`}),`
`,(0,i.jsx)(t.p,{children:`배포가 잘 됐는지 한 번, 프리뷰 링크를 다시 한 번, 모바일에서 또 한 번. 신랑신부는 자기 페이지를 백 번 들여다본다. 그 새로고침이 전부 "방문자 30"에 섞여 들어갔고, 나는 그 숫자를 진짜 하객의 관심으로 읽을 뻔했다.`}),`
`,(0,i.jsx)(t.p,{children:`규모가 클 때는 내 새로고침이 노이즈로 묻힌다. 작을 때는 내가 곧 신호다. 그래서 지표를 보기 전에, 측정자 자신을 먼저 빼야 한다.`}),`
`,(0,i.jsx)(t.h2,{children:`어떤 트래픽이 나인가`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`출처`}),(0,i.jsx)(t.th,{children:`사용자로 오해되는 방식`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`본인 새로고침`}),(0,i.jsx)(t.td,{children:`방문/세션/PV 부풀림`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`내부 프리뷰 링크`}),(0,i.jsx)(t.td,{children:`배포 확인이 '관심'으로 집계`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`헬스체크·봇`}),(0,i.jsx)(t.td,{children:`항상 켜진 가짜 트래픽`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`테스트 자동화`}),(0,i.jsx)(t.td,{children:`전환 퍼널을 통과한 가짜 유저`})]})]})]}),`
`,(0,i.jsx)(t.p,{children:`그래서 분석을 시작하기 전에 가장 먼저 한 일은, 이 네 부류를 측정 시점에 플래그로 분리하는 것이었다. 나를 빼고 나서야 비로소 진짜 하객의 패턴 — 언제 몰리고 어디서 이탈하는지 — 가 숫자 위로 드러났다.`}),`
`,(0,i.jsx)(t.p,{children:`이건 측정 위생(measurement hygiene)이다. 분석을 시작하기 전, 데이터에서 측정자 자신을 제거하는 작업.`}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`나중에 빼면 된다`}),` — 사후 필터는 추정이다. 측정 시점에 IP·세그먼트·플래그로 빼야 깨끗하다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`나 하나쯤은 오차범위`}),` — 규모가 작으면 나 하나가 오차범위가 아니라 표본의 1/3이다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`숫자가 커서 좋다`}),` — 부풀린 KPI는 자기기만이다. 작아도 진짜인 숫자가 결정에 쓸모 있다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`self만 빼면 끝`}),` — 헬스체크·봇·CI 트래픽도 같은 부류다. 제외 목록을 한곳에 둔다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`숫자를 믿기 전에 그 숫자에 내가 얼마나 섞였는지부터 의심한다. 작은 서비스에서 신뢰할 만한 KPI는 측정자 자신을 빼는 데서 시작한다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/ad-metric-traps`,children:`/notes/ad-metric-traps`}),` — 지표 정의가 분모·윈도우에서 갈리는 또 다른 오염
`,(0,i.jsx)(t.a,{href:`/essays/data-trust-two-sided`,children:`/essays/data-trust-two-sided`}),` — 숫자를 못 믿게 되는 구조와 신뢰 비용`]})]})}function k(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(O,{...e})}):O(e)}var A=e({default:()=>Se,frontmatter:()=>j}),j={title:`Frequency capping을 분산 환경에서 — 정확성 vs 비용`,growth:`Seedling`,topics:[`advertising`,`distributed`,`performance`,`backend`],summary:`"같은 광고 하루 3번까지"가 서버 수십 대를 만나는 순간, 정확한 카운팅은 매출을 갉아먹는 병목이 된다. 광고를 망치지 않으면서 비용을 비선형으로 줄인 방법.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function M(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`광고주가 화났다`}),`
`,(0,i.jsx)(t.p,{children:`"하루 3번까지로 캡을 걸었는데, 우리 광고가 한 사용자한테 열 몇 번씩 뜬다"는 항의가 들어왔다. 설정은 분명 3번이었다. 코드도 멀쩡했다. 그런데 실제 노출은 캡을 한참 넘기고 있었다.`}),`
`,(0,i.jsx)(t.p,{children:`범인은 산수였다. 광고 서버가 한 대가 아니라 수십 대였고, 사용자 요청은 그 중 아무 서버로나 흩어졌다. 각 서버가 자기 메모리에서 "이 사용자에게 3번까지" 세고 있으니, 서버가 10대면 같은 광고가 최대 30번 나갈 수 있었다. 캡 자체가 서버 수만큼 곱해져 새고 있던 것이다.`}),`
`,(0,i.jsxs)(t.p,{children:[`단일 서버면 이런 일은 없다. 메모리에 `,(0,i.jsx)(t.code,{children:`(user, ad) → count`}),` 하나 두고 증가시키면 끝이다. 문제는 우리가 서버 한 대로 굴러가는 회사가 아니라는 것이었다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`광고 서버 수십 대 — 요청이 아무 서버로나 감`}),`
`,(0,i.jsx)(t.li,{children:`초당 수만~수십만 요청`}),`
`,(0,i.jsx)(t.li,{children:`카운트는 모든 서버가 같은 값을 공유해야 캡이 의미를 가짐`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`해법은 자명해 보였다. 모든 서버가 공유하는 카운터 하나를 두면 된다. 그런데 매 요청마다 중앙 저장소를 읽고 쓰는 순간, 이번엔 그 카운터가 전체 광고 서빙의 병목이 됐다. 정확성을 사면 비용이 따라왔다. 여기서부터가 진짜 문제였다.`}),`
`,(0,i.jsx)(t.h2,{children:`정확성을 얼마나 살 것인가`}),`
`,(0,i.jsx)(t.p,{children:`광고주에게 다시 답을 주려면 먼저 내가 답해야 했다. "정확히 3번"을 보장하는 건 얼마나 비싼가, 그리고 우리는 정말 "정확히"가 필요한가. 캡을 거는 쪽 입장에서 보면 광고는 대개 "정확히 N번"이 아니라 "대략 N번"이면 매출도 사용자 경험도 흔들리지 않는다. 그래서 선택지는 단순한 on/off가 아니라, 정확성을 어디까지 사고 어디서부터 근사로 갈아탈지의 스펙트럼이었다. 그 스펙트럼을 우리가 실제로 밟은 순서대로 적는다.`}),`
`,(0,i.jsx)(t.h3,{children:`1단계 — 중앙 Redis (정확, 비쌈)`}),`
`,(0,i.jsxs)(t.p,{children:[`매 노출마다 Redis `,(0,i.jsx)(t.code,{children:`INCR`}),`.`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:`INCR freq:{user}:{ad}:{date}
EXPIRE freq:{user}:{ad}:{date} 86400
`})}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`정확함 (모든 서버가 같은 카운터)`}),`
`,(0,i.jsx)(t.li,{children:`비용: 매 요청 Redis 왕복. 초당 수만이면 Redis가 핫스팟.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`소규모거나 정확성이 매출에 직결되면 이 단계.`}),`
`,(0,i.jsx)(t.h3,{children:`2단계 — 로컬 캐시 + 주기 동기화 (근사)`}),`
`,(0,i.jsx)(t.p,{children:`각 서버가 로컬 카운트 + 주기적으로 중앙에 flush.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`비용 ↓ (Redis 왕복이 매 요청 → 주기적)`}),`
`,(0,i.jsx)(t.li,{children:`부정확 ↑ (flush 사이의 윈도우에서 over-delivery)`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`cap이 3인데 서버 10대가 각자 로컬로 세다 flush하면 일시적으로 3 초과 가능. "대략 3번"으로 충분하면 OK.`}),`
`,(0,i.jsx)(t.h3,{children:`3단계 — 확률적 카운팅 (대규모 근사)`}),`
`,(0,i.jsxs)(t.p,{children:[`수억 사용자 × 수만 광고면 `,(0,i.jsx)(t.code,{children:`(user, ad)`}),` 카운터 자체가 메모리 폭발.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`HyperLogLog`}),`: 고유 노출 카운트 근사 (오차 ~2%)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`Count-Min Sketch`}),`: 빈도 근사, 고정 메모리`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`확률적 capping`}),`: cap 근처에서 확률적으로 drop (정확한 카운트 없이)`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`정확도를 일부 포기하고 메모리를 고정. 대규모 플랫폼의 현실적 선택.`}),`
`,(0,i.jsx)(t.h3,{children:`4단계 — 계층 (hot/cold 분리)`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`hot`}),`: 활성 캠페인은 정확하게 (Redis)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`cold`}),`: 저빈도 캠페인은 근사 (로컬+flush)`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`캠페인 특성에 따라 단계를 섞는다. 모든 캠페인에 같은 정확도를 적용하지 않음.`}),`
`,(0,i.jsx)(t.h2,{children:`시간 윈도우 처리`}),`
`,(0,i.jsx)(t.p,{children:`"하루 3번"의 "하루"도 함정.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`고정 윈도우`}),`: 자정 리셋. 23:59에 3번 + 0:01에 3번 = 2분에 6번 노출 (경계 폭발)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`슬라이딩 윈도우`}),`: 최근 24시간. 정확하지만 비쌈 (타임스탬프 목록 유지)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`슬라이딩 윈도우 근사`}),`: 시간 버킷 + 가중치. 비용/정확성 절충`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`frequency capping에서 고정 윈도우의 경계 폭발은 사용자 경험을 해친다(짧은 시간 도배). 슬라이딩 근사가 보통 적절.`}),`
`,(0,i.jsx)(t.h2,{children:`eventual consistency 받아들이기`}),`
`,(0,i.jsxs)(t.p,{children:[`분산 frequency capping의 핵심 통찰: `,(0,i.jsx)(t.strong,{children:`약간의 over-delivery를 받아들인다`}),`.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`cap 3에 실제 3.2번 평균 노출 → 매출/UX 영향 작음`}),`
`,(0,i.jsx)(t.li,{children:`정확히 3번을 위해 매 요청 강한 일관성 → 비용 폭발`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`"정확히 N번"이 비즈니스 요구인지 "대략 N번"이면 되는지를 먼저 확정. 대부분 후자다. 강한 일관성은 비용이 정당화될 때만.`}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`단일 서버 코드를 분산에 그대로`}),`: 로컬 카운터는 서버 수만큼 cap 초과. 공유 카운터 필요.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`매 요청 중앙 Redis`}),`: 초당 수만이면 Redis 핫스팟. 로컬 캐시 + flush 고려.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`고정 윈도우 경계 폭발`}),`: 자정 리셋이 경계에서 도배. 슬라이딩 윈도우.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`모든 캠페인 같은 정확도`}),`: hot/cold 분리로 비용 차등.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`"정확히 N번" 과잉 요구`}),`: 대부분 "대략"이면 충분. over-delivery 허용 범위를 비즈니스와 합의.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`카운터 TTL 누락`}),`: 날짜별 키가 영원히 남으면 메모리 증가. EXPIRE 필수.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsx)(t.p,{children:`광고주에게는 결국 이렇게 답했다. "정확히 3번이 아니라 평균 3번 안팎으로 맞추겠다. 그 대신 광고는 멈추지 않고 비용도 안 터진다." 그게 받아들여졌고, 캡은 잘 동작했다.`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`엔지니어링 문제처럼 보이던 "캡이 샌다"는 사실 비즈니스 질문이었다 — `,(0,i.jsx)(t.em,{children:`정확히 N번이 정말 필요한가, 아니면 대략 N번이면 되는가.`}),` 답이 후자인 순간, 약간의 over-delivery를 허락하는 대가로 비용은 비선형으로 줄어든다. 분산 시스템에서 가장 비싼 요구사항은 "강한 일관성"이 아니라 `,(0,i.jsx)(t.strong,{children:`검증 안 된 채로 들고 있는 '정확히'라는 단어`}),`다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/ad-metric-traps`,children:`/notes/ad-metric-traps`}),` — 노출 카운트의 정의 문제
`,(0,i.jsx)(t.a,{href:`/essays/two-sided-market-decisions`,children:`/essays/two-sided-market-decisions`}),` — over-delivery가 매체·광고주에 미치는 영향`]})]})}function Se(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(M,{...e})}):M(e)}var Ce=e({default:()=>Te,frontmatter:()=>we}),we={title:`GitHub Pages에서 SPA 라우팅을 동작시키는 404 트릭`,growth:`Seedling`,topics:[`frontend`,`github-pages`,`routing`,`deployment`],summary:`GitHub Pages는 SSR이 없어 클라이언트 라우팅 새로고침 시 404가 뜬다. public/404.html에 SPA fallback redirect를 두면 해결.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-30`};function N(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`문제`}),`
`,(0,i.jsxs)(t.p,{children:[`React SPA를 GitHub Pages에 배포 → `,(0,i.jsx)(t.code,{children:`/cases/proof-hub-rebuild`}),` 깊은 링크 새로고침 → `,(0,i.jsx)(t.strong,{children:`404`}),`.`]}),`
`,(0,i.jsxs)(t.p,{children:[`원인: GitHub Pages는 정적 파일 서버라 `,(0,i.jsx)(t.code,{children:`/cases/proof-hub-rebuild`}),` 경로 자체를 모름. SPA 라우팅은 클라이언트에서만 동작하므로 서버가 `,(0,i.jsx)(t.code,{children:`/index.html`}),`을 못 반환.`]}),`
`,(0,i.jsx)(t.h2,{children:`해결 — spa-github-pages 패턴`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`public/404.html`}),`에 redirect 스크립트:`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-html`,children:`<script>
  var l = window.location;
  l.replace(
    l.protocol + '//' + l.hostname + l.pathname.split('/').slice(0, 1).join('/') +
    '/?/' + l.pathname.slice(1) + (l.search ? '&' + l.search.slice(1) : '') + l.hash,
  );
<\/script>
`})}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`index.html`}),` `,(0,i.jsx)(t.code,{children:`<head>`}),`에 복원 스크립트:`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-js`,children:`(function (l) {
  if (l.search[1] === '/') {
    var decoded = l.search.slice(1).split('&').join('?');
    window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
  }
})(window.location);
`})}),`
`,(0,i.jsx)(t.p,{children:`흐름: 404 → 쿼리로 변환 → SPA mount → history API로 URL 복원.`}),`
`,(0,i.jsx)(t.h2,{children:`이 사이트에서 — 실제 적용 기록`}),`
`,(0,i.jsxs)(t.p,{children:[`이 노트는 일반론이 아니라 `,(0,i.jsx)(t.strong,{children:`이 사이트가 지금 쓰는 패턴`}),`이다. justinjeong5.github.io는 user site(`,(0,i.jsx)(t.code,{children:`*.github.io`}),`)라 `,(0,i.jsx)(t.code,{children:`pathSegmentsToKeep = 0`}),`. `,(0,i.jsx)(t.code,{children:`public/404.html`}),`이 redirect를, `,(0,i.jsx)(t.code,{children:`index.html`}),` `,(0,i.jsx)(t.code,{children:`<head>`}),`가 복원을 담당한다.`]}),`
`,(0,i.jsx)(t.p,{children:`실제로 겪은 두 가지:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`빌드 산출물에 404.html이 들어가야 한다`}),`: Vite `,(0,i.jsx)(t.code,{children:`public/`}),`에 두면 `,(0,i.jsx)(t.code,{children:`dist/404.html`}),`로 복사된다. 처음엔 `,(0,i.jsx)(t.code,{children:`src`}),`에 뒀다가 dist에 안 들어가 deep-link가 계속 404. `,(0,i.jsx)(t.code,{children:`public/`}),`이 정답.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`로컬 dev에선 재현 안 됨`}),`: Vite dev 서버는 SPA fallback을 자동 처리해서 `,(0,i.jsx)(t.code,{children:`/cases/x`}),` 새로고침이 로컬에선 멀쩡하다. `,(0,i.jsx)(t.strong,{children:`GitHub Pages 배포 후에야 404가 드러난다.`}),` 그래서 로컬 통과 = 안전이 아니다 — 배포 후 deep-link 새로고침을 반드시 수동 확인.`]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`이 트릭 덕분에 `,(0,i.jsx)(t.code,{children:`/cases/*`}),`·`,(0,i.jsx)(t.code,{children:`/notes/*`}),` 깊은 링크를 공유해도 새로고침이 깨지지 않는다.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`pathSegmentsToKeep`}),` — user/org site (`,(0,i.jsx)(t.code,{children:`*.github.io`}),`)는 `,(0,i.jsx)(t.code,{children:`0`}),`, project site는 `,(0,i.jsx)(t.code,{children:`1`})]}),`
`,(0,i.jsx)(t.li,{children:`검색엔진은 404 redirect를 그대로 따라오지 못할 수 있음 (SEO 약함)`}),`
`,(0,i.jsx)(t.li,{children:`메타 OG 태그는 모두 index.html 기본값만 적용 (페이지별 동적 OG 불가)`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`대안`}),`
`,(0,i.jsx)(t.p,{children:`진짜 SEO·동적 OG가 필요하면 Next.js SSG 또는 Astro로 빌드 후 GitHub Pages. 다만 빌드 복잡도 ↑.`}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/mdx-content-as-files`,children:`/notes/mdx-content-as-files`}),` — 콘텐츠를 파일로 두고 라우팅과 분리하면 SPA fallback과도 잘 맞물린다
`,(0,i.jsx)(t.a,{href:`/notes/vite-manual-chunks`,children:`/notes/vite-manual-chunks`}),` — fallback 흐름에 함께 영향 받는 첫 로드 청크 크기 다루기
`,(0,i.jsx)(t.a,{href:`/cases/proof-hub-rebuild`,children:`/cases/proof-hub-rebuild`}),` — 이 라우팅이 적용된 사이트 리빌드 케이스`]})]})}function Te(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}var Ee=e({default:()=>Oe,frontmatter:()=>De}),De={title:`GitHub Releases를 personal CDN으로 — 무료·무제한·영구`,growth:`Seedling`,topics:[`github`,`cdn`,`infrastructure`,`side-project`],summary:`HTML 리포트에 비디오·큰 이미지가 들어갈 때 어디에 호스팅하나. GitHub Releases는 파일당 2GB·무제한 트래픽·무료. 도메인 신뢰까지 따라온다.`,plantedAt:`2026-05-08`,lastTendedAt:`2026-05-21`};function P(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`문제 — large binary 어디에 둘 것인가`}),`
`,(0,i.jsx)(t.p,{children:`HTML 리포트·블로그·문서를 만들다 보면 정적 이미지로 끝나지 않는 자료가 생긴다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`데모 video (10-50MB)`}),`
`,(0,i.jsx)(t.li,{children:`고해상도 스크린샷 (5-20MB)`}),`
`,(0,i.jsx)(t.li,{children:`큰 PDF·디자인 파일`}),`
`,(0,i.jsx)(t.li,{children:`mp4 캡처본`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`git repo에 직접 넣으면:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`repo size 폭증 → clone 5분`}),`
`,(0,i.jsx)(t.li,{children:`diff 노이즈 (binary)`}),`
`,(0,i.jsx)(t.li,{children:`GitHub 100MB push 제한`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`S3·Cloudflare R2는 좋지만 개인 프로젝트에 신용카드 결제·운영 비용. 무료 호스팅(Imgur 등)은 도메인이 외부·삭제 위험.`}),`
`,(0,i.jsx)(t.h2,{children:`해법 — GitHub Releases`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`Releases는 git history와 분리된 binary 저장소`}),`다. 같은 repo의 부속 공간이지만 객체는 별도.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`파일당 `,(0,i.jsx)(t.strong,{children:`최대 2GB`})]}),`
`,(0,i.jsx)(t.li,{children:`트래픽 무제한 (공식 명시)`}),`
`,(0,i.jsx)(t.li,{children:`무료`}),`
`,(0,i.jsx)(t.li,{children:`영구 URL (release 삭제 안 하면)`}),`
`,(0,i.jsxs)(t.li,{children:[`GitHub 도메인 (`,(0,i.jsx)(t.code,{children:`https://github.com/<user>/<repo>/releases/download/<tag>/<file>`}),`)`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`사용 패턴`}),`
`,(0,i.jsx)(t.h3,{children:`업로드`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-bash`,children:`gh release create v1 video.mp4 image.png report.pdf \\
  --title "Assets v1" \\
  --notes "Initial upload"
`})}),`
`,(0,i.jsx)(t.h3,{children:`다운로드 URL`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:`https://github.com/<user>/<repo>/releases/download/v1/video.mp4
`})}),`
`,(0,i.jsxs)(t.p,{children:[`이 URL을 HTML 리포트의 `,(0,i.jsx)(t.code,{children:`<video src>`}),`나 마크다운 `,(0,i.jsx)(t.code,{children:`![](...)`}),` 에 직접 박는다.`]}),`
`,(0,i.jsx)(t.h3,{children:`추가 업로드`}),`
`,(0,i.jsx)(t.p,{children:`같은 release에 새 asset 추가:`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-bash`,children:`gh release upload v1 new-screenshot.png
`})}),`
`,(0,i.jsx)(t.p,{children:`또는 새 release를 cut.`}),`
`,(0,i.jsx)(t.h2,{children:`별도 repo 권장`}),`
`,(0,i.jsxs)(t.p,{children:[`asset 전용 repo(예: `,(0,i.jsx)(t.code,{children:`cdn-assets`}),`)를 두면:`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`본 repo는 markdown·소스만 → clone 빠름`}),`
`,(0,i.jsx)(t.li,{children:`asset 삭제·교체가 본 repo history 영향 0`}),`
`,(0,i.jsx)(t.li,{children:`private asset이 필요하면 별도 repo만 private`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`release 삭제하면 URL 깨짐`}),`: 한 번 공유한 URL은 영구로 두는 게 안전. 새 버전이면 새 release.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`파일당 2GB 초과`}),`: split해서 multiple file. 또는 더 큰 video는 별도 CDN.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`trafficked로 abuse 의심`}),`: GitHub은 공식적으로 release traffic 무제한이지만, 정말 큰 traffic (millions/day) 보면 ToS 위반 가능. 개인 규모 OK.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`public visibility`}),`: release asset은 repo가 public이면 URL 아는 누구나 접근. 비공개 자료 X.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`CDN edge caching 없음`}),`: latency가 S3 backed CDN보다 살짝 느림. 대규모 user 대상 site엔 부적합.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`binary asset 호스팅에 신용카드 결제 0원. `,(0,i.jsx)(t.strong,{children:`GitHub Releases는 personal CDN의 사실상 표준`}),`이다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/personal-infra-stack`,children:`/notes/personal-infra-stack`}),` — Releases CDN을 포함한 개인 인프라 종합
`,(0,i.jsx)(t.a,{href:`/notes/notion-lightweight-backend`,children:`/notes/notion-lightweight-backend`}),` — 같은 철학의 무료 backend`]})]})}function Oe(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(P,{...e})}):P(e)}var ke=e({default:()=>je,frontmatter:()=>Ae}),Ae={title:`새벽 장애를 AI 페어와 7단계로 — 결정은 사람, 검증은 AI`,growth:`Seedling`,topics:[`incident`,`ai`,`debugging`,`workflow`],summary:`알람이 울리면 가장 먼저 AI 세션을 연다. rollback 영향 범위부터 PR 본문까지 검증을 위임하고, 결정만 내 손에 남기는 야간 incident 워크플로우.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-29`};function F(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`알람부터 AI 세션까지 30초`}),`
`,(0,i.jsx)(t.p,{children:`새벽 3시, 알람이 울린다. 내가 가장 먼저 하는 건 로그를 여는 게 아니라 AI 세션을 켜는 일이다. "지금 깨지는 거 정리해줘"를 치는 순간, 머릿속에서만 돌던 패닉이 검증 가능한 문장으로 바뀌기 시작한다.`}),`
`,(0,i.jsxs)(t.p,{children:[`새벽에 혼자 장애를 잡는 게 어려운 진짜 이유는 코드를 못 읽어서가 아니다. `,(0,i.jsx)(t.strong,{children:`결정을 혼자 내려야 해서`}),`다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"이거 rollback해도 되나, 다른 영향은?"`}),`
`,(0,i.jsx)(t.li,{children:`"임시 패치가 충분한가, root fix까지 가야 하나?"`}),`
`,(0,i.jsx)(t.li,{children:`"팀에 알릴까 그냥 처리할까?"`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`졸리고 압박감에 시야가 좁아진 상태에서 이런 결정 5개를 연속으로 내리면 한두 개는 잘못 가는 게 정상이다. 그래서 나는 새벽 incident를 "혼자 판단하는 일"이 아니라 "AI에게 검증을 위임하고 결정만 내 손에 남기는 워크플로우"로 만들었다.`}),`
`,(0,i.jsx)(t.h2,{children:`AI 페어가 잡는 영역`}),`
`,(0,i.jsxs)(t.p,{children:[`AI 페어 (Codex / Claude)가 가장 가치 있는 시점은 코드 작성이 아니라 `,(0,i.jsx)(t.strong,{children:`결정 cross-check`}),`다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"rollback 영향 범위는?" → Codex가 변경된 파일·호출자 grep으로 답`}),`
`,(0,i.jsx)(t.li,{children:`"이 패치가 다른 케이스에 영향?" → 같은 함수 사용처 자동 스캔`}),`
`,(0,i.jsx)(t.li,{children:`"root fix까지 가는 비용은?" → 변경 분량 예상`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`코드를 빨리 타이핑해 주는 것보다, `,(0,i.jsx)(t.strong,{children:`새벽의 내가 졸려서 건너뛰었을 검증을 대신 강제하는 것`}),`이 핵심이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`야간 워크플로우 (실용)`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`알람 수신`}),` → Codex 세션 시작 (사고를 외화하기 시작)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`영향 범위 파악`}),`: "지금 깨지는 거 정리해줘" → Codex가 로그·메트릭 요약`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`임시 패치 옵션 비교`}),`: rollback / flag off / 패치 — 각각 영향 cross-check`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`결정`}),` → 가장 작은 변경 적용`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`검증`}),`: Codex가 변경의 side effect 자동 grep`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`임시 패치 PR 본문`}),`: Codex가 timeline·결정 근거를 자동 정리`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`다음 날 본인에게 인계`}),`: 누락 가설·검증 못 한 것`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`각 단계의 결정은 사람이. 검증·정리는 AI. 1·3·4단계는 내가 쥐고, 2·5·6단계의 grep·요약·정리는 AI에게 넘긴다.`}),`
`,(0,i.jsx)(t.h2,{children:`외화(externalization)가 진짜 메커니즘`}),`
`,(0,i.jsxs)(t.p,{children:[`AI 페어의 가치를 한 단어로 줄이면 `,(0,i.jsx)(t.strong,{children:`외화`}),`다. 머릿속 사고를 밖으로 꺼내는 것.`]}),`
`,(0,i.jsx)(t.p,{children:`새벽에 혼자면 가설이 머릿속에서만 돈다. 검증 안 된 가설이 "확신"으로 굳는다. AI에게 "지금 상황이 이렇고 X 때문인 것 같다"고 적는 순간, 그 가설이 문장이 되고 검증 대상이 된다. rubber duck debugging과 같은 원리인데, 오리와 달리 AI는 반례를 던진다.`}),`
`,(0,i.jsxs)(t.p,{children:[`그래서 AI가 틀린 답을 줘도 가치가 있다. 틀린 답을 보면 "아니 그게 아니라…"라고 본인 사고가 더 선명해진다. AI는 정답 제공자가 아니라 `,(0,i.jsx)(t.strong,{children:`사고를 외화시키는 벽`}),`이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`AI 답을 그대로 적용`}),`: 새벽 본인이 졸려서 검증 못 함. AI의 첫 답은 정답이 아니라 후보. 반드시 다시 읽기.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`"AI에게 디버그해줘"`}),`: 문제 정의 안 한 상태로 던지면 AI도 헛다리. 직접 영향 범위 정의 후 위임.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`AI 사고를 본인 사고로 착각`}),`: 새벽엔 AI가 "rollback 안전"이라 하면 그대로 믿기 쉽다. AI는 시야 다른 페어이지 결정자가 아니다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`AI에게 권한 있는 명령 위임`}),`: 새벽에 AI가 제안한 명령을 검증 없이 실행하면 사고가 사고를 부른다. 읽기·분석은 위임, 쓰기·배포는 본인 손으로.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`다음 날 회고`}),`
`,(0,i.jsx)(t.p,{children:`새벽 작업이 끝나면 timeline + 결정 근거를 자기 사이트에 일반화된 글로 남긴다. 같은 종류 장애가 또 와도 다음 번엔 더 빠르고 외롭지 않다.`}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`나는 AI에게 코드를 맡기지 않는다. 검증을 맡기고 결정을 쥔다. 그래서 새벽 incident가 와도, 다음 사람에게 넘길 timeline까지 남기고 끝낸다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 두 모델 cross-check의 일반화
`,(0,i.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — AI 검증을 결정론 루프로`]})]})}function je(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(F,{...e})}):F(e)}var Me=e({default:()=>Pe,frontmatter:()=>Ne}),Ne={title:`한국어 letter-spacing — Pretendard에서 -0.025em이 상한`,growth:`Budding`,topics:[`typography`,`korean`,`design`,`frontend`],summary:`영문 헤딩의 -0.04em letter-spacing은 한국어에 적용하면 받침 있는 자모가 뭉친다. -0.02em ~ -0.025em이 한글 균형점.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-29`};function I(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`문제`}),`
`,(0,i.jsxs)(t.p,{children:[`모던 영문 디자인 시스템은 헤딩에 `,(0,i.jsx)(t.code,{children:`letter-spacing: -0.03em ~ -0.04em`}),`을 자주 쓴다. Linear, Vercel, Stripe 모두.`]}),`
`,(0,i.jsxs)(t.p,{children:[`같은 값을 한국어 헤딩에 적용하면 `,(0,i.jsx)(t.strong,{children:`받침 있는 자모`}),`가 뭉쳐 보인다. 특히 "정경하" 같은 받침 많은 단어.`]}),`
`,(0,i.jsx)(t.h2,{children:`원인`}),`
`,(0,i.jsx)(t.p,{children:`영문 글리프는 letter 간 여백이 광활. 마이너스 spacing이 자연스럽게 균형 잡힘. 한글 글리프는 이미 사각형 박스에 꽉 차 있어서 음수 spacing이 박스끼리 겹친다.`}),`
`,(0,i.jsx)(t.h2,{children:`가이드`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`영역`}),(0,i.jsx)(t.th,{children:`추천 letter-spacing`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`h1 (큰 헤딩)`}),(0,i.jsx)(t.td,{children:`-0.02em ~ -0.025em`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`h2, h3`}),(0,i.jsx)(t.td,{children:`-0.015em ~ -0.02em`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`본문`}),(0,i.jsx)(t.td,{children:`0 ~ -0.005em`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`작은 라벨 (eyebrow)`}),(0,i.jsx)(t.td,{children:`+0.08em ~ +0.12em (uppercase)`})]})]})]}),`
`,(0,i.jsx)(t.h2,{children:`letter-spacing 외 같이 잡아야 할 디테일`}),`
`,(0,i.jsx)(t.p,{children:`letter-spacing만 잡아도 한국어가 산뜻해지지 않는다. 3가지가 같이 와야 한다.`}),`
`,(0,i.jsx)(t.h3,{children:`line-height`}),`
`,(0,i.jsx)(t.p,{children:`한국어는 글자 박스가 사각형이고 받침이 아래로 내려가서 영문보다 line-height가 더 필요하다.`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`영역`}),(0,i.jsx)(t.th,{children:`영문`}),(0,i.jsx)(t.th,{children:`한국어`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`h1`}),(0,i.jsx)(t.td,{children:`1.1`}),(0,i.jsx)(t.td,{children:`1.25`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`본문`}),(0,i.jsx)(t.td,{children:`1.5`}),(0,i.jsx)(t.td,{children:`1.65-1.75`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`작은 텍스트`}),(0,i.jsx)(t.td,{children:`1.4`}),(0,i.jsx)(t.td,{children:`1.55`})]})]})]}),`
`,(0,i.jsx)(t.p,{children:`영문 디자인 시스템의 line-height 그대로 적용하면 한국어 본문이 답답하게 보인다.`}),`
`,(0,i.jsx)(t.h3,{children:`word-break / line-break`}),`
`,(0,i.jsx)(t.p,{children:`한국어는 영문과 달리 단어 간 공백이 적고 한 문장이 길어지면 줄바꿈 위치가 어색해진다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-css`,children:`word-break: keep-all;  /* 단어 단위 줄바꿈 (영문 디폴트는 break-word) */
line-break: auto;
`})}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`keep-all`}),`이 없으면 단어 중간에서 줄바꿈이 일어나 가독성 ↓.`]}),`
`,(0,i.jsx)(t.h3,{children:`viewport별 보정`}),`
`,(0,i.jsx)(t.p,{children:`모바일에서는 letter-spacing을 더 보수적으로.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-css`,children:`h1 {
  letter-spacing: -0.025em;
}
@media (max-width: 768px) {
  h1 {
    letter-spacing: -0.015em;  /* 모바일은 더 보수 */
  }
}
`})}),`
`,(0,i.jsx)(t.p,{children:`모바일은 글자가 작아서 음수 spacing이 가독성을 더 깎는다.`}),`
`,(0,i.jsx)(t.h2,{children:`검증`}),`
`,(0,i.jsxs)(t.p,{children:[`이 사이트 quality-gate에서 디자이너 페르소나가 지적: "h1/h2의 letter-spacing -0.035em이 한국어 글리프(특히 받침 있는 자모)를 뭉개". 모바일 헤딩은 `,(0,i.jsx)(t.code,{children:`-0.025em`}),`으로 추가 완화.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`영문 디자인 영감을 그대로 카피하면 한국어 사이트에서 가독성 손해`}),`
`,(0,i.jsxs)(t.li,{children:[`Pretendard variable의 `,(0,i.jsx)(t.code,{children:`font-feature-settings: 'ss06' on`}),` 같은 옵션 활용 시 미세 조정 가능`]}),`
`,(0,i.jsx)(t.li,{children:`letter-spacing은 viewport 크기에 따라 다르게 — 모바일은 더 보수적으로`}),`
`,(0,i.jsx)(t.li,{children:`letter-spacing만 잡고 line-height·word-break 안 잡으면 절반의 개선. 3가지가 묶음.`}),`
`,(0,i.jsx)(t.li,{children:`영문 폰트(Inter·SF Pro 등) + 한국어 폰트(Pretendard)를 같이 쓸 때 각 언어별 letter-spacing이 달라야 함. font-family fallback에 의존하지 말고 명시.`}),`
`]})]})}function Pe(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(I,{...e})}):I(e)}var Fe=e({default:()=>Le,frontmatter:()=>Ie}),Ie={title:`회사에 RFC를 던지기 전에, 나는 주말에 먼저 만들어본다`,growth:`Seedling`,topics:[`learning`,`side-project`,`career`,`sandbox`],summary:`회사에서 새 기술 도입은 3주짜리 합의다. 그래서 나는 주말 학습 레포에서 먼저 만져보고, 함정을 손에 쥔 채 RFC를 쓴다.`,plantedAt:`2026-05-13`,lastTendedAt:`2026-05-21`};function L(e){let t={a:`a`,h2:`h2`,p:`p`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:`Module Federation을 사내에 도입하자는 RFC를 쓰기 전, 나는 주말에 mfp라는 학습 레포부터 만들었다. 회사 코드였다면 팀 컨벤션 합의, 다른 팀원 학습 비용, production 안전성 검증, 배포 파이프라인 호환까지 — 라이브러리 하나 추가에 RFC와 논의로 3주가 걸린다. 합당한 가드레일이지만, "이게 우리한테 맞는지"를 모르는 채로 그 3주를 시작할 수는 없었다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 먼저 만들어봤다. 학습 레포는 가드레일이 0이다. production에 안 나가니 안전성 검증도, 컨벤션 결정도 필요 없다. 주말 하나를 들여 module loader를 직접 짜보니, 문서엔 안 나오는 한계와 함정이 손에 잡혔다. 그 경험을 근거로 쓴 RFC는 짧았고, 팀은 "왜 우리한테 적용하나"라는 질문에 막히지 않았다. 실제로 만져본 사람만이 trade-off를 설명할 수 있다.`}),`
`,(0,i.jsx)(t.p,{children:`이게 내가 반복적으로 쓰는 방식이다. 주말에 spike하고, 한계를 파악하고, 회사 코드에서 작은 적용 자리를 찾고, 짧은 RFC로 합의를 받는다. 학습 레포 없이 회사에 RFC를 던지면 설득력이 비는데, 그 빈자리를 나는 주말의 손맛으로 채운다.`}),`
`,(0,i.jsx)(t.p,{children:`같은 경로로 회사에 흘러간 것들이 있다. 사이드 프로젝트에서 익숙해진 zod이 API 응답 boundary 검증으로 자연스럽게 자리잡았고, 홈레이더에서 쓰던 bottleneck rate limit 패턴은 외부 API 통합의 안정성 근거가 됐다. chalk·boxen으로 학습 레포 출력을 꾸며본 경험은 사내 CLI 도구의 UX를 손보는 데 그대로 쓰였다. 회사 코드는 안전한 일관성을 맡고, 학습 레포는 새로움을 맡는다. 둘은 짝이다.`}),`
`,(0,i.jsx)(t.p,{children:`물론 이 방식에도 빠지기 쉬운 함정이 있고, 6년간 30개 넘는 레포를 쌓아본 입장에서 몸으로 배웠다. spike는 한 주말 안에 끝낼 크기여야 한다 — "이번엔 풀스택 앱"은 한 달 뒤에도 안 끝난다. 결과물은 짧은 README와 main.js 정도면 충분하고, "완성"에 대한 강박은 학습 속도만 떨어뜨린다. 무엇보다, 시작할 때 회사 적용 자리를 하나는 정해둔다. 그러지 않으면 학습이 즐거움에서 멈추고 자산이 되지 못한다. 학습은 도구지 목적이 아니다. 그래서 분기마다 한 번, 1년 안 만진 데다 학습 가치도 없는 레포는 archive한다.`}),`
`,(0,i.jsx)(t.p,{children:`나에게 학습 레포는 회사 코드의 안전망 위에서는 만들 수 없는 것을 미리 만들어보는 곳이다. 새 기술을 회사에 들이는 가장 빠른 길은, 누가 시키기 전에 주말에 먼저 만들어보는 사람이 되는 것이었다.`}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/spike-throwaway-code`,children:`/notes/spike-throwaway-code`}),` — spike의 일반 패턴`]})]})}function Le(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(L,{...e})}):L(e)}var Re=e({default:()=>Be,frontmatter:()=>ze}),ze={title:`학부 C/C++ 프로젝트가 6년 후에도 가르치는 것`,growth:`Seedling`,topics:[`learning`,`fundamentals`,`career`,`education`],summary:`bptree·myshell·steganography. 학부 시절 C/C++ 프로젝트가 6년 후 프론트엔드 일에 어떻게 영향을 주나. fundamentals는 framework로 못 배운다.`,plantedAt:`2026-05-15`,lastTendedAt:`2026-05-21`};function R(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`6년 전 학부 코드`}),`
`,(0,i.jsx)(t.p,{children:`GitHub에 6년 전 학부 시절 C/C++ 프로젝트가 남아있다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`bptree`}),`: B+ Tree 직접 구현 (DB indexing)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`myshell`}),`: bash 흉내 shell 직접 구현 (OS process·signal)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`steganography`}),`: 이미지에 비밀 메시지 숨기는 알고리즘 (bit manipulation)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`PS_inha`}),`: 알고리즘 문제 풀이 (자료구조·DP)`]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`지금은 프론트엔드 일을 한다. React·TypeScript·Next.js. `,(0,i.jsx)(t.strong,{children:`C++ 한 줄 안 쓴다`}),`. 그런데 이 학부 코드들이 지금도 영향을 준다.`]}),`
`,(0,i.jsx)(t.h2,{children:`영향 1 — 메모리·시간 직관`}),`
`,(0,i.jsxs)(t.p,{children:[`C에서 `,(0,i.jsx)(t.code,{children:`malloc`}),`/`,(0,i.jsx)(t.code,{children:`free`}),`를 직접 다뤘다. JavaScript는 GC가 다 해줘서 메모리 신경 안 쓰는 게 일반. 다만 어디서 메모리가 새고 어디서 GC pause가 발생하는지를 `,(0,i.jsx)(t.strong,{children:`느낌으로 안다`}),`.`]}),`
`,(0,i.jsxs)(t.p,{children:[`React에서 `,(0,i.jsx)(t.code,{children:`useMemo`}),`/`,(0,i.jsx)(t.code,{children:`useCallback`}),`을 언제 써야 하는지를 결정할 때, 메모리 직관이 있으면 "이건 매 렌더 새 객체 → 자식 컴포넌트 prop 변경 → 불필요한 리렌더"를 즉시 추론한다. 메모리 신경 안 쓴 사람은 `,(0,i.jsx)(t.code,{children:`useMemo`}),`를 "성능 마법"으로만 사용.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`bptree`}),`에서 디스크 page 단위로 데이터 다뤘던 경험은 frontend에서 `,(0,i.jsx)(t.strong,{children:`virtualization·페이지네이션 설계`}),`할 때 그대로 작동한다. 큰 리스트를 어떻게 chunk할지의 직관.`]}),`
`,(0,i.jsx)(t.h2,{children:`영향 2 — 시스템 사고`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`myshell`}),`에서 fork·exec·pipe·signal을 다뤘다. process가 어떻게 spawn되고 어떻게 통신하는지. signal handler가 어떻게 동작하는지.`]}),`
`,(0,i.jsx)(t.p,{children:`지금 graceful shutdown(SIGTERM 처리)이나 Worker thread, child process spawn 같은 영역을 만나면 학부 때 했던 것과 같은 모델이 동작한다. "process가 죽을 때 무슨 일이 일어나는지"를 머릿속에 그릴 수 있다.`}),`
`,(0,i.jsxs)(t.p,{children:[`framework는 추상화한다. 추상화 안에서 무슨 일이 일어나는지 모르면 디버깅을 framework에 의존한다. `,(0,i.jsx)(t.strong,{children:`fundamentals를 알면 추상화가 깨지는 자리도 보인다`}),`.`]}),`
`,(0,i.jsx)(t.h2,{children:`영향 3 — 알고리즘 직관`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`PS_inha`}),`에서 푼 알고리즘 문제 100개+가 머릿속에 패턴으로 남는다. "이 문제는 BFS·이건 DP·저건 greedy" 같은 분류.`]}),`
`,(0,i.jsx)(t.p,{children:`frontend에서 알고리즘 직접 쓸 일은 적다. 다만:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`대량 리스트 정렬·필터링 최적화`}),`
`,(0,i.jsx)(t.li,{children:`컴포넌트 트리 traversal`}),`
`,(0,i.jsx)(t.li,{children:`가상 DOM diff 이해`}),`
`,(0,i.jsx)(t.li,{children:`search·autocomplete`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`매번 알고리즘이 필요하다.`}),`
`,(0,i.jsx)(t.h2,{children:`영향 4 — 디버깅 인내력`}),`
`,(0,i.jsx)(t.p,{children:`C++에서 segfault·memory corruption 디버깅은 며칠씩 걸린다. gdb·valgrind를 며칠 돌려야 원인 찾음. 그 인내력이 frontend의 비동기·race condition·hydration mismatch 디버깅에도 그대로 작동.`}),`
`,(0,i.jsx)(t.p,{children:`"이건 한 시간 안에 끝날 거"라는 expectation이 아니라 "이건 며칠 걸릴 수 있다, 인내심 + 도구 + 가설 + 검증"으로 접근하는 mindset.`}),`
`,(0,i.jsx)(t.h2,{children:`다른 학부생에게`}),`
`,(0,i.jsx)(t.p,{children:`학부 시절 C/C++로 fundamentals를 한 번이라도 직접 만져본 사람과 안 만져본 사람의 6년 후 차이는 크다. 둘 다 프론트엔드 잘 할 수 있지만, 추상화가 깨지는 자리에서 갈라진다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`직접 만져본 사람: 추상화 아래로 내려가 디버깅`}),`
`,(0,i.jsx)(t.li,{children:`안 만져본 사람: 추상화를 "마법"으로 받아들이고 우회`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`학부 시절은 framework 학습이 아니라 `,(0,i.jsx)(t.strong,{children:`fundamentals를 직접 만져볼 마지막 자리`}),`다.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`학부 코드를 그대로 production에 가져가기`}),`: 학부 코드는 학습용. production 안전성·테스트·확장성 없음. 직접 가져가지 마라.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`fundamentals를 framework로 학습`}),`: React로 메모리 직관을 배우려 하면 너무 추상화돼 있어 잘 안 됨. 학부 시절 한 번이라도 C/C++.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`추상화 부정`}),`: framework·라이브러리는 가치 있다. fundamentals 안다고 매번 직접 구현하면 비효율.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`학부 코드 archive 안 함`}),`: 6년 전 코드가 메인 프로필에 그대로 노출. archive해서 흔적은 남기되 활성 작업과 분리.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`"학부생이 잘했을 리 없다"는 자기 평가절하`}),`: 학부 코드는 학부 시점의 본인이 best였다. 부끄러워하지 말고 흔적으로 보존.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`framework는 framework가 가르치지만, `,(0,i.jsx)(t.strong,{children:`fundamentals는 fundamentals를 직접 만져야 배운다`}),`. 학부 시절은 그 마지막 자리다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/learning-repo-sandbox-value`,children:`/notes/learning-repo-sandbox-value`}),` — 학습 레포 일반론`]})]})}function Be(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(R,{...e})}):R(e)}var Ve=e({default:()=>Ue,frontmatter:()=>He}),He={title:`콘텐츠 = 파일 — MDX + Vite의 자동 확장 패턴`,growth:`Evergreen`,topics:[`frontend`,`mdx`,`vite`,`content-architecture`],summary:`콘텐츠 한 개 = MDX 파일 한 개. import.meta.glob으로 자동 인덱싱하면 코드 수정 없이 사이트가 확장된다.`,plantedAt:`2026-05-15`,lastTendedAt:`2026-05-30`};function z(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`패턴`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-js`,children:`const noteModules = import.meta.glob('../content/notes/*.mdx', { eager: true });

export const getAllNotes = () =>
  Object.entries(noteModules).map(([path, mod]) => ({
    slug: extractSlug(path),
    ...(mod.frontmatter || {}),
    Component: mod.default,
  }));
`})}),`
`,(0,i.jsx)(t.p,{children:`새 노트 = 새 MDX 파일 1개. 컴포넌트·라우팅·인덱스 수정 0건.`}),`
`,(0,i.jsx)(t.h2,{children:`왜 이게 강한가`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`콘텐츠 작성 부담 ↓`}),`: 마크다운 + frontmatter만 알면 된다`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`재사용 가능 컴포넌트 임베드`}),`: 본문 안에 차트·다이어그램·인터랙티브 도식`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`빌드 타임 정적 분석`}),`: Fuse.js 검색 인덱스도 빌드 시 한 번에`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`Git diff가 깔끔`}),`: 콘텐츠 변경이 코드 변경과 섞이지 않음`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`import.meta.glob`}),`은 빌드 시 평가. dev에서 HMR로 잘 따라오지만 production은 dist에 박힘.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`eager: true`}),`로 모든 모듈 즉시 import → 콘텐츠 100개+ 되면 번들 크기 ↑. lazy 옵션 검토.`]}),`
`,(0,i.jsx)(t.li,{children:`frontmatter 스키마 통일 안 하면 컴포넌트에서 옵셔널 체이닝 지옥.`}),`
`,(0,i.jsx)(t.li,{children:`빌드 시 frontmatter 검증 누락 → 누락된 필드가 production에서야 발견.`}),`
`,(0,i.jsx)(t.li,{children:`슬러그 변경 시 cross-link이 깨짐. 슬러그는 한 번 정하면 안 바꾸는 게 안전.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`lazy 옵션으로 번들 분할`}),`
`,(0,i.jsxs)(t.p,{children:[`콘텐츠가 100개+ 되면 `,(0,i.jsx)(t.code,{children:`eager: false`}),`로 전환.`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-js`,children:`const noteModules = import.meta.glob('../content/notes/*.mdx');
// eager 없음 → 각 노트가 동적 import로 코드 분할됨

export const loadNote = async (slug) => {
  const path = \`../content/notes/\${slug}.mdx\`;
  const mod = await noteModules[path]();
  return { slug, ...(mod.frontmatter || {}), Component: mod.default };
};
`})}),`
`,(0,i.jsx)(t.p,{children:`라우터의 lazy load와 결합하면 첫 페이지 로드 시 모든 노트를 import하지 않게 된다.`}),`
`,(0,i.jsx)(t.p,{children:`대가: 라우팅 시 약간의 지연 (각 노트 첫 방문 시 fetch). 단, 빌드는 가벼워지고 첫 페이지 번들이 작아진다.`}),`
`,(0,i.jsx)(t.h2,{children:`한계와 전환 시그널`}),`
`,(0,i.jsx)(t.p,{children:`콘텐츠 규모별 적정 도구:`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`규모`}),(0,i.jsx)(t.th,{children:`도구`}),(0,i.jsx)(t.th,{children:`빌드 시간`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`~100편`}),(0,i.jsx)(t.td,{children:`Vite + MDX + eager`}),(0,i.jsx)(t.td,{children:`< 5초`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`100-500편`}),(0,i.jsx)(t.td,{children:`Vite + MDX + lazy`}),(0,i.jsx)(t.td,{children:`< 15초`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`500-2000편`}),(0,i.jsx)(t.td,{children:`Next.js / Astro (SSG)`}),(0,i.jsx)(t.td,{children:`30초-2분`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`2000편+`}),(0,i.jsx)(t.td,{children:`Headless CMS + ISR`}),(0,i.jsx)(t.td,{children:`점진 빌드`})]})]})]}),`
`,(0,i.jsx)(t.p,{children:`전환 시그널:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`빌드 시간 > 1분`}),`: 매 변경마다 1분 기다리면 dev loop이 깨진다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`frontmatter 검증 누락 사고 자주`}),`: 정적 타입 + schema 검증이 필요한 단계.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`콘텐츠 작성자 ≠ 개발자`}),`: 비개발자도 작성하면 CMS 인터페이스 필요.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/vite-manual-chunks`,children:`/notes/vite-manual-chunks`}),` — content/* 디렉토리별 청크 분리로 캐시 효율 ↑`]})]})}function Ue(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(z,{...e})}):z(e)}var We=e({default:()=>Ke,frontmatter:()=>Ge}),Ge={title:`서버 0대로 백엔드를 굴렸다 — 노션 DB 7개로 만든 무료 인프라`,growth:`Seedling`,topics:[`notion`,`backend`,`side-project`,`automation`],summary:`홈레이더 백엔드를 노션 DB 7개로 직접 설계했다. 서버비 0원으로 굴리며 PK도 JOIN도 없는 한계를 hotfix로 직접 넘은 기록.`,plantedAt:`2026-05-15`,lastTendedAt:`2026-05-21`};function B(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:`홈레이더를 혼자 만들 때, 데이터를 어디에 둘지가 첫 벽이었다. RDS를 띄우자니 개인 프로젝트에 매달 나가는 서버비가 아까웠고, UI까지 직접 짜자니 본질에서 멀어졌다. 그래서 노션을 backend로 써보기로 했다. 노션 API + DB 7개로 — 서버 0대, 비용 0원, 그리고 시각화·모바일 앱은 노션이 공짜로 따라왔다.`}),`
`,(0,i.jsx)(t.p,{children:`물론 노션은 관계형 DB가 아니다. 그래서 굴리는 내내 한계에 부딪혔고, 그때마다 우회로를 직접 만들었다. 이 글은 그 설계와, 부딪힌 자리를 메운 기록이다.`}),`
`,(0,i.jsx)(t.p,{children:`먼저 이 선택이 맞는 자리부터. 수천 행 이하의 작은 데이터셋, 읽기보다 쓰기가 적은(배치 cron이 어울리는) 작업, UI를 직접 안 만들어도 되고 모바일 접근이 필요한 개인 프로젝트라면 잘 맞는다. 반대로 production scale·real-time·복잡한 쿼리에는 손대지 않는 게 낫다.`}),`
`,(0,i.jsx)(t.h2,{children:`7-DB 설계 예시`}),`
`,(0,i.jsx)(t.p,{children:`홈레이더의 경우 다음 7개 DB로 나눔.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`Apartments_{REGION}`}),` × 5: 지역별 단지 정보 (정적)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`PriceSnapshots_{YEAR}`}),`: 가격 시계열 (year-partition)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`LocationStats`}),`: 단지별 입지 메타 (한 번 계산 후 cache)`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`DB를 나누는 이유:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`노션 DB 1개의 행 수 한계 (~1만 행 넘으면 UI가 느림)`}),`
`,(0,i.jsx)(t.li,{children:`region·year로 분리하면 쿼리 비용 ↓`}),`
`,(0,i.jsx)(t.li,{children:`한 DB 깨져도 나머지 영향 0`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`API + axios 패턴`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-ts`,children:`import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

await notion.pages.create({
  parent: { database_id: dbId },
  properties: {
    name: { title: [{ text: { content: '단지명' } }] },
    price: { number: 95000 },
  },
});
`})}),`
`,(0,i.jsx)(t.p,{children:`rate limit이 있다. 평균 3 req/sec, burst 가능. bottleneck으로 throttle.`}),`
`,(0,i.jsx)(t.h2,{children:`한계`}),`
`,(0,i.jsx)(t.h3,{children:`PK·FK 없음`}),`
`,(0,i.jsx)(t.p,{children:`노션 DB는 PK를 강제하지 않는다. 이걸 머리로는 알았지만, 몸으로 만난 건 Phase 2.5에서였다. 같은 단지가 DB에 두 번씩 들어가 있었다. cron이 돌 때마다 같은 행을 새로 insert하는 race였다 — RDB였다면 unique constraint가 막아줬을 일이다.`}),`
`,(0,i.jsxs)(t.p,{children:[`DB 엔진이 안 해주니 내가 했다. insert 전에 `,(0,i.jsx)(t.code,{children:`databases.query({ filter: { property: 'name', equals: ... } })`}),`로 존재를 먼저 확인하고, 자주 조회하는 unique key는 page id로 캐싱해 쿼리 자체를 줄였다. hotfix 한 번으로 중복은 멈췄다. 노션을 backend로 쓴다는 건, RDB가 공짜로 주던 보장을 하나씩 내 코드로 되사는 일이라는 걸 이때 배웠다.`]}),`
`,(0,i.jsx)(t.h3,{children:`쿼리 약함`}),`
`,(0,i.jsx)(t.p,{children:`SQL JOIN 없음. region별 평균 가격 같은 집계는 application 단에서 처리. 노션 view의 필터·정렬은 가벼운 UI 용이라 데이터 처리는 코드에서.`}),`
`,(0,i.jsx)(t.h3,{children:`Rate limit이 빌드 시간 결정`}),`
`,(0,i.jsx)(t.p,{children:`API 3 req/sec → 1000개 행 처리에 5-6분. cron 자동화면 OK, 동기 처리면 느림.`}),`
`,(0,i.jsx)(t.h3,{children:`노션 schema 변경 시 코드 깨짐`}),`
`,(0,i.jsxs)(t.p,{children:[`property 이름 바뀌면 모든 코드 동시 수정. `,(0,i.jsx)(t.strong,{children:`노션 schema를 source of truth로 두지 말고 코드 schema를 source로`}),`. setup script가 노션 DB를 만들도록.`]}),`
`,(0,i.jsx)(t.h2,{children:`직접 밟아본 지뢰들`}),`
`,(0,i.jsx)(t.p,{children:`위의 한계들은 한 번씩 나를 물고 나서야 처방이 생긴 것들이다. 중복은 dedupe를 강제하지 않으면 매주 같은 행이 새로 쌓였고, 429를 retry 없이 흘려보냈다가 데이터가 조용히 비기도 했다 — 그래서 bottleneck에 retry를 물렸다. 노션 UI에서 무심코 property 이름을 바꿨다가 코드가 모르는 사이 깨진 적도 있어, 그 뒤로 schema 변경은 코드 → API 경로로만 한다. DB 하나에 행을 무작정 쌓으면 노션 UI 자체가 느려져 year/region으로 쪼갰고, 노션의 page 삭제는 trash로 옮길 뿐이라 archived 상태까지 검증하게 됐다. API key는 처음부터 env var + GitHub Secrets로 빼뒀다 — 이건 다행히 밟기 전에 피했다.`}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`노션은 backend 대체재가 아니다. RDB가 공짜로 주던 보장을 한 줄씩 내 코드로 되사는 대신, `,(0,i.jsx)(t.strong,{children:`서버비를 0원으로 만드는 거래`}),`다. 그 거래의 청구서를 직접 다 치러봤기에, 다음 개인 프로젝트도 같은 자리에서 망설이지 않는다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/public-api-integration-patterns`,children:`/notes/public-api-integration-patterns`}),` — 외부 API 통합 시 같은 rate limit 한계`]})]})}function Ke(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(B,{...e})}):B(e)}var qe=e({default:()=>Ye,frontmatter:()=>Je}),Je={title:`One-way vs Two-way Door — Bezos의 의사결정 분류`,growth:`Evergreen`,topics:[`decision-making`,`tradeoff`,`leadership`],summary:`되돌릴 수 있는 결정(two-way)은 빠르게, 되돌릴 수 없는 결정(one-way)은 신중하게. 대부분의 결정은 two-way인데 사람들은 one-way처럼 다룬다.`,plantedAt:`2026-04-12`,lastTendedAt:`2026-05-30`};function V(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`Bezos의 분류`}),`
`,(0,i.jsx)(t.p,{children:`Jeff Bezos가 Amazon 주주 서한(1997, 2015 재강조)에서 제안:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`Two-way door`}),`: 시도하고 나쁘면 되돌릴 수 있는 결정. 빠르게 결정하고 실험.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`One-way door`}),`: 되돌릴 수 없거나 비용이 큰 결정. 신중하게, 가능한 정보를 다 모으고.`]}),`
`]}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`대부분의 결정은 two-way door인데, 사람들은 one-way처럼 신중하게 다룬다. 결과는 느린 의사결정과 잃어버린 기회.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`적용 예시`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`결정`}),(0,i.jsx)(t.th,{children:`분류`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`새 라이브러리 도입 시도`}),(0,i.jsx)(t.td,{children:`Two-way (안 맞으면 빼면 됨)`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`데이터베이스 마이그레이션`}),(0,i.jsx)(t.td,{children:`One-way (롤백 매우 어려움)`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`PoC 만들기`}),(0,i.jsx)(t.td,{children:`Two-way (실패해도 학습 자산)`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`공개 사이트에 자동 발행`}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:`One-way`}),` (git history 영구, Wayback Machine)`]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`새 디자인 리뉴얼`}),(0,i.jsx)(t.td,{children:`Two-way (안 맞으면 되돌리기 한 commit)`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`회사 동료 정보 노출`}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:`One-way`}),` (한 번 인터넷에 올라가면 회수 불가)`]})]})]})]}),`
`,(0,i.jsx)(t.h2,{children:`실용 규칙`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`Two-way door라면 `,(0,i.jsx)(t.strong,{children:`시도하기 vs 분석하기`}),` 중 시도하기를 우선`]}),`
`,(0,i.jsxs)(t.li,{children:[`One-way door라면 `,(0,i.jsx)(t.strong,{children:`분석·페르소나 토론·quality-gate`}),` 전부 동원`]}),`
`,(0,i.jsx)(t.li,{children:`의심스러우면 "되돌리는 비용은?"으로 자문`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"되돌릴 수 있다"라 생각했는데 실제론 정치·관계·평판 비용이 크면 사실상 one-way`}),`
`,(0,i.jsx)(t.li,{children:`One-way라도 부분적으로 two-way로 만들 수 있다 (예: dry-run, staging, feature flag)`}),`
`,(0,i.jsx)(t.li,{children:`두 종류 모두 한 가지 양식으로 다루면 비용 증대 + 기회 손실`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/automation-vs-governance`,children:`/notes/automation-vs-governance`}),` — 자동 발행은 one-way라 dry-run·PR 게이트 같은 안전장치가 필요
`,(0,i.jsx)(t.a,{href:`/notes/spike-throwaway-code`,children:`/notes/spike-throwaway-code`}),` — spike는 two-way를 만드는 도구`]})]})}function Ye(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(V,{...e})}):V(e)}var Xe=e({default:()=>Qe,frontmatter:()=>Ze}),Ze={title:`AI에게 "잘 해줘"는 통하지 않는다 — 모호함을 측정 기준으로 번역하기`,growth:`Seedling`,topics:[`workflow`,`communication`,`delegation`,`quality`],summary:`AI에게 "전체적으로 개선해줘"를 던지면 매번 다른 결과가 나온다. 코드 0줄 쓰기 전에 모호한 품질 단어를 셀 수 있는 기준으로 번역하는 것 — 이게 내가 AI 위임에서 재작업을 줄이는 방식이다.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function H(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`같은 단어, 다른 실행`}),`
`,(0,i.jsx)(t.p,{children:`AI 에이전트에게 "이 글 전체적으로 개선해줘"를 던졌다. 한 번은 오타만 고쳐 왔고, 다음엔 본문을 통째로 재구성해 왔다. 같은 프롬프트, 전혀 다른 결과. 문제는 모델이 아니라 내 지시였다.`}),`
`,(0,i.jsxs)(t.p,{children:[`"전체적으로 개선"은 받는 쪽마다 다르게 푼다. 오타를 고칠 수도, cross-link를 추가할 수도, 본문을 재구성할 수도 있다. 내가 원한 건 재구성이었는데 결과물을 보고 나서야 어긋남을 안다 — 그러면 한 사이클을 통째로 버린다. "다양하게", "깔끔하게", "사용자 친화적으로"도 같은 함정이다. `,(0,i.jsx)(t.strong,{children:`품질 단어는 주관적`}),`이라 실행 전에 해석이 갈린다. 사람은 중간에 눈치껏 되묻기라도 하지만, AI는 그냥 자기 해석대로 끝까지 달린다.`]}),`
`,(0,i.jsx)(t.h2,{children:`코드 0줄 전에 번역한다`}),`
`,(0,i.jsxs)(t.p,{children:[`그래서 나는 AI에 작업을 넘기기 전에 모호한 품질 단어를 `,(0,i.jsx)(t.strong,{children:`측정 가능한 기준으로 먼저 번역`}),`한다. 그리고 그 기준을 프롬프트에 박아 넣거나 요청자에게 먼저 보여준다.`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:`"전체적으로 개선" 받음
  ↓ 번역
- cross-link 3개 이상 (현재 평균 1.2개)
- 본문에 구체 예시 1개 이상
- 함정 섹션 4항목 이상
- 추상 주장마다 숫자/코드 근거
  ↓ 요청자 확인
"이 기준으로 진행할게요" → 어긋나면 여기서 수정
`})}),`
`,(0,i.jsx)(t.p,{children:`번역된 기준은 사람에게는 합의서지만, AI에게는 그대로 검증 가능한 완료 조건이 된다. "cross-link 3개 이상"이라고 박아두면 모델이 스스로 세어 보고 미달이면 다시 채운다. "아니 그게 아니라"가 결과물이 아니라 기준 단계에서 나오니, 버리는 사이클이 줄어든다.`}),`
`,(0,i.jsx)(t.h2,{children:`번역 예시`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`모호한 단어`}),(0,i.jsx)(t.th,{children:`측정 가능한 기준`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`"개선해줘"`}),(0,i.jsx)(t.td,{children:`cross-link 수 + 본문 줄 수 + 예시 유무`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`"다양하게"`}),(0,i.jsx)(t.td,{children:`N개 차원에서 서로 다름 (형식·관점·소스)`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`"깔끔하게"`}),(0,i.jsx)(t.td,{children:`lint 0 + 중복 0 + 미사용 import 0`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`"사용자 친화적"`}),(0,i.jsx)(t.td,{children:`클릭 수 / 입력 필드 수 / 첫 로드 시간`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`"안전하게"`}),(0,i.jsx)(t.td,{children:`입력 검증 + 에러 경로 + 롤백 가능`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`"읽기 좋게"`}),(0,i.jsx)(t.td,{children:`문단 길이 + 헤딩 간격 + 한 줄 핵심 유무`})]})]})]}),`
`,(0,i.jsxs)(t.p,{children:[`핵심은 `,(0,i.jsx)(t.strong,{children:`셀 수 있거나 있다/없다로 판정 가능한`}),` 형태로 바꾸는 것.`]}),`
`,(0,i.jsx)(t.h2,{children:`왜 효과가 있나`}),`
`,(0,i.jsx)(t.p,{children:`세 가지가 동시에 일어난다.`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`해석 정렬`}),`: 요청자·실행자가 같은 그림을 공유. 재작업 ↓`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`자가 검증 가능`}),`: 기준이 측정 가능하면 실행자가 스스로 "됐는지" 확인. 사람 검증 대기 ↓`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`완료 정의 명확`}),`: "언제 끝인가"가 명시됨. 과/소 작업 방지`]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`이건 `,(0,i.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`결정론적 루프`}),`의 입구 단계다. 결정론적 루프가 "기계가 검증 가능한 완료 조건"을 실행하는 거라면, 이 번역은 그 `,(0,i.jsx)(t.strong,{children:`완료 조건을 모호한 요청에서 뽑아내는`}),` 선행 작업이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`AI에서 시작해 어디든 적용`}),`
`,(0,i.jsx)(t.p,{children:`이 습관은 AI를 매일 쓰면서 몸에 뱄지만, 받는 쪽이 사람이어도 똑같이 통한다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`AI 위임`}),`: "잘 써줘"보다 "각 항목에 예시 1개 + 함정 3개"가 결과를 좌우한다. 모델은 박아둔 기준만큼만 정확해진다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`주니어 위임`}),`: "깔끔하게 리팩토링"보다 "함수 20줄 이하 + 중복 0"`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`외주·디자인 브리프`}),`: "모던하게"보다 레퍼런스 + 구체 제약`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`본인에게`}),`: 스스로의 모호한 목표도 번역해야 완료를 안다`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`번역을 건너뛰고 추측 실행`}),`: "대충 알겠지"가 재작업의 원인. 5분 번역이 30분 재작업을 막는다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`과도하게 세분화`}),`: 기준이 20개면 그 자체가 부담. 핵심 3-5개.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`측정 가능에 집착해 본질 놓침`}),`: 셀 수 있는 것만 기준으로 하면 "셀 수 없는 중요한 것"(톤·우아함)을 놓친다. 정성 기준도 "예시로 합의" 형태로 포함.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`요청자 확인 생략`}),`: 번역만 하고 바로 실행하면 번역이 틀렸을 때 재작업. 기준을 먼저 보여준다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`기준이 결과를 왜곡`}),`: "cross-link 3개"가 목표가 되면 억지 링크. 기준은 방향이지 게임할 대상이 아님.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`AI의 출력 품질은 모델이 아니라 내가 건넨 기준에서 갈린다. "잘 해줘"를 `,(0,i.jsx)(t.strong,{children:`셀 수 있는 완료 조건으로 번역`}),`해 넘기면, 재작업은 결과물이 아니라 프롬프트 단계에서 끝난다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — 번역된 기준을 기계 검증 루프로
`,(0,i.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`/notes/quality-gate-loop`}),` — 기준을 rubric으로 만들어 평가
`,(0,i.jsx)(t.a,{href:`/notes/plan-mode-one-shot`,children:`/notes/plan-mode-one-shot`}),` — 작업 전 정렬이 재작업을 줄인다`]})]})}function Qe(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(H,{...e})}):H(e)}var $e=e({default:()=>tt,frontmatter:()=>et}),et={title:`개인 인프라 스택 — 회사 인프라 없이도 production-grade`,growth:`Budding`,topics:[`infrastructure`,`side-project`,`github`,`notion`],summary:`회사 인프라 없이, 외부 API 7개를 긁어 Notion 7개에 쌓는 시스템을 신용카드 0원으로 굴리는 중. GitHub과 Notion 무료 한계를 어디까지 밀어붙일 수 있는지 직접 부딪혀 본 기록.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-29`};function U(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`신용카드를 꺼내지 않고 시스템을 띄웠다`}),`
`,(0,i.jsx)(t.p,{children:`홈레이더를 만들고 싶었다. 매주 국토부·네이버·카카오를 포함한 외부 API 7개를 긁어, 결과를 Notion DB 7개에 쌓고, 차트로 보는 시스템. 회사라면 AWS·EventBridge·Postgres를 붙이면 끝나는 일이다. 하지만 사이드 프로젝트에 회사 계정을 쓸 수는 없었고, 개인 계정으로 그 스택을 새로 세우려니 신용카드 결제부터 요금 모니터링까지 시작 비용이 먼저 막아섰다.`}),`
`,(0,i.jsxs)(t.p,{children:[`그래서 결제 화면을 한 번도 열지 않기로 정하고, GitHub과 Notion의 무료 한계만으로 같은 일을 해낼 수 있는지 직접 부딪혀 봤다. 결론부터 말하면 `,(0,i.jsx)(t.strong,{children:`신용카드 0원`}),`으로 돌아간다. 어떤 무료 layer를 어디까지 밀어붙였고, 어디서 멈춰야 하는지를 아래에 적는다.`]}),`
`,(0,i.jsx)(t.h2,{children:`무료 한계를 어디까지 밀어붙였나`}),`
`,(0,i.jsx)(t.h3,{children:`Hosting — GitHub Pages`}),`
`,(0,i.jsx)(t.p,{children:`정적 site (블로그·portfolio·리포트). 빌드 후 master 또는 gh-pages 브랜치에 push.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`무료, custom domain 지원`}),`
`,(0,i.jsx)(t.li,{children:`SSL 자동 (Let's Encrypt)`}),`
`,(0,i.jsx)(t.li,{children:`monthly bandwidth 100GB`}),`
`,(0,i.jsx)(t.li,{children:`build minutes 무제한`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`부족: SSR·동적 라우팅·서버 사이드. 그건 static + client routing(SPA fallback)으로 우회.`}),`
`,(0,i.jsx)(t.h3,{children:`CDN — GitHub Releases`}),`
`,(0,i.jsx)(t.p,{children:`video·고해상도 image·PDF 등 binary asset. release tag로 versioning.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`파일당 2GB`}),`
`,(0,i.jsx)(t.li,{children:`트래픽 무제한`}),`
`,(0,i.jsx)(t.li,{children:`영구 URL`}),`
`]}),`
`,(0,i.jsx)(t.h3,{children:`Backend — Notion API`}),`
`,(0,i.jsx)(t.p,{children:`작은 데이터셋 (수천 행). 노션 DB가 lightweight backend.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`무료 무제한 row (UI는 ~1만 행 부드러움)`}),`
`,(0,i.jsx)(t.li,{children:`시각화·모바일 앱 자동`}),`
`,(0,i.jsx)(t.li,{children:`API 3 req/sec`}),`
`]}),`
`,(0,i.jsx)(t.h3,{children:`Scheduler — GitHub Actions cron`}),`
`,(0,i.jsx)(t.p,{children:`주기 작업(데이터 수집·report 생성·deploy).`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`public repo는 무제한 minutes`}),`
`,(0,i.jsx)(t.li,{children:`private도 월 2,000분 무료`}),`
`,(0,i.jsx)(t.li,{children:`secret 관리, matrix 빌드`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`홈레이더는 이렇게 묶였다`}),`
`,(0,i.jsx)(t.p,{children:`처음에 그리던 시스템이 실제로 이 네 layer 위에서 돌아간다. GH Actions cron이 주 1회 발동해 외부 API 7개(국토부·네이버·카카오 등)를 fetch하고, 결과를 Notion DB 7개에 저장한다. demo video는 cdn-assets Releases에 호스팅했고, 결과 차트는 GitHub Pages site에서 노출할 계획이다.`}),`
`,(0,i.jsxs)(t.p,{children:[`여기까지 신용카드 결제: `,(0,i.jsx)(t.strong,{children:`0원`}),`.`]}),`
`,(0,i.jsx)(t.h2,{children:`회사 stack 대비`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`영역`}),(0,i.jsx)(t.th,{children:`회사 stack`}),(0,i.jsx)(t.th,{children:`Personal stack`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`Hosting`}),(0,i.jsx)(t.td,{children:`Vercel·Netlify Pro`}),(0,i.jsx)(t.td,{children:`GH Pages`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`CDN`}),(0,i.jsx)(t.td,{children:`Cloudflare R2·S3`}),(0,i.jsx)(t.td,{children:`GH Releases`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`DB`}),(0,i.jsx)(t.td,{children:`Postgres·DynamoDB`}),(0,i.jsx)(t.td,{children:`Notion API`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`Scheduler`}),(0,i.jsx)(t.td,{children:`EventBridge·Cron`}),(0,i.jsx)(t.td,{children:`GH Actions`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`Monitoring`}),(0,i.jsx)(t.td,{children:`Datadog·Sentry`}),(0,i.jsx)(t.td,{children:`Console·email`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`Auth`}),(0,i.jsx)(t.td,{children:`Auth0·Cognito`}),(0,i.jsx)(t.td,{children:`(없음)`})]})]})]}),`
`,(0,i.jsx)(t.p,{children:`부족한 게 있다. monitoring·auth·실시간 처리. 다만 side project 규모에선 미충족 영역이 critical이 아닌 경우가 많음.`}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`vendor lock-in to GitHub`}),`: 모든 게 GitHub에 묶임. GitHub policy 변경 시 영향. 다만 git 원본은 옮기기 쉬움.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`공개·private 경계 혼동`}),`: Notion DB는 노션 계정 안에만, GH는 공개 시 누구나 접근. 데이터 민감도 분류 필수.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`API rate limit이 critical path`}),`: 모든 layer에 rate limit 있음. 동기 처리는 자주 막힘. async + batch.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`scale up 안 됨`}),`: 만 명 user 대응 X. side project 초기에만 OK.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`monitoring 부재`}),`: 깨져도 모름. cron 실패 → email alert 최소.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`언제 production stack으로 이전하나`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`DAU 100+ 사용자 (rate limit·UI 부담)`}),`
`,(0,i.jsx)(t.li,{children:`데이터 민감도 ↑ (auth·암호화 필수)`}),`
`,(0,i.jsx)(t.li,{children:`다른 사람과 collaboration (Notion 권한 부족)`}),`
`,(0,i.jsx)(t.li,{children:`시간 비용보다 SaaS 결제가 저렴해질 때`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`그 전까지는 personal stack으로 충분.`}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`인프라 예산이 0원이어도, 외부 API 7개를 긁어 Notion 7개에 쌓는 시스템은 이미 돌아간다. 도구가 없어서 못 한 적은 없었고, 무료 한계의 끝까지 가본 사람만 그 한계를 정확히 안다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/github-releases-as-cdn`,children:`/notes/github-releases-as-cdn`}),` — CDN layer
`,(0,i.jsx)(t.a,{href:`/notes/notion-lightweight-backend`,children:`/notes/notion-lightweight-backend`}),` — DB layer
`,(0,i.jsx)(t.a,{href:`/notes/public-api-integration-patterns`,children:`/notes/public-api-integration-patterns`}),` — 외부 API 통합 패턴`]})]})}function tt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(U,{...e})}):U(e)}var nt=e({default:()=>it,frontmatter:()=>rt}),rt={title:`Plan Mode → Auto 1-shot — 재작업 30% 절감 패턴`,growth:`Seedling`,topics:[`claude-code`,`workflow`,`productivity`],summary:`80%를 만들고서야 "이게 아닌데"를 깨닫던 AI 코딩 루프를, 코드 0줄 상태에서 방향을 합의하고 Auto로 한 번에 구현하는 워크플로우로 바꾼 기록.`,plantedAt:`2026-05-08`,lastTendedAt:`2026-05-29`};function W(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`문제 — 즉시 시작이 재작업을 부른다`}),`
`,(0,i.jsx)(t.p,{children:`AI에게 복잡한 작업을 던지고, 에이전트가 신나게 파일 다섯 개를 고친 뒤에야 나는 디프를 열어본다. 그리고 매번 같은 자리에서 멈칫한다. 50%쯤에서 접근법이 틀린 걸 본다. 80%까지 가서야 내가 원한 게 이게 아니었음을 깨닫는다. 100% 다 만들고 나면 기존 컨벤션과 어긋나 있다.`}),`
`,(0,i.jsx)(t.p,{children:`빠르게 시작한 대가는 고스란히 재작업으로 돌아온다. 처음 작업의 50~150%에 달하는 시간이 한 번 더 들고, 토큰도 같은 비율로 태운다. AI가 빠를수록 잘못된 방향으로도 그만큼 빨리 달려간다는 게 함정이었다.`}),`
`,(0,i.jsx)(t.h2,{children:`해법 — Plan Mode 먼저`}),`
`,(0,i.jsxs)(t.p,{children:[`그래서 순서를 뒤집었다. 작업을 받으면 `,(0,i.jsx)(t.code,{children:`Shift+Tab`}),`으로 Claude Code의 `,(0,i.jsx)(t.strong,{children:`Plan Mode`}),`에 먼저 들어간다. 이 모드에선 코드 수정도 파일 생성도 막혀 있고, 읽기처럼 외부 효과 없는 도구만 쓸 수 있다. 에이전트가 할 수 있는 건 오직 계획을 짜는 것뿐이다.`]}),`
`,(0,i.jsx)(t.p,{children:`계획에는 어떤 파일을 건드릴지, 각각 무엇을 바꿀지, 기존 컨벤션을 어떻게 확인했는지, 어떤 트레이드오프를 감수하는지, 끝나면 무엇으로 검증할지가 담긴다. 계획이 나오면 내가 정독한다. 방향이 다르면 바로 여기서 고친다. 이 시점까지 작성된 코드는 0줄이다 — 그래서 고치는 데 드는 비용도 0이다.`}),`
`,(0,i.jsx)(t.h2,{children:`Auto 전환 → 1-shot`}),`
`,(0,i.jsx)(t.p,{children:`계획이 확정되면 Plan Mode를 빠져나와 Auto로 전환한다. 이제 에이전트는 합의된 계획을 그대로 한 번에 구현한다. 중간에 방향을 다시 묻지 않으니 재작업이 사라지고, 탐색이 없으니 구현이 빠르고, 불필요한 시도가 없으니 토큰도 적게 든다.`}),`
`,(0,i.jsx)(t.p,{children:`체감상 5분 이상 걸리는 작업에서 재작업이 30~50% 줄었다. 계획에 5분을 쓰면 구현에서 그 몇 배를 돌려받는 거래였다.`}),`
`,(0,i.jsx)(t.h2,{children:`언제 쓰나`}),`
`,(0,i.jsx)(t.p,{children:`모든 작업에 쓰는 건 아니다. 파일 세 개 이상을 건드리거나, 기존 컨벤션을 먼저 파악해야 하거나, 트레이드오프를 두고 결정이 필요하거나, 내가 의도를 깔끔하게 못 적었을 것 같을 때 — 이럴 때 Plan Mode가 값을 한다.`}),`
`,(0,i.jsx)(t.p,{children:`반대로 파일 하나에 한 줄짜리 명백한 수정이라면 계획을 짜는 비용이 그냥 고치는 비용보다 커서 오히려 느려진다. 임계선은 대략 5분이다.`}),`
`,(0,i.jsx)(t.h2,{children:`계획의 구체성`}),`
`,(0,i.jsxs)(t.p,{children:[`가장 흔한 실패는 계획이 `,(0,i.jsx)(t.strong,{children:`너무 추상적`}),`일 때.`]}),`
`,(0,i.jsx)(t.p,{children:`❌ "X 모듈 추가하고 테스트 추가, Y 페이지에 연결"
✅ 파일 경로·함수 이름·시그니처 수준:`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:`src/lib/payment.ts
  - export async function chargeCustomer(id: string, amount: number): Promise<Receipt>
src/pages/checkout.tsx
  - useEffect 안에 chargeCustomer 호출 추가
tests/payment.test.ts
  - 정상/실패/네트워크 에러 3 케이스
`})}),`
`,(0,i.jsx)(t.p,{children:`이 수준이면 Auto 1-shot이 헤매지 않는다.`}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`계획이 너무 추상적`}),`: 구현 시 또 헤맴. 파일·함수·시그니처 수준까지.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`계획 확정 안 하고 Auto`}),`: "대충 이거 같은데" 상태로 Auto 가면 재작업 발생. 사용자 명시 승인 후 Auto.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`모든 작업에 Plan Mode`}),`: 작은 작업도 매번 Plan → 오히려 느림. 5분 임계.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`계획 검토 없이 통과`}),`: 사용자가 "OK"만 하고 검토 안 함. Plan Mode 가치 0. 계획을 정독해야 함.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`spike와의 순서`}),`
`,(0,i.jsx)(t.p,{children:`미지의 영역이면 Plan Mode 전에 spike가 먼저다. 모르는 걸 계획할 수 없다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:`미지의 영역?
  ├─ 예 → spike (버릴 코드로 학습) → Plan Mode (학습 위에 계획) → Auto 1-shot
  └─ 아니오 → Plan Mode → Auto 1-shot
`})}),`
`,(0,i.jsx)(t.p,{children:`spike 없이 모르는 영역을 Plan Mode로 계획하면, 계획 자체가 틀린 가정 위에 선다. spike가 사실을 주고, Plan Mode가 그 사실로 계획을 짜고, Auto가 1-shot 구현한다.`}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`AI에게 속도를 맡기되, 방향은 코드 0줄일 때 사람이 잡는다. 다시 쓰지 않는 게 가장 빠른 길이다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`}),` — 의도 라우팅이 계획의 입구
`,(0,i.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 계획 자체를 두 모델로 cross-check
`,(0,i.jsx)(t.a,{href:`/notes/spike-throwaway-code`,children:`/notes/spike-throwaway-code`}),` — 미지의 영역은 계획 전 spike로 학습`]})]})}function it(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(W,{...e})}):W(e)}var at=e({default:()=>st,frontmatter:()=>ot}),ot={title:`혼자 7개 공개 API를 한 시스템에 욱여넣으며 배운 것`,growth:`Budding`,topics:[`api`,`integration`,`backend`,`side-project`],summary:`홈레이더를 만들며 국토부·네이버·카카오 등 공개 API 7개를 혼자 통합했다. case문 더미가 되기 직전, rate limit·재시도·boundary를 라이브러리 수준으로 끌어올린 기록.`,plantedAt:`2026-05-18`,lastTendedAt:`2026-05-29`};function G(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:`홈레이더를 혼자 만들면서, 어느 날 cron이 통째로 멈춰 있는 걸 발견했다. 네이버 Cloud Maps 하나가 rate limit에 걸려 hang 됐고, 그 hang이 국토부·카카오·한국은행까지 전부 끌고 들어가 같은 배치를 막고 있었다. API는 7개인데 내가 짠 코드는 그걸 하나처럼 다루고 있었던 것이다.`}),`
`,(0,i.jsx)(t.p,{children:`붙여야 할 공개 API가 국토부 RTMS, 네이버 Cloud Maps, 카카오 모빌리티, 학교알리미, 한국은행 ECOS까지 7개. 그런데 같은 게 하나도 없었다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`rate limit이 다름 (초당 3·10·100·무제한)`}),`
`,(0,i.jsx)(t.li,{children:`응답 schema가 다름 (JSON·XML·둘 다)`}),`
`,(0,i.jsx)(t.li,{children:`에러 표현이 다름 (status code·body field·둘 다)`}),`
`,(0,i.jsx)(t.li,{children:`인증이 다름 (header·query·subkey)`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`처음엔 API마다 분기로 받아냈다. case문이 늘수록 새 API를 붙일 때마다 기존 코드를 다시 읽어야 했고, 위 같은 장애가 났을 때 어디가 원인인지 추적이 안 됐다. 그래서 분기를 늘리는 대신, 다양성을 한 층 아래로 내려 라이브러리 수준에서 흡수하기로 방향을 틀었다. 아래는 그렇게 다시 짠 골격이다.`}),`
`,(0,i.jsx)(t.h2,{children:`API별로 끊어 둔 rate limit`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-ts`,children:`import Bottleneck from 'bottleneck';

const naverLimiter = new Bottleneck({
  minTime: 100, // 10 req/sec
  maxConcurrent: 1,
});

await naverLimiter.schedule(() => axios.get(url));
`})}),`
`,(0,i.jsx)(t.p,{children:`핵심은 limiter를 API마다 따로 둔 것이다. 처음 장애의 원인이 정확히 여기였다 — 하나로 묶인 limiter는 한 API의 burst가 전체 배치를 멈춘다. 분리한 뒤로는 네이버가 막혀도 나머지 6개는 영향 0.`}),`
`,(0,i.jsx)(t.h2,{children:`timeout이 빠져 있던 자리`}),`
`,(0,i.jsx)(t.p,{children:`cron이 멈췄던 또 다른 이유는 timeout이 없어서였다. 외부 API가 응답을 안 주고 매달려 있으면 배치 전체가 같이 멈춘다. 그래서 모든 호출에 timeout을 명시하고, 그 위에 재시도를 얹었다. 429·5xx·timeout은 일시적일 가능성이 높으니 한 번에 포기할 이유가 없다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-ts`,children:`import axiosRetry from 'axios-retry';

axiosRetry(axios, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (err) =>
    err.response?.status === 429 || err.response?.status >= 500,
});
`})}),`
`,(0,i.jsx)(t.p,{children:`429는 exponential backoff로 물러섰다 다시. 4xx는 재시도하지 않게 막았다 — 영구 에러를 계속 두드리면 무한 루프에 ban까지 따라온다.`}),`
`,(0,i.jsx)(t.h2,{children:`외부 응답을 한 번도 그냥 믿지 않기`}),`
`,(0,i.jsx)(t.p,{children:`다음으로 깨진 곳은 응답이었다. 국토부 schema가 말도 없이 바뀐 날, 코드는 멀쩡히 돌면서 엉뚱한 값을 DB에 넣고 있었다. 그래서 모든 외부 응답을 들어오는 자리에서 zod로 한 번씩 검증하게 했다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-ts`,children:`import { z } from 'zod';

const PriceSchema = z.object({
  aptName: z.string(),
  dealAmount: z.string().transform((s) => parseInt(s.replace(/,/g, ''))),
  dealYear: z.number(),
});

const data = PriceSchema.parse(response.data); // 깨지면 여기서 명확한 에러
`})}),`
`,(0,i.jsxs)(t.p,{children:[`이 한 줄을 boundary에 박아 두니 schema가 바뀌면 다음 cron에서 곧장 alert가 떴다. 조용히 틀린 값이 흘러 들어가던 자리가 시끄럽게 멈추는 자리로 바뀐 것이다. 덤으로 `,(0,i.jsx)(t.code,{children:`any`}),`의 전염이 끊겼고, string→number 같은 transform도 한곳에 모였다. `,(0,i.jsx)(t.code,{children:`as`}),` 캐스팅으로 넘겼다면 영영 못 잡았을 일이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`페이지네이션은 호출자가 몰라도 되게`}),`
`,(0,i.jsx)(t.p,{children:`API마다 페이지네이션이 cursor·offset·page-token으로 제각각이라, 호출하는 쪽에서 매번 그걸 신경 쓰게 두기 싫었다. async generator 하나로 덮었다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-ts`,children:`async function* paginate(api: string, params: object) {
  let cursor: string | undefined;
  while (true) {
    const { items, nextCursor } = await fetchPage(api, params, cursor);
    yield* items;
    if (!nextCursor) break;
    cursor = nextCursor;
  }
}

for await (const item of paginate('rtms', { region: 'A' })) {
  // process
}
`})}),`
`,(0,i.jsx)(t.p,{children:`호출자는 페이지를 신경 쓰지 않고, for-await가 알아서 끝까지 돌다 멈춘다.`}),`
`,(0,i.jsx)(t.h2,{children:`그리고 다시 새벽에 깨지 않으려고`}),`
`,(0,i.jsx)(t.p,{children:`처음 cron이 멈췄을 때 가장 괴로웠던 건 원인을 찾는 데 걸린 시간이었다. 어느 API의 어느 단계에서 났는지가 로그에 안 보였다. 그래서 pino로 모든 요청·에러를 구조화 JSON으로 남겼다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-ts`,children:`logger.info('api.request', { api: 'naver_maps', endpoint: 'geocode', params });
logger.error('api.error', { api: 'naver_maps', status: err.status, body: err.response?.data });
`})}),`
`,(0,i.jsx)(t.p,{children:`이걸 깔고 나서야 디버깅이 로그를 grep 한 번 하는 일이 됐다.`}),`
`,(0,i.jsx)(t.h2,{children:`위 골격으로도 안 잡혀서 따로 밟은 것들`}),`
`,(0,i.jsx)(t.p,{children:`그래도 몇 개는 직접 데인 뒤에야 알았다. status가 200인데 body 안에 error 코드를 숨겨 두는 API가 있어서, 응답 검증 때 본문까지 같이 봐야 했다. API key는 처음에 코드에 박았다가 env var + GitHub Secrets로 빼고 로그에선 redact 처리했다. 이런 건 패턴으로 일반화되지 않고, 한 번 깨져 봐야 손에 남는 종류였다.`}),`
`,(0,i.jsx)(t.h2,{children:`남은 것`}),`
`,(0,i.jsx)(t.p,{children:`7개를 다 붙이고 나서 든 생각은, 통합의 비용이 API 개수가 아니라 정책의 다양성이라는 거였다. 그 다양성을 분기로 받으면 코드가 case문 더미가 되고, 한 층 아래 라이브러리 수준으로 내려 흡수하면 새 API를 붙이는 일이 골격에 끼워 넣는 작업이 된다.`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`혼자 7개를 붙여 보고 남은 한 줄: 외부 API 통합은 개수 싸움이 아니라, 다양성을 어느 층에서 흡수하느냐의 싸움이다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/notion-lightweight-backend`,children:`/notes/notion-lightweight-backend`}),` — 같은 rate limit 한계의 다른 케이스`]})]})}function st(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(G,{...e})}):G(e)}var ct=e({default:()=>ut,frontmatter:()=>lt}),lt={title:`quality-gate — 결정론적 평가·개선 루프`,growth:`Evergreen`,topics:[`workflow`,`verification`,`ai`,`design`],summary:`모호한 품질 목표를 측정 가능한 rubric으로 바꾸고, 페르소나 평가로 채점한 뒤, 통과까지 개선·재평가하는 패턴.`,plantedAt:`2026-03-22`,lastTendedAt:`2026-05-29`};function K(e){let t={a:`a`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`핵심 명제`}),`
`,(0,i.jsx)(t.p,{children:`"좋아 보인다"는 사람이 확인해야 하지만, "rubric의 각 축이 4점 이상인가"는 기계가 검증할 수 있다. 디자인·콘텐츠·코드 모두 동일하다.`}),`
`,(0,i.jsx)(t.h2,{children:`표준 패턴`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`목표 → rubric`}),`: "세련되게"를 8축으로 분해 (컬러 팔레트, 타이포, 일관성, 인터랙션, ...)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`페르소나 평가`}),`: 디자이너·기획자·개발자 각자 자기 영역 채점`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`통과 기준`}),`: 평균 ≥ 4.5/5, 모든 항목 ≥ 4, FAIL 0`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`미달 시`}),`: 가장 점수 낮은 항목 1~2개 우선 개선 → 재평가`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`종료`}),`: 통과 또는 3 사이클 매몰 (진전 없음)`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`두 번의 적용 사례`}),`
`,(0,i.jsx)(t.h3,{children:`디자인 톤`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`사이클 1: 평균 3.28/5. 누런 cream + 그림자 + 하드코딩 hex 30+. "엄청 못생겼어" 피드백.`}),`
`,(0,i.jsx)(t.li,{children:`사이클 3: 평균 4.44/5. white-zinc-indigo 토큰화, single source 회복.`}),`
`]}),`
`,(0,i.jsx)(t.h3,{children:`모바일 최적화`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`사이클 1: 평균 2.75/5. iOS HIG 44 미달, viewport-fit 누락, focus trap 없음.`}),`
`,(0,i.jsx)(t.li,{children:`사이클 3: 평균 4.75/5. iOS Safari 패키지 + 터치 타겟 + inert 패턴 + 콘텐츠 우선순위.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심 인사이트 세 가지`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`평균이 아니라 최저 항목이 통과를 결정한다.`}),` 한 항목만 3점이어도 평균 4.7이라도 FAIL.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`BLOCKING 항목은 별도 표시한다.`}),` 평균 통과해도 BLOCKING 4점 미만이면 게이트가 닫힌다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`rubric을 사전에 명확히 정의하지 않으면 평가가 흔들린다.`}),` "터치 타겟"이라는 단어만으로는 부족하고 "iOS HIG 44×44 + 간격 충분"으로 명세해야 채점 분산이 줄어든다.`]}),`
`,(0,i.jsx)(t.h2,{children:`임계를 어떻게 정하나 — 4.5 vs 4.7`}),`
`,(0,i.jsxs)(t.p,{children:[`통과 임계(평균 4.5? 4.7?)는 고정값이 아니라 `,(0,i.jsx)(t.strong,{children:`작업의 외부 노출도`}),`로 정한다.`]}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`임계`}),(0,i.jsx)(t.th,{children:`적용`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`4.5`}),(0,i.jsx)(t.td,{children:`내부 작업, 되돌릴 수 있는 결정, 빠른 반복`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`4.7`}),(0,i.jsx)(t.td,{children:`외부 게시, 포트폴리오, 신뢰가 자산인 산출물`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`4.8+`}),(0,i.jsx)(t.td,{children:`한 번 나가면 회수 불가 (one-way door)`})]})]})]}),`
`,(0,i.jsxs)(t.p,{children:[`임계를 높이면 사이클이 늘고 비용이 커진다. 그래서 "무조건 높게"가 아니라 노출도에 맞춘다. 외부 게시 콘텐츠를 4.7로 두는 건 — 게시 후 회수가 `,(0,i.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`one-way door`}),`에 가깝고 신뢰 비용이 크기 때문이다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`rubric 차원도 작업마다 다르다. 콘텐츠라면 "일반화 가능성"(독자에게 전이되는가)을 별도 축으로 두면 자기 참조적 글이 자동으로 걸러진다. 모호한 "좋은 글"을 `,(0,i.jsx)(t.a,{href:`/notes/operationalizing-vague-requests`,children:`측정 가능한 차원으로 번역`}),`하는 게 rubric 설계의 핵심.`]}),`
`,(0,i.jsx)(t.h2,{children:`한계`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`페르소나가 코드만 보고 평가하면 실제 사용감 일부 놓침. 라이브 디바이스 검증이 종종 필요.`}),`
`,(0,i.jsx)(t.li,{children:`같은 페르소나가 두 사이클 연속 평가하면 confirmation bias 생김 — 변경 요약을 명확히 전달해 판단 기준 재설정 필요.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`rubric이 너무 복잡 → 평가가 노이즈`}),`: 7축 이상은 채점 분산이 커지고 일관성이 떨어짐. 4-6축이 적정.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`평균만 보고 최저 4 무시`}),`: 평균 4.7이라도 한 항목 2점이면 사용자 체감 큰 약점. 통과 기준에 "모든 항목 ≥ 4" 포함.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`사이클 무한 반복`}),`: 진전 없는데 3사이클 이상 굴리면 시간만 소비. "3 사이클 매몰" 룰 강제.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`같은 페르소나가 두 번 평가`}),`: confirmation bias. 변경 요약을 명확히 전달해 기준 재설정.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`BLOCKING 표시 안 함`}),`: 평균 통과해도 BLOCKING 4점 미만이면 게이트 닫혀야 한다. 사전에 BLOCKING 항목 명시.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — quality-gate가 적용하는 일반 검증 루프
`,(0,i.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 페르소나 평가의 모델 다양성 버전
`,(0,i.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`}),` — 라우팅 결정에도 평가 루프
`,(0,i.jsx)(t.a,{href:`/notes/operationalizing-vague-requests`,children:`/notes/operationalizing-vague-requests`}),` — rubric은 모호한 목표의 번역
`,(0,i.jsx)(t.a,{href:`/notes/self-persona-evaluation`,children:`/notes/self-persona-evaluation`}),` — rubric에 본인 차원을 넣어 솔직한 BLOCKING 노출
`,(0,i.jsx)(t.a,{href:`/cases/quality-gate-system`,children:`/cases/quality-gate-system`}),` — 이 루프를 디자인·모바일·콘텐츠에 적용한 케이스`]})]})}function ut(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(K,{...e})}):K(e)}var dt=e({default:()=>pt,frontmatter:()=>ft}),ft={title:`채용 담당자의 10초 — 사이트 첫 화면이 결정하는 것`,growth:`Seedling`,topics:[`career`,`content-strategy`,`design`],summary:`86%의 채용 담당자가 포트폴리오 링크를 클릭하지만 평균 체류 시간은 1분 미만. 첫 10초에 "이 사람이 무엇을 잘하는가"가 박혀야 한다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-28`};function q(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`통계 (2026 기준)`}),`
`,(0,i.jsx)(t.p,{children:`리서치 결과:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`**86%**의 채용 담당자가 포트폴리오 링크 클릭`}),`
`,(0,i.jsx)(t.li,{children:`**71%**가 채용 판단에 영향`}),`
`,(0,i.jsx)(t.li,{children:`평균 체류 시간 < 1분`}),`
`,(0,i.jsx)(t.li,{children:`첫 10초가 진입 결정`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`그래서 첫 화면이 무엇을 해야 하는가`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`이름`}),` — 한 글자도 가려지지 않게`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`역할 포지셔닝`}),` — "Frontend Engineer"로 부족. "Product-minded Frontend Engineer" 같은 차별화`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`3개 강점 한 줄씩`}),` — 추상 명사("작은 배포")보다 검증 가능 ("PR lead time 1.5일")이 더 강함`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`다음 액션 1-2개`}),` — 케이스 보기 / 연락`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`흔한 함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`Hero가 길어서 첫 viewport에 핵심 정보 안 들어감`}),`
`,(0,i.jsx)(t.li,{children:`자기 사진·자기소개·취미를 첫 화면에 — 정보 가치 ↓`}),`
`,(0,i.jsx)(t.li,{children:`"다양한 기술 스택" 나열 — 채용 담당자는 키워드만 보고 떠남`}),`
`,(0,i.jsx)(t.li,{children:`매번 다른 톤 — 일관성 부재 = 신뢰 ↓`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`검증 방법`}),`
`,(0,i.jsx)(t.p,{children:`자기 사이트 첫 화면 스크린샷을 친구에게 10초 보여주고:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"이 사람이 무엇을 잘하는 사람인 것 같아?"`}),`
`,(0,i.jsx)(t.li,{children:`답이 명확하면 PASS. 모호하면 첫 화면 재설계.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`채용 담당자 vs 동료 시점`}),`
`,(0,i.jsx)(t.p,{children:`같은 사이트라도 두 시점이 다르다:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`채용 담당자`}),`: 10초, 1차 거름. 표면 신호.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`동료 엔지니어`}),`: 인터뷰 전 검토, 5-15분. 깊은 신호.`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`두 시점 모두 만족하려면: 첫 화면은 채용 담당자용 (짧고 강한 메시지), 그 아래는 동료용 (cases·notes·logs).`}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`첫 10초가 두 번째 화면을 볼 권리를 결정한다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/essays/why-not-traditional-resume`,children:`/essays/why-not-traditional-resume`}),` — 10초 진입을 전제로 한 이력서 대신 사이트 선택의 근거
`,(0,i.jsx)(t.a,{href:`/cases/personal-repos-interview`,children:`/cases/personal-repos-interview`}),` — 10초 동안 보일 레포 흔적의 자산화
`,(0,i.jsx)(t.a,{href:`/cases/proof-hub-rebuild`,children:`/cases/proof-hub-rebuild`}),` — 이 포지셔닝으로 리빌드한 케이스`]})]})}function pt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(q,{...e})}):q(e)}var mt=e({default:()=>gt,frontmatter:()=>ht}),ht={title:`같은 함정에 두 번 빠지면 체크리스트가 된다`,growth:`Seedling`,topics:[`swe`,`process`,`quality`,`automation`],summary:`한 번의 실수는 수정으로 끝나지만, 같은 실수가 두 번 반복되면 그건 개인의 부주의가 아니라 시스템의 공백이다. 함정의 재발 횟수에 따라 대응을 격상하는 사다리.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function J(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 번 vs 두 번의 차이`}),`
`,(0,i.jsx)(t.p,{children:`같은 종류 실수가 반복되는 패턴이 있다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`frontmatter YAML에서 값이 따옴표로 시작 → 빌드 실패. 고침. 몇 주 후 다른 파일에서 또 같은 실수.`}),`
`,(0,i.jsx)(t.li,{children:`PR에 테스트 빼먹음. 리뷰에서 지적. 다음 PR에서 또.`}),`
`,(0,i.jsx)(t.li,{children:`배포 전 환경 변수 확인 누락. 장애. 다음 배포에서 또.`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`첫 번째는 그냥 실수다. 고치면 된다. `,(0,i.jsx)(t.strong,{children:`두 번째부터는 다르다.`}),` 같은 실수가 반복된다는 건 개인의 부주의가 아니라 `,(0,i.jsx)(t.strong,{children:`그걸 막는 시스템이 없다`}),`는 신호다. 사람 기억에 의존하는 한 세 번째도 온다.`]}),`
`,(0,i.jsx)(t.h2,{children:`대응 격상 사다리`}),`
`,(0,i.jsx)(t.p,{children:`재발 횟수에 따라 대응을 격상한다.`}),`
`,(0,i.jsx)(t.h3,{children:`1회 — 수정 (fix)`}),`
`,(0,i.jsx)(t.p,{children:`그냥 고친다. 기록도 선택. 누구나 실수한다.`}),`
`,(0,i.jsx)(t.h3,{children:`2회 — 체크리스트 / 자동 검사`}),`
`,(0,i.jsxs)(t.p,{children:[`같은 함정이 두 번이면 `,(0,i.jsx)(t.strong,{children:`사람 기억을 신뢰하지 않기로`}),` 결정한다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`체크리스트 항목 추가 (PR 템플릿·배포 절차)`}),`
`,(0,i.jsx)(t.li,{children:`가능하면 자동 검사로: lint 룰, pre-commit hook, CI 검증`}),`
`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-bash`,children:`# YAML 따옴표 함정이 2번 → 빌드 전 자동 점검
grep -rnE '^(title|summary): "' src/content/ && echo "FAIL: 따옴표로 시작하는 frontmatter"
`})}),`
`,(0,i.jsxs)(t.p,{children:[`체크리스트보다 자동 검사가 낫다. 체크리스트도 사람이 건너뛸 수 있으니까. `,(0,i.jsx)(t.strong,{children:`기계가 강제할 수 있으면 기계로.`})]}),`
`,(0,i.jsx)(t.h3,{children:`3회 — 프로세스 실패로 취급`}),`
`,(0,i.jsx)(t.p,{children:`두 번에서 체크리스트/자동화를 했는데도 세 번째가 왔다면, 그 대응이 작동 안 한 것. 더 강한 강제가 필요하다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`검사를 CI 차단(blocking)으로 격상`}),`
`,(0,i.jsxs)(t.li,{children:[`또는 그 실수가 `,(0,i.jsx)(t.strong,{children:`불가능한`}),` 구조로 재설계 (예: 따옴표 문제면 frontmatter 생성을 스크립트로 자동화)`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`3회는 "더 조심하자"가 아니라 "구조를 바꾸자"다.`}),`
`,(0,i.jsx)(t.h2,{children:`왜 2회가 임계인가`}),`
`,(0,i.jsx)(t.p,{children:`1회에 자동화하면 과잉이다. 한 번 일어난 모든 실수에 hook을 달면 hook이 노이즈가 된다(좋은 알람의 신호/노이즈 문제와 같다).`}),`
`,(0,i.jsx)(t.p,{children:`3회까지 기다리면 비용이 누적된다. 이미 세 번 당했다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`2회가 "우연 아님"이 확인되는 가장 빠른 지점`}),`이다. 우연한 실수는 보통 한 번. 두 번 같은 형태면 패턴이다. rule of three가 아니라 콘텐츠/운영에선 rule of two가 적절할 때가 많다 — 재발 비용이 클수록 임계를 낮춘다.`]}),`
`,(0,i.jsx)(t.h2,{children:`무엇을 자동화 대상으로`}),`
`,(0,i.jsx)(t.p,{children:`모든 실수가 자동 검사 가능하진 않다. 격상 가능 여부로 분류.`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`함정 유형`}),(0,i.jsx)(t.th,{children:`자동화 가능?`}),(0,i.jsx)(t.th,{children:`대응`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`문법·형식 (YAML·lint)`}),(0,i.jsx)(t.td,{children:`✅ 쉬움`}),(0,i.jsx)(t.td,{children:`grep / linter / hook`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`누락 (테스트·env)`}),(0,i.jsx)(t.td,{children:`✅ 중간`}),(0,i.jsx)(t.td,{children:`CI 검사 / 템플릿 필수 항목`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`논리·판단 오류`}),(0,i.jsx)(t.td,{children:`❌ 어려움`}),(0,i.jsx)(t.td,{children:`체크리스트 + 리뷰`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`설계 결정`}),(0,i.jsx)(t.td,{children:`❌ 어려움`}),(0,i.jsx)(t.td,{children:`페르소나·문서화`})]})]})]}),`
`,(0,i.jsx)(t.p,{children:`자동화 안 되는 것은 체크리스트 + 리뷰로. 자동화 가능한 것을 체크리스트로만 두면 결국 또 빠진다.`}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`재발인데 또 수정만`}),`: "이번에도 조심하면 되지"가 세 번째를 부른다. 2회면 자동화 결정.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`1회에 과잉 자동화`}),`: 모든 실수에 hook → hook 노이즈. 2회 임계 유지.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`체크리스트가 너무 길어짐`}),`: 30항목 체크리스트는 아무도 안 본다. 자동화 가능한 건 자동으로 옮기고 체크리스트는 짧게.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`자동 검사를 non-blocking으로`}),`: 경고만 하고 안 막으면 결국 무시된다. 재발 비용 크면 blocking.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`검사 자체가 stale`}),`: 시스템 바뀌면 검사도 갱신. 안 그러면 false negative.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`자산화 안 함`}),`: 재발 함정과 그 대응을 기록 안 하면 팀의 다른 사람이 또 빠진다. debugging 노트/runbook로.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`한 번은 실수, `,(0,i.jsx)(t.strong,{children:`두 번은 시스템의 공백`}),`이다. 재발 횟수에 따라 수정 → 자동 검사 → 구조 재설계로 격상한다. 사람 기억을 신뢰하는 한 세 번째는 온다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — 자동 검사를 결정론 루프로
`,(0,i.jsx)(t.a,{href:`/logs#2026-06-09-ci-gate-ratchet`,children:`/logs#2026-06-09-ci-gate-ratchet`}),` — 검사를 non-blocking에서 blocking으로 점진 강화하는 구체 운영`]})]})}function gt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(J,{...e})}):J(e)}var _t=e({default:()=>yt,frontmatter:()=>vt}),vt={title:`AI 4명에게 내 시스템을 심판시켰더니, 가장 아픈 곳을 짚은 건 '나'였다`,growth:`Seedling`,topics:[`workflow`,`design-process`,`self-review`,`automation`],summary:`자동화 PoC를 AI 페르소나 4명에게 평가시켰다. SRE·법무·콘텐츠 전략가는 기능적 위험만 봤고, "이 시스템, 6개월 뒤에도 내가 쓸까?"를 묻는 건 본인 페르소나 한 명뿐이었다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-29`};function Y(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`발견`}),`
`,(0,i.jsx)(t.p,{children:`내가 만든 자동화 PoC를, 내가 직접 띄운 AI 페르소나 4명에게 심판시켰다. SRE·법무·콘텐츠 전략가, 그리고 '본인' 페르소나. 각자 자기 역할로 시스템을 뜯어보게 한 뒤 BLOCKING을 받았다.`}),`
`,(0,i.jsxs)(t.p,{children:[`가장 아픈 곳을 짚은 건 전문가 셋이 아니라 `,(0,i.jsx)(t.strong,{children:`본인 페르소나`}),`였다. 그 한 명이 던진 honest_concern:`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"운영 지속률 35%"`}),`
`,(0,i.jsx)(t.li,{children:`"가장 두려운 건 검토 부담이 아니라 회사 정보 유출 1건"`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`외부 페르소나가 잡은 위험은 모두 `,(0,i.jsx)(t.strong,{children:`기능적`}),`이었다:`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`SRE — measurement·복구·운영 비용`}),`
`,(0,i.jsx)(t.li,{children:`법무 — NDA·credentials·incident response`}),`
`,(0,i.jsx)(t.li,{children:`콘텐츠 전략가 — 톤 일관성·자동 발행 신뢰성`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`그러나 누구도 "이 시스템이 6개월 후에도 사용될까?", "휴면 후 재시작 가능할까?", "회사 스프린트 시즌에도 매일 7분이 가능한가?" 같은 `,(0,i.jsx)(t.strong,{children:`지속 가능성`}),` 차원은 짚지 못했다.`]}),`
`,(0,i.jsx)(t.h2,{children:`왜 본인 페르소나가 다른가`}),`
`,(0,i.jsxs)(t.p,{children:[`외부 페르소나는 시스템이 `,(0,i.jsx)(t.strong,{children:`동작하는 시나리오`}),`를 본다. 본인 페르소나는 시스템 안에서 `,(0,i.jsx)(t.strong,{children:`살아야 하는 시나리오`}),`를 본다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"이걸 매일 7분 안에 할 수 있는가" — 본인만 안다`}),`
`,(0,i.jsx)(t.li,{children:`"회사 스프린트 시즌에도 지속 가능한가" — 본인만 안다`}),`
`,(0,i.jsx)(t.li,{children:`"한 달 쉬고 다시 시작할 동기가 있는가" — 본인만 안다`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`외부 페르소나가 "이 시스템은 안전하다"라고 결론 내려도, 본인이 "안 쓸 것 같다"고 하면 시스템 가치는 0이다.`}),`
`,(0,i.jsx)(t.h2,{children:`적용`}),`
`,(0,i.jsxs)(t.p,{children:[`시스템 설계 시 페르소나 토론에 `,(0,i.jsx)(t.strong,{children:`반드시 사용자 본인 페르소나 포함`}),`:`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`외부 페르소나 N명 + 본인 페르소나 1명`}),`
`,(0,i.jsxs)(t.li,{children:[`본인 페르소나는 `,(0,i.jsx)(t.code,{children:`honest_likelihood_of_sustained_use`}),` 같은 정량 추정 출력 (예: "35%")`]}),`
`,(0,i.jsxs)(t.li,{children:[`본인 페르소나의 `,(0,i.jsx)(t.code,{children:`honest_concern`}),`은 다른 페르소나의 `,(0,i.jsx)(t.code,{children:`top_3_fixes`}),` 위에 둔다`]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`quality-gate`}),` 패턴에서도 마찬가지 — rubric에 "운영 지속성" 같은 본인 차원을 별도 항목으로 두면 외부 페르소나가 안 잡는 BLOCKING이 자동으로 드러난다.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`본인 페르소나가 너무 보수적`}),`일 위험: "그냥 안 만드는 게 낫다"로 끝나면 진전이 없음. 외부 페르소나의 "어떻게든 만들어야"와 cross-check 필요.`]}),`
`,(0,i.jsxs)(t.li,{children:[`본인 페르소나의 `,(0,i.jsx)(t.strong,{children:`honest_concern을 그대로 BLOCKING으로 받지 말 것`}),`: 35% 지속률이라도 "passive trigger로 70%까지 끌어올릴 수 있는가" 같은 mitigation 탐색이 먼저.`]}),`
`,(0,i.jsx)(t.li,{children:`자기 자신을 잘 안다는 환상: 평소엔 자기 인식이 평균적으로만 정확. 페르소나 형식으로 분리하면 더 솔직해진다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`위임 보정의 입력으로`}),`
`,(0,i.jsxs)(t.p,{children:[`본인 페르소나의 honest_concern은 `,(0,i.jsx)(t.a,{href:`/essays/delegation-autonomy-calibration`,children:`위임 자율성 보정`}),`에서도 핵심 입력이다. 시스템(또는 AI 에이전트)에 일을 더 넘길지 결정할 때, 외부 검증("동작하는가")만으로는 부족하다. "이걸 6개월 후에도 내가 운영할 수 있는가", "이 자율성 수준이 내가 감당 가능한가"는 본인 페르소나만 답한다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`자율성을 넓히는 신호는 외부 검증(결과)이지만, 넓히면 `,(0,i.jsx)(t.strong,{children:`안 되는`}),` 신호는 종종 본인 페르소나의 솔직한 우려에서 나온다.`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심 한 줄`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`AI에게 일을 넘기되, 마지막 BLOCKING은 내가 짚는다. 시스템이 `,(0,i.jsx)(t.strong,{children:`돌아갈지`}),`는 외부 페르소나가 알지만, 시스템이 `,(0,i.jsx)(t.strong,{children:`살아남을지`}),`는 본인 페르소나만 안다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`/notes/one-way-two-way-door`}),` — 본인 페르소나가 짚는 BLOCKING은 보통 one-way door, 외부 페르소나는 two-way door에 강함
`,(0,i.jsx)(t.a,{href:`/notes/automation-vs-governance`,children:`/notes/automation-vs-governance`}),` — 같은 PoC에서 나온 자동화 거버넌스 부담 인사이트
`,(0,i.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`/notes/quality-gate-loop`}),` — rubric에 본인 차원을 별도 축으로
`,(0,i.jsx)(t.a,{href:`/essays/delegation-autonomy-calibration`,children:`/essays/delegation-autonomy-calibration`}),` — 본인 페르소나가 자율성 확대의 brake
`,(0,i.jsx)(t.a,{href:`/cases/personas-debate-system`,children:`/cases/personas-debate-system`}),` — 본인 페르소나를 포함한 토론 시스템 케이스`]})]})}function yt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(Y,{...e})}):Y(e)}var bt=e({default:()=>Z,frontmatter:()=>xt}),xt={title:`동작하는 코드를 일부러 버린다 — spike로 먼저 배우는 법`,growth:`Budding`,topics:[`swe`,`prototyping`,`learning`],summary:`문서가 빈약한 API를 만났다. 바로 잘 만들려는 대신 30분짜리 버릴 코드부터 짰다. 사실 하나를 확인하고, 그 코드를 버리고, 처음부터 다시 만들었다.`,plantedAt:`2026-04-25`,lastTendedAt:`2026-05-29`};function X(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:`홈레이더에서 국토부 RTMS API를 처음 붙이던 날. 문서는 빈약했고 응답 형식은 불명확했다. 보통이라면 zod 스키마, 에러 처리, 재시도까지 갖춘 v1.0을 곧장 짜기 시작했을 거다 — 그리고 실제 응답을 받아본 순간, 응답 형식을 잘못 가정한 채 쌓아올린 절반을 다시 만들고 있었을 거다.`}),`
`,(0,i.jsx)(t.p,{children:`대신 나는 30분짜리 코드 한 토막을 짰다. 버릴 작정으로.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-ts`,children:`// spike.ts — 버릴 코드. 에러 처리 0, 타입 0.
const res = await fetch(RTMS_URL + params);
const text = await res.text();
console.log(text);  // 진짜 응답 형식만 본다
`})}),`
`,(0,i.jsxs)(t.p,{children:[`얻은 건 사실 하나였다. "응답이 XML이구나. 거래 배열은 `,(0,i.jsx)(t.code,{children:`<items>`}),` 안에 있고, 빈 결과는 `,(0,i.jsx)(t.code,{children:`<items/>`}),` 빈 태그구나." 이 학습을 손에 쥔 채로 spike를 `,(0,i.jsx)(t.strong,{children:`버리고`}),`, 본 구현을 zod 스키마부터 처음 다시 만들었다. 가정이 아니라 사실 위에 쌓으니 다시 만들 일이 없었다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`이게 내가 모르는 영역을 만났을 때 일하는 방식이다. 처음 만지는 라이브러리·API·패턴에서 바로 "잘 만들려고" 하면, 잘못된 기반 위에 정교한 구조를 쌓고, 도중에 깨달은 사실을 반영하느라 반쯤 다시 만든다. 시간은 1.5배, 코드는 누더기. 더 큰 문제는 `,(0,i.jsx)(t.strong,{children:`무엇을 모르는지 모른다`}),`는 것이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`해법 — spike (버릴 코드)`}),`
`,(0,i.jsxs)(t.p,{children:[`30분~2시간 안에 `,(0,i.jsx)(t.strong,{children:`한 가지 질문만`}),` 답하는 최소 코드를 만든다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"이 API의 응답 형식이 어떻게 생겼나"`}),`
`,(0,i.jsx)(t.li,{children:`"이 라이브러리의 성능이 우리 케이스에서 받아들일만한가"`}),`
`,(0,i.jsx)(t.li,{children:`"이 패턴이 우리 코드베이스의 컨벤션과 충돌하지 않는가"`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`spike의 핵심은 `,(0,i.jsx)(t.strong,{children:`버릴 각오로 만든다`}),`는 것. 코드 정리 0, 테스트 0, 추상화 0. 답만 얻는다.`]}),`
`,(0,i.jsx)(t.h2,{children:`본 구현은 처음부터 다시`}),`
`,(0,i.jsxs)(t.p,{children:[`spike에서 얻은 학습으로 `,(0,i.jsx)(t.strong,{children:`본 구현을 처음부터 다시`}),` 만든다. spike 코드를 정리해서 본 구현으로 쓰지 않는다.`]}),`
`,(0,i.jsx)(t.p,{children:`이게 어려운 부분이다. 동작하는 코드를 버리는 게 비효율로 느껴진다. 하지만 다시 쓰는 데 드는 시간은 본 구현 시간의 일부. spike 코드를 정리하는 시간보다 빠르다.`}),`
`,(0,i.jsx)(t.h2,{children:`Always v1.0과의 짝`}),`
`,(0,i.jsx)(t.p,{children:`본 구현은 항상 v1.0(완전체)이다. spike는 v0(throwaway)이다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`v0: 답만 얻는 코드. 버린다.`}),`
`,(0,i.jsx)(t.li,{children:`v1.0: 완전체 코드. 컨벤션·테스트·문서·에러 처리 다 있다.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`"미완성 v0.5"는 만들지 않는다. v0이거나 v1.0이거나.`}),`
`,(0,i.jsx)(t.h2,{children:`진전 기반 timebox`}),`
`,(0,i.jsxs)(t.p,{children:[`spike는 시간이 아니라 `,(0,i.jsx)(t.strong,{children:`진전`}),`으로 끝낸다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`답이 명확해지면 즉시 종료 (15분일 수도)`}),`
`,(0,i.jsx)(t.li,{children:`1시간 했는데 새 정보 0이면 접근 변경 또는 중단`}),`
`,(0,i.jsx)(t.li,{children:`"같은 에러 3번 반복"이면 다른 각도`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`시간 박스만 두면 의미 없이 시간 채우게 됨. 진전 박스가 진짜.`}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`spike를 정성껏 만드는 것`}),`: 30분짜리 spike가 4시간이 되면 spike의 의미가 없다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`spike를 본 구현으로 쓰는 것`}),`: 동작은 하지만 기반이 없다. 6개월 후 본인이 모른다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`spike 결과를 기록 안 함`}),`: spike에서 배운 걸 본 구현 시작 전에 1-2줄로 적는다. 안 적으면 다음 spike 때 또 같은 걸 배운다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`spike 없이 바로 v1.0`}),`: "이 정도면 알아"의 함정. 실제로 만져보면 모른다는 게 드러난다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`모르는 영역에 부딪히면, 나는 추측으로 쌓지 않고 30분짜리 버릴 코드로 사실을 먼저 확인한다. `,(0,i.jsx)(t.strong,{children:`무엇을 모르는지`}),` 알아낸 다음에야 본 구현을 시작한다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/plan-mode-one-shot`,children:`/notes/plan-mode-one-shot`}),` — spike로 학습 후 Plan Mode로 본 구현 1-shot
`,(0,i.jsx)(t.a,{href:`/notes/public-api-integration-patterns`,children:`/notes/public-api-integration-patterns`}),` — 새 API 붙이기의 일반 패턴`]})]})}function Z(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(X,{...e})}):X(e)}var St=e({default:()=>wt,frontmatter:()=>Ct}),Ct={title:`vite manualChunks — vendor와 콘텐츠를 분리해 캐시 효율 ↑`,growth:`Seedling`,topics:[`build`,`vite`,`performance`,`frontend`],summary:`단일 청크는 작은 콘텐츠 변경에도 전체 재다운로드. vendor(거의 안 바뀜) + 콘텐츠(자주 바뀜) 분리하면 캐시 hit 비율 ↑, 첫 로드도 줄어든다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-19`};function Q(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`문제`}),`
`,(0,i.jsxs)(t.p,{children:[`Vite 기본 빌드는 모든 코드를 단일 `,(0,i.jsx)(t.code,{children:`index.js`}),`에 번들. 라이브러리·내 코드·콘텐츠가 한 청크. 콘텐츠 한 편 추가 시 전체 청크 해시 변경 → 사용자가 vendor까지 재다운로드.`]}),`
`,(0,i.jsx)(t.p,{children:`콘텐츠 누적량이 50편+ 되면 빌드 경고 (기본 500KB chunkSizeWarningLimit) 트리거.`}),`
`,(0,i.jsx)(t.h2,{children:`해법 — manualChunks`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-js`,children:`build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          if (id.includes('react-router')) return 'router';
          if (id.includes('react-dom') || id.includes('/react/')) return 'react-vendor';
          if (id.includes('lucide-react')) return 'icons';
          if (id.includes('fuse.js')) return 'search';
          return 'vendor';
        }
        if (id.includes('/src/content/cases/')) return 'content-cases';
        if (id.includes('/src/content/notes/')) return 'content-notes';
        if (id.includes('/src/content/essays/')) return 'content-essays';
      },
    },
  },
  chunkSizeWarningLimit: 600,
}
`})}),`
`,(0,i.jsx)(t.p,{children:`청크 분리 효과:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`vendor`}),`: react·router·icons 등 거의 안 바뀜 → 브라우저 cache 잘 됨`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`콘텐츠`}),`: 자주 바뀌지만 작음 → 변경분만 invalidate`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`분리 기준`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`변경 빈도`}),`: 자주 바뀌는 것과 안 바뀌는 것 분리`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`사이즈`}),`: 매우 큰 라이브러리는 별도 (React 181KB → react-vendor)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`사용 빈도`}),`: 첫 로드에 필요한 것과 lazy fetch 가능한 것 분리`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`효과 (실측)`}),`
`,(0,i.jsx)(t.p,{children:`이 사이트 적용 결과:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`첫 로드 raw 514KB → 275KB (-46%)`}),`
`,(0,i.jsx)(t.li,{children:`첫 로드 gzip 150KB → 88KB (-41%)`}),`
`,(0,i.jsx)(t.li,{children:`콘텐츠 한 편 추가 시 vendor 재다운로드 0`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`manualChunks가 너무 미세하면 HTTP 요청 비용 ↑`}),`: HTTP/2 환경이라도 청크 50+ 는 비효율. 의미 단위로 10개 정도가 적정.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`vendor 청크가 작으면 분리 가치 ↓`}),`: 5KB 라이브러리는 main에 합치는 게 효율적.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`콘텐츠 청크가 라우트와 매핑 안 되면 무의미`}),`: `,(0,i.jsx)(t.code,{children:`/cases`}),` 진입 시 content-cases만 받게 라우팅 일치 필요.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`단일 청크는 콘텐츠 추가 비용이 누적된다. vendor 분리 한 줄로 캐시 hit 비율이 비선형으로 올라간다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/mdx-content-as-files`,children:`/notes/mdx-content-as-files`}),` — content/* 디렉토리 구조가 청크 분리 기준과 자연스럽게 일치
`,(0,i.jsx)(t.a,{href:`/notes/github-pages-spa-fallback`,children:`/notes/github-pages-spa-fallback`}),` — fallback 흐름의 첫 로드 청크는 가장 먼저 가벼워야 한다`]})]})}function wt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(Q,{...e})}):Q(e)}var Tt=e({default:()=>Dt,frontmatter:()=>Et}),Et={title:`신뢰할 수 없는 XML 파싱 — XXE·billion laughs를 DOCTYPE 거부로 막기`,growth:`Seedling`,topics:[`security`,`xml`,`parsing`,`python`],summary:`RSS 같은 외부 XML을 파싱할 때 DTD·외부 엔티티가 열려 있으면 XXE(파일 읽기·SSRF)와 billion laughs(엔티티 확장 DoS)에 노출된다. 가장 단순하고 확실한 방어는 DOCTYPE을 만나면 파싱을 거부하는 것.`,plantedAt:`2026-06-18`,lastTendedAt:`2026-06-18`};function $(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`문제 — 외부 XML은 코드다`}),`
`,(0,i.jsxs)(t.p,{children:[`RSS 피드를 수집하는 봇을 돌리면 남이 만든 XML을 매번 파싱하게 된다. XML은 데이터처럼 보이지만, DTD(Document Type Definition)와 엔티티가 켜져 있으면 사실상 `,(0,i.jsx)(t.strong,{children:`파서에게 시키는 명령`}),`이 된다. 입력 출처를 통제 못 하는 순간 두 가지 고전 공격이 그대로 들어온다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`XXE (XML External Entity)`}),`: 외부 엔티티로 로컬 파일을 읽거나, 내부망 URL을 호출(SSRF)하게 만든다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`billion laughs`}),`: 엔티티를 중첩 정의해 작은 입력으로 메모리를 폭발시키는 DoS.`]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`둘 다 진입점은 같다. 파서가 `,(0,i.jsx)(t.strong,{children:`DTD를 처리하도록 허용`}),`한다는 점이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`XXE — 엔티티가 파일을 읽는다`}),`
`,(0,i.jsx)(t.p,{children:`외부 엔티티는 파싱 시점에 URL/경로를 따라가서 그 내용을 문서에 끼워 넣는다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-xml`,children:`<?xml version="1.0"?>
<!DOCTYPE root [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<root>&xxe;</root>
`})}),`
`,(0,i.jsxs)(t.p,{children:[`파서가 `,(0,i.jsx)(t.code,{children:`&xxe;`}),`를 치환하는 순간 `,(0,i.jsx)(t.code,{children:`/etc/passwd`}),` 내용이 결과 트리에 들어온다. `,(0,i.jsx)(t.code,{children:`SYSTEM`}),`을 `,(0,i.jsx)(t.code,{children:`http://169.254.169.254/...`}),` 같은 내부 주소로 바꾸면 SSRF가 된다. 데이터를 외부로 빼내는 out-of-band 변형(파라미터 엔티티 + 외부 DTD)도 있다.`]}),`
`,(0,i.jsx)(t.h2,{children:`billion laughs — 작은 입력이 메모리를 먹는다`}),`
`,(0,i.jsx)(t.p,{children:`외부 접근이 막혀 있어도, 내부 엔티티 중첩만으로 DoS가 가능하다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-xml`,children:`<?xml version="1.0"?>
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol2 "&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;">
  <!-- ... lol9까지 -->
]>
<lolz>&lol9;</lolz>
`})}),`
`,(0,i.jsxs)(t.p,{children:[`각 단계가 10배씩 부푼다. 9단계면 `,(0,i.jsx)(t.code,{children:`lol`}),` 하나가 10억 개로 펼쳐진다. 수 KB짜리 입력 하나로 수 GB 메모리를 요구하게 만들어 프로세스를 죽인다. 네트워크가 전혀 필요 없다.`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심 방어 — DOCTYPE을 거부한다`}),`
`,(0,i.jsxs)(t.p,{children:[`세부 옵션을 하나하나 끄는 것보다, `,(0,i.jsx)(t.strong,{children:`DTD 자체를 거부`}),`하는 게 가장 단순하고 빈틈이 적다. 정상적인 RSS/Atom 피드는 `,(0,i.jsx)(t.code,{children:`<!DOCTYPE>`}),`이 필요 없다. 그러니 DOCTYPE이 보이면 파싱을 멈추는 게 합리적 기본값이다.`]}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`두 공격 모두 진입점이 DTD다. DTD를 거부하면 XXE와 billion laughs를 한 번에 끊는다.`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`Python이면 표준 `,(0,i.jsx)(t.code,{children:`xml.etree.ElementTree`}),` 대신 `,(0,i.jsx)(t.code,{children:`defusedxml`}),`을 쓴다. 단, 기본값을 정확히 알아야 한다. `,(0,i.jsx)(t.code,{children:`defusedxml.ElementTree.fromstring`}),`은 기본적으로 `,(0,i.jsx)(t.strong,{children:`엔티티 선언`}),`과 `,(0,i.jsx)(t.strong,{children:`외부 참조`}),`를 거부하지만(`,(0,i.jsx)(t.code,{children:`forbid_entities=True`}),`·`,(0,i.jsx)(t.code,{children:`forbid_external=True`}),`), `,(0,i.jsx)(t.strong,{children:`순수 DOCTYPE 자체`}),`는 기본으로 막지 않는다(`,(0,i.jsx)(t.code,{children:`forbid_dtd=False`}),`). 즉 DOCTYPE까지 막는 헤드라인 방어를 켜려면 `,(0,i.jsx)(t.code,{children:`forbid_dtd=True`}),`를 명시해야 한다.`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-python`,children:`from defusedxml.ElementTree import fromstring
from defusedxml.common import DTDForbidden, EntitiesForbidden

def parse_feed(raw: bytes):
    try:
        # forbid_dtd=True를 명시해야 <!DOCTYPE>만 있어도 거부된다
        return fromstring(raw, forbid_dtd=True)
    except (DTDForbidden, EntitiesForbidden) as e:
        # DOCTYPE/엔티티가 있는 입력 → 파싱 거부, 수집 스킵
        raise ValueError("거부된 XML: DTD/엔티티 포함") from e
`})}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`forbid_dtd=True`}),`를 빼면 `,(0,i.jsx)(t.code,{children:`DTDForbidden`}),`은 절대 발생하지 않고(엔티티 선언이 함께 있으면 `,(0,i.jsx)(t.code,{children:`EntitiesForbidden`}),`으로만 잡힌다), `,(0,i.jsx)(t.code,{children:`<!DOCTYPE root>`}),`처럼 엔티티 없는 DOCTYPE은 그대로 통과한다. billion laughs 예제가 기본값에서도 막히는 이유는 'DTD 거부' 때문이 아니라 `,(0,i.jsx)(t.code,{children:`<!ENTITY>`}),` 선언이 `,(0,i.jsx)(t.code,{children:`forbid_entities=True`}),`에 걸리기 때문이다. 이 두 메커니즘을 헷갈리면 "DOCTYPE을 거부하고 있다"고 착각한 채 실제로는 DTD를 허용하는 상태가 된다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`defusedxml을 못 쓰는 환경이면, 쓰는 파서에서 직접 비활성화한다. `,(0,i.jsx)(t.code,{children:`lxml`}),`은 외부 엔티티 치환과 네트워크 접근을 끄고, 거대 트리를 거부한다.`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-python`,children:`from lxml import etree

parser = etree.XMLParser(
    resolve_entities=False,  # 엔티티 치환 끔
    no_network=True,         # 외부 fetch 끔
    load_dtd=False,
    dtd_validation=False,
    huge_tree=False,         # 거대 트리 거부
)
# load_dtd=False + resolve_entities=False로 외부 엔티티 치환·DTD 로딩이 모두 막혀 XXE가 차단되고,
# huge_tree=False가 엔티티 확장 한계를 유지해 billion laughs를 막는다.
# 단 순정 lxml.etree에는 forbid_dtd 인자가 없어 DOCTYPE 자체를 거부하지는 못한다.
# 헤드라인 방어(DOCTYPE 거부)까지 원하면 defusedxml.lxml(forbid_dtd=True 지원) 경로를 쓴다.
root = etree.fromstring(raw, parser=parser)
`})}),`
`,(0,i.jsxs)(t.p,{children:[`언어 무관하게 우선순위는 같다. `,(0,i.jsx)(t.strong,{children:`DTD/DOCTYPE 거부 → 외부 엔티티 치환 끄기 → 네트워크 접근 끄기 → 엔티티 확장 한계 두기.`}),` 핵심은 첫 항목 하나다. 나머지는 첫 항목이 막히지 않는 환경(순정 lxml처럼 DOCTYPE 거부 옵션이 없는 경우)을 대비한 심층 방어다.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`"stdlib는 안전하다"는 가정`}),`: 현대 Python `,(0,i.jsx)(t.code,{children:`ElementTree`}),`는 외부 일반 엔티티를 치환하지 않는다(Python 3.7.1+). 하지만 quadratic blowup 같은 일부 확장 DoS는 stdlib만으로 완전히 막지 못하고, 파서·버전·플랫폼에 따라 동작이 달라질 수 있다. "기본값이 알아서 막아줄 것"에 기대지 말고 untrusted 입력엔 defusedxml로 DTD를 명시적으로 거부한다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`외부 엔티티만 막고 끝내기`}),`: 네트워크를 끊어도 billion laughs는 내부 엔티티만으로 성립한다. DoS 방어는 별개로 챙겨야 한다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`redirect·메모리·크기 한계 누락`}),`: 피드는 URL로 가져온다. 파싱 전에 응답 크기 상한·타임아웃·redirect 제한이 없으면 파서를 굳히기도 전에 fetch 단계에서 당한다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`검증을 한 곳에만`}),`: 수집기는 보통 여러 진입점(스케줄러·수동 재시도·재처리)이 있다. 파싱 함수 한 군데서 거부하도록 모아두지 않으면 우회 경로가 남는다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`거부를 조용히 삼키기`}),`: DOCTYPE을 거부했으면 그 사실이 로그/알림에 남아야 한다. 조용히 스킵하면 정상 피드가 깨진 건지 공격인지 구분이 안 된다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`에러 메시지에 경로 노출`}),`: "file:///etc/... 읽기 실패" 같은 메시지를 그대로 응답·로그에 흘리면 공격자에게 힌트를 준다. 거부 사유는 일반화한다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`외부 XML은 데이터가 아니라 코드일 수 있다. XXE와 billion laughs의 공통 진입점은 DTD이므로, DOCTYPE을 만나면 파싱을 거부하는 것이 가장 단순하고 확실한 기본 방어다. 단 defusedxml은 기본값에서 엔티티 선언·외부 참조만 거부하므로, DOCTYPE까지 막으려면 `,(0,i.jsx)(t.code,{children:`forbid_dtd=True`}),`를 명시한다. 못 쓰는 환경이면 파서의 DTD·외부 엔티티·네트워크를 직접 끈다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`관련`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/public-api-integration-patterns`,children:`/notes/public-api-integration-patterns`}),` — 외부 입력을 다루는 통합 패턴`]})]})}function Dt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)($,{...e})}):$(e)}export{u as A,S as C,me as D,_e as E,ne as M,r as N,de as O,E as S,be as T,Me as _,mt as a,Ce as b,at as c,Xe as d,qe as f,Fe as g,Re as h,_t as i,ae as j,ce as k,nt as l,Ve as m,St as n,dt as o,We as p,bt as r,ct as s,Tt as t,$e as u,ke as v,v as w,A as x,Ee as y};