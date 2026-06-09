import{n as e}from"./rolldown-runtime-QTnfLwEv.js";import{g as t,v as n}from"./content-cases-BgF-y5bM.js";var ee=e({default:()=>ne,frontmatter:()=>te}),r=t(),te={title:`A/B 테스트 멈춤 신호 — 통계적 유의성 도달 전에 끝내야 할 때`,growth:`Budding`,topics:[`data`,`experiment`,`decision`,`product`],summary:`A/B 테스트는 '유의성 도달까지 기다리기'가 디폴트로 알려져 있지만, 실무에서는 유의성 도달 전에 멈춰야 하는 신호가 더 자주 발생한다. 5가지 신호와 멈춤 결정 프레임.`,plantedAt:`2026-05-28`,lastTendedAt:`2026-05-28`};function i(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`디폴트 가정`}),`
`,(0,r.jsx)(t.p,{children:`A/B 테스트의 교과서적 운영은 이렇다.`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:`가설 정의 + 표본 크기 계산`}),`
`,(0,r.jsx)(t.li,{children:`MDE(detectable effect)와 power(80%) 기준 sample size 결정`}),`
`,(0,r.jsx)(t.li,{children:`그 sample size 도달까지 테스트 유지`}),`
`,(0,r.jsx)(t.li,{children:`통계적 유의성(p < 0.05) 도달 → 결과 채택`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`실무에서는 이 운영이 종종 안 맞는다. 통계적 유의성 도달 전에 `,(0,r.jsx)(t.strong,{children:`멈춰야 하는`}),` 신호가 자주 나타난다.`]}),`
`,(0,r.jsx)(t.h2,{children:`신호 1 — 한쪽 variant가 명백히 사용자 경험을 해친다`}),`
`,(0,r.jsx)(t.p,{children:`A/B 중 B variant가 사용자 항의를 일으키고 있다. 환불 요청, CS 문의, 부정적 리뷰. 통계적으로는 차이가 안 보여도 정성적으로 명확하다.`}),`
`,(0,r.jsxs)(t.p,{children:[`이때 통계 도달까지 기다리면 그 사이 더 많은 사용자가 B를 만난다. 통계는 정답이 아니라 `,(0,r.jsx)(t.strong,{children:`의사결정 도구`}),`다. 정성 신호가 강하면 멈춰야 한다.`]}),`
`,(0,r.jsx)(t.h2,{children:`신호 2 — 비즈니스 컨텍스트가 바뀐다`}),`
`,(0,r.jsx)(t.p,{children:`테스트 도중 다음이 일어난다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`경쟁사가 비슷한 기능을 출시`}),`
`,(0,r.jsx)(t.li,{children:`정책/규제가 바뀜`}),`
`,(0,r.jsx)(t.li,{children:`다른 큰 기능 출시로 traffic 패턴이 바뀜`}),`
`,(0,r.jsx)(t.li,{children:`외부 이벤트(연휴·쇼핑 시즌·시장 충격)로 baseline이 흔들림`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`이때 테스트 결과의 baseline 자체가 의심스러워진다. 결과가 나와도 "이게 정상 상태의 결과인가, 외부 이벤트의 영향인가" 분리가 안 된다.`}),`
`,(0,r.jsxs)(t.p,{children:[`→ `,(0,r.jsx)(t.strong,{children:`멈추고 baseline이 안정된 후 재실행`}),`.`]}),`
`,(0,r.jsx)(t.h2,{children:`신호 3 — Sample Ratio Mismatch (SRM) 발생`}),`
`,(0,r.jsx)(t.p,{children:`A/B에 동일한 비율로 사용자를 배정했는데, 실제 데이터에서 비율이 크게 어긋난다 (예: 50/50 의도인데 53/47).`}),`
`,(0,r.jsxs)(t.p,{children:[`이건 통계적 유의성보다 먼저 본다. SRM이 있으면 `,(0,r.jsx)(t.strong,{children:`테스트 인프라 자체가 broken`}),`이다. 결과의 통계적 의미가 사라진다.`]}),`
`,(0,r.jsx)(t.p,{children:`→ 즉시 멈추고 인프라 디버깅. SRM 원인 (bot traffic, sticky bucketing 누락, 다중 디바이스 같은 사용자 분리 등) 파악 후 재실행.`}),`
`,(0,r.jsx)(t.h2,{children:`신호 4 — 효과가 너무 빨리 너무 크게 나온다`}),`
`,(0,r.jsx)(t.p,{children:`p < 0.001을 며칠 만에 도달했다. 좋은 신호일 수도 있지만 의심해야 한다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`novelty effect (새 디자인의 일시적 상승)`}),`
`,(0,r.jsx)(t.li,{children:`selection bias (특정 사용자 segment에 먼저 노출됨)`}),`
`,(0,r.jsx)(t.li,{children:`측정 버그 (event tracking이 한쪽만 잘못 측정)`}),`
`,(0,r.jsx)(t.li,{children:`regression to mean (직전에 dip이 있었음)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`→ 멈추고 검증. 효과가 진짜라면 한 번 더 테스트해도 같은 결과가 나온다. 가짜라면 두 번째 테스트에서 안 나온다.`}),`
`,(0,r.jsx)(t.h2,{children:`신호 5 — 의사결정이 결과와 무관하게 정해져 있다`}),`
`,(0,r.jsx)(t.p,{children:`리더십이 "어쨌든 B로 간다"고 정한 상황. 테스트는 형식적이다.`}),`
`,(0,r.jsx)(t.p,{children:`이때 테스트를 계속 돌리는 비용은 의미 없다. 멈추고 다른 가설로 옮기는 게 자원 효율적이다.`}),`
`,(0,r.jsx)(t.p,{children:`다만 이건 솔직히 인정해야 한다. "유의성 안 나와도 B로 간다"가 결정이면 테스트 자체를 안 하는 게 맞다. 테스트 시간만큼 다른 가설 검증에 쓸 수 있다.`}),`
`,(0,r.jsx)(t.h2,{children:`멈춤 결정 프레임`}),`
`,(0,r.jsx)(t.p,{children:`신호가 보이면 묻는다.`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`사용자 해`}),`: B variant가 사용자에게 해를 주고 있는가? → YES면 즉시 멈춤`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`인프라 신뢰`}),`: SRM 또는 측정 버그가 있는가? → YES면 멈추고 인프라 수정`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`외부 변화`}),`: baseline이 흔들렸는가? → YES면 멈추고 안정화 후 재시작`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`의사결정 효용`}),`: 결과가 나와도 의사결정에 안 쓰일 운명인가? → YES면 멈춤`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`이상 신호`}),`: 효과가 너무 빠르거나 너무 크지 않은가? → YES면 멈추고 재검증`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`다섯 질문에 한 번이라도 YES면 통계적 유의성 무관하게 멈추는 게 합리적이다.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`통계적 유의성을 의사결정의 유일한 기준으로`}),`: 유의성은 `,(0,r.jsx)(t.strong,{children:`필요조건`}),`이지 `,(0,r.jsx)(t.strong,{children:`충분조건`}),`이 아니다. 정성 신호·인프라 신뢰·외부 컨텍스트가 다 같이 본다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`MDE 무시한 power 부족 결정`}),`: 표본이 작아서 power 부족인데 결과 본 사람은 "차이 없음 = B 효과 없음"으로 해석. 실제로는 detectable하지 않을 뿐.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`peeking (반복 확인)`}),`: 테스트 도중 매일 결과 보고 유의성 도달 시 멈추는 운영은 `,(0,r.jsx)(t.strong,{children:`false positive 폭증`}),`의 원인. 멈춤 신호와 peeking은 다르다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`multi-comparison 미보정`}),`: 5개 metric을 동시에 보고 1개라도 유의하면 채택. Bonferroni 또는 BH 보정 없이는 false positive 위험.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`SRM 무시`}),`: SRM이 있는데도 결과 채택. 인프라가 broken인 결과는 의미 없다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`novelty effect 무시`}),`: 첫 주 효과만 보고 채택. 4주 이상 봐서 효과 지속성 확인.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`A/B 테스트는 통계로 자동 결정되는 시스템이 아니다. `,(0,r.jsx)(t.strong,{children:`통계는 필요조건, 정성·인프라·외부 컨텍스트가 같이 본다`}),`. 멈춤 신호 5개 중 하나라도 강하면 유의성 무관하게 멈추는 게 합리적이다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/incrementally-correct`,children:`/notes/incrementally-correct`}),` — 점진의 정합성
`,(0,r.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`/notes/one-way-two-way-door`}),` — 되돌릴 수 있는 결정과 아닌 결정
`,(0,r.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — 사람 개입 없이 검증되는 루프`]})]})}function ne(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}var re=e({default:()=>ae,frontmatter:()=>ie}),ie={title:`광고 지표 함정 — CTR·CVR·viewability·정산 불일치`,growth:`Seedling`,topics:[`advertising`,`data`,`metrics`,`backend`],summary:`광고 플랫폼의 지표는 정의가 미묘해서 같은 이름이 양쪽에서 다른 값이 된다. CTR 분모·viewability 기준·conversion 윈도우·정산 dedup. 4가지 함정.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function a(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`같은 이름, 다른 숫자`}),`
`,(0,r.jsx)(t.p,{children:`광고 플랫폼에서 가장 자주 보는 분쟁은 "지표가 안 맞는다"이다. 광고주 대시보드의 클릭 수와 매체 대시보드의 클릭 수가 다르다. 우리 정산과 광고주 측정 도구(MMP)의 conversion이 다르다.`}),`
`,(0,r.jsxs)(t.p,{children:[`대부분 버그가 아니라 `,(0,r.jsx)(t.strong,{children:`정의 차이`}),`다. 지표 이름은 같은데 분모·집계 윈도우·dedup 규칙이 다르면 숫자가 다르다. 4가지 함정이 반복된다.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정 1 — CTR의 분모`}),`
`,(0,r.jsx)(t.p,{children:`CTR = 클릭 / 노출. 단순해 보이지만 분모(노출)의 정의가 갈린다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`요청(request) 기준`}),`: 광고 요청이 온 횟수`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`응답(response) 기준`}),`: 광고를 실제로 내려준 횟수`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`렌더(rendered) 기준`}),`: 클라이언트에서 실제로 그려진 횟수`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`viewable 기준`}),`: 화면에 실제로 보인 횟수`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`같은 캠페인의 CTR이 분모를 무엇으로 잡느냐에 따라 2~3배 차이 난다. 요청 분모 CTR 1%가 viewable 분모로는 3%다.`}),`
`,(0,r.jsxs)(t.p,{children:[`→ `,(0,r.jsx)(t.strong,{children:`분모를 명시`}),`한다. "CTR"이 아니라 "viewable CTR" / "rendered CTR". 대시보드에 정의를 박는다.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정 2 — viewability 기준`}),`
`,(0,r.jsx)(t.p,{children:`"광고가 보였다"의 기준 (IAB 표준):`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`디스플레이: 픽셀의 `,(0,r.jsx)(t.strong,{children:`50%가 1초 이상`}),` 노출`]}),`
`,(0,r.jsx)(t.li,{children:`비디오: 픽셀의 50%가 2초 이상`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`그런데 측정 시점이 갈린다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`광고가 viewport에 들어온 순간?`}),`
`,(0,r.jsx)(t.li,{children:`IntersectionObserver가 50% threshold를 발화한 순간?`}),`
`,(0,r.jsx)(t.li,{children:`1초 타이머가 완료된 순간?`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`클라이언트 측정(IntersectionObserver)과 서버 집계 사이에 비동기 지연이 있으면, 사용자가 빠르게 스크롤하면 "들어왔다 나간" 노출이 viewable로 잡힐지 안 잡힐지 경계에서 흔들린다.`}),`
`,(0,r.jsxs)(t.p,{children:[`→ viewability는 `,(0,r.jsx)(t.strong,{children:`클라이언트에서 1초 타이머 완료 후에만 이벤트 전송`}),`. viewport 진입만으로 보내면 과집계.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정 3 — conversion 윈도우와 늦은 전환`}),`
`,(0,r.jsx)(t.p,{children:`conversion(전환)은 클릭 후 며칠 안의 구매를 센다. 윈도우가 정의를 바꾼다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`click-through 7일 / view-through 1일 (흔한 기본)`}),`
`,(0,r.jsx)(t.li,{children:`윈도우가 길수록 conversion ↑ (당연히)`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`늦은 전환(late conversion) 문제`}),`: 클릭은 오늘, 구매는 5일 후. 오늘 집계한 conversion에는 안 잡히고 5일 후 소급 반영된다. 그래서 `,(0,r.jsx)(t.strong,{children:`어제 숫자가 오늘 바뀐다`}),`. 실시간 대시보드를 믿은 사람은 "데이터가 변한다"고 항의.`]}),`
`,(0,r.jsxs)(t.p,{children:[`→ conversion 지표에는 `,(0,r.jsx)(t.strong,{children:`집계 기준 시각 + 윈도우`}),`를 항상 표기. "5/29 기준, 7일 윈도우"처럼. 소급 반영을 정상 동작으로 설명.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정 4 — 정산 dedup`}),`
`,(0,r.jsx)(t.p,{children:`정산은 돈이라 가장 엄격하다. 같은 클릭/전환이 두 번 세어지면 과금 분쟁.`}),`
`,(0,r.jsx)(t.p,{children:`중복 발생 원인:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`네트워크 재시도 (클라이언트가 같은 이벤트 2번 전송)`}),`
`,(0,r.jsx)(t.li,{children:`사용자 더블 클릭`}),`
`,(0,r.jsx)(t.li,{children:`봇/어뷰징`}),`
`,(0,r.jsx)(t.li,{children:`여러 디바이스의 같은 사용자`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`→ dedup 키 설계가 핵심. `,(0,r.jsx)(t.code,{children:`(user_id, ad_id, event_type, time_bucket)`}),` 같은 복합 키로 일정 윈도우 내 중복 제거. 멱등성 키 패턴이 그대로 적용된다.`]}),`
`,(0,r.jsx)(t.h2,{children:`지표 정의를 계약으로`}),`
`,(0,r.jsxs)(t.p,{children:[`양면 시장에서 지표 분쟁은 신뢰 비용이다. 해결책은 `,(0,r.jsx)(t.strong,{children:`지표 정의를 명시적 계약`}),`으로 만드는 것.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`각 지표의 분모·집계 윈도우·dedup 규칙을 문서화`}),`
`,(0,r.jsx)(t.li,{children:`광고주·매체 양쪽에 공개`}),`
`,(0,r.jsx)(t.li,{children:`측정 도구(MMP) discrepancy 허용 범위를 사전 합의 (보통 ±10%)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`정의가 계약이면 "숫자 다름"이 분쟁이 아니라 "정의 차이"로 설명된다.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`지표 이름만 같으면 같은 값이라 가정`}),`: 분모·윈도우가 다르면 다른 값. 이름에 정의를 붙인다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`실시간 대시보드를 정산 기준으로`}),`: 늦은 전환으로 숫자가 바뀐다. 정산은 윈도우 마감 후 확정값.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`클라이언트 측정을 100% 신뢰`}),`: adblock·네트워크 손실·봇으로 클라이언트 이벤트는 항상 누락/과집계. 서버 보정 필요.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`dedup 윈도우 없음`}),`: 무한 dedup은 메모리 폭발. 시간 버킷으로 윈도우 한정.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`MMP discrepancy를 버그로 취급`}),`: 측정 도구가 다르면 ±10%는 정상. 0% 일치를 기대하면 영원히 디버깅.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`광고 지표는 이름이 같아도 `,(0,r.jsx)(t.strong,{children:`분모·윈도우·dedup`}),`이 다르면 다른 값이다. 지표 정의를 명시적 계약으로 만들면 "숫자 안 맞음"이 분쟁에서 정의 차이로 바뀐다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/idempotency-keys-billing`,children:`/notes/idempotency-keys-billing`}),` — 정산 dedup의 멱등성 키 구현
`,(0,r.jsx)(t.a,{href:`/notes/ab-test-stop-signal`,children:`/notes/ab-test-stop-signal`}),` — 지표 해석의 멈춤 신호
`,(0,r.jsx)(t.a,{href:`/essays/two-sided-market-decisions`,children:`/essays/two-sided-market-decisions`}),` — 양면 시장에서 지표가 신뢰 비용인 이유
`,(0,r.jsx)(t.a,{href:`/essays/data-trust-two-sided`,children:`/essays/data-trust-two-sided`}),` — 양쪽이 숫자를 불신하는 구조`]})]})}function ae(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}var oe=e({default:()=>ce,frontmatter:()=>se}),se={title:`AI 반복 위임의 mode collapse — 출력이 한 점으로 수렴한다`,growth:`Seedling`,topics:[`ai`,`workflow`,`collaboration`,`content`],summary:`AI에게 "더 만들어줘"를 반복하면 출력이 점점 비슷해진다. 모델이 고확률 영역으로 수렴하는 mode collapse다. 다양성은 저절로 안 나오고 명시적으로 강제해야 한다.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function o(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`증상 — 5개씩 시켰는데 다 비슷하다`}),`
`,(0,r.jsx)(t.p,{children:`AI에게 같은 종류 작업을 반복 위임하면 한 가지 패턴이 나타난다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"글 5개 써줘" → 5개가 형식·관점·구조가 다 비슷`}),`
`,(0,r.jsx)(t.li,{children:`"다음 5개 더" → 직전 5개와 또 비슷`}),`
`,(0,r.jsx)(t.li,{children:`"테스트 케이스 더 만들어줘" → 같은 형태 케이스만 반복`}),`
`,(0,r.jsx)(t.li,{children:`"이 컴포넌트 변형 만들어줘" → 미묘하게 같은 레이아웃`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`처음엔 품질이 괜찮아 보이는데, 묶어 놓고 보면 `,(0,r.jsx)(t.strong,{children:`다양성이 없다`}),`. 같은 목소리, 같은 뼈대, 같은 추상화 수준. 이게 mode collapse다.`]}),`
`,(0,r.jsx)(t.h2,{children:`왜 수렴하는가`}),`
`,(0,r.jsxs)(t.p,{children:[`LLM은 다음 토큰을 확률 분포에서 고른다. 별다른 제약이 없으면 `,(0,r.jsx)(t.strong,{children:`고확률 영역`}),`(가장 "전형적"인 표현)을 반복 샘플링한다. 같은 프롬프트를 반복하면 매번 그 분포의 중심 근처에서 뽑으니 출력이 한 점으로 모인다.`]}),`
`,(0,r.jsxs)(t.p,{children:[`사람은 "지난번과 다르게 써야지"라는 메타 인지가 자동으로 작동한다. AI는 그 제약을 프롬프트에 명시하지 않으면 매 호출을 `,(0,r.jsx)(t.strong,{children:`독립적으로`}),` 처리해서 직전 출력을 회피하지 않는다.`]}),`
`,(0,r.jsx)(t.p,{children:`(용어 주의: "mode collapse"는 본래 GAN에서 생성기가 소수 출력만 내는 현상을 가리킨다. LLM의 반복 생성 수렴은 엄밀히는 mode-seeking 샘플링·낮은 다양성에 가깝지만, "출력이 한 점으로 모인다"는 직관이 같아 빌려 쓴다.)`}),`
`,(0,r.jsxs)(t.p,{children:[`핵심: `,(0,r.jsx)(t.strong,{children:`다양성은 모델의 기본값이 아니다.`}),` 명시적 제약이 없으면 평균으로 수렴한다.`]}),`
`,(0,r.jsx)(t.h2,{children:`다양성을 강제하는 4가지`}),`
`,(0,r.jsx)(t.h3,{children:`1. 라운드마다 시그니처를 명시`}),`
`,(0,r.jsx)(t.p,{children:`매 생성 묶음에 "이번엔 직전과 다른 축"을 명시한다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`직전 5개: 메타 운영 관점, 자기 경험 소스
이번 5개: 외부 데이터 소스(API·통계), 구체 코드 중심
→ 관점·소스·추상화 수준을 직전과 다르게
`})}),`
`,(0,r.jsx)(t.p,{children:`"5개 더"가 아니라 "직전과 다른 축으로 5개"가 프롬프트.`}),`
`,(0,r.jsx)(t.h3,{children:`2. 직전 N개를 회피 대상으로 전달`}),`
`,(0,r.jsx)(t.p,{children:`생성 전에 "이미 만든 것"의 목록을 주고 "이것들과 토픽·구조가 겹치지 않게"를 명시. 모델이 회피 제약을 받으면 분포의 다른 영역에서 샘플링한다.`}),`
`,(0,r.jsx)(t.h3,{children:`3. 차원 매트릭스로 강제 분산`}),`
`,(0,r.jsx)(t.p,{children:`생성 묶음 안에서도 각 항목이 다른 셀을 채우게 한다.`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`항목`}),(0,r.jsx)(t.th,{children:`형식`}),(0,r.jsx)(t.th,{children:`관점`}),(0,r.jsx)(t.th,{children:`추상화`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`1`}),(0,r.jsx)(t.td,{children:`코드 노트`}),(0,r.jsx)(t.td,{children:`구체`}),(0,r.jsx)(t.td,{children:`낮음`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`2`}),(0,r.jsx)(t.td,{children:`회고`}),(0,r.jsx)(t.td,{children:`경험`}),(0,r.jsx)(t.td,{children:`중간`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`3`}),(0,r.jsx)(t.td,{children:`에세이`}),(0,r.jsx)(t.td,{children:`원칙`}),(0,r.jsx)(t.td,{children:`높음`})]})]})]}),`
`,(0,r.jsx)(t.p,{children:`매트릭스를 먼저 정의하면 5개가 자동으로 분산된다.`}),`
`,(0,r.jsx)(t.h3,{children:`4. 생성 후 분포 측정`}),`
`,(0,r.jsxs)(t.p,{children:[`만든 묶음을 분포로 측정한다. "5개 중 4개가 같은 형식"이면 mode collapse 신호. `,(0,r.jsx)(t.a,{href:`/notes/coverage-gap-analysis`,children:`coverage gap 분석`}),`과 같은 도구.`]}),`
`,(0,r.jsx)(t.h2,{children:`일반화 — 콘텐츠만의 문제가 아니다`}),`
`,(0,r.jsx)(t.p,{children:`mode collapse는 모든 반복 AI 위임에 나타난다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`코드 생성`}),`: 같은 패턴·같은 추상화. "다른 접근으로 한 번 더"를 명시 안 하면 첫 답의 변주만.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`테스트 생성`}),`: happy path만 반복. "엣지·에러·경계 케이스"를 차원으로 명시해야 분산.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`디자인 변형`}),`: 미묘하게 같은 레이아웃. "완전히 다른 레이아웃 원리로"를 강제.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`네이밍·카피`}),`: 같은 톤. 후보를 뽑을 때 "톤이 다른 3개"를 명시.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"창의적으로 해줘"로 다양성 기대`}),`: 추상적 지시는 약하다. 구체적 회피 대상·차원을 명시해야 분산.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`temperature만 높이기`}),`: 무작위성은 늘지만 품질이 떨어지고 진짜 다른 관점은 안 나온다. 제약이 무작위성보다 효과적.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`한 번에 다 시키기`}),`: "20개 써줘"는 더 심한 수렴. 5개씩 + 직전 회피가 낫다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`수렴을 품질 문제로 오진`}),`: 각 항목은 잘 썼는데 묶음이 단조로운 것. 개별 품질이 아니라 분포의 문제.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`사람도 같은 함정`}),`: 사람도 관성으로 비슷하게 만든다. mode collapse는 AI 고유가 아니라 명시적 다양성 제약의 부재 문제.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`AI의 기본값은 다양성이 아니라 평균으로의 수렴이다. 반복 위임에서 `,(0,r.jsx)(t.strong,{children:`다양성은 명시적으로 강제해야`}),` 나온다 — 시그니처 지정, 회피 대상 전달, 차원 매트릭스, 분포 측정.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/coverage-gap-analysis`,children:`/notes/coverage-gap-analysis`}),` — 생성물의 분포를 측정해 수렴 감지
`,(0,r.jsx)(t.a,{href:`/notes/operationalizing-vague-requests`,children:`/notes/operationalizing-vague-requests`}),` — "다양하게"를 측정 기준으로
`,(0,r.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 다른 모델로 분포 자체를 다양화
`,(0,r.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`}),` — 3 에이전트 경쟁도 수렴 회피의 한 형태
`,(0,r.jsx)(t.a,{href:`/essays/ai-coding-tools-six-months`,children:`/essays/ai-coding-tools-six-months`}),` — AI 도구 6개월 사용 회고`]})]})}function ce(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}var le=e({default:()=>de,frontmatter:()=>ue}),ue={title:`옛 레포 archive할까 keep할까 — 정리 기준`,growth:`Budding`,topics:[`github`,`learning`,`career`,`ops`],summary:`6년 누적된 30+ 학습 레포. 모두 두면 신호 노이즈, 다 지우면 흔적 0. 4가지 분류 기준으로 archive/keep/private을 결정한다.`,plantedAt:`2026-05-14`,lastTendedAt:`2026-05-29`};function s(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — 30+ 학습 레포의 운영`}),`
`,(0,r.jsx)(t.p,{children:`GitHub 프로필에 6년치 학습 레포가 쌓인다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`2020년 React 첫 학습 (react-tetris)`}),`
`,(0,r.jsx)(t.li,{children:`2021년 백엔드 입문 (mern-stack-boilerplate)`}),`
`,(0,r.jsx)(t.li,{children:`2022년 GraphQL 시도 (graphql-apollo)`}),`
`,(0,r.jsx)(t.li,{children:`2023년 Webpack Module Federation (mfp)`}),`
`,(0,r.jsx)(t.li,{children:`2024년 첫 회사 (j-chat)`}),`
`,(0,r.jsx)(t.li,{children:`...`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`전부 두면:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`프로필이 "학습 흔적"으로 뒤덮임 (긍정 신호)`}),`
`,(0,r.jsx)(t.li,{children:`하지만 "최근 작업"이 묻힘 (부정 신호)`}),`
`,(0,r.jsx)(t.li,{children:`6년 전 코드 수준이 외부에 노출 (부정 신호)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`전부 지우면:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`학습 흔적 0 → 어떻게 자라왔는지 안 보임`}),`
`,(0,r.jsx)(t.li,{children:`학습 자산 0 → 6년 전 본인이 한 게 사라짐`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`중간이 답`}),`. 4가지 기준으로 분류.`]}),`
`,(0,r.jsx)(t.h2,{children:`4가지 분류`}),`
`,(0,r.jsx)(t.h3,{children:`1. Keep (public, top 위치)`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`1년 안에 만진 적 있음`}),`
`,(0,r.jsx)(t.li,{children:`README + license + 동작 가능`}),`
`,(0,r.jsx)(t.li,{children:`본인 capability 신호로 작용`}),`
`,(0,r.jsx)(t.li,{children:`다른 글·노트에서 인용 가능`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`→ 그대로 두기. 정기 lastTendedAt 갱신.`}),`
`,(0,r.jsx)(t.h3,{children:`2. Archive (read-only)`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`6개월+ 안 만짐`}),`
`,(0,r.jsx)(t.li,{children:`학습 가치는 있는데 현재 가치 약함`}),`
`,(0,r.jsx)(t.li,{children:`README는 있고 동작은 함`}),`
`,(0,r.jsx)(t.li,{children:`"이 시점의 내가 무엇을 만들었는가" 흔적`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`→ GitHub archive. 검색은 되지만 push·issue 닫힘. 명시적 "더 이상 활성 아님" 신호.`}),`
`,(0,r.jsx)(t.h3,{children:`3. Private (숨김)`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`코드 수준이 부끄러움`}),`
`,(0,r.jsx)(t.li,{children:`동작 안 함 또는 README 없음`}),`
`,(0,r.jsx)(t.li,{children:`본인만 의미 (학습 메모)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`→ GitHub private 전환. 본인은 접근, 외부엔 안 보임. 삭제보다 안전 (히스토리 보존).`}),`
`,(0,r.jsx)(t.h3,{children:`4. Delete (드물게)`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`민감 정보 포함 (`,(0,r.jsx)(t.code,{children:`.env`}),` 노출 등)`]}),`
`,(0,r.jsx)(t.li,{children:`1차 시도 후 즉시 다시 만든 미완성 repo`}),`
`,(0,r.jsx)(t.li,{children:`학습 가치 0이고 흔적 없어도 됨`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`→ `,(0,r.jsx)(t.code,{children:`gh repo delete`}),`. 영구 삭제. 신중히.`]}),`
`,(0,r.jsx)(t.h2,{children:`분류 작업 흐름`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`# public 레포 목록 (push 날짜순)
gh repo list <user> --visibility public --limit 100 \\
  --json name,pushedAt,description,isArchived \\
  --jq 'sort_by(.pushedAt) | reverse'

# 각 repo 검토
gh repo view <user>/<repo>

# archive
gh repo archive <user>/<repo>

# private 전환
gh repo edit <user>/<repo> --visibility private
`})}),`
`,(0,r.jsx)(t.p,{children:`분기 1회 (3개월마다) 1시간 작업. 다음 한 분기 동안 유지.`}),`
`,(0,r.jsx)(t.h2,{children:`어떤 게 keep할 가치 있나`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`신호`}),(0,r.jsx)(t.th,{children:`keep?`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`회사에서 인용 가능 (RFC·온보딩)`}),(0,r.jsx)(t.td,{children:`✅ keep`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`본인 사이트에서 cross-link`}),(0,r.jsx)(t.td,{children:`✅ keep`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`다른 사람이 fork·star 함`}),(0,r.jsx)(t.td,{children:`✅ keep (외부 가치 신호)`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`채용 인터뷰 시 "이거 봤어요"`}),(0,r.jsx)(t.td,{children:`✅ keep`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`1년 동안 본인 외 0명 방문`}),(0,r.jsx)(t.td,{children:`⚠ archive 후보`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`코드가 본인이 봐도 부끄러움`}),(0,r.jsx)(t.td,{children:`⚠ private 후보`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:`.env`}),`가 commit됨`]}),(0,r.jsx)(t.td,{children:`🔒 즉시 private + git history 정리`})]})]})]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`너무 일찍 archive`}),`: 1-2개월 안 만진 거라고 archive하면 다시 작업 시 활성화 필요. 6개월 임계.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`README 0 repos`}),`: GitHub은 description 있어도 README 없으면 "incomplete" 인상. archive 전에 짧은 README라도.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`license 누락`}),`: license 없는 repo는 외부 사용자 입장에서 "사용 불가". MIT 한 줄이라도.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`archive해도 노출`}),`: GitHub 검색·프로필에서 여전히 보임. 완전 숨기려면 private.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`delete 후 못 돌림`}),`: GitHub repo delete는 일정 기간 안에 복원 가능하지만 보통 즉시 영구. archive·private이 안전.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`모든 학습 레포 archive`}),`: "학습 멈춤"으로 보일 수 있음. 진행 중인 한두 개는 active 상태 유지.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`6년 누적 학습 레포는 `,(0,r.jsx)(t.strong,{children:`자산이자 노이즈`}),`다. Keep/Archive/Private/Delete 4분류로 분기마다 정리하면 프로필이 "현재의 본인"을 정확히 보여준다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/learning-repo-sandbox-value`,children:`/notes/learning-repo-sandbox-value`}),` — 학습 레포의 가치
`,(0,r.jsx)(t.a,{href:`/notes/recruiter-10-seconds`,children:`/notes/recruiter-10-seconds`}),` — 채용 담당자 10초 동안 무엇을 보나
`,(0,r.jsx)(t.a,{href:`/notes/last-tended-signal`,children:`/notes/last-tended-signal`}),` — 다듬은 흔적이 신호`]})]})}function de(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}var fe=e({default:()=>me,frontmatter:()=>pe}),pe={title:`비동기 PR 리뷰 SLO — 팀의 throughput을 결정하는 숫자`,growth:`Seedling`,topics:[`collaboration`,`pr`,`team`,`throughput`],summary:`PR 리뷰가 며칠씩 걸리는 팀은 throughput이 절반이다. 리뷰 SLO를 명시하면 팀의 lead time이 비선형으로 짧아진다. SLO 설계와 함정.`,plantedAt:`2026-05-28`,lastTendedAt:`2026-05-28`};function c(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`리뷰 대기가 throughput을 죽인다`}),`
`,(0,r.jsx)(t.p,{children:`PR 1개의 lead time을 분해하면 보통 이렇다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`코드 작성: 4시간`}),`
`,(0,r.jsx)(t.li,{children:`PR 열기: 5분`}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`첫 리뷰까지 대기: 1-3일`}),` ← 여기`]}),`
`,(0,r.jsx)(t.li,{children:`리뷰 코멘트 대응: 1시간`}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`두 번째 리뷰까지 대기: 1-2일`}),` ← 여기`]}),`
`,(0,r.jsx)(t.li,{children:`머지: 5분`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`코드 작성보다 `,(0,r.jsx)(t.strong,{children:`리뷰 대기`}),`가 lead time의 80%를 차지한다. PR 1개당 3-5일이 표준이 된다.`]}),`
`,(0,r.jsx)(t.p,{children:`이걸 SLO로 바꾸면 lead time이 비선형으로 짧아진다.`}),`
`,(0,r.jsx)(t.h2,{children:`SLO 예시`}),`
`,(0,r.jsx)(t.p,{children:`팀에서 합의한 숫자.`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`항목`}),(0,r.jsx)(t.th,{children:`목표`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`첫 리뷰까지`}),(0,r.jsxs)(t.td,{children:[`평일 기준 `,(0,r.jsx)(t.strong,{children:`4시간 이내`}),` (P50), `,(0,r.jsx)(t.strong,{children:`24시간 이내`}),` (P95)`]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`코멘트 대응 후 재리뷰`}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:`2시간 이내`}),` (P50)`]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`머지 후 deploy까지`}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:`30분 이내`}),` (CI 통과 시)`]})]})]})]}),`
`,(0,r.jsxs)(t.p,{children:[`숫자가 크지 않다. 일을 더 시키는 게 아니라 `,(0,r.jsx)(t.strong,{children:`순서`}),`를 바꾸는 것이다.`]}),`
`,(0,r.jsx)(t.h2,{children:`왜 효과가 비선형인가`}),`
`,(0,r.jsx)(t.p,{children:`PR 1개의 lead time이 5일 → 1일로 줄면 lead time만 5배 짧아지는 게 아니다.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`WIP(work in progress)이 같이 줄어든다`}),`. 5일짜리 PR이 동시에 N개 열려있는 상태에서, 1일짜리로 줄면 동시 열린 PR이 N/5개로 줄어든다. 작성자는 자기 PR이 빨리 머지되니까 다음 작업으로 빨리 옮길 수 있다.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`리뷰 품질도 같이 올라간다`}),`. 1일된 PR과 5일된 PR을 리뷰하는데 같은 시간이 든다고 가정해도, 1일된 PR이 컨텍스트가 더 선명해서 리뷰 정확도가 높다. 5일 전에 작성된 PR을 리뷰하면 작성자도 컨텍스트가 흐려져서 review 응답이 느려진다.`]}),`
`,(0,r.jsx)(t.h2,{children:`운영 규칙`}),`
`,(0,r.jsx)(t.p,{children:`SLO를 설정한다고 자동으로 지켜지진 않는다. 운영 메커니즘 필요.`}),`
`,(0,r.jsx)(t.h3,{children:`1. 리뷰 notification 정리`}),`
`,(0,r.jsx)(t.p,{children:`Slack/Discord에 PR 알림 채널 분리. 멤버는 그 채널만 보고 자기 차례인 리뷰를 빠르게 본다.`}),`
`,(0,r.jsx)(t.h3,{children:`2. round-robin assignee`}),`
`,(0,r.jsx)(t.p,{children:`CODEOWNERS + GitHub auto-assign. 작성자가 "누구 리뷰 부탁" 안 골라도 자동 배정.`}),`
`,(0,r.jsx)(t.h3,{children:`3. 리뷰 우선순위 명시`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`🔥 hotfix → 30분 이내`}),`
`,(0,r.jsx)(t.li,{children:`🚀 작은 변경 (< 200 lines) → 4시간 이내`}),`
`,(0,r.jsx)(t.li,{children:`📦 큰 변경 (> 500 lines) → 24시간 이내 (그리고 나누자고 제안)`}),`
`]}),`
`,(0,r.jsx)(t.h3,{children:`4. async pairing time`}),`
`,(0,r.jsx)(t.p,{children:`매일 30분-1시간을 "리뷰 전용 시간"으로 캘린더 블록. 그 시간에 쌓인 리뷰를 한 번에 처리.`}),`
`,(0,r.jsx)(t.h3,{children:`5. SLO 위반 모니터링`}),`
`,(0,r.jsx)(t.p,{children:`월별로 SLO 위반 빈도 측정. 위반이 많으면 SLO를 낮추거나 (현실 인정) 운영을 바꾸거나 (인력 추가·교육).`}),`
`,(0,r.jsx)(t.h2,{children:`SLO ≠ 더 빨리 일하기`}),`
`,(0,r.jsx)(t.p,{children:`오해 1: SLO는 사람을 더 빨리 일하게 만드는 도구가 아니다.`}),`
`,(0,r.jsx)(t.p,{children:`오해 2: SLO는 리뷰 품질을 낮추는 도구가 아니다.`}),`
`,(0,r.jsxs)(t.p,{children:[`SLO의 핵심은 `,(0,r.jsx)(t.strong,{children:`순서`}),`다. "지금 작성한 코드보다 리뷰 대기 중인 PR이 더 lead time critical하다"는 우선순위를 명시한 것. 본인 일을 잠시 멈추고 리뷰를 먼저 처리하는 게 팀 throughput에 더 기여한다.`]}),`
`,(0,r.jsx)(t.p,{children:`이게 동의 안 되면 SLO가 안 지켜진다. SLO는 합의 위에 동작.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`SLO 없이 "빨리 봐주세요"`}),`: 매번 작성자가 리뷰어를 졸라야 하는 운영. 작성자·리뷰어 양쪽 비용. SLO는 명시적 규칙.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`너무 짧은 SLO`}),`: 1시간 이내 첫 리뷰는 깊은 작업 흐름을 깬다. 4시간이 적당.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`SLO 위반 페널티`}),`: 위반 시 누구 잘못 따지는 운영은 사람 부담만 늘림. `,(0,r.jsx)(t.strong,{children:`위반 빈도 모니터링`}),`이지 `,(0,r.jsx)(t.strong,{children:`개인 책임 추궁`}),`이 아님.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`모든 PR에 같은 SLO`}),`: hotfix와 큰 리팩토링이 같은 SLO면 둘 다 잘못 처리됨. 우선순위별 SLO 분리.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`시니어가 리뷰 안 함`}),`: 시니어가 SLO 위반의 주범이면 팀이 안 따라옴. 시니어부터 SLO 지키기.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`non-blocking 리뷰 vs blocking 리뷰 혼동`}),`: nit 코멘트는 머지를 막지 않아야 한다. 단정형 지적만 blocking.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`리뷰 대기가 lead time의 80%다. `,(0,r.jsx)(t.strong,{children:`SLO 4-24시간`}),`으로 명시하면 throughput이 비선형으로 올라간다. 운영 메커니즘(알림 채널·round-robin·전용 시간) + 합의(작성자·리뷰어 양쪽 우선순위 동의)가 SLO를 동작시킨다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/code-review-real-value`,children:`/notes/code-review-real-value`}),` — 리뷰의 진짜 가치
`,(0,r.jsx)(t.a,{href:`/notes/code-review-comment-tone`,children:`/notes/code-review-comment-tone`}),` — 리뷰 톤이 SLO보다 먼저
`,(0,r.jsx)(t.a,{href:`/notes/small-deploy-reread`,children:`/notes/small-deploy-reread`}),` — 작은 배포가 SLO와 잘 맞물린다`]})]})}function me(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}var he=e({default:()=>_e,frontmatter:()=>ge}),ge={title:`자동화 시스템 vs 거버넌스 부담 — 숨은 trade-off`,growth:`Seedling`,topics:[`workflow`,`automation`,`governance`,`tradeoff`],summary:`자동화는 사람 부담을 줄이려는 의도지만, 보안·품질 검증·운영 의지 같은 거버넌스 요구가 증가하면 net 부담은 늘 수 있다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-28`};function l(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`직관`}),`
`,(0,r.jsx)(t.p,{children:`"자동화하면 일이 줄어든다." — 보통 맞다. 하지만 항상은 아니다.`}),`
`,(0,r.jsx)(t.h2,{children:`반례`}),`
`,(0,r.jsxs)(t.p,{children:[`이번에 일일 콘텐츠 자동 추출 시스템 PoC를 4 페르소나(SWE·법무·콘텐츠·운영 사용자)로 평가했더니, 자동화가 만드는 `,(0,r.jsx)(t.strong,{children:`거버넌스 부담`}),`이 본 작업보다 클 수 있다는 결론이 나왔다.`]}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`영역`}),(0,r.jsx)(t.th,{children:`자동화 전 (수동)`}),(0,r.jsx)(t.th,{children:`자동화 후`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`작성`}),(0,r.jsx)(t.td,{children:`매일 30분`}),(0,r.jsx)(t.td,{children:`매일 0분 (자동)`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`보안 검토`}),(0,r.jsx)(t.td,{children:`N/A`}),(0,r.jsx)(t.td,{children:`false positive 컨펌, redaction 룰 튜닝`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`품질 검토`}),(0,r.jsx)(t.td,{children:`N/A`}),(0,r.jsx)(t.td,{children:`AI 톤 오염 감시, 1인칭 톤 보호`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`시스템 운영`}),(0,r.jsx)(t.td,{children:`N/A`}),(0,r.jsx)(t.td,{children:`cron·hook 유지, 사고 시 incident response`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:`합계`})}),(0,r.jsx)(t.td,{children:`30분`}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:`30분 이상 가능`})})]})]})]}),`
`,(0,r.jsx)(t.h2,{children:`함의 — 자동화 전 자문할 세 가지`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`자동화가 만드는 거버넌스 일이 자동화하는 실작업보다 작은가?`})}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`거버넌스 일은 누가 책임지는가?`}),` (자동화의 보안 사고 = 결국 사람이 수습)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`사고 1건의 비용 vs 자동화의 시간 절감 누적 가치`}),`를 비교했는가?`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`이번 PoC에서는 법무 검토자가 "현 PLAN 상태로 publish 절대 금지, 4주 dry-run 필요"라고 단호하게 못박았다. 자동화 1주 작업 vs 4주 dry-run 운영 — 시간 절감 가설이 깨진다.`}),`
`,(0,r.jsx)(t.h2,{children:`운영 사용자의 BLOCKING`}),`
`,(0,r.jsxs)(t.p,{children:[`내가 가장 두려운 건 검토 부담이 아니라 `,(0,r.jsx)(t.strong,{children:`회사 정보 유출 1건`}),`이다. 자동화 수준을 높일수록 이 리스크가 비선형으로 커진다. 익명화 필터의 false negative rate를 어떻게 측정·신뢰할지가 진짜 blocker. 이게 해결 안 되면 차라리 시스템을 안 만드는 게 낫다.`]}),`
`,(0,r.jsxs)(t.p,{children:[`이건 SRE·법무·콘텐츠 전략가 누구도 짚지 못한 BLOCKING이었다. `,(0,r.jsx)(t.strong,{children:`본인 페르소나로 자기 평가했을 때`}),`만 나오는 솔직한 신호.`]}),`
`,(0,r.jsx)(t.h2,{children:`자동화는 일을 줄이는 게 아니라`}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`일의 종류를 바꾼다.`})}),`
`,(0,r.jsx)(t.p,{children:`수동 작성 → 거버넌스 운영. 둘 중 어느 쪽이 자신에게 더 sustainable한지가 결정 기준이지, "자동화 = 무조건 이득"은 아니다.`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`후속(2026-06): 이 PoC의 보수적 결론은 이후 주간 봇이 "자동 초안 작성 + PR 게이트"로 전환되며 일부 뒤집혔다. 핵심 명제는 그대로다 — 거버넌스는 사라지지 않고 "공개 전 사람이 PR을 보는 게이트" 형태로 남았다.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`자동화 인프라 자체가 essential complexity인 줄 알지만 대부분 accidental complexity다 (Brooks).`}),`
`,(0,r.jsx)(t.li,{children:`자동화의 ROI 측정에는 사고 risk-adjusted 비용을 포함해야 한다 — 빈도 × 회복 비용.`}),`
`,(0,r.jsx)(t.li,{children:`"자동화하면 미래에 시간 절약" 같은 미래 가치는 할인율을 빼고 계산하기 쉽다.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`}),` — 자동 라우팅이 만드는 거버넌스 부담을 dispatch 패턴 관점에서 본 사례
`,(0,r.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`/notes/one-way-two-way-door`}),` — 자동화는 보통 one-way door, 거버넌스 설계 전 의사결정 방향 확인
`,(0,r.jsx)(t.a,{href:`/notes/self-persona-evaluation`,children:`/notes/self-persona-evaluation`}),` — 같은 PoC에서 본인 페르소나가 짚은 솔직한 BLOCKING
`,(0,r.jsx)(t.a,{href:`/essays/garden-fallow-meaning`,children:`/essays/garden-fallow-meaning`}),` — 자동화 안 함이 운영의 일부일 수 있다는 메타
`,(0,r.jsx)(t.a,{href:`/notes/coderabbit-cubic-double-review`,children:`/notes/coderabbit-cubic-double-review`}),` — 자동 리뷰 도구가 만드는 거버넌스 부담의 한 사례
`,(0,r.jsx)(t.a,{href:`/cases/automation-poc-design`,children:`/cases/automation-poc-design`}),` — 거버넌스 부담을 평가한 자동화 PoC 케이스
`,(0,r.jsx)(t.a,{href:`/logs#2026-06-08-writing-bot-reversal`,children:`/logs#2026-06-08-writing-bot-reversal`}),` — 이 보수적 결론을 2주 운영 후 자동 초안+PR 게이트로 전환한 후속`]})]})}function _e(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}var ve=e({default:()=>be,frontmatter:()=>ye}),ye={title:`chalk + boxen으로 터미널 시각 카드 — ANSI fallback까지`,growth:`Budding`,topics:[`cli`,`npm`,`terminal`,`design`],summary:`터미널은 평면 텍스트가 아니다. chalk(색)·boxen(박스)·figlet(ASCII art)로 잡지(magazine) 같은 카드. NO_COLOR·width 변동·이모지 깨짐 대비.`,plantedAt:`2026-05-11`,lastTendedAt:`2026-05-29`};function u(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — 터미널 출력은 보통 plain하다`}),`
`,(0,r.jsxs)(t.p,{children:[`CLI 도구를 만들 때 출력은 보통 `,(0,r.jsx)(t.code,{children:`console.log`}),` 한 줄. 시각적 위계 없음.`]}),`
`,(0,r.jsx)(t.p,{children:`좋은 CLI는 시각적 위계가 있다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`제목·강조는 색·굵게`}),`
`,(0,r.jsx)(t.li,{children:`그룹은 박스로`}),`
`,(0,r.jsx)(t.li,{children:`상태는 색·이모지`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`3가지 라이브러리 조합으로 충분.`}),`
`,(0,r.jsx)(t.h2,{children:`chalk — 색·스타일`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`import chalk from 'chalk';

console.log(chalk.bold.cyan('Title'));
console.log(chalk.dim('subtitle'));
console.log(chalk.green('✓ success'));
console.log(chalk.red('✗ error'));
`})}),`
`,(0,r.jsx)(t.p,{children:`색 종류 16개 기본, RGB 256색, true color. 환경 감지 자동.`}),`
`,(0,r.jsx)(t.h2,{children:`boxen — 박스 박스`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`import boxen from 'boxen';

console.log(boxen('Hello\\nWorld', {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'cyan',
  align: 'center',
}));
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`borderStyle`}),`: `,(0,r.jsx)(t.code,{children:`single`}),`·`,(0,r.jsx)(t.code,{children:`double`}),`·`,(0,r.jsx)(t.code,{children:`round`}),`·`,(0,r.jsx)(t.code,{children:`bold`}),`·`,(0,r.jsx)(t.code,{children:`classic`}),` 등. `,(0,r.jsx)(t.code,{children:`round`}),`가 가장 부드러움.`]}),`
`,(0,r.jsx)(t.h2,{children:`조합 — 명함 카드 예시`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`import chalk from 'chalk';
import boxen from 'boxen';

const card = [
  chalk.bold.white('Justin Jeong') + chalk.dim(' / Senior FE'),
  '',
  chalk.cyan('github')  + '  github.com/justinjeong5',
  chalk.cyan('email')   + '   justin@example.com',
  chalk.cyan('site')    + '    justinjeong5.github.io',
].join('\\n');

console.log(boxen(card, {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'cyan',
}));
`})}),`
`,(0,r.jsx)(t.p,{children:`30줄도 안 되는 코드가 시각적 카드가 된다.`}),`
`,(0,r.jsx)(t.h2,{children:`ANSI fallback (NO_COLOR·CI)`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`NO_COLOR`}),` 환경변수가 있거나 `,(0,r.jsx)(t.code,{children:`process.stdout.isTTY === false`}),` (pipe·redirect)면 색을 꺼야 한다.`]}),`
`,(0,r.jsx)(t.p,{children:`chalk은 자동 감지. 다만 boxen은 박스 문자 자체는 unicode라 일부 환경에서 깨짐.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`const supportsUnicode = process.env.TERM_PROGRAM === 'vscode' || process.platform !== 'win32';

const borderStyle = supportsUnicode ? 'round' : 'classic';
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`classic`}),`은 ASCII (`,(0,r.jsx)(t.code,{children:`+`}),`, `,(0,r.jsx)(t.code,{children:`-`}),`, `,(0,r.jsx)(t.code,{children:`|`}),`) 기반이라 어디서나 동작.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`chalk v5+ ESM 전용`}),`: CommonJS에서 `,(0,r.jsx)(t.code,{children:`require('chalk')`}),` 깨짐. v4까지가 CJS 호환. ESM 적용 안 됐으면 chalk@4.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`width 가정 hardcode`}),`: 터미널 너비 80자 가정하면 좁은 창에서 줄바꿈 깨짐. `,(0,r.jsx)(t.code,{children:`process.stdout.columns`}),` 감지.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`이모지 환경 의존`}),`: macOS·Linux는 OK, Windows cmd·일부 SSH는 깨짐. fallback char 준비.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`NO_COLOR 무시`}),`: 색 강제하면 접근성 떨어짐. chalk default 따르기.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`boxen padding 0`}),`: 텍스트가 박스 모서리에 붙으면 답답. padding 1+ 권장.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`너무 많은 색`}),`: 5색 이상은 시각적 노이즈. 1-2색 강조 + 나머지 dim.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`터미널 출력에 위계만 줘도 사용자 신뢰가 비선형으로 올라간다. `,(0,r.jsx)(t.strong,{children:`chalk + boxen 두 라이브러리면 충분`}),`하다. NO_COLOR·width·이모지 fallback이 production 차이.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/npx-name-business-card`,children:`/notes/npx-name-business-card`}),` — 카드의 큰 그림
`,(0,r.jsx)(t.a,{href:`/notes/npm-publish-checklist`,children:`/notes/npm-publish-checklist`}),` — 패키지로 publish할 때
`,(0,r.jsx)(t.a,{href:`/notes/ios-hig-touch-targets`,children:`/notes/ios-hig-touch-targets`}),` — 같은 "platform 컨벤션 존중" 철학`]})]})}function be(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}var xe=e({default:()=>Ce,frontmatter:()=>Se}),Se={title:`CI 캐시·incremental build — 빌드 30분을 5분으로`,growth:`Seedling`,topics:[`devops`,`ci`,`build`,`performance`],summary:`monorepo CI 시간은 모든 PR의 비용. 캐시 레이어·incremental build·병렬화로 절감. 작업 시간이 아니라 cumulative cost로 보면 절감 가치가 압도적.`,plantedAt:`2026-05-02`,lastTendedAt:`2026-05-20`};function d(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — CI 30분의 진짜 비용`}),`
`,(0,r.jsx)(t.p,{children:`monorepo의 CI가 PR당 30분이라면:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`하루 PR 20건 = CI 시간 600분 = 10시간`}),`
`,(0,r.jsx)(t.li,{children:`평일 한 달 = 200시간 ≈ 25 worker day`}),`
`,(0,r.jsx)(t.li,{children:`비용 (cloud CI): 시간당 $0.5라면 월 $100+ (worker 수 곱하기)`}),`
`,(0,r.jsx)(t.li,{children:`개발자 대기 비용: 30분 × 20명 × 매일 = "PR review까지 30분 이상 기다림" 누적`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`작업 시간으로만 보면 "30분이면 견딜만" 같지만 cumulative cost는 큼. 빌드 시간 단축의 임팩트는 비선형.`}),`
`,(0,r.jsx)(t.h2,{children:`절감 3축`}),`
`,(0,r.jsx)(t.h3,{children:`1. 캐시 레이어`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`dependency cache`}),`: `,(0,r.jsx)(t.code,{children:`pnpm install`}),` 결과 캐싱. 같은 lockfile이면 캐시 hit.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`build artifact cache`}),`: turbo·nx·bazel 같은 monorepo 도구의 hash 기반 캐시. 변경되지 않은 패키지는 캐시에서 가져옴.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Docker layer cache`}),`: 이미지 빌드 시 변경되지 않은 layer 재사용.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`가장 큰 효과는 보통 dependency cache. install이 빌드 시간의 30-50% 차지.`}),`
`,(0,r.jsx)(t.h3,{children:`2. incremental build`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`turbo run build --filter=...[origin/main]
`})}),`
`,(0,r.jsx)(t.p,{children:`main과 비교해 변경된 패키지만 빌드. 1편 PR이 다른 50개 패키지를 빌드할 이유가 없다.`}),`
`,(0,r.jsx)(t.p,{children:`monorepo가 작으면 효과 ↓, 크면 ↑. 100+ 패키지면 incremental이 핵심.`}),`
`,(0,r.jsx)(t.h3,{children:`3. 병렬화`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`parallel job`}),`: lint·typecheck·test 따로 job. 직렬 30분이 병렬 10분.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`matrix`}),`: 여러 Node 버전·여러 OS 매트릭스 병렬.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`shard test`}),`: 큰 테스트 suite을 N개로 split.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`측정 → 개선 → 재측정`}),`
`,(0,r.jsx)(t.p,{children:`빌드 시간 측정 없이 개선하면 어디가 병목인지 모름.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`CI 로그에서 각 step duration 확인
가장 긴 step부터 절감
보통 install / build / test 셋 중 하나가 50%+ 차지
`})}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`캐시 hit 검증 안 함`}),`: 캐시 설정만 했는데 실제 hit rate 0%인 경우 흔함. cache key가 잘못됐거나 invalidation이 매번. metric으로 확인.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`병렬화 과잉`}),`: job 50개 병렬은 cloud 비용 ↑, queue 대기 ↑. 적정선(5-10) 찾기.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`incremental의 가짜 캐시 hit`}),`: 의존성 변경 감지 못해서 stale build 사용. 의심스러우면 cold build로 검증.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`로컬 빌드 안 줄어듦`}),`: CI는 빨라졌는데 로컬 dev 빌드는 그대로. 같은 도구가 양쪽에 적용되어야 효과 큼.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`30분이 "정상"이라고 받아들임`}),`: 빌드 시간은 측정 대상이지 받아들일 대상 아님. 매월 한 번씩 회고.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`CI 빌드 시간 = PR 횟수 × 빌드 시간. `,(0,r.jsx)(t.strong,{children:`매일 누적되는 비용`}),`이라 절감 임팩트가 비선형으로 크다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/vite-manual-chunks`,children:`/notes/vite-manual-chunks`}),` — 빌드 사이즈 절감 (CI 시간과 다른 차원)
`,(0,r.jsx)(t.a,{href:`/notes/dead-dependency-hidden-cost`,children:`/notes/dead-dependency-hidden-cost`}),` — install 시간을 만드는 누적 비용`]})]})}function Ce(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}var we=e({default:()=>Ee,frontmatter:()=>Te}),Te={title:`코드 리뷰 코멘트의 톤 — 비판이 아니라 질문으로`,growth:`Seedling`,topics:[`collaboration`,`code-review`,`communication`,`team`],summary:`같은 지적도 "이건 틀렸어요"와 "이 부분 의도가 궁금해요"의 결과가 다르다. 톤은 단순 매너가 아니라 리뷰의 정확도와 팀의 학습 속도를 결정한다.`,plantedAt:`2026-05-28`,lastTendedAt:`2026-05-28`};function f(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`같은 지적의 두 버전`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`버전 A`}),`: "여기서 useMemo 잘못 쓰셨네요. dependency가 매 렌더마다 바뀌어서 메모이제이션이 의미 없어요."`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`버전 B`}),`: "이 useMemo의 dependency가 매 렌더마다 새 객체일 것 같은데, 의도하신 게 맞나요?"`]}),`
`,(0,r.jsx)(t.p,{children:`두 버전이 같은 사실을 가리키는데 결과는 다르다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`A: 작성자가 "내가 틀렸나" → 방어 → 빠르게 수정하거나 반박. `,(0,r.jsx)(t.strong,{children:`학습 안 됨`})]}),`
`,(0,r.jsxs)(t.li,{children:[`B: 작성자가 "내가 생각 못 한 게 있나" → 의도 설명 → 두 사람이 같이 발견. `,(0,r.jsx)(t.strong,{children:`학습됨`})]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`가끔 B가 잘못된 지적일 수도 있다 (작성자가 의도적으로 한 선택). A로 적으면 "틀렸다"는 단정이 먼저 나가서 잘못 지적했을 때 후퇴가 어렵다. B로 적으면 의문이 먼저 나가서 자연스럽게 두 사람이 답을 만든다.`}),`
`,(0,r.jsx)(t.h2,{children:`톤이 결정하는 것`}),`
`,(0,r.jsxs)(t.p,{children:[`톤은 매너가 아니다. `,(0,r.jsx)(t.strong,{children:`리뷰의 정확도`}),`를 결정한다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`단정형: 작성자가 의도를 설명할 자리가 닫힘 → 리뷰어가 본 단편만 정답이 됨`}),`
`,(0,r.jsx)(t.li,{children:`질문형: 작성자가 컨텍스트를 보여줄 자리가 열림 → 두 사람의 정보가 합쳐짐`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`코드 리뷰의 목적이 "틀린 부분 잡기"가 아니라 "더 좋은 코드 만들기"라면, 후자가 더 자주 더 좋은 결과를 낸다.`}),`
`,(0,r.jsx)(t.h2,{children:`4가지 톤 패턴`}),`
`,(0,r.jsx)(t.h3,{children:`1. 질문형 (Question)`}),`
`,(0,r.jsx)(t.p,{children:`가장 안전하고 가장 학습이 큰 톤.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"이건 왜 이렇게 하셨어요?"`}),`
`,(0,r.jsx)(t.li,{children:`"다른 옵션도 고려하셨나요? 예를 들어 X는요?"`}),`
`,(0,r.jsx)(t.li,{children:`"이 부분 동작이 궁금한데 설명해주실 수 있나요?"`}),`
`]}),`
`,(0,r.jsx)(t.h3,{children:`2. 제안형 (Suggestion)`}),`
`,(0,r.jsx)(t.p,{children:`답을 안다고 생각하지만 명령은 아닌 톤.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"이거 X 패턴으로 바꾸면 어떨까요?"`}),`
`,(0,r.jsx)(t.li,{children:`"X를 고려해봤는데 어떻게 생각하세요?"`}),`
`,(0,r.jsx)(t.li,{children:`nit: prefix로 "선택사항이지만" 신호 보내기`}),`
`]}),`
`,(0,r.jsx)(t.h3,{children:`3. 정보형 (Information)`}),`
`,(0,r.jsx)(t.p,{children:`지적이 아니라 정보 제공.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"참고로 이 케이스에서 X 라이브러리가 정확히 같은 일을 해요"`}),`
`,(0,r.jsx)(t.li,{children:`"예전에 비슷한 자리에서 X 함정에 빠진 적이 있어요. 여기는 괜찮을까요?"`}),`
`]}),`
`,(0,r.jsx)(t.h3,{children:`4. 단정형 (Assertion)`}),`
`,(0,r.jsxs)(t.p,{children:[`명확히 틀렸을 때만. `,(0,r.jsx)(t.strong,{children:`보안 취약점`}),`·`,(0,r.jsx)(t.strong,{children:`데이터 손실`}),`·`,(0,r.jsx)(t.strong,{children:`production 장애 위험`}),` 같은 경우.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"이건 SQL injection 위험입니다. 반드시 parameterized query로."`}),`
`,(0,r.jsx)(t.li,{children:`"이 시점에 transaction을 안 닫으면 connection leak."`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`단정형은 톤이 강한 만큼 `,(0,r.jsx)(t.strong,{children:`틀리면 안 된다`}),`. 100% 확신할 때만.`]}),`
`,(0,r.jsx)(t.h2,{children:`우선순위`}),`
`,(0,r.jsx)(t.p,{children:`같은 PR에 5개 지적이 있다면, 80%는 질문형/제안형. 단정형은 진짜 막아야 하는 1-2개만.`}),`
`,(0,r.jsx)(t.p,{children:`질문형으로도 강조 가능하다. 톤이 부드럽다고 신호가 약한 게 아니다. "이거 의도하신 게 맞나요?"는 작성자가 자기 코드를 다시 보게 만드는 강한 신호다.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"솔직함"으로 단정형 남발`}),`: 솔직함은 정확도와 무관. 잘못된 단정형은 솔직한 게 아니라 그냥 틀린 거다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`passive-aggressive 질문`}),`: "이게 정말 맞나요???"처럼 톤이 비꼬는 질문형은 단정형보다 더 안 좋다. 진짜 궁금증인지 자문.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`모든 지적에 nit 붙이기`}),`: 진짜 중요한 지적에도 nit이 붙으면 중요도 신호가 사라진다. 진짜 nit만 nit.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`시니어의 단정형 디폴트`}),`: 시니어가 단정형으로 적으면 주니어는 반박할 자리가 없어진다. 같은 지적도 시니어일수록 질문형으로.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`외국 회사 톤 그대로`}),`: 한국어 직역 "이건 안 좋습니다"는 영어 "this isn't great"보다 훨씬 강하게 들린다. 언어별 톤 보정 필요.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`톤은 매너가 아니라 `,(0,r.jsx)(t.strong,{children:`리뷰의 정확도와 팀 학습 속도`}),`를 결정한다. 80%는 질문형/제안형, 20%만 단정형. 시니어일수록 질문형 비중을 높인다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/code-review-real-value`,children:`/notes/code-review-real-value`}),` — 리뷰의 진짜 가치는 검토가 아니라 학습
`,(0,r.jsx)(t.a,{href:`/notes/pr-body-before-code`,children:`/notes/pr-body-before-code`}),` — PR 본문이 리뷰 톤의 입구를 만든다
`,(0,r.jsx)(t.a,{href:`/notes/coderabbit-cubic-double-review`,children:`/notes/coderabbit-cubic-double-review`}),` — 자동 리뷰의 톤은 어떻게 다른가`]})]})}function Ee(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}var De=e({default:()=>ke,frontmatter:()=>Oe}),Oe={title:`코드 리뷰의 진짜 가치 — 코드보다 결정`,growth:`Budding`,topics:[`code-review`,`swe`,`decision-making`],summary:`코드 리뷰에서 가장 가치 있는 코멘트는 변수명·스타일 지적이 아니라 "이 결정의 이유는?"이다. 코드는 자명하면 충분, 결정은 자명하지 않으면 영영 잃는다.`,plantedAt:`2026-03-15`,lastTendedAt:`2026-05-28`};function p(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`흔한 코드 리뷰`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-diff`,children:`- const userCount = users.length
+ const userCount = users?.length ?? 0
`})}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`"?? 0 으로 안전하게 처리"`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`이게 잘못된 건 아닙니다. 다만 가장 큰 가치가 아닙니다.`}),`
`,(0,r.jsx)(t.h2,{children:`더 가치 있는 코멘트`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`// users 배열이 null일 수 있는 케이스는 OAuth race condition.
// ?? 0으로 처리하면 카운트가 잘못 표시되어 throw로 변경.
`})}),`
`,(0,r.jsxs)(t.p,{children:[`이 리뷰는 코드가 아니라 `,(0,r.jsx)(t.strong,{children:`결정`}),`에 대해 묻습니다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`왜 ?? 0이 아니라 throw인가?`}),`
`,(0,r.jsx)(t.li,{children:`race condition을 코드로 처리하지 않고 호출자에게 넘기는 결정의 근거는?`}),`
`,(0,r.jsx)(t.li,{children:`다른 race condition도 같은 패턴으로 처리해야 하는가?`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`코드는 시간이 지나면 자명해질 수 있습니다 (또는 리팩토링됩니다). 결정의 근거는 시간이 지나면 사라집니다.`}),`
`,(0,r.jsx)(t.h2,{children:`코드 리뷰 우선순위`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`결정의 이유`}),`: "왜 이 방향?" — 가장 가치 있음`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`놓친 케이스`}),`: "이 입력에서는?" — 사용자 영향 큼`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`호출자 영향`}),`: "이 변경이 X에 어떻게?" — side effect`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`유지보수성`}),`: "6개월 후 읽기 어렵다" — 중간`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`스타일·네이밍`}),`: "이름 X가 더 명확" — 가장 낮음 (linter 자동)`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`좋은 리뷰의 시그널`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`코드 라인 자체보다 PR 본문 / commit 메시지에 대한 코멘트가 많은가`}),`
`,(0,r.jsx)(t.li,{children:`"왜 이거 아닌가?"가 "이거 잘못됨"보다 많은가`}),`
`,(0,r.jsx)(t.li,{children:`approver가 코드 변경 외에 "이 코드가 사라질 때를 대비한 테스트가 있는가" 같은 영속성 질문을 하는가`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`결정 질문은 작성자가 답하기 어려움 → 리뷰 시간 ↑. 그래서 PR 본문에 미리 결정 근거 적기.`}),`
`,(0,r.jsx)(t.li,{children:`"다 잘 보였어요" 리뷰는 가치 0. 작성자에게 "결정 근거"를 묻지 않은 신호.`}),`
`,(0,r.jsx)(t.li,{children:`사소한 스타일 코멘트 5개 = 가치 있는 결정 코멘트 1개 안 됨.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`코드 리뷰는 코드를 보는 게 아니라 `,(0,r.jsx)(t.strong,{children:`이 변경이 만든 결정`}),`을 보는 일이다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/pr-body-before-code`,children:`/notes/pr-body-before-code`}),` — 결정 근거는 코드가 아니라 PR 본문에서 먼저 드러난다
`,(0,r.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 리뷰 코멘트가 부족할 때 외부 에이전트와 경쟁시켜 결정의 사각지대를 노출
`,(0,r.jsx)(t.a,{href:`/notes/code-review-comment-tone`,children:`/notes/code-review-comment-tone`}),` — 결정 질문은 단정형이 아니라 질문형 톤이어야 답을 끌어낸다
`,(0,r.jsx)(t.a,{href:`/notes/async-pr-review-slo`,children:`/notes/async-pr-review-slo`}),` — 리뷰 SLO가 결정 중심 리뷰의 시간 자원을 만든다
`,(0,r.jsx)(t.a,{href:`/notes/coderabbit-cubic-double-review`,children:`/notes/coderabbit-cubic-double-review`}),` — 자동 리뷰는 결정보다 코드만 봄, 사람 리뷰는 결정 자리`]})]})}function ke(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}var Ae=e({default:()=>Me,frontmatter:()=>je}),je={title:`CodeRabbit + Cubic 이중 자동 리뷰 — 노이즈인가 신호인가`,growth:`Seedling`,topics:[`code-review`,`tools`,`automation`,`pr`],summary:`PR마다 CodeRabbit과 Cubic AI가 둘 다 리뷰를 단다. 두 자동 리뷰를 같이 쓰는 게 가치인지 노이즈인지를 며칠 써본 후의 관찰.`,plantedAt:`2026-05-26`,lastTendedAt:`2026-05-26`};function m(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`두 리뷰어가 동시에`}),`
`,(0,r.jsxs)(t.p,{children:[`5/21에 CodeRabbit config(`,(0,r.jsx)(t.code,{children:`.coderabbit.yaml`}),`)를 추가했다. 사이드 프로젝트 홈레이더에서 이미 쓰던 도구. 이 사이트에도 도입.`]}),`
`,(0,r.jsx)(t.p,{children:`문제는 이 사이트는 이미 Cubic AI가 자동 PR 리뷰를 달고 있었다는 것. PR을 올리면 두 개의 자동 리뷰가 동시에 달린다.`}),`
`,(0,r.jsx)(t.p,{children:`처음에는 직관적으로 "노이즈"라 생각했다. 같은 PR에 비슷한 지적이 두 번. 그런데 며칠 써보니 그림이 달라졌다.`}),`
`,(0,r.jsx)(t.h2,{children:`두 리뷰어가 보는 게 다르다`}),`
`,(0,r.jsxs)(t.p,{children:[`CodeRabbit과 Cubic은 같은 코드를 보는데 `,(0,r.jsx)(t.strong,{children:`다른 것에 집중`}),`한다.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`CodeRabbit`}),`: 변경 라인 단위 리뷰. "이 함수 시그니처는 더 명확하게", "여기는 null check 누락", "타입 정의 위치는 다른 파일이 맞다"는 식의 구체적 지적.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Cubic`}),`: 변경 전체의 흐름 리뷰. "이 PR의 핵심 변경이 무엇인가", "사이드 이펙트는 어디", "테스트 누락"이라는 큰 그림 지적.`]}),`
`,(0,r.jsx)(t.p,{children:`같은 코드를 보지만 시야가 다르다. 둘 다 자동인데도 겹치는 지적은 30-40% 정도다. 60-70%는 한쪽만 본 것.`}),`
`,(0,r.jsx)(t.h2,{children:`신호 vs 노이즈를 가르는 기준`}),`
`,(0,r.jsx)(t.p,{children:`이중 리뷰가 신호인지 노이즈인지를 가르는 게 있다.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`신호`}),`: 한쪽만 본 지적 + 양쪽이 같이 본 지적이 둘 다 가치 있을 때.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`한쪽만 본 지적: 다른 한쪽의 사각지대를 보완한다.`}),`
`,(0,r.jsx)(t.li,{children:`양쪽 본 지적: 한 번 더 강조 신호 (둘 다 봤다는 건 진짜다).`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`노이즈`}),`: 두 리뷰가 같은 시야인데 표현만 다를 때.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`두 리뷰가 다 변경 라인만 보면: 같은 지적의 다른 표현. 노이즈.`}),`
`,(0,r.jsx)(t.li,{children:`두 리뷰가 다 큰 그림만 보면: 같은 추상화 수준의 다른 표현. 노이즈.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`CodeRabbit + Cubic은 시야가 명확히 다르다. 그래서 신호 쪽.`}),`
`,(0,r.jsx)(t.h2,{children:`비용`}),`
`,(0,r.jsx)(t.p,{children:`두 자동 리뷰의 비용은 두 가지다.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`리뷰 시간`}),`: 사람이 PR을 열 때 두 리뷰를 다 읽는 시간. 한 PR당 +1-2분.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`대응 시간`}),`: 두 리뷰의 지적을 합산하면 1.5-2배. 한 리뷰만 있을 때보다 대응이 길어진다.`]}),`
`,(0,r.jsx)(t.p,{children:`이게 가치 있는가? 이 사이트 같은 1인 운영 사이트에서는 가치 있다고 본다. 이유:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`사람 리뷰어가 없다. 자동 리뷰가 유일한 외부 시야.`}),`
`,(0,r.jsx)(t.li,{children:`외부 시야가 한 종류면 같은 사각지대를 공유한다.`}),`
`,(0,r.jsx)(t.li,{children:`두 시야는 시야 자체의 다양성을 만든다.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`회사 코드처럼 사람 리뷰어가 N명 있으면 이중 자동 리뷰는 과할 수 있다. 사람 리뷰가 큰 그림을 보고 자동 리뷰가 변경 라인을 보면 충분.`}),`
`,(0,r.jsx)(t.h2,{children:`운영 팁`}),`
`,(0,r.jsx)(t.p,{children:`며칠 써본 결과 두 리뷰를 효율적으로 같이 쓰는 방법.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`CodeRabbit을 먼저 봄`}),`: 라인 단위 지적은 즉시 수정. push로 빠르게 회신.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Cubic은 거리 두고 봄`}),`: 큰 그림 지적은 한 번 더 생각하고 답. PR 본문 보강 또는 별도 노트로 자산화.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`겹치는 지적은 한 번만 답`}),`: 두 리뷰 모두에 같은 답 다는 건 시간 낭비. 한쪽에 답하고 다른 쪽에는 "위 답변 참조".`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`약한 지적은 reject`}),`: 자동 리뷰는 false positive가 있다. 모든 지적을 적용할 의무 없음. 약한 지적은 명시적으로 reject하고 이유 적기.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`자동 리뷰가 사람 리뷰를 대체한다 착각`}),`: 자동 리뷰는 변경 라인과 흐름을 본다. `,(0,r.jsx)(t.strong,{children:`제품 의도·UX·전략`}),`은 못 본다. 그건 사람.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`자동 리뷰 지적 100% 적용`}),`: 자동 리뷰는 컨벤션 보수적이다. 의도적으로 컨벤션을 벗어난 경우도 "위반"으로 본다. 적용 vs reject 판단은 사람.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`두 리뷰 결과를 단순 합산`}),`: 두 리뷰의 시야가 다르면 합산이 의미 없다. 시야 차이를 인식하고 각자 다른 가치로 활용.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`이중 리뷰가 머지를 느리게 만듦`}),`: 두 리뷰 다 통과해야 머지하는 규칙으로 만들면 머지가 느려진다. 둘 다 참고용 — 머지 판단은 사람.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`두 리뷰가 같은 모델이면`}),`: CodeRabbit과 Cubic이 같은 LLM 백엔드를 쓰면 시야가 같을 수 있다. 시야 차이가 보장된 도구 조합인지 확인 필요.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`이중 자동 리뷰의 가치는 `,(0,r.jsx)(t.strong,{children:`시야 차이`}),`에서 나온다. 시야가 같으면 노이즈, 다르면 신호. CodeRabbit(라인) + Cubic(흐름)은 다른 시야여서 신호.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/code-review-real-value`,children:`/notes/code-review-real-value`}),` — 코드 리뷰의 진짜 가치
`,(0,r.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 두 모델 경쟁의 일반화
`,(0,r.jsx)(t.a,{href:`/notes/pr-body-before-code`,children:`/notes/pr-body-before-code`}),` — PR 본문이 리뷰의 입구`]})]})}function Me(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}var Ne=e({default:()=>Fe,frontmatter:()=>Pe}),Pe={title:`Codex 경쟁 — 모든 작업을 두 번 굴려보기`,growth:`Evergreen`,topics:[`claude`,`workflow`,`ai`,`verification`],summary:`코딩·추론·리뷰 등 모든 작업에서 Codex와 Claude를 병렬 실행하고 결과를 교차 검증. 토큰 비용은 늘지만 사각지대가 줄어든다.`,plantedAt:`2026-04-25`,lastTendedAt:`2026-05-30`};function h(e){let t={a:`a`,em:`em`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`왜 경쟁시키는가`}),`
`,(0,r.jsx)(t.p,{children:`단일 모델로 결과를 만들고 자기 검증하는 건 confirmation bias의 함정이다. 같은 모델이 만들고 같은 모델이 평가하면 같은 사각지대를 공유한다.`}),`
`,(0,r.jsx)(t.p,{children:`다른 모델(Codex)로 동일 작업을 병렬 수행하고 두 결과를 비교하면:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`양쪽 모두 같은 결론에 도달하면 신뢰도 ↑`}),`
`,(0,r.jsx)(t.li,{children:`결론이 갈리면 어디서 갈리는지가 그 자체로 디버깅 단서`}),`
`,(0,r.jsx)(t.li,{children:`한쪽만 발견한 엣지 케이스는 거의 확실히 진짜 엣지 케이스`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`트레이드오프`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`비용`}),`: 토큰 두 배. 시간도 늘어남 (직렬이면 ×2, 병렬이면 max).`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`가치`}),`: 작업 종류에 따라 다르다. 빠른 단순 코드는 경쟁 가치 ↓. 설계 결정·복잡한 리팩토링·보안 리뷰는 경쟁 가치 ↑.`]}),`
`,(0,r.jsx)(t.h2,{children:`실용적 규칙`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`경쟁이 기본값`}),`: 설계·리뷰·복잡한 리팩토링은 항상 두 번 굴린다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`단순 작업은 예외`}),`: 한 줄 수정·오타·뻔한 fetch는 경쟁 가치가 낮으므로 단독.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`사용자 명시 시 단독`}),`: "코덱스 없이"라 하면 신뢰가 충분한 신호로 받아들임.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`경쟁 결과 종합 방법`}),`:`,`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:`두 결과 다 read`}),`
`,(0,r.jsx)(t.li,{children:`일치하는 부분 채택`}),`
`,(0,r.jsx)(t.li,{children:`갈리는 부분만 사람이 결정 (또는 더 깊이 분석)`}),`
`]}),`
`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`단일 모델 수렴을 깨는 도구`}),`
`,(0,r.jsxs)(t.p,{children:[`경쟁의 또 다른 가치는 `,(0,r.jsx)(t.a,{href:`/notes/ai-output-mode-collapse`,children:`단일 모델 mode collapse`}),`를 깨는 것이다. 한 모델을 반복 호출하면 그 모델 분포의 중심으로 수렴한다. 다른 모델(Codex)은 다른 분포를 가져서, 한쪽이 빠진 영역을 다른 쪽이 채운다.`]}),`
`,(0,r.jsxs)(t.p,{children:[`그래서 경쟁은 검증 도구이자 `,(0,r.jsx)(t.strong,{children:`다양성 도구`}),`다. 같은 작업을 두 모델이 다르게 풀면, 그 차이 자체가 단일 모델로는 안 보였을 선택지 공간을 드러낸다.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`두 모델이 같은 학습 데이터 기반이면 같은 편향 공유 가능. 진짜 다른 관점이 아닐 수 있다.`}),`
`,(0,r.jsxs)(t.li,{children:[`종합 단계에서 "둘 다 비슷하니까 OK"로 빠지면 경쟁의 의미가 사라짐. `,(0,r.jsx)(t.strong,{children:`일치 자체가 검증은 아님`}),`, 일치하는 `,(0,r.jsx)(t.em,{children:`근거`}),`가 검증.`]}),`
`,(0,r.jsxs)(t.li,{children:[`두 결과가 갈릴 때 "더 그럴듯한 쪽"을 고르면 confirmation bias. 갈리는 `,(0,r.jsx)(t.em,{children:`지점`}),`을 더 깊이 파야 검증.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — 사람 개입 없이 검증되는 루프
`,(0,r.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`/notes/quality-gate-loop`}),` — 결과 비교를 평가 rubric으로
`,(0,r.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`}),` — 라우팅도 경쟁으로
`,(0,r.jsx)(t.a,{href:`/notes/ai-output-mode-collapse`,children:`/notes/ai-output-mode-collapse`}),` — 단일 모델 수렴을 경쟁으로 깬다`]})]})}function Fe(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}var Ie=e({default:()=>Re,frontmatter:()=>Le}),Le={title:`color-mix로 만드는 단일 source 토큰 시스템`,growth:`Seedling`,topics:[`css`,`design-system`,`frontend`],summary:`토큰을 정의하고 color-mix(in srgb, var(--x) N%, transparent)로 합성하면 라이트·다크 테마가 자동 적응하고 하드코딩 rgba가 사라진다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-19`};function g(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제`}),`
`,(0,r.jsx)(t.p,{children:`테마가 둘 이상이면 같은 영역의 색이 라이트/다크에서 달라야 한다. 그래서 다음 같은 코드가 나오기 쉽다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.glass-bg {
  background: rgba(244, 241, 232, 0.92); /* 라이트 cream */
}
:root[data-theme='dark'] .glass-bg {
  background: rgba(20, 23, 26, 0.92); /* 다크 charcoal */
}
`})}),`
`,(0,r.jsx)(t.p,{children:`문제: 하드코딩 rgba 두 벌. 토큰 변경 시 두 곳 모두 수정. cascade 충돌 위험.`}),`
`,(0,r.jsx)(t.h2,{children:`해결 — color-mix`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.glass-bg {
  background: color-mix(in srgb, var(--bg) 92%, transparent);
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`--bg`}),`가 라이트에선 white, 다크에선 zinc-950이면 한 줄로 두 테마 자동 처리.`]}),`
`,(0,r.jsx)(t.h2,{children:`활용 패턴`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`글래스 효과`}),`: `,(0,r.jsx)(t.code,{children:`color-mix(in srgb, var(--bg) 88%, transparent)`})]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`그리드 라인`}),`: `,(0,r.jsx)(t.code,{children:`color-mix(in srgb, var(--text) 5%, transparent)`})]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`status pill 배경`}),`: `,(0,r.jsx)(t.code,{children:`color-mix(in srgb, var(--accent-green) 14%, var(--bg-alt))`})]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`다크 박스 위 부드러운 텍스트`}),`: `,(0,r.jsx)(t.code,{children:`color-mix(in srgb, var(--text-inverse) 82%, transparent)`})]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`브라우저 지원`}),`
`,(0,r.jsx)(t.p,{children:`Safari 16.4+, Chrome 111+, Firefox 113+. 2024년 이후 모든 모던 환경. 구형 fallback 필요 시 PostCSS로 자동화.`}),`
`,(0,r.jsx)(t.h2,{children:`단일 source 회복`}),`
`,(0,r.jsxs)(t.p,{children:[`한 디자인 리팩토링 사이클에서 `,(0,r.jsx)(t.code,{children:`시각 일관성`}),` 점수가 2/5에서 5/5로 올라간 결정적 변경이 hex/rgba 30+곳을 토큰 + color-mix로 일괄 치환한 것이었다. 토큰 하나만 바꾸면 라이트·다크가 자동으로 따라온다.`]}),`
`,(0,r.jsx)(t.h2,{children:`처음에 헤맨 것`}),`
`,(0,r.jsxs)(t.p,{children:[`처음엔 토큰을 정의만 해두고 기존 하드코딩 hex를 그대로 뒀다. themes.css에 다크 override를 추가했지만 cascade 순서 때문에 light 모드에서 cream 잔재가 남아 누런 톤이 빠지지 않았다. specificity 동률 + import 순서 의존 = 디버깅 지옥. 토큰 정의만으로는 부족하고 `,(0,r.jsx)(t.strong,{children:`사용처를 모두 토큰화`}),`해야 single source가 된다는 걸 그때 배웠다.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`color-mix`}),` 안에서 또 `,(0,r.jsx)(t.code,{children:`color-mix`}),`를 nested 호출하면 가독성 ↓`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`transparent`}),`로 합성할 때 alpha 강도가 사람 직관과 다를 수 있음 — 14%는 거의 보이지 않는다, 50%는 의외로 진하다`]}),`
`,(0,r.jsx)(t.li,{children:`셀렉터 specificity가 동일하면 import 순서 의존 → CSS 파일 import 순서 관리 필수`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/css-color-scheme-native`,children:`/notes/css-color-scheme-native`}),` — `,(0,r.jsx)(t.code,{children:`color-scheme`}),` 한 줄로 네이티브 컨트롤 다크 처리
`,(0,r.jsx)(t.a,{href:`/notes/korean-letter-spacing`,children:`/notes/korean-letter-spacing`}),` — 토큰화로 잡지 못하는 한국어 타이포 세부`]})]})}function Re(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}var ze=e({default:()=>Ve,frontmatter:()=>Be}),Be={title:`커버리지 갭 분석 — 강한 곳 말고 빈 곳을 측정으로 찾기`,growth:`Seedling`,topics:[`process`,`analysis`,`quality`,`testing`],summary:`사람은 잘하는 영역에 더 추가하고 빈 영역은 못 본다. 작업물의 분포를 측정하면 어디가 비었는지 객관적으로 드러난다. 테스트·콘텐츠·문서·스킬 포트폴리오 공통.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function _(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — 강한 곳에 더 쌓는 편향`}),`
`,(0,r.jsxs)(t.p,{children:[`작업물을 늘릴 때 사람은 `,(0,r.jsx)(t.strong,{children:`잘하는 영역`}),`에 더 추가한다. 프론트엔드를 잘하면 프론트엔드 글을 더 쓰고, 익숙한 모듈에 테스트를 더 짠다. 쉽고 즐거우니까.`]}),`
`,(0,r.jsxs)(t.p,{children:[`문제는 가치는 보통 `,(0,r.jsx)(t.strong,{children:`빈 영역`}),`에 있다. 이미 두꺼운 곳을 더 두껍게 하는 건 한계 효용이 낮고, 비어 있는 곳은 위험이 숨어 있다.`]}),`
`,(0,r.jsxs)(t.p,{children:[`그런데 빈 영역은 `,(0,r.jsx)(t.strong,{children:`안 보인다`}),`. 본인 머릿속 분포는 최근 작업에 편향돼서 "골고루 하고 있다"는 착각이 든다. 측정해야 보인다.`]}),`
`,(0,r.jsx)(t.h2,{children:`해법 — 분포를 측정한다`}),`
`,(0,r.jsx)(t.p,{children:`작업물을 차원별로 집계해서 분포를 본다. 강한 셀과 빈 셀이 숫자로 드러난다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`# 예: 노트를 토픽별로 집계
grep -h "^topics:" src/content/notes/*.mdx \\
  | tr -d '[]' | sed 's/topics: //' | tr ',' '\\n' \\
  | sed 's/^ *//' | sort | uniq -c | sort -rn
`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`10 frontend     ← 두꺼움
 9 workflow
 5 performance
 4 backend       ← frontend의 절반
 1 security      ← 거의 빔 ← 여기
 0 testing       ← 완전히 빔 ← 여기
`})}),`
`,(0,r.jsx)(t.p,{children:`"security 1, testing 0"이 한눈에 보인다. 머릿속으로는 "골고루"였는데 측정하면 편향이 드러난다.`}),`
`,(0,r.jsx)(t.h2,{children:`어느 차원으로 자르나`}),`
`,(0,r.jsx)(t.p,{children:`같은 작업물도 자르는 차원에 따라 다른 갭이 보인다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`주제(topic)`}),`: 어느 도메인이 비었나`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`형식(format)`}),`: 어느 형태가 부족한가 (노트만 많고 케이스 없음)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`관점(perspective)`}),`: 구체 vs 추상, 기술 vs 운영`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`난이도/깊이`}),`: 입문만 많고 심화 없음`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`시간(recency)`}),`: 오래된 것만, 최근 것 없음`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`여러 차원으로 잘라봐야 한 차원에선 안 보이던 갭이 드러난다.`}),`
`,(0,r.jsx)(t.h2,{children:`일반화 — 어디에나 적용`}),`
`,(0,r.jsx)(t.p,{children:`분포 측정 → 갭 발견은 도메인 무관하게 작동한다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`테스트 커버리지`}),`: 모듈별 테스트 수. 핵심 모듈이 비었나 (라인 커버리지 %만 보면 "어느 종류"가 안 보임 — 모듈·경로별로 자른다)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`문서`}),`: 기능별 문서 유무. 자주 묻는 기능이 문서 0인가`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`에러 처리`}),`: 코드 경로별 에러 핸들링. happy path만 있고 실패 경로 비었나`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`스킬 포트폴리오`}),`: 본인 역량을 도메인별로. 한쪽만 두껍나`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`고객/매출`}),`: 세그먼트별 분포. 한 고객 의존도 과한가`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`측정 → 우선순위`}),`
`,(0,r.jsx)(t.p,{children:`갭을 찾았다고 다 채우는 게 아니다. 갭 × 중요도로 우선순위.`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`갭`}),(0,r.jsx)(t.th,{children:`중요도`}),(0,r.jsx)(t.th,{children:`우선순위`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`testing 0`}),(0,r.jsx)(t.td,{children:`높음 (회귀 위험)`}),(0,r.jsx)(t.td,{children:`1`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`security 1`}),(0,r.jsx)(t.td,{children:`높음`}),(0,r.jsx)(t.td,{children:`2`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`design 4`}),(0,r.jsx)(t.td,{children:`낮음 (충분)`}),(0,r.jsx)(t.td,{children:`—`})]})]})]}),`
`,(0,r.jsxs)(t.p,{children:[`비어 있어도 중요하지 않으면 안 채워도 된다. `,(0,r.jsx)(t.strong,{children:`빈 영역 + 높은 중요도`}),`가 진짜 타깃.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`머릿속 분포를 신뢰`}),`: "골고루 하고 있다"는 최근 편향. 반드시 측정.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`총량만 보기`}),`: "100개나 있네"는 분포를 안 보여준다. 차원별로 자른다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`한 차원만 보기`}),`: 주제로는 골고루인데 형식으로는 편향일 수 있다. 여러 차원.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`갭=무조건 채우기`}),`: 중요하지 않은 빈 곳까지 채우면 자원 낭비. 갭 × 중요도.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`커버리지 %에 속기`}),`: "80% 커버"가 핵심 경로를 포함하는지는 % 만으론 모름. 경로·모듈별로 분해.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`측정을 게임`}),`: "갭 0 만들기"가 목표가 되면 억지로 채운 저품질이 분포만 채운다. 측정은 방향이지 점수가 아님.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`사람은 강한 곳에 더 쌓고 빈 곳을 못 본다. `,(0,r.jsx)(t.strong,{children:`작업물의 분포를 차원별로 측정`}),`하면 머릿속 편향이 숫자로 드러난다. 그다음 갭 × 중요도로 우선순위를 정해 빈 곳을 채운다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/ai-output-mode-collapse`,children:`/notes/ai-output-mode-collapse`}),` — 생성물 분포 측정으로 수렴 감지
`,(0,r.jsx)(t.a,{href:`/notes/recurring-trap-to-checklist`,children:`/notes/recurring-trap-to-checklist`}),` — 빈 곳에 숨은 위험을 검사로
`,(0,r.jsx)(t.a,{href:`/notes/flaky-test-diagnosis`,children:`/notes/flaky-test-diagnosis`}),` — 테스트 커버리지의 질적 갭
`,(0,r.jsx)(t.a,{href:`/notes/recruiter-10-seconds`,children:`/notes/recruiter-10-seconds`}),` — 포트폴리오의 분포가 첫인상을 결정`]})]})}function Ve(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}var He=e({default:()=>We,frontmatter:()=>Ue}),Ue={title:`CSS color-scheme — 다크 모드에서 form·scrollbar가 자동 따라오게`,growth:`Seedling`,topics:[`css`,`dark-mode`,`accessibility`,`frontend`],summary:"`color-scheme: dark` 한 줄로 form input·scrollbar·browser native UI가 OS 다크 모드에 자동 적응. 직접 스타일링 부담 ↓.",plantedAt:`2026-05-19`,lastTendedAt:`2026-05-19`};function v(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제`}),`
`,(0,r.jsx)(t.p,{children:`CSS 다크 테마를 직접 만들면 보통 background·color만 바꾼다. 그러나 다음은 OS·브라우저 native:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`<input>`}),`, `,(0,r.jsx)(t.code,{children:`<select>`}),`, `,(0,r.jsx)(t.code,{children:`<textarea>`}),` 기본 스타일`]}),`
`,(0,r.jsx)(t.li,{children:`스크롤바`}),`
`,(0,r.jsx)(t.li,{children:`자동완성 색`}),`
`,(0,r.jsx)(t.li,{children:`텍스트 선택 색`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`이게 light 톤 그대로면 다크 모드에서 흰 input이 박혀 어색.`}),`
`,(0,r.jsx)(t.h2,{children:`해법`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`:root[data-theme='dark'] {
  color-scheme: dark;
}
`})}),`
`,(0,r.jsx)(t.p,{children:`이 한 줄로 위 모든 native UI가 다크 모드로 자동 전환.`}),`
`,(0,r.jsx)(t.h2,{children:`동작 원리`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`color-scheme`}),` 속성은 브라우저에게 "이 페이지가 어떤 스킴을 지원하는지" 알린다:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`light`}),` — 라이트 UI 사용`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`dark`}),` — 다크 UI 사용`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`light dark`}),` — 둘 다 지원, 사용자 OS 설정 따름`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`브라우저는 이 힌트로 native form·scrollbar 등의 색을 자동 결정.`}),`
`,(0,r.jsx)(t.h2,{children:`추가 활용`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`:root {
  color-scheme: light dark;  /* OS 설정 자동 따름 */
}

input { accent-color: var(--accent-red); }  /* checkbox·radio 색 */
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`accent-color`}),`까지 합치면 form 인풋 80% 다크 모드 대응 끝.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`일부 브라우저(특히 구형 Safari)는 `,(0,r.jsx)(t.code,{children:`color-scheme`}),` 일부만 지원`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`meta name="theme-color"`}),`와 짝으로 써야 iOS Safari status bar까지 적응`]}),`
`,(0,r.jsx)(t.li,{children:`너무 강한 차이의 다크 색이면 native UI가 어색할 수 있음 — 중간 톤 권장`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`다크 테마는 background·color 토큰만으로는 부족하다. native UI까지 다크 모드를 알려야 진짜 완성.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/color-mix-tokens`,children:`/notes/color-mix-tokens`}),` — 같은 시점에 함께 들어간 컬러 토큰 패턴, 다크 테마 색 도출 흐름
`,(0,r.jsx)(t.a,{href:`/notes/korean-letter-spacing`,children:`/notes/korean-letter-spacing`}),` — native UI 외에 한국어 타이포까지 잡아야 다크 모드 완성도가 올라간다`]})]})}function We(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}var Ge=e({default:()=>qe,frontmatter:()=>Ke}),Ke={title:`안 쓰는 의존성의 숨은 비용 — install·lockfile·transitive CVE·supply chain`,growth:`Seedling`,topics:[`dependencies`,`swe`,`build`,`security`],summary:`package.json에 있는데 import 0건인 패키지는 단순 dead code가 아니다. install 시간·lockfile 부피·transitive CVE·supply chain 표면적이 모두 누적된다. 정리는 정기 작업.`,plantedAt:`2026-05-03`,lastTendedAt:`2026-05-29`};function y(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — "있어도 그만"이 아니다`}),`
`,(0,r.jsx)(t.p,{children:`새 패키지 시도하다가 안 쓰게 됐을 때, package.json에서 빼는 걸 잊는다. 또는 코드가 다른 라이브러리로 옮겨갔는데 옛 의존성을 그대로 둔다.`}),`
`,(0,r.jsx)(t.p,{children:`"어차피 import 0건인데 뭐가 문제냐."`}),`
`,(0,r.jsx)(t.p,{children:`문제는 누적된다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`pnpm install`}),` 시간 ↑ (특히 CI 매번)`]}),`
`,(0,r.jsx)(t.li,{children:`lockfile 부피 ↑ (PR diff에서 노이즈)`}),`
`,(0,r.jsx)(t.li,{children:`transitive 의존성이 따라 들어옴 (직접 안 쓰는데 그 의존성의 의존성까지)`}),`
`,(0,r.jsx)(t.li,{children:`transitive CVE 표면적 ↑ (rollup·node-fetch·ajv 등)`}),`
`,(0,r.jsx)(t.li,{children:`supply chain attack 노출 ↑ (npm package compromise → 영향)`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`가장 큰 비용은 `,(0,r.jsx)(t.strong,{children:`transitive CVE 보고`}),`다. 매주 audit 돌리면 "직접 안 쓰는 라이브러리"의 취약점이 계속 잡힌다. "직접 의존 아니라 영향 낮음"이라고 분류하고 정리는 매번 미룬다.`]}),`
`,(0,r.jsx)(t.h2,{children:`해법 — 사용처 0 검증 + 즉시 제거`}),`
`,(0,r.jsx)(t.p,{children:`정기적으로 사용처 0건인 의존성을 식별한다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`pnpm depcheck            # missing/unused 후보
npx knip                 # import 그래프 기반 unused 탐지
npx ts-prune             # ts 미사용 export
`})}),`
`,(0,r.jsxs)(t.p,{children:[`자동 도구 결과를 그대로 믿지 않는다. `,(0,r.jsx)(t.strong,{children:`수동 검증`}),` 필수.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`동적 import (`,(0,r.jsx)(t.code,{children:`import('pkg')`}),`)는 도구가 못 잡음`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`next.config.js`}),`·`,(0,r.jsx)(t.code,{children:`vite.config.js`}),`·`,(0,r.jsx)(t.code,{children:`postcss.config.js`}),` 등 설정 파일에서만 사용`]}),`
`,(0,r.jsx)(t.li,{children:`peer dependency로만 필요한 케이스`}),`
`,(0,r.jsx)(t.li,{children:`빌드 후크/CLI 스크립트에서만 사용`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`검증 후 제거 → `,(0,r.jsx)(t.code,{children:`pnpm install`}),` → 빌드 → 테스트 통과 확인. 한 PR에 한 패키지씩이 안전 (rollback 단위 일치).`]}),`
`,(0,r.jsx)(t.h2,{children:`init 코드가 진짜 신호`}),`
`,(0,r.jsxs)(t.p,{children:[`특히 `,(0,r.jsx)(t.code,{children:`@sentry/nextjs`}),`·`,(0,r.jsx)(t.code,{children:`@datadog/browser-rum`}),` 같은 observability 라이브러리는 `,(0,r.jsx)(t.strong,{children:`import만으로 동작하지 않는다`}),`. `,(0,r.jsx)(t.code,{children:`sentry.client.config.ts`}),`·`,(0,r.jsx)(t.code,{children:`instrumentation.ts`}),` 같은 초기화 파일이 있어야 실제 동작한다.`]}),`
`,(0,r.jsx)(t.p,{children:`다음 조건이면 dead:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`package.json에 있음`}),`
`,(0,r.jsxs)(t.li,{children:[`코드에 `,(0,r.jsx)(t.code,{children:`import`}),` 0건`]}),`
`,(0,r.jsx)(t.li,{children:`init 설정 파일 0건`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`→ `,(0,r.jsx)(t.strong,{children:`제거 안전`}),`. 도구는 이 케이스를 못 잡는다. observability 라이브러리는 효과를 import로 안 보여주니까. `,(0,r.jsx)(t.strong,{children:`init 파일 존재 확인이 진짜 신호.`})]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`peer dep만 안 쓰는 것 같음`}),`: 다른 패키지의 peer로 필요. `,(0,r.jsx)(t.code,{children:`pnpm why <pkg>`}),`로 확인.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`CLI 스크립트만 사용`}),`: `,(0,r.jsx)(t.code,{children:`package.json scripts`}),`에서만 호출. import 검색으로 안 잡힘.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`빌드 후크 사용`}),`: webpack/vite/next plugin이 내부적으로 사용. config 파일 확인.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`한꺼번에 정리`}),`: 5개 패키지를 한 PR에 → 회귀 시 어느 게 원인인지 모름. 1개씩.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`dev dependency 무시`}),`: dev도 install·lockfile에 영향. 똑같이 정리 대상.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"transitive라 영향 낮음" 회피`}),`: 회피가 누적되면 정리할 패키지가 10개+. 직접 의존 정리가 transitive도 같이 줄인다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`supply chain이 진짜 위험`}),`
`,(0,r.jsxs)(t.p,{children:[`4가지 비용 중 가장 과소평가되는 게 supply chain 표면적이다. 안 쓰는 의존성도 `,(0,r.jsx)(t.code,{children:`npm install`}),`에 포함되어 빌드 머신·CI에서 `,(0,r.jsx)(t.strong,{children:`install 시점에 코드를 실행`}),`할 수 있다(postinstall script).`]}),`
`,(0,r.jsx)(t.p,{children:`2021년 이후 npm 생태계의 공급망 공격은 대부분 이 경로다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`인기 패키지가 compromise → 악성 postinstall → CI secret 탈취`}),`
`,(0,r.jsx)(t.li,{children:`직접 안 쓰는 transitive 의존성이어도 install되면 노출`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`→ 안 쓰는 직접 의존성을 제거하면 그 transitive 트리 전체가 install에서 빠진다. dead dependency 정리는 코드 위생이 아니라 `,(0,r.jsx)(t.strong,{children:`보안 작업`}),`이다. `,(0,r.jsx)(t.code,{children:`--ignore-scripts`}),` install + 명시적 allowlist도 같이 검토.`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`안 쓰는 의존성은 `,(0,r.jsx)(t.strong,{children:`install·lockfile·CVE·supply chain`}),` 4가지 비용을 동시에 만든다. 코드 정리만큼 정기적이어야 한다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/incrementally-correct`,children:`/notes/incrementally-correct`}),` — 한 PR에 한 패키지씩 점진 정리
`,(0,r.jsx)(t.a,{href:`/notes/typescript-false-safety`,children:`/notes/typescript-false-safety`}),` — 추상화가 가리는 비용
`,(0,r.jsx)(t.a,{href:`/notes/vite-manual-chunks`,children:`/notes/vite-manual-chunks`}),` — 번들에서 의존성 비용
`,(0,r.jsx)(t.a,{href:`/notes/dev-warning-noise-cost`,children:`/notes/dev-warning-noise-cost`}),` — 의존성 호환성 경고의 누적
`,(0,r.jsx)(t.a,{href:`/notes/jwt-vs-session-tradeoffs`,children:`/notes/jwt-vs-session-tradeoffs`}),` — 보안 표면적을 줄이는 다른 결정`]})]})}function qe(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}var Je=e({default:()=>Xe,frontmatter:()=>Ye}),Ye={title:`결정론적 루프 — 사람 개입 없이 스스로 검증하는 작업`,growth:`Evergreen`,topics:[`workflow`,`ai`,`verification`],summary:`"잘해"는 사람이 확인해야 하지만 "A와 B가 동일한지 확인해"는 기계가 스스로 검증 가능하다. 생산성의 핵심 차이.`,plantedAt:`2026-03-01`,lastTendedAt:`2026-05-28`};function b(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`핵심 명제`}),`
`,(0,r.jsxs)(t.p,{children:[`생산성은 `,(0,r.jsx)(t.strong,{children:`사람 속도`}),`에 bound 되어 있는가, `,(0,r.jsx)(t.strong,{children:`기계 속도`}),`에 bound 되어 있는가에 따라 갈린다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"잘해" → 사람이 확인 → 사람 속도`}),`
`,(0,r.jsx)(t.li,{children:`"A와 B가 동일한지 확인해" → 기계가 검증 → 기계 속도`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`6단계 루프 (표준 형태)`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:`목표·범위를 구체적으로 재진술`}),`
`,(0,r.jsx)(t.li,{children:`성공 조건을 기계적으로 확인 가능한 체크리스트로 변환`}),`
`,(0,r.jsx)(t.li,{children:`체크리스트 순서대로 실행`}),`
`,(0,r.jsx)(t.li,{children:`누락·모순·숨은 가정 셀프 점검`}),`
`,(0,r.jsx)(t.li,{children:`가장 강한 검증 실행 (테스트, 타입체크, 린트, 검색, API 조회)`}),`
`,(0,r.jsx)(t.li,{children:`근거·결과·남은 리스크 보고`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`적용 영역`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`코드 변경 → 빌드·테스트·타입체크`}),`
`,(0,r.jsx)(t.li,{children:`콘텐츠 작성 → 링크 깨짐 검사·맞춤법`}),`
`,(0,r.jsx)(t.li,{children:`자동화 → dry-run + 로그 확인`}),`
`,(0,r.jsx)(t.li,{children:`의사결정 → 옵션 비교 후 기록 (#버린-선택지)`}),`
`,(0,r.jsx)(t.li,{children:`실험·A/B 테스트 → 통계 + 멈춤 신호 5가지 (정성·인프라·외부 컨텍스트)`}),`
`,(0,r.jsx)(t.li,{children:`사이트 콘텐츠 → 빌드 PASS + cross-link 무결성 + frontmatter schema`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`결정론적이지 못한 경우`}),`
`,(0,r.jsxs)(t.p,{children:[`검증이 본질적으로 사람 판단인 경우 (예: "디자인이 예쁜가?"). 이때는 `,(0,r.jsx)(t.code,{children:`미검증`}),` 표시 + 사람 확인 단계 명시.
근거를 지어내지 말 것.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`루프 자체가 무거워지면 실행을 안 하게 됨`}),`: 6단계가 모두 정성적이면 사람 검증 단계 누락. 한 단계라도 기계 검증으로 줄인다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`검증 단계를 "테스트 다 통과"로 끝냄`}),`: 통과 ≠ 정확. 회귀 테스트는 보안 패치를 잡지 못함. 가장 강한 검증을 자문.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.code,{children:`미검증`}),`을 그냥 통과`]}),`: 검증 불가 항목을 표시만 하고 사람 확인 없이 진행. 표시 + `,(0,r.jsx)(t.strong,{children:`사람 확인 강제`}),`가 진짜.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`6단계 그대로 보고`}),`: 출력 포맷을 그대로 베끼면 노이즈. 결과·증거·리스크만 짧게.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 두 모델 교차로 검증을 결정론으로
`,(0,r.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`/notes/quality-gate-loop`}),` — 결정론적 루프의 평가/개선 버전
`,(0,r.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`}),` — 의도 분류 자체를 결정론으로
`,(0,r.jsx)(t.a,{href:`/notes/ab-test-stop-signal`,children:`/notes/ab-test-stop-signal`}),` — 통계 외 정성·인프라 신호로 보완
`,(0,r.jsx)(t.a,{href:`/notes/coderabbit-cubic-double-review`,children:`/notes/coderabbit-cubic-double-review`}),` — 자동 리뷰 두 개로 검증 시야 분리
`,(0,r.jsx)(t.a,{href:`/essays/deterministic-design-loop`,children:`/essays/deterministic-design-loop`}),` — 결정론 루프를 디자인에 적용한 에세이`]})]})}function Xe(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}var Ze=e({default:()=>$e,frontmatter:()=>Qe}),Qe={title:`dev warning 무시의 누적 비용 — 노이즈가 신호를 가린다`,growth:`Seedling`,topics:[`dev`,`warning`,`observability`,`react`],summary:`dev 서버 로그에 반복되는 warning이 무시되기 시작하면 진짜 문제를 가린다. 좋은 알람의 신호/노이즈 분리가 dev 로그에도 똑같이 적용된다.`,plantedAt:`2026-05-12`,lastTendedAt:`2026-05-29`};function x(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — "나중에 볼게요" 워닝의 누적`}),`
`,(0,r.jsx)(t.p,{children:`dev 서버를 띄우면 매번 같은 warning이 출력된다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"warning - export `useEffect` not found in module @sentry/react\nwarning - export `Component` not found in module @sentry/react\nwarning - ...\n"})}),`
`,(0,r.jsx)(t.p,{children:`처음 보면 신경 쓴다. 두 번째도 본다. 세 번째부터 무시한다. 한 달 후엔 warning이 50줄 출력되어도 스크롤만 한다.`}),`
`,(0,r.jsxs)(t.p,{children:[`문제는 그 노이즈 안에 `,(0,r.jsx)(t.strong,{children:`진짜 에러`}),`가 섞일 때다. 새 warning이 추가됐는데 기존 warning들과 섞여서 안 보인다. 또는 runtime에서 발생하는 에러가 dev 로그에 한 줄 찍히는데 묻힌다.`]}),`
`,(0,r.jsx)(t.h2,{children:`좋은 알람의 4기준이 dev 로그에도`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/good-alert-four-criteria`,children:`좋은 알람 4기준`}),`이 dev 로그 warning에도 적용된다.`]}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`사람이 행동할 일이 있는가`}),` — warning이 떴는데 "지금 뭐 해?"가 명확하지 않으면 noise`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`임계가 의미 있는가`}),` — 라이브러리 내부 호환성 경고가 사용자 영향 0이면 진짜 신호 아님`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`runbook이 있는가`}),` — 이 warning이 떴을 때 어떻게 대응할지 어딘가에 있어야`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`해결되거나 명시적 silence되는가`}),` — 무시 누적은 시스템 신뢰 0`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`처방 — 3분류`}),`
`,(0,r.jsx)(t.p,{children:`각 warning을 셋 중 하나로 분류한다.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`A. 즉시 해결`}),`: 진짜 문제. 라이브러리 업그레이드, 코드 수정으로 끝낸다.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`B. 명시적 silence`}),`: 무시해도 되는 warning. 단, "그냥 무시"가 아니라 코드/config에 명시.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`// next.config.js
webpack(config) {
  config.ignoreWarnings = [
    {
      module: /node_modules\\/@sentry\\/react/,
      message: /export .* not found/,
    },
  ];
  return config;
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`이렇게 적어두면 다음부터 같은 warning이 안 보인다. `,(0,r.jsx)(t.strong,{children:`새 warning만 보인다.`})]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`C. 알려진 이슈로 link`}),`: 라이브러리 자체 이슈인 경우 GitHub issue로 link 남기고 정리. silence와 함께 코멘트로 issue URL.`]}),`
`,(0,r.jsx)(t.p,{children:`세 분류 다 안 한 채로 "그냥 둠"이 노이즈 누적의 원인.`}),`
`,(0,r.jsx)(t.h2,{children:`"기억해두자"는 안 됨`}),`
`,(0,r.jsx)(t.p,{children:`"이거 나중에 봐야지" → 한 달 후에도 그대로다. 인간 메모리는 휘발성이라.`}),`
`,(0,r.jsx)(t.p,{children:`처방은 두 가지:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`즉시 해결 (A)`}),`: 5분 안에 가능하면 지금`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`명시적 silence (B)`}),`: 코드/config에 한 줄 박는다`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`둘 다 안 되면 새 warning이 보이지 않을 가능성 ↑.`}),`
`,(0,r.jsx)(t.h2,{children:`react import warning 패턴`}),`
`,(0,r.jsx)(t.p,{children:`자주 등장하는 케이스: 라이브러리가 React 17 export 형식으로 import하는데 React 19에서 named export 변경. 라이브러리 측 fix 대기 중이면:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`A 불가 (라이브러리 측이 안 고침)`}),`
`,(0,r.jsx)(t.li,{children:`B 적절 (사용자 영향 0인 호환성 경고)`}),`
`,(0,r.jsx)(t.li,{children:`C 권장 (issue link 남기고 fix 시 silence 제거)`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`silence는 임시 조치, `,(0,r.jsx)(t.strong,{children:`fix되면 즉시 silence 제거`}),`가 원칙. 안 그러면 silence가 stale.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`silence 패턴이 너무 넓음`}),`: `,(0,r.jsx)(t.code,{children:`module: /node_modules/`}),` 식으로 전체 무시 → 진짜 라이브러리 버그도 묻힘. 좁게 한정.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`silence 후 잊음`}),`: silence 코드 옆에 issue link·기한·회고 날짜를 코멘트로 남긴다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`새 warning 무감지`}),`: silence를 자주 하면 "또 새 거 silence"가 습관. 새 warning은 한 번 검증 후 silence.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`dev only라 production 영향 없다고 무시`}),`: dev 로그 무신뢰는 일반 무신뢰로 이어진다. dev도 진지하게.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`CI에도 똑같이 — warning을 error로 승격`}),`
`,(0,r.jsx)(t.p,{children:`dev 로그뿐 아니라 CI 빌드 로그도 같은 누적이 일어난다. CI는 한 발 더 나아갈 수 있다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`silence 결정한 warning → `,(0,r.jsx)(t.code,{children:`ignoreWarnings`}),`로 숨김`]}),`
`,(0,r.jsxs)(t.li,{children:[`그 외 `,(0,r.jsx)(t.strong,{children:`새 warning은 CI 실패로 승격`}),` (`,(0,r.jsx)(t.code,{children:`--max-warnings 0`}),`)`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`이러면 새 warning이 PR에서 빨간 불로 잡힌다. "나중에 봐야지"가 구조적으로 불가능해진다. 단, 승격 전에 기존 warning을 전부 분류(해결/silence/link)해야 한다. 안 그러면 CI가 항상 빨간 불.`}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`dev warning도 알람이다. 신호와 노이즈를 분리 안 하면 둘 다 잃는다.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/good-alert-four-criteria`,children:`/notes/good-alert-four-criteria`}),` — 신호/노이즈 분리의 원본 기준
`,(0,r.jsx)(t.a,{href:`/notes/incident-monitoring-gap`,children:`/notes/incident-monitoring-gap`}),` — 노이즈가 진짜 신호를 가리는 사이클
`,(0,r.jsx)(t.a,{href:`/notes/dead-dependency-hidden-cost`,children:`/notes/dead-dependency-hidden-cost`}),` — 의존성 경고의 누적 비용
`,(0,r.jsx)(t.a,{href:`/notes/flaky-test-diagnosis`,children:`/notes/flaky-test-diagnosis`}),` — CI 신뢰도를 깎는 또 다른 노이즈
`,(0,r.jsx)(t.a,{href:`/notes/ci-cache-incremental-builds`,children:`/notes/ci-cache-incremental-builds`}),` — CI 로그 위생과 짝`]})]})}function $e(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}var et=e({default:()=>nt,frontmatter:()=>tt}),tt={title:`디지털 가든은 왜 블로그보다 운영 부담이 적은가`,growth:`Budding`,topics:[`garden`,`writing`,`ops`],summary:`시간순 블로그는 "이번 달은 안 썼네"가 누적되지만, 디지털 가든은 노트의 성숙도만 다듬어도 사이트가 살아있게 됩니다.`,plantedAt:`2026-04-22`,lastTendedAt:`2026-05-28`};function S(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`핵심 차이`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:`블로그`}),(0,r.jsx)(t.th,{children:`디지털 가든`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`시간축`}),(0,r.jsx)(t.td,{children:`게시일 강조`}),(0,r.jsx)(t.td,{children:`성숙도(🌱🌿🌳) 강조`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`운영 부담`}),(0,r.jsx)(t.td,{children:`"마감 압박" 누적`}),(0,r.jsx)(t.td,{children:`다듬기만 해도 ok`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`탐색`}),(0,r.jsx)(t.td,{children:`시간순/카테고리`}),(0,r.jsx)(t.td,{children:`토픽·백링크로 비선형`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`완성도`}),(0,r.jsx)(t.td,{children:`"완성"이 전제`}),(0,r.jsx)(t.td,{children:`미완성도 공개`})]})]})]}),`
`,(0,r.jsx)(t.h2,{children:`왜 부담이 적은가`}),`
`,(0,r.jsx)(t.p,{children:`블로그는 "글 = 완성된 결과물". 그래서 한 편의 글을 게시하려면 도입·전개·결론을 다 갖춰야 합니다. 디지털 가든은 "글 = 자라는 노트". 한 줄 메모로 시작해 🌿로 자라고, 충분히 다듬으면 🌳가 됩니다.`}),`
`,(0,r.jsx)(t.p,{children:`이 차이가 운영에 미치는 효과는 비선형입니다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`시작 비용 ↓`}),`: 완성 압박이 없어 한 줄로 시작 가능. 시작 비용이 0에 가까우면 시작 빈도가 올라감.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`재방문 자연스러움`}),`: 같은 글을 다시 다듬는 게 가든의 핵심 동작. 블로그는 다듬으면 "수정 이력" 같은 노이즈가 됨.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`상태별 분류`}),`: 미완성도 공개. 🌱이라는 신호 자체가 "이건 자라는 중"이라는 자기 인정.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`누적이 자라남으로 보임`}),`: 블로그는 "글 N편 쓴 사이트"로 보이고, 가든은 "N편이 서로 연결된 사이트"로 보임. 후자가 깊이 신호.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`블로그가 시간순 강조라면, 가든은 `,(0,r.jsx)(t.strong,{children:`연결 강조`}),`입니다. 같은 글 50편이어도 시간순 나열보다 연결된 그래프가 훨씬 깊은 신호.`]}),`
`,(0,r.jsx)(t.h2,{children:`운영 룰 (현재)`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`🌱 새싹: 핵심 주장 1줄 + 근거 1-2개. 5분 분량.`}),`
`,(0,r.jsx)(t.li,{children:`🌿 자라는 중: 반례·예외·옆 주제와 연결 추가. 10-20분 분량.`}),`
`,(0,r.jsx)(t.li,{children:`🌳 상록수: 여러 번 다듬어 정착한 노트. 다른 노트에서 자주 백링크 받음.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`너무 많은 🌱을 심으면 "정원이 황무지"처럼 보일 수 있음 → 🌿 이상만 인덱스 상단에.`}),`
`,(0,r.jsx)(t.li,{children:`백링크가 없으면 "그래프"의 의미가 약함 → 토픽 태그 일관성이 핵심.`}),`
`,(0,r.jsx)(t.li,{children:`🌱을 영원히 🌱로 두면 가든이 아니라 메모장. lastTendedAt 다듬기가 한 달 이상 없으면 노트를 삭제하거나 합치는 것도 운영.`}),`
`,(0,r.jsx)(t.li,{children:`게시일 숨김이 "투명성 부족"으로 읽힐 수도. plantedAt/lastTendedAt 둘 다 frontmatter에 두고 화면에 lastTendedAt만 보이게 하면 균형.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/last-tended-signal`,children:`/notes/last-tended-signal`}),` — 다듬은 날짜가 살아있는 신호
`,(0,r.jsx)(t.a,{href:`/notes/write-why-not-what`,children:`/notes/write-why-not-what`}),` — 가든 노트의 톤
`,(0,r.jsx)(t.a,{href:`/notes/mdx-content-as-files`,children:`/notes/mdx-content-as-files`}),` — 가든 운영을 가능하게 하는 파일 기반 구조
`,(0,r.jsx)(t.a,{href:`/notes/notes-round-pattern`,children:`/notes/notes-round-pattern`}),` — 가든 운영의 라운드 사이클
`,(0,r.jsx)(t.a,{href:`/essays/garden-fallow-meaning`,children:`/essays/garden-fallow-meaning`}),` — 매일 작성 안 함이 운영의 일부`]})]})}function nt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(S,{...e})}):S(e)}var rt=e({default:()=>at,frontmatter:()=>it}),it={title:`dispatch — 의도 기반 라우팅 패턴`,growth:`Evergreen`,topics:[`claude`,`workflow`,`routing`,`ai`],summary:`모든 사용자 메시지를 3 에이전트 경쟁으로 최적 스킬에 라우팅. 키워드 매칭이 아닌 의미론적 의도 분석.`,plantedAt:`2026-04-12`,lastTendedAt:`2026-05-29`};function C(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`왜 라우팅이 필요한가`}),`
`,(0,r.jsxs)(t.p,{children:[`Claude Code에 30+ 스킬이 있다면, 매번 사람이 "이건 `,(0,r.jsx)(t.code,{children:`/ship`}),`으로, 저건 `,(0,r.jsx)(t.code,{children:`/review`}),`로"를 판단하는 건 사람 속도다. dispatch가 의도를 읽어 최적 스킬을 부르도록 두면 생산성이 기계 속도로 바뀐다.`]}),`
`,(0,r.jsx)(t.h2,{children:`작동 방식`}),`
`,(0,r.jsx)(t.p,{children:`3 에이전트가 병렬로 판단한다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`maximizer`}),` — 토큰 최대화 편향. "더 깊은 분석이 가능한 스킬은?"`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`synergist`}),` — 체인 편향. "조합이 1+1>2인가?"`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`pragmatist`}),` — 의도 매칭. "사용자 발화의 진짜 의도는?"`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`각자 후보 스킬·예상 성과·놓치기 쉬운 측면을 제시한다. 합의 시 즉시 채택, 이견 시 점수 공식으로 해소.`}),`
`,(0,r.jsx)(t.h2,{children:`왜 키워드 매칭이 아닌가`}),`
`,(0,r.jsxs)(t.p,{children:[`"PR 만들어줘"는 단순 매칭으로 `,(0,r.jsx)(t.code,{children:`/create-pr`}),`에 보내면 된다. 그러나 "이 변경을 어떻게 마무리하지?"는 맥락 의존이다. 의도 기반 판단은 후자도 처리한다.`]}),`
`,(0,r.jsxs)(t.p,{children:[`dispatch가 키워드를 보지 않고 발화의 의미를 본다는 점이 핵심이다. "Redux로 상태관리 추가해줘" 같은 단일 기술 매몰 신호를 감지하면 `,(0,r.jsx)(t.code,{children:`/personas`}),` 비교를 먼저 끼워 넣는다.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정 세 가지`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`자기 자신 추천 → 무한 루프`}),`. dispatch는 자기 자신(`,(0,r.jsx)(t.code,{children:`/dispatch`}),`)을 절대 제안하지 않도록 규칙으로 막음.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`매번 dispatch 호출 = 토큰 비용`}),`. fast route(만장일치 시 점수화 생략)로 절감.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`단순 확인 응답("네")까지 dispatch 보내면 비효율`}),`. PASS 분류 별도.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`결정론적 평가가 핵심`}),`
`,(0,r.jsx)(t.p,{children:`dispatch가 채택한 결과를 사람이 매번 검증할 수 없다면 무용지물이다. 그래서 dispatch는 채택 직후 결과 보고(스킬명 + 점수 + 놓치기 쉬운 측면)를 항상 표면화한다. 사람이 "아, 이거 잘못 골랐네"를 1초 안에 발견할 수 있어야 한다.`}),`
`,(0,r.jsxs)(t.p,{children:[`채택된 스킬이 다시 결정론적 평가 루프를 돌리는 패턴(예: `,(0,r.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`quality-gate`}),`)을 이어가면, 사람 개입 없이 자율 검증되는 워크플로우가 완성된다.`]}),`
`,(0,r.jsx)(t.h2,{children:`3 에이전트가 수렴을 막는다`}),`
`,(0,r.jsxs)(t.p,{children:[`단일 판단자가 라우팅하면 그 판단자의 편향으로 수렴한다 — 같은 종류 요청을 늘 같은 스킬로 보낸다. 3 에이전트(maximizer·synergist·pragmatist)는 서로 다른 편향을 가져서, 한 관점이 놓친 후보를 다른 관점이 올린다. `,(0,r.jsx)(t.a,{href:`/notes/ai-output-mode-collapse`,children:`단일 모델 수렴`}),`을 라우팅 단계에서 깨는 구조다.`]}),`
`,(0,r.jsxs)(t.p,{children:[`핵심은 세 편향이 `,(0,r.jsx)(t.strong,{children:`의도적으로 다르다`}),`는 것. 같은 프롬프트로 3개를 돌리면 수렴하지만, 토큰 최대화·시너지·적합성이라는 다른 목적함수를 주면 분산된다.`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — 라우팅 결정 자체를 사람 개입 없이
`,(0,r.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 라우팅 외 모든 작업도 경쟁으로
`,(0,r.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`/notes/quality-gate-loop`}),` — 채택된 스킬이 다시 평가 루프
`,(0,r.jsx)(t.a,{href:`/notes/ai-output-mode-collapse`,children:`/notes/ai-output-mode-collapse`}),` — 다른 목적함수로 수렴 회피
`,(0,r.jsx)(t.a,{href:`/essays/delegation-autonomy-calibration`,children:`/essays/delegation-autonomy-calibration`}),` — 라우팅 자동화도 자율성 보정의 일부
`,(0,r.jsx)(t.a,{href:`/cases/dispatch-routing-system`,children:`/cases/dispatch-routing-system`}),` — 이 패턴을 실제 시스템으로 구축한 케이스
`,(0,r.jsx)(t.a,{href:`/essays/ai-workflow-chains`,children:`/essays/ai-workflow-chains`}),` — 라우팅이 워크플로우 체인의 입구
`,(0,r.jsx)(t.a,{href:`/cases/claude-md-meta-system`,children:`/cases/claude-md-meta-system`}),` — dispatch를 강제하는 CLAUDE.md 메타 시스템 케이스`]})]})}function at(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(C,{...e})}):C(e)}var ot=e({default:()=>ct,frontmatter:()=>st}),st={title:`Essential vs Accidental Complexity — Brooks가 가르쳐준 것`,growth:`Budding`,topics:[`swe`,`tradeoff`,`design-process`],summary:`본질 복잡도(essential)는 문제 자체의 어려움이고, 우발 복잡도(accidental)는 도구·환경에서 오는 어려움이다. 둘을 구분하지 못하면 가짜 일에 시간을 쓴다.`,plantedAt:`2026-04-08`,lastTendedAt:`2026-05-28`};function w(e){let t={a:`a`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`핵심 구분`}),`
`,(0,r.jsxs)(t.p,{children:[`Brooks가 `,(0,r.jsx)(t.em,{children:`No Silver Bullet`}),` (1986)에서 제안:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Essential complexity`}),`: 문제 자체가 가진 복잡도. "사용자 인증·결제·환불 흐름"처럼 도메인이 본질적으로 복잡.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Accidental complexity`}),`: 도구·언어·환경에서 오는 복잡도. "이 라이브러리 버그", "빌드 설정 깨짐", "타입 추론 실패".`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`왜 중요한가`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Essential은 줄일 수 없다. 도구를 바꿔도 본질 문제는 그대로.`}),`
`,(0,r.jsx)(t.li,{children:`Accidental은 줄일 수 있다. 더 나은 도구·추상화·자동화로.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`대부분의 "리팩토링"은 accidental complexity를 줄이는 일이다. 진짜 가치는 essential complexity를 정확히 마주하는 데서 나온다.`}),`
`,(0,r.jsx)(t.h2,{children:`자기 점검 질문`}),`
`,(0,r.jsx)(t.p,{children:`코드를 쓰면서:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`"이 코드가 어려운 이유는 `,(0,r.jsx)(t.strong,{children:`문제가 어려워서`}),`인가, `,(0,r.jsx)(t.strong,{children:`도구가 부족해서`}),`인가?"`]}),`
`,(0,r.jsx)(t.li,{children:`후자라면 도구를 바꾸거나 자동화. 전자라면 받아들이고 정확히 풀기.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`실무 사례`}),`
`,(0,r.jsx)(t.h3,{children:`Case 1 — 권한 시스템`}),`
`,(0,r.jsx)(t.p,{children:`권한 시스템은 본질적으로 복잡하다. 사용자×역할×리소스×액션의 cartesian product. RBAC·ABAC·ReBAC 어떤 모델을 골라도 본질 복잡도가 사라지지 않는다.`}),`
`,(0,r.jsxs)(t.p,{children:[`이 자리에서 "더 나은 라이브러리"를 찾는 건 accidental 줄이기지 essential 줄이기 아님. `,(0,r.jsx)(t.strong,{children:`모델 자체를 도메인에 맞게 좁히는 것`}),`(이 시스템에서 필요한 권한 차원만)이 essential을 정확히 마주하는 일.`]}),`
`,(0,r.jsx)(t.h3,{children:`Case 2 — 비동기 race condition`}),`
`,(0,r.jsx)(t.p,{children:`같은 화면에서 두 요청이 동시에 일어나는 race는 본질적으로 복잡하다. mutex·lock·optimistic concurrency·CRDT — 어떤 방법이든 race의 본질을 다뤄야 함.`}),`
`,(0,r.jsx)(t.p,{children:`여기서 "Promise.all로 합치면 깔끔"이라는 도구 해결책은 race 자체를 피하는 것. 본질을 회피하면 다른 자리에서 같은 race가 다시 나타난다.`}),`
`,(0,r.jsx)(t.h3,{children:`Case 3 — TypeScript 타입 vs 비즈니스 로직`}),`
`,(0,r.jsx)(t.p,{children:`복잡한 타입을 작성하다 보면 "타입이 어려운 거" 같다. 사실은 비즈니스 로직 자체가 복잡한 것을 타입이 노출한 것. 타입을 단순화해서 회피하면 비즈니스 로직의 복잡도가 다른 자리(런타임 버그·테스트)에서 나타남.`}),`
`,(0,r.jsx)(t.p,{children:`타입의 복잡도는 essential의 신호일 때가 많다. accidental로 오인하지 말 것.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`자동화 인프라 자체가 essential인 줄 알지만 대부분 accidental. 자동화가 본 작업보다 무거워지면 의심.`}),`
`,(0,r.jsx)(t.li,{children:`"이것만 자동화하면 다 해결돼" — 본질 문제를 회피하는 신호.`}),`
`,(0,r.jsx)(t.li,{children:`Premature abstraction. 본질이 명확해지기 전 추상화는 accidental만 늘림.`}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`essential을 accidental로 오인`}),`: "이거 도구 바꾸면 쉬워질 것 같은데"가 본질 회피일 수 있음. 도구 3개 갈아끼워도 여전히 어렵다면 essential.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`accidental을 essential로 오인`}),`: "이건 원래 어려운 일"이라 체념했는데 사실 도구만 바꾸면 한 시간 일. 주변 동료한테 한 번 물어보는 게 빠른 검증.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함의`}),`
`,(0,r.jsxs)(t.p,{children:[`엔지니어의 가장 큰 가치는 essential complexity를 `,(0,r.jsx)(t.strong,{children:`정확히 좁히는`}),` 능력. 도메인 이해 + 본질 추출. 도구를 잘 다루는 건 보조적이다.`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`/notes/one-way-two-way-door`}),` — 본질 복잡도를 마주하기 전, 의사결정의 되돌릴 수 있음 여부를 먼저 분리
`,(0,r.jsx)(t.a,{href:`/notes/spike-throwaway-code`,children:`/notes/spike-throwaway-code`}),` — accidental complexity를 줄이는 가장 빠른 방법은 버릴 코드로 본질을 노출하는 spike
`,(0,r.jsx)(t.a,{href:`/notes/incrementally-correct`,children:`/notes/incrementally-correct`}),` — 본질을 한 번에 잡으려 하지 않고 점진적으로 정확해지는 작업 자세`]})]})}function ct(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(w,{...e})}):w(e)}var lt=e({default:()=>dt,frontmatter:()=>ut}),ut={title:`exactly-once 전달의 환상 — at-least-once + 멱등성이 답`,growth:`Seedling`,topics:[`distributed`,`data`,`messaging`,`backend`],summary:`메시지 큐에서 "정확히 한 번 전달"은 대부분 마케팅 용어다. 네트워크에서 진짜 exactly-once는 불가능에 가깝다. at-least-once 전달 + 소비자 멱등성 = 실질적 한 번.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function T(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`세 가지 전달 보장`}),`
`,(0,r.jsx)(t.p,{children:`메시지 큐(Kafka·SQS·RabbitMQ)는 세 가지 전달 보장을 말한다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`at-most-once`}),`: 최대 한 번. 손실 가능, 중복 없음.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`at-least-once`}),`: 최소 한 번. 손실 없음, 중복 가능.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`exactly-once`}),`: 정확히 한 번. 손실도 중복도 없음.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`대부분 exactly-once를 원한다. 그런데 진짜 exactly-once는 분산 환경에서 거의 불가능하다.`}),`
`,(0,r.jsx)(t.h2,{children:`왜 exactly-once가 어려운가`}),`
`,(0,r.jsxs)(t.p,{children:[`핵심은 `,(0,r.jsx)(t.strong,{children:`메시지 처리와 ack(확인 응답)가 원자적이지 않다`}),`는 것.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`1. 소비자가 메시지 수신
2. 메시지 처리 (DB 쓰기)
3. 큐에 ack 전송
`})}),`
`,(0,r.jsxs)(t.p,{children:[`2와 3 사이에 소비자가 죽으면? 처리는 됐는데 ack가 안 갔다. 큐는 메시지를 다시 보낸다 → `,(0,r.jsx)(t.strong,{children:`중복 처리`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`ack를 먼저 보내면(3→2)? ack 후 처리 전에 죽으면 → `,(0,r.jsx)(t.strong,{children:`메시지 손실`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`처리와 ack를 원자적으로 묶을 수 없으니, 손실 아니면 중복 중 하나를 택해야 한다. 그래서 "exactly-once"는 시스템 경계 안에서의 환상이고, 경계를 넘으면 깨진다.`}),`
`,(0,r.jsx)(t.h2,{children:`"exactly-once"라 부르는 것들의 실체`}),`
`,(0,r.jsx)(t.p,{children:`상용 시스템이 말하는 exactly-once는 대부분:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Kafka exactly-once`}),`: 프로듀서 idempotence + 트랜잭션. 단 `,(0,r.jsx)(t.strong,{children:`Kafka 내부`}),`(Kafka→Kafka)에서만. 외부 DB로 나가면 깨짐.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Flink/Spark exactly-once`}),`: checkpoint + 상태 복원. 외부 sink가 멱등하거나 트랜잭셔널해야 성립.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`공통점: `,(0,r.jsx)(t.strong,{children:`경계 안에서만 exactly-once`}),`. 외부 시스템(DB·API·결제)으로 나가는 순간 at-least-once + 멱등성으로 돌아온다.`]}),`
`,(0,r.jsx)(t.h2,{children:`실용 답 — at-least-once + 멱등성`}),`
`,(0,r.jsx)(t.p,{children:`진짜 해법은 단순하다.`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`전달은 at-least-once로`}),` (손실 없음 보장)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`소비자를 멱등하게`}),` (중복이 와도 결과 동일)`]}),`
`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-python`,children:`def consume(message):
    if store.seen(message.id):   # 이미 처리?
        return                   # 중복 무시
    process(message)
    store.mark_seen(message.id)
`})}),`
`,(0,r.jsxs)(t.p,{children:[`중복이 와도 `,(0,r.jsx)(t.code,{children:`seen`}),` 체크로 흡수. 손실은 at-least-once가 막는다. 결과적으로 `,(0,r.jsx)(t.strong,{children:`effectively-once`}),`.`]}),`
`,(0,r.jsx)(t.p,{children:`이게 멱등성 키 패턴과 정확히 같다. 메시지 ID가 멱등성 키.`}),`
`,(0,r.jsx)(t.h2,{children:`outbox 패턴 — DB와 큐의 원자성`}),`
`,(0,r.jsx)(t.p,{children:`처리(DB 쓰기)와 메시지 발행을 원자적으로 묶고 싶을 때.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`문제: DB 커밋 후 큐 발행 사이에 죽으면 → 메시지 유실
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`outbox 패턴`}),`:`]}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[`비즈니스 데이터 + outbox 레코드를 `,(0,r.jsx)(t.strong,{children:`같은 DB 트랜잭션`}),`으로 커밋`]}),`
`,(0,r.jsx)(t.li,{children:`별도 프로세스가 outbox를 폴링해서 큐로 발행`}),`
`,(0,r.jsx)(t.li,{children:`발행 성공하면 outbox 레코드 삭제(또는 표시)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`DB 트랜잭션이 원자성을 보장하고, outbox 폴링이 at-least-once 발행을 보장. 소비자 멱등성이 중복을 흡수.`}),`
`,(0,r.jsx)(t.h2,{children:`광고 이벤트 파이프라인에 적용`}),`
`,(0,r.jsx)(t.p,{children:`광고 클릭/노출 이벤트는 대량 + 손실 민감(정산).`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`수집: at-least-once (이벤트 손실 = 매출 손실)`}),`
`,(0,r.jsx)(t.li,{children:`소비: event_id 멱등성으로 dedup`}),`
`,(0,r.jsx)(t.li,{children:`정산: 윈도우 마감 시 최종 dedup (eventual하게 중복 제거)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`실시간 집계는 약간의 중복 허용, 정산 직전에 강한 dedup. 강한 일관성이 필요한 지점에만 비용 지불.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"exactly-once" 마케팅을 그대로 믿기`}),`: 경계 안에서만. 외부 sink로 나가면 멱등성 필요.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`at-most-once를 무의식 선택`}),`: ack를 처리 전에 보내면 손실. 돈 걸린 이벤트엔 치명적.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`멱등성 없이 at-least-once`}),`: 중복이 그대로 통과. 집계 2배·과금 2배.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`seen 체크 스토리지 무한`}),`: 메시지 ID 저장도 TTL/윈도우 필요.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`outbox 폴링 지연 무시`}),`: outbox는 즉시 발행이 아니라 폴링 지연 있음. 실시간성이 필요하면 트레이드오프 인지.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`순서 보장과 혼동`}),`: exactly-once ≠ 순서 보장. 순서가 필요하면 파티션 키 별도 설계.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`분산 환경에서 진짜 exactly-once는 시스템 경계 안의 환상이다. 실용 답은 `,(0,r.jsx)(t.strong,{children:`at-least-once 전달 + 소비자 멱등성 = effectively-once`}),`. 멱등성이 분산 데이터 정합성의 핵심 도구다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/idempotency-keys-billing`,children:`/notes/idempotency-keys-billing`}),` — 멱등성 키의 구체 설계
`,(0,r.jsx)(t.a,{href:`/notes/ad-metric-traps`,children:`/notes/ad-metric-traps`}),` — 광고 이벤트 dedup
`,(0,r.jsx)(t.a,{href:`/notes/postgres-transaction-isolation`,children:`/notes/postgres-transaction-isolation`}),` — outbox 패턴의 트랜잭션 격리
`,(0,r.jsx)(t.a,{href:`/notes/graceful-shutdown`,children:`/notes/graceful-shutdown`}),` — 소비자가 죽을 때 in-flight 메시지 보호
`,(0,r.jsx)(t.a,{href:`/logs#2026-06-09-fault-isolation-atomic-writes`,children:`/logs#2026-06-09-fault-isolation-atomic-writes`}),` — outbox가 의존하는 원자적 쓰기/커밋 경계`]})]})}function dt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(T,{...e})}):T(e)}var ft=e({default:()=>mt,frontmatter:()=>pt}),pt={title:`Flaky test 진단 — 4가지 원인과 격리 패턴`,growth:`Seedling`,topics:[`testing`,`ci`,`diagnosis`,`quality`],summary:`Flaky test는 보통 시간·상태·환경·외부 의존 4가지 원인. 어디서 깨졌는지 모르면 retry로 가린다. 원인별 진단 + 격리 패턴.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function E(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`Flaky test가 나쁜 이유`}),`
`,(0,r.jsx)(t.p,{children:`같은 코드가 어떨 땐 통과, 어떨 땐 실패. 처음엔 "retry로 해결" 하지만 누적되면:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`CI 신뢰도 0 — 실패해도 "또 flaky?" 무시`}),`
`,(0,r.jsx)(t.li,{children:`진짜 버그가 flaky 사이에 숨음`}),`
`,(0,r.jsx)(t.li,{children:`developer 시간 손실 (재실행 대기)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`retry는 증상 가림. 원인 진단이 핵심.`}),`
`,(0,r.jsx)(t.h2,{children:`원인 1 — 시간 의존 (Time)`}),`
`,(0,r.jsx)(t.p,{children:`가장 흔한 원인.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`// 깨지기 쉬움
test('expires after 1 hour', async () => {
  const token = createToken();
  await sleep(3600 * 1000); // 1시간 대기? 불가
  expect(token.isExpired()).toBe(true);
});

// 또 다른 패턴
test('processes within 100ms', async () => {
  const start = Date.now();
  await process();
  expect(Date.now() - start).toBeLessThan(100); // 머신 속도 영향
});
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`진단 신호`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`로컬에선 통과, CI에선 실패 (CI 머신이 느림)`}),`
`,(0,r.jsx)(t.li,{children:`같은 머신에서 부하 시 실패`}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`setTimeout`}),`·`,(0,r.jsx)(t.code,{children:`sleep`}),`·`,(0,r.jsx)(t.code,{children:`Date.now`}),`·`,(0,r.jsx)(t.code,{children:`performance.now`}),` 사용`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`해결`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`시간을 mock: `,(0,r.jsx)(t.code,{children:`jest.useFakeTimers()`}),`, `,(0,r.jsx)(t.code,{children:`sinon.useFakeTimers()`})]}),`
`,(0,r.jsxs)(t.li,{children:[`시간 의존 로직을 함수로 분리: `,(0,r.jsx)(t.code,{children:`function isExpired(now, expiresAt)`}),` → now를 주입`]}),`
`,(0,r.jsxs)(t.li,{children:[`절대 시간(`,(0,r.jsx)(t.code,{children:`< 100ms`}),`) 대신 결정론적 검증`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`원인 2 — 상태 누수 (State Leak)`}),`
`,(0,r.jsx)(t.p,{children:`테스트 간 상태가 새는 경우.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`// 깨지기 쉬움
let counter = 0;

test('A', () => {
  counter++;
  expect(counter).toBe(1); // 단독 실행만 통과
});

test('B', () => {
  counter++;
  expect(counter).toBe(1); // A가 먼저 실행되면 2 = FAIL
});
`})}),`
`,(0,r.jsx)(t.p,{children:`또는 DB·파일시스템·전역 객체 누수.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`진단 신호`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`테스트 순서 바꾸면 결과 다름 (`,(0,r.jsx)(t.code,{children:`--shuffle`}),` 옵션)`]}),`
`,(0,r.jsx)(t.li,{children:`병렬 실행 시 실패 (직렬에선 통과)`}),`
`,(0,r.jsx)(t.li,{children:`단독 실행 통과, 다른 테스트와 같이 실행 시 실패`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`해결`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`beforeEach`}),`로 상태 초기화`]}),`
`,(0,r.jsxs)(t.li,{children:[`전역 mock은 `,(0,r.jsx)(t.code,{children:`afterEach`}),`로 cleanup`]}),`
`,(0,r.jsx)(t.li,{children:`DB 테스트는 트랜잭션 + rollback 또는 schema reset`}),`
`,(0,r.jsx)(t.li,{children:`테스트 간 순서 의존 금지`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`원인 3 — 환경 의존 (Environment)`}),`
`,(0,r.jsx)(t.p,{children:`특정 환경에서만 동작.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`test('reads config', () => {
  const config = loadConfig(); // process.env 사용
  expect(config.apiKey).toBeDefined(); // CI에 env var 누락 시 FAIL
});

test('formats date', () => {
  expect(formatDate(new Date())).toBe('2026-05-29'); // 머신 timezone 영향
});
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`진단 신호`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`timezone·locale·OS 따라 결과 다름`}),`
`,(0,r.jsx)(t.li,{children:`env var 누락 시 실패`}),`
`,(0,r.jsx)(t.li,{children:`네트워크 환경 (proxy·VPN·firewall) 영향`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`해결`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`env var은 테스트 fixture에 명시 (디폴트 + override)`}),`
`,(0,r.jsxs)(t.li,{children:[`timezone·locale을 명시: `,(0,r.jsx)(t.code,{children:`process.env.TZ = 'UTC'`})]}),`
`,(0,r.jsxs)(t.li,{children:[`파일시스템 경로는 `,(0,r.jsx)(t.code,{children:`path.join`}),` (cross-OS)`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`원인 4 — 외부 의존 (External)`}),`
`,(0,r.jsx)(t.p,{children:`DB·API·외부 서비스 호출.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`test('fetches user', async () => {
  const user = await fetch('/api/user/1'); // 외부 API
  expect(user.name).toBe('Alice');
});
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`진단 신호`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`네트워크 끊김 시 실패`}),`
`,(0,r.jsx)(t.li,{children:`외부 서비스 응답 시간 변동 시 timeout`}),`
`,(0,r.jsx)(t.li,{children:`외부 서비스 데이터 변경 시 결과 다름`}),`
`,(0,r.jsx)(t.li,{children:`rate limit 걸림`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`해결`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`단위 테스트는 외부 의존 mock (MSW·nock)`}),`
`,(0,r.jsx)(t.li,{children:`통합 테스트는 격리된 환경 (docker-compose)`}),`
`,(0,r.jsx)(t.li,{children:`E2E는 staging API 또는 mocked production`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`격리 패턴`}),`
`,(0,r.jsx)(t.p,{children:`flaky를 발견하면 즉시 해결 못 할 수도. 임시 격리:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`// 격리 1: skip + 이슈 등록
test.skip('flaky-test-name', () => { ... }); // → 이슈 트래커에 등록 필수

// 격리 2: retry (마지막 수단)
test('flaky', async () => { ... }, { retry: 3 });

// 격리 3: 별도 파일로 분리
// __tests__/flaky/auth.test.js → CI에서 별도 stage
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`중요`}),`: 격리는 임시. 1주일 이내에 원인 분석 + 수정 또는 삭제.`]}),`
`,(0,r.jsx)(t.h2,{children:`진단 워크플로우`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`flaky 발견
  ↓
1. 100회 반복 실행 (실패율 측정)
  ↓
2. 단독 실행 vs 다른 테스트와 같이 실행 비교 (상태 누수 진단)
  ↓
3. 순서 셔플 (--shuffle) (순서 의존 진단)
  ↓
4. CI vs 로컬 비교 (환경·시간 의존 진단)
  ↓
5. 외부 의존 mock 후 재실행 (외부 의존 진단)
  ↓
원인 분류 → 위 4가지 해결책
`})}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`retry로 가리기`}),`: 가장 흔한 anti-pattern. 진짜 버그가 retry 사이에 숨음.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`flaky를 "예전부터 있던 것"으로 무시`}),`: 누적되면 CI 전체 신뢰도 0.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`격리 후 안 돌아옴`}),`: skip한 테스트가 영원히 skip. 격리는 1주일 한도.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`단위 테스트가 외부 의존`}),`: 단위 테스트는 외부 의존 0. 외부 의존 있으면 통합 테스트.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`테스트가 random 데이터 생성`}),`: `,(0,r.jsx)(t.code,{children:`faker`}),`·`,(0,r.jsx)(t.code,{children:`random()`}),`이 가끔 edge case 만나면 실패. seed 고정 또는 deterministic fixture.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`Flaky test는 4가지 원인(시간·상태·환경·외부) 중 하나. `,(0,r.jsx)(t.strong,{children:`retry로 가리기 전에 원인 진단`}),`이 핵심. 원인을 알면 해결책이 정해져 있다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/test-or-types-first`,children:`/notes/test-or-types-first`}),` — 테스트 우선순위
`,(0,r.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — 결정론적 검증`]})]})}function mt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(E,{...e})}):E(e)}var ht=e({default:()=>_t,frontmatter:()=>gt}),gt={title:`Frequency capping을 분산 환경에서 — 정확성 vs 비용`,growth:`Seedling`,topics:[`advertising`,`distributed`,`performance`,`backend`],summary:`"사용자에게 같은 광고를 하루 3번까지"는 단일 서버면 쉽다. 수십 대 서버 + 초당 수만 요청이면 정확한 카운팅이 비싸다. 정확성과 비용의 트레이드오프 4단계.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function D(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — 분산 환경의 카운팅`}),`
`,(0,r.jsx)(t.p,{children:`frequency capping = "사용자 A에게 광고 X를 하루 N번까지만 노출". 광고의 기본 기능이다.`}),`
`,(0,r.jsxs)(t.p,{children:[`단일 서버면 간단하다. 메모리에 `,(0,r.jsx)(t.code,{children:`(user, ad) → count`}),` 두고 증가시키면 끝.`]}),`
`,(0,r.jsx)(t.p,{children:`분산 환경에서 어려워진다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`광고 서버 수십 대 (요청이 아무 서버로나 감)`}),`
`,(0,r.jsx)(t.li,{children:`초당 수만~수십만 요청`}),`
`,(0,r.jsx)(t.li,{children:`카운트는 모든 서버가 공유해야 정확`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`서버마다 따로 세면 cap이 N이어도 실제로는 N × 서버 수까지 노출될 수 있다. 공유 카운터가 필요한데, 매 요청마다 중앙 저장소를 읽고 쓰면 그게 병목이 된다.`}),`
`,(0,r.jsx)(t.h2,{children:`정확성 vs 비용 4단계`}),`
`,(0,r.jsxs)(t.p,{children:[`frequency capping은 `,(0,r.jsx)(t.strong,{children:`정확성과 비용의 트레이드오프`}),`다. 광고는 보통 "정확히 N번"이 아니라 "대략 N번"이면 충분해서, 비용을 줄이는 근사가 자주 쓰인다.`]}),`
`,(0,r.jsx)(t.h3,{children:`1단계 — 중앙 Redis (정확, 비쌈)`}),`
`,(0,r.jsxs)(t.p,{children:[`매 노출마다 Redis `,(0,r.jsx)(t.code,{children:`INCR`}),`.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`INCR freq:{user}:{ad}:{date}
EXPIRE freq:{user}:{ad}:{date} 86400
`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`정확함 (모든 서버가 같은 카운터)`}),`
`,(0,r.jsx)(t.li,{children:`비용: 매 요청 Redis 왕복. 초당 수만이면 Redis가 핫스팟.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`소규모거나 정확성이 매출에 직결되면 이 단계.`}),`
`,(0,r.jsx)(t.h3,{children:`2단계 — 로컬 캐시 + 주기 동기화 (근사)`}),`
`,(0,r.jsx)(t.p,{children:`각 서버가 로컬 카운트 + 주기적으로 중앙에 flush.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`비용 ↓ (Redis 왕복이 매 요청 → 주기적)`}),`
`,(0,r.jsx)(t.li,{children:`부정확 ↑ (flush 사이의 윈도우에서 over-delivery)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`cap이 3인데 서버 10대가 각자 로컬로 세다 flush하면 일시적으로 3 초과 가능. "대략 3번"으로 충분하면 OK.`}),`
`,(0,r.jsx)(t.h3,{children:`3단계 — 확률적 카운팅 (대규모 근사)`}),`
`,(0,r.jsxs)(t.p,{children:[`수억 사용자 × 수만 광고면 `,(0,r.jsx)(t.code,{children:`(user, ad)`}),` 카운터 자체가 메모리 폭발.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`HyperLogLog`}),`: 고유 노출 카운트 근사 (오차 ~2%)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Count-Min Sketch`}),`: 빈도 근사, 고정 메모리`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`확률적 capping`}),`: cap 근처에서 확률적으로 drop (정확한 카운트 없이)`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`정확도를 일부 포기하고 메모리를 고정. 대규모 플랫폼의 현실적 선택.`}),`
`,(0,r.jsx)(t.h3,{children:`4단계 — 계층 (hot/cold 분리)`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`hot`}),`: 활성 캠페인은 정확하게 (Redis)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`cold`}),`: 저빈도 캠페인은 근사 (로컬+flush)`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`캠페인 특성에 따라 단계를 섞는다. 모든 캠페인에 같은 정확도를 적용하지 않음.`}),`
`,(0,r.jsx)(t.h2,{children:`시간 윈도우 처리`}),`
`,(0,r.jsx)(t.p,{children:`"하루 3번"의 "하루"도 함정.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`고정 윈도우`}),`: 자정 리셋. 23:59에 3번 + 0:01에 3번 = 2분에 6번 노출 (경계 폭발)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`슬라이딩 윈도우`}),`: 최근 24시간. 정확하지만 비쌈 (타임스탬프 목록 유지)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`슬라이딩 윈도우 근사`}),`: 시간 버킷 + 가중치. 비용/정확성 절충`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`frequency capping에서 고정 윈도우의 경계 폭발은 사용자 경험을 해친다(짧은 시간 도배). 슬라이딩 근사가 보통 적절.`}),`
`,(0,r.jsx)(t.h2,{children:`eventual consistency 받아들이기`}),`
`,(0,r.jsxs)(t.p,{children:[`분산 frequency capping의 핵심 통찰: `,(0,r.jsx)(t.strong,{children:`약간의 over-delivery를 받아들인다`}),`.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`cap 3에 실제 3.2번 평균 노출 → 매출/UX 영향 작음`}),`
`,(0,r.jsx)(t.li,{children:`정확히 3번을 위해 매 요청 강한 일관성 → 비용 폭발`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`"정확히 N번"이 비즈니스 요구인지 "대략 N번"이면 되는지를 먼저 확정. 대부분 후자다. 강한 일관성은 비용이 정당화될 때만.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`단일 서버 코드를 분산에 그대로`}),`: 로컬 카운터는 서버 수만큼 cap 초과. 공유 카운터 필요.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`매 요청 중앙 Redis`}),`: 초당 수만이면 Redis 핫스팟. 로컬 캐시 + flush 고려.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`고정 윈도우 경계 폭발`}),`: 자정 리셋이 경계에서 도배. 슬라이딩 윈도우.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`모든 캠페인 같은 정확도`}),`: hot/cold 분리로 비용 차등.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"정확히 N번" 과잉 요구`}),`: 대부분 "대략"이면 충분. over-delivery 허용 범위를 비즈니스와 합의.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`카운터 TTL 누락`}),`: 날짜별 키가 영원히 남으면 메모리 증가. EXPIRE 필수.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`분산 frequency capping은 `,(0,r.jsx)(t.strong,{children:`정확성과 비용의 트레이드오프`}),`다. "정확히 N번"은 비싸고, 대부분 "대략 N번"이면 충분하다. 약간의 over-delivery를 받아들이면 비용이 비선형으로 줄어든다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/idempotency-keys-billing`,children:`/notes/idempotency-keys-billing`}),` — 분산 카운팅의 중복 제거
`,(0,r.jsx)(t.a,{href:`/notes/ad-metric-traps`,children:`/notes/ad-metric-traps`}),` — 노출 카운트의 정의 문제
`,(0,r.jsx)(t.a,{href:`/notes/postgres-transaction-isolation`,children:`/notes/postgres-transaction-isolation`}),` — 강한 일관성의 비용
`,(0,r.jsx)(t.a,{href:`/essays/two-sided-market-decisions`,children:`/essays/two-sided-market-decisions`}),` — over-delivery가 매체·광고주에 미치는 영향`]})]})}function _t(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(D,{...e})}):D(e)}var vt=e({default:()=>bt,frontmatter:()=>yt}),yt={title:`Fuse.js — 정적 사이트에 클라이언트 사이드 검색을 7KB로`,growth:`Seedling`,topics:[`frontend`,`search`,`fuse`,`performance`],summary:`콘텐츠 100개 이하 정적 사이트에는 별도 검색 서버 필요 없다. Fuse.js를 빌드 시 인덱싱하면 클라이언트에서 퍼지 검색.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-19`};function O(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제`}),`
`,(0,r.jsx)(t.p,{children:`블로그·문서·디지털 가든은 검색이 핵심 인터랙션. 그러나:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Algolia 같은 SaaS는 비용·세팅 부담`}),`
`,(0,r.jsx)(t.li,{children:`자체 검색 서버는 정적 사이트 정신 위반`}),`
`,(0,r.jsxs)(t.li,{children:[`브라우저 `,(0,r.jsx)(t.code,{children:`Ctrl+F`}),`는 페이지 안만 검색`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`해법 — Fuse.js`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`import Fuse from 'fuse.js';

const docs = [...getAllCases(), ...getAllNotes(), ...getAllEssays()];

const index = new Fuse(docs, {
  keys: [
    { name: 'title', weight: 0.6 },
    { name: 'summary', weight: 0.3 },
    { name: 'topics', weight: 0.1 },
  ],
  threshold: 0.4,
  ignoreLocation: true,
});

const results = index.search('dispatch').map(r => r.item);
`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`빌드 시 모든 콘텐츠 frontmatter 인덱싱 (본문은 옵션)`}),`
`,(0,r.jsx)(t.li,{children:`퍼지 매칭 (오타 허용)`}),`
`,(0,r.jsx)(t.li,{children:`가중치 지정 가능 (제목 중요, 토픽 보조)`}),`
`,(0,r.jsx)(t.li,{children:`번들 사이즈 ~7KB gzipped`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`한계`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`콘텐츠 100개 ~ 1000개까지 무난. 그 이상은 FlexSearch 또는 Pagefind 검토.`}),`
`,(0,r.jsx)(t.li,{children:`본문 전체 인덱싱하면 번들 ↑. frontmatter만 권장.`}),`
`,(0,r.jsx)(t.li,{children:`한국어 토큰화 약함. 영어·기호 위주 사이트에 더 적합.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`인터랙션 패턴`}),`
`,(0,r.jsx)(t.p,{children:`Cmd+K 글로벌 검색 모달 + 결과 그룹별 (Cases·Notes·Essays·Logs) + 키보드 네비 (↑↓ Enter Esc) = 거의 모든 정적 사이트의 표준 패턴.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`인덱스를 매 검색마다 재생성하면 lag. `,(0,r.jsx)(t.strong,{children:`모듈 스코프에 cache`}),`.`]}),`
`,(0,r.jsx)(t.li,{children:`HMR에서 stale index 위험. dev에서 페이지 새로고침 권장.`}),`
`,(0,r.jsx)(t.li,{children:`가중치(weight)는 도메인별 다름. 디지털 가든은 title > summary > topics, 코드 문서는 title > content 등.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함의`}),`
`,(0,r.jsx)(t.p,{children:`정적 사이트에 검색을 안 넣는 가장 큰 이유는 보통 "복잡할 것 같아서"이다. Fuse.js는 그 직관을 뒤집는다.`}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/mdx-content-as-files`,children:`/notes/mdx-content-as-files`}),` — 콘텐츠를 파일로 다루면 검색 인덱싱도 빌드 시 자동 처리
`,(0,r.jsx)(t.a,{href:`/notes/vite-manual-chunks`,children:`/notes/vite-manual-chunks`}),` — Fuse 인덱스를 별도 청크로 분리해 첫 로드 비용 줄이기
`,(0,r.jsx)(t.a,{href:`/cases/interactive-layer`,children:`/cases/interactive-layer`}),` — Cmd+K 검색을 포함한 인터랙티브 레이어 케이스`]})]})}function bt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(O,{...e})}):O(e)}var xt=e({default:()=>Ct,frontmatter:()=>St}),St={title:`GitHub Pages에서 SPA 라우팅을 동작시키는 404 트릭`,growth:`Seedling`,topics:[`frontend`,`github-pages`,`routing`,`deployment`],summary:`GitHub Pages는 SSR이 없어 클라이언트 라우팅 새로고침 시 404가 뜬다. public/404.html에 SPA fallback redirect를 두면 해결.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-30`};function k(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제`}),`
`,(0,r.jsxs)(t.p,{children:[`React SPA를 GitHub Pages에 배포 → `,(0,r.jsx)(t.code,{children:`/cases/proof-hub-rebuild`}),` 깊은 링크 새로고침 → `,(0,r.jsx)(t.strong,{children:`404`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`원인: GitHub Pages는 정적 파일 서버라 `,(0,r.jsx)(t.code,{children:`/cases/proof-hub-rebuild`}),` 경로 자체를 모름. SPA 라우팅은 클라이언트에서만 동작하므로 서버가 `,(0,r.jsx)(t.code,{children:`/index.html`}),`을 못 반환.`]}),`
`,(0,r.jsx)(t.h2,{children:`해결 — spa-github-pages 패턴`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`public/404.html`}),`에 redirect 스크립트:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-html`,children:`<script>
  var l = window.location;
  l.replace(
    l.protocol + '//' + l.hostname + l.pathname.split('/').slice(0, 1).join('/') +
    '/?/' + l.pathname.slice(1) + (l.search ? '&' + l.search.slice(1) : '') + l.hash,
  );
<\/script>
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`index.html`}),` `,(0,r.jsx)(t.code,{children:`<head>`}),`에 복원 스크립트:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`(function (l) {
  if (l.search[1] === '/') {
    var decoded = l.search.slice(1).split('&').join('?');
    window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
  }
})(window.location);
`})}),`
`,(0,r.jsx)(t.p,{children:`흐름: 404 → 쿼리로 변환 → SPA mount → history API로 URL 복원.`}),`
`,(0,r.jsx)(t.h2,{children:`이 사이트에서 — 실제 적용 기록`}),`
`,(0,r.jsxs)(t.p,{children:[`이 노트는 일반론이 아니라 `,(0,r.jsx)(t.strong,{children:`이 사이트가 지금 쓰는 패턴`}),`이다. justinjeong5.github.io는 user site(`,(0,r.jsx)(t.code,{children:`*.github.io`}),`)라 `,(0,r.jsx)(t.code,{children:`pathSegmentsToKeep = 0`}),`. `,(0,r.jsx)(t.code,{children:`public/404.html`}),`이 redirect를, `,(0,r.jsx)(t.code,{children:`index.html`}),` `,(0,r.jsx)(t.code,{children:`<head>`}),`가 복원을 담당한다.`]}),`
`,(0,r.jsx)(t.p,{children:`실제로 겪은 두 가지:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`빌드 산출물에 404.html이 들어가야 한다`}),`: Vite `,(0,r.jsx)(t.code,{children:`public/`}),`에 두면 `,(0,r.jsx)(t.code,{children:`dist/404.html`}),`로 복사된다. 처음엔 `,(0,r.jsx)(t.code,{children:`src`}),`에 뒀다가 dist에 안 들어가 deep-link가 계속 404. `,(0,r.jsx)(t.code,{children:`public/`}),`이 정답.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`로컬 dev에선 재현 안 됨`}),`: Vite dev 서버는 SPA fallback을 자동 처리해서 `,(0,r.jsx)(t.code,{children:`/cases/x`}),` 새로고침이 로컬에선 멀쩡하다. `,(0,r.jsx)(t.strong,{children:`GitHub Pages 배포 후에야 404가 드러난다.`}),` 그래서 로컬 통과 = 안전이 아니다 — 배포 후 deep-link 새로고침을 반드시 수동 확인.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`이 트릭 덕분에 `,(0,r.jsx)(t.code,{children:`/cases/*`}),`·`,(0,r.jsx)(t.code,{children:`/notes/*`}),` 깊은 링크를 공유해도 새로고침이 깨지지 않는다.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`pathSegmentsToKeep`}),` — user/org site (`,(0,r.jsx)(t.code,{children:`*.github.io`}),`)는 `,(0,r.jsx)(t.code,{children:`0`}),`, project site는 `,(0,r.jsx)(t.code,{children:`1`})]}),`
`,(0,r.jsx)(t.li,{children:`검색엔진은 404 redirect를 그대로 따라오지 못할 수 있음 (SEO 약함)`}),`
`,(0,r.jsx)(t.li,{children:`메타 OG 태그는 모두 index.html 기본값만 적용 (페이지별 동적 OG 불가)`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`대안`}),`
`,(0,r.jsx)(t.p,{children:`진짜 SEO·동적 OG가 필요하면 Next.js SSG 또는 Astro로 빌드 후 GitHub Pages. 다만 빌드 복잡도 ↑.`}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/mdx-content-as-files`,children:`/notes/mdx-content-as-files`}),` — 콘텐츠를 파일로 두고 라우팅과 분리하면 SPA fallback과도 잘 맞물린다
`,(0,r.jsx)(t.a,{href:`/notes/vite-manual-chunks`,children:`/notes/vite-manual-chunks`}),` — fallback 흐름에 함께 영향 받는 첫 로드 청크 크기 다루기
`,(0,r.jsx)(t.a,{href:`/notes/small-deploy-reread`,children:`/notes/small-deploy-reread`}),` — "로컬 통과 ≠ 배포 안전" — 배포 후 재확인의 같은 교훈
`,(0,r.jsx)(t.a,{href:`/cases/proof-hub-rebuild`,children:`/cases/proof-hub-rebuild`}),` — 이 라우팅이 적용된 사이트 리빌드 케이스`]})]})}function Ct(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}var wt=e({default:()=>Et,frontmatter:()=>Tt}),Tt={title:`GitHub Releases를 personal CDN으로 — 무료·무제한·영구`,growth:`Seedling`,topics:[`github`,`cdn`,`infrastructure`,`side-project`],summary:`HTML 리포트에 비디오·큰 이미지가 들어갈 때 어디에 호스팅하나. GitHub Releases는 파일당 2GB·무제한 트래픽·무료. 도메인 신뢰까지 따라온다.`,plantedAt:`2026-05-08`,lastTendedAt:`2026-05-21`};function A(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — large binary 어디에 둘 것인가`}),`
`,(0,r.jsx)(t.p,{children:`HTML 리포트·블로그·문서를 만들다 보면 정적 이미지로 끝나지 않는 자료가 생긴다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`데모 video (10-50MB)`}),`
`,(0,r.jsx)(t.li,{children:`고해상도 스크린샷 (5-20MB)`}),`
`,(0,r.jsx)(t.li,{children:`큰 PDF·디자인 파일`}),`
`,(0,r.jsx)(t.li,{children:`mp4 캡처본`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`git repo에 직접 넣으면:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`repo size 폭증 → clone 5분`}),`
`,(0,r.jsx)(t.li,{children:`diff 노이즈 (binary)`}),`
`,(0,r.jsx)(t.li,{children:`GitHub 100MB push 제한`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`S3·Cloudflare R2는 좋지만 개인 프로젝트에 신용카드 결제·운영 비용. 무료 호스팅(Imgur 등)은 도메인이 외부·삭제 위험.`}),`
`,(0,r.jsx)(t.h2,{children:`해법 — GitHub Releases`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Releases는 git history와 분리된 binary 저장소`}),`다. 같은 repo의 부속 공간이지만 객체는 별도.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`파일당 `,(0,r.jsx)(t.strong,{children:`최대 2GB`})]}),`
`,(0,r.jsx)(t.li,{children:`트래픽 무제한 (공식 명시)`}),`
`,(0,r.jsx)(t.li,{children:`무료`}),`
`,(0,r.jsx)(t.li,{children:`영구 URL (release 삭제 안 하면)`}),`
`,(0,r.jsxs)(t.li,{children:[`GitHub 도메인 (`,(0,r.jsx)(t.code,{children:`https://github.com/<user>/<repo>/releases/download/<tag>/<file>`}),`)`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`사용 패턴`}),`
`,(0,r.jsx)(t.h3,{children:`업로드`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`gh release create v1 video.mp4 image.png report.pdf \\
  --title "Assets v1" \\
  --notes "Initial upload"
`})}),`
`,(0,r.jsx)(t.h3,{children:`다운로드 URL`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`https://github.com/<user>/<repo>/releases/download/v1/video.mp4
`})}),`
`,(0,r.jsxs)(t.p,{children:[`이 URL을 HTML 리포트의 `,(0,r.jsx)(t.code,{children:`<video src>`}),`나 마크다운 `,(0,r.jsx)(t.code,{children:`![](...)`}),` 에 직접 박는다.`]}),`
`,(0,r.jsx)(t.h3,{children:`추가 업로드`}),`
`,(0,r.jsx)(t.p,{children:`같은 release에 새 asset 추가:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`gh release upload v1 new-screenshot.png
`})}),`
`,(0,r.jsx)(t.p,{children:`또는 새 release를 cut.`}),`
`,(0,r.jsx)(t.h2,{children:`별도 repo 권장`}),`
`,(0,r.jsxs)(t.p,{children:[`asset 전용 repo(예: `,(0,r.jsx)(t.code,{children:`cdn-assets`}),`)를 두면:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`본 repo는 markdown·소스만 → clone 빠름`}),`
`,(0,r.jsx)(t.li,{children:`asset 삭제·교체가 본 repo history 영향 0`}),`
`,(0,r.jsx)(t.li,{children:`private asset이 필요하면 별도 repo만 private`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`release 삭제하면 URL 깨짐`}),`: 한 번 공유한 URL은 영구로 두는 게 안전. 새 버전이면 새 release.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`파일당 2GB 초과`}),`: split해서 multiple file. 또는 더 큰 video는 별도 CDN.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`trafficked로 abuse 의심`}),`: GitHub은 공식적으로 release traffic 무제한이지만, 정말 큰 traffic (millions/day) 보면 ToS 위반 가능. 개인 규모 OK.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`public visibility`}),`: release asset은 repo가 public이면 URL 아는 누구나 접근. 비공개 자료 X.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`CDN edge caching 없음`}),`: latency가 S3 backed CDN보다 살짝 느림. 대규모 user 대상 site엔 부적합.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`binary asset 호스팅에 신용카드 결제 0원. `,(0,r.jsx)(t.strong,{children:`GitHub Releases는 personal CDN의 사실상 표준`}),`이다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/report-asset-split-repo`,children:`/notes/report-asset-split-repo`}),` — asset 전용 repo로 본 repo 가볍게 유지
`,(0,r.jsx)(t.a,{href:`/notes/personal-infra-stack`,children:`/notes/personal-infra-stack`}),` — Releases CDN을 포함한 개인 인프라 종합
`,(0,r.jsx)(t.a,{href:`/notes/notion-lightweight-backend`,children:`/notes/notion-lightweight-backend`}),` — 같은 철학의 무료 backend`]})]})}function Et(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(A,{...e})}):A(e)}var Dt=e({default:()=>kt,frontmatter:()=>Ot}),Ot={title:`좋은 알람의 4가지 기준 — 노이즈와 신호의 분리`,growth:`Evergreen`,topics:[`monitoring`,`observability`,`incident`,`datadog`],summary:`알람이 많은 시스템은 알람이 없는 시스템과 같다. 좋은 알람은 사람이 지금 행동해야 할 때만 울린다. 4가지 기준으로 노이즈를 걷어내는 법.`,plantedAt:`2026-04-10`,lastTendedAt:`2026-05-30`};function j(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`알람이 많으면 알람이 없는 것과 같다`}),`
`,(0,r.jsx)(t.p,{children:`"매일 50개 알람 뜨는데 다 무시함." 흔한 현실이다. 알람 50개 중 진짜 행동이 필요한 건 1-2개. 나머지 48개는 노이즈인데, 노이즈가 신호를 가린다.`}),`
`,(0,r.jsxs)(t.p,{children:[`좋은 알람의 정의는 "`,(0,r.jsx)(t.strong,{children:`사람이 지금 무언가를 해야 할 때만 울리는 알람`}),`"이다. 4가지 기준으로 거르면 노이즈가 줄어든다.`]}),`
`,(0,r.jsx)(t.h2,{children:`기준 1 — 사람이 지금 해야 할 일이 있는가`}),`
`,(0,r.jsx)(t.p,{children:`알람을 받았을 때 첫 질문: "지금 내가 뭘 해야 하지?"`}),`
`,(0,r.jsxs)(t.p,{children:[`답이 명확하지 않으면 알람이 아니라 `,(0,r.jsx)(t.strong,{children:`메트릭 대시보드`}),`의 일이다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`✅ "결제 실패율 5% 초과 → 결제 모듈 rollback 검토"`}),`
`,(0,r.jsx)(t.li,{children:`❌ "CPU 80% 도달 → ??? 일단 확인?" — 행동이 모호하면 알람 아님`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`CPU·메모리 같은 시스템 지표는 보통 알람이 아니라 대시보드. `,(0,r.jsx)(t.strong,{children:`사용자가 영향받을 때`}),`가 알람의 트리거.`]}),`
`,(0,r.jsx)(t.h2,{children:`기준 2 — 임계는 SLO 기반`}),`
`,(0,r.jsx)(t.p,{children:`"5초 응답 시간"은 임의 숫자다. "사용자가 5초를 기다리면 이탈한다"는 SLO의 근거다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`❌ 메트릭 임계 (CPU 80%, 응답 시간 1초)`}),`
`,(0,r.jsx)(t.li,{children:`✅ SLO 기반 임계 (가용성 99.9% 5분 측정창에서 위반)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`SLO는 사용자 약속. 알람은 그 약속이 깨질 조짐일 때만.`}),`
`,(0,r.jsx)(t.h2,{children:`기준 3 — 알람마다 runbook 링크`}),`
`,(0,r.jsx)(t.p,{children:`알람 페이로드에 "이 알람이 떴을 때 무엇을 확인하고 무엇을 할 것인지" 링크가 있어야 한다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`[ALERT] payment-error-rate > 5%
runbook: https://wiki/runbook/payment-error
1. Datadog dashboard: payment-overview
2. Recent deploys: ...
3. If 5xx from gateway, rollback to ...
`})}),`
`,(0,r.jsx)(t.p,{children:`runbook 없는 알람은 새벽에 받았을 때 사람이 처음부터 추리해야 한다. 가장 큰 비용.`}),`
`,(0,r.jsx)(t.h2,{children:`기준 4 — 알람 후 회고로 임계·룰 정리`}),`
`,(0,r.jsx)(t.p,{children:`알람이 한 번 울리면 다음 두 가지 중 하나:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`진짜였다`}),` → runbook 따라 처리 + runbook 업데이트`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`거짓이었다`}),` → 임계·룰 즉시 조정 (이 회고 안 하면 노이즈 누적)`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`특히 false positive 한 번이 다음 100번 무시 행동을 만든다. 알람 신뢰는 매번 거짓일 때마다 비선형으로 떨어진다.`}),`
`,(0,r.jsx)(t.h2,{children:`severity 계층 — 모든 알람이 새벽을 부르지 않는다`}),`
`,(0,r.jsx)(t.p,{children:`4기준을 통과한 알람도 전부 page(새벽 호출)일 필요는 없다. severity로 계층화한다.`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`severity`}),(0,r.jsx)(t.th,{children:`전달`}),(0,r.jsx)(t.th,{children:`예시`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`P1 (page)`}),(0,r.jsx)(t.td,{children:`즉시 호출 (전화·PagerDuty)`}),(0,r.jsx)(t.td,{children:`결제 전면 실패, 데이터 유실 위험`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`P2 (notify)`}),(0,r.jsx)(t.td,{children:`Slack 알림 (업무 시간)`}),(0,r.jsx)(t.td,{children:`에러율 상승, 부분 기능 저하`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`P3 (ticket)`}),(0,r.jsx)(t.td,{children:`티켓 생성 (다음 스프린트)`}),(0,r.jsx)(t.td,{children:`비핵심 배치 지연`})]})]})]}),`
`,(0,r.jsx)(t.p,{children:`P1만 새벽을 부른다. P1을 남발하면 alert fatigue로 진짜 P1을 놓친다. "이게 새벽 3시에 사람을 깨울 가치가 있나?"가 P1 기준.`}),`
`,(0,r.jsx)(t.h2,{children:`false positive의 비선형 비용`}),`
`,(0,r.jsx)(t.p,{children:`기준 4(회고)가 중요한 이유는 정량으로 설명된다. false positive 1건은 단순히 1번의 헛수고가 아니다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`1번째 거짓 알람: "어, 괜찮네" (신뢰 약간 ↓)`}),`
`,(0,r.jsx)(t.li,{children:`3번째: "또 그거겠지" (확인 안 함)`}),`
`,(0,r.jsx)(t.li,{children:`5번째 이후: 알람 자체를 무시 (신뢰 0)`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`그리고 신뢰가 0이 된 후 오는 `,(0,r.jsx)(t.strong,{children:`진짜 P1을 놓친다`}),`. false positive의 진짜 비용은 헛수고가 아니라 미래의 진짜 알람을 가린다는 것. 그래서 거짓 1건마다 즉시 임계 조정이 회고의 핵심.`]}),`
`,(0,r.jsx)(t.h2,{children:`노이즈 정리의 부산물`}),`
`,(0,r.jsx)(t.p,{children:`좋은 알람 4기준을 적용하면 자연스럽게:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`알람 수가 절반 이하로 줄어든다`}),`
`,(0,r.jsxs)(t.li,{children:[`남은 알람은 `,(0,r.jsx)(t.strong,{children:`무시하지 못한다`})]}),`
`,(0,r.jsx)(t.li,{children:`새벽 incident 대응 비용이 줄어든다 (runbook 따라 처리)`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"모든 메트릭을 알람으로"`}),` — 안티패턴. 메트릭 ≠ 알람`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`임계를 보수적으로 설정해서 알람 늘리기`}),` — false positive 비용 무시`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`runbook 없이 "확인해야 함"으로 끝`}),` — 새벽 본인의 비용`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`알람 무시 누적`}),` — 신뢰 0이 되는 임계점이 있다`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`알람은 사람의 시간을 부르는 신호다. 그 시간만큼의 가치가 있어야 한다.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/incident-temp-vs-root`,children:`/notes/incident-temp-vs-root`}),` — 알람 후 새벽 대응의 두 단계
`,(0,r.jsx)(t.a,{href:`/notes/incident-monitoring-gap`,children:`/notes/incident-monitoring-gap`}),` — 회고가 다음 알람 룰셋이 되는 사이클
`,(0,r.jsx)(t.a,{href:`/notes/dev-warning-noise-cost`,children:`/notes/dev-warning-noise-cost`}),` — 같은 신호/노이즈 분리가 dev 로그에도
`,(0,r.jsx)(t.a,{href:`/notes/runbook-write-during-incident`,children:`/notes/runbook-write-during-incident`}),` — 알람마다 runbook 링크`]})]})}function kt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}var At=e({default:()=>Mt,frontmatter:()=>jt}),jt={title:`graceful shutdown — SIGTERM 받고 5초 안에 죽기`,growth:`Seedling`,topics:[`backend`,`operations`,`deploy`,`reliability`],summary:`배포 시 컨테이너가 죽을 때, in-flight 요청 끊기·DB connection 닫기·queue 정리를 해야 한다. SIGTERM → SIGKILL의 짧은 창에 다 해야 함.`,plantedAt:`2026-05-09`,lastTendedAt:`2026-05-20`};function M(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — 배포가 사용자에게 5xx를 던지는 이유`}),`
`,(0,r.jsx)(t.p,{children:`Kubernetes 배포에서 새 pod이 ready되면 옛 pod에 SIGTERM. 옛 pod이 즉시 종료되면:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`처리 중인 HTTP 요청 → 500 (사용자 에러)`}),`
`,(0,r.jsx)(t.li,{children:`쓰던 DB transaction → rollback (반쯤 적용된 데이터)`}),`
`,(0,r.jsx)(t.li,{children:`보내던 message queue → 미전송 (이벤트 손실)`}),`
`,(0,r.jsx)(t.li,{children:`log buffer → flush 안 됨 (디버깅 단서 손실)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`배포 5번에 한 번씩 사용자가 에러를 본다면, 그건 배포의 문제다.`}),`
`,(0,r.jsx)(t.h2,{children:`흐름 — SIGTERM부터 SIGKILL까지`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`0s    SIGTERM 수신
0-Ns  정상 shutdown 작업
Ns    SIGKILL (강제 종료)
`})}),`
`,(0,r.jsxs)(t.p,{children:[`기본 N은 30초(Kubernetes `,(0,r.jsx)(t.code,{children:`terminationGracePeriodSeconds`}),` 기본값). 다만 cloud provider나 hosting platform에 따라 더 짧을 수 있다 (5-10초). 그 안에 다 해야 한다.`]}),`
`,(0,r.jsx)(t.h2,{children:`해야 할 일 (순서)`}),`
`,(0,r.jsx)(t.h3,{children:`1. health check 즉시 fail`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`let isShuttingDown = false;
process.on('SIGTERM', () => {
  isShuttingDown = true;
  // /readyz endpoint가 503 반환
});
`})}),`
`,(0,r.jsxs)(t.p,{children:[`이러면 load balancer가 이 pod에 새 요청을 안 보낸다. `,(0,r.jsx)(t.strong,{children:`신규 트래픽 차단`}),`.`]}),`
`,(0,r.jsx)(t.h3,{children:`2. in-flight 요청 완료 대기`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`server.close(() => {
  // 모든 in-flight 요청 끝나면 callback
});
`})}),`
`,(0,r.jsx)(t.p,{children:`타임아웃 두기: 5-10초 안에 안 끝나면 강제. 너무 길게 두면 SIGKILL 받음.`}),`
`,(0,r.jsx)(t.h3,{children:`3. 외부 리소스 정리`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`DB connection pool drain`}),`
`,(0,r.jsx)(t.li,{children:`queue/cache connection 정리`}),`
`,(0,r.jsx)(t.li,{children:`진행 중인 background job은 어떻게 할지 결정 (다른 worker로 양도? 다음에 재시도?)`}),`
`]}),`
`,(0,r.jsx)(t.h3,{children:`4. log flush`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`await logger.flush();
`})}),`
`,(0,r.jsx)(t.p,{children:`stdout buffer가 안 비워지면 마지막 에러 못 봄.`}),`
`,(0,r.jsx)(t.h2,{children:`패턴 — liveness vs readiness 분리`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`/healthz`}),` (liveness)와 `,(0,r.jsx)(t.code,{children:`/readyz`}),` (readiness)를 분리한다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`liveness`}),`: 프로세스 살아있는지 — shutdown 시작해도 잠깐은 살아있어야 (in-flight 처리)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`readiness`}),`: 새 요청 받을 준비 — shutdown 시작 즉시 false`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`분리 안 하면 shutdown 시작과 동시에 liveness fail → Kubernetes가 즉시 죽임 → in-flight 요청 잃음.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`graceful shutdown 안 구현`}),`: 기본 동작은 즉시 종료. 명시적 구현 필요.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`terminationGracePeriod이 너무 짧음`}),`: 5초로 두면 in-flight 처리 못 끝남. 30초가 일반.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`DB connection 닫기 안 함`}),`: connection leak이 누적. pool이 일찍 고갈.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`테스트 안 함`}),`: SIGTERM 보내고 in-flight 요청이 200으로 끝나는지 검증해야. 보통 staging에서 `,(0,r.jsx)(t.code,{children:`kill -TERM`}),` 수동.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`shutdown 중에도 metric 보내려고 함`}),`: log/metric 외부 전송 자체가 SIGTERM 후 멈춤. flush가 먼저.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`배포가 사용자에게 안 보여야 좋은 배포다. `,(0,r.jsx)(t.strong,{children:`SIGTERM부터 SIGKILL까지의 5-30초를 어떻게 쓰느냐`}),`가 그 차이를 만든다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/incident-temp-vs-root`,children:`/notes/incident-temp-vs-root`}),` — 배포 장애의 임시 패치 vs 근본 수정
`,(0,r.jsx)(t.a,{href:`/notes/runbook-write-during-incident`,children:`/notes/runbook-write-during-incident`}),` — graceful shutdown 실패도 runbook 대상
`,(0,r.jsx)(t.a,{href:`/cases/j-chat-first-production`,children:`/cases/j-chat-first-production`}),` — graceful shutdown을 처음 만난 첫 production 회고
`,(0,r.jsx)(t.a,{href:`/logs#2026-06-09-fault-isolation-atomic-writes`,children:`/logs#2026-06-09-fault-isolation-atomic-writes`}),` — shutdown 중 진행 작업을 원자적 쓰기(임시파일+rename)로 안전 종료`]})]})}function Mt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(M,{...e})}):M(e)}var Nt=e({default:()=>Ft,frontmatter:()=>Pt}),Pt={title:`멱등성 키 — 중복 과금·이벤트를 막는 설계`,growth:`Seedling`,topics:[`backend`,`distributed`,`billing`,`advertising`],summary:`네트워크는 재시도하고 재시도는 중복을 만든다. 정산·결제·광고 이벤트에서 중복은 돈 문제다. 멱등성 키의 설계 — 키 생성·저장·윈도우·응답 재현.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function N(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`왜 중복이 생기나`}),`
`,(0,r.jsx)(t.p,{children:`분산 시스템에서 "정확히 한 번"은 어렵다. 클라이언트가 요청을 보내고 응답을 못 받으면(timeout) 재시도한다. 그런데 서버는 첫 요청을 이미 처리했을 수 있다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`클라이언트 → POST /charge (amount=100)
서버: 과금 처리 완료
서버 → 응답 (네트워크 손실)
클라이언트: 응답 못 받음 → 재시도
클라이언트 → POST /charge (amount=100)  ← 중복 과금!
`})}),`
`,(0,r.jsx)(t.p,{children:`결제·정산·광고 이벤트 집계에서 이 중복은 곧 돈이다. 멱등성 키가 해결한다.`}),`
`,(0,r.jsx)(t.h2,{children:`멱등성 키의 핵심`}),`
`,(0,r.jsx)(t.p,{children:`클라이언트가 요청마다 고유 키를 생성해서 보낸다. 서버는 같은 키의 요청을 한 번만 처리한다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`POST /charge
Idempotency-Key: 7f3a9c2e-...
{ amount: 100 }
`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-python`,children:`def charge(idempotency_key, amount):
    existing = store.get(idempotency_key)
    if existing:
        return existing.response  # 재처리 없이 저장된 응답 재현
    result = do_charge(amount)
    store.set(idempotency_key, result, ttl=24h)
    return result
`})}),`
`,(0,r.jsx)(t.p,{children:`재시도가 와도 같은 키면 저장된 응답을 돌려준다. 과금은 한 번만.`}),`
`,(0,r.jsx)(t.h2,{children:`설계 결정 4가지`}),`
`,(0,r.jsx)(t.h3,{children:`1. 키를 누가 생성하나`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`클라이언트가 생성`}),`한다. 서버가 생성하면 재시도 시 새 키가 되어 의미 없다. 클라이언트가 "이 작업"에 대한 키를 한 번 만들고 재시도 시 같은 키 재사용.`]}),`
`,(0,r.jsxs)(t.p,{children:[`UUID v4 또는 `,(0,r.jsx)(t.code,{children:`(operation, business_id, timestamp_bucket)`}),` 해시.`]}),`
`,(0,r.jsx)(t.h3,{children:`2. 무엇을 저장하나`}),`
`,(0,r.jsxs)(t.p,{children:[`키만 저장하면 부족하다. `,(0,r.jsx)(t.strong,{children:`요청 응답까지`}),` 저장해서 재시도 시 같은 응답을 재현.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`key → { status: completed, response: {...}, request_hash: ... }
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`request_hash`}),`도 저장하는 이유: 같은 키로 `,(0,r.jsx)(t.strong,{children:`다른 body`}),`가 오면 에러를 던지기 위함. 같은 키 + 다른 amount는 클라이언트 버그 신호.`]}),`
`,(0,r.jsx)(t.h3,{children:`3. 윈도우(TTL)`}),`
`,(0,r.jsx)(t.p,{children:`멱등성 키를 영원히 저장하면 스토리지 무한 증가. TTL을 둔다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`결제: 24시간~7일 (재시도가 그 안에 끝남)`}),`
`,(0,r.jsx)(t.li,{children:`광고 이벤트: 시간~일 단위 (이벤트 dedup 윈도우와 일치)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`TTL이 너무 짧으면 늦은 재시도가 중복을 만들고, 너무 길면 스토리지 부담. 재시도 정책의 최대 윈도우보다 약간 길게.`}),`
`,(0,r.jsx)(t.h3,{children:`4. 동시 요청 처리`}),`
`,(0,r.jsxs)(t.p,{children:[`같은 키의 두 요청이 `,(0,r.jsx)(t.strong,{children:`동시에`}),` 오면? (재시도가 첫 요청과 겹침)`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-python`,children:`# race condition
existing = store.get(key)  # 둘 다 None
# 둘 다 처리 → 중복
`})}),`
`,(0,r.jsxs)(t.p,{children:[`→ 원자적 연산 필요. Redis `,(0,r.jsx)(t.code,{children:`SET key value NX`}),`(없을 때만 set) 또는 DB unique constraint + insert. 첫 요청이 키를 선점하고, 둘째는 "처리 중" 또는 선점 실패를 받음.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-python`,children:`acquired = redis.set(key, "processing", nx=True, ex=ttl)
if not acquired:
    # 이미 처리 중이거나 완료 → 대기 후 결과 조회 또는 409
    return wait_or_conflict(key)
`})}),`
`,(0,r.jsx)(t.h2,{children:`광고 이벤트에 적용`}),`
`,(0,r.jsx)(t.p,{children:`광고 클릭/전환 집계도 같은 패턴.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`클라이언트가 이벤트마다 event_id 생성`}),`
`,(0,r.jsx)(t.li,{children:`서버가 event_id로 dedup (시간 버킷 윈도우)`}),`
`,(0,r.jsx)(t.li,{children:`같은 event_id 재전송은 무시`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`차이: 결제는 강한 일관성(즉시 dedup)이 필요하고, 광고 집계는 보통 `,(0,r.jsx)(t.strong,{children:`eventual dedup`}),`(배치에서 중복 제거)도 허용된다. 정산 직전에 최종 dedup.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`서버가 키 생성`}),`: 재시도 시 새 키 → 멱등성 무의미. 클라이언트 생성.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`응답 저장 안 함`}),`: 키만 저장하면 재시도 시 "이미 처리됨"만 알고 원래 응답을 못 돌려줌. 응답까지 저장.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`같은 키 다른 body 허용`}),`: request_hash 검증 없으면 클라이언트 버그가 조용히 통과.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`동시 요청 race`}),`: get-then-set은 race. 원자적 SET NX 또는 unique constraint.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`TTL 없음`}),`: 멱등성 스토리지 무한 증가. 재시도 윈도우 기준 TTL.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`멱등성 ≠ exactly-once`}),`: 멱등성은 중복을 흡수할 뿐 메시지 손실은 못 막는다. at-least-once 전달 + 멱등성 = effectively-once.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`네트워크 재시도는 중복을 만들고, 돈이 걸린 작업에서 중복은 사고다. `,(0,r.jsx)(t.strong,{children:`클라이언트 생성 키 + 응답 저장 + 원자적 선점 + TTL`}),`이 멱등성의 네 기둥. 멱등성 + at-least-once 전달이 실질적 exactly-once다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/exactly-once-delivery-myth`,children:`/notes/exactly-once-delivery-myth`}),` — exactly-once가 환상인 이유와 멱등성의 역할
`,(0,r.jsx)(t.a,{href:`/notes/ad-metric-traps`,children:`/notes/ad-metric-traps`}),` — 정산 dedup에 멱등성 키 적용
`,(0,r.jsx)(t.a,{href:`/notes/postgres-transaction-isolation`,children:`/notes/postgres-transaction-isolation`}),` — 동시 요청의 격리 수준
`,(0,r.jsx)(t.a,{href:`/notes/n-plus-one-query-trap`,children:`/notes/n-plus-one-query-trap`}),` — ORM이 숨기는 또 다른 백엔드 함정`]})]})}function Ft(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(N,{...e})}):N(e)}var It=e({default:()=>Rt,frontmatter:()=>Lt}),Lt={title:`AI 페어와 야간 incident 디버깅 — 새벽에 혼자가 아닌 워크플로우`,growth:`Seedling`,topics:[`incident`,`ai`,`debugging`,`workflow`],summary:`새벽 장애 대응의 진짜 비용은 디버깅 시간이 아니라 외로움과 결정 부담이다. AI 페어는 문법적 코드보다 의사결정 cross-check에서 가치가 크다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-29`};function P(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`새벽 디버깅의 진짜 비용`}),`
`,(0,r.jsxs)(t.p,{children:[`새벽에 혼자 장애 디버깅하는 게 어려운 진짜 이유는 코드를 못 읽어서가 아니다. `,(0,r.jsx)(t.strong,{children:`결정을 혼자 내려야 해서`}),`다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"이거 rollback해도 되나, 다른 영향은?"`}),`
`,(0,r.jsx)(t.li,{children:`"임시 패치가 충분한가, root fix까지 가야 하나?"`}),`
`,(0,r.jsx)(t.li,{children:`"팀에 알릴까 그냥 처리할까?"`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`한 사람의 판단 정확도가 새벽엔 70% 정도다. 졸리고, 압박감 있고, 시야가 좁다. 이런 상태에서 결정 5개를 연속으로 내리면 한두 개 잘못 가는 게 정상이다.`}),`
`,(0,r.jsx)(t.h2,{children:`AI 페어가 잡는 영역`}),`
`,(0,r.jsxs)(t.p,{children:[`AI 페어 (Codex / Claude)가 가장 가치 있는 시점은 코드 작성이 아니라 `,(0,r.jsx)(t.strong,{children:`결정 cross-check`}),`다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"rollback 영향 범위는?" → Codex가 변경된 파일·호출자 grep으로 답`}),`
`,(0,r.jsx)(t.li,{children:`"이 패치가 다른 케이스에 영향?" → 같은 함수 사용처 자동 스캔`}),`
`,(0,r.jsx)(t.li,{children:`"root fix까지 가는 비용은?" → 변경 분량 예상`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`문법적 코드를 빨리 작성하는 것보다 `,(0,r.jsx)(t.strong,{children:`혼자였으면 안 했을 검증을 같이 하는 게`}),` 핵심.`]}),`
`,(0,r.jsx)(t.h2,{children:`야간 워크플로우 (실용)`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`알람 수신`}),` → Codex 세션 시작 (사고를 외화하기 시작)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`영향 범위 파악`}),`: "지금 깨지는 거 정리해줘" → Codex가 로그·메트릭 요약`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`임시 패치 옵션 비교`}),`: rollback / flag off / 패치 — 각각 영향 cross-check`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`결정`}),` → 가장 작은 변경 적용`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`검증`}),`: Codex가 변경의 side effect 자동 grep`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`임시 패치 PR 본문`}),`: Codex가 timeline·결정 근거를 자동 정리`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`다음 날 본인에게 인계`}),`: 누락 가설·검증 못 한 것`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`각 단계의 결정은 사람이. 검증·정리는 AI.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`AI 답을 그대로 적용`}),`: 새벽 본인이 졸려서 검증 못 함. AI의 첫 답은 정답이 아니라 후보. 반드시 다시 읽기.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"AI에게 디버그해줘"`}),`: 문제 정의 안 한 상태로 던지면 AI도 헛다리. 직접 영향 범위 정의 후 위임.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`AI 사고를 본인 사고로 착각`}),`: 새벽엔 AI가 "rollback 안전"이라 하면 그대로 믿기 쉽다. AI는 시야 다른 페어이지 결정자가 아니다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`외화(externalization)가 진짜 메커니즘`}),`
`,(0,r.jsxs)(t.p,{children:[`AI 페어의 가치를 한 단어로 줄이면 `,(0,r.jsx)(t.strong,{children:`외화`}),`다. 머릿속 사고를 밖으로 꺼내는 것.`]}),`
`,(0,r.jsx)(t.p,{children:`새벽에 혼자면 가설이 머릿속에서만 돈다. 검증 안 된 가설이 "확신"으로 굳는다. AI에게 "지금 상황이 이렇고 X 때문인 것 같다"고 적는 순간, 그 가설이 문장이 되고 검증 대상이 된다. rubber duck debugging과 같은 원리인데, 오리와 달리 AI는 반례를 던진다.`}),`
`,(0,r.jsxs)(t.p,{children:[`그래서 AI가 틀린 답을 줘도 가치가 있다. 틀린 답을 보면 "아니 그게 아니라…"라고 본인 사고가 더 선명해진다. AI는 정답 제공자가 아니라 `,(0,r.jsx)(t.strong,{children:`사고를 외화시키는 벽`}),`이다.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`AI 답을 그대로 적용`}),`: 새벽 본인이 졸려서 검증 못 함. AI의 첫 답은 정답이 아니라 후보. 반드시 다시 읽기.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"AI에게 디버그해줘"`}),`: 문제 정의 안 한 상태로 던지면 AI도 헛다리. 직접 영향 범위 정의 후 위임.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`AI 사고를 본인 사고로 착각`}),`: 새벽엔 AI가 "rollback 안전"이라 하면 그대로 믿기 쉽다. AI는 시야 다른 페어이지 결정자가 아니다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`AI에게 권한 있는 명령 위임`}),`: 새벽에 AI가 제안한 명령을 검증 없이 실행하면 사고가 사고를 부른다. 읽기·분석은 위임, 쓰기·배포는 본인 손으로.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`다음 날 회고`}),`
`,(0,r.jsx)(t.p,{children:`새벽 작업이 끝나면 timeline + 결정 근거를 자기 사이트에 일반화된 글로 남긴다. 같은 종류 장애가 또 와도 다음 번엔 더 빠르고 외롭지 않다.`}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`새벽 디버깅은 코드가 아니라 결정의 외로움이다. AI 페어는 결정 cross-check에서 가장 가치 있다.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/incident-temp-vs-root`,children:`/notes/incident-temp-vs-root`}),` — 새벽 결정의 두 단계 분리
`,(0,r.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 두 모델 cross-check의 일반화
`,(0,r.jsx)(t.a,{href:`/notes/runbook-write-during-incident`,children:`/notes/runbook-write-during-incident`}),` — 외화한 사고를 runbook으로 보존
`,(0,r.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — AI 검증을 결정론 루프로`]})]})}function Rt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(P,{...e})}):P(e)}var zt=e({default:()=>Vt,frontmatter:()=>Bt}),Bt={title:`incident가 모니터링 갭을 노출한다 — 장애 회고가 다음 알람 룰셋이 되는 사이클`,growth:`Seedling`,topics:[`monitoring`,`incident`,`observability`,`datadog`,`postmortem`],summary:`장애 후 가장 가치 있는 질문은 "이건 왜 알람이 안 떴지?"다. 누락된 메트릭이 진짜 priority 1 모니터링 이슈. 회고가 다음 알람 룰셋이 된다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-29`};function F(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`장애 후 첫 회고 질문`}),`
`,(0,r.jsx)(t.p,{children:`장애가 끝나면 보통 "원인이 뭐였나"부터 본다. 그것도 중요하지만 가장 가치 있는 질문은 따로 있다.`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:`"이건 왜 알람이 안 떴지?"`})}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`알람이 떴는데 못 본 거면 알람 우선순위·전달 채널 문제.
알람 자체가 없었다면 `,(0,r.jsx)(t.strong,{children:`모니터링 갭`}),`이다. 그게 진짜 priority 1.`]}),`
`,(0,r.jsx)(t.h2,{children:`모니터링 갭의 두 종류`}),`
`,(0,r.jsx)(t.h3,{children:`1. 측정 안 됨 (metric missing)`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`사용자 영향이 있는데 그 영향을 잡는 메트릭이 없음`}),`
`,(0,r.jsx)(t.li,{children:`예: "결제 화면 흰 페이지" → 5xx도 아니고 latency도 아닌 클라이언트 렌더링 실패`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`→ Datadog RUM·Sentry 같은 클라이언트 측 메트릭 추가`}),`
`,(0,r.jsx)(t.h3,{children:`2. 측정 되지만 알람 안 됨 (alert missing)`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`메트릭은 대시보드에 있는데 알람 룰이 없음`}),`
`,(0,r.jsx)(t.li,{children:`사람이 매일 대시보드를 안 본다는 사실 망각`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`→ 대시보드 메트릭 중 SLO 침해 가능한 건 모두 알람 룰 등록`}),`
`,(0,r.jsx)(t.h2,{children:`incident → 알람 룰 사이클`}),`
`,(0,r.jsx)(t.p,{children:`장애 회고의 마지막 항목은 항상 같다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`1. 무엇이 깨졌나
2. 사용자 영향 범위
3. 임시 패치 / 근본 수정
4. 같은 일이 또 일어나면 알람으로 잡히는가?
   ↑↑↑ 이게 가장 중요한 항목
`})}),`
`,(0,r.jsx)(t.p,{children:`답이 "예"가 아니면 알람 룰을 회고와 동시에 추가한다. 미루면 안 한다.`}),`
`,(0,r.jsx)(t.h2,{children:`모니터링 최적화 순환`}),`
`,(0,r.jsx)(t.p,{children:`장애를 두 번 같은 형태로 안 겪으려면:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`incident 발생
  ↓
회고에서 모니터링 갭 식별
  ↓
알람 룰 추가 (메트릭 부재면 instrument 먼저)
  ↓
다음 같은 incident → 알람 즉시 → 영향 ↓
  ↓
이번엔 다른 incident에서 또 갭 발견
  ↓
또 추가 → 점진 ↑
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`모니터링은 한 번에 완성되지 않는다.`}),` incident가 갭을 자연 노출하는 사이클이 모니터링을 자라게 한다.`]}),`
`,(0,r.jsx)(t.h2,{children:`알람 룰셋 보강 vs 노이즈 위험`}),`
`,(0,r.jsxs)(t.p,{children:[`알람을 추가할 때 `,(0,r.jsx)(t.a,{href:`/notes/good-alert-four-criteria`,children:`좋은 알람의 4가지 기준`}),` 적용:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`사람이 행동할 일이 있나`}),`
`,(0,r.jsx)(t.li,{children:`SLO 기반 임계`}),`
`,(0,r.jsx)(t.li,{children:`runbook 링크`}),`
`,(0,r.jsx)(t.li,{children:`회고 가능한 정량`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`이 4가지 통과 못 하면 알람 추가하지 말고 대시보드에만.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"한 번 일어났으니 추가"`}),`: 빈도 낮은 케이스는 알람 X, runbook만`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`회고를 며칠 미룸`}),`: 기억 휘발. 가능한 incident 24h 안에 회고 시작`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`갭만 메우고 false positive 무시`}),`: 새 알람이 노이즈 늘리면 trade-off`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"이미 있어야 했는데"라는 자책`}),`: 모니터링은 자라는 것이지 완성되는 게 아님`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`광고 플랫폼의 모니터링 갭 예시`}),`
`,(0,r.jsx)(t.p,{children:`모니터링 갭은 도메인마다 다르게 나타난다. 광고 플랫폼이라면:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`정산 불일치`}),`: 집계 파이프라인 일부가 조용히 이벤트를 drop → 매출 누락. 5xx도 latency도 아니라 `,(0,r.jsx)(t.strong,{children:`숫자가 줄어든 것`}),`이 유일한 신호. 비즈니스 메트릭(시간당 매출) 알람이 없으면 며칠 후 정산에서야 발견.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`frequency cap 누수`}),`: 분산 카운터 동기화 실패로 over-delivery. 시스템은 정상인데 사용자 경험·매체 신뢰가 깨짐.`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`기술 메트릭(CPU·5xx)만 보면 이런 비즈니스 레이어 갭이 안 보인다. `,(0,r.jsx)(t.strong,{children:`비즈니스 메트릭도 모니터링 대상`}),`이라는 게 광고처럼 숫자가 돈인 도메인의 교훈.`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`좋은 모니터링은 만드는 게 아니라 incident와 함께 자란다.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/good-alert-four-criteria`,children:`/notes/good-alert-four-criteria`}),` — 추가할 알람의 4가지 기준
`,(0,r.jsx)(t.a,{href:`/notes/incident-temp-vs-root`,children:`/notes/incident-temp-vs-root`}),` — 회고에서 갭 식별
`,(0,r.jsx)(t.a,{href:`/notes/incident-ai-pair-debugging`,children:`/notes/incident-ai-pair-debugging`}),` — 새벽 대응에서 갭 발견
`,(0,r.jsx)(t.a,{href:`/notes/ad-metric-traps`,children:`/notes/ad-metric-traps`}),` — 비즈니스 메트릭 모니터링의 함정
`,(0,r.jsx)(t.a,{href:`/notes/n-plus-one-query-trap`,children:`/notes/n-plus-one-query-trap`}),` — production에서만 드러나는 성능 갭
`,(0,r.jsx)(t.a,{href:`/essays/systems-thinking-from-incidents`,children:`/essays/systems-thinking-from-incidents`}),` — 장애에서 시스템 사고로 일반화한 에세이`]})]})}function Vt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(F,{...e})}):F(e)}var Ht=e({default:()=>Wt,frontmatter:()=>Ut}),Ut={title:`야간 장애의 두 단계 — 임시 패치 vs 근본 수정`,growth:`Seedling`,topics:[`incident`,`debugging`,`swe`,`decision-making`],summary:`새벽에 장애 알람을 받으면 "지금 멈춰야 한다 vs 제대로 고쳐야 한다"가 충돌한다. 두 단계로 분리하면 의사결정이 빨라진다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-29`};function I(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`두 가지 시간 척도`}),`
`,(0,r.jsx)(t.p,{children:`장애 대응에는 두 가지 시간이 있다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Stop the bleeding`}),` (분~30분): 사용자 영향을 멈춘다. 정확하지 않아도 됨.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Fix the cause`}),` (시간~며칠): 다시 안 일어나게. 정확함이 가장 중요.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`새벽에 알람을 받으면 두 시간이 머릿속에서 섞인다. "지금 어떻게 멈추지" + "근본 원인이 뭐지"를 동시에 풀려고 한다. 그러면 둘 다 늦어진다.`}),`
`,(0,r.jsx)(t.h2,{children:`분리 규칙`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`첫 5분`}),`: 영향 범위 파악. "지금 뭐가 깨지고 있는가." 사용자 / 트래픽 / 데이터.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`다음 10분`}),`: 임시 패치 결정. rollback / feature flag off / 리트라이 / 우회. 가장 작은 변경.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`임시 패치 적용 + 검증`}),`: 사용자 영향 멈춤 확인.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`여기서 새벽 작업 종료 가능`}),`. 근본 원인은 다음 날.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`3번까지가 30분이면 잘 한 거다. 4번에서 멈출 수 있어야 한다.`}),`
`,(0,r.jsx)(t.h2,{children:`임시 패치의 자격`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`같은 장애가 다시 안 일어남 (또는 reliably 안 일어남)`}),`
`,(0,r.jsx)(t.li,{children:`새로운 장애를 만들지 않음`}),`
`,(0,r.jsx)(t.li,{children:`24시간 안에 root fix로 대체 가능`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`이 3가지를 만족하면 `,(0,r.jsx)(t.strong,{children:`새벽에는 임시 패치로 멈춤`}),`. 새벽 본인의 판단 정확도는 평소 70% 정도다 (졸리고 압박감). 그 상태에서 근본 수정 시도하면 새 장애를 만들 위험이 크다.`]}),`
`,(0,r.jsx)(t.h2,{children:`다음 날 회고`}),`
`,(0,r.jsx)(t.p,{children:`다음 날 본인을 위해 새벽에 남길 것:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`임시 패치 PR 본문`}),`: "이건 임시. 근본은 X. 24h 안에 처리."`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`알람 timestamp + 적용 시간`}),`: 데이터로 남기기`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`무엇을 안 해봤는지`}),`: 새벽엔 시도 못 한 가설 목록`]}),`
`]}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`새벽의 본인이 다음 날 본인에게 남기는 인계 노트가 핵심.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`임시 패치를 안 만들고 root cause부터 보려 함`}),`: 사용자 영향 길어짐`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`임시 패치 후 그대로 두고 끝`}),`: 24h 안에 root fix 안 하면 임시가 영구가 됨`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"새벽이라 정확해야 한다"는 압박`}),`: 정확함보다 멈춤이 먼저`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`임시 패치가 one-way로 굳는 순간`}),`
`,(0,r.jsxs)(t.p,{children:[`임시 패치는 본래 two-way door(되돌릴 수 있는 결정)다. 24시간 안에 root fix로 대체할 거니까. 그런데 24시간이 일주일이 되고 한 달이 되면 임시 패치가 `,(0,r.jsx)(t.strong,{children:`사실상 one-way로 굳는다`}),`. 다른 코드가 그 임시 동작에 의존하기 시작하면 되돌리는 비용이 비선형으로 커진다.`]}),`
`,(0,r.jsxs)(t.p,{children:[`그래서 임시 패치에는 `,(0,r.jsx)(t.strong,{children:`만료 신호`}),`를 박는다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`코드에 `,(0,r.jsx)(t.code,{children:`// TEMP: 2026-06-05까지, 미처리 시 알람`}),` 주석`]}),`
`,(0,r.jsx)(t.li,{children:`임시 패치 PR에 follow-up 이슈 링크 + 기한`}),`
`,(0,r.jsx)(t.li,{children:`기한 넘으면 알람 (린트 룰 또는 cron)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`만료 신호가 없으면 "임시"가 "영구"가 되는 게 기본값이다.`}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`새벽엔 멈춘다. 정확한 수정은 깨어있을 때.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/incident-ai-pair-debugging`,children:`/notes/incident-ai-pair-debugging`}),` — 새벽 결정 cross-check
`,(0,r.jsx)(t.a,{href:`/notes/runbook-write-during-incident`,children:`/notes/runbook-write-during-incident`}),` — 임시 패치 timeline을 runbook으로
`,(0,r.jsx)(t.a,{href:`/notes/incident-monitoring-gap`,children:`/notes/incident-monitoring-gap`}),` — 회고가 다음 알람 룰
`,(0,r.jsx)(t.a,{href:`/notes/good-alert-four-criteria`,children:`/notes/good-alert-four-criteria`}),` — 알람이 새벽을 부르는 기준
`,(0,r.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`/notes/one-way-two-way-door`}),` — 임시 패치가 one-way로 굳는 의사결정 분류`]})]})}function Wt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(I,{...e})}):I(e)}var Gt=e({default:()=>qt,frontmatter:()=>Kt}),Kt={title:`Incrementally correct — 한 번에 완성하지 않는 사이트`,growth:`Evergreen`,topics:[`garden`,`writing`,`philosophy`,`ops`],summary:`Brian Lovin이 제안한 개념. 글이 "출간"되는 게 아니라 시간을 두고 점진적으로 정확해지는 운영 방식.`,plantedAt:`2026-05-18`,lastTendedAt:`2026-05-30`};function L(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`출처`}),`
`,(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:`https://brianlovin.com/writing/incrementally-correct-personal-websites`,children:`Brian Lovin — Incrementally correct personal websites`})}),`
`,(0,r.jsx)(t.h2,{children:`핵심 명제`}),`
`,(0,r.jsx)(t.p,{children:`전통 블로그는 "출간 모델"이다. 한 글을 쓰고, 다듬고, 게시한다. 게시 후엔 손 안 댄다. 글이 "완성"된 형태로 닫혀있다.`}),`
`,(0,r.jsxs)(t.p,{children:[`Incrementally correct 모델은 다르다. 글이 `,(0,r.jsx)(t.strong,{children:`자라는 대상`}),`이다. 처음엔 한 문단, 며칠 후 반례 추가, 한 달 후 다른 글과 연결. lastTendedAt이 의미 있는 메타가 된다.`]}),`
`,(0,r.jsx)(t.h2,{children:`운영의 차이`}),`
`,(0,r.jsx)(t.h3,{children:`출간 모델`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`한 글에 들어가는 사람 시간: 한 번에 2-4시간`}),`
`,(0,r.jsx)(t.li,{children:`출간 빈도: 월 1-2회 (현실)`}),`
`,(0,r.jsx)(t.li,{children:`미완성에 대한 태도: 게시 안 함`}),`
`,(0,r.jsx)(t.li,{children:`사이트의 "활성도" 신호: 게시일`}),`
`]}),`
`,(0,r.jsx)(t.h3,{children:`Incrementally correct 모델`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`한 노트에 들어가는 사람 시간: 처음 15분 + 매번 5분`}),`
`,(0,r.jsx)(t.li,{children:`추가/다듬기 빈도: 일 1-2회`}),`
`,(0,r.jsx)(t.li,{children:`미완성에 대한 태도: 🌱 Seedling으로 공개`}),`
`,(0,r.jsx)(t.li,{children:`활성도 신호: lastTendedAt`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`후자는 사람 의지에 덜 의존한다. "매주 글 한 편"은 한 달 안에 깨지지만 "매일 한 노트 다듬기"는 더 가볍다.`}),`
`,(0,r.jsx)(t.h2,{children:`"정확해진다"는 무엇인가`}),`
`,(0,r.jsx)(t.p,{children:`처음에 쓴 노트는 보통 다음 셋 중 하나다.`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:`부분만 맞고 다른 부분은 모호`}),`
`,(0,r.jsx)(t.li,{children:`핵심은 맞는데 반례가 없어 균형 부족`}),`
`,(0,r.jsx)(t.li,{children:`다른 노트와의 관계가 안 보임`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`incrementally correct는 이걸 매 다듬기마다 한 가지씩 메운다. 반례 추가 → 1번 해결. 함정 섹션 추가 → 2번 해결. cross-link 추가 → 3번 해결.`}),`
`,(0,r.jsxs)(t.p,{children:[`세 가지가 다 채워지면 그 노트는 Evergreen 🌳에 가까워진다. 한 번에 만드는 게 아니라 `,(0,r.jsx)(t.strong,{children:`여러 사이클로 정착`}),`한다.`]}),`
`,(0,r.jsx)(t.h2,{children:`시간이 누적되는 형태`}),`
`,(0,r.jsx)(t.p,{children:`출간 모델: 매 글이 독립. 시간이 흐르면 글 수만 늘어남. 글 사이의 관계는 거의 없음.`}),`
`,(0,r.jsx)(t.p,{children:`Incrementally correct: 각 노트가 다른 노트의 인풋이 된다. cross-link 그래프가 자라고, 한 노트의 다듬기가 다른 노트의 가시성도 살린다.`}),`
`,(0,r.jsx)(t.p,{children:`이 차이가 사이트가 정원처럼 자라느냐 비석처럼 쌓이느냐를 결정한다.`}),`
`,(0,r.jsx)(t.h2,{children:`실용 룰`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`게시일 표기 X, lastTendedAt 표기 O`}),`
`,(0,r.jsx)(t.li,{children:`미완성 🌱 노트도 공개 (단 "in progress" 또는 stub 표시)`}),`
`,(0,r.jsx)(t.li,{children:`다른 노트 추가할 때 기존 노트의 ## 관련 섹션도 함께 갱신`}),`
`,(0,r.jsx)(t.li,{children:`한 노트가 한 달 이상 안 다듬어지면 삭제 또는 합치기 검토`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`🌱을 영원히 🌱로 두기`}),`: 처음 메모만 하고 다시 안 손대면 가든이 아니라 메모장. lastTendedAt이 한 달 이상 stale이면 신호.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`다듬기 빈도가 사람 의지에 의존`}),`: 매일 다듬기를 의지로 하려면 한 달 안에 멈춤. 시스템(commit hook·일일 리뷰)이 필요.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"미완성을 공개해도 괜찮다"의 남용`}),`: 정말 부끄러운 수준의 글까지 공개하면 사이트 전체 신뢰 ↓. Seedling도 한 줄 인용 정도는 강한 게 좋음.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`lastTendedAt의 거짓 표기`}),`: 실제 다듬지 않고 frontmatter만 바꾸기. 본인을 속이는 방향.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`사이트는 비석이 아니라 정원이다. `,(0,r.jsx)(t.strong,{children:`한 번에 완성하는 게 아니라 매일 조금씩 정확해진다.`})]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/digital-garden-vs-blog`,children:`/notes/digital-garden-vs-blog`}),` — 블로그와 가든의 운영 차이
`,(0,r.jsx)(t.a,{href:`/notes/last-tended-signal`,children:`/notes/last-tended-signal`}),` — 다듬은 날짜가 살아있는 신호
`,(0,r.jsx)(t.a,{href:`/notes/small-deploy-reread`,children:`/notes/small-deploy-reread`}),` — 작은 변경 + 즉시 검증의 같은 철학
`,(0,r.jsx)(t.a,{href:`/notes/spike-throwaway-code`,children:`/notes/spike-throwaway-code`}),` — 코드도 한 번에 완성하지 않는다
`,(0,r.jsx)(t.a,{href:`/notes/coverage-gap-analysis`,children:`/notes/coverage-gap-analysis`}),` — 어느 노트를 다듬을지 분포로 찾기
`,(0,r.jsx)(t.a,{href:`/notes/notes-round-pattern`,children:`/notes/notes-round-pattern`}),` — 점진 정확성을 라운드 단위로 운영`]})]})}function qt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(L,{...e})}):L(e)}var Jt=e({default:()=>Xt,frontmatter:()=>Yt}),Yt={title:`IntersectionObserver 무한 스크롤 — 가장 흔한 4가지 함정`,growth:`Seedling`,topics:[`frontend`,`web-api`,`performance`,`react`],summary:`무한 스크롤을 IntersectionObserver로 만들 때 매번 같은 4가지 함정이 반복된다. observer 재생성·rootMargin 누락·threshold 0의 의미·observe 해제 시점.`,plantedAt:`2026-05-28`,lastTendedAt:`2026-05-28`};function R(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,input:`input`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`왜 IntersectionObserver인가`}),`
`,(0,r.jsxs)(t.p,{children:[`스크롤 이벤트 + `,(0,r.jsx)(t.code,{children:`getBoundingClientRect`}),`로 만들면 매 프레임 layout reflow가 일어난다. 페이지가 길어질수록 스크롤이 점점 무거워진다.`]}),`
`,(0,r.jsx)(t.p,{children:`IntersectionObserver는 브라우저가 비동기로 가시성을 계산해서 callback을 던진다. 메인 스레드 부담이 없고 60fps가 유지된다.`}),`
`,(0,r.jsx)(t.p,{children:`그래서 무한 스크롤의 디폴트는 이제 IntersectionObserver다. 그런데 매번 같은 함정에 빠진다.`}),`
`,(0,r.jsx)(t.h2,{children:`함정 1 — observer를 매 렌더마다 새로 만든다`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-jsx`,children:`function InfiniteList({ onReachEnd }) {
  const ref = useRef();

  // 매 렌더마다 새 observer 인스턴스
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) onReachEnd();
  });

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  // ...
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`매 렌더마다 observer가 새로 만들어지는데 effect는 `,(0,r.jsx)(t.code,{children:`[]`}),`라 처음 것만 잡힌다. callback이 stale closure가 된다.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`고쳐`}),`: observer를 useEffect 안에서 만들거나 useRef로 보관.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-jsx`,children:`useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) onReachEnd();
  });
  if (ref.current) observer.observe(ref.current);
  return () => observer.disconnect();
}, [onReachEnd]);
`})}),`
`,(0,r.jsx)(t.h2,{children:`함정 2 — rootMargin 누락`}),`
`,(0,r.jsxs)(t.p,{children:[`기본 rootMargin은 `,(0,r.jsx)(t.code,{children:`0px`}),`다. 즉, 센티넬 요소가 뷰포트에 `,(0,r.jsx)(t.strong,{children:`완전히 진입`}),`해야 callback이 발화한다.`]}),`
`,(0,r.jsx)(t.p,{children:`이러면 사용자가 끝까지 스크롤한 후에야 다음 페이지 로드가 시작된다. 사용자는 빈 화면을 본다.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`고쳐`}),`: rootMargin을 미리 줘서 화면 밖에서 미리 로드.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-jsx`,children:`new IntersectionObserver(callback, {
  rootMargin: '200px 0px', // 위아래 200px 더 일찍 발화
});
`})}),`
`,(0,r.jsx)(t.p,{children:`목록 항목 높이의 1.5-2배 정도가 적정. 너무 크면 불필요한 fetch, 너무 작으면 사용자가 빈 화면을 본다.`}),`
`,(0,r.jsx)(t.h2,{children:`함정 3 — threshold=0의 의미`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-jsx`,children:`new IntersectionObserver(callback, { threshold: 0 });
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`threshold: 0`}),`은 "1픽셀이라도 보이면 발화"가 아니다. `,(0,r.jsx)(t.strong,{children:`0% 통과 시 발화`}),` — 정확히 경계가 닿는 순간. 1픽셀 차이로 발화 안 할 수 있다.`]}),`
`,(0,r.jsxs)(t.p,{children:[`비슷하게 `,(0,r.jsx)(t.code,{children:`threshold: 1`}),`은 "100% 다 보일 때". 작은 요소는 OK, 뷰포트보다 큰 요소는 `,(0,r.jsx)(t.strong,{children:`영원히 발화 안 함`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`고쳐`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`무한 스크롤 센티넬은 보통 작은 요소 → `,(0,r.jsx)(t.code,{children:`threshold: 0`}),` 또는 `,(0,r.jsx)(t.code,{children:`threshold: 0.1`}),` 정도`]}),`
`,(0,r.jsxs)(t.li,{children:[`큰 카드의 가시성 감지는 `,(0,r.jsx)(t.code,{children:`threshold: [0, 0.25, 0.5, 0.75, 1]`}),` 같이 배열로`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정 4 — observe 해제 시점`}),`
`,(0,r.jsxs)(t.p,{children:[`리스트 끝에 도달해서 더 이상 페이지가 없으면 `,(0,r.jsx)(t.code,{children:`unobserve()`}),`해야 한다. 안 하면 hasNextPage가 false인데도 callback이 계속 발화한다.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-jsx`,children:`const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    if (hasNextPage) {
      onReachEnd();
    } else {
      observer.unobserve(entries[0].target);
    }
  }
});
`})}),`
`,(0,r.jsx)(t.p,{children:`또는 더 안전하게 IntersectionObserver를 hasNextPage가 false가 된 시점에 disconnect하고, useEffect deps에 hasNextPage를 넣는다.`}),`
`,(0,r.jsx)(t.h2,{children:`보너스 — root 옵션의 함정`}),`
`,(0,r.jsxs)(t.p,{children:[`root를 명시하지 않으면 뷰포트가 root다. 컴포넌트가 `,(0,r.jsx)(t.strong,{children:`스크롤 컨테이너 안`}),`에 있으면 root를 그 컨테이너로 지정해야 한다.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-jsx`,children:`new IntersectionObserver(callback, {
  root: scrollContainerRef.current,
  rootMargin: '200px 0px',
});
`})}),`
`,(0,r.jsx)(t.p,{children:`root를 안 주면 컨테이너 안에서 스크롤해도 뷰포트 기준으로 계산돼서 영원히 발화 안 한다.`}),`
`,(0,r.jsx)(t.h2,{children:`체크리스트`}),`
`,(0,r.jsxs)(t.ul,{className:`contains-task-list`,children:[`
`,(0,r.jsxs)(t.li,{className:`task-list-item`,children:[(0,r.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`observer를 useEffect 안에서 만들었는가`]}),`
`,(0,r.jsxs)(t.li,{className:`task-list-item`,children:[(0,r.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`rootMargin을 줘서 화면 밖에서 미리 발화하게 했는가`]}),`
`,(0,r.jsxs)(t.li,{className:`task-list-item`,children:[(0,r.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`threshold 값의 의미를 정확히 알고 있는가`]}),`
`,(0,r.jsxs)(t.li,{className:`task-list-item`,children:[(0,r.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`hasNextPage가 false일 때 unobserve 또는 disconnect하는가`]}),`
`,(0,r.jsxs)(t.li,{className:`task-list-item`,children:[(0,r.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,`스크롤 컨테이너가 별도면 root를 지정했는가`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`IntersectionObserver는 `,(0,r.jsx)(t.strong,{children:`메인 스레드 부담 없는 가시성 감지`}),`의 정답이지만, 옵션 의미를 정확히 모르면 발화 안 하거나 무한 발화한다. 4가지 함정만 피하면 60fps 무한 스크롤이 된다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/react-19-use-hook`,children:`/notes/react-19-use-hook`}),` — React 19 use 훅
`,(0,r.jsx)(t.a,{href:`/notes/fuse-client-side-search`,children:`/notes/fuse-client-side-search`}),` — 클라이언트 사이드 라이브러리 패턴`]})]})}function Xt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(R,{...e})}):R(e)}var Zt=e({default:()=>$t,frontmatter:()=>Qt}),Qt={title:`iOS HIG 터치 타겟 44×44 + safe-area 디테일`,growth:`Seedling`,topics:[`mobile`,`accessibility`,`ios`,`frontend`],summary:`44×44는 권장이 아니라 사실상 기준. notch 노출되지 않게 viewport-fit=cover + env(safe-area-inset). 작은 디테일이 모바일 신뢰감을 만든다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-19`};function z(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`44×44는 왜 필요한가`}),`
`,(0,r.jsx)(t.p,{children:`Apple Human Interface Guidelines가 "최소 44pt"를 권장하지만, 실제로는 더 강한 의미가 있다. 사람의 손가락 패드는 평균 10mm. 44pt는 약 11mm. 그보다 작으면 미스 터치가 누적된다.`}),`
`,(0,r.jsxs)(t.p,{children:[`이 사이트에서 `,(0,r.jsx)(t.code,{children:`.icon-button`}),`을 38×38에서 44×44로 바꾸자 헤더의 검색·테마·메뉴 트리거 누르기가 눈에 띄게 안정됐다.`]}),`
`,(0,r.jsx)(t.h2,{children:`어디까지 적용해야 하는가`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`❗ 모든 인터랙티브 요소 (button, link, input, select)`}),`
`,(0,r.jsx)(t.li,{children:`❗ 카드 자체가 큰 클릭 영역이면 카드는 OK. 단 카드 안의 작은 link는 별도 처리.`}),`
`,(0,r.jsxs)(t.li,{children:[`시각 사이즈는 작아도 padding으로 hit area 확보 가능 (`,(0,r.jsx)(t.code,{children:`padding: 10px 0`}),` + `,(0,r.jsx)(t.code,{children:`min-height: 44px`}),`)`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`safe-area-inset`}),`
`,(0,r.jsx)(t.p,{children:`iPhone 11+는 노치, iPhone 14 Pro+는 Dynamic Island. 하단은 홈 인디케이터. 콘텐츠가 그 영역에 닿으면 잘리거나 가려진다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-html`,children:`<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.site-nav {
  padding-top: max(14px, env(safe-area-inset-top));
}
.site-footer {
  padding-bottom: max(24px, env(safe-area-inset-bottom));
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`max()`}),`로 일반 padding과 inset 중 큰 값. 노치 없는 폰에선 일반 padding, 있는 폰에선 inset.`]}),`
`,(0,r.jsx)(t.h2,{children:`100dvh`}),`
`,(0,r.jsxs)(t.p,{children:[`iOS Safari는 주소창이 동적으로 사라졌다 나타난다. `,(0,r.jsx)(t.code,{children:`100vh`}),`는 주소창 펼친 상태 기준이라 사라지면 콘텐츠 점프.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`100dvh`}),`(dynamic viewport height)는 현재 viewport 기준이라 점프 없음. iOS 15.4+ / Chrome 108+ 지원.`]}),`
`,(0,r.jsx)(t.h2,{children:`작은 디테일 묶음`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`-webkit-tap-highlight-color: transparent`}),` — 링크 탭 시 회색 깜빡임 제거`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`-webkit-text-size-adjust: 100%`}),` — 가로 회전 시 폰트 자동 확대 방지`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`input { font-size: 16px }`}),` — iOS Safari 자동 줌 트리거 회피`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`overscroll-behavior: contain`}),` — 모달 스크롤 끝에서 백드롭이 함께 스크롤되는 것 차단`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`44×44를 한 군데 빼먹기`}),`: 사용자는 "왜 이 버튼만 누르기 어렵지?"라고 느끼지만 원인을 정확히 못 짚는다. 한 곳 누락이 전체 인상을 깎는다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`시각 사이즈만 줄이고 hit area 안 늘림`}),`: 작은 아이콘은 padding으로 hit area를 따로 확보해야. 시각 12px / hit 44px 분리.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`safe-area-inset을 max 없이 사용`}),`: 노치 없는 폰에서 inset이 0이면 padding 0 → 너무 가까운 가장자리. 항상 `,(0,r.jsx)(t.code,{children:`max(default, env(...))`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`dvh 미지원 브라우저 무시`}),`: 100dvh fallback 없으면 옛 iOS에서 점프. `,(0,r.jsx)(t.code,{children:`min-height: 100vh; min-height: 100dvh;`}),` 둘 다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/color-mix-tokens`,children:`/notes/color-mix-tokens`}),` — 시각 단단함을 만드는 토큰
`,(0,r.jsx)(t.a,{href:`/notes/korean-letter-spacing`,children:`/notes/korean-letter-spacing`}),` — 모바일 한국어 타이포 디테일
`,(0,r.jsx)(t.a,{href:`/cases/mobile-optimization`,children:`/cases/mobile-optimization`}),` — 이 기준을 적용한 모바일 최적화 케이스
`,(0,r.jsx)(t.a,{href:`/notes/keyboard-nav-six-traps`,children:`/notes/keyboard-nav-six-traps`}),` — 키보드 접근성 6가지 함정`]})]})}function $t(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(z,{...e})}):z(e)}var en=e({default:()=>nn,frontmatter:()=>tn}),tn={title:`JWT vs session — 스토리지·만료·revocation의 트레이드오프`,growth:`Seedling`,topics:[`security`,`auth`,`backend`,`web`],summary:`JWT가 stateless라 좋다는 말은 절반만 맞다. revocation·만료·스토리지를 같이 보면 session이 더 단순한 경우가 많다. 5가지 차원 비교.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function B(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`두 모델`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Session`}),`: 서버에 세션 저장 (Redis·DB). 클라이언트는 session ID만 가짐.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`JWT`}),`: 토큰 자체에 payload를 담아 서버 스토리지 없음. 서명으로 무결성 검증.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`JWT가 "stateless"라는 이유로 자주 기본값으로 선택되지만, 5가지 차원에서 보면 session이 더 단순한 경우가 많다.`}),`
`,(0,r.jsx)(t.h2,{children:`차원 1 — 스토리지`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:`Session`}),(0,r.jsx)(t.th,{children:`JWT`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`서버`}),(0,r.jsx)(t.td,{children:`session store 필요 (Redis)`}),(0,r.jsx)(t.td,{children:`없음`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`클라이언트`}),(0,r.jsx)(t.td,{children:`session ID (짧음)`}),(0,r.jsx)(t.td,{children:`토큰 (보통 500바이트+)`})]})]})]}),`
`,(0,r.jsx)(t.p,{children:`서버 단순화는 JWT 승. 단, 매 요청마다 클라이언트가 큰 토큰을 보내야 함.`}),`
`,(0,r.jsx)(t.h2,{children:`차원 2 — 만료`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Session`}),`: 서버가 만료 결정. session store에서 expire.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`JWT`}),`: 토큰 안에 `,(0,r.jsx)(t.code,{children:`exp`}),` claim. 검증 시 확인. 만료 후 새 토큰이 필요.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`문제 — JWT는 만료 단축이 어렵다`}),`:
보안 사고 시 "모든 토큰 즉시 만료" 가 필요한데, JWT는 발급된 토큰의 exp를 바꿀 수 없다. server-side blacklist 또는 짧은 exp + refresh token이 필요.`]}),`
`,(0,r.jsx)(t.p,{children:`세션은 즉시 만료 가능 (서버에서 삭제).`}),`
`,(0,r.jsx)(t.h2,{children:`차원 3 — Revocation`}),`
`,(0,r.jsx)(t.p,{children:`가장 큰 차이.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Session`}),`: 즉시 revoke (서버에서 삭제). 다음 요청부터 거부.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`JWT`}),`: 토큰 자체로는 revoke 불가. 옵션:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Blacklist`}),`: revoke된 JWT를 서버에 저장 → stateless 이점 사라짐`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`짧은 exp + refresh token`}),`: 5-15분 access token + refresh token으로 갱신. revoke은 refresh token만 막음.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`rotating refresh token`}),`: refresh 마다 새 refresh 발급, 옛 거 invalidate`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`JWT의 stateless는 revocation을 포기하거나 stateful blacklist를 더한 hybrid가 된다. `,(0,r.jsx)(t.strong,{children:`순수 stateless JWT는 보안 사고에 약함`}),`.`]}),`
`,(0,r.jsx)(t.h2,{children:`차원 4 — 권한 정보 갱신`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Session`}),`: 매 요청마다 서버에서 권한 조회. 권한 변경 즉시 반영.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`JWT`}),`: 토큰 안에 권한 claim. 권한 변경되어도 토큰은 옛 권한 유지. 새 토큰 발급까지 stale.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`문제 사례`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`직원 퇴사 → 권한 제거 → 그러나 JWT는 만료까지 권한 유지 → 보안 구멍`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`해결: JWT를 짧게 + 매 요청에서 권한 재조회 → JWT의 stateless 이점 사라짐.`}),`
`,(0,r.jsx)(t.h2,{children:`차원 5 — 분산 시스템`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Session`}),`: session store가 SPOF. Redis cluster 필요.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`JWT`}),`: 서명만 검증하면 됨. 분산 검증 쉬움.`]}),`
`,(0,r.jsx)(t.p,{children:`진짜 분산 환경(여러 서비스가 같은 토큰 검증)에선 JWT가 명확히 유리.`}),`
`,(0,r.jsx)(t.h2,{children:`실용 선택 가이드`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`사용 사례
  ↓ 단일 서버 또는 같은 인프라 안의 서비스 수개?
  → Session (Redis) — 단순, revoke 즉시
  
  ↓ 여러 마이크로서비스 + 외부 파트너 API?
  → JWT (짧은 exp + refresh) — 분산 검증

  ↓ 모바일 앱 + 긴 로그인 유지?
  → JWT (refresh token) — 모바일은 cookie 다루기 어려움
`})}),`
`,(0,r.jsx)(t.h2,{children:`흔한 misuse`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`JWT를 stateless라 부르며 blacklist 도입`}),`: stateless 이점이 사라진다. blacklist 필요하면 session이 더 단순.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`JWT 만료를 30일로 길게`}),`: revoke 못 하는 토큰을 30일 유효? 사고 시 30일간 노출. exp는 15분-1시간.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`JWT를 localStorage에`}),`: XSS 시 토큰 탈취. HttpOnly cookie가 안전.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Session ID를 URL에`}),`: 로그·referrer로 노출. cookie만 사용.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`refresh token rotation 안 함`}),`: 한 번 탈취된 refresh token이 영원히 유효.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"JWT가 더 modern" 같은 패션 선택: 5가지 차원을 비교 안 한 선택은 보통 session이 더 맞음.`}),`
`,(0,r.jsx)(t.li,{children:`HttpOnly cookie + Secure + SameSite를 안 쓰면 두 모델 모두 취약.`}),`
`,(0,r.jsx)(t.li,{children:`access token + refresh token을 둘 다 localStorage에 두면 XSS 시 무의미.`}),`
`,(0,r.jsx)(t.li,{children:`CSRF 보호 누락: cookie 기반이면 CSRF 토큰 필수.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`JWT의 stateless는 `,(0,r.jsx)(t.strong,{children:`분산 검증`}),`에선 명확한 가치지만, `,(0,r.jsx)(t.strong,{children:`revocation·권한 갱신`}),`이 필요하면 stateless 이점이 사라진다. 단일 인프라면 session이 더 단순. JWT를 쓰려면 짧은 exp + refresh + rotation까지 같이 와야 함.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/samesite-cookie-3rd-party-context`,children:`/notes/samesite-cookie-3rd-party-context`}),` — cookie 보안 디테일
`,(0,r.jsx)(t.a,{href:`/notes/oauth-state-pkce-traps`,children:`/notes/oauth-state-pkce-traps`}),` — OAuth 흐름에서 토큰 보호`]})]})}function nn(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(B,{...e})}):B(e)}var rn=e({default:()=>on,frontmatter:()=>an}),an={title:`Keyboard navigation 6가지 함정 — 마우스 없이 사이트를 쓸 수 있나`,growth:`Seedling`,topics:[`accessibility`,`frontend`,`a11y`,`ux`],summary:`Tab으로 사이트를 끝까지 쓸 수 있는가. 6가지 흔한 함정이 키보드 사용자를 막는다. 각 함정의 진단법과 수정 패턴.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function V(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`왜 검증해야 하나`}),`
`,(0,r.jsx)(t.p,{children:`마우스로만 테스트하면 사이트의 절반이 동작 안 함이 안 보인다.`}),`
`,(0,r.jsx)(t.p,{children:`키보드 사용자:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`시각 장애 (스크린 리더 + 키보드)`}),`
`,(0,r.jsx)(t.li,{children:`운동 장애 (마우스 사용 어려움)`}),`
`,(0,r.jsx)(t.li,{children:`파워 유저 (마우스보다 키보드가 빠름)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`법적으로도 WCAG 2.1 AA가 키보드 접근 요구. 그러나 가장 큰 이유는 — 본인이 마우스 못 쓰는 30분만 살아봐도 사이트가 망가졌다는 게 보인다.`}),`
`,(0,r.jsx)(t.h2,{children:`빠른 점검`}),`
`,(0,r.jsx)(t.p,{children:`마우스 안 쓰고 사이트를 한 번 끝까지 사용해본다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Tab으로 모든 인터랙티브 요소 도달 가능?`}),`
`,(0,r.jsx)(t.li,{children:`Enter/Space로 동작?`}),`
`,(0,r.jsx)(t.li,{children:`focus가 시각적으로 보임?`}),`
`,(0,r.jsx)(t.li,{children:`모달 열고 닫기 가능?`}),`
`,(0,r.jsx)(t.li,{children:`form 제출 가능?`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`대부분 사이트가 이 점검에서 막힌다. 6가지 흔한 함정.`}),`
`,(0,r.jsxs)(t.h2,{children:[`함정 1 — `,(0,r.jsx)(t.code,{children:`<div onClick>`}),` 패턴`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-jsx`,children:`// 키보드 안 됨
<div onClick={handleClick}>버튼</div>

// 키보드 OK
<button onClick={handleClick}>버튼</button>
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`<div>`}),`는 기본적으로 focusable 아님. Tab 도달 안 함.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`고치는 법`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`<button>`}),` 또는 `,(0,r.jsx)(t.code,{children:`<a>`}),` 사용 (네이티브 요소)`]}),`
`,(0,r.jsxs)(t.li,{children:[`진짜 `,(0,r.jsx)(t.code,{children:`<div>`}),` 필요하면: `,(0,r.jsx)(t.code,{children:`tabIndex={0}`}),` + `,(0,r.jsx)(t.code,{children:`role="button"`}),` + `,(0,r.jsx)(t.code,{children:`onKeyDown`}),` (Enter/Space 처리)`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정 2 — focus 표시 제거`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`/* 안 됨 */
*:focus { outline: none; }
button:focus { outline: 0; }
`})}),`
`,(0,r.jsx)(t.p,{children:`이거 디자인 정리 위해 자주 쓰지만 키보드 사용자에게 치명적. focus가 어디 있는지 안 보임.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`고치는 법`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`outline 제거 시 대체 시각 표시 (예: box-shadow·border·background)`}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`:focus-visible`}),` 사용 (마우스 클릭엔 outline 안 보이고 키보드 focus에만 보임)`]}),`
`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
`})}),`
`,(0,r.jsx)(t.h2,{children:`함정 3 — Tab 순서 깨짐`}),`
`,(0,r.jsxs)(t.p,{children:[`CSS `,(0,r.jsx)(t.code,{children:`order`}),`, `,(0,r.jsx)(t.code,{children:`flex-direction: row-reverse`}),`, `,(0,r.jsx)(t.code,{children:`position: absolute`}),`로 시각적 순서를 바꾸면 DOM 순서와 Tab 순서가 안 맞는다.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-html`,children:`<!-- 화면: B → A 순서로 보임 (CSS order) -->
<!-- Tab: A → B (DOM 순서) -->
<div style="display:flex; flex-direction: row-reverse">
  <button>A</button>
  <button>B</button>
</div>
`})}),`
`,(0,r.jsx)(t.p,{children:`키보드 사용자는 "화면에 보이는 순서대로" 이동할 거라 예상. 안 맞으면 혼란.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`고치는 법`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`DOM 순서를 시각 순서와 맞추기`}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`tabIndex={-1}`}),`로 일부 제외 (단, 인터랙티브 요소가 아닐 때만)`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정 4 — focus trap 없는 모달`}),`
`,(0,r.jsx)(t.p,{children:`모달이 열렸을 때 Tab을 누르면 모달 뒤의 페이지 요소로 focus가 빠진다. 키보드 사용자는 모달이 "닫혔는지" 알 수 없음.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`고치는 법`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`모달 안에 focus trap (Tab이 모달 안에서 순환)`}),`
`,(0,r.jsx)(t.li,{children:`ESC로 닫기`}),`
`,(0,r.jsx)(t.li,{children:`모달 닫힐 때 trigger 버튼으로 focus 복원`}),`
`,(0,r.jsx)(t.li,{children:`모달 열림 시 첫 focusable 요소로 focus 이동`}),`
`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`// 라이브러리: focus-trap, react-focus-lock
import FocusTrap from 'focus-trap-react';

<FocusTrap>
  <div className="modal">...</div>
</FocusTrap>
`})}),`
`,(0,r.jsx)(t.h2,{children:`함정 5 — skip link 없음`}),`
`,(0,r.jsx)(t.p,{children:`매 페이지 navigation을 Tab으로 통과해야 본문 도달.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-html`,children:`<!-- 페이지 첫 요소 -->
<a href="#main" class="skip-link">본문으로 이동</a>
`})}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.skip-link {
  position: absolute;
  left: -9999px; /* 평소 안 보임 */
}
.skip-link:focus {
  left: 0; /* focus 시 보임 */
}
`})}),`
`,(0,r.jsx)(t.p,{children:`키보드 사용자는 첫 Tab에서 skip link → Enter로 본문 직행.`}),`
`,(0,r.jsx)(t.h2,{children:`함정 6 — hover 전용 인터랙션`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.dropdown:hover .menu { display: block; }
`})}),`
`,(0,r.jsx)(t.p,{children:`마우스 hover에만 메뉴 보임. 키보드 사용자는 메뉴 못 봄.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`고치는 법`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`:focus-within`}),`도 같이`]}),`
`,(0,r.jsx)(t.li,{children:`또는 click/Enter로 토글`}),`
`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`.dropdown:hover .menu,
.dropdown:focus-within .menu {
  display: block;
}
`})}),`
`,(0,r.jsx)(t.h2,{children:`검증 방법`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`1. 사이트 첫 페이지부터 Tab만 눌러서 끝까지 사용
2. 모든 인터랙티브 요소에 도달?
3. focus가 시각적으로 보임? (탭 누를 때마다 어디 있는지)
4. Enter/Space로 동작?
5. 모달이 열린 후 ESC로 닫기 + Tab이 모달 안에 갇힘?
6. screen reader 켜고 한 번 더 (VoiceOver·NVDA)
`})}),`
`,(0,r.jsx)(t.p,{children:`이 5분 점검이 a11y의 80%다.`}),`
`,(0,r.jsx)(t.h2,{children:`함정 (메타)`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`자동 도구만 신뢰`}),`: axe·Lighthouse는 일부만 잡음. 수동 키보드 테스트가 필수.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`a11y를 마지막에`}),`: 처음부터 `,(0,r.jsx)(t.code,{children:`<button>`}),` 쓰면 비용 0. 마지막에 `,(0,r.jsx)(t.code,{children:`<div>`}),`를 `,(0,r.jsx)(t.code,{children:`<button>`}),`으로 바꾸면 큰 작업.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`screen reader 무시`}),`: 키보드만 보고 screen reader 안 쓰면 ARIA 사용 잘못이 안 보임.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`너무 많은 ARIA`}),`: 네이티브 요소 쓰면 ARIA 거의 필요 없음. ARIA는 보조 수단이지 대체 수단 아님.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`mobile a11y 무시`}),`: 모바일도 키보드(외부 키보드·VoiceOver swipe) 사용자 있음.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`5분 동안 마우스 안 쓰고 사이트를 써본다. `,(0,r.jsx)(t.strong,{children:`6가지 함정`}),` 중 하나라도 걸리면 키보드 사용자에게 동작 안 함. `,(0,r.jsx)(t.code,{children:`<button>`}),` 쓰기·`,(0,r.jsx)(t.code,{children:`:focus-visible`}),`·focus trap이 80%를 해결.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/ios-hig-touch-targets`,children:`/notes/ios-hig-touch-targets`}),` — 모바일 인터랙션 디테일
`,(0,r.jsx)(t.a,{href:`/notes/css-color-scheme-native`,children:`/notes/css-color-scheme-native`}),` — 다크 모드와 focus 색 보정`]})]})}function on(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(V,{...e})}):V(e)}var sn=e({default:()=>un,frontmatter:()=>cn}),cn={title:`한국어 letter-spacing — Pretendard에서 -0.025em이 상한`,growth:`Budding`,topics:[`typography`,`korean`,`design`,`frontend`],summary:`영문 헤딩의 -0.04em letter-spacing은 한국어에 적용하면 받침 있는 자모가 뭉친다. -0.02em ~ -0.025em이 한글 균형점.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-29`};function ln(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제`}),`
`,(0,r.jsxs)(t.p,{children:[`모던 영문 디자인 시스템은 헤딩에 `,(0,r.jsx)(t.code,{children:`letter-spacing: -0.03em ~ -0.04em`}),`을 자주 쓴다. Linear, Vercel, Stripe 모두.`]}),`
`,(0,r.jsxs)(t.p,{children:[`같은 값을 한국어 헤딩에 적용하면 `,(0,r.jsx)(t.strong,{children:`받침 있는 자모`}),`가 뭉쳐 보인다. 특히 "정경하" 같은 받침 많은 단어.`]}),`
`,(0,r.jsx)(t.h2,{children:`원인`}),`
`,(0,r.jsx)(t.p,{children:`영문 글리프는 letter 간 여백이 광활. 마이너스 spacing이 자연스럽게 균형 잡힘. 한글 글리프는 이미 사각형 박스에 꽉 차 있어서 음수 spacing이 박스끼리 겹친다.`}),`
`,(0,r.jsx)(t.h2,{children:`가이드`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`영역`}),(0,r.jsx)(t.th,{children:`추천 letter-spacing`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`h1 (큰 헤딩)`}),(0,r.jsx)(t.td,{children:`-0.02em ~ -0.025em`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`h2, h3`}),(0,r.jsx)(t.td,{children:`-0.015em ~ -0.02em`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`본문`}),(0,r.jsx)(t.td,{children:`0 ~ -0.005em`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`작은 라벨 (eyebrow)`}),(0,r.jsx)(t.td,{children:`+0.08em ~ +0.12em (uppercase)`})]})]})]}),`
`,(0,r.jsx)(t.h2,{children:`letter-spacing 외 같이 잡아야 할 디테일`}),`
`,(0,r.jsx)(t.p,{children:`letter-spacing만 잡아도 한국어가 산뜻해지지 않는다. 3가지가 같이 와야 한다.`}),`
`,(0,r.jsx)(t.h3,{children:`line-height`}),`
`,(0,r.jsx)(t.p,{children:`한국어는 글자 박스가 사각형이고 받침이 아래로 내려가서 영문보다 line-height가 더 필요하다.`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`영역`}),(0,r.jsx)(t.th,{children:`영문`}),(0,r.jsx)(t.th,{children:`한국어`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`h1`}),(0,r.jsx)(t.td,{children:`1.1`}),(0,r.jsx)(t.td,{children:`1.25`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`본문`}),(0,r.jsx)(t.td,{children:`1.5`}),(0,r.jsx)(t.td,{children:`1.65-1.75`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`작은 텍스트`}),(0,r.jsx)(t.td,{children:`1.4`}),(0,r.jsx)(t.td,{children:`1.55`})]})]})]}),`
`,(0,r.jsx)(t.p,{children:`영문 디자인 시스템의 line-height 그대로 적용하면 한국어 본문이 답답하게 보인다.`}),`
`,(0,r.jsx)(t.h3,{children:`word-break / line-break`}),`
`,(0,r.jsx)(t.p,{children:`한국어는 영문과 달리 단어 간 공백이 적고 한 문장이 길어지면 줄바꿈 위치가 어색해진다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`word-break: keep-all;  /* 단어 단위 줄바꿈 (영문 디폴트는 break-word) */
line-break: auto;
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`keep-all`}),`이 없으면 단어 중간에서 줄바꿈이 일어나 가독성 ↓.`]}),`
`,(0,r.jsx)(t.h3,{children:`viewport별 보정`}),`
`,(0,r.jsx)(t.p,{children:`모바일에서는 letter-spacing을 더 보수적으로.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-css`,children:`h1 {
  letter-spacing: -0.025em;
}
@media (max-width: 768px) {
  h1 {
    letter-spacing: -0.015em;  /* 모바일은 더 보수 */
  }
}
`})}),`
`,(0,r.jsx)(t.p,{children:`모바일은 글자가 작아서 음수 spacing이 가독성을 더 깎는다.`}),`
`,(0,r.jsx)(t.h2,{children:`검증`}),`
`,(0,r.jsxs)(t.p,{children:[`이 사이트 quality-gate에서 디자이너 페르소나가 지적: "h1/h2의 letter-spacing -0.035em이 한국어 글리프(특히 받침 있는 자모)를 뭉개". 모바일 헤딩은 `,(0,r.jsx)(t.code,{children:`-0.025em`}),`으로 추가 완화.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`영문 디자인 영감을 그대로 카피하면 한국어 사이트에서 가독성 손해`}),`
`,(0,r.jsxs)(t.li,{children:[`Pretendard variable의 `,(0,r.jsx)(t.code,{children:`font-feature-settings: 'ss06' on`}),` 같은 옵션 활용 시 미세 조정 가능`]}),`
`,(0,r.jsx)(t.li,{children:`letter-spacing은 viewport 크기에 따라 다르게 — 모바일은 더 보수적으로`}),`
`,(0,r.jsx)(t.li,{children:`letter-spacing만 잡고 line-height·word-break 안 잡으면 절반의 개선. 3가지가 묶음.`}),`
`,(0,r.jsx)(t.li,{children:`영문 폰트(Inter·SF Pro 등) + 한국어 폰트(Pretendard)를 같이 쓸 때 각 언어별 letter-spacing이 달라야 함. font-family fallback에 의존하지 말고 명시.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/color-mix-tokens`,children:`/notes/color-mix-tokens`}),` — 같은 디자인 시스템 안에서 컬러 토큰까지 맞춰야 헤딩이 산다
`,(0,r.jsx)(t.a,{href:`/notes/css-color-scheme-native`,children:`/notes/css-color-scheme-native`}),` — 다크 모드에서 native UI 자동 전환, 타이포 디테일과 짝
`,(0,r.jsx)(t.a,{href:`/notes/ios-hig-touch-targets`,children:`/notes/ios-hig-touch-targets`}),` — 모바일 디테일 묶음으로 함께 잡으면 신뢰감 비선형 상승
`,(0,r.jsx)(t.a,{href:`/cases/editorial-modern-redesign`,children:`/cases/editorial-modern-redesign`}),` — 이 타이포 결정이 적용된 리뉴얼 케이스`]})]})}function un(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(ln,{...e})}):ln(e)}var dn=e({default:()=>pn,frontmatter:()=>fn}),fn={title:`lastTendedAt으로 사이트가 살아있음을 보여주기`,growth:`Seedling`,topics:[`garden`,`writing`,`content-architecture`],summary:`게시일(publishedAt) 대신 최종 다듬은 날(lastTendedAt)을 표시하면, 방문자에게 "이 사이트는 계속 자라고 있다"는 신호가 직접 전달된다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-19`};function H(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`일반 블로그의 함정`}),`
`,(0,r.jsx)(t.p,{children:`블로그 글에는 publishedAt이 있다. 시간이 지나면 "오래된 글"로 보인다. 2년 전 글은 자동으로 신뢰 ↓.`}),`
`,(0,r.jsxs)(t.p,{children:[`문제: 글의 `,(0,r.jsx)(t.strong,{children:`내용`}),`은 계속 다듬어지는데도, 사이트는 "2023-01-15"라는 한 시점에 박혀 있다.`]}),`
`,(0,r.jsx)(t.h2,{children:`디지털 가든의 해법`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`plantedAt`}),` (처음 심은 날) + `,(0,r.jsx)(t.code,{children:`lastTendedAt`}),` (최근 다듬은 날). 둘 다 표시.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-yaml`,children:`plantedAt: 2026-04-12  # 처음 심음
lastTendedAt: 2026-05-19  # 어제 다듬음
`})}),`
`,(0,r.jsx)(t.p,{children:`방문자가 보는 것:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"2026-04-12 심음, 2026-05-19 마지막 다듬음"`}),`
`,(0,r.jsx)(t.li,{children:`→ "이 노트는 한 달간 계속 자라고 있다"`}),`
`,(0,r.jsx)(t.li,{children:`→ "이 사이트는 살아있다"`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`정렬 효과`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`lastTendedAt`}),`을 sort key로 쓰면, `,(0,r.jsx)(t.strong,{children:`최근에 다듬어진 노트가 상단`}),`. 게시일 기준 정렬은 "1년 전 글이 영원히 1년 전 글"이지만, 다듬은 날 기준은 "현재 관심사가 자연스럽게 상단".`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`매번 lastTendedAt 수동 업데이트 = 부담. git commit timestamp로 자동화 가능.`}),`
`,(0,r.jsx)(t.li,{children:`"다듬었다"의 기준 모호 — 오타 수정도 카운트? 본문 5문장 추가는?`}),`
`,(0,r.jsx)(t.li,{children:`너무 자주 lastTendedAt 갱신 = 노이즈. 의미 있는 다듬기에만.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`사이트의 "살아있음"은 게시 빈도가 아니라 다듬기 빈도다.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/digital-garden-vs-blog`,children:`/notes/digital-garden-vs-blog`}),` — lastTendedAt이 자라남을 신호로 만드는 가든 자세의 기반
`,(0,r.jsx)(t.a,{href:`/notes/write-why-not-what`,children:`/notes/write-why-not-what`}),` — 다듬을 때마다 "왜"를 갱신해야 신호가 진짜가 된다
`,(0,r.jsx)(t.a,{href:`/notes/mdx-content-as-files`,children:`/notes/mdx-content-as-files`}),` — frontmatter lastTendedAt이 파일 기반 콘텐츠와 잘 맞물린다
`,(0,r.jsx)(t.a,{href:`/essays/site-alive-signals`,children:`/essays/site-alive-signals`}),` — 살아있음 신호를 매일 다듬는 시스템 에세이`]})]})}function pn(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(H,{...e})}):H(e)}var mn=e({default:()=>gn,frontmatter:()=>hn}),hn={title:`학습 레포는 회사에서 못 쓰는 기술의 실험장`,growth:`Seedling`,topics:[`learning`,`side-project`,`career`,`sandbox`],summary:`회사 코드는 가드레일이 많다. 학습 레포는 자유. Module Federation·실험적 hook·새 framework를 자유롭게 만져보고, 한 번 쓰면 회사 코드로 옮겨간다.`,plantedAt:`2026-05-13`,lastTendedAt:`2026-05-21`};function U(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`회사 코드의 자유도 한계`}),`
`,(0,r.jsx)(t.p,{children:`회사 코드베이스에서는 새 기술을 함부로 쓸 수 없다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`팀 컨벤션·아키텍처 결정 필요`}),`
`,(0,r.jsx)(t.li,{children:`다른 팀원 학습 비용`}),`
`,(0,r.jsx)(t.li,{children:`production 안전성 검증`}),`
`,(0,r.jsx)(t.li,{children:`배포 파이프라인 호환`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`새 라이브러리 한 번 추가하려면 RFC·논의·합의. 3주 걸린다. `,(0,r.jsx)(t.strong,{children:`합당한 가드레일이지만 학습 속도엔 적`}),`.`]}),`
`,(0,r.jsx)(t.h2,{children:`학습 레포의 진짜 가치`}),`
`,(0,r.jsx)(t.p,{children:`학습 레포(개인 GitHub 공개 또는 private)는 가드레일 0.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`새 framework 시도 (Solid·Svelte·Qwik 등)`}),`
`,(0,r.jsx)(t.li,{children:`실험적 hook 패턴`}),`
`,(0,r.jsx)(t.li,{children:`미해본 build tool (Bun·esbuild·rolldown)`}),`
`,(0,r.jsx)(t.li,{children:`low-level 알고리즘 직접 구현`}),`
`,(0,r.jsx)(t.li,{children:`Module Federation·module loader 직접 만들기`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`production 안 가니까 안전성 검증 필요 없음. 컨벤션 결정 필요 없음. `,(0,r.jsx)(t.strong,{children:`그냥 만든다`}),`.`]}),`
`,(0,r.jsx)(t.h2,{children:`학습 레포 → 회사 코드 흐름`}),`
`,(0,r.jsx)(t.p,{children:`전형적 흐름:`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsx)(t.li,{children:`학습 레포에서 새 기술 spike (한 주말)`}),`
`,(0,r.jsx)(t.li,{children:`한계·함정·실용성 파악`}),`
`,(0,r.jsx)(t.li,{children:`회사 코드에서 작은 적용 자리 발견`}),`
`,(0,r.jsx)(t.li,{children:`학습 레포 경험으로 짧은 RFC 작성`}),`
`,(0,r.jsx)(t.li,{children:`팀 합의 + 도입`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`학습 레포 경험 없이 회사에 RFC 던지면 "왜 우리한테 적용하나"를 설명 못 한다. 실제 만져본 사람만이 trade-off를 안다.`}),`
`,(0,r.jsx)(t.h2,{children:`예시 — 같은 패턴이 회사로 흘러간 케이스`}),`
`,(0,r.jsx)(t.p,{children:`개인 학습 → 회사 적용 예시:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Module Federation 학습 → 사내 micro frontend 도입`}),`: mfp 같은 학습 레포가 사내 도입 시 RFC 근거`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`zod boundary 검증 → API 응답 검증`}),`: 사이드 프로젝트에서 익숙해진 zod이 회사 코드에도 자연 도입`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`bottleneck rate limit → 외부 API 통합 안정성`}),`: 홈레이더 같은 사이드 프로젝트의 패턴`]}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`chalk·boxen CLI 시각화 → 사내 CLI 도구 UX 개선`})}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`회사 코드는 안전한 일관성. 학습 레포는 새로움. 둘은 짝.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`학습 레포만 만들고 정리 안 함`}),`: 6년 누적 30+ 레포가 archive·정리 없이 쌓이면 나쁜 신호. 정기 정리.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`완성 압박`}),`: 학습 레포는 "spike" 단계로 끝나도 됨. "완성" 강박이 학습 속도 ↓.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`회사 코드 옮기지 않음`}),`: 학습은 했는데 회사 코드는 그대로. 학습이 자산화 안 됨. 작은 적용 자리부터 찾기.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`너무 큰 학습 프로젝트`}),`: "이번엔 풀스택 앱 만들어볼게"가 한 달 후 안 끝남. spike는 작게.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`학습 자체가 목적이 됨`}),`: 새 기술을 배우는 게 즐거워서 회사 적용은 안 함. 학습은 도구이지 목적 아님.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`운영 룰`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`spike는 한 주말 안에 끝낼 사이즈로`}),`
`,(0,r.jsx)(t.li,{children:`결과는 짧은 README + main.js 위주 (정성껏 안 만듦)`}),`
`,(0,r.jsx)(t.li,{children:`회사 적용 자리를 항상 1개는 떠올리고 시작`}),`
`,(0,r.jsx)(t.li,{children:`정기 archive (분기 1회): 1년 안 만진 + 학습 가치 0 → archive`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`학습 레포는 `,(0,r.jsx)(t.strong,{children:`회사 코드의 안전망 위에서 만들 수 없는 것`}),`을 만드는 곳이다. 만들어야 옮길 수 있다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/spike-throwaway-code`,children:`/notes/spike-throwaway-code`}),` — spike의 일반 패턴
`,(0,r.jsx)(t.a,{href:`/notes/archive-or-keep-old-repo`,children:`/notes/archive-or-keep-old-repo`}),` — 학습 레포 정리 기준
`,(0,r.jsx)(t.a,{href:`/notes/incrementally-correct`,children:`/notes/incrementally-correct`}),` — 학습도 한 번에 완성하지 않는다`]})]})}function gn(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(U,{...e})}):U(e)}var _n=e({default:()=>yn,frontmatter:()=>vn}),vn={title:`학부 C/C++ 프로젝트가 6년 후에도 가르치는 것`,growth:`Seedling`,topics:[`learning`,`fundamentals`,`career`,`education`],summary:`bptree·myshell·steganography. 학부 시절 C/C++ 프로젝트가 6년 후 프론트엔드 일에 어떻게 영향을 주나. fundamentals는 framework로 못 배운다.`,plantedAt:`2026-05-15`,lastTendedAt:`2026-05-21`};function W(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`6년 전 학부 코드`}),`
`,(0,r.jsx)(t.p,{children:`GitHub에 6년 전 학부 시절 C/C++ 프로젝트가 남아있다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`bptree`}),`: B+ Tree 직접 구현 (DB indexing)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`myshell`}),`: bash 흉내 shell 직접 구현 (OS process·signal)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`steganography`}),`: 이미지에 비밀 메시지 숨기는 알고리즘 (bit manipulation)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`PS_inha`}),`: 알고리즘 문제 풀이 (자료구조·DP)`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`지금은 프론트엔드 일을 한다. React·TypeScript·Next.js. `,(0,r.jsx)(t.strong,{children:`C++ 한 줄 안 쓴다`}),`. 그런데 이 학부 코드들이 지금도 영향을 준다.`]}),`
`,(0,r.jsx)(t.h2,{children:`영향 1 — 메모리·시간 직관`}),`
`,(0,r.jsxs)(t.p,{children:[`C에서 `,(0,r.jsx)(t.code,{children:`malloc`}),`/`,(0,r.jsx)(t.code,{children:`free`}),`를 직접 다뤘다. JavaScript는 GC가 다 해줘서 메모리 신경 안 쓰는 게 일반. 다만 어디서 메모리가 새고 어디서 GC pause가 발생하는지를 `,(0,r.jsx)(t.strong,{children:`느낌으로 안다`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`React에서 `,(0,r.jsx)(t.code,{children:`useMemo`}),`/`,(0,r.jsx)(t.code,{children:`useCallback`}),`을 언제 써야 하는지를 결정할 때, 메모리 직관이 있으면 "이건 매 렌더 새 객체 → 자식 컴포넌트 prop 변경 → 불필요한 리렌더"를 즉시 추론한다. 메모리 신경 안 쓴 사람은 `,(0,r.jsx)(t.code,{children:`useMemo`}),`를 "성능 마법"으로만 사용.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`bptree`}),`에서 디스크 page 단위로 데이터 다뤘던 경험은 frontend에서 `,(0,r.jsx)(t.strong,{children:`virtualization·페이지네이션 설계`}),`할 때 그대로 작동한다. 큰 리스트를 어떻게 chunk할지의 직관.`]}),`
`,(0,r.jsx)(t.h2,{children:`영향 2 — 시스템 사고`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`myshell`}),`에서 fork·exec·pipe·signal을 다뤘다. process가 어떻게 spawn되고 어떻게 통신하는지. signal handler가 어떻게 동작하는지.`]}),`
`,(0,r.jsx)(t.p,{children:`지금 graceful shutdown(SIGTERM 처리)이나 Worker thread, child process spawn 같은 영역을 만나면 학부 때 했던 것과 같은 모델이 동작한다. "process가 죽을 때 무슨 일이 일어나는지"를 머릿속에 그릴 수 있다.`}),`
`,(0,r.jsxs)(t.p,{children:[`framework는 추상화한다. 추상화 안에서 무슨 일이 일어나는지 모르면 디버깅을 framework에 의존한다. `,(0,r.jsx)(t.strong,{children:`fundamentals를 알면 추상화가 깨지는 자리도 보인다`}),`.`]}),`
`,(0,r.jsx)(t.h2,{children:`영향 3 — 알고리즘 직관`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`PS_inha`}),`에서 푼 알고리즘 문제 100개+가 머릿속에 패턴으로 남는다. "이 문제는 BFS·이건 DP·저건 greedy" 같은 분류.`]}),`
`,(0,r.jsx)(t.p,{children:`frontend에서 알고리즘 직접 쓸 일은 적다. 다만:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`대량 리스트 정렬·필터링 최적화`}),`
`,(0,r.jsx)(t.li,{children:`컴포넌트 트리 traversal`}),`
`,(0,r.jsx)(t.li,{children:`가상 DOM diff 이해`}),`
`,(0,r.jsx)(t.li,{children:`search·autocomplete`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`매번 알고리즘이 필요하다.`}),`
`,(0,r.jsx)(t.h2,{children:`영향 4 — 디버깅 인내력`}),`
`,(0,r.jsx)(t.p,{children:`C++에서 segfault·memory corruption 디버깅은 며칠씩 걸린다. gdb·valgrind를 며칠 돌려야 원인 찾음. 그 인내력이 frontend의 비동기·race condition·hydration mismatch 디버깅에도 그대로 작동.`}),`
`,(0,r.jsx)(t.p,{children:`"이건 한 시간 안에 끝날 거"라는 expectation이 아니라 "이건 며칠 걸릴 수 있다, 인내심 + 도구 + 가설 + 검증"으로 접근하는 mindset.`}),`
`,(0,r.jsx)(t.h2,{children:`다른 학부생에게`}),`
`,(0,r.jsx)(t.p,{children:`학부 시절 C/C++로 fundamentals를 한 번이라도 직접 만져본 사람과 안 만져본 사람의 6년 후 차이는 크다. 둘 다 프론트엔드 잘 할 수 있지만, 추상화가 깨지는 자리에서 갈라진다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`직접 만져본 사람: 추상화 아래로 내려가 디버깅`}),`
`,(0,r.jsx)(t.li,{children:`안 만져본 사람: 추상화를 "마법"으로 받아들이고 우회`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`학부 시절은 framework 학습이 아니라 `,(0,r.jsx)(t.strong,{children:`fundamentals를 직접 만져볼 마지막 자리`}),`다.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`학부 코드를 그대로 production에 가져가기`}),`: 학부 코드는 학습용. production 안전성·테스트·확장성 없음. 직접 가져가지 마라.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`fundamentals를 framework로 학습`}),`: React로 메모리 직관을 배우려 하면 너무 추상화돼 있어 잘 안 됨. 학부 시절 한 번이라도 C/C++.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`추상화 부정`}),`: framework·라이브러리는 가치 있다. fundamentals 안다고 매번 직접 구현하면 비효율.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`학부 코드 archive 안 함`}),`: 6년 전 코드가 메인 프로필에 그대로 노출. archive해서 흔적은 남기되 활성 작업과 분리.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"학부생이 잘했을 리 없다"는 자기 평가절하`}),`: 학부 코드는 학부 시점의 본인이 best였다. 부끄러워하지 말고 흔적으로 보존.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`framework는 framework가 가르치지만, `,(0,r.jsx)(t.strong,{children:`fundamentals는 fundamentals를 직접 만져야 배운다`}),`. 학부 시절은 그 마지막 자리다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/learning-repo-sandbox-value`,children:`/notes/learning-repo-sandbox-value`}),` — 학습 레포 일반론
`,(0,r.jsx)(t.a,{href:`/notes/archive-or-keep-old-repo`,children:`/notes/archive-or-keep-old-repo`}),` — 6년 전 코드 정리
`,(0,r.jsx)(t.a,{href:`/notes/typescript-false-safety`,children:`/notes/typescript-false-safety`}),` — 추상화가 가리는 것을 인식`]})]})}function yn(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(W,{...e})}):W(e)}var bn=e({default:()=>Sn,frontmatter:()=>xn}),xn={title:`콘텐츠 = 파일 — MDX + Vite의 자동 확장 패턴`,growth:`Evergreen`,topics:[`frontend`,`mdx`,`vite`,`content-architecture`],summary:`콘텐츠 한 개 = MDX 파일 한 개. import.meta.glob으로 자동 인덱싱하면 코드 수정 없이 사이트가 확장된다.`,plantedAt:`2026-05-15`,lastTendedAt:`2026-05-30`};function G(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`패턴`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`const noteModules = import.meta.glob('../content/notes/*.mdx', { eager: true });

export const getAllNotes = () =>
  Object.entries(noteModules).map(([path, mod]) => ({
    slug: extractSlug(path),
    ...(mod.frontmatter || {}),
    Component: mod.default,
  }));
`})}),`
`,(0,r.jsx)(t.p,{children:`새 노트 = 새 MDX 파일 1개. 컴포넌트·라우팅·인덱스 수정 0건.`}),`
`,(0,r.jsx)(t.h2,{children:`왜 이게 강한가`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`콘텐츠 작성 부담 ↓`}),`: 마크다운 + frontmatter만 알면 된다`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`재사용 가능 컴포넌트 임베드`}),`: 본문 안에 차트·다이어그램·인터랙티브 도식`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`빌드 타임 정적 분석`}),`: Fuse.js 검색 인덱스도 빌드 시 한 번에`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Git diff가 깔끔`}),`: 콘텐츠 변경이 코드 변경과 섞이지 않음`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`import.meta.glob`}),`은 빌드 시 평가. dev에서 HMR로 잘 따라오지만 production은 dist에 박힘.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`eager: true`}),`로 모든 모듈 즉시 import → 콘텐츠 100개+ 되면 번들 크기 ↑. lazy 옵션 검토.`]}),`
`,(0,r.jsx)(t.li,{children:`frontmatter 스키마 통일 안 하면 컴포넌트에서 옵셔널 체이닝 지옥.`}),`
`,(0,r.jsx)(t.li,{children:`빌드 시 frontmatter 검증 누락 → 누락된 필드가 production에서야 발견.`}),`
`,(0,r.jsx)(t.li,{children:`슬러그 변경 시 cross-link이 깨짐. 슬러그는 한 번 정하면 안 바꾸는 게 안전.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`lazy 옵션으로 번들 분할`}),`
`,(0,r.jsxs)(t.p,{children:[`콘텐츠가 100개+ 되면 `,(0,r.jsx)(t.code,{children:`eager: false`}),`로 전환.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`const noteModules = import.meta.glob('../content/notes/*.mdx');
// eager 없음 → 각 노트가 동적 import로 코드 분할됨

export const loadNote = async (slug) => {
  const path = \`../content/notes/\${slug}.mdx\`;
  const mod = await noteModules[path]();
  return { slug, ...(mod.frontmatter || {}), Component: mod.default };
};
`})}),`
`,(0,r.jsx)(t.p,{children:`라우터의 lazy load와 결합하면 첫 페이지 로드 시 모든 노트를 import하지 않게 된다.`}),`
`,(0,r.jsx)(t.p,{children:`대가: 라우팅 시 약간의 지연 (각 노트 첫 방문 시 fetch). 단, 빌드는 가벼워지고 첫 페이지 번들이 작아진다.`}),`
`,(0,r.jsx)(t.h2,{children:`한계와 전환 시그널`}),`
`,(0,r.jsx)(t.p,{children:`콘텐츠 규모별 적정 도구:`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`규모`}),(0,r.jsx)(t.th,{children:`도구`}),(0,r.jsx)(t.th,{children:`빌드 시간`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`~100편`}),(0,r.jsx)(t.td,{children:`Vite + MDX + eager`}),(0,r.jsx)(t.td,{children:`< 5초`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`100-500편`}),(0,r.jsx)(t.td,{children:`Vite + MDX + lazy`}),(0,r.jsx)(t.td,{children:`< 15초`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`500-2000편`}),(0,r.jsx)(t.td,{children:`Next.js / Astro (SSG)`}),(0,r.jsx)(t.td,{children:`30초-2분`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`2000편+`}),(0,r.jsx)(t.td,{children:`Headless CMS + ISR`}),(0,r.jsx)(t.td,{children:`점진 빌드`})]})]})]}),`
`,(0,r.jsx)(t.p,{children:`전환 시그널:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`빌드 시간 > 1분`}),`: 매 변경마다 1분 기다리면 dev loop이 깨진다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`frontmatter 검증 누락 사고 자주`}),`: 정적 타입 + schema 검증이 필요한 단계.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`콘텐츠 작성자 ≠ 개발자`}),`: 비개발자도 작성하면 CMS 인터페이스 필요.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/write-why-not-what`,children:`/notes/write-why-not-what`}),` — 파일 단위 콘텐츠는 "왜"를 frontmatter와 본문에 함께 담기 좋다
`,(0,r.jsx)(t.a,{href:`/notes/last-tended-signal`,children:`/notes/last-tended-signal`}),` — frontmatter lastTendedAt으로 파일 기반 사이트가 살아있음 신호 만들기
`,(0,r.jsx)(t.a,{href:`/notes/vite-manual-chunks`,children:`/notes/vite-manual-chunks`}),` — content/* 디렉토리별 청크 분리로 캐시 효율 ↑
`,(0,r.jsx)(t.a,{href:`/cases/mdx-content-pipeline`,children:`/cases/mdx-content-pipeline`}),` — 이 패턴으로 만든 콘텐츠 파이프라인 케이스`]})]})}function Sn(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(G,{...e})}):G(e)}var Cn=e({default:()=>Tn,frontmatter:()=>wn}),wn={title:`N+1 쿼리 — ORM이 만들고 ORM이 못 잡는 함정`,growth:`Seedling`,topics:[`database`,`backend`,`performance`,`orm`],summary:`1개의 쿼리로 끝날 일이 N+1번 도는 패턴. ORM의 추상화가 자동으로 만들고, 같은 ORM이 자동으로 못 잡는다. detect는 도구로, fix는 패턴으로.`,plantedAt:`2026-04-30`,lastTendedAt:`2026-05-29`};function K(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — 1번의 의도가 N+1번이 되는 순간`}),`
`,(0,r.jsx)(t.p,{children:`ORM(Prisma·TypeORM·SQLAlchemy 등)으로 다음 코드를 작성한다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`const orders = await prisma.order.findMany({ where: { status: 'paid' } });
for (const order of orders) {
  const user = await prisma.user.findUnique({ where: { id: order.userId } });
  console.log(user.email);
}
`})}),`
`,(0,r.jsx)(t.p,{children:`의도: "paid 주문들과 각 주문의 사용자 이메일을 가져온다." 한 번의 join으로 끝날 일이다.`}),`
`,(0,r.jsxs)(t.p,{children:[`실제 실행: orders 1번 + user N번 = `,(0,r.jsx)(t.strong,{children:`N+1 쿼리`}),`. orders가 100건이면 101번의 DB roundtrip. 1000건이면 1001번. p99 latency가 비선형으로 폭증한다.`]}),`
`,(0,r.jsx)(t.h2,{children:`왜 못 보는가`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`코드는 깔끔하다. 명령형 for 루프 + ORM 호출`}),`
`,(0,r.jsx)(t.li,{children:`로컬 개발 DB는 작아서 N+1이 빨라 보임 (100ms도 안 걸림)`}),`
`,(0,r.jsx)(t.li,{children:`단위 테스트는 mock이라 쿼리 수 검증 안 함`}),`
`,(0,r.jsx)(t.li,{children:`production에서 100ms × 1000건 = 100초. 이때 발견`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`detect — 도구로`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`ORM 쿼리 로깅`}),`: 한 요청 당 쿼리 수 카운트`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`APM trace`}),` (Datadog·Sentry Performance): 같은 endpoint의 쿼리 수 비교`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`테스트 assertion`}),`: "이 endpoint는 N건 가져와도 5개 이하 쿼리"`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`EXPLAIN ANALYZE`}),`: ORM이 생성한 SQL 직접 확인`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`도구 없이 본 코드만 읽어서 N+1을 잡는 건 매우 어렵다. 추상화 안에 숨어있다.`}),`
`,(0,r.jsx)(t.h2,{children:`fix — 패턴으로`}),`
`,(0,r.jsx)(t.h3,{children:`패턴 1: include / select (eager loading)`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`const orders = await prisma.order.findMany({
  where: { status: 'paid' },
  include: { user: { select: { email: true } } },
});
`})}),`
`,(0,r.jsx)(t.p,{children:`한 번의 join으로 끝남.`}),`
`,(0,r.jsx)(t.h3,{children:`패턴 2: in 절 일괄`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`const orders = await prisma.order.findMany({ where: { status: 'paid' } });
const userIds = orders.map(o => o.userId);
const users = await prisma.user.findMany({ where: { id: { in: userIds } } });
`})}),`
`,(0,r.jsx)(t.p,{children:`2번의 쿼리. join이 어려운 케이스에서 활용.`}),`
`,(0,r.jsx)(t.h3,{children:`패턴 3: dataloader (GraphQL·복잡한 graph)`}),`
`,(0,r.jsx)(t.p,{children:`같은 요청 내에서 자동 batching. graphql 서버에서 흔히 씀.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`include로 끝났다고 믿기`}),`: include는 한 단계만. user → posts → comments까지 들어가면 또 N+1 가능.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`map 안에 await 다 풀어버리기`}),`: `,(0,r.jsx)(t.code,{children:`await Promise.all(orders.map(...))`}),`는 여전히 N개 쿼리. 병렬일 뿐 1개로 줄지 않음.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`production에서만 재현`}),`: 로컬 DB는 작아서 안 드러남. staging에 production-like 데이터 필요.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`fix 후 EXPLAIN 안 봄`}),`: ORM이 만든 join이 inefficient한 경우. 큰 테이블끼리 join하면 index 안 맞아 더 느릴 수 있음.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`회귀 방지 — 쿼리 수를 테스트로 고정`}),`
`,(0,r.jsx)(t.p,{children:`N+1은 한 번 고쳐도 다음 PR에서 쉽게 재발한다. 누가 include를 빼거나 루프 안에 쿼리를 추가하면 조용히 N+1로 돌아온다. 코드 리뷰로는 안 잡힌다(추상화에 숨어서).`}),`
`,(0,r.jsxs)(t.p,{children:[`→ `,(0,r.jsx)(t.strong,{children:`쿼리 수를 assertion으로 고정`}),`한다.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`test('주문 목록은 쿼리 2개 이하', async () => {
  const queries = await captureQueries(() =>
    getOrdersWithUsers({ status: 'paid' })
  );
  expect(queries.length).toBeLessThanOrEqual(2);
});
`})}),`
`,(0,r.jsx)(t.p,{children:`이게 flaky test 진단과 짝이다 — 쿼리 수 테스트가 없으면 N+1 회귀가 "가끔 느린 endpoint"라는 flaky 증상으로만 나타나고 원인 진단이 어렵다. 결정론적 쿼리 수 검증이 회귀를 PR에서 막는다.`}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`ORM은 N+1을 자동으로 만들고 자동으로 못 잡는다. `,(0,r.jsx)(t.strong,{children:`detect는 도구, fix는 패턴`}),`으로 따로 도입해야 한다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/incident-monitoring-gap`,children:`/notes/incident-monitoring-gap`}),` — production에서만 드러나는 성능 결함
`,(0,r.jsx)(t.a,{href:`/notes/typescript-false-safety`,children:`/notes/typescript-false-safety`}),` — 추상화가 만드는 거짓 안전감의 다른 예
`,(0,r.jsx)(t.a,{href:`/notes/postgres-transaction-isolation`,children:`/notes/postgres-transaction-isolation`}),` — ORM 아래 DB 동작을 이해하기
`,(0,r.jsx)(t.a,{href:`/notes/flaky-test-diagnosis`,children:`/notes/flaky-test-diagnosis`}),` — 쿼리 수 회귀가 flaky 증상으로 나타날 때
`,(0,r.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — 쿼리 수를 결정론적으로 검증`]})]})}function Tn(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(K,{...e})}):K(e)}var En=e({default:()=>On,frontmatter:()=>Dn}),Dn={title:`Note 라운드 패턴 — 신규 → cross-link → 함정 → 다음 라운드`,growth:`Seedling`,topics:[`writing`,`digital-garden`,`content-system`,`sustained-delivery`],summary:`노트 50편을 모은 게 한 번에 일어난 게 아니다. 신규 양산 → 누적 후 cross-link → 함정 섹션 보강 → 다음 라운드의 4단계 사이클이 반복됐다.`,plantedAt:`2026-05-26`,lastTendedAt:`2026-05-26`};function q(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`라운드라는 단위`}),`
`,(0,r.jsxs)(t.p,{children:[`디지털 가든을 운영하다 보니 자연스럽게 `,(0,r.jsx)(t.strong,{children:`라운드`}),`라는 단위가 생겼다.`]}),`
`,(0,r.jsx)(t.p,{children:`라운드 1 = 신규 노트 N편 양산 (토픽 발산)
라운드 2 = 누적 후 cross-link + 함정 보강 + 신규 일부 (수렴 + 발산 일부)
라운드 3 = ... (예정)`}),`
`,(0,r.jsx)(t.p,{children:`5/20 커밋 메시지가 정확히 이걸 보여준다.`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`feat(content): Notes 라운드 2 — 16편 cross-link + 4편 함정 + 3편 신규`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`16편 cross-link, 4편 함정, 3편 신규. 라운드 2의 구성비가 이렇다.`}),`
`,(0,r.jsx)(t.h2,{children:`왜 라운드인가`}),`
`,(0,r.jsxs)(t.p,{children:[`매번 신규만 양산하면 가든이 `,(0,r.jsx)(t.strong,{children:`노이즈`}),`가 된다. 글이 50편이어도 서로 연결 안 되면 50개의 외딴 섬이다.`]}),`
`,(0,r.jsxs)(t.p,{children:[`매번 cross-link만 하면 `,(0,r.jsx)(t.strong,{children:`누적이 멈춘다`}),`. 새 토픽이 안 들어와서 가든이 정체된다.`]}),`
`,(0,r.jsxs)(t.p,{children:[`라운드는 `,(0,r.jsx)(t.strong,{children:`양산 ↔ 수렴`}),`의 사이클을 명시적으로 만든다. 신규 N편 → 누적 후 한 번에 cross-link → 다시 신규 N편.`]}),`
`,(0,r.jsx)(t.h2,{children:`단계 1 — 신규 양산 (발산)`}),`
`,(0,r.jsx)(t.p,{children:`세션 회고에서 노트 후보를 뽑는다. 한 세션에서 5-10편이 자연스럽게 나온다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`짧은 인사이트 (1-2 문단)`}),`
`,(0,r.jsx)(t.li,{children:`함정 섹션 비워두기 (라운드 N+1에서 채움)`}),`
`,(0,r.jsx)(t.li,{children:`cross-link 안 함 (라운드 N+1에서 일괄)`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`이 단계에서 cross-link까지 하려고 하면 양산이 멈춘다. `,(0,r.jsx)(t.strong,{children:`양산과 연결을 한 단계에서 하지 않는다`}),`.`]}),`
`,(0,r.jsx)(t.h2,{children:`단계 2 — 누적 후 cross-link (수렴)`}),`
`,(0,r.jsx)(t.p,{children:`신규 30-50편이 쌓이면 한 번에 cross-link 한다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`각 노트의 "관련" 섹션에 3-5개 링크 추가`}),`
`,(0,r.jsx)(t.li,{children:`양방향 (A → B 링크하면 B → A도)`}),`
`,(0,r.jsx)(t.li,{children:`같은 토픽 노트끼리 클러스터 형성`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`이 단계는 `,(0,r.jsx)(t.strong,{children:`신규 작성보다 시간이 더 들 수 있다`}),`. 50편의 노트를 다 읽고 의미 연결을 판단해야 해서.`]}),`
`,(0,r.jsx)(t.h2,{children:`단계 3 — 함정 섹션 보강`}),`
`,(0,r.jsx)(t.p,{children:`라운드 1에서 비워둔 함정 섹션을 채운다.`}),`
`,(0,r.jsxs)(t.p,{children:[`함정은 `,(0,r.jsx)(t.strong,{children:`신규 작성 시점에는 잘 안 떠오른다`}),`. 그 토픽으로 한 번 더 부딪힌 후에야 함정이 보인다. 그래서 라운드 2-3에서 채우는 게 자연스럽다.`]}),`
`,(0,r.jsx)(t.p,{children:`함정 보강이 cross-link보다 가치가 큰 경우가 많다. 함정은 다른 사람이 같은 함정 안 빠지게 하는 신호다.`}),`
`,(0,r.jsx)(t.h2,{children:`단계 4 — 다음 라운드 시드`}),`
`,(0,r.jsx)(t.p,{children:`라운드 2 끝에서 라운드 3의 시드를 본다. 어떤 노트가 함정 섹션이 비었는지, 어떤 클러스터가 약한지.`}),`
`,(0,r.jsx)(t.p,{children:`이게 다음 세션의 작업 입력이 된다. 라운드 3가 시작될 때 무엇을 할지가 라운드 2 끝에서 정해진다.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`신규 양산에 cross-link 끼우기`}),`: 양산 속도가 절반 이하로 떨어진다. 단계 분리.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`cross-link 라운드를 영원히 미루기`}),`: 신규 30편이 50편이 되고 100편이 돼도 cross-link 안 하면 가든이 노이즈가 된다. 라운드 단위로 강제.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`함정 섹션을 매번 비워둠`}),`: 함정 보강 라운드가 안 오면 함정 칸이 영원히 빈다. 라운드 N+1에서 반드시 채우는 약속.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`라운드 N이 너무 큼`}),`: 신규 50편이 누적되면 cross-link 라운드가 1주일짜리 작업이 된다. 20-30편이 적정.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`라운드 끝났는데 다음 시드 안 봄`}),`: 라운드 2 끝나고 라운드 3가 안 오는 이유. 끝에서 시드를 봐야 자연스럽게 이어진다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`디지털 가든은 매 글을 잘 쓰는 게 아니라 `,(0,r.jsx)(t.strong,{children:`라운드를 잘 운영하는 것`}),`이다. 신규 → cross-link → 함정 → 다음 라운드의 사이클이 가든을 살아있게 한다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/digital-garden-vs-blog`,children:`/notes/digital-garden-vs-blog`}),` — 가든과 블로그의 차이
`,(0,r.jsx)(t.a,{href:`/notes/last-tended-signal`,children:`/notes/last-tended-signal`}),` — 다듬은 흔적
`,(0,r.jsx)(t.a,{href:`/notes/mdx-content-as-files`,children:`/notes/mdx-content-as-files`}),` — 콘텐츠를 파일로
`,(0,r.jsx)(t.a,{href:`/cases/content-seed-system`,children:`/cases/content-seed-system`}),` — 라운드로 콘텐츠를 채운 케이스`]})]})}function On(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(q,{...e})}):q(e)}var kn=e({default:()=>jn,frontmatter:()=>An}),An={title:`노션을 lightweight backend로 — DB 7개로 만든 무료 백엔드`,growth:`Seedling`,topics:[`notion`,`backend`,`side-project`,`automation`],summary:`직접 DB·서버를 띄우지 않고 노션 API + DB로 backend를 대체. 무료·시각화·모바일 앱이 따라오지만 PK·쿼리·rate limit 한계를 안다.`,plantedAt:`2026-05-15`,lastTendedAt:`2026-05-21`};function J(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`언제 쓰나`}),`
`,(0,r.jsx)(t.p,{children:`개인 프로젝트, side project, prototype에서 백엔드 비용을 줄이고 싶을 때.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`작은 데이터셋 (수천 행 이하)`}),`
`,(0,r.jsx)(t.li,{children:`읽기보다 쓰기 적음 (배치 cron이 적합)`}),`
`,(0,r.jsx)(t.li,{children:`UI를 직접 안 만들어도 됨 (노션이 자동)`}),`
`,(0,r.jsx)(t.li,{children:`모바일 접근 필요 (노션 앱 자동)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`production scale, real-time, 복잡한 쿼리는 부적합.`}),`
`,(0,r.jsx)(t.h2,{children:`7-DB 설계 예시`}),`
`,(0,r.jsx)(t.p,{children:`홈레이더의 경우 다음 7개 DB로 나눔.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Apartments_{REGION}`}),` × 5: 지역별 단지 정보 (정적)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`PriceSnapshots_{YEAR}`}),`: 가격 시계열 (year-partition)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`LocationStats`}),`: 단지별 입지 메타 (한 번 계산 후 cache)`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`DB를 나누는 이유:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`노션 DB 1개의 행 수 한계 (~1만 행 넘으면 UI가 느림)`}),`
`,(0,r.jsx)(t.li,{children:`region·year로 분리하면 쿼리 비용 ↓`}),`
`,(0,r.jsx)(t.li,{children:`한 DB 깨져도 나머지 영향 0`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`API + axios 패턴`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

await notion.pages.create({
  parent: { database_id: dbId },
  properties: {
    name: { title: [{ text: { content: '단지명' } }] },
    price: { number: 95000 },
  },
});
`})}),`
`,(0,r.jsx)(t.p,{children:`rate limit이 있다. 평균 3 req/sec, burst 가능. bottleneck으로 throttle.`}),`
`,(0,r.jsx)(t.h2,{children:`한계`}),`
`,(0,r.jsx)(t.h3,{children:`PK·FK 없음`}),`
`,(0,r.jsx)(t.p,{children:`노션 DB는 relational DB가 아니다. PK 강제 없음. 직접 unique constraint 검증해야.`}),`
`,(0,r.jsx)(t.p,{children:`홈레이더 Phase 2.5 hotfix는 이 한계 때문이었음. 같은 단지가 두 번 insert되는 race.`}),`
`,(0,r.jsxs)(t.p,{children:[`처방: insert 전 `,(0,r.jsx)(t.code,{children:`databases.query({ filter: { property: 'name', equals: ... } })`}),`로 존재 확인. 또는 unique key를 page id로 캐싱.`]}),`
`,(0,r.jsx)(t.h3,{children:`쿼리 약함`}),`
`,(0,r.jsx)(t.p,{children:`SQL JOIN 없음. region별 평균 가격 같은 집계는 application 단에서 처리. 노션 view의 필터·정렬은 가벼운 UI 용이라 데이터 처리는 코드에서.`}),`
`,(0,r.jsx)(t.h3,{children:`Rate limit이 빌드 시간 결정`}),`
`,(0,r.jsx)(t.p,{children:`API 3 req/sec → 1000개 행 처리에 5-6분. cron 자동화면 OK, 동기 처리면 느림.`}),`
`,(0,r.jsx)(t.h3,{children:`노션 schema 변경 시 코드 깨짐`}),`
`,(0,r.jsxs)(t.p,{children:[`property 이름 바뀌면 모든 코드 동시 수정. `,(0,r.jsx)(t.strong,{children:`노션 schema를 source of truth로 두지 말고 코드 schema를 source로`}),`. setup script가 노션 DB를 만들도록.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`PK 없다고 dedupe 안 함`}),`: 같은 행이 매주 새로 들어옴. unique 검증 필수.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`rate limit 무시`}),`: 429 받으면 retry 안 함 → 데이터 누락. bottleneck + retry.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`노션 API key를 코드에 hardcode`}),`: env var + GitHub Secrets.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`노션 UI에서 schema 변경`}),`: 코드가 모르는 사이 깨짐. schema 변경은 코드 → API로만.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`DB 1개에 10만 행 쌓기`}),`: 노션 UI가 느려짐. year/region partition.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`삭제된 page도 남음`}),`: 노션 page 삭제는 trash로 이동. archived 상태 검증 필요.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`노션은 backend 대체재가 아니라 `,(0,r.jsx)(t.strong,{children:`백엔드 비용을 0원으로 만드는 도구`}),`다. 한계를 알고 쓰면 side project 인프라가 압도적으로 가벼워진다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/public-api-integration-patterns`,children:`/notes/public-api-integration-patterns`}),` — 외부 API 통합 시 같은 rate limit 한계
`,(0,r.jsx)(t.a,{href:`/notes/incrementally-correct`,children:`/notes/incrementally-correct`}),` — Phase 단위로 작게 쌓는 운영 철학
`,(0,r.jsx)(t.a,{href:`/notes/typescript-false-safety`,children:`/notes/typescript-false-safety`}),` — 외부 API schema도 컴파일러가 못 봄`]})]})}function jn(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(J,{...e})}):J(e)}var Mn=e({default:()=>Pn,frontmatter:()=>Nn}),Nn={title:`npm 패키지 출시 체크리스트 — bin·files·engines·dry-run`,growth:`Budding`,topics:[`npm`,`package`,`publishing`,`swe`],summary:`npm publish 한 번이 영구다. bin 경로·files glob·engines·--dry-run·SemVer 6가지를 사전 검증. 실수 한 줄이 100명의 install error를 만든다.`,plantedAt:`2026-05-10`,lastTendedAt:`2026-05-29`};function Y(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — publish는 영구다`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`npm publish`}),` 한 번이 영구다. unpublish는 24시간 안에만 가능, 그 후엔 다른 버전으로만 덮을 수 있다.`]}),`
`,(0,r.jsx)(t.p,{children:`문제는 패키지가 깨진 상태로 publish되면:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`모든 `,(0,r.jsx)(t.code,{children:`npm install <pkg>`}),` 실패`]}),`
`,(0,r.jsx)(t.li,{children:`다른 사람 CI 깨짐`}),`
`,(0,r.jsx)(t.li,{children:`npm registry에 영구히 stale 버전 남음`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`publish 전 6가지를 사전 검증하면 거의 다 막힌다.`}),`
`,(0,r.jsxs)(t.h2,{children:[`1. `,(0,r.jsx)(t.code,{children:`package.json`}),` 필수 필드`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-json`,children:`{
  "name": "my-pkg",
  "version": "1.0.0",
  "description": "...",
  "main": "index.js",
  "bin": "cli.js",
  "files": ["index.js", "cli.js", "*.json"],
  "engines": { "node": ">=18" },
  "repository": {
    "type": "git",
    "url": "https://github.com/<user>/<repo>.git"
  },
  "license": "MIT",
  "keywords": ["..."]
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`repository`}),`가 빠지면 npm 페이지에 GitHub 링크 안 보임. 신뢰도 ↓.`]}),`
`,(0,r.jsxs)(t.h2,{children:[`2. `,(0,r.jsx)(t.code,{children:`bin`}),` 경로 검증`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-json`,children:`"bin": "cli.js"
`})}),`
`,(0,r.jsx)(t.p,{children:`또는 명시적 이름:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-json`,children:`"bin": { "my-cli": "cli.js" }
`})}),`
`,(0,r.jsxs)(t.p,{children:[`함정: relative path에 `,(0,r.jsx)(t.code,{children:`./`}),` 붙이면 npm이 자동으로 제거한다 (warning). 그냥 `,(0,r.jsx)(t.code,{children:`cli.js`}),`만.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`cli.js`}),` 자체에 shebang 필수:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`#!/usr/bin/env node
`})}),`
`,(0,r.jsxs)(t.p,{children:[`shebang 없으면 직접 실행 안 됨. `,(0,r.jsx)(t.code,{children:`chmod +x cli.js`}),`도 권장.`]}),`
`,(0,r.jsxs)(t.h2,{children:[`3. `,(0,r.jsx)(t.code,{children:`files`}),` glob — publish될 파일`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-json`,children:`"files": ["cli.js", "index.js", "info.json", "README.md"]
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`files`}),`가 없으면 모든 파일 publish됨 (node_modules 제외). 의도하지 않은 파일이 들어가면 패키지 size 폭증.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`.npmignore`}),` 또는 `,(0,r.jsx)(t.code,{children:`.gitignore`}),`로 제외 가능하지만, `,(0,r.jsxs)(t.strong,{children:[`whitelist(`,(0,r.jsx)(t.code,{children:`files`}),`)가 blacklist보다 안전`]}),`.`]}),`
`,(0,r.jsxs)(t.h2,{children:[`4. `,(0,r.jsx)(t.code,{children:`--dry-run`}),`으로 사전 검증`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`npm publish --dry-run
`})}),`
`,(0,r.jsx)(t.p,{children:`publish 안 하고 어떤 파일이 들어갈지 출력. 다음을 확인:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`파일 목록이 의도와 일치`}),`
`,(0,r.jsx)(t.li,{children:`총 size가 합리적 (5MB 이하 권장)`}),`
`,(0,r.jsxs)(t.li,{children:[`warning이 없음 (`,(0,r.jsx)(t.code,{children:`bin`}),` 경로 etc)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`package.json`}),` field 인식`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`이걸 항상 본 publish 전에 실행. 한 줄 안전망.`}),`
`,(0,r.jsxs)(t.h2,{children:[`5. `,(0,r.jsx)(t.code,{children:`engines`}),` — Node 버전`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-json`,children:`"engines": { "node": ">=18" }
`})}),`
`,(0,r.jsx)(t.p,{children:`사용자가 구 Node로 install 시 경고. 안 적으면 깨진 후에 사용자가 깨달음.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`npm`}),` 버전도 명시 가능:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-json`,children:`"engines": { "node": ">=18", "npm": ">=9" }
`})}),`
`,(0,r.jsx)(t.h2,{children:`6. SemVer — major/minor/patch`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`1.0.0 → 1.0.1   patch (bug fix, backward compatible)
1.0.0 → 1.1.0   minor (new feature, backward compatible)
1.0.0 → 2.0.0   major (breaking change)
`})}),`
`,(0,r.jsxs)(t.p,{children:[`major bump 안 하고 breaking change publish하면 모든 caller의 `,(0,r.jsx)(t.code,{children:`^1.x.x`}),` 빌드가 깨짐. `,(0,r.jsx)(t.strong,{children:`breaking은 항상 major`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`npm version patch|minor|major`}),`로 자동.`]}),`
`,(0,r.jsx)(t.h2,{children:`출시 흐름`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`# 1. 사전 검증
npm test
npm run lint
npm publish --dry-run

# 2. 버전 bump
npm version minor

# 3. publish
npm publish

# 4. tag push (npm version이 자동 tag 생성)
git push --follow-tags
`})}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`publish 후 unpublish 불가 (24h 후)`}),`: 잘못 publish하면 새 버전으로 fix만 가능.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`public default`}),`: scope 없는 패키지는 public이 기본. private 의도면 `,(0,r.jsx)(t.code,{children:`--access restricted`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`2FA 설정 안 함`}),`: npm 계정 탈취 시 영향 큼. `,(0,r.jsx)(t.code,{children:`--auth-type web`}),` 2FA 강제.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`README 누락`}),`: npm 페이지가 빈 칸. README.md를 `,(0,r.jsx)(t.code,{children:`files`}),`에 포함.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`CHANGELOG 없음`}),`: 사용자가 무엇이 바뀌었는지 모름. 매 release마다 짧게라도.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.code,{children:`prepublishOnly`}),` script 없음`]}),`: build·test·lint를 publish 전 자동 수행. 깨진 빌드 publish 방지.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`prepublishOnly 패턴`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-json`,children:`"scripts": {
  "prepublishOnly": "npm test && npm run build"
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`npm publish`}),` 호출 시 자동 실행. 깨지면 publish 중단.`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`npm publish는 `,(0,r.jsx)(t.strong,{children:`영구 동작`}),`이다. 6가지 사전 검증(필수 필드·bin·files·dry-run·engines·SemVer)을 매번 통과하면 깨진 publish가 거의 사라진다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/npx-name-business-card`,children:`/notes/npx-name-business-card`}),` — npm 패키지로 명함 만들기
`,(0,r.jsx)(t.a,{href:`/notes/dead-dependency-hidden-cost`,children:`/notes/dead-dependency-hidden-cost`}),` — 안 쓰는 의존성을 publish하면 사용자 install 비용
`,(0,r.jsx)(t.a,{href:`/notes/ci-cache-incremental-builds`,children:`/notes/ci-cache-incremental-builds`}),` — prepublishOnly의 CI 시간 영향`]})]})}function Pn(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Y,{...e})}):Y(e)}var Fn=e({default:()=>Ln,frontmatter:()=>In}),In={title:`npx <name> — SWE 첫 인상의 새 형태`,growth:`Budding`,topics:[`career`,`npm`,`branding`,`side-project`],summary:"명함을 npm 패키지로. `npx justinjeong` 한 줄이 GitHub 링크보다 강한 인상을 준다. 터미널이 만남의 자리인 SWE 사이에서.",plantedAt:`2026-05-10`,lastTendedAt:`2026-05-29`};function X(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`아이디어 — 명함이 명령어`}),`
`,(0,r.jsx)(t.p,{children:`평범한 자기소개: "github.com/justinjeong5 보세요."`}),`
`,(0,r.jsx)(t.p,{children:`다른 자기소개:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`npx justinjeong
`})}),`
`,(0,r.jsx)(t.p,{children:`한 줄 실행. 터미널에 ANSI box로 자기 소개·역할·연락처가 펼쳐진다.`}),`
`,(0,r.jsxs)(t.p,{children:[`이게 왜 더 강한가? `,(0,r.jsx)(t.strong,{children:`SWE는 터미널에서 만난다`}),`. 이력서·LinkedIn보다 터미널 명령어가 자연스러운 자리.`]}),`
`,(0,r.jsx)(t.h2,{children:`어떻게 만드나`}),`
`,(0,r.jsx)(t.h3,{children:`1. npm 패키지로 등록`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`package.json`}),`에 `,(0,r.jsx)(t.code,{children:`bin`}),` field 추가:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-json`,children:`{
  "name": "justinjeong",
  "version": "2.0.0",
  "bin": "cli.js",
  "files": ["cli.js", "index.js", "info.json"]
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`cli.js`}),`는 #!/usr/bin/env node shebang + 카드 출력 로직.`]}),`
`,(0,r.jsx)(t.h3,{children:`2. 카드 렌더링`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`import chalk from 'chalk';
import boxen from 'boxen';
import info from './info.json';

const card = \`\${chalk.bold(info.name)}
\${chalk.dim(info.role)}

\${chalk.cyan('github')}  \${info.github}
\${chalk.cyan('email')}   \${info.email}
\${chalk.cyan('site')}    \${info.site}\`;

console.log(boxen(card, { padding: 1, borderStyle: 'round' }));
`})}),`
`,(0,r.jsx)(t.p,{children:`chalk·boxen 조합으로 색상 + 박스. 30줄 안 넘는다.`}),`
`,(0,r.jsx)(t.h3,{children:`3. npm publish`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`npm publish --dry-run  # 검증
npm publish            # 발행
`})}),`
`,(0,r.jsxs)(t.p,{children:[`이름이 username과 같으면 (`,(0,r.jsx)(t.code,{children:`npm install -g justinjeong`}),` 또는 `,(0,r.jsx)(t.code,{children:`npx justinjeong`}),`) 기억하기 쉬움.`]}),`
`,(0,r.jsx)(t.h2,{children:`왜 효과 있나`}),`
`,(0,r.jsx)(t.h3,{children:`1. 강한 첫 인상`}),`
`,(0,r.jsx)(t.p,{children:`"명함 카드 깔끔하다"는 동료들이 두 번째 만남에서 기억한다. 일반 LinkedIn 링크는 그렇게 기억 안 됨.`}),`
`,(0,r.jsx)(t.h3,{children:`2. proof-of-work`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`npx <name>`}),`이 동작한다는 것 자체가 npm publish·CLI 작성·color/box 다룰 줄 안다는 증명. 코드 한 줄 안 보여줘도 capability 신호.`]}),`
`,(0,r.jsx)(t.h3,{children:`3. 갱신 가능`}),`
`,(0,r.jsxs)(t.p,{children:[`회사·역할·기술 스택이 바뀌면 `,(0,r.jsx)(t.code,{children:`npm publish`}),` 한 번이면 모든 사용자에게 최신본 전달. 정적 PDF 명함은 갱신 어려움.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`이름 충돌`}),`: npm은 first-come-first-served. 이미 점유된 이름이면 다른 이름 또는 scope (`,(0,r.jsx)(t.code,{children:`@user/card`}),`).`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`maintenance burden`}),`: 한 번 publish하면 영구. 회사·역할 안 갱신하면 stale.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`터미널 안 쓰는 사람에겐 무용`}),`: 채용 담당자 일부는 터미널 미사용. 그들에겐 일반 portfolio site가 1순위.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`chalk v5 ESM-only`}),`: chalk@4까지는 CommonJS. v5+는 ESM. package.json `,(0,r.jsx)(t.code,{children:`type`}),` 일치 필요.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`이모지·유니코드 깨짐`}),`: Windows cmd·일부 SSH 세션에서 ANSI 일부 안 됨. fallback ASCII art 또는 색상 없는 plain.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`package size 너무 큼`}),`: chalk·boxen만 써도 의존성 적당. lodash·moment 같은 무거운 라이브러리 의존 X.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`운영`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`매 분기 한 번 `,(0,r.jsx)(t.code,{children:`npm publish`}),` (역할·tagline 갱신)`]}),`
`,(0,r.jsx)(t.li,{children:`README에도 카드 미리보기 (스크린샷 또는 ANSI demo)`}),`
`,(0,r.jsx)(t.li,{children:`GitHub Action으로 npm publish 자동화 (tag push 시)`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`명함은 시각 자료가 아니라 `,(0,r.jsx)(t.strong,{children:`터미널에서 실행되는 객체`}),`일 수 있다. `,(0,r.jsx)(t.code,{children:`npx <name>`}),` 한 줄이 portfolio 링크 10개보다 강하다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/chalk-boxen-terminal-card`,children:`/notes/chalk-boxen-terminal-card`}),` — 카드 시각화 디테일
`,(0,r.jsx)(t.a,{href:`/notes/npm-publish-checklist`,children:`/notes/npm-publish-checklist`}),` — silent fail 방지
`,(0,r.jsx)(t.a,{href:`/notes/recruiter-10-seconds`,children:`/notes/recruiter-10-seconds`}),` — 채용 담당자 첫 인상 시간`]})]})}function Ln(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(X,{...e})}):X(e)}var Rn=e({default:()=>Bn,frontmatter:()=>zn}),zn={title:`OAuth state·PKCE 함정 — 흐름의 보안 디테일`,growth:`Seedling`,topics:[`security`,`oauth`,`auth`,`web`],summary:`OAuth authorization code flow는 단순해 보이지만 state·PKCE·redirect URI 검증을 빼먹으면 CSRF·토큰 가로채기·open redirect 취약점. 5가지 함정.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function Z(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`OAuth 흐름 (간단 버전)`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`1. 클라이언트 → /authorize?client_id=X&redirect_uri=Y&state=Z
2. 사용자 로그인 + 권한 동의
3. /authorize → redirect to Y?code=ABC&state=Z
4. 클라이언트 → /token (code=ABC) → access_token
`})}),`
`,(0,r.jsx)(t.p,{children:`각 단계에 함정이 있다.`}),`
`,(0,r.jsx)(t.h2,{children:`함정 1 — state 누락 (CSRF)`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`state`}),` 파라미터는 클라이언트가 생성한 무작위 값. 흐름 시작 시 보내고, callback에서 같은 값이 돌아오는지 검증.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`state 없으면`}),`: 공격자가 자기 OAuth 흐름을 시작해서 사용자에게 redirect URL을 보내면, 사용자 브라우저가 공격자의 계정으로 연결됨.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`// 흐름 시작
const state = crypto.randomUUID();
sessionStorage.setItem('oauth_state', state);
location.href = \`/authorize?...&state=\${state}\`;

// callback
const returnedState = new URL(location.href).searchParams.get('state');
const expectedState = sessionStorage.getItem('oauth_state');
if (returnedState !== expectedState) {
  throw new Error('CSRF detected');
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[`state는 `,(0,r.jsx)(t.strong,{children:`반드시`}),` 검증. 누락하면 OAuth가 CSRF에 취약.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정 2 — PKCE 없음 (SPA·모바일)`}),`
`,(0,r.jsx)(t.p,{children:`전통적 OAuth는 client_secret으로 인증. 그러나 SPA·모바일은 secret을 안전하게 저장 못 함.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`PKCE (Proof Key for Code Exchange)`}),`: secret 없이 인증.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`1. code_verifier = random(64자)
2. code_challenge = SHA256(code_verifier)  
3. /authorize?...&code_challenge=X&code_challenge_method=S256
4. /token (code=ABC&code_verifier=원본) → 서버가 SHA256(verifier) == challenge 검증
`})}),`
`,(0,r.jsx)(t.p,{children:`attacker가 code를 가로채도 code_verifier가 없어 토큰 교환 불가.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`모든 public client(SPA·mobile·desktop)는 PKCE 필수`}),`. 2025년 이후 OAuth 2.1 표준에선 confidential client도 권장.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정 3 — redirect_uri 검증 부족`}),`
`,(0,r.jsx)(t.p,{children:`공격자가 redirect_uri를 자기 도메인으로 바꾸면 code가 공격자에게 전달된다.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`서버 측 검증 필요`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`정확한 일치 (substring·prefix 검증 부족)`}),`
`,(0,r.jsx)(t.li,{children:`HTTPS 강제 (http:// 거부)`}),`
`,(0,r.jsx)(t.li,{children:`사전 등록된 URI만 허용`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`잘못된 검증`}),`:`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-python`,children:`# 취약 — substring 검증
if "myapp.com" in redirect_uri: # → "myapp.com.attacker.com" 통과
    accept()

# 안전 — 정확 일치
if redirect_uri in REGISTERED_URIS:
    accept()
`})}),`
`,(0,r.jsx)(t.h2,{children:`함정 4 — implicit flow 사용`}),`
`,(0,r.jsx)(t.p,{children:`옛 OAuth의 implicit flow는 redirect URL에 access token을 직접 담는다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`/callback#access_token=abc
`})}),`
`,(0,r.jsx)(t.p,{children:`문제:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`token이 browser history·referrer·로그에 노출`}),`
`,(0,r.jsx)(t.li,{children:`refresh token 없음`}),`
`,(0,r.jsx)(t.li,{children:`replay 공격에 취약`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`OAuth 2.1에서 implicit flow는 deprecated`}),`. authorization code + PKCE 사용.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정 5 — token을 URL fragment에 두기`}),`
`,(0,r.jsx)(t.p,{children:`implicit flow뿐 아니라 callback URL에 token을 fragment(#...)로 두는 모든 패턴이 위험.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`/callback#token=abc
`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`브라우저 history에 남음`}),`
`,(0,r.jsx)(t.li,{children:`Service Worker가 fetch URL을 로그할 수 있음`}),`
`,(0,r.jsx)(t.li,{children:`analytics 도구가 fragment를 캡처할 수 있음`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`token은 `,(0,r.jsx)(t.strong,{children:`POST body`}),` 또는 `,(0,r.jsx)(t.strong,{children:`Authorization header`}),`로만 전달.`]}),`
`,(0,r.jsx)(t.h2,{children:`OAuth 2.1 흐름 (권장 — 2025+)`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`1. 클라이언트 → code_verifier 생성
2. /authorize?response_type=code&code_challenge=X&state=Y
3. 사용자 로그인
4. /callback?code=ABC&state=Y (state 검증)
5. POST /token (code, code_verifier) → access_token + refresh_token
6. access_token은 Authorization: Bearer header로 사용
7. refresh: POST /token (refresh_token=X) → 새 access + 새 refresh (rotation)
`})}),`
`,(0,r.jsx)(t.p,{children:`각 단계에 위 함정 5개를 다 막아야 함.`}),`
`,(0,r.jsx)(t.h2,{children:`함정 (메타)`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`OAuth 라이브러리 그대로 신뢰`}),`: 라이브러리도 misconfig 가능. state 검증·PKCE·redirect 검증을 직접 확인.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`token revocation 무시`}),`: 사용자가 권한 철회해도 발급된 access token은 만료까지 유효. 짧은 exp + refresh 필수.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`권한(scope) 너무 넓게 요청`}),`: 필요 최소 scope만. 과한 scope는 사용자 거부율 ↑.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`error 응답 정보 노출`}),`: error_description에 client_secret·user info 노출 사고 자주.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`CORS preflight를 OAuth endpoint에 안 함`}),`: 브라우저 CORS 에러로 흐름 중단.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`OAuth는 흐름은 단순하지만 `,(0,r.jsx)(t.strong,{children:`state·PKCE·redirect_uri·token 전달 위치`}),` 4가지 디테일이 보안의 전부다. 라이브러리 쓰더라도 이 4가지는 직접 검증.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/jwt-vs-session-tradeoffs`,children:`/notes/jwt-vs-session-tradeoffs`}),` — 토큰 모델의 트레이드오프
`,(0,r.jsx)(t.a,{href:`/notes/samesite-cookie-3rd-party-context`,children:`/notes/samesite-cookie-3rd-party-context`}),` — token을 cookie로 둘 때`]})]})}function Bn(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Z,{...e})}):Z(e)}var Vn=e({default:()=>Un,frontmatter:()=>Hn}),Hn={title:`1on1을 잘 쓰는 5가지 — 매니저·매니지 양쪽이 시간을 잘 쓰는 법`,growth:`Seedling`,topics:[`collaboration`,`management`,`communication`,`career`],summary:`1on1이 status report로 끝나면 시간 낭비다. 매니저·매니지 양쪽이 시간을 잘 쓰는 5가지 패턴. 1on1은 양쪽이 쓰는 자리지 매니저가 매니지를 쓰는 자리가 아니다.`,plantedAt:`2026-05-28`,lastTendedAt:`2026-05-28`};function Q(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`1on1이 status report가 되는 함정`}),`
`,(0,r.jsx)(t.p,{children:`매니저: "이번 주 어땠어요?"
매니지: "X 작업 했고 Y 하고 있고 Z 할 예정이에요."
매니저: "좋네요. 막힌 거 있어요?"
매니지: "딱히..."`}),`
`,(0,r.jsx)(t.p,{children:`15분 끝. 다음 주도 똑같음. 이게 디폴트 1on1이다. 양쪽 모두 시간 손실인 줄도 모른 채 매주 반복.`}),`
`,(0,r.jsx)(t.p,{children:`진짜 1on1은 다른 자리다. 5가지 패턴이 1on1을 가치 자리로 바꾼다.`}),`
`,(0,r.jsx)(t.h2,{children:`1. 매니지가 어젠다를 만든다`}),`
`,(0,r.jsxs)(t.p,{children:[`가장 큰 변화. 1on1은 `,(0,r.jsx)(t.strong,{children:`매니지가 쓰는 자리`}),`다 — 매니저가 매니지를 평가하는 자리가 아니라.`]}),`
`,(0,r.jsx)(t.p,{children:`매니지가 어젠다 3-5개를 미리 적는다 (24시간 전이면 좋음). 매니저는 그걸 보고 답을 준비. 1on1 시간엔 어젠다 따라 진행.`}),`
`,(0,r.jsx)(t.p,{children:`어젠다 예시:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"X 결정에 대해 어떻게 생각하세요? 제가 보는 trade-off는 이거예요."`}),`
`,(0,r.jsx)(t.li,{children:`"Y 동료와 협업이 어렵습니다. 시각이 궁금합니다."`}),`
`,(0,r.jsx)(t.li,{children:`"장기적으로 Z 영역으로 가고 싶은데 다음 단계가 뭘까요?"`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`어젠다가 비어 있으면 1on1을 짧게 끝내거나 스킵. `,(0,r.jsx)(t.strong,{children:`할 말 없는데 시간만 쓰는 1on1`}),`은 시간 낭비.`]}),`
`,(0,r.jsx)(t.h2,{children:`2. 격주 깊은 1on1 vs 매주 얕은 1on1`}),`
`,(0,r.jsx)(t.p,{children:`매주 15분 짧은 1on1보다 격주 45분 깊은 1on1이 더 가치 클 때가 많다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`매주 15분: status report 함정에 쉽게 빠짐`}),`
`,(0,r.jsx)(t.li,{children:`격주 45분: 첫 10분 status, 나머지 35분에 진짜 대화 가능`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`업무 변동성에 따라 다르다. 신입은 매주가 좋고 시니어는 격주가 더 효율적. 한 번 정하지 말고 분기마다 재검토.`}),`
`,(0,r.jsx)(t.h2,{children:`3. 미래 80% / 과거 20%`}),`
`,(0,r.jsxs)(t.p,{children:[`1on1은 과거 회고가 아니라 `,(0,r.jsx)(t.strong,{children:`미래 방향`}),`이 주제다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`과거 20%: "이번 주 무엇이 잘 됐고 무엇이 막혔나" (단순 status)`}),`
`,(0,r.jsx)(t.li,{children:`미래 80%: "다음 분기 무엇을 다르게 할까", "어떤 영역으로 가고 싶나", "지금 결정 중인 X를 어떻게 풀까"`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`과거 status는 Slack·async update로 충분하다. 1on1은 동기 시간이 필요한 미래 결정에 써야 한다.`}),`
`,(0,r.jsx)(t.h2,{children:`4. "어떻게 도와줄까요?" 정기 질문`}),`
`,(0,r.jsx)(t.p,{children:`매니저가 매번 묻는 디폴트 질문 1개:`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`"내가 무엇을 더(또는 덜) 하면 매니지가 더 잘 일할 수 있을까요?"`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`매니지가 답을 못 주는 경우가 많다. 평소엔 묻지 않는 질문이라서. 답이 나오기까지 몇 주 걸릴 수도 있다.`}),`
`,(0,r.jsx)(t.p,{children:`답이 나오면 큰 변화다. "팀 미팅에서 매니저가 먼저 발언하면 다른 사람이 따라가요" → 매니저가 의식적으로 침묵 → 다른 사람이 발언 자리. 이런 식으로.`}),`
`,(0,r.jsx)(t.h2,{children:`5. 평가는 1on1이 아닌 자리에서`}),`
`,(0,r.jsxs)(t.p,{children:[`성과 평가, 승진 결정, 연봉 협상은 1on1 자리에서 안 한다. 1on1은 `,(0,r.jsx)(t.strong,{children:`신뢰 자리`}),`이고, 평가는 `,(0,r.jsx)(t.strong,{children:`판단 자리`}),`다. 두 자리가 섞이면 매니지가 1on1에 솔직해질 수 없다.`]}),`
`,(0,r.jsx)(t.p,{children:`평가는 별도 일정으로. 1on1은 평가 일정 전후로 따로 분리.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`매니저가 어젠다 만들기`}),`: 매니지가 어젠다 만들기 어려워하면 매니저가 도와줄 수 있지만, 디폴트로 매니저가 만드는 건 잘못된 신호. 1on1이 평가 자리가 됨.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`매니지가 어젠다 비워 옴`}),`: 매번 비워 오면 1on1 자체를 재검토. 빈도를 낮추거나 격주로.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`매니저가 status만 듣고 끝남`}),`: status는 async로. 1on1에서 status만 듣는 매니저는 시간 낭비.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`솔직한 피드백 = 부정 피드백 착각`}),`: 솔직함은 부정만 의미하지 않음. 잘한 점에 대한 솔직한 피드백도 가치.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`1on1에서 다른 사람 험담`}),`: 다른 사람에 대한 정보를 1on1에서 꺼내면 신뢰가 무너진다. 다른 사람과의 갈등은 그 사람과 직접 풀거나 매니저가 facilitate.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`격주 → 매주 → 매일로 늘리기`}),`: 빈도가 늘면 깊이가 줄어든다. 신뢰 위기가 있는 게 아니라면 빈도를 늘리지 마라.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`취소 누적`}),`: 매니저 일정 때문에 자주 취소되면 매니지는 "내가 우선순위 낮네"로 받아들임. 취소보다 짧게라도.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`1on1은 매니지가 쓰는 자리, 미래 방향 자리, 신뢰 자리다. `,(0,r.jsx)(t.strong,{children:`어젠다는 매니지가`}),`, 시간은 미래 80%, 평가는 분리. status report로 끝나는 1on1은 양쪽 모두 시간 낭비.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/code-review-comment-tone`,children:`/notes/code-review-comment-tone`}),` — 1on1 톤도 질문형이 기본
`,(0,r.jsx)(t.a,{href:`/essays/senior-dependence-balance`,children:`/essays/senior-dependence-balance`}),` — 시니어가 동료/매니저에게 의존할 자리`]})]})}function Un(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Q,{...e})}):Q(e)}var Wn=e({default:()=>Kn,frontmatter:()=>Gn}),Gn={title:`One-way vs Two-way Door — Bezos의 의사결정 분류`,growth:`Evergreen`,topics:[`decision-making`,`tradeoff`,`leadership`],summary:`되돌릴 수 있는 결정(two-way)은 빠르게, 되돌릴 수 없는 결정(one-way)은 신중하게. 대부분의 결정은 two-way인데 사람들은 one-way처럼 다룬다.`,plantedAt:`2026-04-12`,lastTendedAt:`2026-05-30`};function $(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`Bezos의 분류`}),`
`,(0,r.jsx)(t.p,{children:`Jeff Bezos가 Amazon 주주 서한(1997, 2015 재강조)에서 제안:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Two-way door`}),`: 시도하고 나쁘면 되돌릴 수 있는 결정. 빠르게 결정하고 실험.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`One-way door`}),`: 되돌릴 수 없거나 비용이 큰 결정. 신중하게, 가능한 정보를 다 모으고.`]}),`
`]}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`대부분의 결정은 two-way door인데, 사람들은 one-way처럼 신중하게 다룬다. 결과는 느린 의사결정과 잃어버린 기회.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`적용 예시`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`결정`}),(0,r.jsx)(t.th,{children:`분류`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`새 라이브러리 도입 시도`}),(0,r.jsx)(t.td,{children:`Two-way (안 맞으면 빼면 됨)`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`데이터베이스 마이그레이션`}),(0,r.jsx)(t.td,{children:`One-way (롤백 매우 어려움)`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`PoC 만들기`}),(0,r.jsx)(t.td,{children:`Two-way (실패해도 학습 자산)`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`공개 사이트에 자동 발행`}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:`One-way`}),` (git history 영구, Wayback Machine)`]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`새 디자인 리뉴얼`}),(0,r.jsx)(t.td,{children:`Two-way (안 맞으면 되돌리기 한 commit)`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`회사 동료 정보 노출`}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:`One-way`}),` (한 번 인터넷에 올라가면 회수 불가)`]})]})]})]}),`
`,(0,r.jsx)(t.h2,{children:`실용 규칙`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Two-way door라면 `,(0,r.jsx)(t.strong,{children:`시도하기 vs 분석하기`}),` 중 시도하기를 우선`]}),`
`,(0,r.jsxs)(t.li,{children:[`One-way door라면 `,(0,r.jsx)(t.strong,{children:`분석·페르소나 토론·quality-gate`}),` 전부 동원`]}),`
`,(0,r.jsx)(t.li,{children:`의심스러우면 "되돌리는 비용은?"으로 자문`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"되돌릴 수 있다"라 생각했는데 실제론 정치·관계·평판 비용이 크면 사실상 one-way`}),`
`,(0,r.jsx)(t.li,{children:`One-way라도 부분적으로 two-way로 만들 수 있다 (예: dry-run, staging, feature flag)`}),`
`,(0,r.jsx)(t.li,{children:`두 종류 모두 한 가지 양식으로 다루면 비용 증대 + 기회 손실`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/automation-vs-governance`,children:`/notes/automation-vs-governance`}),` — 자동 발행은 one-way라 dry-run·PR 게이트 같은 안전장치가 필요
`,(0,r.jsx)(t.a,{href:`/notes/spike-throwaway-code`,children:`/notes/spike-throwaway-code`}),` — spike는 two-way를 만드는 도구
`,(0,r.jsx)(t.a,{href:`/notes/incident-temp-vs-root`,children:`/notes/incident-temp-vs-root`}),` — 임시 패치는 two-way, 근본 수정은 one-way에 가까움
`,(0,r.jsx)(t.a,{href:`/notes/ab-test-stop-signal`,children:`/notes/ab-test-stop-signal`}),` — A/B 테스트는 보통 two-way지만 사용자 해는 one-way로 다뤄야 함
`,(0,r.jsx)(t.a,{href:`/notes/rebuild-vs-incremental`,children:`/notes/rebuild-vs-incremental`}),` — 리빌드는 one-way, 점진은 two-way`]})]})}function Kn(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)($,{...e})}):$(e)}var qn=e({default:()=>Xn,frontmatter:()=>Jn}),Jn={title:`모호한 지시를 측정 기준으로 — "잘 해줘"를 실행 가능하게`,growth:`Seedling`,topics:[`workflow`,`communication`,`delegation`,`quality`],summary:`"전체적으로 개선해줘", "다양하게", "깔끔하게"는 실행자마다 다르게 해석된다. 작업 전에 모호한 품질 단어를 측정 가능한 기준으로 번역하면 재작업과 오해가 줄어든다.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function Yn(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — 같은 단어, 다른 실행`}),`
`,(0,r.jsx)(t.p,{children:`"전체적으로 개선해줘"를 받으면 실행자마다 다르게 푼다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`A: 오타 고치고 문장 다듬기`}),`
`,(0,r.jsx)(t.li,{children:`B: cross-link 추가`}),`
`,(0,r.jsx)(t.li,{children:`C: 본문 재구성 + 예시 추가`}),`
`,(0,r.jsx)(t.li,{children:`D: 전부`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`요청자는 C를 원했는데 실행자가 A를 하면, 결과물을 보고 나서야 어긋남을 안다. 재작업. "다양하게", "깔끔하게", "사용자 친화적으로"도 같은 함정 — `,(0,r.jsx)(t.strong,{children:`품질 단어가 주관적`}),`이라 실행 전에 해석이 갈린다.`]}),`
`,(0,r.jsx)(t.h2,{children:`해법 — 작업 전에 번역`}),`
`,(0,r.jsxs)(t.p,{children:[`모호한 품질 단어를 받으면 `,(0,r.jsx)(t.strong,{children:`작업 시작 전에`}),` 측정 가능한 기준으로 번역하고, 그 기준을 요청자에게 먼저 보여준다.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`"전체적으로 개선" 받음
  ↓ 번역
- cross-link 3개 이상 (현재 평균 1.2개)
- 본문에 구체 예시 1개 이상
- 함정 섹션 4항목 이상
- 추상 주장마다 숫자/코드 근거
  ↓ 요청자 확인
"이 기준으로 진행할게요" → 어긋나면 여기서 수정
`})}),`
`,(0,r.jsx)(t.p,{children:`코드 0줄 쓰기 전에 해석을 정렬한다. 요청자가 "아니 그게 아니라"를 결과물이 아니라 기준에서 말할 수 있다.`}),`
`,(0,r.jsx)(t.h2,{children:`번역 예시`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`모호한 단어`}),(0,r.jsx)(t.th,{children:`측정 가능한 기준`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`"개선해줘"`}),(0,r.jsx)(t.td,{children:`cross-link 수 + 본문 줄 수 + 예시 유무`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`"다양하게"`}),(0,r.jsx)(t.td,{children:`N개 차원에서 서로 다름 (형식·관점·소스)`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`"깔끔하게"`}),(0,r.jsx)(t.td,{children:`lint 0 + 중복 0 + 미사용 import 0`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`"사용자 친화적"`}),(0,r.jsx)(t.td,{children:`클릭 수 / 입력 필드 수 / 첫 로드 시간`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`"안전하게"`}),(0,r.jsx)(t.td,{children:`입력 검증 + 에러 경로 + 롤백 가능`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`"읽기 좋게"`}),(0,r.jsx)(t.td,{children:`문단 길이 + 헤딩 간격 + 한 줄 핵심 유무`})]})]})]}),`
`,(0,r.jsxs)(t.p,{children:[`핵심은 `,(0,r.jsx)(t.strong,{children:`셀 수 있거나 있다/없다로 판정 가능한`}),` 형태로 바꾸는 것.`]}),`
`,(0,r.jsx)(t.h2,{children:`왜 효과가 있나`}),`
`,(0,r.jsx)(t.p,{children:`세 가지가 동시에 일어난다.`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`해석 정렬`}),`: 요청자·실행자가 같은 그림을 공유. 재작업 ↓`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`자가 검증 가능`}),`: 기준이 측정 가능하면 실행자가 스스로 "됐는지" 확인. 사람 검증 대기 ↓`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`완료 정의 명확`}),`: "언제 끝인가"가 명시됨. 과/소 작업 방지`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`이건 `,(0,r.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`결정론적 루프`}),`의 입구 단계다. 결정론적 루프가 "기계가 검증 가능한 완료 조건"을 실행하는 거라면, 이 번역은 그 `,(0,r.jsx)(t.strong,{children:`완료 조건을 모호한 요청에서 뽑아내는`}),` 선행 작업이다.`]}),`
`,(0,r.jsx)(t.h2,{children:`누구에게 위임하든 적용`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`AI 위임`}),`: "잘 써줘"보다 "각 항목에 예시 1개 + 함정 3개"가 결과를 좌우`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`주니어 위임`}),`: "깔끔하게 리팩토링"보다 "함수 20줄 이하 + 중복 0"`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`외주·디자인 브리프`}),`: "모던하게"보다 레퍼런스 + 구체 제약`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`본인에게`}),`: 스스로의 모호한 목표도 번역해야 완료를 안다`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`번역을 건너뛰고 추측 실행`}),`: "대충 알겠지"가 재작업의 원인. 5분 번역이 30분 재작업을 막는다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`과도하게 세분화`}),`: 기준이 20개면 그 자체가 부담. 핵심 3-5개.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`측정 가능에 집착해 본질 놓침`}),`: 셀 수 있는 것만 기준으로 하면 "셀 수 없는 중요한 것"(톤·우아함)을 놓친다. 정성 기준도 "예시로 합의" 형태로 포함.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`요청자 확인 생략`}),`: 번역만 하고 바로 실행하면 번역이 틀렸을 때 재작업. 기준을 먼저 보여준다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`기준이 결과를 왜곡`}),`: "cross-link 3개"가 목표가 되면 억지 링크. 기준은 방향이지 게임할 대상이 아님.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`모호한 품질 단어는 실행자마다 다르게 해석된다. `,(0,r.jsx)(t.strong,{children:`작업 전에 측정 가능한 기준으로 번역`}),`하고 요청자와 정렬하면, 재작업과 오해가 결과물이 아니라 기준 단계에서 해소된다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — 번역된 기준을 기계 검증 루프로
`,(0,r.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`/notes/quality-gate-loop`}),` — 기준을 rubric으로 만들어 평가
`,(0,r.jsx)(t.a,{href:`/notes/plan-mode-one-shot`,children:`/notes/plan-mode-one-shot`}),` — 작업 전 정렬이 재작업을 줄인다
`,(0,r.jsx)(t.a,{href:`/notes/pr-body-before-code`,children:`/notes/pr-body-before-code`}),` — 코드 전에 의도를 글로 정렬`]})]})}function Xn(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Yn,{...e})}):Yn(e)}var Zn=e({default:()=>er,frontmatter:()=>Qn}),Qn={title:`개인 인프라 스택 — 회사 인프라 없이도 production-grade`,growth:`Budding`,topics:[`infrastructure`,`side-project`,`github`,`notion`],summary:`GitHub Pages(사이트) + Releases(CDN) + Notion(DB) + Actions(cron). 신용카드 0원으로 운영되는 personal stack. side project 시작 비용을 0으로 만든다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-29`};function $n(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`회사 인프라 없이 개인이 무엇을 운영하나`}),`
`,(0,r.jsx)(t.p,{children:`회사에선 AWS·GCP·Datadog·Slack이 다 있다. 그런데 사이드 프로젝트에 회사 계정 안 쓰면 처음부터 다 만들어야 한다. 신용카드 결제·계정 발급·요금 모니터링 — 시작 비용이 압박이다.`}),`
`,(0,r.jsxs)(t.p,{children:[`그래서 처음부터 무료 stack을 조합한다. `,(0,r.jsx)(t.strong,{children:`신용카드 0원`}),`으로 personal grade infra를 갖춘다.`]}),`
`,(0,r.jsx)(t.h2,{children:`4-Layer Personal Stack`}),`
`,(0,r.jsx)(t.h3,{children:`1. Hosting — GitHub Pages`}),`
`,(0,r.jsx)(t.p,{children:`정적 site (블로그·portfolio·리포트). 빌드 후 master 또는 gh-pages 브랜치에 push.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`무료, custom domain 지원`}),`
`,(0,r.jsx)(t.li,{children:`SSL 자동 (Let's Encrypt)`}),`
`,(0,r.jsx)(t.li,{children:`monthly bandwidth 100GB`}),`
`,(0,r.jsx)(t.li,{children:`build minutes 무제한`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`부족: SSR·동적 라우팅·서버 사이드. 그건 static + client routing(SPA fallback)으로 우회.`}),`
`,(0,r.jsx)(t.h3,{children:`2. CDN — GitHub Releases`}),`
`,(0,r.jsx)(t.p,{children:`video·고해상도 image·PDF 등 binary asset. release tag로 versioning.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`파일당 2GB`}),`
`,(0,r.jsx)(t.li,{children:`트래픽 무제한`}),`
`,(0,r.jsx)(t.li,{children:`영구 URL`}),`
`]}),`
`,(0,r.jsx)(t.h3,{children:`3. Backend — Notion API`}),`
`,(0,r.jsx)(t.p,{children:`작은 데이터셋 (수천 행). 노션 DB가 lightweight backend.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`무료 무제한 row (UI는 ~1만 행 부드러움)`}),`
`,(0,r.jsx)(t.li,{children:`시각화·모바일 앱 자동`}),`
`,(0,r.jsx)(t.li,{children:`API 3 req/sec`}),`
`]}),`
`,(0,r.jsx)(t.h3,{children:`4. Scheduler — GitHub Actions cron`}),`
`,(0,r.jsx)(t.p,{children:`주기 작업(데이터 수집·report 생성·deploy).`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`public repo는 무제한 minutes`}),`
`,(0,r.jsx)(t.li,{children:`private도 월 2,000분 무료`}),`
`,(0,r.jsx)(t.li,{children:`secret 관리, matrix 빌드`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`실제 조합 예시`}),`
`,(0,r.jsx)(t.p,{children:`홈레이더 시스템:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`GH Actions cron`}),`: 주1회 발동`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`외부 API 7개`}),` fetch (국토부·네이버·카카오 등)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Notion DB 7개`}),`에 결과 저장`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`본 결과 차트는 GitHub Pages site에서 노출`}),` (계획)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`demo video는 cdn-assets Releases`}),`에 호스팅`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`신용카드 결제: `,(0,r.jsx)(t.strong,{children:`0원`}),`.`]}),`
`,(0,r.jsx)(t.h2,{children:`회사 stack 대비`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`영역`}),(0,r.jsx)(t.th,{children:`회사 stack`}),(0,r.jsx)(t.th,{children:`Personal stack`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`Hosting`}),(0,r.jsx)(t.td,{children:`Vercel·Netlify Pro`}),(0,r.jsx)(t.td,{children:`GH Pages`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`CDN`}),(0,r.jsx)(t.td,{children:`Cloudflare R2·S3`}),(0,r.jsx)(t.td,{children:`GH Releases`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`DB`}),(0,r.jsx)(t.td,{children:`Postgres·DynamoDB`}),(0,r.jsx)(t.td,{children:`Notion API`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`Scheduler`}),(0,r.jsx)(t.td,{children:`EventBridge·Cron`}),(0,r.jsx)(t.td,{children:`GH Actions`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`Monitoring`}),(0,r.jsx)(t.td,{children:`Datadog·Sentry`}),(0,r.jsx)(t.td,{children:`Console·email`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`Auth`}),(0,r.jsx)(t.td,{children:`Auth0·Cognito`}),(0,r.jsx)(t.td,{children:`(없음)`})]})]})]}),`
`,(0,r.jsx)(t.p,{children:`부족한 게 있다. monitoring·auth·실시간 처리. 다만 side project 규모에선 미충족 영역이 critical이 아닌 경우가 많음.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`vendor lock-in to GitHub`}),`: 모든 게 GitHub에 묶임. GitHub policy 변경 시 영향. 다만 git 원본은 옮기기 쉬움.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`공개·private 경계 혼동`}),`: Notion DB는 노션 계정 안에만, GH는 공개 시 누구나 접근. 데이터 민감도 분류 필수.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`API rate limit이 critical path`}),`: 모든 layer에 rate limit 있음. 동기 처리는 자주 막힘. async + batch.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`scale up 안 됨`}),`: 만 명 user 대응 X. side project 초기에만 OK.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`monitoring 부재`}),`: 깨져도 모름. cron 실패 → email alert 최소.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`언제 production stack으로 이전하나`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`DAU 100+ 사용자 (rate limit·UI 부담)`}),`
`,(0,r.jsx)(t.li,{children:`데이터 민감도 ↑ (auth·암호화 필수)`}),`
`,(0,r.jsx)(t.li,{children:`다른 사람과 collaboration (Notion 권한 부족)`}),`
`,(0,r.jsx)(t.li,{children:`시간 비용보다 SaaS 결제가 저렴해질 때`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`그 전까지는 personal stack으로 충분.`}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`개인 사이드 프로젝트는 `,(0,r.jsx)(t.strong,{children:`신용카드 0원으로 시작 가능`}),`하다. GitHub + Notion의 무료 한계를 정확히 알고 쓰면 production-grade 흉내까지는 된다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/github-releases-as-cdn`,children:`/notes/github-releases-as-cdn`}),` — CDN layer
`,(0,r.jsx)(t.a,{href:`/notes/notion-lightweight-backend`,children:`/notes/notion-lightweight-backend`}),` — DB layer
`,(0,r.jsx)(t.a,{href:`/notes/public-api-integration-patterns`,children:`/notes/public-api-integration-patterns`}),` — 외부 API 통합 패턴
`,(0,r.jsx)(t.a,{href:`/notes/report-asset-split-repo`,children:`/notes/report-asset-split-repo`}),` — repo 분리 패턴`]})]})}function er(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)($n,{...e})}):$n(e)}var tr=e({default:()=>ir,frontmatter:()=>nr}),nr={title:`Plan Mode → Auto 1-shot — 재작업 30% 절감 패턴`,growth:`Seedling`,topics:[`claude-code`,`workflow`,`productivity`],summary:`큰 작업 즉시 시작 → 중간에 방향 바뀜 → 재작업. Shift+Tab으로 Plan Mode 진입 → 계획 확정 → Auto 전환 1-shot 구현. 재작업 30~50% 절감.`,plantedAt:`2026-05-08`,lastTendedAt:`2026-05-29`};function rr(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — 즉시 시작이 재작업을 부른다`}),`
`,(0,r.jsx)(t.p,{children:`복잡한 작업을 받자마자 코드부터 만지면 흔한 패턴이 일어난다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`50% 만들고 보니 접근법이 잘못됨`}),`
`,(0,r.jsx)(t.li,{children:`80% 만들고 보니 사용자가 원한 건 다른 거였음`}),`
`,(0,r.jsx)(t.li,{children:`100% 만들고 보니 컨벤션이 어긋남`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`재작업 비용 = 처음 작업 시간의 50~150%. 토큰도 같은 비율로 든다.`}),`
`,(0,r.jsx)(t.h2,{children:`해법 — Plan Mode 먼저`}),`
`,(0,r.jsxs)(t.p,{children:[`Claude Code의 `,(0,r.jsx)(t.strong,{children:`Plan Mode`}),`: `,(0,r.jsx)(t.code,{children:`Shift+Tab`}),`으로 진입. 이 모드에서는 코드 수정·파일 생성·외부 효과 없는 도구만 사용 가능. `,(0,r.jsx)(t.strong,{children:`계획만 짠다.`})]}),`
`,(0,r.jsx)(t.p,{children:`계획 항목:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`변경할 파일 목록`}),`
`,(0,r.jsx)(t.li,{children:`각 파일의 변경 내용 요약`}),`
`,(0,r.jsx)(t.li,{children:`기존 컨벤션 확인 결과`}),`
`,(0,r.jsx)(t.li,{children:`예상 트레이드오프`}),`
`,(0,r.jsx)(t.li,{children:`검증 방법`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`계획이 나오면 `,(0,r.jsx)(t.strong,{children:`사용자가 검토`}),`. 방향 다르면 여기서 수정. 코드는 아직 0줄.`]}),`
`,(0,r.jsx)(t.h2,{children:`Auto 전환 → 1-shot`}),`
`,(0,r.jsxs)(t.p,{children:[`계획 확정 후 Auto 모드 전환 (Plan Mode 종료). 확정된 계획대로 `,(0,r.jsx)(t.strong,{children:`1-shot 구현`}),`한다.`]}),`
`,(0,r.jsx)(t.p,{children:`장점:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`중간 방향 변경 0 → 재작업 0`}),`
`,(0,r.jsx)(t.li,{children:`계획이 명확하니 구현 속도 ↑`}),`
`,(0,r.jsx)(t.li,{children:`토큰 효율 ↑ (불필요한 탐색 없음)`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`체감: 5분 이상 작업에서 `,(0,r.jsx)(t.strong,{children:`재작업 30~50% 절감`}),`.`]}),`
`,(0,r.jsx)(t.h2,{children:`언제 쓰나`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`변경 파일 3개 이상`}),`
`,(0,r.jsx)(t.li,{children:`기존 코드 컨벤션 파악 필요`}),`
`,(0,r.jsx)(t.li,{children:`트레이드오프가 있는 결정`}),`
`,(0,r.jsx)(t.li,{children:`사용자가 의도를 잘 못 표현했을 가능성`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`작은 작업(1파일, 명백한 한 줄 수정)은 오히려 느림. 계획 짜는 비용 > 즉시 구현 비용.`}),`
`,(0,r.jsx)(t.h2,{children:`계획의 구체성`}),`
`,(0,r.jsxs)(t.p,{children:[`가장 흔한 실패는 계획이 `,(0,r.jsx)(t.strong,{children:`너무 추상적`}),`일 때.`]}),`
`,(0,r.jsx)(t.p,{children:`❌ "X 모듈 추가하고 테스트 추가, Y 페이지에 연결"
✅ 파일 경로·함수 이름·시그니처 수준:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`src/lib/payment.ts
  - export async function chargeCustomer(id: string, amount: number): Promise<Receipt>
src/pages/checkout.tsx
  - useEffect 안에 chargeCustomer 호출 추가
tests/payment.test.ts
  - 정상/실패/네트워크 에러 3 케이스
`})}),`
`,(0,r.jsx)(t.p,{children:`이 수준이면 Auto 1-shot이 헤매지 않는다.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`계획이 너무 추상적`}),`: 구현 시 또 헤맴. 파일·함수·시그니처 수준까지.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`계획 확정 안 하고 Auto`}),`: "대충 이거 같은데" 상태로 Auto 가면 재작업 발생. 사용자 명시 승인 후 Auto.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`모든 작업에 Plan Mode`}),`: 작은 작업도 매번 Plan → 오히려 느림. 5분 임계.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`계획 검토 없이 통과`}),`: 사용자가 "OK"만 하고 검토 안 함. Plan Mode 가치 0. 계획을 정독해야 함.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`spike와의 순서`}),`
`,(0,r.jsx)(t.p,{children:`미지의 영역이면 Plan Mode 전에 spike가 먼저다. 모르는 걸 계획할 수 없다.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`미지의 영역?
  ├─ 예 → spike (버릴 코드로 학습) → Plan Mode (학습 위에 계획) → Auto 1-shot
  └─ 아니오 → Plan Mode → Auto 1-shot
`})}),`
`,(0,r.jsx)(t.p,{children:`spike 없이 모르는 영역을 Plan Mode로 계획하면, 계획 자체가 틀린 가정 위에 선다. spike가 사실을 주고, Plan Mode가 그 사실로 계획을 짜고, Auto가 1-shot 구현한다.`}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`코드를 빨리 쓰는 것보다 `,(0,r.jsx)(t.strong,{children:`다시 쓰지 않는 것`}),`이 더 빠르다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/incrementally-correct`,children:`/notes/incrementally-correct`}),` — 계획 후에도 점진적으로 정확해지기
`,(0,r.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`}),` — 의도 라우팅이 계획의 입구
`,(0,r.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 계획 자체를 두 모델로 cross-check
`,(0,r.jsx)(t.a,{href:`/notes/spike-throwaway-code`,children:`/notes/spike-throwaway-code`}),` — 미지의 영역은 계획 전 spike로 학습
`,(0,r.jsx)(t.a,{href:`/notes/pr-body-before-code`,children:`/notes/pr-body-before-code`}),` — 코드 전에 글로 정렬하는 같은 사고`]})]})}function ir(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(rr,{...e})}):rr(e)}var ar=e({default:()=>cr,frontmatter:()=>or}),or={title:`Postgres transaction isolation — 4 레벨이 실제로 다루는 것`,growth:`Seedling`,topics:[`backend`,`database`,`postgres`,`concurrency`],summary:`READ UNCOMMITTED·READ COMMITTED·REPEATABLE READ·SERIALIZABLE 4 레벨. Postgres에서 실제로 동작이 다른 건 3개다. 각 레벨이 막는 anomaly와 비용.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function sr(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`왜 isolation을 고민하나`}),`
`,(0,r.jsx)(t.p,{children:`동시 트랜잭션이 같은 데이터를 만지면 4가지 anomaly가 발생한다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Dirty Read`}),`: 커밋 안 된 변경을 읽음`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Non-repeatable Read`}),`: 같은 행을 두 번 읽었는데 값이 다름`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Phantom Read`}),`: 같은 쿼리를 두 번 실행했는데 row 집합이 다름`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Serialization Anomaly`}),`: 동시 실행 결과가 어떤 직렬 순서로도 안 나옴`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`isolation level은 어떤 anomaly를 막을지 결정한다. 강할수록 안전하지만 처리량 ↓.`}),`
`,(0,r.jsx)(t.h2,{children:`Postgres의 4 레벨 (실제로는 3)`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`레벨`}),(0,r.jsx)(t.th,{children:`Dirty`}),(0,r.jsx)(t.th,{children:`Non-repeat`}),(0,r.jsx)(t.th,{children:`Phantom`}),(0,r.jsx)(t.th,{children:`Ser anomaly`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`READ UNCOMMITTED`}),(0,r.jsx)(t.td,{children:`가능 (표준)`}),(0,r.jsx)(t.td,{children:`가능`}),(0,r.jsx)(t.td,{children:`가능`}),(0,r.jsx)(t.td,{children:`가능`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`READ COMMITTED`}),(0,r.jsx)(t.td,{children:`막음`}),(0,r.jsx)(t.td,{children:`가능`}),(0,r.jsx)(t.td,{children:`가능`}),(0,r.jsx)(t.td,{children:`가능`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`REPEATABLE READ`}),(0,r.jsx)(t.td,{children:`막음`}),(0,r.jsx)(t.td,{children:`막음`}),(0,r.jsx)(t.td,{children:`막음 (PG)`}),(0,r.jsx)(t.td,{children:`가능`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`SERIALIZABLE`}),(0,r.jsx)(t.td,{children:`막음`}),(0,r.jsx)(t.td,{children:`막음`}),(0,r.jsx)(t.td,{children:`막음`}),(0,r.jsx)(t.td,{children:`막음`})]})]})]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`Postgres 특이점`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`READ UNCOMMITTED는 실제로 READ COMMITTED처럼 동작 (구분 안 함)`}),`
`,(0,r.jsx)(t.li,{children:`REPEATABLE READ가 표준보다 강함 — Phantom Read도 막음 (snapshot isolation)`}),`
`,(0,r.jsx)(t.li,{children:`→ 실제로 다른 레벨 3개: READ COMMITTED / REPEATABLE READ / SERIALIZABLE`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`디폴트 — READ COMMITTED`}),`
`,(0,r.jsx)(t.p,{children:`Postgres 디폴트. 대부분의 작업이 여기서 동작.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sql`,children:`BEGIN;
SELECT balance FROM accounts WHERE id = 1; -- 100
-- (다른 트랜잭션이 balance를 200으로 변경 + 커밋)
SELECT balance FROM accounts WHERE id = 1; -- 200 (변경 보임)
COMMIT;
`})}),`
`,(0,r.jsx)(t.p,{children:`같은 트랜잭션 안에서 같은 행을 두 번 읽으면 다른 값이 나올 수 있다.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`언제 충분한가`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`단일 행 업데이트 (예: counter++)`}),`
`,(0,r.jsx)(t.li,{children:`짧은 트랜잭션`}),`
`,(0,r.jsx)(t.li,{children:`일관성보다 처리량 우선`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`언제 부족한가`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`같은 트랜잭션에서 여러 행을 일관되게 읽어야 할 때`}),`
`,(0,r.jsx)(t.li,{children:`보고서 생성 (다른 행이 트랜잭션 중간에 변경되면 보고가 inconsistent)`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`REPEATABLE READ — Snapshot Isolation`}),`
`,(0,r.jsx)(t.p,{children:`트랜잭션 시작 시점의 snapshot을 읽음. 같은 트랜잭션 안의 SELECT는 항상 같은 결과.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sql`,children:`BEGIN ISOLATION LEVEL REPEATABLE READ;
SELECT balance FROM accounts WHERE id = 1; -- 100
-- (다른 트랜잭션이 200으로 변경 + 커밋)
SELECT balance FROM accounts WHERE id = 1; -- 100 (snapshot 유지)
COMMIT;
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`언제 쓰는가`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`보고서 / 백업 (일관된 시점의 데이터)`}),`
`,(0,r.jsx)(t.li,{children:`멀티 row 읽기를 일관되게`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`함정 — Write Skew`}),`:
REPEATABLE READ는 Write Skew를 막지 못한다.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-sql`,children:`-- 의사 1, 의사 2가 동시에 oncall 사퇴 시도
-- 규칙: 최소 1명은 oncall이어야 함

T1: SELECT COUNT(*) FROM oncall WHERE active = true; -- 2
T2: SELECT COUNT(*) FROM oncall WHERE active = true; -- 2
T1: UPDATE oncall SET active = false WHERE id = 1; -- "나만 빠지면 1명 남음"
T2: UPDATE oncall SET active = false WHERE id = 2; -- "나만 빠지면 1명 남음"
T1: COMMIT;
T2: COMMIT;
-- 결과: 0명 oncall (둘 다 잘못된 가정으로 행동)
`})}),`
`,(0,r.jsx)(t.p,{children:`각 트랜잭션은 자기 snapshot 기준으론 옳지만, 합쳐서 보면 규칙 위반.`}),`
`,(0,r.jsx)(t.h2,{children:`SERIALIZABLE — Write Skew도 막음`}),`
`,(0,r.jsx)(t.p,{children:`Postgres의 SERIALIZABLE은 Serializable Snapshot Isolation (SSI) 알고리즘 사용. 동시 트랜잭션 간 의존성을 추적해서 비직렬화 가능 패턴을 감지하면 한 트랜잭션을 abort.`}),`
`,(0,r.jsxs)(t.p,{children:[`위 예시에서 T2가 commit 시도하면 `,(0,r.jsx)(t.code,{children:`ERROR: could not serialize access`}),` 발생. 애플리케이션이 retry해야 함.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`언제 쓰는가`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`복잡한 invariant (Write Skew 위험)`}),`
`,(0,r.jsx)(t.li,{children:`금융 트랜잭션`}),`
`,(0,r.jsx)(t.li,{children:`정합성이 처리량보다 절대 우선`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`비용`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`abort + retry가 자주 일어남 (특히 핫 row)`}),`
`,(0,r.jsx)(t.li,{children:`트랜잭션 의존성 추적 메모리 ↑`}),`
`,(0,r.jsx)(t.li,{children:`처리량 보통 30-50% ↓`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`실용 선택 가이드`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`default: READ COMMITTED
  ↓ 같은 트랜잭션 안에서 일관된 읽기가 필요?
REPEATABLE READ
  ↓ Write Skew 위험이 있는 invariant?
SERIALIZABLE
`})}),`
`,(0,r.jsx)(t.p,{children:`또는 SERIALIZABLE 대신:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`SELECT FOR UPDATE`}),` (명시적 lock) — 핫 row가 적으면 lock이 SSI보다 가벼울 수 있음`]}),`
`,(0,r.jsx)(t.li,{children:`Advisory lock — 애플리케이션 수준 mutex`}),`
`,(0,r.jsx)(t.li,{children:`비관적 → 낙관적 (version column + retry)`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`트랜잭션 안 쓰고 isolation 걱정`}),`: autocommit 모드에선 isolation 의미 없음. BEGIN으로 명시적 트랜잭션 필요.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`REPEATABLE READ로 Write Skew 막을 거라 착각`}),`: 못 막는다. Write Skew는 SERIALIZABLE 또는 lock 필요.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`SERIALIZABLE 디폴트로`}),`: 처리량 30-50% 손실. 정말 필요한 트랜잭션에만.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`abort 후 retry 안 함`}),`: SERIALIZABLE은 abort가 정상 동작. 애플리케이션이 retry 로직 필수.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`long transaction`}),`: REPEATABLE READ에서 트랜잭션이 길면 VACUUM이 row 정리 못 함 → table bloat.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`read-only 트랜잭션도 isolation 필요`}),`: 읽기만 해도 inconsistent snapshot이 영향. `,(0,r.jsx)(t.code,{children:`SET TRANSACTION READ ONLY`}),`로 명시.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`Postgres에서 실제로 다른 isolation 레벨은 3개. `,(0,r.jsx)(t.strong,{children:`READ COMMITTED가 디폴트`}),`, 일관된 멀티 row 읽기는 REPEATABLE READ, Write Skew 위험은 SERIALIZABLE 또는 명시적 lock. SERIALIZABLE은 디폴트가 아니다 — 비용이 크니 필요한 곳에만.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/n-plus-one-query-trap`,children:`/notes/n-plus-one-query-trap`}),` — DB 쿼리 함정
`,(0,r.jsx)(t.a,{href:`/notes/graceful-shutdown`,children:`/notes/graceful-shutdown`}),` — in-flight 트랜잭션 보호
`,(0,r.jsx)(t.a,{href:`/notes/frequency-capping-distributed`,children:`/notes/frequency-capping-distributed`}),` — 분산 카운팅의 정확성·비용 트레이드오프`]})]})}function cr(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(sr,{...e})}):sr(e)}var lr=e({default:()=>fr,frontmatter:()=>ur}),ur={title:`PR 본문은 코드보다 먼저 읽힌다`,growth:`Seedling`,topics:[`code-review`,`writing`,`pr`],summary:`리뷰어는 코드를 보기 전에 PR 본문을 본다. 본문이 비어있거나 "WIP"이면 리뷰어는 코드를 추측해서 읽는다. 본문 5분 투자로 리뷰 30분 절약.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-28`};function dr(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`흔한 PR 본문`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`fix typo
`})}),`
`,(0,r.jsx)(t.p,{children:`또는`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`WIP
`})}),`
`,(0,r.jsx)(t.p,{children:`또는 빈 본문.`}),`
`,(0,r.jsx)(t.p,{children:`이게 PR 100개 중 70개의 현실이다. 그러면 리뷰어가 코드를 보면서 "이게 무슨 의도지?"를 추측해야 한다. 추측이 틀리면 잘못된 리뷰가 간다.`}),`
`,(0,r.jsx)(t.h2,{children:`잘 쓴 PR 본문 구조`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-markdown`,children:`## Why
무엇을 해결하려고 한 PR인가. 1-2 문장.

## What changed
주요 변경 3-5개 bullet. 코드 라인 인용 없이 의도만.

## Trade-off
선택한 방법과 버린 방법. 왜 이 방법인가.

## Test plan
어떻게 검증했는가. 자동 테스트 + 수동 시나리오.

## Risk
머지 후 무엇이 깨질 수 있는가. 롤백 방법.
`})}),`
`,(0,r.jsx)(t.p,{children:`이렇게 적는 데 5분 정도 걸린다. 리뷰어는 본문 보고 어디부터 코드 읽을지 결정할 수 있다. 본문이 없는 PR보다 30분 빠른 머지.`}),`
`,(0,r.jsx)(t.h2,{children:`누가 가장 큰 이득인가`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`6개월 후의 자기 자신`}),`. PR 본문이 commit message보다 더 풍부하다. `,(0,r.jsx)(t.code,{children:`git blame`}),` → PR 링크 → 본문 → "아, 이 결정의 근거가 이거였구나."`]}),`
`,(0,r.jsx)(t.p,{children:`코드만 보면 절대 안 보이는 컨텍스트가 PR 본문에 살아남는다.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`PR 본문에 코드 인용 너무 많으면 본문이 코드 중복. 의도만 적기.`}),`
`,(0,r.jsx)(t.li,{children:`"Why" 없이 "What"만 적으면 가치 ↓. 다 알지 What. 결정의 이유를 묻는 게 Why.`}),`
`,(0,r.jsx)(t.li,{children:`"TODO: 본문 나중에" → 영원히 안 적음. PR 만들 때 같이.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`PR 본문은 코드를 읽는 사람에게 `,(0,r.jsx)(t.strong,{children:`무엇을 읽어야 하는지`}),`를 미리 알려주는 안내문이다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/code-review-real-value`,children:`/notes/code-review-real-value`}),` — 본문에 결정 근거가 있어야 리뷰가 결정 중심으로 흐른다
`,(0,r.jsx)(t.a,{href:`/notes/plan-mode-one-shot`,children:`/notes/plan-mode-one-shot`}),` — 코드 전에 계획을 먼저 글로 정렬하는 동일한 사고 패턴
`,(0,r.jsx)(t.a,{href:`/notes/code-review-comment-tone`,children:`/notes/code-review-comment-tone`}),` — 본문이 잘 쓰여 있으면 리뷰 톤도 질문형으로 자연스러움
`,(0,r.jsx)(t.a,{href:`/notes/async-pr-review-slo`,children:`/notes/async-pr-review-slo`}),` — 본문이 비어있으면 SLO를 지킬 수 없음 (리뷰어가 추측 시간)`]})]})}function fr(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(dr,{...e})}):dr(e)}var pr=e({default:()=>gr,frontmatter:()=>mr}),mr={title:`외부 공개 API 통합 — rate limit·재시도·zod boundary`,growth:`Budding`,topics:[`api`,`integration`,`backend`,`side-project`],summary:`다수 외부 API를 한 시스템에 통합할 때의 일반 패턴. bottleneck으로 rate limit, axios-retry로 재시도, zod로 응답 schema 검증. 5+ API라면 boundary가 안전망.`,plantedAt:`2026-05-18`,lastTendedAt:`2026-05-29`};function hr(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — 5+ 외부 API 통합`}),`
`,(0,r.jsx)(t.p,{children:`홈레이더 같은 시스템은 공개 API 7개를 통합한다. 국토부 RTMS, 네이버 Cloud Maps, 카카오 모빌리티, 학교알리미, 한국은행 ECOS 등.`}),`
`,(0,r.jsx)(t.p,{children:`각 API의 정책이 다르다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`rate limit이 다름 (초당 3·10·100·무제한)`}),`
`,(0,r.jsx)(t.li,{children:`응답 schema가 다름 (JSON·XML·둘 다)`}),`
`,(0,r.jsx)(t.li,{children:`에러 표현이 다름 (status code·body field·둘 다)`}),`
`,(0,r.jsx)(t.li,{children:`인증이 다름 (header·query·subkey)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`단일 패턴으로 다 다루지 않으면 코드가 case문 더미가 된다.`}),`
`,(0,r.jsx)(t.h2,{children:`패턴 1 — bottleneck으로 rate limit`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`import Bottleneck from 'bottleneck';

const naverLimiter = new Bottleneck({
  minTime: 100, // 10 req/sec
  maxConcurrent: 1,
});

await naverLimiter.schedule(() => axios.get(url));
`})}),`
`,(0,r.jsx)(t.p,{children:`API별 limiter 분리. 한 API가 burst 받아도 다른 API는 영향 0.`}),`
`,(0,r.jsx)(t.h2,{children:`패턴 2 — 자동 재시도`}),`
`,(0,r.jsx)(t.p,{children:`429·5xx·timeout은 일시적일 가능성 ↑. axios-retry 또는 직접 구현.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`import axiosRetry from 'axios-retry';

axiosRetry(axios, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (err) =>
    err.response?.status === 429 || err.response?.status >= 500,
});
`})}),`
`,(0,r.jsx)(t.p,{children:`429는 exponential backoff. 4xx는 일반적으로 재시도 안 함 (영구 에러).`}),`
`,(0,r.jsx)(t.h2,{children:`패턴 3 — zod로 응답 boundary 검증`}),`
`,(0,r.jsx)(t.p,{children:`외부 응답을 그대로 믿으면 schema 바뀔 때 런타임에 깨짐. zod로 boundary에서 검증.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`import { z } from 'zod';

const PriceSchema = z.object({
  aptName: z.string(),
  dealAmount: z.string().transform((s) => parseInt(s.replace(/,/g, ''))),
  dealYear: z.number(),
});

const data = PriceSchema.parse(response.data); // 깨지면 여기서 명확한 에러
`})}),`
`,(0,r.jsx)(t.p,{children:`장점:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`외부 schema 변경 시 즉시 감지 (다음 cron에 alert)`}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`any`}),` 전염 차단`]}),`
`,(0,r.jsx)(t.li,{children:`응답 transform(string→number 등) 한 자리`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`패턴 4 — 페이지네이션 일반화`}),`
`,(0,r.jsx)(t.p,{children:`API마다 페이지네이션이 다르다 (cursor·offset·page-token). 한 함수로 추상화하면 호출자가 모름.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`async function* paginate(api: string, params: object) {
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
`,(0,r.jsx)(t.p,{children:`호출자는 페이지 신경 안 씀. for-await가 자연스럽게 종료.`}),`
`,(0,r.jsx)(t.h2,{children:`패턴 5 — 구조화 로그`}),`
`,(0,r.jsx)(t.p,{children:`winston·pino로 JSON 로그. 에러 발생 시 어느 API·어느 단계인지 즉시 파악되어야.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`logger.info('api.request', { api: 'naver_maps', endpoint: 'geocode', params });
logger.error('api.error', { api: 'naver_maps', status: err.status, body: err.response?.data });
`})}),`
`,(0,r.jsx)(t.p,{children:`production에서 디버깅 시간이 비선형으로 줄어든다.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`rate limit을 단일 limiter로 통합`}),`: 한 API의 burst가 다른 API를 막음. API별 분리.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`재시도 무한`}),`: 영구 에러(4xx)도 재시도하면 무한 루프 + ban 위험. retryCondition 명확.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:[`zod 안 쓰고 `,(0,r.jsx)(t.code,{children:`as`}),` 캐스팅`]}),`: 거짓 안전감. 외부 schema 변경 시 못 감지.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`API key를 코드에 hardcode`}),`: env var + GitHub Secrets. log에 redact.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`에러 응답 본문 무시`}),`: API마다 에러를 body field에 담음 (status=200인데 body에 error 코드). 응답 검증 시 함께.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`timeout 설정 누락`}),`: 외부 API hang이 cron 전체를 멈춤. axios timeout 명시.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`5+ 외부 API 통합은 정책 다양성 자체가 비용이다. `,(0,r.jsx)(t.strong,{children:`rate limit·재시도·boundary 검증을 라이브러리 수준으로 일반화`}),`해야 case문 더미를 피한다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/typescript-false-safety`,children:`/notes/typescript-false-safety`}),` — 외부 데이터를 컴파일러가 못 잡는 이유
`,(0,r.jsx)(t.a,{href:`/notes/notion-lightweight-backend`,children:`/notes/notion-lightweight-backend`}),` — 같은 rate limit 한계의 다른 케이스
`,(0,r.jsx)(t.a,{href:`/notes/incident-monitoring-gap`,children:`/notes/incident-monitoring-gap`}),` — 외부 API 깨짐도 모니터링 갭이 됨
`,(0,r.jsx)(t.a,{href:`/notes/graceful-shutdown`,children:`/notes/graceful-shutdown`}),` — cron job의 graceful 종료도 같은 맥락`]})]})}function gr(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(hr,{...e})}):hr(e)}var _r=e({default:()=>br,frontmatter:()=>vr}),vr={title:`quality-gate — 결정론적 평가·개선 루프`,growth:`Evergreen`,topics:[`workflow`,`verification`,`ai`,`design`],summary:`모호한 품질 목표를 측정 가능한 rubric으로 바꾸고, 페르소나 평가로 채점한 뒤, 통과까지 개선·재평가하는 패턴.`,plantedAt:`2026-03-22`,lastTendedAt:`2026-05-29`};function yr(e){let t={a:`a`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`핵심 명제`}),`
`,(0,r.jsx)(t.p,{children:`"좋아 보인다"는 사람이 확인해야 하지만, "rubric의 각 축이 4점 이상인가"는 기계가 검증할 수 있다. 디자인·콘텐츠·코드 모두 동일하다.`}),`
`,(0,r.jsx)(t.h2,{children:`표준 패턴`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`목표 → rubric`}),`: "세련되게"를 8축으로 분해 (컬러 팔레트, 타이포, 일관성, 인터랙션, ...)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`페르소나 평가`}),`: 디자이너·기획자·개발자 각자 자기 영역 채점`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`통과 기준`}),`: 평균 ≥ 4.5/5, 모든 항목 ≥ 4, FAIL 0`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`미달 시`}),`: 가장 점수 낮은 항목 1~2개 우선 개선 → 재평가`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`종료`}),`: 통과 또는 3 사이클 매몰 (진전 없음)`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`두 번의 적용 사례`}),`
`,(0,r.jsx)(t.h3,{children:`디자인 톤`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`사이클 1: 평균 3.28/5. 누런 cream + 그림자 + 하드코딩 hex 30+. "엄청 못생겼어" 피드백.`}),`
`,(0,r.jsxs)(t.li,{children:[`사이클 3: 평균 4.44/5. white-zinc-indigo 토큰화, single source 회복. (자세한 토큰 전환은 `,(0,r.jsx)(t.a,{href:`/notes/color-mix-tokens`,children:`color-mix-tokens`}),` 참고)`]}),`
`]}),`
`,(0,r.jsx)(t.h3,{children:`모바일 최적화`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`사이클 1: 평균 2.75/5. iOS HIG 44 미달, viewport-fit 누락, focus trap 없음.`}),`
`,(0,r.jsx)(t.li,{children:`사이클 3: 평균 4.75/5. iOS Safari 패키지 + 터치 타겟 + inert 패턴 + 콘텐츠 우선순위.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심 인사이트 세 가지`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`평균이 아니라 최저 항목이 통과를 결정한다.`}),` 한 항목만 3점이어도 평균 4.7이라도 FAIL.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`BLOCKING 항목은 별도 표시한다.`}),` 평균 통과해도 BLOCKING 4점 미만이면 게이트가 닫힌다.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`rubric을 사전에 명확히 정의하지 않으면 평가가 흔들린다.`}),` "터치 타겟"이라는 단어만으로는 부족하고 "iOS HIG 44×44 + 간격 충분"으로 명세해야 채점 분산이 줄어든다.`]}),`
`,(0,r.jsx)(t.h2,{children:`임계를 어떻게 정하나 — 4.5 vs 4.7`}),`
`,(0,r.jsxs)(t.p,{children:[`통과 임계(평균 4.5? 4.7?)는 고정값이 아니라 `,(0,r.jsx)(t.strong,{children:`작업의 외부 노출도`}),`로 정한다.`]}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`임계`}),(0,r.jsx)(t.th,{children:`적용`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`4.5`}),(0,r.jsx)(t.td,{children:`내부 작업, 되돌릴 수 있는 결정, 빠른 반복`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`4.7`}),(0,r.jsx)(t.td,{children:`외부 게시, 포트폴리오, 신뢰가 자산인 산출물`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`4.8+`}),(0,r.jsx)(t.td,{children:`한 번 나가면 회수 불가 (one-way door)`})]})]})]}),`
`,(0,r.jsxs)(t.p,{children:[`임계를 높이면 사이클이 늘고 비용이 커진다. 그래서 "무조건 높게"가 아니라 노출도에 맞춘다. 외부 게시 콘텐츠를 4.7로 두는 건 — 게시 후 회수가 `,(0,r.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`one-way door`}),`에 가깝고 신뢰 비용이 크기 때문이다.`]}),`
`,(0,r.jsxs)(t.p,{children:[`rubric 차원도 작업마다 다르다. 콘텐츠라면 "일반화 가능성"(독자에게 전이되는가)을 별도 축으로 두면 자기 참조적 글이 자동으로 걸러진다. 모호한 "좋은 글"을 `,(0,r.jsx)(t.a,{href:`/notes/operationalizing-vague-requests`,children:`측정 가능한 차원으로 번역`}),`하는 게 rubric 설계의 핵심.`]}),`
`,(0,r.jsx)(t.h2,{children:`한계`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`페르소나가 코드만 보고 평가하면 실제 사용감 일부 놓침. 라이브 디바이스 검증이 종종 필요.`}),`
`,(0,r.jsx)(t.li,{children:`같은 페르소나가 두 사이클 연속 평가하면 confirmation bias 생김 — 변경 요약을 명확히 전달해 판단 기준 재설정 필요.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`rubric이 너무 복잡 → 평가가 노이즈`}),`: 7축 이상은 채점 분산이 커지고 일관성이 떨어짐. 4-6축이 적정.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`평균만 보고 최저 4 무시`}),`: 평균 4.7이라도 한 항목 2점이면 사용자 체감 큰 약점. 통과 기준에 "모든 항목 ≥ 4" 포함.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`사이클 무한 반복`}),`: 진전 없는데 3사이클 이상 굴리면 시간만 소비. "3 사이클 매몰" 룰 강제.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`같은 페르소나가 두 번 평가`}),`: confirmation bias. 변경 요약을 명확히 전달해 기준 재설정.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`BLOCKING 표시 안 함`}),`: 평균 통과해도 BLOCKING 4점 미만이면 게이트 닫혀야 한다. 사전에 BLOCKING 항목 명시.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — quality-gate가 적용하는 일반 검증 루프
`,(0,r.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),` — 페르소나 평가의 모델 다양성 버전
`,(0,r.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`}),` — 라우팅 결정에도 평가 루프
`,(0,r.jsx)(t.a,{href:`/notes/operationalizing-vague-requests`,children:`/notes/operationalizing-vague-requests`}),` — rubric은 모호한 목표의 번역
`,(0,r.jsx)(t.a,{href:`/notes/self-persona-evaluation`,children:`/notes/self-persona-evaluation`}),` — rubric에 본인 차원을 넣어 솔직한 BLOCKING 노출
`,(0,r.jsx)(t.a,{href:`/cases/quality-gate-system`,children:`/cases/quality-gate-system`}),` — 이 루프를 디자인·모바일·콘텐츠에 적용한 케이스`]})]})}function br(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(yr,{...e})}):yr(e)}var xr=e({default:()=>wr,frontmatter:()=>Sr}),Sr={title:`React 19 use() — 비동기를 동기처럼 쓰는 새 패턴`,growth:`Seedling`,topics:[`react`,`frontend`,`concurrent`],summary:`React 19에서 use() 훅으로 Promise를 동기처럼 unwrap. Suspense와 결합해 데이터 로딩 코드의 보일러플레이트가 크게 줄어든다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-19`};function Cr(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`새 패턴`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`import { use, Suspense } from 'react';

function UserProfile({ promise }: { promise: Promise<User> }) {
  const user = use(promise);  // Promise → User로 동기 unwrap
  return <h1>{user.name}</h1>;
}

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <UserProfile promise={fetchUser()} />
    </Suspense>
  );
}
`})}),`
`,(0,r.jsx)(t.p,{children:`이전 패턴 (useEffect + useState):`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-tsx`,children:`function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUser().then(u => { setUser(u); setLoading(false); });
  }, []);
  if (loading) return <Spinner />;
  return <h1>{user.name}</h1>;
}
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`use()`}),` + Suspense는 보일러플레이트 절반 + 로딩 상태 관리 위임.`]}),`
`,(0,r.jsx)(t.h2,{children:`use()의 특이점`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`use()`}),`는 다른 훅과 달리 `,(0,r.jsx)(t.strong,{children:`조건문 안에서 호출 가능`}),`. `,(0,r.jsx)(t.code,{children:`if (condition) { const x = use(promise) }`}),` OK.`]}),`
`,(0,r.jsx)(t.li,{children:`Promise 외에 Context도 unwrap 가능.`}),`
`,(0,r.jsx)(t.li,{children:`Suspense boundary 안에서만 동작. 밖이면 throw.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Promise를 컴포넌트 안에서 직접 만들면 매 렌더마다 새 Promise → 무한 루프. `,(0,r.jsx)(t.strong,{children:`상위 컴포넌트에서 생성 후 props로 전달`}),` 또는 react-query 같은 cache 라이브러리.`]}),`
`,(0,r.jsx)(t.li,{children:`에러 처리는 ErrorBoundary로 위임. try/catch는 동작 안 함.`}),`
`,(0,r.jsx)(t.li,{children:`React 18은 use() 미지원 (실험 단계). React 19+ 필요.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`어디서 쓸 만한가`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Server Components 데이터 로딩`}),`: SSR 환경에서 자연스러움`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Suspense 친화 라이브러리`}),`: react-query v5+ 등`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`단순 fetch 컴포넌트`}),`: 학습 곡선 낮음`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`쓰기 어려운 곳:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`사용자 인터랙션 기반 데이터 (form submit 등) → useState/Action 그대로`}),`
`,(0,r.jsx)(t.li,{children:`폴링·실시간 업데이트 → useEffect 또는 SSE`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`use()는 React가 "비동기를 동기처럼" 쓸 수 있는 새 표준을 제공한다는 신호. Suspense 사용이 더 자연스러워진다.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/typescript-false-safety`,children:`/notes/typescript-false-safety`}),` — Promise unwrap의 타입은 안전해 보여도 런타임 컨텍스트가 다르다
`,(0,r.jsx)(t.a,{href:`/notes/test-or-types-first`,children:`/notes/test-or-types-first`}),` — use()처럼 새 패턴이 들어올 때 테스트와 타입 중 무엇을 먼저 잡을지
`,(0,r.jsx)(t.a,{href:`/notes/intersection-observer-infinite-scroll-trap`,children:`/notes/intersection-observer-infinite-scroll-trap`}),` — Web API 기반 무한 스크롤 4함정`]})]})}function wr(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Cr,{...e})}):Cr(e)}var Tr=e({default:()=>Or,frontmatter:()=>Er}),Er={title:`리빌드 vs 점진 개선 — 사이트는 리빌드, 콘텐츠는 점진`,growth:`Seedling`,topics:[`decision`,`refactoring`,`sustained-delivery`,`writing`],summary:`같은 손으로 같은 사이트를 리빌드는 1일에, 콘텐츠는 3일에 걸쳐 점진으로 추가했다. 두 모드를 의도적으로 분리한 이유와 언제 어느 쪽을 고르는지.`,plantedAt:`2026-05-26`,lastTendedAt:`2026-05-26`};function Dr(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`같은 사이트, 다른 두 모드`}),`
`,(0,r.jsx)(t.p,{children:`5/19에 사이트를 통째로 리빌드했다. 라우팅·MDX·디자인 토큰·모바일 GNB·인터랙티브 레이어·빌드 청크. 한 세션에서 다.`}),`
`,(0,r.jsx)(t.p,{children:`5/20-5/21에는 같은 사이트에 콘텐츠를 추가했다. Note 라운드 2 + 16편 cross-link + 야간장애 시리즈 + 홈레이더 케이스 + 개인 레포 발견 9편. 3일에 걸쳐 작은 PR/커밋 묶음으로.`}),`
`,(0,r.jsx)(t.p,{children:`같은 손, 같은 사이트, 다른 두 모드. 의도적이었다.`}),`
`,(0,r.jsx)(t.h2,{children:`리빌드가 맞는 자리`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`구조가 바뀌는 작업`}),`은 리빌드가 안전하다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`라우팅 모델이 바뀜 (SPA → MDX 기반 + 디지털 가든)`}),`
`,(0,r.jsx)(t.li,{children:`디자인 토큰 single source 도입 (CSS 변수)`}),`
`,(0,r.jsx)(t.li,{children:`빌드 청크 분할 정책 (manualChunks)`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`이런 건 점진으로 가면 `,(0,r.jsx)(t.strong,{children:`중간 상태가 깨진다`}),`. 라우팅을 절반만 바꾸면 사이트가 동작 안 한다. 디자인 토큰을 절반만 바꾸면 색이 섞인다. 그래서 한 번에 끝낸다.`]}),`
`,(0,r.jsx)(t.p,{children:`리빌드의 신호:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`변경이 `,(0,r.jsx)(t.strong,{children:`여러 레이어를 동시에`}),` 건드림`]}),`
`,(0,r.jsx)(t.li,{children:`중간 상태가 사용자에게 노출되면 안 됨`}),`
`,(0,r.jsx)(t.li,{children:`기존 코드 일부를 그대로 두기 어려움 (의존성 그래프가 통째로)`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`점진이 맞는 자리`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`추가가 누적되는 작업`}),`은 점진이 안전하다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`노트 1편 추가 → 사이트 그대로 동작`}),`
`,(0,r.jsx)(t.li,{children:`케이스 1편 추가 → 기존 케이스에 영향 0`}),`
`,(0,r.jsxs)(t.li,{children:[`cross-link 추가 → 기존 노트의 본문 변경 없음 (frontmatter `,(0,r.jsx)(t.code,{children:`lastTendedAt`}),`만 갱신)`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`점진의 신호:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`변경이 `,(0,r.jsx)(t.strong,{children:`새 파일/엔트리 추가`}),`가 중심`]}),`
`,(0,r.jsx)(t.li,{children:`중간 상태(글 N편)도 사용자에게 의미 있음`}),`
`,(0,r.jsx)(t.li,{children:`한 번에 끝낼 필요가 없음 — 매주 1편씩이 더 자연스러움`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`헷갈리는 자리`}),`
`,(0,r.jsxs)(t.p,{children:[`frontmatter 스키마를 바꾸는 작업이 헷갈린다. `,(0,r.jsx)(t.code,{children:`growth`}),` 필드 추가는?`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`점진: 새 노트부터 적용, 옛 노트는 그대로`}),`
`,(0,r.jsx)(t.li,{children:`리빌드: 50편 전부 일괄 업데이트`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`리더 친화도`}),`가 결정한다. 옛 글에 `,(0,r.jsx)(t.code,{children:`growth`}),`가 없으면 카드 뱃지가 비어있다 — 사용자가 "이 글은 왜 뱃지가 없지?"라고 묻는다. 그 인지 부담이 크면 리빌드. 작으면 점진.`]}),`
`,(0,r.jsx)(t.p,{children:`이 사이트에서는 리빌드를 선택했다. growth/lastTendedAt이 가든 hygiene의 핵심 신호여서 누락된 글은 약한 신호가 된다.`}),`
`,(0,r.jsx)(t.h2,{children:`한 PR 안에 섞으면`}),`
`,(0,r.jsx)(t.p,{children:`리빌드와 점진을 한 PR에 섞으면 리뷰가 안 끝난다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`리빌드 변경 = diff가 큼 (구조 변경)`}),`
`,(0,r.jsx)(t.li,{children:`점진 변경 = diff가 작음 (파일 추가)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`섞이면 리뷰어가 "구조 변경이 정말 모든 새 파일에 적용됐나?"를 확인해야 한다. 분리하면 구조 변경은 구조 변경끼리, 추가는 추가끼리 본다.`}),`
`,(0,r.jsxs)(t.p,{children:[`→ `,(0,r.jsx)(t.strong,{children:`PR 분리는 모드 분리부터`}),`.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`점진을 리빌드로 처리`}),`: 노트 1편 추가에 사이트 전체 회귀 테스트를 돌리면 시간만 든다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`리빌드를 점진으로 처리`}),`: 라우팅 절반만 바꾸고 PR을 올리면 동작 안 한다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`모드를 시간으로 결정`}),`: "오늘은 시간 있으니까 리빌드"는 위험. 작업 성격이 결정한다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`모드 전환 흔적 안 남김`}),`: 리빌드 PR과 점진 PR의 커밋 메시지/태그가 다르지 않으면 나중에 git log에서 안 보임. `,(0,r.jsx)(t.code,{children:`feat(rebuild):`}),` vs `,(0,r.jsx)(t.code,{children:`feat(content):`}),`처럼 prefix 다르게.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`같은 손이라도 `,(0,r.jsx)(t.strong,{children:`구조는 리빌드, 추가는 점진`}),`. 모드를 섞지 말고, 모드를 결정한 다음 도구를 고른다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/incrementally-correct`,children:`/notes/incrementally-correct`}),` — 점진의 정합성
`,(0,r.jsx)(t.a,{href:`/notes/spike-throwaway-code`,children:`/notes/spike-throwaway-code`}),` — 리빌드 전 spike
`,(0,r.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`/notes/one-way-two-way-door`}),` — 되돌릴 수 있는 결정과 아닌 결정`]})]})}function Or(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Dr,{...e})}):Dr(e)}var kr=e({default:()=>Mr,frontmatter:()=>Ar}),Ar={title:`채용 담당자의 10초 — 사이트 첫 화면이 결정하는 것`,growth:`Seedling`,topics:[`career`,`content-strategy`,`design`],summary:`86%의 채용 담당자가 포트폴리오 링크를 클릭하지만 평균 체류 시간은 1분 미만. 첫 10초에 "이 사람이 무엇을 잘하는가"가 박혀야 한다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-28`};function jr(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`통계 (2026 기준)`}),`
`,(0,r.jsx)(t.p,{children:`리서치 결과:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`**86%**의 채용 담당자가 포트폴리오 링크 클릭`}),`
`,(0,r.jsx)(t.li,{children:`**71%**가 채용 판단에 영향`}),`
`,(0,r.jsx)(t.li,{children:`평균 체류 시간 < 1분`}),`
`,(0,r.jsx)(t.li,{children:`첫 10초가 진입 결정`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`그래서 첫 화면이 무엇을 해야 하는가`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`이름`}),` — 한 글자도 가려지지 않게`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`역할 포지셔닝`}),` — "Frontend Engineer"로 부족. "Product-minded Frontend Engineer" 같은 차별화`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`3개 강점 한 줄씩`}),` — 추상 명사("작은 배포")보다 검증 가능 ("PR lead time 1.5일")이 더 강함`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`다음 액션 1-2개`}),` — 케이스 보기 / 연락`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`흔한 함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Hero가 길어서 첫 viewport에 핵심 정보 안 들어감`}),`
`,(0,r.jsx)(t.li,{children:`자기 사진·자기소개·취미를 첫 화면에 — 정보 가치 ↓`}),`
`,(0,r.jsx)(t.li,{children:`"다양한 기술 스택" 나열 — 채용 담당자는 키워드만 보고 떠남`}),`
`,(0,r.jsx)(t.li,{children:`매번 다른 톤 — 일관성 부재 = 신뢰 ↓`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`검증 방법`}),`
`,(0,r.jsx)(t.p,{children:`자기 사이트 첫 화면 스크린샷을 친구에게 10초 보여주고:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"이 사람이 무엇을 잘하는 사람인 것 같아?"`}),`
`,(0,r.jsx)(t.li,{children:`답이 명확하면 PASS. 모호하면 첫 화면 재설계.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`채용 담당자 vs 동료 시점`}),`
`,(0,r.jsx)(t.p,{children:`같은 사이트라도 두 시점이 다르다:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`채용 담당자`}),`: 10초, 1차 거름. 표면 신호.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`동료 엔지니어`}),`: 인터뷰 전 검토, 5-15분. 깊은 신호.`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`두 시점 모두 만족하려면: 첫 화면은 채용 담당자용 (짧고 강한 메시지), 그 아래는 동료용 (cases·notes·logs).`}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`첫 10초가 두 번째 화면을 볼 권리를 결정한다.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/last-tended-signal`,children:`/notes/last-tended-signal`}),` — 첫 화면이 살아있음 신호를 같이 줘야 10초 동안 신뢰가 산다
`,(0,r.jsx)(t.a,{href:`/notes/digital-garden-vs-blog`,children:`/notes/digital-garden-vs-blog`}),` — 첫 화면 뒤로는 동료용 가든이 따라와야 깊은 신호로 전환
`,(0,r.jsx)(t.a,{href:`/essays/why-not-traditional-resume`,children:`/essays/why-not-traditional-resume`}),` — 10초 진입을 전제로 한 이력서 대신 사이트 선택의 근거
`,(0,r.jsx)(t.a,{href:`/cases/personal-repos-interview`,children:`/cases/personal-repos-interview`}),` — 10초 동안 보일 레포 흔적의 자산화
`,(0,r.jsx)(t.a,{href:`/notes/archive-or-keep-old-repo`,children:`/notes/archive-or-keep-old-repo`}),` — 첫 10초에 보이는 GitHub 프로필 신호 정리
`,(0,r.jsx)(t.a,{href:`/cases/proof-hub-rebuild`,children:`/cases/proof-hub-rebuild`}),` — 이 포지셔닝으로 리빌드한 케이스`]})]})}function Mr(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(jr,{...e})}):jr(e)}var Nr=e({default:()=>Ir,frontmatter:()=>Pr}),Pr={title:`같은 함정에 두 번 빠지면 체크리스트가 된다`,growth:`Seedling`,topics:[`swe`,`process`,`quality`,`automation`],summary:`한 번의 실수는 수정으로 끝나지만, 같은 실수가 두 번 반복되면 그건 개인의 부주의가 아니라 시스템의 공백이다. 함정의 재발 횟수에 따라 대응을 격상하는 사다리.`,plantedAt:`2026-05-29`,lastTendedAt:`2026-05-29`};function Fr(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`한 번 vs 두 번의 차이`}),`
`,(0,r.jsx)(t.p,{children:`같은 종류 실수가 반복되는 패턴이 있다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`frontmatter YAML에서 값이 따옴표로 시작 → 빌드 실패. 고침. 몇 주 후 다른 파일에서 또 같은 실수.`}),`
`,(0,r.jsx)(t.li,{children:`PR에 테스트 빼먹음. 리뷰에서 지적. 다음 PR에서 또.`}),`
`,(0,r.jsx)(t.li,{children:`배포 전 환경 변수 확인 누락. 장애. 다음 배포에서 또.`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`첫 번째는 그냥 실수다. 고치면 된다. `,(0,r.jsx)(t.strong,{children:`두 번째부터는 다르다.`}),` 같은 실수가 반복된다는 건 개인의 부주의가 아니라 `,(0,r.jsx)(t.strong,{children:`그걸 막는 시스템이 없다`}),`는 신호다. 사람 기억에 의존하는 한 세 번째도 온다.`]}),`
`,(0,r.jsx)(t.h2,{children:`대응 격상 사다리`}),`
`,(0,r.jsx)(t.p,{children:`재발 횟수에 따라 대응을 격상한다.`}),`
`,(0,r.jsx)(t.h3,{children:`1회 — 수정 (fix)`}),`
`,(0,r.jsx)(t.p,{children:`그냥 고친다. 기록도 선택. 누구나 실수한다.`}),`
`,(0,r.jsx)(t.h3,{children:`2회 — 체크리스트 / 자동 검사`}),`
`,(0,r.jsxs)(t.p,{children:[`같은 함정이 두 번이면 `,(0,r.jsx)(t.strong,{children:`사람 기억을 신뢰하지 않기로`}),` 결정한다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`체크리스트 항목 추가 (PR 템플릿·배포 절차)`}),`
`,(0,r.jsx)(t.li,{children:`가능하면 자동 검사로: lint 룰, pre-commit hook, CI 검증`}),`
`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`# YAML 따옴표 함정이 2번 → 빌드 전 자동 점검
grep -rnE '^(title|summary): "' src/content/ && echo "FAIL: 따옴표로 시작하는 frontmatter"
`})}),`
`,(0,r.jsxs)(t.p,{children:[`체크리스트보다 자동 검사가 낫다. 체크리스트도 사람이 건너뛸 수 있으니까. `,(0,r.jsx)(t.strong,{children:`기계가 강제할 수 있으면 기계로.`})]}),`
`,(0,r.jsx)(t.h3,{children:`3회 — 프로세스 실패로 취급`}),`
`,(0,r.jsx)(t.p,{children:`두 번에서 체크리스트/자동화를 했는데도 세 번째가 왔다면, 그 대응이 작동 안 한 것. 더 강한 강제가 필요하다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`검사를 CI 차단(blocking)으로 격상`}),`
`,(0,r.jsxs)(t.li,{children:[`또는 그 실수가 `,(0,r.jsx)(t.strong,{children:`불가능한`}),` 구조로 재설계 (예: 따옴표 문제면 frontmatter 생성을 스크립트로 자동화)`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`3회는 "더 조심하자"가 아니라 "구조를 바꾸자"다.`}),`
`,(0,r.jsx)(t.h2,{children:`왜 2회가 임계인가`}),`
`,(0,r.jsx)(t.p,{children:`1회에 자동화하면 과잉이다. 한 번 일어난 모든 실수에 hook을 달면 hook이 노이즈가 된다(좋은 알람의 신호/노이즈 문제와 같다).`}),`
`,(0,r.jsx)(t.p,{children:`3회까지 기다리면 비용이 누적된다. 이미 세 번 당했다.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`2회가 "우연 아님"이 확인되는 가장 빠른 지점`}),`이다. 우연한 실수는 보통 한 번. 두 번 같은 형태면 패턴이다. rule of three가 아니라 콘텐츠/운영에선 rule of two가 적절할 때가 많다 — 재발 비용이 클수록 임계를 낮춘다.`]}),`
`,(0,r.jsx)(t.h2,{children:`무엇을 자동화 대상으로`}),`
`,(0,r.jsx)(t.p,{children:`모든 실수가 자동 검사 가능하진 않다. 격상 가능 여부로 분류.`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`함정 유형`}),(0,r.jsx)(t.th,{children:`자동화 가능?`}),(0,r.jsx)(t.th,{children:`대응`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`문법·형식 (YAML·lint)`}),(0,r.jsx)(t.td,{children:`✅ 쉬움`}),(0,r.jsx)(t.td,{children:`grep / linter / hook`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`누락 (테스트·env)`}),(0,r.jsx)(t.td,{children:`✅ 중간`}),(0,r.jsx)(t.td,{children:`CI 검사 / 템플릿 필수 항목`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`논리·판단 오류`}),(0,r.jsx)(t.td,{children:`❌ 어려움`}),(0,r.jsx)(t.td,{children:`체크리스트 + 리뷰`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`설계 결정`}),(0,r.jsx)(t.td,{children:`❌ 어려움`}),(0,r.jsx)(t.td,{children:`페르소나·문서화`})]})]})]}),`
`,(0,r.jsx)(t.p,{children:`자동화 안 되는 것은 체크리스트 + 리뷰로. 자동화 가능한 것을 체크리스트로만 두면 결국 또 빠진다.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`재발인데 또 수정만`}),`: "이번에도 조심하면 되지"가 세 번째를 부른다. 2회면 자동화 결정.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`1회에 과잉 자동화`}),`: 모든 실수에 hook → hook 노이즈. 2회 임계 유지.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`체크리스트가 너무 길어짐`}),`: 30항목 체크리스트는 아무도 안 본다. 자동화 가능한 건 자동으로 옮기고 체크리스트는 짧게.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`자동 검사를 non-blocking으로`}),`: 경고만 하고 안 막으면 결국 무시된다. 재발 비용 크면 blocking.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`검사 자체가 stale`}),`: 시스템 바뀌면 검사도 갱신. 안 그러면 false negative.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`자산화 안 함`}),`: 재발 함정과 그 대응을 기록 안 하면 팀의 다른 사람이 또 빠진다. debugging 노트/runbook로.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`한 번은 실수, `,(0,r.jsx)(t.strong,{children:`두 번은 시스템의 공백`}),`이다. 재발 횟수에 따라 수정 → 자동 검사 → 구조 재설계로 격상한다. 사람 기억을 신뢰하는 한 세 번째는 온다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/good-alert-four-criteria`,children:`/notes/good-alert-four-criteria`}),` — 검사의 신호/노이즈 분리 (1회 과잉 자동화 회피)
`,(0,r.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — 자동 검사를 결정론 루프로
`,(0,r.jsx)(t.a,{href:`/notes/runbook-write-during-incident`,children:`/notes/runbook-write-during-incident`}),` — 재발 함정을 runbook으로 자산화
`,(0,r.jsx)(t.a,{href:`/notes/dev-warning-noise-cost`,children:`/notes/dev-warning-noise-cost`}),` — 검사를 CI 차단으로 격상하는 패턴
`,(0,r.jsx)(t.a,{href:`/logs#2026-06-09-ci-gate-ratchet`,children:`/logs#2026-06-09-ci-gate-ratchet`}),` — 검사를 non-blocking에서 blocking으로 점진 강화하는 구체 운영`]})]})}function Ir(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Fr,{...e})}):Fr(e)}var Lr=e({default:()=>Br,frontmatter:()=>Rr}),Rr={title:`HTML 리포트와 binary asset 분리 저장소 — diff 노이즈·clone 시간 ↓`,growth:`Seedling`,topics:[`github`,`repo-structure`,`infrastructure`],summary:`본 repo는 가볍게(markdown·source), asset은 별도 저장소(Releases). cross-repo 참조 한 줄로 clone 5분이 10초가 된다.`,plantedAt:`2026-05-12`,lastTendedAt:`2026-05-21`};function zr(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — repo가 binary로 무거워진다`}),`
`,(0,r.jsx)(t.p,{children:`블로그·리포트·문서 repo에 자연스럽게 쌓이는 것들.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`스크린샷 (한 글당 5-10장)`}),`
`,(0,r.jsx)(t.li,{children:`데모 video (글당 1-2개, 50MB+)`}),`
`,(0,r.jsx)(t.li,{children:`디자인 export (PSD·Figma)`}),`
`,(0,r.jsx)(t.li,{children:`PDF·발표 자료`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`half year 쌓이면 repo size가 GB 단위. clone에 5분, push에 2분.`}),`
`,(0,r.jsx)(t.h2,{children:`해법 — 분리 저장소 (mono asset repo)`}),`
`,(0,r.jsxs)(t.p,{children:[`본 repo는 `,(0,r.jsx)(t.strong,{children:`source repo`}),`, asset 전용 repo를 `,(0,r.jsx)(t.strong,{children:`cdn repo`}),`로 분리.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`source repo: markdown·코드·configs (KB 단위)`}),`
`,(0,r.jsx)(t.li,{children:`cdn repo: video·png·pdf (GB 단위, GitHub Releases에 저장)`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`source repo 안에서는 asset을 cross-repo URL로 참조.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-markdown`,children:`![demo](https://github.com/<user>/cdn-assets/releases/download/v1/demo.mp4)
`})}),`
`,(0,r.jsx)(t.p,{children:`또는 HTML.`}),`
`,(0,r.jsx)(t.h2,{children:`효과`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`source repo clone: `,(0,r.jsx)(t.strong,{children:`5분 → 10초`})]}),`
`,(0,r.jsx)(t.li,{children:`PR diff 깔끔: binary 안 보임`}),`
`,(0,r.jsx)(t.li,{children:`동시에 한 사람만 작업해도 conflict 거의 0 (binary lock 불필요)`}),`
`,(0,r.jsx)(t.li,{children:`source repo size: 100MB 이내 유지 가능`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`워크플로우`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-bash`,children:`# asset 작업
cd ~/Workspace/cdn-assets
gh release upload v1 new-demo.mp4

# 본 글 작성 (다른 repo)
cd ~/Workspace/my-blog
# markdown에 cross-repo URL 박기
`})}),`
`,(0,r.jsx)(t.p,{children:`asset과 source가 다른 commit에 들어감. 각자 독립적으로 versioning.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`asset 삭제하면 source의 링크 깨짐`}),`: asset URL은 한 번 발행하면 영구로 두기. 교체는 새 release/새 파일.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`cross-repo 참조 stale`}),`: source의 markdown에 old asset URL이 남아있을 수 있음. asset rename 시 source에서 grep.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`asset repo가 private이면 URL 접근 불가`}),`: source가 public이어도 asset이 private이면 cross-repo 링크 깨짐. visibility 일치 필요.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`CI에서 asset fetch`}),`: source repo CI가 asset 필요하면 cross-repo 인증 필요. 대부분의 정적 site builder는 fetch 안 하고 URL만 박음.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`너무 작은 binary까지 분리`}),`: 1KB favicon까지 분리하면 오히려 관리 복잡. 100KB+ 정도 임계.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`언제 안 쓰나`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`monorepo 톤이 있는 프로젝트 (Next.js 등은 `,(0,r.jsx)(t.code,{children:`public/`}),`에 직접)`]}),`
`,(0,r.jsx)(t.li,{children:`asset이 5개 이하의 작은 프로젝트`}),`
`,(0,r.jsx)(t.li,{children:`offline build가 필수인 경우 (cross-repo fetch 안 됨)`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`binary는 source의 history에 들어갈 게 아니다. `,(0,r.jsx)(t.strong,{children:`분리 저장소 한 번 만들고 cross-repo URL로 참조`}),`하면 repo가 평생 가볍다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/github-releases-as-cdn`,children:`/notes/github-releases-as-cdn`}),` — asset repo의 Releases가 사실상 CDN
`,(0,r.jsx)(t.a,{href:`/notes/personal-infra-stack`,children:`/notes/personal-infra-stack`}),` — 개인 인프라 전체 구조
`,(0,r.jsx)(t.a,{href:`/notes/vite-manual-chunks`,children:`/notes/vite-manual-chunks`}),` — code도 분리하면 비슷한 효과`]})]})}function Br(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(zr,{...e})}):zr(e)}var Vr=e({default:()=>Wr,frontmatter:()=>Hr}),Hr={title:`runbook은 장애 직후 24h 안에 쓴다`,growth:`Seedling`,topics:[`incident`,`runbook`,`operations`,`postmortem`],summary:`장애 끝나면 "나중에 정리" → 안 한다. 24h 안에 기억이 휘발되기 전 쓰는 게 다음 새벽 본인을 살린다.`,plantedAt:`2026-05-15`,lastTendedAt:`2026-05-29`};function Ur(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — "나중에 정리할게요"`}),`
`,(0,r.jsx)(t.p,{children:`장애가 끝나고 임시 패치까지 들어가면 안도감이 온다. 잠도 자야 한다. "회고는 내일 아침에", "runbook은 다음 주에".`}),`
`,(0,r.jsx)(t.p,{children:`대부분 안 한다. 일주일 지나면:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`정확한 명령어가 안 기억남`}),`
`,(0,r.jsx)(t.li,{children:`"이게 왜 깨졌는지"에 대한 추리 과정이 사라짐`}),`
`,(0,r.jsx)(t.li,{children:`새벽 4시 본인이 했던 시도들이 휘발`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`24h 안에 쓰는 이유`}),`
`,(0,r.jsx)(t.p,{children:`기억 곡선 (forgetting curve)은 첫 24h 안에 가장 가파르다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`1h 후: 사용한 명령어·추리 흐름 80% 기억`}),`
`,(0,r.jsx)(t.li,{children:`24h 후: 50% 미만`}),`
`,(0,r.jsx)(t.li,{children:`1주 후: 큰 줄거리만, 디테일 0`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`runbook의 가치는 `,(0,r.jsx)(t.strong,{children:`디테일`}),`에 있다. "어떤 명령으로 확인했고 어떤 결과를 보고 어떻게 판단했나." 1주 후 쓴 runbook은 디테일이 빠진 일반론.`]}),`
`,(0,r.jsx)(t.h2,{children:`runbook 최소 항목`}),`
`,(0,r.jsx)(t.p,{children:`새벽 4시 알람 받은 본인 / 동료가 처음부터 추리하지 않게 만드는 최소 정보.`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`## 증상
- 사용자가 X 못 함, Y 페이지 5xx

## 확인 명령
- dashboard URL
- \`kubectl get pods -n payment | grep error\`
- recent deploys 10분 안

## 임시 패치
- rollback: \`kubectl rollout undo deployment/payment\`
- 또는 feature flag off: \`payment.new_flow = false\`

## 근본 수정
- (issue 링크) 다음 sprint

## 회피 조건
- 신규 코드 deploy 후 10분 안에 5xx 비율 ↑면 즉시 rollback
`})}),`
`,(0,r.jsx)(t.p,{children:`5가지만 있어도 다음 새벽이 다르다.`}),`
`,(0,r.jsx)(t.h2,{children:`회고와 한 자리에서`}),`
`,(0,r.jsxs)(t.p,{children:[`장애 회고는 보통 사람을 모은다. runbook은 그 회고와 `,(0,r.jsx)(t.strong,{children:`한 자리에서`}),` 쓴다. 회고 끝나면 항목들이 다 모여 있다. 다른 시점에 다시 모을 필요가 없다.`]}),`
`,(0,r.jsx)(t.p,{children:`회고 마지막 30분은 runbook 작성. 항상.`}),`
`,(0,r.jsx)(t.h2,{children:`미루면 안 쓰는 이유`}),`
`,(0,r.jsx)(t.p,{children:`"내일 좀 더 정신 맑을 때"는 함정이다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`내일은 다른 일이 들어옴`}),`
`,(0,r.jsx)(t.li,{children:`잊지 않을 거라는 확신은 매번 깨짐`}),`
`,(0,r.jsx)(t.li,{children:`회고 자리의 동료들이 흩어지면 다시 모으기 어려움`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`24h가 절대 임계는 아니지만, `,(0,r.jsx)(t.strong,{children:`회고 직후 한 자리에서`}),`가 가장 안 미루는 방법.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`너무 자세하게 쓰려다 안 쓰게 됨`}),`: 5분짜리 임시 runbook이 30분짜리 완벽 runbook보다 100배 가치 있다. 다음에 보강.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`1인 단위 runbook`}),`: "(나만 아는 명령어)"가 들어가면 동료가 새벽에 못 따라간다. 명령어 풀로.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`runbook 링크 알람에 없음`}),`: runbook은 있는데 알람 페이로드에 링크 없으면 새벽에 못 찾는다. 알람 룰에 runbook URL 박는다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`6개월 후 runbook이 stale`}),`: 시스템 바뀌면 runbook도 바뀌어야. 분기 1회 readthrough.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`runbook은 `,(0,r.jsx)(t.strong,{children:`다음 새벽 4시의 본인`}),`을 위한 선물이다. 24h 안에 쓰지 않으면 그 선물은 없는 것과 같다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/good-alert-four-criteria`,children:`/notes/good-alert-four-criteria`}),` — 알람 페이로드에 runbook 링크
`,(0,r.jsx)(t.a,{href:`/notes/incident-temp-vs-root`,children:`/notes/incident-temp-vs-root`}),` — 임시 패치 timeline을 runbook으로
`,(0,r.jsx)(t.a,{href:`/notes/incident-monitoring-gap`,children:`/notes/incident-monitoring-gap`}),` — 회고와 한 자리에서 runbook + 알람 룰
`,(0,r.jsx)(t.a,{href:`/cases/team-onboarding-doc-system`,children:`/cases/team-onboarding-doc-system`}),` — runbook도 24h 안에 쓰는 문서 시스템의 일부
`,(0,r.jsx)(t.a,{href:`/notes/write-why-not-what`,children:`/notes/write-why-not-what`}),` — runbook도 명령어가 아니라 판단 근거를`]})]})}function Wr(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Ur,{...e})}):Ur(e)}var Gr=e({default:()=>Jr,frontmatter:()=>Kr}),Kr={title:`SameSite=Lax vs Strict — 3rd party context에서 일어나는 일`,growth:`Seedling`,topics:[`security`,`browser`,`cookie`,`web`],summary:`쿠키 SameSite 속성의 3가지 값(Lax·Strict·None)이 실제로 어떻게 다른지. 3rd party cookie deprecation 시대에 어떤 값을 골라야 하는지.`,plantedAt:`2026-05-28`,lastTendedAt:`2026-05-28`};function qr(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`SameSite의 핵심 질문`}),`
`,(0,r.jsx)(t.p,{children:`쿠키 SameSite 속성은 한 질문에 답한다.`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`이 쿠키를 `,(0,r.jsx)(t.strong,{children:`다른 사이트에서 우리 사이트로 가는 요청`}),`에 함께 보낼 것인가?`]}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`이게 cross-site / 3rd party context의 정의다. SameSite의 세 값은 이 질문에 다른 답을 한다.`}),`
`,(0,r.jsx)(t.h2,{children:`SameSite=Strict — 보낸 적이 없다`}),`
`,(0,r.jsxs)(t.p,{children:[`cross-site 요청에 `,(0,r.jsx)(t.strong,{children:`절대 쿠키 안 보냄`}),`.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`Set-Cookie: session=abc123; SameSite=Strict
`})}),`
`,(0,r.jsx)(t.p,{children:`다른 사이트에서 우리 사이트 링크를 클릭해서 들어와도 쿠키 안 보낸다. 즉, 사용자가 외부에서 들어오는 첫 요청에는 로그인 세션이 없다. 우리 사이트 안에서 다시 클릭해야 쿠키가 붙는다.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`사용 케이스`}),`: 매우 민감한 작업(은행 송금, 비밀번호 변경). 일반 로그인 세션에는 과함.`]}),`
`,(0,r.jsx)(t.h2,{children:`SameSite=Lax — top-level navigation은 OK`}),`
`,(0,r.jsxs)(t.p,{children:[`cross-site 요청 중 `,(0,r.jsx)(t.strong,{children:`사용자가 명시적으로 우리 사이트로 이동하는 경우`}),`에만 쿠키 보냄.`]}),`
`,(0,r.jsx)(t.p,{children:`구체적으로:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`✅ 다른 사이트에서 우리 사이트 링크 클릭 (top-level navigation, GET)`}),`
`,(0,r.jsx)(t.li,{children:`✅ 주소창에 우리 사이트 URL 직접 입력`}),`
`,(0,r.jsx)(t.li,{children:`❌ 다른 사이트의 iframe에서 우리 사이트 호출`}),`
`,(0,r.jsx)(t.li,{children:`❌ 다른 사이트가 우리 사이트로 POST/PUT/DELETE`}),`
`,(0,r.jsxs)(t.li,{children:[`❌ 다른 사이트의 `,(0,r.jsx)(t.code,{children:`<img src>`}),` 같은 sub-resource 요청`]}),`
`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`Set-Cookie: session=abc123; SameSite=Lax
`})}),`
`,(0,r.jsx)(t.p,{children:`대부분의 일반 로그인 세션은 Lax가 적절. CSRF 공격(다른 사이트가 우리 사이트로 POST)을 막으면서 사용자 흐름은 자연스럽다.`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`현재 브라우저 디폴트`}),`: SameSite 미지정 쿠키는 Chrome/Firefox/Safari가 자동으로 Lax 취급.`]}),`
`,(0,r.jsx)(t.h2,{children:`SameSite=None — 모든 cross-site에 보냄 (Secure 필수)`}),`
`,(0,r.jsxs)(t.p,{children:[`cross-site 요청 종류 무관하게 `,(0,r.jsx)(t.strong,{children:`항상`}),` 쿠키 보냄. 단, 반드시 `,(0,r.jsx)(t.code,{children:`Secure`}),` 같이.`]}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:`Set-Cookie: session=abc123; SameSite=None; Secure
`})}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:`Secure`}),` 없으면 브라우저가 쿠키 자체를 거부한다.`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:`사용 케이스`}),`: 진짜 cross-site 통신이 필요한 경우.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`iframe 안에서 동작하는 위젯 (chat·결제·comments)`}),`
`,(0,r.jsx)(t.li,{children:`다른 도메인의 API를 호출하는 SPA (CORS + cookies)`}),`
`,(0,r.jsx)(t.li,{children:`광고 SDK / 트래킹`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`3rd party cookie deprecation의 의미`}),`
`,(0,r.jsxs)(t.p,{children:[`Chrome이 3rd party 쿠키를 차단하는 흐름은 SameSite=None 쿠키가 `,(0,r.jsx)(t.strong,{children:`결국 안 보내진다`}),`는 의미다. SameSite=None은 cross-site 쿠키이고 그게 곧 3rd party 쿠키니까.`]}),`
`,(0,r.jsx)(t.p,{children:`영향:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`iframe 위젯에서 자체 도메인 쿠키로 세션 유지가 안 됨`}),`
`,(0,r.jsx)(t.li,{children:`광고 트래킹에 사용자 식별 어려움`}),`
`,(0,r.jsx)(t.li,{children:`federated identity(SSO) 흐름 일부 깨짐`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`대응:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`First-party set 등록`}),`: 같은 회사 도메인을 한 묶음으로 등록 (Chrome First-Party Sets)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`CHIPS (Partitioned Cookies)`}),`: `,(0,r.jsx)(t.code,{children:`Set-Cookie: ...; Partitioned; SameSite=None; Secure`}),` — 호출한 top-level 사이트별로 쿠키 분리`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`iframe 대신 popup`}),`: top-level navigation으로 우회`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`무엇을 골라야 하나`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`시나리오`}),(0,r.jsx)(t.th,{children:`추천`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`일반 로그인 세션`}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:`Lax`}),` (또는 미지정 → 자동 Lax)`]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`송금·비밀번호 변경 같은 민감 작업`}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:`Strict`}),` 별도 쿠키`]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`iframe 위젯 / cross-site API`}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:`None; Secure`}),` (deprecation 대비 CHIPS)`]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`CSRF 토큰`}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:`Strict`}),` (top-level navigation에서도 쿠키 안 가도 됨)`]})]})]})]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Strict로 일반 세션 만들기`}),`: 사용자가 외부 링크로 들어오면 로그아웃 상태처럼 보임. UX 손상.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`None만 쓰고 Secure 안 붙임`}),`: 브라우저가 쿠키 자체를 무시함. HTTP 환경에서 디버깅하다 빠지기 쉬운 함정.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`3rd party cookie deprecation을 무시`}),`: iframe 위젯이나 cross-domain SPA가 어느 날 갑자기 동작 안 함. 사전 마이그레이션 (CHIPS, First-Party Sets) 필요.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`CSRF 토큰을 Lax 쿠키로`}),`: Lax는 top-level GET에서 쿠키를 보낸다. CSRF 토큰을 Lax로 두면 GET 기반 CSRF 일부 시나리오에서 취약. Strict 권장.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`개발 환경(localhost)에서 Secure 누락`}),`: Secure는 HTTPS 필수인데 localhost는 예외 처리(브라우저별 차이). 프로덕션에서 처음으로 Secure 누락 문제 발견하는 경우.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`Lax 디폴트 가정을 모든 브라우저에 적용`}),`: Safari·Firefox·구버전 Chrome 동작이 살짝 다르다. 명시적으로 SameSite 값을 적는 게 안전.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`SameSite는 `,(0,r.jsx)(t.strong,{children:`CSRF 방어 + 사용자 흐름`}),`의 균형을 결정한다. 대부분 Lax가 정답이고, iframe·cross-site는 None+Secure+Partitioned, 민감 작업은 Strict 별도 쿠키. 3rd party cookie deprecation 시대엔 None 쿠키를 의식적으로 줄여야 한다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/dead-dependency-hidden-cost`,children:`/notes/dead-dependency-hidden-cost`}),` — 보안 의존성의 숨은 비용
`,(0,r.jsx)(t.a,{href:`/notes/n-plus-one-query-trap`,children:`/notes/n-plus-one-query-trap`}),` — 흔한 백엔드 함정`]})]})}function Jr(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(qr,{...e})}):qr(e)}var Yr=e({default:()=>Qr,frontmatter:()=>Xr}),Xr={title:`본인 페르소나로 자기 평가하기 — 외부 페르소나가 못 짚는 BLOCKING`,growth:`Seedling`,topics:[`workflow`,`design-process`,`self-review`,`automation`],summary:`시스템 설계 시 외부 페르소나는 기능적 위험을 잡지만, 사용자 본인 페르소나만이 지속 가능성·번아웃·일상 운영성 같은 솔직한 BLOCKING을 짚는다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-29`};function Zr(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`발견`}),`
`,(0,r.jsxs)(t.p,{children:[`자동화 PoC를 4 페르소나(SRE·법무·콘텐츠 전략가·본인)로 평가했더니, 가장 솔직한 BLOCKING을 짚은 건 외부 페르소나가 아니라 `,(0,r.jsx)(t.strong,{children:`본인 페르소나`}),`였다.`]}),`
`,(0,r.jsx)(t.p,{children:`본인 페르소나의 honest_concern:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"운영 지속률 35%"`}),`
`,(0,r.jsx)(t.li,{children:`"가장 두려운 건 검토 부담이 아니라 회사 정보 유출 1건"`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`외부 페르소나가 잡은 위험은 모두 `,(0,r.jsx)(t.strong,{children:`기능적`}),`이었다:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`SRE — measurement·복구·운영 비용`}),`
`,(0,r.jsx)(t.li,{children:`법무 — NDA·credentials·incident response`}),`
`,(0,r.jsx)(t.li,{children:`콘텐츠 전략가 — 톤 일관성·자동 발행 신뢰성`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`그러나 누구도 "이 시스템이 6개월 후에도 사용될까?", "휴면 후 재시작 가능할까?", "회사 스프린트 시즌에도 매일 7분이 가능한가?" 같은 `,(0,r.jsx)(t.strong,{children:`지속 가능성`}),` 차원은 짚지 못했다.`]}),`
`,(0,r.jsx)(t.h2,{children:`왜 본인 페르소나가 다른가`}),`
`,(0,r.jsxs)(t.p,{children:[`외부 페르소나는 시스템이 `,(0,r.jsx)(t.strong,{children:`동작하는 시나리오`}),`를 본다. 본인 페르소나는 시스템 안에서 `,(0,r.jsx)(t.strong,{children:`살아야 하는 시나리오`}),`를 본다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"이걸 매일 7분 안에 할 수 있는가" — 본인만 안다`}),`
`,(0,r.jsx)(t.li,{children:`"회사 스프린트 시즌에도 지속 가능한가" — 본인만 안다`}),`
`,(0,r.jsx)(t.li,{children:`"한 달 쉬고 다시 시작할 동기가 있는가" — 본인만 안다`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`외부 페르소나가 "이 시스템은 안전하다"라고 결론 내려도, 본인이 "안 쓸 것 같다"고 하면 시스템 가치는 0이다.`}),`
`,(0,r.jsx)(t.h2,{children:`적용`}),`
`,(0,r.jsxs)(t.p,{children:[`시스템 설계 시 페르소나 토론에 `,(0,r.jsx)(t.strong,{children:`반드시 사용자 본인 페르소나 포함`}),`:`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`외부 페르소나 N명 + 본인 페르소나 1명`}),`
`,(0,r.jsxs)(t.li,{children:[`본인 페르소나는 `,(0,r.jsx)(t.code,{children:`honest_likelihood_of_sustained_use`}),` 같은 정량 추정 출력 (예: "35%")`]}),`
`,(0,r.jsxs)(t.li,{children:[`본인 페르소나의 `,(0,r.jsx)(t.code,{children:`honest_concern`}),`은 다른 페르소나의 `,(0,r.jsx)(t.code,{children:`top_3_fixes`}),` 위에 둔다`]}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`quality-gate`}),` 패턴에서도 마찬가지 — rubric에 "운영 지속성" 같은 본인 차원을 별도 항목으로 두면 외부 페르소나가 안 잡는 BLOCKING이 자동으로 드러난다.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`본인 페르소나가 너무 보수적`}),`일 위험: "그냥 안 만드는 게 낫다"로 끝나면 진전이 없음. 외부 페르소나의 "어떻게든 만들어야"와 cross-check 필요.`]}),`
`,(0,r.jsxs)(t.li,{children:[`본인 페르소나의 `,(0,r.jsx)(t.strong,{children:`honest_concern을 그대로 BLOCKING으로 받지 말 것`}),`: 35% 지속률이라도 "passive trigger로 70%까지 끌어올릴 수 있는가" 같은 mitigation 탐색이 먼저.`]}),`
`,(0,r.jsx)(t.li,{children:`자기 자신을 잘 안다는 환상: 평소엔 자기 인식이 평균적으로만 정확. 페르소나 형식으로 분리하면 더 솔직해진다.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`위임 보정의 입력으로`}),`
`,(0,r.jsxs)(t.p,{children:[`본인 페르소나의 honest_concern은 `,(0,r.jsx)(t.a,{href:`/essays/delegation-autonomy-calibration`,children:`위임 자율성 보정`}),`에서도 핵심 입력이다. 시스템(또는 AI 에이전트)에 일을 더 넘길지 결정할 때, 외부 검증("동작하는가")만으로는 부족하다. "이걸 6개월 후에도 내가 운영할 수 있는가", "이 자율성 수준이 내가 감당 가능한가"는 본인 페르소나만 답한다.`]}),`
`,(0,r.jsxs)(t.p,{children:[`자율성을 넓히는 신호는 외부 검증(결과)이지만, 넓히면 `,(0,r.jsx)(t.strong,{children:`안 되는`}),` 신호는 종종 본인 페르소나의 솔직한 우려에서 나온다.`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심 한 줄`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`시스템이 `,(0,r.jsx)(t.strong,{children:`돌아갈지`}),`는 외부 페르소나가 알지만, 시스템이 `,(0,r.jsx)(t.strong,{children:`살아남을지`}),`는 본인 페르소나만 안다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`/notes/one-way-two-way-door`}),` — 본인 페르소나가 짚는 BLOCKING은 보통 one-way door, 외부 페르소나는 two-way door에 강함
`,(0,r.jsx)(t.a,{href:`/notes/automation-vs-governance`,children:`/notes/automation-vs-governance`}),` — 같은 PoC에서 나온 자동화 거버넌스 부담 인사이트
`,(0,r.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`/notes/quality-gate-loop`}),` — rubric에 본인 차원을 별도 축으로
`,(0,r.jsx)(t.a,{href:`/essays/delegation-autonomy-calibration`,children:`/essays/delegation-autonomy-calibration`}),` — 본인 페르소나가 자율성 확대의 brake
`,(0,r.jsx)(t.a,{href:`/cases/personas-debate-system`,children:`/cases/personas-debate-system`}),` — 본인 페르소나를 포함한 토론 시스템 케이스`]})]})}function Qr(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(Zr,{...e})}):Zr(e)}var $r=e({default:()=>ni,frontmatter:()=>ei}),ei={title:`작게 배포하고 다시 읽기 — 한 사이클에 다 하지 않기`,growth:`Budding`,topics:[`workflow`,`deploy`,`design-process`],summary:`큰 변경을 한 번에 하려는 유혹이 가장 큰 위험. 작은 사이클로 쪼개 매 사이클마다 빌드·배포·사용자 반응 확인.`,plantedAt:`2026-03-30`,lastTendedAt:`2026-05-19`};function ti(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`원칙`}),`
`,(0,r.jsx)(t.p,{children:`큰 변경(디자인 리뉴얼, 모바일 최적화, 콘텐츠 추가)을 한 번에 다 하려 하면:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`머지 충돌 ↑`}),`
`,(0,r.jsx)(t.li,{children:`버그 한 번에 누적 → 원인 추적 어려움`}),`
`,(0,r.jsx)(t.li,{children:`사용자 피드백 받기 전까지 큰 비용 지출`}),`
`,(0,r.jsx)(t.li,{children:`롤백 비용 = 전부 폐기`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`작게 쪼개면 모든 측면이 개선된다.`}),`
`,(0,r.jsx)(t.h2,{children:`실제 적용 (이 사이트)`}),`
`,(0,r.jsx)(t.p,{children:`오늘 작업이 한 번에 끝나지 않은 이유:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`Phase 1: 라우팅·MDX 베이스`}),`
`,(0,r.jsx)(t.li,{children:`Phase 3: 인터랙티브 (검색·단축키·테마)`}),`
`,(0,r.jsx)(t.li,{children:`Phase 4: Editorial Modern 디자인`}),`
`,(0,r.jsx)(t.li,{children:`Phase 5: 누런 톤 박멸 (quality-gate 3 사이클)`}),`
`,(0,r.jsx)(t.li,{children:`Phase 7: 모바일 GNB`}),`
`,(0,r.jsx)(t.li,{children:`Phase 8: 모바일 quality-gate (3 사이클)`}),`
`,(0,r.jsx)(t.li,{children:`...`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`각 Phase마다 빌드·push·라이브 반응 확인. 다음 Phase 결정.`}),`
`,(0,r.jsx)(t.p,{children:`만약 처음부터 "사이트 전체 리뉴얼"을 한 commit으로 했다면? "엄청 못생겼어" 피드백을 받는 시점에 되돌릴 수가 없다.`}),`
`,(0,r.jsx)(t.h2,{children:`가이드`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`한 commit = 한 가지 관심사`}),`
`,(0,r.jsx)(t.li,{children:`한 PR = 머지 후 한 번에 검증 가능한 단위`}),`
`,(0,r.jsx)(t.li,{children:`한 세션 = 1-3 commit (그 이상이면 다음 세션 분리)`}),`
`,(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:`각 단계마다 빌드 통과 + 사용자 가시 동작`})}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"한 번에 끝내야 효율적"이라는 환상. 실제로는 작은 사이클이 누적 효율 더 큼.`}),`
`,(0,r.jsx)(t.li,{children:`작게 쪼개느라 추상화 + 추가 작업 = 본 작업보다 큼. 작은 사이클의 비용 < 큰 사이클의 위험일 때만 적용.`}),`
`,(0,r.jsx)(t.li,{children:`"이건 작아서 작게 못 쪼개" — 대부분 사실 아님. 5분 이상 작업이면 쪼갤 자리 있음.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.p,{children:[`작게 배포하고 다시 읽는 것은 `,(0,r.jsx)(t.strong,{children:`사용자 반응을 의사결정 입력으로 사용하는 패턴`}),`이다. 큰 commit은 본인 직관에만 의존한다.`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/incrementally-correct`,children:`/notes/incrementally-correct`}),` — 작은 사이클은 점진적으로 정확해지는 자세와 짝
`,(0,r.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),` — 각 사이클에 결정론적 검증을 끼워야 작은 배포가 신호가 된다
`,(0,r.jsx)(t.a,{href:`/notes/plan-mode-one-shot`,children:`/notes/plan-mode-one-shot`}),` — 한 사이클 안에서는 plan→shot으로 재작업 줄이기`]})]})}function ni(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(ti,{...e})}):ti(e)}var ri=e({default:()=>oi,frontmatter:()=>ii}),ii={title:`spike — 미지의 영역은 버릴 코드로 학습한다`,growth:`Budding`,topics:[`swe`,`prototyping`,`learning`],summary:`모르는 기술/API/문제는 바로 v1.0을 만들 수 없다. 30분~2시간짜리 spike로 한 가지만 배우고 버린다. 본 구현은 그 학습 위에 처음부터 다시.`,plantedAt:`2026-04-25`,lastTendedAt:`2026-05-29`};function ai(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제 — 모르는 영역에서 바로 v1.0`}),`
`,(0,r.jsx)(t.p,{children:`새 라이브러리, 새 API, 새 패턴. 처음 만지는 영역에서 바로 "잘 만드려고" 하면 두 가지가 동시에 일어난다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`잘못된 기반 위에 정교한 구조를 쌓음`}),`
`,(0,r.jsx)(t.li,{children:`도중에 깨달은 사실을 반영하려면 반쯤 다시 만들어야 함`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`결과: 시간은 1.5배, 코드는 누더기. 더 큰 문제는 `,(0,r.jsx)(t.strong,{children:`무엇을 모르는지 모른다`}),`는 것.`]}),`
`,(0,r.jsx)(t.h2,{children:`해법 — spike (버릴 코드)`}),`
`,(0,r.jsxs)(t.p,{children:[`30분~2시간 안에 `,(0,r.jsx)(t.strong,{children:`한 가지 질문만`}),` 답하는 최소 코드를 만든다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"이 API의 응답 형식이 어떻게 생겼나"`}),`
`,(0,r.jsx)(t.li,{children:`"이 라이브러리의 성능이 우리 케이스에서 받아들일만한가"`}),`
`,(0,r.jsx)(t.li,{children:`"이 패턴이 우리 코드베이스의 컨벤션과 충돌하지 않는가"`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`spike의 핵심은 `,(0,r.jsx)(t.strong,{children:`버릴 각오로 만든다`}),`는 것. 코드 정리 0, 테스트 0, 추상화 0. 답만 얻는다.`]}),`
`,(0,r.jsx)(t.h2,{children:`본 구현은 처음부터 다시`}),`
`,(0,r.jsxs)(t.p,{children:[`spike에서 얻은 학습으로 `,(0,r.jsx)(t.strong,{children:`본 구현을 처음부터 다시`}),` 만든다. spike 코드를 정리해서 본 구현으로 쓰지 않는다.`]}),`
`,(0,r.jsx)(t.p,{children:`이게 어려운 부분이다. 동작하는 코드를 버리는 게 비효율로 느껴진다. 하지만 다시 쓰는 데 드는 시간은 본 구현 시간의 일부. spike 코드를 정리하는 시간보다 빠르다.`}),`
`,(0,r.jsx)(t.h2,{children:`Always v1.0과의 짝`}),`
`,(0,r.jsx)(t.p,{children:`본 구현은 항상 v1.0(완전체)이다. spike는 v0(throwaway)이다.`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`v0: 답만 얻는 코드. 버린다.`}),`
`,(0,r.jsx)(t.li,{children:`v1.0: 완전체 코드. 컨벤션·테스트·문서·에러 처리 다 있다.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`"미완성 v0.5"는 만들지 않는다. v0이거나 v1.0이거나.`}),`
`,(0,r.jsx)(t.h2,{children:`진전 기반 timebox`}),`
`,(0,r.jsxs)(t.p,{children:[`spike는 시간이 아니라 `,(0,r.jsx)(t.strong,{children:`진전`}),`으로 끝낸다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`답이 명확해지면 즉시 종료 (15분일 수도)`}),`
`,(0,r.jsx)(t.li,{children:`1시간 했는데 새 정보 0이면 접근 변경 또는 중단`}),`
`,(0,r.jsx)(t.li,{children:`"같은 에러 3번 반복"이면 다른 각도`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`시간 박스만 두면 의미 없이 시간 채우게 됨. 진전 박스가 진짜.`}),`
`,(0,r.jsx)(t.h2,{children:`구체 예시 — 새 API 응답 형식 spike`}),`
`,(0,r.jsx)(t.p,{children:`홈레이더에서 국토부 RTMS API를 처음 붙일 때. 문서가 빈약하고 응답 형식이 불명확했다.`}),`
`,(0,r.jsx)(t.p,{children:`바로 v1.0(zod 스키마 + 에러 처리 + 재시도)을 만들기 시작하면, 응답 형식을 잘못 가정한 채 정교한 구조를 쌓는다. 실제 응답을 받아보면 가정이 틀려서 절반을 다시 만든다.`}),`
`,(0,r.jsx)(t.p,{children:`대신 30분 spike:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`// spike.ts — 버릴 코드. 에러 처리 0, 타입 0.
const res = await fetch(RTMS_URL + params);
const text = await res.text();
console.log(text);  // 진짜 응답 형식만 본다
`})}),`
`,(0,r.jsxs)(t.p,{children:[`답 한 가지만 얻는다: "응답이 XML이구나, 거래가 배열은 `,(0,r.jsx)(t.code,{children:`<items>`}),` 안에 있고, 빈 결과는 `,(0,r.jsx)(t.code,{children:`<items/>`}),` 빈 태그구나." 이 학습 후 spike를 `,(0,r.jsx)(t.strong,{children:`버리고`}),` 본 구현을 zod 스키마부터 처음 만든다. 가정이 아니라 사실 위에 쌓으니 다시 만들 일이 없다.`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`spike를 정성껏 만드는 것`}),`: 30분짜리 spike가 4시간이 되면 spike의 의미가 없다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`spike를 본 구현으로 쓰는 것`}),`: 동작은 하지만 기반이 없다. 6개월 후 본인이 모른다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`spike 결과를 기록 안 함`}),`: spike에서 배운 걸 본 구현 시작 전에 1-2줄로 적는다. 안 적으면 다음 spike 때 또 같은 걸 배운다.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`spike 없이 바로 v1.0`}),`: "이 정도면 알아"의 함정. 실제로 만져보면 모른다는 게 드러난다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`spike는 `,(0,r.jsx)(t.strong,{children:`무엇을 모르는지 알아내는`}),` 도구다. 버릴 각오로 만들 때만 효과가 있다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/incrementally-correct`,children:`/notes/incrementally-correct`}),` — spike 학습 위에 점진적으로 정확해지기
`,(0,r.jsx)(t.a,{href:`/notes/small-deploy-reread`,children:`/notes/small-deploy-reread`}),` — 작게 배포하고 다시 읽기
`,(0,r.jsx)(t.a,{href:`/notes/plan-mode-one-shot`,children:`/notes/plan-mode-one-shot`}),` — spike로 학습 후 Plan Mode로 본 구현 1-shot
`,(0,r.jsx)(t.a,{href:`/notes/public-api-integration-patterns`,children:`/notes/public-api-integration-patterns`}),` — 새 API 붙이기의 일반 패턴
`,(0,r.jsx)(t.a,{href:`/notes/essential-vs-accidental-complexity`,children:`/notes/essential-vs-accidental-complexity`}),` — spike가 본질 복잡도를 노출한다`]})]})}function oi(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(ai,{...e})}):ai(e)}var si=e({default:()=>ui,frontmatter:()=>ci}),ci={title:`테스트 vs 타입 — 둘 다 안 한다면 어디부터`,growth:`Budding`,topics:[`testing`,`typescript`,`swe`],summary:`두 가지 모두 가치 있지만, 시간 제약 시 우선순위가 갈린다. 외부 경계와 비즈니스 룰은 테스트, 내부 함수 시그니처는 타입. 둘은 보완 관계.`,plantedAt:`2026-04-20`,lastTendedAt:`2026-05-19`};function li(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`질문`}),`
`,(0,r.jsx)(t.p,{children:`새 프로젝트 시작. 시간 제한. 둘 중 어디부터?`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`타입 (TypeScript 도입)`}),`
`,(0,r.jsx)(t.li,{children:`테스트 (Jest·Vitest 도입)`}),`
`]}),`
`,(0,r.jsxs)(t.p,{children:[`답은 "둘 다", "상황에 따라" 같은 정답 회피가 아니다. `,(0,r.jsx)(t.strong,{children:`각자 잘 잡는 영역이 다르다.`})]}),`
`,(0,r.jsx)(t.h2,{children:`잘 잡는 영역`}),`
`,(0,r.jsx)(t.h3,{children:`타입 (TypeScript)`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`내부 함수 시그니처`}),`: `,(0,r.jsx)(t.code,{children:`(a: User, b: Order) => Receipt`})]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`리팩토링 안전성`}),`: 이름 바꿔도 호출자 자동 추적`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`자동완성·IDE 도움`}),`: 개발 속도 ↑`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`타입 자체가 문서`}),`: 함수 호출 시 시그니처가 곧 사용법`]}),`
`]}),`
`,(0,r.jsx)(t.h3,{children:`테스트`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`비즈니스 룰`}),`: "주말은 영업일이 아니다"`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`엣지 케이스`}),`: null/undefined·빈 배열·overflow`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`외부 통신`}),`: API·DB·파일 시스템`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`회귀 방지`}),`: 한 번 잡은 버그가 다시 안 나옴`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`우선순위 가이드`}),`
`,(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:`상황`}),(0,r.jsx)(t.th,{children:`우선`})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`단일 함수 라이브러리 (npm 패키지)`}),(0,r.jsx)(t.td,{children:`타입 우선 — 사용자 IDE 친화`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`비즈니스 로직 중심 SaaS`}),(0,r.jsx)(t.td,{children:`테스트 우선 — 룰 변화에 회귀`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`외부 API 통합 많음`}),(0,r.jsx)(t.td,{children:`테스트 우선 — 통합 케이스 잡기`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`팀 새로 합류, 코드베이스 큼`}),(0,r.jsx)(t.td,{children:`타입 우선 — 학습 곡선 ↓`})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:`빠른 prototype`}),(0,r.jsx)(t.td,{children:`둘 다 미루기 OK, MVP 후 도입`})]})]})]}),`
`,(0,r.jsx)(t.h2,{children:`함께 쓰면 더 강함`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`// 타입: 시그니처
function calculateReceipt(order: Order): Receipt { ... }

// 테스트: 룰
test('weekend orders get +10% surcharge', () => {
  expect(calculateReceipt(weekendOrder).total).toBe(110);
});
`})}),`
`,(0,r.jsx)(t.p,{children:`타입은 컴파일 시점, 테스트는 런타임. 둘이 다른 시점에서 다른 종류를 잡는다.`}),`
`,(0,r.jsx)(t.h2,{children:`둘 다 안 하는 위험`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`작은 변경이 멀리서 깨짐 (회귀)`}),`
`,(0,r.jsx)(t.li,{children:`"여기 호출하면 뭐 들어와?" 매번 확인`}),`
`,(0,r.jsx)(t.li,{children:`새 팀원 학습 곡선 가파름`}),`
`,(0,r.jsx)(t.li,{children:`6개월 후 본인이 모름`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`"둘 다 안 함 + 나중에 도입"`}),`: prototype 단계에서 미루기 시작하면 영원히 안 됨. MVP 직후가 최적.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`타입 통과 = 안전하다는 거짓 신뢰`}),`: 타입은 내부 일관성. 외부 데이터·런타임은 못 잡음.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`테스트를 위한 추상화 과잉`}),`: 의존성 주입·인터페이스 분리를 테스트만을 위해 → 본 코드 복잡도 ↑. 테스트하기 어렵다면 신호이지 강제가 아님.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`늦게 도입`}),`: 1만 줄 코드에 타입 도입은 한 사람 몫의 작업. 작을 때 도입이 비용 최소.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`타입은 `,(0,r.jsx)(t.strong,{children:`내부 일관성`}),`, 테스트는 `,(0,r.jsx)(t.strong,{children:`외부 약속`}),`. 둘은 같은 문제를 다른 시점에서 잡는다.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/typescript-false-safety`,children:`/notes/typescript-false-safety`}),` — 타입이 못 잡는 영역
`,(0,r.jsx)(t.a,{href:`/notes/react-19-use-hook`,children:`/notes/react-19-use-hook`}),` — 런타임이 타입과 충돌하는 케이스`]})]})}function ui(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(li,{...e})}):li(e)}var di=e({default:()=>mi,frontmatter:()=>fi}),fi={title:`TypeScript의 거짓 안전감 — 타입이 통과해도 버그는 남는다`,growth:`Evergreen`,topics:[`typescript`,`swe`,`testing`],summary:`TypeScript 통과 = 안전이라는 직관. 그러나 런타임 데이터·외부 API·any 의 escape hatch는 컴파일러가 못 본다. 타입은 안전의 일부일 뿐.`,plantedAt:`2026-02-10`,lastTendedAt:`2026-05-30`};function pi(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`거짓 안전감`}),`
`,(0,r.jsx)(t.p,{children:`TypeScript 통과 → 빌드 통과 → "이제 안전" 직관. 자주 틀린다.`}),`
`,(0,r.jsx)(t.p,{children:`다음 케이스가 모두 컴파일러 통과:`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-ts`,children:`const data = await fetch('/api/user').then(r => r.json());
// data 타입은 any. 모든 접근 통과.

const user = data as User;
// 거짓 약속. 실제 응답이 User라는 보장 0.

if (user.email.includes('@')) { ... }
// email이 undefined여도 컴파일은 통과
`})}),`
`,(0,r.jsx)(t.p,{children:`타입은 컴파일 시 시점의 정적 약속. 런타임 데이터가 타입을 만족한다는 보장은 아니다.`}),`
`,(0,r.jsx)(t.h2,{children:`컴파일러가 못 보는 것`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`외부 API 응답`}),`: 서버가 schema 바꾸면 런타임에 깨짐`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`JSON.parse`}),`: 결과는 `,(0,r.jsx)(t.code,{children:`any`}),`. 그 후 캐스팅은 거짓 약속`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.code,{children:`as`}),` 캐스팅`]}),`: 명시적 컴파일러 우회`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.code,{children:`any`}),` 전염`]}),`: 한 곳에 `,(0,r.jsx)(t.code,{children:`any`}),` 있으면 그 변수 사용처 모두 `,(0,r.jsx)(t.code,{children:`any`})]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`null/undefined의 비동기 race`}),`: 타입은 `,(0,r.jsx)(t.code,{children:`User`}),`인데 fetch가 안 끝남`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`외부 라이브러리 타입 거짓`}),`: `,(0,r.jsx)(t.code,{children:`@types/foo`}),`가 실제 API와 다름`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`진짜 안전을 위한 도구`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`런타임 검증`}),`: zod·io-ts로 외부 데이터 검증`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:`unknown`})}),`: `,(0,r.jsx)(t.code,{children:`any`}),` 대신. 사용 전 검증 강제`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`유닛 테스트`}),`: 비즈니스 로직·엣지 케이스`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`E2E 테스트`}),`: 실제 통신·UI 시나리오`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`타입 ↔ 런타임 동기화`}),`: schema가 단일 source`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`타입의 진짜 가치`}),`
`,(0,r.jsxs)(t.p,{children:[`타입이 무용한 게 아니다. 다만 `,(0,r.jsx)(t.strong,{children:`타입의 범위를 알고 쓰는 것`}),`이 중요하다.`]}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`타입이 잘 잡는 것`}),`: 내부 로직 일관성, 함수 시그니처, 리팩토링 안전성`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`타입이 못 잡는 것`}),`: 외부 데이터, 비즈니스 룰, 런타임 사이드 이펙트`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`"타입만 잘 잡으면 테스트 안 해도 됨" — 거짓`}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:`@ts-ignore`}),` 한 줄이 그 함수 전체 안전 손상`]}),`
`,(0,r.jsx)(t.li,{children:`타입 통과한 코드를 "검증 끝"으로 받아들이는 PR 리뷰`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsxs)(t.p,{children:[`TypeScript는 `,(0,r.jsx)(t.strong,{children:`안전의 일부`}),`이지 안전 자체가 아니다. 외부 경계엔 zod, 비즈니스 룰엔 테스트, 통합엔 E2E — 타입은 가운데 한 층일 뿐.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/test-or-types-first`,children:`/notes/test-or-types-first`}),` — 타입과 테스트의 역할 분리
`,(0,r.jsx)(t.a,{href:`/notes/react-19-use-hook`,children:`/notes/react-19-use-hook`}),` — 타입이 잡지 못하는 use hook의 런타임 제약`]})]})}function mi(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(pi,{...e})}):pi(e)}var hi=e({default:()=>vi,frontmatter:()=>gi}),gi={title:`vite manualChunks — vendor와 콘텐츠를 분리해 캐시 효율 ↑`,growth:`Seedling`,topics:[`build`,`vite`,`performance`,`frontend`],summary:`단일 청크는 작은 콘텐츠 변경에도 전체 재다운로드. vendor(거의 안 바뀜) + 콘텐츠(자주 바뀜) 분리하면 캐시 hit 비율 ↑, 첫 로드도 줄어든다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-19`};function _i(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`문제`}),`
`,(0,r.jsxs)(t.p,{children:[`Vite 기본 빌드는 모든 코드를 단일 `,(0,r.jsx)(t.code,{children:`index.js`}),`에 번들. 라이브러리·내 코드·콘텐츠가 한 청크. 콘텐츠 한 편 추가 시 전체 청크 해시 변경 → 사용자가 vendor까지 재다운로드.`]}),`
`,(0,r.jsx)(t.p,{children:`콘텐츠 누적량이 50편+ 되면 빌드 경고 (기본 500KB chunkSizeWarningLimit) 트리거.`}),`
`,(0,r.jsx)(t.h2,{children:`해법 — manualChunks`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`build: {
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
`,(0,r.jsx)(t.p,{children:`청크 분리 효과:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`vendor`}),`: react·router·icons 등 거의 안 바뀜 → 브라우저 cache 잘 됨`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`콘텐츠`}),`: 자주 바뀌지만 작음 → 변경분만 invalidate`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`분리 기준`}),`
`,(0,r.jsxs)(t.ol,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`변경 빈도`}),`: 자주 바뀌는 것과 안 바뀌는 것 분리`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`사이즈`}),`: 매우 큰 라이브러리는 별도 (React 181KB → react-vendor)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`사용 빈도`}),`: 첫 로드에 필요한 것과 lazy fetch 가능한 것 분리`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`효과 (실측)`}),`
`,(0,r.jsx)(t.p,{children:`이 사이트 적용 결과:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`첫 로드 raw 514KB → 275KB (-46%)`}),`
`,(0,r.jsx)(t.li,{children:`첫 로드 gzip 150KB → 88KB (-41%)`}),`
`,(0,r.jsx)(t.li,{children:`콘텐츠 한 편 추가 시 vendor 재다운로드 0`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`manualChunks가 너무 미세하면 HTTP 요청 비용 ↑`}),`: HTTP/2 환경이라도 청크 50+ 는 비효율. 의미 단위로 10개 정도가 적정.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`vendor 청크가 작으면 분리 가치 ↓`}),`: 5KB 라이브러리는 main에 합치는 게 효율적.`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`콘텐츠 청크가 라우트와 매핑 안 되면 무의미`}),`: `,(0,r.jsx)(t.code,{children:`/cases`}),` 진입 시 content-cases만 받게 라우팅 일치 필요.`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`단일 청크는 콘텐츠 추가 비용이 누적된다. vendor 분리 한 줄로 캐시 hit 비율이 비선형으로 올라간다.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/fuse-client-side-search`,children:`/notes/fuse-client-side-search`}),` — Fuse 인덱스를 별도 청크로 두면 검색 비활성 사용자에게 비용 0
`,(0,r.jsx)(t.a,{href:`/notes/mdx-content-as-files`,children:`/notes/mdx-content-as-files`}),` — content/* 디렉토리 구조가 청크 분리 기준과 자연스럽게 일치
`,(0,r.jsx)(t.a,{href:`/notes/github-pages-spa-fallback`,children:`/notes/github-pages-spa-fallback`}),` — fallback 흐름의 첫 로드 청크는 가장 먼저 가벼워야 한다`]})]})}function vi(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(_i,{...e})}):_i(e)}var yi=e({default:()=>Si,frontmatter:()=>bi}),bi={title:`코드 주석에는 "왜"를 적어라 — 6개월 후의 자기를 위해`,growth:`Seedling`,topics:[`code-quality`,`writing`,`swe`],summary:`코드는 "무엇"을 한다. 주석은 "왜"를 적어야 한다. 6개월 후의 자기 또는 다른 사람이 이해해야 한다.`,plantedAt:`2026-05-19`,lastTendedAt:`2026-05-19`};function xi(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:`흔한 주석`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`// 사용자 수를 가져온다
const count = users.length;
`})}),`
`,(0,r.jsxs)(t.p,{children:[`이 주석은 0의 가치. 코드 자체가 이미 "사용자 수"를 명확히 말한다. `,(0,r.jsx)(t.strong,{children:`이런 주석을 안 적는 게 낫다`}),` — 노이즈만 만들고 코드와 주석이 어긋날 위험.`]}),`
`,(0,r.jsx)(t.h2,{children:`가치 있는 주석`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`// users 배열이 null인 경우는 OAuth 콜백 직후 race condition.
// 처음에 ?? 0으로 처리했으나 그러면 카운트가 잘못 표시되어
// 명시적 throw로 호출자가 처리하도록 함 (#1234)
const count = users?.length ?? (() => { throw new RaceConditionError(); })();
`})}),`
`,(0,r.jsx)(t.p,{children:`이 주석은:`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`왜`}),` 이 처리가 필요한지 (race condition)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`왜`}),` 다른 방법 안 썼는지 (?? 0의 실패)`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:`링크`}),` (#1234)로 더 깊은 컨텍스트`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`어떤 "왜"인가`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsx)(t.li,{children:`비즈니스 룰의 이유 ("주말은 영업일이 아님")`}),`
`,(0,r.jsx)(t.li,{children:`직관과 다른 코드의 이유 ("성능 때문에 일부러 비효율적인 알고리즘")`}),`
`,(0,r.jsx)(t.li,{children:`하지 않은 것의 이유 ("재시도 로직 추가 안 함 — idempotent하지 않음")`}),`
`,(0,r.jsx)(t.li,{children:`트레이드오프 ("정확성 vs 응답속도에서 응답속도 선택")`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`핵심 원칙`}),`
`,(0,r.jsxs)(t.blockquote,{children:[`
`,(0,r.jsx)(t.p,{children:`미래의 자기 또는 다른 사람이 "왜 이렇게 했지?"라고 물을 가능성이 있으면, 그 답을 미리 써둔다.`}),`
`]}),`
`,(0,r.jsx)(t.p,{children:`코드는 시간이 지나면 컨텍스트가 사라진다. 주석은 컨텍스트를 보존한다.`}),`
`,(0,r.jsx)(t.h2,{children:`함정`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`모든 줄에 "왜" 주석 = 노이즈. `,(0,r.jsx)(t.strong,{children:`놀라움이 있는 코드`}),`에만.`]}),`
`,(0,r.jsx)(t.li,{children:`"왜"가 바뀌면 주석도 갱신해야 함. 안 하면 오해 유발.`}),`
`,(0,r.jsx)(t.li,{children:`진짜 "왜"는 commit message + PR description + linked issue에 잘 분산. 주석은 코드 옆에 두는 보조.`}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`적용`}),`
`,(0,r.jsx)(t.p,{children:`읽기 좋은 코드 = (자명한 코드) + (자명하지 않은 부분의 "왜" 주석). 둘 다 필요.`}),`
`,(0,r.jsx)(t.h2,{children:`관련`}),`
`,(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:`/notes/digital-garden-vs-blog`,children:`/notes/digital-garden-vs-blog`}),` — "왜"를 보존하는 글쓰기는 디지털 가든의 본질과 같은 결
`,(0,r.jsx)(t.a,{href:`/notes/mdx-content-as-files`,children:`/notes/mdx-content-as-files`}),` — 파일 단위 콘텐츠는 "왜"를 frontmatter와 본문에 함께 담기 좋다
`,(0,r.jsx)(t.a,{href:`/notes/last-tended-signal`,children:`/notes/last-tended-signal`}),` — "왜"가 갱신될 때마다 lastTendedAt으로 살아있음 신호`]})]})}function Si(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(xi,{...e})}):xi(e)}export{rt as $,bn as A,Ht as B,Vn as C,kn as D,Mn as E,rn as F,Dt as G,It as H,en as I,vt as J,wt as K,Zt as L,mn as M,dn as N,En as O,sn as P,ot as Q,Jt as R,Wn as S,Fn as T,Nt as U,zt as V,At as W,ft as X,ht as Y,lt as Z,lr as _,re as _t,ri as a,ze as at,Zn as b,Gr as c,Ae as ct,Nr as d,xe as dt,et,kr as f,ve as ft,pr as g,oe as gt,_r as h,le as ht,si as i,He as it,_n as j,Cn as k,Vr as l,De as lt,xr as m,fe as mt,hi as n,Je as nt,$r as o,Ie as ot,Tr as p,he as pt,xt as q,di as r,Ge as rt,Yr as s,Ne as st,yi as t,Ze as tt,Lr as u,we as ut,ar as v,ee as vt,Rn as w,qn as x,tr as y,Gt as z};