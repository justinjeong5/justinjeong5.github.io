import{n as e}from"./rolldown-runtime-QTnfLwEv.js";import{f as t,m as n}from"./content-cases-CBUDB2ZQ.js";var r=e({default:()=>te,frontmatter:()=>ee}),i=t(),ee={title:`내가 만든 자동화 PLAN을 내 AI 게이트가 2.5/5로 떨어뜨렸다`,date:`2026-05-19 21:00`,type:`Building`,summary:`AI 페르소나 4명에게 내 자동화 설계를 토론시키고, 품질 게이트로 채점했더니 BLOCKING 2개 FAIL. 그 거부 신호 덕에 v1 시연·v2 운영을 쪼개 충돌을 풀었다.`};function a(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsxs)(t.p,{children:[`콘텐츠를 알아서 채워주는 자동화를 만들고 싶었다. 그런데 코드를 짜기 전에, 내 설계부터 AI에게 공격당하게 했다. dispatch가 "더 나은 대안이 있다"는 신호를 감지하자마자 `,(0,i.jsx)(t.code,{children:`personas → quality-gate`}),` 체인을 띄워, 같은 설계를 서로 다른 입장의 페르소나 4명에게 토론시킨 것이다.`]}),`
`,(0,i.jsx)(t.h3,{children:`AI 페르소나 4명이 같은 설계를 두고 갈라졌다`}),`
`,(0,i.jsx)(t.p,{children:`트리거를 수동으로 둘지 cron으로 둘지, 자동화 수위를 어디까지 올릴지, 데이터를 어떻게 끌어올지, 보안은 무엇으로 막을지 — 네 개의 축마다 페르소나들의 답이 정면으로 갈렸다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`시니어 자동화 SWE`}),`: 가장 큰 함정으로 "Codex transcript 정규화"를 짚었다. 겉보기엔 쉬운데 실제 데이터가 지저분하다는 것.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`개인정보·보안 검토자`}),`: "자동 redaction에 맡기는 건 한 번 열면 못 닫는 문(one-way door), 절대 금지"라며 가장 강하게 제동을 걸었다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`콘텐츠 전략가`}),`: "자동화는 글을 더 많이 쓰게 하는 도구가 아니라, 쓸 만한 순간을 놓치지 않게 하는 알람"이라고 목적 자체를 다시 정의했다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`운영 부담을 떠안을 나 본인`}),`: "내 운영 지속률은 35%고, 가장 두려운 건 회사 정보 유출 1건"이라고 솔직하게 적었다.`]}),`
`]}),`
`,(0,i.jsx)(t.h3,{children:`내 설계를 내 품질 게이트에 통과시키지 못했다`}),`
`,(0,i.jsxs)(t.p,{children:[`토론으로 끝내지 않고, 6축 rubric으로 설계를 직접 채점했다. 결과는 냉정했다. 목표 적합성은 Codex transcript 정규화를 빠뜨려 3/5, 보안 게이트는 5개 시나리오 중 3~4개가 비어 2/5, 운영 지속성은 알림 없는 수동 트리거라 "까먹기 100%"로 2/5. 평균 `,(0,i.jsx)(t.strong,{children:`2.5/5, QUALITY FAIL`}),`. 법무 검토자 페르소나는 한 문장으로 못을 박았다 — `,(0,i.jsx)(t.strong,{children:`"현 PLAN으로 publish 진행 절대 금지, 4주 dry-run 필요."`})]}),`
`,(0,i.jsx)(t.h3,{children:`막힌 충돌은 scope를 쪼개서 풀었다`}),`
`,(0,i.jsx)(t.p,{children:`FAIL을 받고 나서야 문제가 보였다. 한 번에 다 하려니까 충돌이 났던 거다. PoC를 둘로 쪼개자 페르소나들의 대립이 한꺼번에 풀렸다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`v1`}),`: 1회 시연용 dry-run. 즉시 가능하되 실제 publish는 코드 차원에서 차단.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`v2`}),`: 4주 dry-run에 2주 publish를 더한 본 운영. 내가 명시적으로 결정한 뒤에야 별도 PoC로 진행.`]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`v1만 다시 채점하니 4.33/5 PASS. 그 자리에서 v1을 한 번 돌려, 산출물(`,(0,i.jsx)(t.code,{children:`.cache/daily/2026-05-19.mdx`}),`)에서 글감 후보 2개를 뽑아냈다.`]}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsxs)(t.p,{children:[`자동화 PoC는 직관과 다르게 거버넌스 부담을 키운다. 운영을 떠안을 나 본인 페르소나가 가장 솔직한 BLOCKING(`,(0,i.jsx)(t.code,{children:`지속률 35%`}),`)을 짚은 게 다행이었다 — SRE·법무·콘텐츠 전략가 누구도 짚지 못한 신호였다. 결국 내가 가장 잘 쓰는 도구는, 내 결정을 통과시키지 못하게 막아 세우는 AI였다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`자세한 인사이트: `,(0,i.jsx)(t.a,{href:`/notes/automation-vs-governance`,children:`자동화 시스템 vs 거버넌스 부담`})]})]})}function te(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}var ne=e({default:()=>ie,frontmatter:()=>re}),re={title:`빌드 사이즈 41% 감소 — manualChunks로 코드 분할`,date:`2026-05-19 22:00`,type:`Shipped`,summary:`빌드 로그에 뜬 청크 경고 한 줄을 그냥 넘기지 않고 따라간 끝에, 첫 로드 gzip을 150KB에서 88KB로 줄인 이야기.`};function o(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[`빌드 로그 맨 아래에 노란 경고 한 줄이 떴다. "단일 청크가 500KB를 넘었다." 무시하고 배포해도 사이트는 멀쩡히 떴고, 아무도 고치라고 하지 않았다. 그래도 한 줄이 거슬렸다. 콘텐츠가 50편을 넘기면서 `,(0,i.jsx)(t.code,{children:`index.js`}),` 하나가 514KB까지 부풀어 있었고, 글을 한 편 추가할 때마다 방문자는 514KB 전체를 다시 받고 있었다. 경고는 "지금은 괜찮지만 곧 안 괜찮아진다"는 신호였다. 그날 저녁, 그 한 줄을 따라가 보기로 했다.`]}),`
`,(0,i.jsx)(t.h2,{children:`손댄 곳`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`vite.config.js`}),`에 `,(0,i.jsx)(t.code,{children:`build.rollupOptions.output.manualChunks`}),`를 추가해 청크를 변하는 것과 변하지 않는 것으로 갈랐다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`node_modules`}),`(거의 안 변함)를 종류별로: react / router / icons / search(Fuse.js) / mdx-runtime / pretendard`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`src/content/*`}),`(자주 변함)를 타입별로: cases / notes / essays / logs`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`chunkSizeWarningLimit: 600`}),`으로 조정 — 분리 후 가장 큰 청크 기준에 맞춤`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`측정`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`청크`}),(0,i.jsx)(t.th,{children:`사이즈`}),(0,i.jsx)(t.th,{children:`gzip`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`react-vendor`}),(0,i.jsx)(t.td,{children:`181 KB`}),(0,i.jsx)(t.td,{children:`57 KB`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`content-notes`}),(0,i.jsx)(t.td,{children:`93 KB`}),(0,i.jsx)(t.td,{children:`25 KB`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`content-cases`}),(0,i.jsx)(t.td,{children:`73 KB`}),(0,i.jsx)(t.td,{children:`20 KB`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`index (main)`}),(0,i.jsx)(t.td,{children:`47 KB`}),(0,i.jsx)(t.td,{children:`13 KB`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`content-essays`}),(0,i.jsx)(t.td,{children:`45 KB`}),(0,i.jsx)(t.td,{children:`13 KB`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`router`}),(0,i.jsx)(t.td,{children:`40 KB`}),(0,i.jsx)(t.td,{children:`14 KB`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`content-logs`}),(0,i.jsx)(t.td,{children:`24 KB`}),(0,i.jsx)(t.td,{children:`7 KB`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`search`}),(0,i.jsx)(t.td,{children:`23 KB`}),(0,i.jsx)(t.td,{children:`8 KB`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`icons`}),(0,i.jsx)(t.td,{children:`6 KB`}),(0,i.jsx)(t.td,{children:`2 KB`})]})]})]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`첫 로드 (index + react-vendor + router + icons)`}),`: 275 KB raw / `,(0,i.jsx)(t.strong,{children:`88 KB gzip`}),`
이전 단일 청크: 514 KB / 150 KB → `,(0,i.jsx)(t.strong,{children:`-41%`})]}),`
`,(0,i.jsx)(t.h2,{children:`임팩트`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`첫 진입 88KB gzip → 모바일 4G에서도 1초 미만`}),`
`,(0,i.jsxs)(t.li,{children:[`페이지 이동 시 콘텐츠 청크만 추가 fetch (예: `,(0,i.jsx)(t.code,{children:`/notes`}),` 진입 시 25KB gzip)`]}),`
`,(0,i.jsx)(t.li,{children:`두 번째 방문: vendor·router 캐시 hit → 콘텐츠 변경분만 다운로드`}),`
`,(0,i.jsx)(t.li,{children:`빌드 경고 0건`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`이제 글을 한 편 더 써도 방문자는 바뀐 콘텐츠 청크만 받는다. vendor와 router는 캐시에 그대로 남는다. 설정 한 번으로, 콘텐츠가 늘어도 비용이 비례해 늘지 않는 구조가 됐다.`}),`
`,(0,i.jsx)(t.p,{children:`거슬리는 경고 한 줄을 신호로 읽고 끝까지 따라가면, 시키지 않아도 514KB가 88KB가 된다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/vite-manual-chunks`,children:`/notes/vite-manual-chunks`})]})]})}function ie(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var s=e({default:()=>u,frontmatter:()=>c}),c={title:`내 UI를 AI 세 명에게 채점시켰다 — 평균 2.75에서 4.75까지`,date:`2026-05-19 18:00`,type:`Shipped`,summary:`디자이너·기획자·개발자 페르소나에게 모바일 화면을 8축으로 채점시키고, 통과할 때까지 고치는 루프를 돌렸다. 첫 채점은 전 항목 낙제였다.`};function l(e){let t={code:`code`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:`내 모바일 화면에 점수를 매겨 줄 심사위원 셋을 세웠다. 디자이너, 기획자, 개발자 페르소나. 각자 8개 축으로 채점하고, 통과 못 하면 다시 고쳐서 재채점하는 루프. 첫 사이클 결과지를 받아 들었을 때 기분이 묘했다. 전 항목 FAIL, 평균 2.75/5. 내가 괜찮다고 믿고 넘겼던 화면이었다.`}),`
`,(0,i.jsx)(t.h2,{children:`사이클 1 결과`}),`
`,(0,i.jsx)(t.p,{children:`모든 항목 FAIL. 평균 2.75/5.`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`영역`}),(0,i.jsx)(t.th,{children:`점수`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`iOS Safari 특수성`}),(0,i.jsx)(t.td,{children:`2/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`인터랙션 (모바일)`}),(0,i.jsx)(t.td,{children:`2/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`콘텐츠 우선순위`}),(0,i.jsx)(t.td,{children:`2.5/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`터치 타겟`}),(0,i.jsx)(t.td,{children:`3/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`타이포·여백`}),(0,i.jsx)(t.td,{children:`3/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`반응형 일관성`}),(0,i.jsx)(t.td,{children:`3/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`접근성`}),(0,i.jsx)(t.td,{children:`3/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`Viewport overflow`}),(0,i.jsx)(t.td,{children:`3.5/5`})]})]})]}),`
`,(0,i.jsx)(t.h2,{children:`채점표가 짚어 준 곳을 고쳤다 (사이클 1·2·3)`}),`
`,(0,i.jsx)(t.p,{children:`심사위원들이 가장 낮은 점수를 준 곳부터 따라갔다.`}),`
`,(0,i.jsx)(t.p,{children:`iOS Safari 항목이 2점이었다. 100vh를 100dvh로 바꾸고, viewport-fit=cover와 safe-area-inset env()로 노치·홈 인디케이터 영역을 처리했다. theme-color를 light/dark로 나누고, -webkit-tap-highlight-color는 투명으로, -webkit-backdrop-filter 폴백과 text-size-adjust 100%까지 사파리 특수성을 하나씩 메웠다.`}),`
`,(0,i.jsx)(t.p,{children:`터치 타겟은 HIG의 44×44를 기준으로 잡았다. icon-button, search-trigger, brand, button을 전부 44로 통일하고 see-all-link도 모바일에서 min-height 44를 줬다. 손가락으로 누를 수 있어야 버튼이다.`}),`
`,(0,i.jsx)(t.p,{children:`인터랙션과 접근성은 보이지 않는 곳이라 더 신경 썼다. 모달 세 곳에 previouslyFocused를 캐시해 닫으면 트리거로 포커스가 돌아오게 하고, 직접 만든 focus trap 대신 네이티브 inert 패턴을 썼다. :focus-visible 글로벌 outline, prefers-reduced-motion 가드, hover 없는 기기에서 sticky hover가 걸리지 않도록 @media (hover: none) 처리까지.`}),`
`,(0,i.jsxs)(t.p,{children:[`콘텐츠 우선순위에서는 모바일에서 .profile-panel을 숨겨 currentFocus·heroProof 중복을 없애고, hero 패딩과 hero-actions 줄바꿈을 다듬고, LogsPage 본문을 `,(0,i.jsx)(t.code,{children:`<details>`}),` 토글로 묶어 목록 페이지 패턴에 맞췄다.`]}),`
`,(0,i.jsx)(t.h2,{children:`사이클 3 결과`}),`
`,(0,i.jsxs)(t.p,{children:[`모든 항목 ≥4. 평균 `,(0,i.jsx)(t.strong,{children:`4.75/5`}),` PASS.`]}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`평균이 아니라 최저 항목이 통과를 결정한다. 한 항목만 3점이어도 전체가 FAIL이다. 그래서 이 루프가 좋았다 — 내가 보고 싶은 것만 보지 않게, 가장 약한 곳을 매번 먼저 들이밀었다. 모바일은 디테일의 누적이고, 8축 중 하나만 빠져도 사용자는 즉시 느낀다. 잘 만들었다는 내 감(感)을 믿는 대신, 통과 기준을 숫자로 박아 두고 거기에 도달할 때까지 고친다.`})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}var d=e({default:()=>oe,frontmatter:()=>ae}),ae={title:`홈레이더 케이스 + 개인 레포 9편 자산화 + CodeRabbit 도입`,date:`2026-05-21 20:00`,type:`Shipped`,summary:`사이드 프로젝트(홈레이더)를 케이스로 정리하고, 6년치 개인 GitHub 레포 3개를 인터뷰 형식 9편으로 추출했다. 사이트 PR에 CodeRabbit 자동 리뷰를 붙였다.`};function f(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`홈레이더 케이스 스터디`}),`: 5개 지역 아파트 자동 추적 시스템(공개 API 7곳 + 노션 백엔드 + GitHub Actions cron)을 Case 1편 + 보조 Note 2편으로`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`개인 레포 인터뷰`}),`: 6년치 레포 중 대표 3개를 골라 각 3편(본질·학습·함정) = 9편 노트로 추출`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`CodeRabbit 도입`}),`: `,(0,i.jsx)(t.code,{children:`.coderabbit.yaml`}),` 추가 — 이 사이트 PR에 라인 단위 자동 리뷰 (기존 Cubic과 이중)`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`측정`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`항목`}),(0,i.jsx)(t.th,{children:`수치`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`홈레이더`}),(0,i.jsx)(t.td,{children:`Case 1 + Note 2`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`개인 레포`}),(0,i.jsx)(t.td,{children:`3 레포 × 3편 = 9 Note`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`툴링`}),(0,i.jsx)(t.td,{children:`CodeRabbit config 1`})]})]})]}),`
`,(0,i.jsx)(t.h2,{children:`임팩트`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"이 레포 왜 만들었어?"에 매번 새로 답하던 걸 인터뷰 9편으로 고정 — 레포 자체보다 추출된 노트가 더 큰 자산`}),`
`,(0,i.jsx)(t.li,{children:`사이드 프로젝트가 production 패턴(zod·bottleneck·winston) 실험장이었음을 케이스로 명시`}),`
`,(0,i.jsx)(t.li,{children:`CodeRabbit + Cubic 이중 자동 리뷰의 시야 차이를 체감 시작 (라인 vs 흐름)`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`6년 누적 레포는 archive vs delete 2분법이 아니라 "레포는 archive하되 인사이트는 노트로 추출"하는 3분법이 답이었다. 인터뷰 형식(질문 3개 고정)이 9편을 일관된 구조로 만들어서 기계적으로 진행 가능했다. 한 레포를 4시간 들여 완벽히 쓰는 것보다 3개를 빠르게 추출한 게 옳았다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/cases/home-radar-system`,children:`/cases/home-radar-system`}),`, `,(0,i.jsx)(t.a,{href:`/cases/personal-repos-interview`,children:`/cases/personal-repos-interview`}),`, `,(0,i.jsx)(t.a,{href:`/notes/coderabbit-cubic-double-review`,children:`/notes/coderabbit-cubic-double-review`})]})]})}function oe(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}var se=e({default:()=>le,frontmatter:()=>ce}),ce={title:`SPA를 크롤러가 읽게 만들기 — 빌드타임 prerender로 색인 강화`,date:`2026-06-02 21:00`,type:`Building`,summary:`React SPA는 크롤러에 빈 div로 보였다. 빌드 타임에 라우트 110개를 정적 HTML로 prerender하고 라우트별 canonical과 title을 주입해 색인을 살렸다.`};function p(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`이 사이트는 React SPA다. 사람 브라우저에는 잘 보이지만, 크롤러가 처음 받는 건 자바스크립트가 채우기 전의 빈 컨테이너다. 본문도, 페이지별 제목도, canonical도 없는 한 장짜리 껍데기 — 검색엔진 입장에선 사실상 내용이 없는 사이트였다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`빌드 단계에서 모든 라우트를 미리 렌더해 정적 HTML로 떨궜다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`SSR 엔트리로 라우트 110개를 prerender — 크롤러가 JS 실행 없이도 본문을 받는다`}),`
`,(0,i.jsx)(t.li,{children:`라우트별 head 메타 주입 — 페이지마다 고유한 title과 canonical`}),`
`,(0,i.jsx)(t.li,{children:`sitemap을 정본 URL(trailing-slash)로 통일하고 빌드 타임에 생성`}),`
`,(0,i.jsx)(t.li,{children:`robots 크롤링 허용 + skip-link 등 접근성 보강`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`결정 — 색인은 빌드 산출물로 보장한다`}),`
`,(0,i.jsx)(t.p,{children:`런타임 하이드레이션에 색인을 맡기지 않는다. "크롤러가 JS를 돌려줄 것"이라는 가정은 약하다. 대신 빌드가 끝나면 모든 페이지가 이미 완성된 HTML로 디스크에 존재하도록 만들었다. 색인 가능성을 런타임 운에서 빌드 보증으로 옮긴 것이다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`prerender는 화면을 하나도 안 바꿨다 — 사람 눈엔 전과 똑같다. 그래서 미루기 쉬웠지만, 보이지 않는 독자(크롤러)도 사용자다. 빌드 타임에 한 번 더 일해서 런타임의 불확실성을 없애는 패턴은, 색인뿐 아니라 이 사이트의 다른 곳에도 적용할 만하다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-07-healthcheck-six-bots`,children:`/logs#2026-06-07-healthcheck-six-bots`})]})]})}function le(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}var ue=e({default:()=>fe,frontmatter:()=>de}),de={title:`헬스체크를 6개 봇에 돌린 2주 — silent failure 사냥`,date:`2026-06-07 21:00`,type:`Shipped`,summary:`혼자 돌리는 자동화 여섯 개에 직접 헬스체크를 돌려, 에러 한 줄 안 내고 조용히 망가지던 경로 세 개를 잡아냈다. 그중 하나가 가든봇을 자동 작성으로 전환시켰다.`};function m(e){let t={a:`a`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`부동산 수집기 결과를 무심코 들여다보다 손이 멈췄다. 에러 로그는 깨끗한데 산출물에 매물 몇 개가 빠져 있었다. 봇은 "끝났다"고 했고, 알림도 왔고, 빌드도 통과했다 — 그런데 결과는 틀려 있었다. 이게 한 봇만의 문제일 리 없다는 생각이 들었고, 그날로 나머지 다섯 개에도 같은 의심을 들이밀기로 했다.`}),`
`,(0,i.jsx)(t.p,{children:`지난 2주, 따로 돌던 개인 자동화 여섯 개는 전부 "잘 도는 줄 알았던" 것들이다. 누가 시켜서가 아니라, 신호와 실제 사이의 간극이 거슬려서 직접 한 바퀴를 돌렸다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`여섯 개 자동화에 같은 질문 하나를 들이밀었다 — "지금 조용히 실패하고 있는 경로가 있나?" 모니터링이 못 잡는 결함이라, 봇마다 산출물을 손으로 되짚으며 입력·집계·종료 경로를 직접 따라갔다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`유튜브 알림 봇: dry-run 경로가 운영 상태를 오염시켜 콜드스타트 재발송 위험`}),`
`,(0,i.jsx)(t.li,{children:`부동산 수집기: 외부 소스의 silent drop을 정상 종료로 오인`}),`
`,(0,i.jsx)(t.li,{children:`티켓 랭킹: 부분 수집 결손을 성공으로 집계`}),`
`,(0,i.jsx)(t.li,{children:`청첩장: 좋아요 카운트 드리프트, IP 추출 불일치`}),`
`,(0,i.jsx)(t.li,{children:`이 사이트: 빌드 게이트·접근성·SEO 누락`}),`
`,(0,i.jsx)(t.li,{children:`주간 가든봇: 이름과 달리 산출물이 쌓이기만 함 — 이 발견이 곧 자동 작성 전환의 계기가 됐다`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 조용한 실패 3종`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsx)(t.li,{children:`dry-run이 운영 상태를 건드림 (read-only가 아니었다)`}),`
`,(0,i.jsx)(t.li,{children:`외부 실패를 성공으로 집계 (부분 결과를 전체로 착각)`}),`
`,(0,i.jsx)(t.li,{children:`결측 입력이 0으로 위장 (없는 값이 "0점"이 되어 점수 왜곡)`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`세 가지 모두 던지는 예외가 없다. 그래서 모니터링이 못 잡는다. 헬스체크는 "에러가 났나"가 아니라 "결과가 말이 되나"를 묻는 별도의 렌즈여야 했다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`자동화를 늘릴수록 "돌고 있다"는 신호와 "제대로 하고 있다"는 신호의 간극이 커진다. 그래서 각 봇에 결과 정합성 자가검증을 한 줄이라도 넣는다 — 사람이 매주 들여다보지 않아도 조용한 실패가 스스로 비명을 지르도록. 시키는 사람이 없어도 내가 만든 게 거짓말을 하는 건 못 견딘다. 그 불편함이 헬스체크 한 바퀴가 됐고, 봇 하나의 방향을 바꿨다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/essays/automation-doesnt-reduce-work`,children:`/essays/automation-doesnt-reduce-work`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-08-writing-bot-reversal`,children:`/logs#2026-06-08-writing-bot-reversal`})]})]})}function fe(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}var pe=e({default:()=>he,frontmatter:()=>me}),me={title:`글 안 쓰는 글쓰기 봇을 만들고, 2주 뒤 뒤집은 이유`,date:`2026-06-08 11:00`,type:`Building`,summary:`일부러 글을 못 쓰게 막아둔 주간 봇을, 2주치 운영 데이터를 읽고 자동 작성으로 뒤집었다. 지금 읽고 있는 이 글이 그 봇이 쓴 첫 결과물이다.`};function h(e){let t={a:`a`,h2:`h2`,p:`p`,strong:`strong`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[`지금 이 문단을 사람이 쓰지 않았다. 주간 봇이 내 지난 2주치 작업 이력과 대화 기록을 읽고 초안을 뽑았고, 나는 공개 전 한 번 검수만 했다. 2주 전만 해도 나는 이 봇이 글을 `,(0,i.jsx)(t.strong,{children:`못 쓰도록`}),` 코드로 막아둔 사람이었다.`]}),`
`,(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`주 1회 사이트 건강을 점검하는 가든봇을 만들면서, 나는 의식적으로 글 생성 기능을 뺐다. 무인 공개 게시 금지, 그리고 "채점자와 생산자를 분리한다"는 두 원칙을 코드에 박았다. 봇은 글을 쓰지 않고, 사람에게 "이번 주에 남길 게 있나?"를 묻는 체크리스트만 냈다.`}),`
`,(0,i.jsx)(t.h2,{children:`무엇이 드러났나`}),`
`,(0,i.jsx)(t.p,{children:`2주를 돌려보니 결과는 정직했다 — 체크리스트만 쌓이고 글은 한 편도 안 나왔다. 봇은 매주 "글감 12건 있음"이라고 알렸지만, 그 다음 단계인 사람의 집필이 늘 병목이었다. 점검은 자동인데 생산은 수동이라, 자동화의 가치가 마지막 한 걸음에서 증발했다. 데이터는 내 설계가 절반만 맞았다고 말하고 있었다.`}),`
`,(0,i.jsx)(t.h2,{children:`결정 — 분리에서 위임으로`}),`
`,(0,i.jsx)(t.p,{children:`그래서 막아뒀던 빗장을 내가 직접 풀었다. 봇이 지난 작업 이력과 대화 기록을 읽고 초안을 직접 쓰게 한다. 대신 원래의 안전 원칙은 폐기하지 않고 형태만 바꿔 유지했다 — 회사 기밀은 추상화하고, 공개 전 사람이 한 번 본다. "생산 금지"가 아니라 "생산하되 검증 게이트를 통과"로. 실행 시점도 일요일에서 월요일 1회로 옮겼다 — 일요일엔 노트북이 꺼져 있어 잡이 그냥 흘러갔고, 월요일 출근 리듬이 라운드 주기와도 맞았다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`처음의 보수적 설계가 틀렸다고 보지 않는다. 미지의 자동화는 가장 안전한 형태로 시작하는 게 맞았다. 다만 운영 데이터가 쌓이면 그 제약이 여전히 옳은지 다시 물어야 한다. 이 글은 그 재질문의 답이다 — 봇이 내 2주를 읽고 쓴 다섯 편 중 하나.`}),`
`,(0,i.jsx)(t.p,{children:`자동화는 한 번 설계하고 끝나는 게 아니라, 운영 데이터를 근거로 도구에게 넘기는 권한의 경계를 매주 다시 긋는 일이다. 나는 봇에게 일을 시키는 사람이 아니라, 봇이 어디까지 해도 되는지를 결정하는 사람이고 싶다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-07-healthcheck-six-bots`,children:`/logs#2026-06-07-healthcheck-six-bots`}),`, `,(0,i.jsx)(t.a,{href:`/essays/delegation-autonomy-calibration`,children:`/essays/delegation-autonomy-calibration`})]})]})}function he(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}var ge=e({default:()=>ve,frontmatter:()=>_e}),_e={title:`CI 게이트를 매번 한 칸씩 조인다 — 안전망의 래칫`,date:`2026-06-09 11:00`,type:`Building`,summary:`AI가 PR을 쏟아내는 레포에서, 안전망을 한 번에 설계하는 대신 매주 한 칸씩 조이는 래칫으로 키웠다. secret-leak 가드, 커버리지 회귀 임계, 상태쓰기 concurrency 가드를 점진 추가했다.`};function g(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`AI에게 코드를 맡기기 시작하면서, 내 레포의 PR은 더 이상 내가 한 줄씩 쓰는 게 아니게 됐다. 매주 자동으로 초안 PR이 올라오고, 나는 그걸 검토해 머지한다. 생산성은 올라갔는데, 한 가지가 어긋났다 — 코드는 자동으로 쏟아지는데, 그걸 받아내는 안전망은 예전 그대로 "테스트 통과하면 끝"에 멈춰 있었다.`}),`
`,(0,i.jsx)(t.p,{children:`자동 PR 하나가 secret을 흘리거나 커버리지를 슬쩍 떨어뜨려도 CI는 통과시킨다. 사람이 매번 눈으로 잡으면 결국 사람 속도에 다시 묶인다. 그래서 안전망 자체를 자동으로 자라게 만들기로 했다. 한 번에 완벽한 파이프라인을 설계하면 시작이 무거워 미뤄지니까, 반대로 갔다 — 매번 딱 한 칸씩만 조이기로.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`게이트를 한 방향으로만 움직이는 래칫처럼 다뤘다. 한번 조이면 절대 풀리지 않고, 매주 한 칸씩만 더 조인다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`부동산 수집 레포: PR 게이트에 두 칸을 더했다. 하나는 secret-leak 가드로, diff에 자격증명·토큰처럼 보이는 문자열이 섞이면 머지 전에 막는다. 다른 하나는 커버리지 회귀 임계로, 직전 기준보다 커버리지가 떨어지면 PR을 통과시키지 않는다. 절대 수치를 높게 잡는 게 아니라, "지금보다 나빠지지 않는다"를 강제하는 단방향 톱니다.`}),`
`,(0,i.jsx)(t.li,{children:`유튜브 알림 봇: 상태 파일을 쓰는 워크플로에 concurrency 가드를 넣었다. 같은 워크플로가 겹쳐 돌면 한쪽이 다른 쪽의 상태 쓰기를 덮어쓸 수 있었는데, 동시 실행을 직렬화해 그 경합 자체를 없앴다. 코드 한 줄이 아니라 CI 설정 한 칸으로 막은 클래스의 버그다.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`각 변경은 작아서 리뷰가 5분이면 끝났다. 작게 조였기 때문에 부담 없이 머지됐고, 부담이 없으니 다음 칸도 또 조일 수 있었다. AI가 매주 PR을 올리는 만큼, 게이트도 매주 한 칸씩 따라 자랐다 — 코드 생성 속도와 안전망 성장 속도를 같은 리듬에 묶은 셈이다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 임계는 절대값이 아니라 단방향이라야 한다`}),`
`,(0,i.jsx)(t.p,{children:`처음엔 커버리지 임계를 "80% 이상"처럼 절대값으로 잡으려 했다. 그런데 절대값은 두 방향으로 다 틀린다. 너무 높으면 시작도 못 하고, 너무 낮으면 의미가 없다. 그래서 기준선을 직전 상태로 잡고 "여기서 더 나빠지지 않는다"만 강제했다. 시작은 현재값 그대로라 진입 장벽이 없고, 그 뒤로는 한 방향으로만 조여진다. 게이트의 핵심은 높은 막대가 아니라, 풀리지 않는 톱니였다.`}),`
`,(0,i.jsx)(t.p,{children:`concurrency 가드도 같은 성격이다. "이번 버그를 고친다"가 아니라 "이 경합이 일어날 수 있는 상태 자체를 봉인한다"였다. 한번 봉인하면 같은 클래스의 버그가 다시는 들어오지 못한다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`CI 게이트를 한 번에 세우려는 욕심이 오히려 게이트를 멈추게 한다. 무거운 설계는 시작이 미뤄지고, 미뤄지는 동안 안전망은 자라지 않는다. 매주 한 칸이라는 리듬이 오히려 더 빨리 더 촘촘한 그물을 만들었다.`}),`
`,(0,i.jsx)(t.p,{children:`조일 때 지킨 규칙은 하나다 — 톱니는 한 방향으로만 돈다. 통과한 PR이 깐 안전망은 다음 PR이 풀 수 없다. 그래서 게이트는 시간이 갈수록 느슨해질 수 없고, 오직 더 촘촘해지기만 한다.`}),`
`,(0,i.jsx)(t.p,{children:`AI에게 코드를 맡기는 일에서 내가 배운 건 이거다 — 생성을 자동화했으면 검증도 자동화돼야 하고, 그 검증은 한 번 세우는 게 아니라 매주 한 칸씩 자라야 한다. 나는 AI가 만든 코드를 빠르게 받으면서도, 그 속도에 안전을 양보하지 않는 방식으로 일한다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/coverage-gap-analysis`,children:`/notes/coverage-gap-analysis`}),`, `,(0,i.jsx)(t.a,{href:`/notes/recurring-trap-to-checklist`,children:`/notes/recurring-trap-to-checklist`}),`, `,(0,i.jsx)(t.a,{href:`/cases/quality-gate-system`,children:`/cases/quality-gate-system`})]})]})}function ve(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}var _=e({default:()=>b,frontmatter:()=>v}),v={title:`화면은 베껴도 경계는 못 베낀다 — 기능 단위로 자르며 찾은 모듈 seam`,date:`2026-06-16 21:00`,type:`Shipped`,summary:`화면이 정답으로 주어진 클론에서 내가 통제할 변수는 구조 하나뿐이었다. 설계도를 미리 그리는 대신, 한 덩어리가 서로의 상태를 들춰보기 시작하는 신호를 따라 기능 단위로 한 칸씩 잘라 모듈 경계를 발견해 나간 기록.`};function y(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`검색 폼, 역 선택, 티켓 목록, 예매 확인이 한 컴포넌트 트리에 뭉친 채 빠르게 굴러가다가, 어느 순간 서로의 상태를 들춰보기 시작했다. 토스 기차 예매 흐름을 화면 그대로 베낀 개인 클론에서였다. 화면은 원본이 정답으로 쥐여 줬으니 내가 통제할 변수는 단 하나, 구조뿐이었다. 그래서 나는 이 클론을 베끼기 연습이 아니라 모듈 경계를 깨끗하게 시험할 실험실로 쓰기로 했다.`}),`
`,(0,i.jsx)(t.p,{children:`다만 처음부터 완벽한 경계를 그리려 들지는 않았다. 경계가 어디인지는 만들기 전엔 보이지 않는다는 걸 알았기 때문이다. 일단 동작하게 만든 뒤, 중복이 보이거나 한 곳이 남의 사정을 너무 많이 알기 시작하는 신호가 뜰 때 그 자리를 잘랐다 — 설계가 아니라 발견이었다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsxs)(t.p,{children:[`신호가 뜰 때마다 기능을 수직으로 잘라 나갔다. 검색·역 선택·티켓 선택·예매 확인을 각각 feature로 떼고, 그 안의 상태를 feature별 훅으로 모았다 — 검색 폼은 `,(0,i.jsx)(t.code,{children:`useTrainSearchForm`}),`이 날짜·승객 수 선택 같은 하위 훅을 조립하고, 역 선택은 `,(0,i.jsx)(t.code,{children:`useStationSelect`}),`가 들고 있다. 미리 정해 둔 정답 구조는 없었는데도, 잘라낸 자리들은 features와 shared로 나뉘는 수직 슬라이스(Feature-Sliced) 모양으로 스스로 수렴했다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`도메인 키를 훅 뒤로 숨겼다`}),`: 페이지는 쿼리 파라미터 이름이 아니라 도메인 언어로 말하게 했다. 왕복·편도 파싱과 검색 폼의 내부 키를 훅 안으로 넣으니, 페이지는 "무엇을"만 알고 "어떻게 직렬화되는지"는 모른다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`API 경로를 호출하는 곳 옆에 뒀다`}),`: 여러 곳이 공유하는 URL 계약은 shared routing에 모으고, 한 기능만 쓰는 예매 API 경로는 그 feature 안에 뒀다. 규칙은 하나였다 — 계약은 공유되는 곳에, 호출은 기능 옆에.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`교차로 반복되는 조각만 공유 섹션으로 추출했다`}),`: 예매 요약·상세·티켓 섹션, 승객 수 행처럼 여러 화면에 같은 모양으로 나오는 것만 골라 공유 컴포넌트로 뺐다. 한 번만 쓰이는 건 굳이 올리지 않았다.`]}),`
`,(0,i.jsx)(t.li,{children:`레이어를 가로지르는 import는 절대경로로 통일하고, 페이지 테스트는 "이 페이지가 책임지는 것"에만 초점을 맞췄다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`결정 — 디테일은 그것을 아직 소유하는 가장 작은 범위로 민다`}),`
`,(0,i.jsx)(t.p,{children:`경계를 가를 때 따른 기준은 한 줄이었다. "디테일을 그것을 소유하는 가장 작은 범위로 민다." 도메인 키는 페이지가 아니라 훅이 소유한다. 기능 전용 엔드포인트는 전역 라우팅이 아니라 그 feature가 소유한다. 반대로 여러 기능이 공유하는 URL 계약을 한 기능 안에 두면 거짓 소유가 되니, 그건 shared로 올린다.`}),`
`,(0,i.jsx)(t.p,{children:`테스트도 같은 기준이었다. 리팩토링으로 내부 구조가 계속 흔들렸는데, 페이지 테스트를 "페이지의 책임"에만 묶어 두니 추출·이동에도 테스트가 안 깨졌다. 구현 디테일에 묶인 테스트였다면 자를 때마다 빨개졌을 거고, 그럼 리팩토링이 무서워진다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`원본을 충실히 옮길수록 "내가 더한 건 구조밖에 없다"가 선명해졌고, 그래서 그 구조에 책임을 다 걸 수 있었다. 남은 건 한 줄로 압축됐다 — 모든 디테일을 그것을 아직 소유하는 가장 작은 범위로 민다. 도메인 키는 훅으로, 기능 엔드포인트는 feature로, 공유 계약은 shared로.`}),`
`,(0,i.jsx)(t.p,{children:`경계는 시작할 때 그리는 도면이 아니라, 누가 무엇을 아는지를 끝까지 지켜보며 한 칸씩 좁혀 발견하는 것이었다. 나는 정답이 안 보일 때 도면을 기다리지 않고, 코드가 보내는 신호를 읽어 직접 경계를 그어 나가는 사람이다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/learning-repo-sandbox-value`,children:`/notes/learning-repo-sandbox-value`})]})]})}function b(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}var x=e({default:()=>w,frontmatter:()=>S}),S={title:`안전장치는 있느냐가 아니라 도는가로 본다 — 죽은 재시도와 거짓 runbook`,date:`2026-06-18 21:00`,type:`Building`,summary:`재시도 정책이 코드에 정의돼 있는데 호출자가 0건이었다. runbook은 자동 재시도된다고 안내하는데 실제로는 한 번도 돌지 않았다. 이번 주는 안전장치를 추가하는 게 아니라, 있다고 믿었지만 돌지 않던 장치들을 골라내는 일이었다.`};function C(e){let t={h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`지난 몇 주는 안전장치를 더하는 쪽이었다 — per-item 격리, 원자적 쓰기, CI 게이트 한 칸씩 조이기. 실패의 폭발 반경을 한 건으로 가두는 얘기였다. 이번 주는 그 앞을 본다. 가둬둔 장치가, 정의해 둔 재시도가, 애초에 돌긴 도는가. 헬스체크를 돌리다 안전장치가 코드에는 있는데 런타임엔 한 번도 실행되지 않는 경우를 연달아 봤다. 있다고 믿는 게 없는 것보다 나쁘다 — 없으면 비워둔 줄 알고 조심하는데, 죽은 채로 있으면 덮였다고 믿고 방심한다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`세 가지 "장식용 안전장치"를 찾아 살리거나 걷어냈다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`돌지 않는 재시도 (부동산 레이더 봇)`}),`: 백오프 지연과 재시도 정책이 모듈에 정의돼 있는데 호출자가 0건이었다. 일시적인 429·5xx·timeout이 재시도 없이 곧장 영구 손실로 직결됐고, 더 나쁜 건 runbook이 "자동 재시도된다"고 적어두고 있었다는 점이다 — 죽은 장치를 살아있다고 증언하는 문서는 사고 때 엉뚱한 데를 보게 만든다. 정의만 된 정책을 실제 실행기로 연결했다 — 지수 백오프에 모든 지연을 상한으로 클램프(거대한 Retry-After가 cron 타임박스를 통째로 잡아먹지 않도록), 최대 시도 도달 시 마지막 에러를 throw해 실패를 표면화한다. 조용히 삼키지 않는다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`틀리게 도는 분류 (같은 봇)`}),`: 에러 분류기가 axios의 응답 상태만 읽어서, SDK가 최상위 필드로 주는 상태 코드를 못 봤다. 그래서 재시도해야 할 429·5xx를 "건너뜀"으로 오분류했다. 양쪽 형태를 모두 읽도록 고쳐, 분류가 옳게 돌아야 그 뒤의 재시도도 옳게 동작하게 했다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`거칠게 죽는 파싱 (티켓 알림 봇)`}),`: 200 응답인데 본문이 깨진 JSON일 때, 가드 없는 파싱이 맥락 없는 SyntaxError로 크래시했다. 파싱을 감싸서 실패를 단계로 분류했다 — fetch 단계 실패와, 응답을 받은 뒤의 파싱 실패(상류 구조 변경)는 다른 종류다. 종류를 알면 대응이 갈린다. 구조 변경은 카테고리 맥락을 담아 명확히 알리고, 회귀 테스트로 정상 입력과 깨진 입력을 둘 다 고정했다. 더해서 같은 원인이 반복 발화하던 수집 경보를 dedup하고, 늘 통과하기만 하던 중복 테스트 게이트를 걷어냈다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 죽은 안전장치의 세 가지 모양`}),`
`,(0,i.jsx)(t.p,{children:`골라내고 보니 "있지만 일을 안 하는" 장치는 세 모양이었다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`안 돈다`}),`: 정의됐지만 호출자가 없는 재시도. 코드 검색엔 잡히지만 런타임엔 0번 실행된다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`틀리게 돈다`}),`: 분류기가 상태 코드를 잘못 읽어, 돌긴 도는데 재시도할 걸 건너뛴다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`너무 늦게/거칠게 죽는다`}),`: 가드 없는 파싱이 종류를 모른 채 맥락 없이 크래시한다.`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`세 모양 모두 코드 리뷰에선 "안전장치 있음"으로 보인다. 가장 위험한 건 거짓 runbook이었다 — 문서가 돌지 않는 장치를 돈다고 적어두면, 사고가 나도 "재시도됐을 텐데"라며 엉뚱한 데를 본다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`안전장치는 존재 여부가 아니라 실제 동작으로 평가해야 한다. 각 장치에 같은 질문을 던졌다 — "이건 어떤 입력에서 실제로 발화하는가, 그게 내가 두려워하는 그 입력인가?" 답을 못 대면 죽은 장치다. 늘 통과하는 게이트는 게이트가 아니고, 한 원인에 N번 우는 경보는 곧 무시당하며, 정의만 된 재시도는 runbook의 거짓말이 된다.`}),`
`,(0,i.jsx)(t.p,{children:`추가가 아니라 점검도 안전망 작업이다. 더하는 주가 있으면, 더한 게 진짜 도는지 확인하는 주도 있어야 한다.`})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(C,{...e})}):C(e)}var T=e({default:()=>O,frontmatter:()=>E}),E={title:`지금을 인자로 들어올리면 시간을 미리 볼 수 있다 — 청첩장 날짜 정책 미리보기`,date:`2026-06-29 11:30`,type:`Shipped`,summary:`청첩장은 식 전후로 화면이 단계별로 바뀌는데, 그 단계를 정하는 함수들이 내부에서 현재 시각을 직접 읽고 있었다. 테스트도 미리보기도 불가능했다. 현재 시각을 기본값 인자로 들어올리고, 단계를 하나의 유한 상태로 모은 뒤, 임의 날짜를 주입해 미리보는 훅을 붙였다.`};function D(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsxs)(t.p,{children:[`청첩장은 시간에 따라 모습이 바뀐다 — 식 전엔 카운트다운, 당일엔 하객 갤러리 오픈, 식 이후엔 인사, 며칠 뒤엔 방명록 제출 마감. 이 분기들이 각자 함수로 흩어져 있었고, 함수마다 내부에서 현재 시각을 직접 읽었다. `,(0,i.jsx)(t.code,{children:`isAfterWedding()`}),`을 부르면 그 안에서 "지금"을 가져다 비교하고 불리언을 돌려준다.`]}),`
`,(0,i.jsx)(t.p,{children:`깔끔해 보이지만, 시각이 함수 안에 숨어 있으면 두 가지를 못 한다. 첫째, 테스트할 수 없다 — "식 다음 날엔 갤러리가 열려야 한다"를 확인하려면 시스템 시계를 조작하는 수밖에 없다. 둘째, 미리볼 수 없다 — 식 당일 화면이 어떻게 보일지 확인하려면 그날까지 기다려야 한다. 한 번뿐인 행사라 미리 못 보는 건 곧 영영 못 본다는 뜻이다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`숨어 있던 현재 시각을 함수 밖으로 들어올리고, 분기를 하나로 모은 뒤, 미리보기를 얹었다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`시각을 기본값 인자로`}),`: 시간 의존 함수들이 현재 시각을 인자로 받게 바꿨다. 인자를 안 주면 기존처럼 진짜 현재 시각을 쓰니, 기존 호출부는 한 글자도 고칠 필요가 없다. 테스트와 미리보기만 임의 시각을 넣어 같은 함수를 부른다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`불리언 여럿을 페이즈 하나로`}),`: `,(0,i.jsx)(t.code,{children:`식 이후인가`}),`·`,(0,i.jsx)(t.code,{children:`갤러리 열렸나`}),`·`,(0,i.jsx)(t.code,{children:`제출 마감인가`}),` 세 불리언을 매번 조합하던 걸, 단계를 직접 돌려주는 함수 하나로 모았다 — 식 전·당일·이후·제출마감 중 정확히 하나다. 화면은 불리언 조합을 더 이상 직접 풀지 않고 페이즈 하나만 보고 분기한다. 불리언 세 개는 여덟 가지 조합을 표현할 수 있지만 실제로 유효한 건 네 개뿐이라, 불가능한 조합이 끼어들 자리를 없앴다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`날짜를 주입하는 미리보기 훅`}),`: 어드민이 날짜를 고르면 그 날짜를 전역 이벤트로 흘려보내고, 화면들이 그걸 받아 "그날의 페이즈"로 렌더한다. 들어온 날짜는 파싱한 뒤 다시 문자열로 되돌려 원본과 같은지 확인하는 round-trip으로 검증해, `,(0,i.jsx)(t.code,{children:`2026-02-30`}),` 같은 존재하지 않는 날짜는 조용히 거른다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`결정 — 테스트 가능성과 미리보기는 같은 입구다`}),`
`,(0,i.jsx)(t.p,{children:`시간 의존 로직을 만질 때 흔히 두 갈래로 나뉜다. 테스트만 노리면 시계를 mock하는 라이브러리를 붙이는 길이 있고, 미리보기만 노리면 미리보기 전용 분기를 따로 파는 길이 있다. 둘 다 "지금"이 함수 안에 숨어 있다는 전제를 그대로 두고 우회로를 내는 방식이다.`}),`
`,(0,i.jsx)(t.p,{children:`대신 시각을 인자로 들어올리니 두 요구가 같은 입구로 합쳐졌다. 테스트는 "식 다음 날"을 인자로 넣고, 미리보기는 어드민이 고른 날짜를 인자로 넣는다 — 프로덕션 코드와 미리보기가 정확히 같은 함수를 거치니, 미리보기에서 본 화면이 그날 실제로 나올 화면과 어긋날 수 없다. 미리보기 전용 분기를 따로 팠다면 "미리보기에선 멀쩡한데 당일엔 다르게 보이는" 틈이 생겼을 거다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`테스트하기 어려운 코드는 대개 의존성이 안에 숨어 있다는 신호다. 여기선 그 의존성이 "현재 시각"이었다. 시각을 인자로 들어올리는 작은 변경 하나가 테스트 가능성을 열었고, 미리보기는 그 위에 거의 공짜로 따라왔다 — 테스트가 임의 시각을 넣을 수 있다면, 어드민도 임의 시각을 넣을 수 있다는 뜻이니까.`}),`
`,(0,i.jsx)(t.p,{children:`기능을 먼저 짜고 테스트를 나중에 붙이려 했다면 미리보기 훅까지 따로 설계했을 거다. 순서를 뒤집어 "이 분기를 어떻게 테스트하지"를 먼저 물으니, 그 답이 곧 미리보기의 뼈대가 됐다. 미리보기는 기능이 아니라 테스트 가능성의 부산물이었다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/essays/deterministic-design-loop`,children:`/essays/deterministic-design-loop`})]})]})}function O(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(D,{...e})}):D(e)}var k=e({default:()=>M,frontmatter:()=>A}),A={title:`청첩장을 읽는 종이에서 함께 채우는 자리로 — 하객 참여 갤러리`,date:`2026-07-06 21:00`,type:`Shipped`,summary:`청첩장은 보통 한쪽이 정보를 주고 하객은 읽기만 한다. 식 전엔 곧 열린다는 미리보기로 기대를 만들고, 당일엔 하객이 직접 찍은 사진을 올리고 서로 이모지로 반응하며, 사진 제안 칩으로 무엇을 담을지 안내하는 참여 갤러리를 붙였다. 하객이 읽는 대상에서 함께 채우는 참여자로 바뀌었다.`};function j(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`청첩장 웹앱은 보통 일방향이다. 우리가 날짜·장소·인사를 넣고, 하객은 열어서 읽고 닫는다. 개인 프로젝트로 만든 청첩장도 그랬다 — 잘 만든 안내문 한 장. 그런데 안내문은 식이 끝나면 역할이 끝난다. 하객이 그날 찍은 사진, 서로 나눈 축하는 각자의 휴대폰에 흩어진 채 사라진다.`}),`
`,(0,i.jsx)(t.p,{children:`한 번뿐인 자리인데, 그 자리를 함께 만든 사람들의 기록이 한 군데도 안 모인다는 게 아까웠다. 청첩장을 읽는 것에서 함께 채우는 것으로 바꾸면 어떨까 — 하객이 관객이 아니라 참여자가 되는 화면.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`읽기만 하던 청첩장 위에, 하객이 손을 대는 층을 얹었다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`3단계 참여 게이트로 기대를 만든다`}),`: 갤러리는 숨김 → 미리보기 → 참여 → 마감 네 상태를 지난다. 식 며칠 전부터 곧 함께 사진을 남길 수 있다는 미리보기를 먼저 띄워 기대를 만들고, 식 당일에 업로드를 열고, 며칠 뒤 마감한다. 이 상태 전이는 앞서 현재 시각을 인자로 들어올려 만든 날짜 페이즈 머신 위에 그대로 얹었다 — 게이트는 기술 장치가 아니라, 언제 무엇을 할 수 있는지로 리듬을 만드는 제품 장치다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`사진 제안 칩으로 무엇을 담을지 안내한다`}),`: 빈 업로드 창은 막막하다. 신랑신부의 순간, 우리 자리 분위기, 함께 온 사람들, 마음에 남은 장면 — 네 가지 제안을 칩으로 띄워, 하객이 무엇을 찍어 올릴지 부드럽게 고르게 했다. 빈칸을 채우라는 요구가 아니라, 담을 만한 장면을 먼저 건네는 쪽.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`이모지 반응으로 서로를 본다`}),`: 올라온 사진에 미소·반짝임·박수·축하 네 이모지로 반응할 수 있게 했다. 반응은 이모지 문자 자체가 아니라 상태 코드로 저장해, 기기마다 이모지 렌더가 달라도 집계가 어긋나지 않게 했다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`올라오는 순간 나에게 알림이 온다`}),`: 하객이 사진을 올리면 텔레그램으로 나에게 즉시 알림이 온다. 식장에 있는 동안 주머니에서 진동이 울릴 때마다, 누군가 방금 그 자리를 함께 채웠다는 뜻이었다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`결정 — 참여를 강요하지 않고 초대한다`}),`
`,(0,i.jsx)(t.p,{children:`참여형 기능은 자칫 숙제가 된다. 사진을 올려달라는 팝업이 뜨고, 안 올리면 다시 조른다. 그렇게 하면 참여율은 잠깐 오르지만 하객은 피로해진다.`}),`
`,(0,i.jsx)(t.p,{children:`대신 초대하는 쪽을 골랐다. 미리보기로 곧 열린다는 걸 먼저 보여주고, 열리면 제안 칩으로 담을 장면을 건네고, 올리든 안 올리든 갤러리는 그대로 볼 수 있게 뒀다. 게이트는 참여를 막는 문이 아니라, 지금이 어떤 순간인지 알려주는 표지판이다. 강요된 참여 한 건보다, 스스로 올린 한 장이 그 자리를 더 잘 기록한다고 봤다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`기능 목록으로 보면 업로드 폼·반응 버튼·알림이지만, 실제로 바뀐 건 청첩장이라는 물건의 성격이었다. 정보를 전달하고 끝나는 종이에서, 그날을 함께 채우고 남기는 자리로. 하객을 읽는 사람에서 참여하는 사람으로 옮기는 결정이 먼저였고, 나머지 구현은 그 결정을 따라왔다.`}),`
`,(0,i.jsx)(t.p,{children:`제품을 만들 때 무슨 기능을 넣을지보다 사용자를 어떤 역할로 초대할지를 먼저 물으면, 기능은 그 역할에서 자연스럽게 따라 나온다는 걸 다시 배웠다. 갤러리·반응·알림은 하객을 참여자로 본다는 한 줄의 파생물이었다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-29-injectable-now-policy-preview`,children:`/logs#2026-06-29-injectable-now-policy-preview`}),`, `,(0,i.jsx)(t.a,{href:`/essays/two-sided-market-decisions`,children:`/essays/two-sided-market-decisions`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-07-06-instrument-your-own-product`,children:`/logs#2026-07-06-instrument-your-own-product`})]})]})}function M(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}var N=e({default:()=>ye,frontmatter:()=>P}),P={title:`만든 다음 날 아침, 제일 먼저 여는 화면 — 내 프로젝트를 계측하는 어드민`,date:`2026-07-06 21:30`,type:`Shipped`,summary:`참여 기능을 붙였으면 하객이 실제로 참여했는지 알아야 한다. 도달률은 어드민과 나 자신을 뺀 공개 섹션 기준으로만 세고, 시간대별 방문 추이를 롤링으로 보고, 실패율이 임계값을 넘으면 주의 신호로 뒤집는 어드민 분석 화면을 만들었다. 만든 걸 감으로 두지 않고 계측하는 층.`};function F(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`앞서 하객이 참여하는 갤러리를 붙였다. 기능을 넣는 것과 그 기능이 실제로 쓰이는지는 다른 문제다. 참여형 화면을 만들어 놓고 하객들이 잘 쓰겠지 하고 감으로 두면, 안 쓰여도 모르고 잘 돼도 모른다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 만든 것 옆에 계측하는 층을 뒀다. 내가 만든 청첩장이 지금 어떻게 열리고 있는지, 하객이 어디까지 도달하는지, 뭔가 깨지고 있는지를 한 화면에서 보는 어드민.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`청첩장을 쓰는 화면이 아니라, 청첩장이 어떻게 쓰이는지 보는 화면을 만들었다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`도달률은 공개 섹션만, 나는 뺀다`}),`: 하객이 청첩장을 봤다는 신호는 표지·인사·날짜·오시는 길·갤러리 같은 공개 섹션에서 나온다. 어드민 화면이나 내가 테스트하며 남긴 방문은 도달률에서 뺐다. 만든 사람이 분모에 섞이면 숫자가 부풀고, 부푼 숫자는 판단을 흐린다. 도달률은 하객의 숫자여야 한다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`시간대별 추이는 롤링으로`}),`: 전체 누적이 아니라 최근 24시간을 시간 단위로 굴려 본다. 청첩장을 다시 공유한 직후 방문이 몰리는지, 초대가 어디까지 퍼졌는지는 누적 총합이 아니라 지금의 기울기에서 보인다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`실패율은 임계값에서 색이 바뀐다`}),`: 런타임 에러·방명록 실패·업로드 실패를 전체 이벤트 대비 비율로 재고, 임계값을 넘으면 화면이 조용한 정상에서 주의 신호로 뒤집힌다. 배포 직후 뭔가를 깨뜨렸으면, 하객이 불편을 겪기 전에 이 색이 먼저 알려준다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`관심사별로 탭을 갈랐다`}),`: 실시간 활동·깊이 분석·안정성·도달률이 한 탭에 뭉쳐 있던 걸 관심사별로 나눴다. 지금 급한 게 방금 누가 들어왔나인지 어제 대비 도달이 늘었나인지에 따라 보는 곳이 다르니까.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 만든 사람을 분모에서 빼는 게 계측의 시작이다`}),`
`,(0,i.jsx)(t.p,{children:`계측을 붙이며 가장 많이 고민한 건 화려한 지표가 아니라, 무엇을 세지 않을지였다. 내 방문, 어드민 클릭, 테스트하며 새로고침한 흔적 — 이걸 도달률에 섞으면 많이 봤다는 착시가 생긴다. 정작 알고 싶은 건 하객이 봤는지인데.`}),`
`,(0,i.jsx)(t.p,{children:`공개 섹션만 도달로 세고 나를 분모에서 뺀 순간, 숫자가 처음으로 믿을 만해졌다. 계측은 많이 재는 게 아니라, 재려는 대상만 정확히 골라내는 일이었다. 잘못 정의된 지표는 없느니만 못하다 — 틀린 숫자를 믿고 판단하니까.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`만든 다음 날 아침, 제일 먼저 연 화면이 이 어드민이었다. 밤새 몇 명이 열었고, 실패율은 평평한지, 어느 시간대에 몰렸는지. 감으로 잘 되겠지 하던 걸 숫자로 확인하니, 다음에 뭘 고칠지가 선명해졌다 — 도달이 갤러리 앞에서 뚝 떨어지면 그 앞을 손보면 된다.`}),`
`,(0,i.jsx)(t.p,{children:`기능을 만드는 것과 그 기능을 계측하는 것은 반쪽씩이다. 계측 없는 기능은 잘 되는지 모르는 채 방치되고, 계측만 있고 뺄 걸 안 빼면 틀린 숫자를 믿는다. 작은 개인 프로젝트에도 만든 걸 내가 계측한다를 붙이니, 만든 다음이 감이 아니라 관찰이 됐다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/exclude-yourself-from-metrics`,children:`/notes/exclude-yourself-from-metrics`}),`, `,(0,i.jsx)(t.a,{href:`/essays/data-trust-two-sided`,children:`/essays/data-trust-two-sided`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-07-06-guest-participation-gallery`,children:`/logs#2026-07-06-guest-participation-gallery`})]})]})}function ye(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(F,{...e})}):F(e)}var be=e({default:()=>Se,frontmatter:()=>xe}),xe={title:`침묵은 성공과 똑같이 생겼다 — 크론 무음 장애를 바깥에서 감시하기`,date:`2026-07-13 21:00`,type:`Building`,summary:`잡이 멈추면 아무 에러도 안 난다 — 그 침묵은 성공과 구분되지 않는다. 게다가 알람이 감시 대상 안에 살면 계정 장애 때 알람도 함께 죽어, 안에서는 부재를 감지할 길이 없다. 마지막 성공 실행의 나이를 바깥에서 재는 dead-man 스위치를 붙이고, 무음 공백이 남긴 적체는 다음 실행이 소진하게 했다.`};function I(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`지난 몇 주 개인 자동화 봇들에서 안전장치를 손봤다 — 정의만 되고 안 돌던 재시도를 실행기에 연결하고, 실패의 폭발 반경을 한 건으로 가뒀다. 그건 전부 잡이 돌고 있다는 전제 위의 이야기였다. 이번 주 마주친 건 그 전제가 깨진 경우다. 잡이 아예 안 돌았고, 아무 에러도 안 났고, 그래서 아무도 알려주지 않았다.`}),`
`,(0,i.jsx)(t.p,{children:`에러가 있는 실패는 차라리 낫다 — 스택 트레이스가 어디를 보라고 가리킨다. 무음 장애는 다르다. 출력이 그냥 멈춘다. 어제와 오늘의 로그가 똑같이 비어 있고, 그 비어 있음이 정상 종료인지 실행 안 됨인지 구분되지 않는다. 침묵은 성공과 똑같이 생겼다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`세 봇에 걸쳐, 잡의 부재를 감지하고 그 공백을 복구하는 층을 뒀다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`감시 대상 안에 사는 알람은 감시 대상과 함께 죽는다 (부동산 레이더 봇)`}),`: GitHub Actions가 계정 단위로 막히면(결제 장애로 "job not started") 잡도, 그 잡 말미에서 보내던 알림도 함께 죽는다. 알람이 감시하려는 대상 안에 살고 있으니, 대상이 죽을 때 알람도 같이 죽어 저장소 안에서는 원리적으로 감지할 수 없다. 5주 사이 두 번, 한 번은 이레를 그렇게 조용히 흘려보내고서야 알았다. 그래서 알람을 바깥으로 뺐다 — 로컬 launchd watchdog이 두 시간마다 마지막 성공 실행의 나이를 재고, 임계(여섯 시간)를 넘으면 운다. GitHub 밖 채널로도 같은 부재를 감시해, 계정이 통째로 막혀도 경보만은 다른 문을 통해 나온다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`감지기 자신도 조용히 죽으면 안 된다`}),`: 무음 사망을 잡는 장치가 스스로 무음으로 죽으면 감시가 없는 것과 똑같다. 그래서 watchdog을 fail-loud로 짰다. 조회 도구의 일시 실패는 한 번 재시도하고, 타임스탬프 파싱 실패나 임계값이 숫자가 아닌 경우처럼 판단 자체가 불가능한 상태도 조용히 넘기지 않고 경보로 끝낸다. watchdog의 침묵은 곧 이상 없음으로 읽히니, 이 장치만은 애매하면 우는 쪽으로 기울여 둔다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`멈춘 동안 밀린 일은 다음 실행이 소진한다 (티켓 랭킹 봇)`}),`: 같은 이레 장애를 dead-man 스위치로 덮었지만, 감지만으로는 반쪽이었다. 무음 공백 동안 처리되지 못한 신호가 적체로 쌓여 있었다. 하루 한 번 캡에 걸려 조용히 지나가는 실행이라도, 적체가 임계(백 건 이상이거나 최장 사흘 이상 묵은 경우)를 넘으면 다음 실행에서 상한을 두고 나눠 소진하게 했다. 한 번의 공백이 영영 밀린 일로 굳지 않게, 복구를 자동화했다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 침묵은 감지와 복구, 두 개의 문제다`}),`
`,(0,i.jsx)(t.p,{children:`앞서 있지만 안 도는 안전장치를 골라낸 적이 있다. 그건 잡이 돌고 있는데 그 안의 재시도·분류·파싱이 죽어 있는 경우였다. 이번 주는 그 한 겹 앞이다 — 잡 자체가 안 돌았다. 그리고 가장 고약한 건, 그 사실을 알려줄 알람이 잡과 운명을 같이했다는 점이다. 안의 안전장치가 죽은 게 아니라, 안전장치를 담은 몸이 통째로 멈췄다.`}),`
`,(0,i.jsx)(t.p,{children:`안에서는 자기 부재를 볼 수 없다. 죽은 프로세스는 나 죽었어조차 못 보낸다. 그래서 마지막 감시자는 시스템 바깥에 둔다 — 주기적인 살아있다 신호를 기다리다가, 그 신호가 안 올 때 우는 관찰자. 감지는 부재를 봐야 하는 문제고, 부재는 바깥에서만 보인다.`}),`
`,(0,i.jsx)(t.p,{children:`그리고 감지는 절반이다. 공백은 밀린 일을 남기고, 그건 다음 성공 실행이 소진해야 한다. 밖의 관찰자가 멈췄다를 말하고, 다음 실행이 밀린 걸 따라잡는다를 한다. 두 봇에서 같은 실패 계급을 만나 같은 두 층으로 답했다 — 감지는 바깥에, 복구는 다음 실행에.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`에러가 없다와 정상이다는 다르다. 무음 장애에서는 에러의 부재가 곧 위험 신호다. 잡 안에 안전장치를 아무리 쌓아도, 잡이 안 도는 순간 그 장치들도 함께 침묵한다. 그래서 가장 바깥 안전장치는 시스템 밖에 있어야 한다 — 안이 전부 죽어도 부재 하나를 붙들고 우는 관찰자.`}),`
`,(0,i.jsx)(t.p,{children:`개인 봇 몇 개짜리 규모에도, 이게 지금 돌고 있긴 한가를 바깥에서 묻는 장치 하나가 있고 없고는 이레의 침묵과 즉시 경보의 차이였다. 안전장치를 안에만 쌓다 보면, 그 안을 담은 그릇이 깨질 수 있다는 걸 잊는다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-18-dead-safeguards`,children:`/logs#2026-06-18-dead-safeguards`}),`, `,(0,i.jsx)(t.a,{href:`/essays/same-defect-class-across-repos`,children:`/essays/same-defect-class-across-repos`}),`, `,(0,i.jsx)(t.a,{href:`/notes/daily-cap-timezone-anchor`,children:`/notes/daily-cap-timezone-anchor`})]})]})}function Se(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(I,{...e})}):I(e)}var Ce=e({default:()=>Te,frontmatter:()=>we}),we={title:`기능은 성공 경로로 그리지만, 품질은 실패 경로에서 드러난다 — 하객 갤러리를 실사용자에게 연 뒤`,date:`2026-07-13 21:30`,type:`Building`,summary:`지난주 하객 참여 갤러리를 실제 하객에게 열었다. 이번 주는 그 다음이다 — 리사이즈가 실패했을 때 원본을 조용히 통과시키던 구멍을 경계 있는 거절로 바꾸고, 업로드가 몰릴 때의 막연한 안내를 원인과 다음 시각을 담은 문장으로 고치고, 마감된 섹션을 죽은 빈칸이 아니라 감사로 닫았다. 열고 난 뒤의 품질은 성공 경로가 아니라 실패 경로와 종료 상태에서 드러났다.`};function L(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`지난주 청첩장에 하객이 사진을 올리고 서로 반응하는 참여 갤러리를 붙여 실제 하객에게 열었다. 그때 쓴 글은 왜 하객을 읽는 사람에서 참여자로 초대하는가라는 설계 결정에 관한 거였다. 기능은 성공 경로로 그려진다 — 하객이 사진을 고르고, 리사이즈되고, 올라가고, 갤러리에 뜬다.`}),`
`,(0,i.jsx)(t.p,{children:`그런데 진짜 사람에게 열고 나면, 제품의 품질은 그 매끈한 성공 경로가 아니라 그 바깥에서 드러난다. 리사이즈가 실패하면 어떻게 되나. 업로드가 한꺼번에 몰리면. 제출이 마감된 뒤 그 화면을 연 하객은 무엇을 보나. 이번 주는 그 실패 경로와 종료 상태를 손봤다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`성공 경로는 그대로 두고, 그 둘레의 실패와 끝을 다졌다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`조용한 fallback을 경계 있는 거절로`}),`: 클라이언트에서 사진을 리사이즈하다 실패하면, 기존엔 그냥 원본을 그대로 올리자로 넘어갔다. 편의처럼 보였지만 실은 경계 없는 구멍이었다 — 거대한 원본이 아무 제지 없이 통과할 수 있었다. 이제 리사이즈가 실패하면 원본이 업로드 한도 안에 드는지부터 확인하고, 넘으면 용량이 작은 다른 사진을 선택해달라고 명확히 거절하고 에러를 계측한 뒤 폼을 되돌린다. fallback은 편하려고 두는 게 아니라, 실패했을 때 어디까지 허용할지를 정하는 자리였다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`막을 때는 메시지가 곧 제품이다`}),`: 업로드가 몰려 레이트리밋에 걸릴 때 뜨던 잠시 후 다시 시도해주세요는 왜 막혔는지도, 언제 다시 되는지도 안 알려줬다. 사진 업로드가 잠시 몰리고 있어요, 10분 뒤 다시 시도해주세요로 바꿨다. 실사용자를 막는 화면은 에러가 아니라 안내여야 한다 — 원인과 다음 시각을 담으면, 막힘이 고장이 아니라 잠깐 기다리면 되는 일이 된다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`종료도 화면이다`}),`: 제출이 마감된 갤러리와 방명록 섹션이 비활성 버튼과 빈칸으로 끝나던 걸, 감사 문구로 닫았다. 닫힌 섹션이 고장 난 것처럼 보이면 안 된다. 그리고 예식이 끝난 뒤로는 더 이상 의미 없는 공유·안내 버튼을 숨겨, 청첩장이 이후 상태로 자연스럽게 넘어가게 했다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 열고 나면 가장 취약한 경로에 가장 많은 사람이 몰린다`}),`
`,(0,i.jsx)(t.p,{children:`설계 단계에서 그리는 건 거의 성공 경로다. 사용자가 의도대로 움직이는 한 줄기 흐름. 하지만 실사용자에게 열고 나면 그 흐름을 벗어나는 순간들이 실제로 발생하고 — 하필 가장 많은 사람이 몰리는 때, 그러니까 행사 직후에 가장 취약한 경로가 한꺼번에 노출된다. 리사이즈 실패도, 업로드 폭주도, 마감된 화면을 여는 것도 다 그 순간에 몰린다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 열고 난 뒤의 하드닝은 무엇이 잘못될 수 있나와 그때 사용자에게 무엇을 말하나의 문제였다. 조용한 fallback은 무엇이 잘못될 수 있나를 안 물은 결과였고, 막연한 에러 메시지는 그때 무엇을 말하나를 안 정한 결과였다. 성공 경로는 코드가 정하지만, 실패 경로와 종료 상태는 대부분 문장이 정한다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`기능을 만드는 것과 그 기능을 사람에게 여는 것은 다른 일이었다. 만들 때는 이게 되게 하려면을 묻고, 열 때는 이게 안 될 때 무엇을 보여줄까를 묻는다. 참여 갤러리를 설계할 때는 하객을 어떤 역할로 초대할지가 문제였고, 열고 난 이번 주는 그 초대가 어긋나는 순간들을 어떻게 받아낼지가 문제였다.`}),`
`,(0,i.jsx)(t.p,{children:`작은 개인 프로젝트라도 실제 사람이 쓰는 순간, 실패 경로와 마지막 화면이 곧 완성도였다. 매끈한 성공 경로 하나보다, 어긋났을 때 건네는 한 문장이 그 자리를 더 정중하게 지켰다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-07-06-guest-participation-gallery`,children:`/logs#2026-07-06-guest-participation-gallery`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-29-injectable-now-policy-preview`,children:`/logs#2026-06-29-injectable-now-policy-preview`}),`, `,(0,i.jsx)(t.a,{href:`/essays/two-sided-market-decisions`,children:`/essays/two-sided-market-decisions`})]})]})}function Te(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(L,{...e})}):L(e)}var Ee=e({default:()=>Oe,frontmatter:()=>De}),De={title:`클린은 배포됐다는 뜻이 아니다 — 변경 상태를 네 층으로 확인하기`,date:`2026-08-06 09:45`,type:`Shipped`,summary:`적용되지 않은 커밋이 있나를 확인하다가, 깨끗한 현재 작업 트리 뒤의 열린 PR 브랜치, squash merge로 SHA만 달라진 옛 커밋, 별도 worktree에 남은 미커밋 10파일을 함께 찾았다. 작업 트리·패치·PR 결정·배포 산출물을 차례로 대조해 진짜 미반영 작업과 이미 끝난 흔적을 분리했다.`};function R(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsxs)(t.p,{children:[`개인 사이트에 적용되지 않은 커밋이나 PR이 남아 있는지 확인하려고 했다. 시작은 평범했다. 현재 작업 폴더에서 `,(0,i.jsx)(t.code,{children:`git status`}),`를 봤고, 변경 파일은 하나도 없었다. 이 결과만 보면 정리된 저장소처럼 보인다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`하지만 깨끗하다는 건 지금 체크아웃한 브랜치와 작업 트리 사이에 차이가 없다는 뜻일 뿐이었다. 그 브랜치는 `,(0,i.jsx)(t.code,{children:`master`}),`가 아니라 아직 머지되지 않은 주간 글 PR의 브랜치였고, 로컬 `,(0,i.jsx)(t.code,{children:`master`}),`는 최신 원격보다 49커밋 뒤에 있었다. clean이라는 한 단어가 내가 궁금했던 머지됐나, 배포됐나에는 아무 답도 하지 못했다.`]}),`
`,(0,i.jsx)(t.p,{children:`그래서 질문을 바꿨다. 커밋 하나가 적용됐는가를 바로 판정하지 않고, 변경이 머무를 수 있는 네 층을 하나씩 확인했다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`변경의 상태를 작업 트리(working tree) → 패치(patch) → PR 결정 → 배포 산출물(deployed artifact) 순서로 좁혔다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`작업 트리 — 커밋 그래프 밖의 변경부터 찾았다`}),`: 한 폴더가 깨끗해도 다른 worktree에는 작업이 남아 있을 수 있다. 연결된 worktree를 전부 돌며 상태를 확인하니, 별도 작업 공간에 수정 9파일과 신규 테스트 1파일이 커밋되지 않은 채 남아 있었다. 브랜치 HEAD 자체는 이미 `,(0,i.jsx)(t.code,{children:`master`}),`에 포함됐지만, 작업 트리의 변경은 어떤 커밋이나 PR에도 나타나지 않았다. PR 목록만 봤다면 가장 잃기 쉬운 작업을 놓칠 뻔했다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`패치 — SHA 대신 실제 변경을 비교했다`}),`: 오래된 자동화 브랜치 여러 개가 `,(0,i.jsx)(t.code,{children:`master`}),`에 없는 SHA를 가리키고 있었다. 겉으로는 전부 미머지처럼 보였지만, 대부분은 squash merge 때문에 커밋 ID만 달라진 동일 변경이었다. `,(0,i.jsx)(t.code,{children:`git cherry`}),`와 patch-id로 내용의 동등성을 확인해 이미 들어간 커밋과 실제로 앞선 커밋을 갈랐다. 브랜치가 남아 있다는 사실은 작업이 남았다는 증거가 아니었다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`PR 결정 — 닫힘을 실패로 해석하지 않았다`}),`: 열린 PR 두 건은 실제 미반영이었지만, 닫힌 채 머지되지 않은 주간 글 PR은 누락이 아니었다. 작성자가 남긴 코멘트에 한 글은 별도 PR로 선별 반영하고 다른 한 글은 새 큐레이션 기준에서 폐기한다고 적혀 있었다. 코드 그래프만 보면 미적용이지만, 제품 결정까지 보면 완료된 선택이었다. 상태 값보다 닫힌 이유가 더 중요한 경우였다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[`배포 산출물 — `,(0,i.jsx)(t.code,{children:`master`}),`에서 멈추지 않았다`]}),`: 마지막으로 최신 `,(0,i.jsx)(t.code,{children:`master`}),` SHA, 배포 workflow의 입력 SHA, `,(0,i.jsx)(t.code,{children:`gh-pages`}),` 커밋 메시지, 실제 사이트 응답의 파일 해시를 이어 붙였다. 네 값이 같은 소스를 가리키는 것을 확인하고서야 머지됐지만 배포되지 않은 변경이 없다고 말할 수 있었다. 배포 브랜치에 `,(0,i.jsx)(t.code,{children:`deploy: <source-sha>`}),`를 남겨둔 작은 규칙이 이 대조를 결정론적으로 만들었다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 변경 상태는 불리언이 아니라 좌표다`}),`
`,(0,i.jsx)(t.p,{children:`적용됨과 미적용이라는 두 칸으로는 실제 상태를 설명할 수 없었다. 각 층은 서로 다른 질문에 답한다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`작업 트리: 아직 커밋되지 않은 변경이 있는가`}),`
`,(0,i.jsx)(t.li,{children:`패치: 다른 SHA로 같은 변경이 이미 들어갔는가`}),`
`,(0,i.jsx)(t.li,{children:`PR 결정: 이 변경은 머지 대기인가, 대체됐나, 의도적으로 폐기됐나`}),`
`,(0,i.jsx)(t.li,{children:`배포 산출물: 머지된 소스가 사용자가 보는 결과까지 도달했는가`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`한 층의 PASS는 다음 층의 PASS가 아니다. 작업 트리가 깨끗해도 열린 PR 브랜치일 수 있고, 브랜치 SHA가 `,(0,i.jsx)(t.code,{children:`master`}),`에 없어도 squash merge로 패치는 들어가 있을 수 있다. PR이 merged여도 배포가 실패할 수 있고, 반대로 closed-unmerged여도 의도한 정리가 끝난 상태일 수 있다.`]}),`
`,(0,i.jsx)(t.p,{children:`그래서 변경 상태는 불리언이 아니라 네 좌표의 조합이었다. 무엇을 적용이라고 부를지 먼저 정해야, 어떤 증거를 봐야 하는지도 정해진다.`}),`
`,(0,i.jsx)(t.h2,{children:`결과`}),`
`,(0,i.jsxs)(t.p,{children:[`실제 미반영이던 주간 글 PR과 의존성 업데이트 PR은 검토 후 머지했다. 이미 반영된 squash 브랜치와 의도적으로 닫힌 PR은 다시 살리지 않았다. 별도 worktree의 미커밋 변경은 오래된 기준점 위에 있어, 그대로 섞지 않고 최신 `,(0,i.jsx)(t.code,{children:`master`}),`로 옮겨 검증할 다음 작업으로 보존했다.`]}),`
`,(0,i.jsx)(t.p,{children:`처음 질문은 적용되지 않은 커밋이 있나였지만, 답은 커밋 목록이 아니었다. 지금 살려야 할 변경, 이미 다른 모습으로 들어간 변경, 버리기로 한 변경, 사용자에게 도달한 변경을 구분한 상태 지도였다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`git status`}),`는 좋은 출발점이지만 완료 증거는 아니다. 로컬 한 폴더가 말해주는 진실은 생각보다 좁다. 반대로 작업 트리, 패치, PR 결정, 배포 산출물을 순서대로 잇으면 사람의 기억에 기대지 않고도 변경의 현재 위치를 재구성할 수 있다.`]}),`
`,(0,i.jsx)(t.p,{children:`작업이 많아질수록 브랜치 이름이나 마지막으로 본 화면에 의존하기 쉽다. 이번에는 상태를 추측하지 않고 각 층이 답할 수 있는 질문만 물었다. 덕분에 오래된 흔적을 새 일로 착각하지 않았고, PR에도 잡히지 않던 진짜 미완료 작업은 놓치지 않았다. 변경을 빨리 만드는 것만큼, 그 변경이 지금 어디에 있는지를 증명하는 일도 작업의 일부였다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-07-healthcheck-six-bots`,children:`/logs#2026-06-07-healthcheck-six-bots`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-09-ci-gate-ratchet`,children:`/logs#2026-06-09-ci-gate-ratchet`}),`, `,(0,i.jsx)(t.a,{href:`/essays/deterministic-design-loop`,children:`/essays/deterministic-design-loop`})]})]})}function Oe(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(R,{...e})}):R(e)}var ke=e({default:()=>je,frontmatter:()=>Ae}),Ae={title:`재시도로 낫지 않는 실패 — 로그인이 풀린 채 헛돈 자동화들`,date:`2026-08-10 21:00`,type:`Building`,summary:`잡은 제 시각에 돌았고 안전장치도 살아 있었는데 결과물이 없었다. 원인은 코드가 아니라 만료된 로그인이었다. 재시도로 낫지 않는 실패를 재시도하면 되는 실패와 같은 catch에서 삼키고 있었고, 회복을 감지하는 전이가 없어 알람은 한 번 울린 뒤 조용했다. 서로 무관한 자동화 세 개에서 같은 주에 같은 자리가 비어 있었다.`};function z(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`앞선 두 번은 자동화의 서로 다른 실패 계급을 다뤘다. 한 번은 잡이 돌긴 도는데 그 안의 재시도와 분류가 죽어 있던 경우였고, 다른 한 번은 잡 자체가 아예 안 돌아 침묵이 성공처럼 보이던 경우였다.`}),`
`,(0,i.jsx)(t.p,{children:`이번 주에 만난 건 셋째다. 잡은 정확히 제 시각에 돌았다. 로그도 남았다. 안전장치도 전부 살아 있었다. 그런데 결과물이 없었다. 원인은 코드가 아니라 자격증명이었다. 로그인이 풀려 있었다.`}),`
`,(0,i.jsx)(t.p,{children:`이게 고약한 건, 코드가 한 줄도 안 변했는데 어느 날 갑자기 시작된다는 점이다. 마지막 배포는 몇 주 전이고 테스트는 다 통과하고 CI도 초록인데, 토큰만 혼자 죽는다. 자격증명은 코드와 수명이 다르다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`서로 무관한 개인 자동화 세 곳을 같은 주에 손봤다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`인증 실패를 일반 오류와 같은 자리에서 삼키고 있었다 (자동화 모음 레포)`}),`: 생성 단계의 예외를 잡아서 경고만 찍고 다음 항목으로 넘어가는 코드가 여럿 있었다. 모델이 깨진 JSON을 돌려준 경우라면 그게 맞는 처리다. 이 항목은 버리고 다음 항목은 성공할 수 있으니까. 그런데 인증이 풀린 경우엔 다음 항목도, 그다음도 전부 같은 이유로 실패한다. 재시도가 의미 없는 실패를 재시도하면 되는 실패처럼 다루면, 자동화는 전량 실패를 부분 실패로 보고하며 조용히 끝난다. 인증 실패로 보이는 오류는 즉시 위로 던져 실행을 중단시키고, 일반 fatal 알림 대신 전용 알림을 보내게 했다. 그 알림에는 원인만이 아니라 다음 행동이 적혀 있다. 어느 시크릿을 갱신하고 다시 실행해야 하는지. 한 실행에서 같은 알림이 겹쳐 나가지 않게 중복 발송도 막았다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`사전 점검은 형식만 본다 (지역 뉴스 브리핑 레포)`}),`: 실행 전에 인증 파일을 검사하는 단계가 이미 있었다. 그런데 그 검사가 볼 수 있는 건 토큰이 형식상 존재하는가까지다. 한 번 쓰고 나면 소진되는 리프레시 토큰은, 이미 소진된 뒤에도 형식상 멀쩡하게 생겼다. 그 한계는 코드 주석에 정직하게 적혀 있었고, 실제로 딱 그 경로에서 무너졌다. 사전 점검을 고치는 걸로는 닿을 수 없는 자리라서, 그건 그대로 두고 뒤에 한 겹을 더 뒀다. 실행 로그를 따로 받아 인증 오류를 원인별로 분류하고, 분류된 원인을 사람이 읽을 문장으로 바꿔 알린다. 실행 전 점검이 걸렸든 실행 중 분류가 걸렸든 같은 경보 채널로 나가고, 알림에는 오류 원문이나 토큰을 넣지 않고 복구 안내와 실행 주소만 넣는다. 그리고 예행 연습 모드여도 인증 경보만은 나가게 했다. 연습 중에 발견한 만료도 진짜 만료니까.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`회복을 감지하지 못하면 다음 실패에 침묵한다 (스킬 실행기 레포)`}),`: 인증이 풀렸을 때 알림이 매 실행마다 쏟아지지 않도록 알림 보냄 표시를 파일로 남기고 있었다. 그런데 그 표시를 지우는 경로가 실행 전 프로브가 성공했을 때 하나뿐이었다. 프로브가 다른 이유로 못 도는 동안 본 실행이 멀쩡히 인증돼 돌아도 상태는 만료로 굳은 채 남을 수 있는 구조였다. 실패를 감지하는 전이만 있고 회복을 감지하는 전이가 없으면, 첫 사고 이후로 알람은 영영 조용하다. 인증된 실행이 성공하면 상태를 되돌리게 했고, 그 성공의 판정을 종료 코드 0만으로 하지 않았다. 표준 에러에 인증 오류가 찍혀 있으면 코드가 0이어도 회복으로 치지 않는다. 두 경우를 자체 테스트로 고정했다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 실패에 붙일 라벨은 실패가 아니라 누가 고치나`}),`
`,(0,i.jsx)(t.p,{children:`세 레포에서 반복해서 나온 질문은 성공했나 실패했나가 아니었다. 이 실패는 코드가 다시 시도하면 끝나는가, 아니면 사람이 브라우저를 열어 로그인해야 끝나는가였다.`}),`
`,(0,i.jsx)(t.p,{children:`둘은 완전히 다른 물건인데, catch 블록 하나 안에서는 똑같이 생겼다. 예외는 예외고, 로그는 로그다. 구분해 주는 건 오직 그 안에 담긴 문자열뿐이고, 그 문자열을 읽어 분류하지 않으면 자동화는 두 실패에 같은 대응을 한다. 그 대응이 다음 항목으로 넘어가기라면, 사람이 고쳐야 할 실패에 대고 아무도 부르지 않은 채 끝까지 헛도는 것이다.`}),`
`,(0,i.jsx)(t.p,{children:`그리고 사람이 고쳐야 하는 실패라면, 알림은 실패했습니다가 아니라 무엇을 하세요여야 했다. 새벽 세 시에 울리는 알림에 스택 트레이스만 있으면, 받은 사람은 그걸 읽고 다시 판단부터 해야 한다. 원인 한 줄과 복구 절차 한 줄이 그 판단을 대신한다.`}),`
`,(0,i.jsx)(t.p,{children:`또 하나 배운 건 상태가 양방향이어야 한다는 것이다. 실패로 넘어가는 전이만 만들고 회복으로 돌아오는 전이를 안 만들면, 그 상태는 한 번 켜지고 다시는 안 꺼진다. 알림 억제 장치는 특히 그렇다. 억제는 조용하게 실패하고, 조용한 실패는 아무도 신고하지 않는다.`}),`
`,(0,i.jsx)(t.p,{children:`무관한 세 레포가 같은 주에 같은 자리에서 무너졌다는 것도 낯익은 모양이었다. 공유하는 코드가 하나도 없는데 각자 한 번씩 같은 빈자리를 갖고 있었다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`토큰은 코드 리뷰에 잡히지 않는다. 타입 체크에도, 테스트에도, 배포 파이프라인에도 안 잡힌다. 코드가 하나도 안 변해도 어느 날 만료된다. 그래서 자동화의 신뢰성은 코드 품질만의 문제가 아니었다. 코드가 기대고 있는 자격증명이 언제 죽는지, 죽었을 때 누구에게 무엇을 말하는지, 그리고 살아 돌아왔을 때 그걸 알아채는지의 문제이기도 했다.`}),`
`,(0,i.jsx)(t.p,{children:`돌이켜 보면 세 레포 모두 실패를 다루는 코드는 있었다. 없던 건 실패를 나누는 코드였다. 나누지 않으면 대응은 하나뿐이고, 대응이 하나뿐이면 그건 대부분의 경우에 틀린 대응이다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-07-13-detecting-silent-failure`,children:`/logs#2026-07-13-detecting-silent-failure`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-18-dead-safeguards`,children:`/logs#2026-06-18-dead-safeguards`}),`, `,(0,i.jsx)(t.a,{href:`/essays/same-defect-class-across-repos`,children:`/essays/same-defect-class-across-repos`})]})]})}function je(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(z,{...e})}):z(e)}var Me=e({default:()=>Pe,frontmatter:()=>Ne}),Ne={title:`마감은 문구가 아니라 상태다 — 하객 콘텐츠를 닫고 보관하기`,date:`2026-08-10 21:20`,type:`Building`,summary:`지난 두 주는 하객 갤러리를 열고 실패 경로를 다졌다. 이번엔 닫는 일이다. 제출 마감을 사흘에서 두 주로 늘리고, 열어둔 탭이 마감 시각을 넘겨도 계속 열려 있던 문제를 타이머로 고치고, 숨긴 버튼 뒤의 서버 액션과 목록 조회까지 마감 게이트를 내렸다. 마감된 하객 콘텐츠는 지우지 않고 관리자만 읽는 보관 상태로 넘겼다.`};function B(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`청첩장에 하객 참여 갤러리를 붙였고, 실제 하객에게 연 뒤에는 리사이즈 실패나 업로드 폭주 같은 실패 경로를 다졌다. 그때 마감된 섹션이 죽은 빈칸처럼 보이지 않게 감사 문구로 닫는 것도 함께 했다. 그건 화면의 문제였다.`}),`
`,(0,i.jsx)(t.p,{children:`이번 주에 마주친 건 그 문구 뒤의 문제다. 마감됐다고 적어 둔 화면 뒤에서 서버는 여전히 다 열려 있었다. 청첩장은 끝이 있는 제품이다. 예식이 지나면 참여는 의미를 잃고 남는 건 기록인데, 그 전환을 화면에만 적어 두고 데이터 쪽은 손대지 않은 상태였다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`마감 기한을 사흘에서 두 주로`}),`: 원래 제출 마감은 예식 사흘 뒤였다. 열어 보니 사진은 그날 다 올라오지 않았다. 며칠 지나 각자 정리하다 생각나서 올리는 사람이 있었다. 사흘은 내 편의로 정한 숫자였고, 두 주는 하객의 리듬에 맞춘 숫자였다. 그리고 이 마감 시각을 한 곳에서만 계산하도록 함수로 끌어냈다. 관리자 미리보기의 마감 후 프리셋이 예전엔 사흘 뒤라고 하드코딩돼 있었는데, 이제 실제 마감 시각에서 유도된다. 정책을 옮겼는데 미리보기만 옛 날짜를 보여주는 일이 없도록.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`열어둔 탭은 마감을 모른다`}),`: 마감 여부를 화면이 그려지는 시점에 한 번 판정하고 끝냈다. 그러니 예식 날 아침에 열어 둔 탭은 마감 시각이 지나도 영원히 열린 상태였다. 그 화면에서는 마감된 뒤에도 업로드 폼이 멀쩡히 살아 있다. 마감 시각까지 남은 시간을 재서 그 순간 상태를 다시 판정하는 타이머를 붙였다. 남은 시간이 타이머 상한을 넘으면 상한만큼만 자고 다시 계산한다. 결과적으로 오래 열어 둔 화면도 자기 힘으로 마감을 맞는다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`숨긴 버튼은 서버를 막지 않는다`}),`: 마감 뒤에 버튼을 감추는 건 UI지 정책이 아니다. 좋아요, 수정, 삭제, 노출 집계까지 서버 쪽 진입점마다 마감 게이트를 넣었다. 관리자 삭제만 예외로 뒀다. 마감 뒤에도 문제가 되는 글은 내려야 하니까, 이 예외는 의도적으로 남긴 하나다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`마감은 곧 보관이다`}),`: 마감 뒤에는 목록 조회 자체가 빈 결과를 돌려준다. 관리자 세션이 있을 때만 읽힌다. 하객이 올린 사진과 글이 영원히 공개된 채로 남는 게 기본값이면 안 된다고 봤다. 초대장 링크는 어디로든 퍼질 수 있고, 그 링크를 몇 년 뒤에 여는 사람은 그날 그 자리에 있던 사람이 아닐 수 있다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`결정 — 지우는 대신 닫는다`}),`
`,(0,i.jsx)(t.p,{children:`마감된 하객 콘텐츠를 어떻게 할지 세 갈래가 있었다. 그대로 공개해 두기, 지우기, 닫아 두기.`}),`
`,(0,i.jsx)(t.p,{children:`그대로 두는 건 편했지만, 하객이 사진을 올릴 때 동의한 건 그날의 자리를 함께 채우는 일이지 영구 공개가 아니었다. 지우는 건 되돌릴 수 없다. 몇 년 뒤에 그날 누가 무엇을 남겼는지 다시 보고 싶을 수 있고, 그때 없으면 영영 없다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 닫아 두는 쪽을 골랐다. 데이터는 그대로 두고 문만 잠근다. 지금 아무도 못 보게 하는 결정은 나중에 되돌릴 수 있지만, 지우는 결정은 되돌릴 수 없다. 되돌릴 수 있는 쪽을 먼저 고르는 게 이 상황에서는 더 보수적인 선택이었다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`기능의 수명을 정하는 건 코드가 아니라 시간이었다. 갤러리를 만들 때는 언제 열지를 정했고, 열고 나서는 어긋났을 때 무엇을 보여줄지를 정했고, 이번에는 언제 닫힐지와 닫힌 뒤에 무엇이 남을지를 정했다. 같은 기능인데 매번 다른 질문이었고, 마지막 질문을 안 물으면 제품은 끝나는 법을 모른 채 계속 켜져 있는다.`}),`
`,(0,i.jsx)(t.p,{children:`그리고 마감처럼 시간이 방아쇠인 상태는 유독 반쪽으로 구현되기 쉬웠다. 화면에는 적혀 있고 서버는 열려 있거나, 새로 연 탭에서는 닫혀 있고 열어 둔 탭에서는 열려 있거나. 마감이 문구가 아니라 상태가 되려면, 그 상태를 묻는 모든 자리가 같은 답을 해야 했다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-07-13-hardening-guest-uploads`,children:`/logs#2026-07-13-hardening-guest-uploads`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-07-06-guest-participation-gallery`,children:`/logs#2026-07-06-guest-participation-gallery`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-29-injectable-now-policy-preview`,children:`/logs#2026-06-29-injectable-now-policy-preview`})]})]})}function Pe(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(B,{...e})}):B(e)}var Fe=e({default:()=>Le,frontmatter:()=>Ie}),Ie={title:`서버가 없는 곳에 잠긴 문 만들기 — 정적 호스팅의 비공개 페이지, 그리고 모바일 흰 화면`,date:`2026-08-10 21:40`,type:`Shipped`,summary:`GitHub Pages 위의 정적 사이트에는 서버가 없어서 이 사람만 보여줘를 판정할 주체가 없다. 본문을 브라우저 안에서만 복호화하는 페이지를 만들고, 평문이 실수로 배포되는 사고는 사람 눈 대신 빌드 검증기가 막게 했다. 그리고 데스크톱에서 잘 열리던 그 페이지가 사흘 뒤 휴대폰에서는 흰 화면이었다.`};function V(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`이 사이트는 GitHub Pages 위에 올라간 정적 사이트다. 빌드하면 HTML 뭉치가 나오고, 그걸 그대로 서빙한다. 서버가 없다는 건 편한 일이지만, 어느 순간 벽이 된다. 가족끼리만 보는 페이지 하나를 여기에 두고 싶었을 때가 그랬다.`}),`
`,(0,i.jsx)(t.p,{children:`정적 호스팅에는 요청을 받아 너는 누구냐를 물을 주체가 없다. 세션도 없고, 쿠키를 검사할 곳도 없고, 로그인 뒤에서 파일을 감출 방법도 없다. 그래서 정적 사이트의 비공개는 대개 아무도 이 주소를 모르길 바라는 것에서 멈춘다. 그건 잠근 게 아니라 숨긴 거다. 숨긴 것은 언젠가 발견되고, 발견되는 순간 아무 저항도 없다.`}),`
`,(0,i.jsx)(t.p,{children:`권한을 검사할 서버가 없다면, 문을 여는 주체를 서버 밖으로 옮기는 수밖에 없었다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`서버 대신 브라우저가 문을 연다`}),`: 배포되는 HTML에는 본문이 없다. 암호문과 해독기만 있다. 비밀번호에서 키를 유도하고(PBKDF2 60만 회) AES-GCM으로 복호화하는데, 이 과정 전부가 방문자의 기기 안에서 일어난다. 비밀번호가 네트워크로 나가는 구간이 없으니 가로챌 구간도 없다. 복호화된 문서는 원본 출처 권한을 주지 않은 sandbox iframe 안에서만 뜨고, 색인과 리퍼러를 막는 메타와 바깥으로 나가는 요청을 전부 차단하는 CSP를 원문 쪽에 미리 심어 뒀다. 서버가 없다는 건 검사할 주체가 없다는 뜻이지만, 동시에 털릴 서버도 없다는 뜻이었다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`평문 배포는 되돌릴 수 없어서 사람 눈에 맡기지 않았다`}),`: 정적 사이트는 push되는 순간 전 세계에 공개된다. 암호화 단계를 한 번 건너뛰고 원문을 그대로 올리면, 지워도 이미 읽힌 건 읽힌 거다. 이건 신중하게 하면 되는 종류의 일이 아니라, 사람이 하면 언젠가 틀리는 종류의 일이었다. 그래서 배포 직전 산출물 검증기에 보호 페이지 검사를 얹었다. manifest에 적힌 경로만 존재하는지, 그 디렉터리에 파일이 하나뿐인지, payload가 기대한 암호화 파라미터인지, 그리고 파일 전체 해시가 manifest에 적힌 값과 같은지. 하나라도 어긋나면 배포가 멈춘다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`검증기가 볼 수 있는 형태로 만들어 뒀다`}),`: 보호 페이지의 HTML은 payload만 넣으면 항상 같은 바이트가 나오는 함수의 출력이다. 그래서 검증기는 배포될 파일에서 payload를 꺼내 그 함수에 다시 넣고, 결과가 파일과 한 글자도 다르지 않은지 본다. 누군가 배포 산출물에 한 줄을 끼워 넣으면 그 자리에서 걸린다. 원래 이 검증기는 라우트 수와 사이트맵 개수를 맞춰 보던 물건이었는데, 보호 경로는 라우트 집계에서 아예 제외해 사이트맵으로도 새 나가지 않게 했다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 내 기기에서 됨은 검증이 아니었다`}),`
`,(0,i.jsx)(t.p,{children:`금요일에 올렸고, 데스크톱에서 잘 열렸다. 사흘 뒤 휴대폰으로 열었더니 비밀번호를 넣은 다음 흰 화면만 남았다. 원인은 두 개였고, 둘 다 모바일에서만 났다.`}),`
`,(0,i.jsx)(t.p,{children:`첫째, 원인을 좁혀 가니 복호화한 HTML을 Blob으로 만들어 iframe에 물리던 방식이 문제였다. srcdoc으로 바꾸는 것으로 끝낼 수도 있었지만, 그러면 다음에 또 다른 브라우저가 다른 이유로 못 띄울 때 똑같이 흰 화면일 것 같았다. 그래서 렌더가 실제로 일어났는지를 확인하는 악수를 넣었다. 삽입한 문서가 부모 문서에 접근할 수 없다는 것을 스스로 확인하고, 일회용 토큰과 함께 준비됐다는 신호를 보내야만 화면을 전환한다. 8초 안에 그 신호가 안 오면 실패로 처리하고 iframe을 비운다. 격리가 깨진 채로는 아예 열리지 않는다는 뜻이기도 하다.`}),`
`,(0,i.jsx)(t.p,{children:`둘째가 더 아팠다. 렌더가 실패했는데 화면은 비밀번호를 확인해주세요라고 말하고 있었다. 맞는 비밀번호를 가진 사람이 계속 다시 치게 만드는 문장이다. 원인이 전혀 다른 두 실패가 하나의 catch로 흘러들어 하나의 문장으로 나가고 있었고, 그래서 안내문이 사용자를 엉뚱한 방향으로 밀었다. 이제 복호화가 실패했을 때와 화면이 안 떴을 때에 서로 다른 문장이 뜬다. 후자에는 다른 브라우저에서 열어봐 달라고 적었다.`}),`
`,(0,i.jsx)(t.p,{children:`디버깅하다 하나 더 눈에 띄었다. 비밀번호 입력칸이 모바일 키보드의 자동 대문자와 자동 수정을 켜둔 채였다. 사용자가 친 값과 브라우저가 넘긴 값이 조용히 달라질 수 있는 자리였고, 그렇게 되면 증상은 또 비밀번호가 틀렸다는 화면이다. 자동 교정을 전부 끄고 앞뒤 공백을 잘라냈다. 이건 브라우저 호환성 문제가 아니라, 데스크톱 키보드만 상정하고 만든 입력칸의 문제였다.`}),`
`,(0,i.jsx)(t.p,{children:`암호 정책에도 예외를 하나 뚫었다. 원래는 도구가 생성한 128비트 값만 허용했는데, 사람이 고른 문자열을 써야 하는 상황이 생길 수 있다. 다만 그 예외를 기본값으로 두지 않고 호출부가 명시적으로 켜야만 열리게 했고, 예외 모드에서도 빈 값과 앞뒤 공백은 여전히 거절한다. 강도를 낮추는 선택지를 없앤 게 아니라, 낮출 때 그 선택이 코드에 흔적으로 남게 했다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`정적 사이트에서 비공개는 접근 제어의 문제가 아니라 암호학의 문제였다. 물어볼 서버가 없으면 누구인지 확인할 수 없고, 확인할 수 없으면 남는 건 열쇠를 가진 사람만 열 수 있게 만드는 것뿐이다. 제약이 답을 좁혀 준 셈이다.`}),`
`,(0,i.jsx)(t.p,{children:`그리고 되돌릴 수 없는 배포일수록 검증은 소스가 아니라 산출물에 걸어야 했다. 소스에 암호화 스크립트가 있다는 사실은 그 스크립트가 이번 배포에 실제로 돌았다는 증거가 아니다. dist 안의 파일을 열어 이게 정말 암호문인가를 묻는 검사만이 그걸 말해 준다.`}),`
`,(0,i.jsx)(t.p,{children:`마지막으로, 사흘 동안 나는 이 페이지가 잘 동작한다고 믿고 있었다. 데스크톱에서 한 번 열어 봤기 때문이다. 실제로는 이 페이지를 쓸 사람들 대부분이 휴대폰으로 연다. 내 기기에서 됨은 개인 프로젝트에서 가장 흔한 거짓 통과였다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-08-06-change-state-evidence-layers`,children:`/logs#2026-08-06-change-state-evidence-layers`}),`, `,(0,i.jsx)(t.a,{href:`/notes/github-pages-spa-fallback`,children:`/notes/github-pages-spa-fallback`}),`, `,(0,i.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`/notes/one-way-two-way-door`})]})]})}function Le(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(V,{...e})}):V(e)}var Re=e({default:()=>Be,frontmatter:()=>ze}),ze={title:`고치기 전에 멈추게 했다 — 증상을 원인으로 착각하지 않는 자동화`,date:`2026-08-13 20:35`,type:`Shipped`,summary:`이슈를 읽고 수정까지 이어가는 자동화에서 증상, 제보자의 추정, 검증된 원인이 한 덩어리로 흐르던 경로를 갈랐다. 원인의 위치·발생 과정·독립적으로 확인한 근거가 모이기 전에는 구현으로 넘기지 않고, 불완전하거나 모순된 조사 결과가 그 경계를 통과하지 못하는지도 검사한다.`};function H(e){let t={a:`a`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`이슈를 읽고 관련 코드를 찾은 뒤 수정까지 이어가는 자동화 흐름을 손봤다. 문제는 패치를 못 만드는 데 있지 않았다. 오히려 너무 빨리 만들 수 있다는 데 있었다.`}),`
`,(0,i.jsx)(t.p,{children:`이슈 본문에는 보통 세 가지가 한 문단에 섞여 있다. 사용자가 본 증상, 왜 그런 것 같다는 추정, 이렇게 고치면 된다는 제안. 사람도 급하면 셋을 한 줄의 인과처럼 읽는데, 자동화는 더 곧게 따라가기 쉽다. 그대로 두면 제보자가 지목한 이름을 코드에서 찾고, 그 주변에 수상한 분기가 보인다는 이유로 원인을 확인했다고 판단한 다음 수정으로 넘어갈 수 있다.`}),`
`,(0,i.jsx)(t.p,{children:`하지만 관련 있어 보이는 코드를 찾은 것은 진단이 아니다. 테스트가 통과하는 패치를 만든 것도 그 패치가 원래 문제를 고친다는 증거는 아니다. 출발점이 틀리면 구현·테스트·리뷰가 모두 초록이어도 처음의 증상은 그대로 남을 수 있다.`}),`
`,(0,i.jsxs)(t.p,{children:[`그래서 수정 능력을 더 보강하기 전에, `,(0,i.jsx)(t.strong,{children:`수정하지 않아야 할 때 멈추는 경계`}),`부터 만들었다. 이번 작업의 초점은 검증이 중요하다는 일반론이 아니라, 증상과 추정과 원인을 서로 다른 상태로 두고 인과 근거가 모이기 전에는 구현으로 넘기지 않는 데 있었다.`]}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 증상, 가설, 원인은 같은 문장이 아니다`}),`
`,(0,i.jsx)(t.p,{children:`증상은 사용자가 관찰했다고 제보한 현상이다. 버튼을 눌렀는데 화면이 바뀌지 않았다, 특정 조건에서 값이 비었다 같은 것. 이것도 아직 원인은 아니며, 수정 전에 재현하거나 같은 현상을 보여주는 별도의 관찰로 실제 발생부터 확인해야 한다.`}),`
`,(0,i.jsx)(t.p,{children:`가설은 제보된 현상을 설명하려는 후보다. 캐시가 오래돼서, 어떤 분기가 빠져서, 외부 응답이 늦어서. 이슈 작성자가 파일과 수정안까지 정확히 짚었더라도 독립적으로 확인하기 전에는 여기에 머문다. 좋은 가설은 탐색을 빠르게 하지만, 구체적이라는 이유만으로 사실이 되지는 않는다.`}),`
`,(0,i.jsx)(t.p,{children:`원인은 한 단계 더 필요하다. 문제가 생기는 위치가 있고, 그 위치에서 증상까지 이어지는 발생 과정이 설명되며, 그 설명을 별도의 관찰 근거가 지지해야 한다. 여기서 별도 근거는 제보자의 설명을 되풀이한 문장이 아니라 재현 결과·로그·실제 호출 경로처럼 다른 관찰 경로에서 얻은 사실이다. 해당 요인을 제거했을 때 재현 경로가 왜 끊기는지도 말할 수 있어야 한다. 셋 중 하나가 비어 있으면 아직은 원인이 아니라 유력한 이야기다.`}),`
`,(0,i.jsxs)(t.p,{children:[`이 구분을 하지 않으면 조사는 확인 편향의 모양이 된다. 먼저 답을 받은 뒤 그 답과 닮은 코드만 모으게 된다. 반대로 세 칸을 나누면 제보자의 추정은 버릴 의견이 아니라 `,(0,i.jsx)(t.strong,{children:`검증할 첫 가설`}),`이 된다. 존중하되 확정하지 않는 자리다.`]}),`
`,(0,i.jsx)(t.h2,{children:`한 일 — 수정 앞에 보류할 수 있는 상태를 넣었다`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`인과 근거가 모이기 전에는 구현으로 넘기지 않는다`}),`: 위치·발생 과정·독립적으로 확인한 근거 가운데 하나라도 비어 있으면 수정 단계로의 인계를 보류한다. 조사는 다른 근거로 계속한다. 그렇다고 원인 불명 한 줄로 끝내지는 않는다. 어디까지 확인했고, 무엇이 사실이며, 무엇이 아직 가정이고, 다음에는 어떤 근거를 얻어야 하는지 남긴다. 이 세 가지는 핵심 필요조건이지 수정으로 넘어가기 위한 전체 충분조건은 아니다. 재현이 어긋나거나 반례가 남아 있으면 여전히 멈춘다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`새 증거 없이 같은 가설을 반복하지 않는다`}),`: 한 번 확인한 방법이 답을 주지 못했다면 같은 검색을 말만 바꿔 되풀이하지 않는다. 재현 결과, 로그, 실제 호출 경로, 환경 차이, 변경 이력처럼 서로 다른 창으로 같은 가설을 본다. 조사 기록에는 무엇을 믿었는지가 아니라 무엇을 확인했고 어떤 사실을 얻었는지를 남긴다. 그래야 다음 시도가 앞선 실패를 다시 밟지 않는다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`통과하면 안 되는 입력으로 경계를 검사한다`}),`: 가드가 있다는 사실과 가드가 실제로 막는다는 사실은 다르다. 그래서 필수 근거가 일부 빠진 조사, 서로 다른 설명이 충돌하는 조사, 형식만 갖추고 내용은 없는 근거를 일부러 넣었다. 이런 입력이 수정 단계로 빠져나가면 검사가 실패한다. 성공 경로만 확인하는 테스트가 아니라, 불완전한 진단이 경계를 우회하지 못하는지를 보는 검사다.`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`이렇게 만들어진 보류는 작업 포기가 아니다. 현재 증거로는 수정 대상을 확정할 수 없다는 조사 결과이자, 다음 근거가 들어왔을 때 다시 시작할 수 있는 체크포인트다.`}),`
`,(0,i.jsx)(t.h2,{children:`증명한 범위와 다음 이슈에서 묻는 질문`}),`
`,(0,i.jsx)(t.p,{children:`이번 검증으로 말할 수 있는 건 제한적이다. 알려진 불완전 입력과 모순된 입력이 수정 경계를 통과하지 않고, 정의해 둔 필수 근거가 비어 있는 입력을 검사가 거부한다는 것까지다.`}),`
`,(0,i.jsx)(t.p,{children:`이 장치가 모든 원인을 정확히 찾는다고 증명한 것은 아니다. 실제 오진율을 낮췄다거나 생산성이 올랐다고 측정한 것도 아니다. 높은 확신은 진실 보증서가 아니고, 검사를 통과했다는 사실은 정의해 둔 계약을 지켰다는 뜻이다. 그 선을 넘는 효과는 운영 속에서 별도로 관찰해야 한다.`}),`
`,(0,i.jsx)(t.p,{children:`대신 다음 버그를 만날 때 묻는 질문은 선명해졌다.`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsx)(t.li,{children:`제보된 증상은 무엇이고, 그중 재현하거나 같은 현상을 보여주는 별도 관찰로 확인한 것은 무엇인가?`}),`
`,(0,i.jsx)(t.li,{children:`문제가 발생하는 구체적인 위치는 어디인가?`}),`
`,(0,i.jsx)(t.li,{children:`그 위치에서 사용자 증상까지 어떤 순서로 이어지는가?`}),`
`,(0,i.jsx)(t.li,{children:`그 설명을 독립적으로 지지하는 관찰 근거는 무엇인가?`}),`
`,(0,i.jsx)(t.li,{children:`어떤 결과가 나오면 지금의 원인 가설을 버릴 것인가?`}),`
`,(0,i.jsx)(t.li,{children:`하나라도 답하지 못했다면, 다음 수정이 아니라 다음 확인은 무엇인가?`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`마지막 질문이 가장 중요했다. 답이 없을 때 빈칸을 그럴듯한 수정안으로 채우지 않고, 다음에 얻어야 할 증거로 바꾸기 때문이다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`자동화는 무엇을 했는지로 평가받기 쉽다. 파일을 바꿨고, 테스트를 돌렸고, 패치를 만들었다는 출력은 눈에 잘 보인다. 멈춤은 반대로 아무것도 하지 않은 것처럼 보인다.`}),`
`,(0,i.jsx)(t.p,{children:`하지만 원인이 확인되지 않은 버그에서 변경이 없다는 건 때로 가장 정확한 결과다. 중요한 건 멈췄다는 사실만이 아니라, 왜 멈췄고 무엇이 들어오면 다시 움직일지를 남기는 것이다. 그 둘이 없으면 보류는 방치가 되고, 둘이 있으면 보류는 검증 가능한 상태가 된다.`}),`
`,(0,i.jsxs)(t.p,{children:[`원인 규명을 원칙 한 줄로 적는 것만으로는 부족했다. 원칙은 바쁜 순간에 건너뛸 수 있다. 다음 단계의 입구를 근거로 잠그고, 불완전한 입력이 그 문을 통과하지 못하는지 검사해야 행동이 바뀐다. 이번에 만든 것은 더 영리하게 고치는 자동화가 아니라, `,(0,i.jsx)(t.strong,{children:`고칠 대상을 모를 때 정직하게 멈추는 자동화`}),`였다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/incident-ai-pair-debugging`,children:`/notes/incident-ai-pair-debugging`}),`, `,(0,i.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`/notes/deterministic-loop`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-09-ci-gate-ratchet`,children:`/logs#2026-06-09-ci-gate-ratchet`})]})]})}function Be(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(H,{...e})}):H(e)}var Ve=e({default:()=>Ue,frontmatter:()=>He}),He={title:`내 에이전트 설정을 감사했다 — 되살아나는 상태 파일과 늘 비어 있던 리뷰`,date:`2026-08-17 21:00`,type:`Shipped`,summary:`스킬과 훅을 저장소로 관리한 지 몇 달, 처음으로 기능을 더하는 대신 지금 있는 것들이 실제로 무엇을 하는지 감사했다. 중간 산출물이 git에 추적된 채 자동 커밋으로 되살아나고 있었고, 자동 커밋 저장소에서만은 리뷰 훅이 구조적으로 항상 빈 결과를 내면서 그 빈 결과를 리뷰 완료로 기록하고 있었다. 각자는 맞는 두 규칙이 한 자리에서 만나 서로를 무의미하게 만든 경우였다.`};function U(e){let t={a:`a`,h2:`h2`,p:`p`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`에이전트 워크플로우를 저장소 하나로 관리한다. 라우팅 정책, 훅 스크립트, 스킬 정의가 파일로 들어 있고, 다른 작업을 하다 아쉬운 점이 보이면 그때그때 규칙을 하나씩 더해 왔다. 몇 달 그렇게 쌓았다.`}),`
`,(0,i.jsx)(t.p,{children:`문제는 더한 적은 많은데 지운 적이 거의 없다는 것이었다. 새 규칙을 넣을 때는 그 규칙 하나가 옳은지만 봤지, 그게 이미 있는 다른 규칙과 같은 자리에서 만났을 때 무슨 일이 벌어지는지는 보지 않았다. 각각 맞는 규칙들의 집합이 전체로도 맞다는 보장은 없다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 이번 주에는 기능을 더하지 않고, 지금 들어 있는 것들이 실제로 무엇을 하고 있는지를 봤다. 자기 설정을 스스로 검사 대상으로 놓는 일은 이상하게 늘 뒤로 밀린다. 남의 코드는 리뷰하면서 내 도구는 잘 돌아가는 것 같으니까 넘어간다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 지워도 되살아나는 상태 파일`}),`
`,(0,i.jsx)(t.p,{children:`이 저장소에는 중간 산출물이 쌓이는 디렉터리가 하나 있다. 리뷰 에이전트가 돌 때마다 결과 텍스트를 파일로 떨어뜨리고, 다음 단계가 그 파일을 읽어 컨텍스트로 삼는다. 실행 사이에만 필요한 임시 상태다.`}),`
`,(0,i.jsx)(t.p,{children:`그런데 그 디렉터리가 git에 추적되고 있었다. 임시 상태라고 생각한 것과 저장소가 그것을 어떻게 다루는지가 어긋나 있었던 셈이다. 여기에 규칙 두 개가 겹치면서 문제가 세 겹이 됐다.`}),`
`,(0,i.jsx)(t.p,{children:`첫째, 이 저장소는 30분마다 자동으로 커밋된다. 설정을 손보다가 유실하는 게 싫어서 오래전에 넣은 규칙이다. 그 결과 실행 중에 생긴 임시 파일들이 전부 이력으로 굳었다.`}),`
`,(0,i.jsx)(t.p,{children:`둘째, 지워도 돌아왔다. 파일을 삭제해도 다음 실행이 같은 자리에 새 파일을 만들고 자동 커밋이 그걸 다시 이력에 넣는다. 정리했다고 생각한 다음 날 다시 쌓여 있는 걸 보게 된다. 삭제가 상태를 줄이는 게 아니라 이력을 한 줄 늘리기만 했다.`}),`
`,(0,i.jsx)(t.p,{children:`셋째, 그리고 이게 실제로 신경 쓰인 지점인데, 이 저장소는 개인 원격 저장소로 동기화된다. 임시 산출물에는 그때 무엇을 작업하고 있었는지가 그대로 남는다. 파일 경로, 코드 조각, 리뷰 대상의 맥락. 어느 것도 그 자리에 보관되기로 하고 들어간 내용이 아니다. 임시로 만든 것이 자동 커밋을 타고 영구 저장소로 흘러가는 경로가 몇 달째 열려 있었다.`}),`
`,(0,i.jsx)(t.p,{children:`고친 건 단순하다. 그 디렉터리를 추적에서 빼고, 동기화 스크립트의 미러 대상에서도 제외했다. 파일이 사라진 게 중요한 게 아니라, 임시 상태가 영구 이력으로 승격되는 경로를 끊은 게 중요했다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 구조적으로 항상 비어 있던 리뷰`}),`
`,(0,i.jsx)(t.p,{children:`두 번째는 더 조용한 종류였다.`}),`
`,(0,i.jsx)(t.p,{children:`리뷰 훅 하나가 커밋되지 않은 변경을 대상으로 돈다. 방금 손댄 것을 보고 놓친 게 없는지 알려 주는 장치다. 대부분의 저장소에서는 맞게 동작한다.`}),`
`,(0,i.jsx)(t.p,{children:`그런데 방금 말한 자동 커밋 저장소에서만은 아니었다. 30분마다 전부 커밋되는 곳에서 커밋되지 않은 변경을 리뷰하면, 리뷰 대상은 거의 항상 없다. 규칙 두 개가 각각은 합리적인데 한 저장소에서 만나면 한쪽이 다른 쪽을 구조적으로 무력화한다.`}),`
`,(0,i.jsx)(t.p,{children:`여기까지면 그냥 쓸모없는 실행일 뿐이다. 진짜 문제는 그 다음이었다. 빈 결과가 리뷰 완료로 기록되고 있었다. 이력 로그에는 성공 항목이 남고, 다음 단계에는 리뷰 결과를 읽고 비교하라는 안내가 주입된다. 읽을 게 없는 파일을 가리키면서.`}),`
`,(0,i.jsx)(t.p,{children:`이건 앞서 다른 봇들에서 만났던 것과 같은 계급의 결함이다. 있지만 안 도는 안전장치, 침묵을 성공으로 읽는 감시. 이번 건 한 걸음 더 나갔다. 안 돈 게 아니라 돌긴 돌았고, 아무 일도 하지 않았는데 했다고 기록했다. 성공 카운트만 보면 이 훅은 몇 달간 성실하게 일한 것처럼 보인다.`}),`
`,(0,i.jsx)(t.p,{children:`두 방향으로 막았다. 빈 결과를 성공으로 세지 않도록 결과가 사실상 비었을 때는 주입도 기록도 하지 않고 별도의 무동작 항목으로 종결시켰다. 그리고 애초에 이 조합이 성립하지 않는 저장소는 리뷰 대상에서 제외했다. 앞의 것은 증상을 막고, 뒤의 것은 헛도는 실행 자체를 없앤다.`}),`
`,(0,i.jsx)(t.p,{children:`무동작을 침묵으로 버리지 않고 무동작이라는 이름으로 남긴 게 작지만 중요했다. 나중에 이 훅이 정말 일하고 있는지 물을 때, 성공 몇 건이 아니라 성공 몇 건과 무동작 몇 건을 나눠 볼 수 있어야 한다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일 — 그리고 오케스트레이션을 작업 크기에 맞췄다`}),`
`,(0,i.jsx)(t.p,{children:`같은 감사에서 정책 쪽도 손봤다.`}),`
`,(0,i.jsx)(t.p,{children:`그동안의 라우팅 규칙은 사실상 모든 작업에 최대치를 적용하고 있었다. 무엇을 하든 후보를 경쟁시키고, 여러 관점으로 검토하고, 독립 리뷰를 붙였다. 위험한 변경에는 맞는 방식이다. 하지만 읽기만 하고 끝나는 확인, 되돌리기 쉬운 한 줄 수정에도 같은 무게가 붙으면 느려지기만 하는 게 아니라 판단이 흐려진다. 모든 게 중요하다고 표시되면 어느 것도 중요하지 않다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 작업을 세 등급으로 나눴다. 읽기 전용이고 자기완결적이며 되돌릴 수 있고 검증기가 바로 옆에 있는 작업은 가장 가벼운 등급, 일반적인 변경은 중간, 인증·권한·비밀·배포·공유 계약·외부 전송처럼 잘못됐을 때 되돌리기 어려운 작업은 가장 무거운 등급이다.`}),`
`,(0,i.jsx)(t.p,{children:`두 가지를 규칙으로 못박았다. 등급 판단에 필요한 신호가 하나라도 불확실하면 가벼운 쪽이 아니라 무거운 쪽으로 넘긴다. 그리고 등급은 올라가기만 한다. 이미 변경을 시작한 뒤에 이건 생각보다 별거 아니네 하며 내려가지 않는다. 실제로 위험한 순간은 대개 처음에 쉬워 보였던 작업이었다.`}),`
`,(0,i.jsx)(t.p,{children:`등급이 무엇이든 최소 하나의 기계적 검증은 남긴다. 가벼운 등급은 검토를 생략하는 등급이지 확인을 생략하는 등급이 아니다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`이번 감사에서 나온 것들에는 공통점이 있었다. 어느 것도 규칙 하나가 틀려서 생긴 문제가 아니었다. 자동 커밋은 맞는 규칙이고 커밋 전 리뷰도 맞는 규칙인데, 둘이 한 저장소에서 만나니 하나가 다른 하나를 무의미하게 만들었다. 임시 파일을 남기는 것도 저장소를 원격에 동기화하는 것도 각각은 문제가 아닌데, 사이에 추적 설정 한 줄이 빠져 있으니 반출 경로가 됐다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 규칙을 하나씩 검토하는 방식으로는 이런 게 안 보인다. 규칙이 실제로 만나는 자리, 즉 특정 저장소·특정 실행 경로에 서서 봐야 보인다.`}),`
`,(0,i.jsx)(t.p,{children:`그리고 자기 도구는 감사받지 않는다는 것도 다시 확인했다. 제품 코드에는 테스트를 요구하고 남의 PR은 여섯 관점으로 보면서, 정작 그 리뷰를 굴리는 훅이 몇 달째 빈 결과를 성공으로 세고 있는 걸 몰랐다. 도구는 나를 검사하지만 나를 검사하는 도구를 검사하는 건 나뿐이다. 이번 주에 한 일은 새 기능이 아니라 그 한 겹을 처음 돌려본 것이었다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),`, `,(0,i.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`/notes/dispatch-routing-pattern`}),`, `,(0,i.jsx)(t.a,{href:`/essays/ai-workflow-chains`,children:`/essays/ai-workflow-chains`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-18-dead-safeguards`,children:`/logs#2026-06-18-dead-safeguards`})]})]})}function Ue(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(U,{...e})}):U(e)}var We=e({default:()=>Ke,frontmatter:()=>Ge}),Ge={title:`알림을 줄이는 건 빈도의 문제가 아니었다 — 하루 한 번으로 합치고, 그 안에서 다시 고르기`,date:`2026-08-17 21:20`,type:`Shipped`,summary:`공연 티켓 봇이 신규 공연과 랭킹과 시스템 상태를 각각 다른 시각에 보내고 있었다. 수집은 시간당 그대로 두고 발송만 하루 한 번으로 합쳤는데, 빈도를 줄이자 이번엔 한 통 안의 숫자 밀도가 남았다. 결국 두 번의 작업이 필요했다 — 몇 번 울릴지 정하는 일과 그 한 통에서 무엇을 먼저 보여줄지 고르는 일.`};function W(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`공연 티켓 오픈을 감시하는 개인 봇이 하나 있다. 새로 열린 공연을 찾아 알려 주고, 일간 랭킹 변화를 알려 주고, 자기 상태도 알려 준다. 세 가지를 각각 다른 시각에 텔레그램으로 보냈다.`}),`
`,(0,i.jsx)(t.p,{children:`기능으로 보면 문제가 없었다. 셋 다 정확했고 제때 왔다. 그런데 실제로는 잘 안 읽었다. 하루에 여러 번 들어오는 스냅샷을 머릿속에서 다시 조합해야 오늘 무슨 일이 있었는지 알 수 있었고, 그 조합이 귀찮으니 나중에 보자가 되고, 나중은 오지 않았다.`}),`
`,(0,i.jsx)(t.p,{children:`알림이 무시당하기 시작하면 정확도는 의미가 없어진다. 놓치면 안 되는 신규 공연 알림도 같은 무시에 휩쓸린다. 이 봇의 실패는 틀린 걸 보내는 게 아니라 맞는 걸 보내는데 안 읽히는 쪽이었다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일 — 수집과 발송을 분리했다`}),`
`,(0,i.jsx)(t.p,{children:`가장 쉬운 답은 실행 주기를 하루 한 번으로 줄이는 것이었는데, 이건 기각했다. 감시 대상인 티켓 오픈 보드는 요청할 때마다 목록이 달라진다. 잠깐 올라왔다 내려가는 행이 있어서, 하루 한 번만 보면 그 사이에 스쳐 간 공연을 통째로 놓친다. 알림 피로를 줄이려다 봇의 존재 이유를 깎는 거래다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 수집과 발송을 갈랐다. 수집은 시간당 그대로 돌면서 조용히 대기열에 쌓고, 발송만 하루 한 번 묶어서 나간다. 놓침은 수집 주기가 막고, 피로는 발송 주기가 막는다. 하나의 주기로 두 목표를 동시에 만족시키려던 게 처음의 잘못이었다.`}),`
`,(0,i.jsx)(t.p,{children:`여기서 파생된 결정이 몇 개 더 나왔다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`지역 필터를 발송이 아니라 수집으로 내렸다.`}),` 전국 랭킹에는 갈 일이 없는 지역 공연이 섞여 있었다. 보낼 때 걸러내던 걸 대기열에 넣지 않는 쪽으로 옮겼다. 관심 밖 항목이 하루 종일 상태에 머물다가 마지막에 버려지는 구조는, 중간의 모든 판단을 쓸모없는 데이터 위에서 하게 만든다. 대신 지역을 확정할 수 없는 항목은 조용히 버리지 않고 확인 불가로 남긴다. 애매하면 빠뜨리는 쪽이 아니라 남기는 쪽으로 기울여 뒀다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`정시 대신 상태로 발송 시점을 판단한다.`}),` 저녁 특정 시각에 보내기로 했는데, 무료 CI 스케줄러는 정시를 지켜 주지 않는다. 몇십 분씩 밀리는 게 예사다. 그래서 그 시각에 실행된 회차가 보낸다가 아니라, 오늘 아직 안 보냈고 지금이 기준 시각을 지났으면 보낸다로 바꿨다. 지연을 시간으로 흡수하려 하지 않고 상태로 흡수한다. 이후 회차가 재시도 역할을 자연히 맡는다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`부분 전송 실패를 청크 단위로 기록한다.`}),` 리포트가 길면 여러 조각으로 나뉘어 나가는데, 중간에서 끊기면 다음 실행이 처음부터 다시 보내 앞부분이 중복됐다. 조각 단위로 보냄을 기록하게 하니 재실행이 못 보낸 나머지만 이어서 보낸다. 실패의 단위와 기록의 단위를 맞춘 것뿐이다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`첫 통합 리포트가 그동안의 적체를 쏟지 않게 했다.`}),` 형식을 바꾸는 시점에 이전 방식으로 쌓여 있던 백 건 넘는 항목이 그대로 대기 중이었다. 이걸 그냥 두면 새 리포트의 첫 인상이 백 건짜리 벽이 된다. 전환 시점을 기준선으로 잡아 이전 적체는 발송 대상에서 뺐다. 좋은 변경도 첫 실행이 감당 못 할 크기면 나쁜 변경처럼 보인다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 빈도를 줄여도 밀도는 남는다`}),`
`,(0,i.jsx)(t.p,{children:`여기까지 하고 하루를 받아 봤다. 알림은 한 번 왔다. 목표는 달성했다. 그런데 여전히 잘 안 읽혔다.`}),`
`,(0,i.jsx)(t.p,{children:`이유는 리포트 안에 있었다. 순위 영역이 장르별 현재 순위와 변동 내역을 함께 담고 있었고, 한 줄에 이전 순위와 현재 순위와 상승폭이 나란히 있었다. 같은 사실을 세 번 다른 형태로 말하는 셈이다. 세 알림이 만들던 피로가 한 통 안의 숫자 밀도로 옮겨 갔을 뿐이었다.`}),`
`,(0,i.jsx)(t.p,{children:`이걸 보면서 알림 다이어트가 사실 두 개의 문제라는 걸 알았다. 하나는 몇 번 울릴 것인가고, 다른 하나는 그 한 번에 무엇을 먼저 보여줄 것인가다. 앞의 것만 하면 알림이 벽으로 바뀐다. 벽은 조용하지만 여전히 안 읽힌다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 두 번째 작업을 했다. 판정에 쓴 정보를 다 보여주는 대신, 내가 실제로 찾던 것 하나만 앞에 뒀다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`다섯 계단 이상 오르면서 현재 상위권에 있는 공연만 급상승 영역으로 따로 뽑아 리포트 맨 앞에 놓았다. 순위가 궁금한 게 아니라 뭐가 갑자기 뜨고 있나가 궁금한 것이었다.`}),`
`,(0,i.jsx)(t.li,{children:`이전 순위는 표시에서 뺐다. 몇 계단 올라 지금 몇 위인지만 있으면 읽는 목적에는 충분하다. 이전 순위는 판정에 필요한 값이지 표시에 필요한 값이 아니었다.`}),`
`,(0,i.jsx)(t.li,{children:`비교값이 없는 신규 관측은 급상승으로 치지 않는다. 어제 데이터가 없는 항목을 급상승으로 부르면 봇을 새로 붙인 날 화면이 전부 불꽃이 된다. 모르는 것과 오른 것을 구분하지 않으면 신호가 곧 잡음이 된다.`}),`
`,(0,i.jsx)(t.li,{children:`상위권만 훑으면 4위에서 20위 사이의 급등을 놓치고, 변동 전체를 나열하면 다시 원래 밀도로 돌아간다. 그 사이를 택했다.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`판정 로직은 하나도 안 건드렸다. 이미 순위 변화를 계산하고 중복 발송을 막는 장치가 있었고, 바꾼 건 그 결과를 어떻게 배치하고 무엇을 감출지였다. 표시 계층만 바꿨으니 상태 스키마도 재전송 방지 키도 그대로 두고 갈 수 있었다. 표현을 바꾸려고 판정을 다시 만들 뻔한 걸 한 번 멈추고 확인한 게 이번 작업에서 아낀 가장 큰 비용이었다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`알림을 줄여 달라는 요구를 들으면 보통 빈도부터 손댄다. 나도 그랬다. 그리고 빈도를 줄인 다음에야 문제가 빈도가 아니라 한 번에 요구되는 읽기 노동이었다는 걸 알았다.`}),`
`,(0,i.jsx)(t.p,{children:`숫자를 다 주는 건 친절해 보이지만 읽는 쪽에 판단을 떠넘기는 일이기도 하다. 이전 순위와 현재 순위를 나란히 놓으면 얼마나 올랐는지는 읽는 사람이 계산한다. 봇이 이미 그 계산을 했는데도 그렇다. 계산 결과만 주고 재료는 감추는 게 정보를 덜 주는 것처럼 느껴져서 못 하고 있었다.`}),`
`,(0,i.jsx)(t.p,{children:`내가 만든 도구를 내가 안 읽는다는 건 꽤 정확한 신호였다. 기능이 부족한 게 아니라 출력이 내 주의를 얻는 데 실패한 것이고, 그건 로직이 아니라 배치의 문제였다. 자기 제품의 첫 사용자가 자기일 때 이런 건 빨리 드러난다. 다만 드러난 뒤에 표현 문제를 진짜 문제로 인정하는 데 시간이 걸렸다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-07-13-detecting-silent-failure`,children:`/logs#2026-07-13-detecting-silent-failure`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-07-06-instrument-your-own-product`,children:`/logs#2026-07-06-instrument-your-own-product`}),`, `,(0,i.jsx)(t.a,{href:`/notes/daily-cap-timezone-anchor`,children:`/notes/daily-cap-timezone-anchor`}),`, `,(0,i.jsx)(t.a,{href:`/essays/automation-doesnt-reduce-work`,children:`/essays/automation-doesnt-reduce-work`})]})]})}function Ke(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(W,{...e})}):W(e)}var qe=e({default:()=>Ye,frontmatter:()=>Je}),Je={title:`못 찾았다는 없다가 아니다 — 판정을 두 값에서 세 값으로`,date:`2026-08-17 21:40`,type:`Building`,summary:`공고를 읽어 결과를 보고하는 봇에서 두 개의 판정이 모두 참과 거짓 두 값뿐이었다. 그래서 문구가 조금 다르거나 표 구조를 못 읽었을 때 해석 실패가 조용히 아니오로 접혔다. 미판정이라는 세 번째 값과 그렇게 판정한 이유를 함께 두고, 표를 인식했을 때만 명단에 없음을 결론으로 인정하도록 바꿨다.`};function G(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`아파트 임대 공실 추첨 공고를 주기적으로 읽어 오는 개인 봇이 있다. 하는 일은 두 가지다. 이번 회차에 공실이 있는지 공지에서 읽고, 발표가 나면 당첨자 명단에서 내 항목을 찾는다. 결과는 텔레그램으로 온다.`}),`
`,(0,i.jsx)(t.p,{children:`지난주에 이 봇의 보고가 실제 실행 상태와 어긋나는 문제를 손봤다. 그건 실행에 실패했는데 정상 보고가 나가는 문제였다. 이번에 만난 건 한 겹 안쪽이다. 실행은 정상이었고 페이지도 잘 읽었는데, 읽은 내용을 해석하는 단계에서 틀렸다.`}),`
`,(0,i.jsx)(t.p,{children:`그리고 이 틀림에는 방향이 있었다. 항상 아무 일 없음 쪽으로 틀렸다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 두 값 논리에서 해석 실패는 아니오가 된다`}),`
`,(0,i.jsx)(t.p,{children:`두 판정 모두 결과가 참 아니면 거짓이었다. 공실이 있다 없다, 당첨됐다 안 됐다. 자연스러워 보이는 설계인데, 여기에 문제가 있었다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`공지 쪽.`}),` 공실이 없다는 판정이 문자열 하나를 찾는 것에 걸려 있었다. 공실 없음이라는 짧은 표현. 실제 공고는 매번 조금씩 다르게 쓰인다. 조사가 붙기도 하고, 없다는 말 대신 0세대라고 적기도 하고, 문장 끝맺음이 다르다. 이 표현을 못 잡으면 그 다음 갈래로 넘어가는데, 거기서는 공실 표를 파싱한다. 그런데 표 형식도 매번 흔들린다. 층 표기에 층이 붙거나 안 붙고, 금액에 원이 붙거나 안 붙고, 주택형에 형이 붙거나 안 붙는다. 표를 못 읽으면 결과적으로 확실한 것이 없는 상태가 되고, 그 상태가 아무 일 없음에 가깝게 흘렀다.`]}),`
`,(0,i.jsx)(t.p,{children:`즉 공고 문구가 낯설다는 사실과 공실이 없다는 사실이 같은 결과로 수렴하고 있었다. 하나는 봇의 실패고 하나는 세상의 상태인데, 텔레그램에는 똑같이 조용히 나타났다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`당첨자 쪽은 더 심했다.`}),` 명단 표에서 마스킹된 이름 토큰을 찾는데, 못 찾으면 미당첨으로 처리했다. 하지만 못 찾음에는 두 종류가 있다. 표를 제대로 읽었고 그 안에 내가 없는 경우와, 애초에 표를 표로 인식하지 못해서 찾을 대상이 없었던 경우. 앞의 것은 결론이고 뒤의 것은 실패인데 출력이 같았다.`]}),`
`,(0,i.jsx)(t.p,{children:`이름 토큰 자체도 까다로웠다. 마스킹 문자가 별표일 때도 있고 동그라미나 가운뎃점일 때도 있으며, 페이지에서 텍스트를 뽑으면 글자 사이에 공백이 끼어들기도 한다. 같은 사람이 여러 형태로 보인다. 여기서 못 찾으면 곧장 미당첨으로 갔다.`}),`
`,(0,i.jsx)(t.p,{children:`두 값 논리의 위험은 여기 있다. 해석 실패를 담을 칸이 없으면 실패는 두 값 중 하나로 반올림된다. 그리고 대체로 아무 일 없다 쪽으로 반올림된다. 그쪽이 코드에서 기본값 자리에 있기 때문이다. 아무 일 없음은 알림도 조용하니, 틀렸다는 사실조차 소리를 내지 않는다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일 — 세 번째 값과 판정 사유`}),`
`,(0,i.jsx)(t.p,{children:`판정 함수가 참, 거짓, 미판정 세 값을 내도록 바꾸고, 어떤 근거로 그렇게 판정했는지를 함께 반환하게 했다. 사유가 있어야 미판정이 그냥 모르겠음으로 끝나지 않고 다음에 무엇을 봐야 하는지가 남는다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`회차 날짜를 대조한다.`}),` 공지에서 읽은 추첨 날짜가 기대한 회차와 다르면 판정하지 않고 날짜 불일치로 끝낸다. 이전에는 게시판에 남아 있는 지난 회차 공지를 이번 것으로 읽을 수 있었다. 최신 글이 곧 이번 회차라는 가정에 아무 검증이 없었다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`모순되는 공지를 결론으로 만들지 않는다.`}),` 본문에 공실이 없다는 문장과 0이 아닌 세대 수가 함께 있으면 어느 쪽도 채택하지 않고 모순으로 표시한다. 사람이 보면 바로 이상한데, 앞의 조건이 먼저 걸리면 뒤는 보지도 않고 지나가는 코드였다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`부분 파싱을 완전한 것처럼 보고하지 않는다.`}),` 머리글에 네 세대라고 적혀 있는데 실제로 읽어낸 행이 세 개면 세부 정보 불완전으로 표시한다. 이전에는 읽어낸 만큼만 보고했고, 받는 쪽에서는 그게 전부인지 일부인지 알 수 없었다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`문구의 변형을 흡수하되 넓히지는 않는다.`}),` 조사가 붙는 형태, 0세대라는 표현, 금액과 층에 붙는 단위, 주택형 뒤의 접미사, 지하층 표기를 인식 범위에 넣었다. 대신 아무 문장에나 걸리지 않도록 날짜와 공실이라는 맥락이 앞에 있을 때만 인정한다. 인식 범위를 넓히는 작업은 항상 오탐을 같이 늘리므로, 넓힌 만큼 조건도 같이 붙였다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`표를 인식했을 때만 없음을 결론으로 인정한다.`}),` 당첨자 명단은 머리글 행을 먼저 찾는다. 당첨자와 성명과 이름은 같은 열이고, 타입과 주택형과 형도 같은 열이다. 이런 별칭 표를 두고 열 위치를 식별한다. 머리글을 찾았고 열 구성이 예상과 맞을 때에만 표를 읽었다고 보고, 그때 내 항목이 없으면 비로소 미당첨이 결론이 된다. 머리글을 못 찾았으면 판정하지 않는다. 명단에 없음과 명단을 못 읽음이 드디어 다른 출력이 됐다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`이름 토큰을 정규화한다.`}),` 마스킹 문자 여러 종류와 글자 사이 공백을 한 형태로 모아 비교한다. 표기가 흔들려도 같은 항목으로 인식되게 하는 쪽이, 못 찾았으니 미당첨으로 넘어가는 것보다 낫다.`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`테스트는 성공 경로가 아니라 통과하면 안 되는 입력을 중심으로 붙였다. 날짜가 어긋난 공지, 서로 모순되는 본문, 머리글이 없는 표, 행 수가 모자라는 표. 이런 입력이 확정 결론으로 빠져나가면 실패하는 검사다. 가드가 있다는 것과 가드가 막는다는 것은 다르다는 걸 앞선 작업에서 배웠다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`이 봇의 두 판정은 서로 다른 페이지를 읽고 다른 사람이 다른 날 짰는데, 같은 자리가 비어 있었다. 해석에 실패했을 때 담을 칸이 없어서 실패가 조용한 결론으로 접히는 자리. 파서를 쓸 때마다 이 자리가 생기는 것 같다.`}),`
`,(0,i.jsx)(t.p,{children:`원인은 두 값 논리 자체보다, 두 값 중 하나가 알림을 안 만든다는 데 있다. 공실 있음과 당첨은 소리를 내고 그 반대는 조용하다. 그러니 실패가 조용한 쪽으로 반올림되는 순간 감지 경로가 통째로 사라진다. 반올림 방향과 침묵 방향이 겹치면 문제는 영원히 안 보인다.`}),`
`,(0,i.jsx)(t.p,{children:`세 번째 값을 넣는 게 정확도를 올려 주지는 않는다. 미판정은 여전히 답이 아니다. 다만 답이 아닌 것을 답인 척하지 않게 만든다. 그리고 답이 아니라는 사실은 소리를 낼 수 있다. 이번 작업으로 얻은 건 더 잘 읽는 파서가 아니라, 못 읽었을 때 못 읽었다고 말하는 파서였다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-08-13-prove-before-fix`,children:`/logs#2026-08-13-prove-before-fix`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-08-06-change-state-evidence-layers`,children:`/logs#2026-08-06-change-state-evidence-layers`}),`, `,(0,i.jsx)(t.a,{href:`/essays/silent-truncation-recurrence`,children:`/essays/silent-truncation-recurrence`}),`, `,(0,i.jsx)(t.a,{href:`/essays/same-defect-class-across-repos`,children:`/essays/same-defect-class-across-repos`})]})]})}function Ye(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(G,{...e})}):G(e)}var Xe=e({default:()=>Qe,frontmatter:()=>Ze}),Ze={title:`첫 오픈소스 기여와 권한의 경계 — Fork, PR, 그리고 신뢰 모델`,date:`2026-08-18 13:45`,type:`Building`,summary:`AI 코딩 토큰을 메뉴바에 띄워주는 오픈소스 PokeTokenBar에 Antigravity 2.0 지원을 기여하며 겪은 기록. 사내 단일 저장소 협업과 오픈소스 Fork & Pull 모델의 구조적 차이, Fork가 단순 복제가 아니라 Git 객체 참조라는 점, 그리고 런타임 크래시 픽스와 Before/After 증거까지 챙긴 오픈소스 PR 엔지니어링 과정을 정리했다.`};function K(e){let t={a:`a`,br:`br`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`로컬에서 AI 코딩 토큰 사용량을 메뉴바에서 포켓몬과 함께 모니터링하는 오픈소스 도구인 PokeTokenBar를 사용하고 있다. Claude Code나 Codex, Gemini 등 다양한 도구의 로컬 사용량을 잘 추적해 주는데, 최근 Antigravity 2.0(AGY 2.0) 환경으로 작업하면서 Antigravity의 토큰 사용량이 메뉴바에 집계되지 않는 현상을 발견했다.`}),`
`,(0,i.jsxs)(t.p,{children:[`오픈소스 코드를 직접 열어보니 원인은 경로 탐색에 있었다. 기존 코드는 레거시 CLI 경로인 `,(0,i.jsx)(t.code,{children:`~/.gemini/antigravity-cli/conversations/*.db`}),`만 하드코딩으로 조회하고 있었는데, 현재 Antigravity 2.0 및 IDE 환경에서는 `,(0,i.jsx)(t.code,{children:`~/.gemini/antigravity/conversations/`}),` 또는 `,(0,i.jsx)(t.code,{children:`~/.gemini/antigravity-ide/conversations/`}),`에 대화 DB가 생성된다.`]}),`
`,(0,i.jsx)(t.p,{children:`로컬에서 심볼릭 링크로 우회할 수도 있었지만, 오픈소스에 직접 기여하여 다른 사용자들도 별도 설정 없이 바로 쓸 수 있도록 기능을 개선하고 PR을 올리기로 했다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견과 설계 — 통합 탭과 Multi-Root 탐색`}),`
`,(0,i.jsx)(t.p,{children:`코드를 수정하기 전 제품의 철학과 구조를 먼저 검토했다.`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`분리인가, 통합인가 (One Tool Ecosystem = One Tab)`}),(0,i.jsx)(t.br,{}),`
`,`Antigravity CLI, 2.0, IDE를 별도 탭으로 쪼갤 것인지, 아니면 하나로 합칠 것인지 고민했다. PokeTokenBar의 다른 프로바이더(Claude Code의 CLI와 Desktop 등)를 보니 실행 환경과 무관하게 서비스 단위로 1개의 탭을 제공하고 있었다. 사용자가 관심 있는 건 "이 AI 플랫폼에서 오늘 총 얼마를 썼는가"이지, 탭이 파편화되는 것이 아니었다.
게다가 DB 내부의 `,(0,i.jsx)(t.code,{children:`response_id`}),` 기반 중복 제거(`,(0,i.jsx)(t.code,{children:`LocalUsageReader.dedupKeepMax`}),`)가 이미 구현되어 있어, 여러 폴더를 동시에 훑어도 토큰이 이중 집계될 위험이 없었다. 따라서 단일 `,(0,i.jsx)(t.code,{children:`Antigravity`}),` 탭으로 통합 집계하기로 결정했다.`]}),`
`]}),`
`,(0,i.jsxs)(t.li,{children:[`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`Multi-Root Discovery`}),(0,i.jsx)(t.br,{}),`
`,(0,i.jsx)(t.code,{children:`defaultRoots`}),` 배열을 두어 `,(0,i.jsx)(t.code,{children:`antigravity`}),`, `,(0,i.jsx)(t.code,{children:`antigravity-cli`}),`, `,(0,i.jsx)(t.code,{children:`antigravity-ide`}),` 후보 디렉토리를 모두 순회하도록 `,(0,i.jsx)(t.code,{children:`LocalAntigravityUsageReader`}),`와 캐시 계층을 개편했다. 기존 단일 경로 호출자들과의 하위 호환성을 위해 오버로드 시그니처도 온전히 유지했다.`]}),`
`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`사내 협업 vs 오픈소스 협업 — 왜 Clone이 아니라 Fork인가?`}),`
`,(0,i.jsx)(t.p,{children:`사내 프로젝트에만 익숙하다 보면 처음 오픈소스에 기여할 때 권한 모델에서 생소함을 느끼기 쉽다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`사내 공유 저장소 모델 (Shared Repository Model)`}),`: 팀원 모두가 저장소 쓰기(Write) 권한을 가진다. 원본을 바로 `,(0,i.jsx)(t.code,{children:`clone`}),`하고, 저장소 안에 브랜치를 따서 같은 저장소의 `,(0,i.jsx)(t.code,{children:`main`}),`으로 PR을 올린다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`오픈소스 포크 모델 (Fork & Pull Model)`}),`: 불특정 다수에게 원본 쓰기 권한을 열어둘 수 없다. 그래서 외부 기여자는 원본 저장소를 내 계정으로 **Fork(복사)**한 뒤, 내 저장소에 푸시하고 원본 저장소의 `,(0,i.jsx)(t.code,{children:`main`}),`으로 머지를 요청(PR)한다.`]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`여기서 Fork는 단순히 ZIP 파일로 코드를 내려받아 새로 올리는 것과 완전히 다르다. GitHub은 부모 저장소(`,(0,i.jsx)(t.code,{children:`upstream`}),`)와 자식 저장소(`,(0,i.jsx)(t.code,{children:`fork`}),`)의 관계를 시스템적으로 연결해 둔다. Git의 커밋 히스토리 그래프(DAG)와 객체 포인터를 그대로 공유하기 때문에, Git은 내 브랜치가 원본의 정확히 어느 커밋에서 갈라져 나왔는지를 알고 3-way Merge와 정밀한 diff 계산을 수행할 수 있다.`]}),`
`,(0,i.jsx)(t.p,{children:`권한 분리 역시 마찬가지다. PR 작성자는 저장소 설정에 따라 원본 저장소의 쓰기 권한자에게 리뷰를 요청(Review Request)할 수는 있지만, 담당자(Assignee) 지정, 라벨 부착, 최종 머지 같은 핵심 관리 권한은 원본 저장소의 권한(Triage/Write 이상)을 가진 메인테이너에게 귀속된다. 외부 기여자는 안전하게 '제안'하고, 메인테이너는 프로젝트의 규칙에 맞춰 검토하고 수용하는 책임의 경계가 명확히 그어져 있다.`}),`
`,(0,i.jsx)(t.h2,{children:`뜻밖의 발견 — Swift 6 Actor Isolation 크래시 수정`}),`
`,(0,i.jsxs)(t.p,{children:[`기능 구현 후 로컬에서 직접 빌드하여 팝오버를 열어보던 중, 첫 클릭 시 앱이 비정상 종료(`,(0,i.jsx)(t.code,{children:`SIGTRAP / _dispatch_assert_queue_fail`}),`)되는 현상을 마주쳤다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`진단 로그를 분석해 보니 `,(0,i.jsx)(t.code,{children:`@MainActor`}),`로 선언된 `,(0,i.jsx)(t.code,{children:`UsageStore`}),` 클래스에서 팝오버 첫 오픈 시 알림 권한을 요청하는 `,(0,i.jsx)(t.code,{children:`UNUserNotificationCenter.requestAuthorization`}),`의 completion handler 클로저가 백그라운드 큐에서 실행되면서, Swift 6의 엄격한 동시성 검사(Strict Concurrency Check)와 충돌하고 있었다.`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-swift`,children:`// ❌ 백그라운드 콜백이 MainActor 컨텍스트와 충돌하여 크래시 발생
UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound]) { _, _ in }

// ✅ Swift Concurrency Task와 async/await로 안전하게 전환
Task {
    try? await UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound])
}
`})}),`
`,(0,i.jsx)(t.p,{children:`이 버그는 최신 macOS 15 / Swift 6 환경에서 팝오버를 처음 여는 모든 사용자가 겪을 수 있는 런타임 크래시였다. Antigravity 기능 추가와 함께 이 픽스를 함께 포함하여 PR의 완성도를 한 단계 더 높였다.`}),`
`,(0,i.jsx)(t.h2,{children:`PR의 품질 — 기술 설명보다 '왜 필요한가'와 '어떻게 달라지는가'`}),`
`,(0,i.jsx)(t.p,{children:`오픈소스 PR을 작성할 때는 불특정 다수의 컨트리뷰터와 바쁜 메인테이너를 배려해야 한다. 구체적인 구현 코드는 diff로 확인하면 되지만, **"이 작업이 왜 필요한지(Why)"**와 **"적용하면 무엇이 어떻게 바뀌는지(Before & After)"**는 PR 본문에서 명확히 전달되어야 한다.`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`명확한 전후 비교 (Visual Evidence)`}),`: Antigravity 탭이 보이지 않던 Before 화면과, 16.5M 토큰이 정상 집계되어 탭이 활성화된 After 화면을 나란히 캡처하여 첨부했다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`레포지토리 컨벤션 준수`}),`: 프로젝트의 `,(0,i.jsx)(t.code,{children:`CONTRIBUTING.md`}),`와 `,(0,i.jsx)(t.code,{children:`PULL_REQUEST_TEMPLATE.md`}),`를 분석하여 Conventional Commits 영문 제목, 단위 테스트 케이스별 검증 목표, 로컬 재현 커맨드까지 꼼꼼히 채웠다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`오픈소스는 코드만 던져놓는 곳이 아니라 신뢰(Trust)를 교환하는 곳이다.`}),`
`,(0,i.jsx)(t.p,{children:`작은 경로 추가 작업이었지만, 도구의 UX 철학에 맞는 설계 판단을 내리고, 잠재된 런타임 크래시를 선제적으로 잡아내고, 메인테이너가 1분 안에 납득할 수 있는 증거와 문서를 갖추는 일련의 과정 자체가 큰 배움이었다.`}),`
`,(0,i.jsxs)(t.p,{children:[`꾸준히 신뢰할 수 있는 기여를 쌓아가다 보면 단순한 기여자(Contributor)를 넘어 프로젝트의 협력자(Collaborator)로 성장하게 된다. 오늘 보낸 첫 PR(`,(0,i.jsx)(t.a,{href:`https://github.com/chattymin/PokeTokenBar/pull/182`,children:`chattymin/PokeTokenBar#182`}),`)이 그 좋은 출발점이 되어줄 것이다.`]})]})}function Qe(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(K,{...e})}):K(e)}var $e=e({default:()=>tt,frontmatter:()=>et}),et={title:`합계는 맞는데 날짜가 틀렸다 — 기록의 시각을 파일이 아니라 기록 자신에게서 찾기`,date:`2026-08-24 21:00`,type:`Shipped`,summary:`지난주 오픈소스에 붙인 사용량 집계가 총합은 정확한데 날짜별로는 어긋나 있었다. 새 포맷이 토큰 필드는 그대로 두고 시각만 다른 테이블로 옮겼기 때문에, 시각 없는 기록이 전부 파일의 수정 시각으로 날짜를 받고 있었다. 자정을 넘긴 대화의 지출이 다음 날로 붙고 파일이 커질 때마다 그 날짜가 또 움직였다. 값의 정확성과 값의 귀속은 다른 문제였다.`};function q(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`지난주에 AI 코딩 토큰을 메뉴바에 띄우는 오픈소스 도구에 Antigravity 2.0 경로 탐색을 붙였다. 탭이 살아났고 토큰이 잡혔다. 거기까지가 지난 글이었다.`}),`
`,(0,i.jsx)(t.p,{children:`이번 주는 그 다음이다. 붙여 놓고 며칠 쓰다 보니 총합은 맞는데 날짜별로 보면 이상했다. 어제 분명히 오래 작업한 날이 0에 가깝고, 오늘이 부풀어 있었다. 그리고 그 어긋남이 고정된 게 아니라 볼 때마다 조금씩 움직였다.`}),`
`,(0,i.jsxs)(t.p,{children:[`기능은 성공한 상태였다. 숫자가 나왔고 탭이 켜졌고 합계는 다른 도구와 대조해도 맞았다. 틀린 건 그 숫자가 `,(0,i.jsx)(t.strong,{children:`어느 날에 속하느냐`}),`뿐이었다.`]}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 필드가 사라진 게 아니라 자리를 옮겼다`}),`
`,(0,i.jsxs)(t.p,{children:[`구 포맷은 각 생성 기록 안에 `,(0,i.jsx)(t.code,{children:`chat_start_metadata.created_at`}),`으로 자기 시각을 갖고 있었다. 현재 포맷은 이 필드를 비운다. 대신 같은 저장소의 `,(0,i.jsx)(t.code,{children:`steps`}),` 테이블에 있는 행의 메타데이터로 시각을 옮겼다. 그런데 토큰 필드는 원래 자리에 그대로 남아 있다.`]}),`
`,(0,i.jsx)(t.p,{children:`이 조합이 고약했다. 필드 하나가 통째로 없어지면 보통 그 기능이 죽고, 죽으면 보인다. 여기서는 세는 쪽이 멀쩡히 살아 있고 날짜 매기는 쪽만 죽었다. 그래서 집계는 계속 성공했다.`}),`
`,(0,i.jsx)(t.p,{children:`시각을 못 찾은 기록은 최후 수단으로 저장소 파일의 수정 시각을 받았다. 파일 하나가 품은 모든 기록이 같은 날짜를 받는다는 뜻이다. 결과는 두 가지다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`자정을 넘겨 이어진 대화는 앞부분의 지출까지 파일이 마지막으로 쓰인 날로 넘어간다.`}),`
`,(0,i.jsx)(t.li,{children:`그 날짜가 확정값이 아니다. 대화가 더 이어져 파일이 커지면 이미 집계된 옛 기록의 날짜까지 함께 움직인다.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`2.0 포맷 저장소 열 개를 놓고 재 봤다. 2026-08-18에 속한 11,523,909 토큰이 08-19 아래에 보고되고 있었고, 원래 속해야 할 날은 0으로 읽혔다.`}),`
`,(0,i.jsx)(t.p,{children:`총합만 보는 검증으로는 이걸 절대 못 잡는다. 토큰 수는 한 개도 안 틀렸으니까.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일 — 없음과 잘못됨을 나누고, 폴백을 사다리로`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`첫째, 시각 파싱 결과를 두 값에서 세 값으로 늘렸다.`}),` 원래는 옵셔널 하나였다. 값이 없으면 nil, 값이 이상해도 nil. 그런데 이 둘은 다음 행동이 정반대다. 타임스탬프 필드 자체가 없는 건 이 포맷에서는 정상이고 다른 데서 시각을 찾아오면 된다. 반면 필드는 있는데 담긴 값이 시간으로 볼 수 없는 범위라면, 그건 이 기록을 신뢰할 수 없다는 신호다. 폴백으로 덮어 주면 손상된 기록이 그럴듯한 날짜를 얻어 조용히 통계에 들어간다.`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-swift`,children:`private enum ParsedDate {
    case valid(Date)
    case absent   // 이 포맷에는 원래 없다 — 다른 데서 찾는다
    case invalid  // 있는데 시간이 아니다 — 이 기록을 버린다
}
`})}),`
`,(0,i.jsx)(t.p,{children:`지난주에 다른 저장소에서 판정을 두 값에서 세 값으로 늘린 적이 있는데, 같은 자리였다. 해석 실패를 담을 칸이 없으면 실패가 두 값 중 하나로 반올림된다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`둘째, 폴백을 사다리로 만들었다.`}),` 구체적인 것부터 순서대로 내려간다.`]}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[`기록 자신의 `,(0,i.jsx)(t.code,{children:`created_at`}),` (구 포맷은 여전히 이걸 갖고 있고, 이게 있으면 항상 이긴다)`]}),`
`,(0,i.jsxs)(t.li,{children:[`같은 `,(0,i.jsx)(t.code,{children:`response_id`}),`를 가진 step의 시각 (1대1로 정확히 대응된다)`]}),`
`,(0,i.jsx)(t.li,{children:`같은 실행에 속한 step 시각들을 순서대로 하나씩`}),`
`,(0,i.jsx)(t.li,{children:`저장소 파일의 수정 시각`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`원래 코드에는 1과 4밖에 없었다. 사다리에서 가운데 두 칸이 비어 있으면 첫 칸을 못 밟은 순간 바닥까지 떨어진다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`셋째, 순서로 잇던 걸 아이디로 이었다.`}),` 처음 만든 버전은 두 테이블의 행 순서가 같다고 보고 n번째끼리 짝지었다. 그럴듯했는데 틀렸다. 두 시퀀스가 각자 조밀하게 매겨져 있어서 한 대화 안에서 최대 21분까지 벌어졌다. 순서는 관계처럼 보이지만 관계가 아니다. 같은 것을 가리키는 아이디가 있으면 그걸 써야 한다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`넷째, 순서 폴백에서도 마지막이 아니라 순서대로 준다.`}),` 3번 칸은 아이디가 없어 순서에 기대야 하는 경우인데, 여기서 "그 실행의 마지막 step 시각"을 쓰고 싶은 유혹이 있다. 구현이 훨씬 간단하다. 하지만 그러면 몇 시간짜리 실행의 모든 기록이 한 순간으로 접히고, 접힌 만큼 자정 경계를 잘못된 쪽으로 넘긴다. 아직 `,(0,i.jsx)(t.code,{children:`created_at`}),`을 갖고 있는 저장소들로 대조해 보니 순서대로 나눠 주면 2분 안쪽으로 들어오고, 마지막으로 몰면 그 네 배였다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`다섯째, 부분 실패를 완성처럼 캐시하지 않는다.`}),` `,(0,i.jsx)(t.code,{children:`steps`}),` 읽기가 중간에 끊기면 일부 기록은 자기 실행 시각을, 나머지는 파일 수정 시각을 받은 혼합 상태가 된다. 이 상태를 대화 전체의 결과로 캐시하면 다음 실행이 다시 읽어 볼 기회가 사라진다. 불완전 스캔으로 표시하고 캐시에 넣지 않게 했다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`여기서 한 번 더 갈라야 했다. `,(0,i.jsx)(t.code,{children:`steps`}),` 테이블이 아예 없는 저장소는 읽기에 실패한 게 아니라 이 폴백이 적용되지 않는 종류다. 실패로 처리하면 구 포맷 저장소가 전부 불완전 스캔이 된다. 없는 것과 못 읽은 것을 또 나눠야 했다.`]}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`이번 결함은 "값이 틀렸다"가 아니라 "값이 엉뚱한 칸에 들어갔다"였다. 파이프라인에서 값의 정확성과 값의 귀속은 다른 문제인데, 테스트는 보통 앞의 것만 본다. 합계를 대조하는 검사는 통과했고, 지금도 통과한다.`}),`
`,(0,i.jsxs)(t.p,{children:[`그리고 원인 쪽에서 배운 게 하나 더 있다. 스키마가 바뀔 때 제일 위험한 건 필드가 사라지는 경우가 아니라 `,(0,i.jsx)(t.strong,{children:`일부만 옮겨 가는`}),` 경우다. 다 사라지면 기능이 죽으면서 알려 준다. 절반이 남아 있으면 기능은 계속 도는데 결과의 의미만 바뀐다. 옮겨 간 필드가 하필 시각처럼 "다른 데서 대충 가져다 쓸 수 있는" 값이면 폴백이 그 빈자리를 메워 주면서 마지막 신호까지 지운다.`]}),`
`,(0,i.jsx)(t.p,{children:`폴백은 없는 값을 대신하는 장치지 틀린 값을 감추는 장치가 아니어야 한다. 그 둘을 코드에서 구분해 두지 않으면 결국 같은 일을 한다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-08-18-first-open-source-contribution-fork-and-pull`,children:`/logs#2026-08-18-first-open-source-contribution-fork-and-pull`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-08-17-not-found-is-not-absent`,children:`/logs#2026-08-17-not-found-is-not-absent`}),`, `,(0,i.jsx)(t.a,{href:`/notes/daily-cap-timezone-anchor`,children:`/notes/daily-cap-timezone-anchor`}),`, `,(0,i.jsx)(t.a,{href:`/essays/silent-truncation-recurrence`,children:`/essays/silent-truncation-recurrence`})]})]})}function tt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(q,{...e})}):q(e)}var nt=e({default:()=>it,frontmatter:()=>rt}),rt={title:`거부는 제대로 작동했다, 거부한 다음 화면이 없었을 뿐`,date:`2026-08-24 21:40`,type:`Building`,summary:`아침 브리핑을 만드는 LLM이 닫는 괄호를 하나 잘못 넣었다. 엄격한 파서는 설계대로 그 산출물을 거부했고, 설계대로 폴백이 돌았다. 그런데 폴백이 슬랙에 보낸 건 원본 JSON 덩어리였다. 어제까지 테스트가 정답이라고 못 박아 둔 동작이 오늘 사고가 됐다. 엄격함은 실패 경로의 품질과 짝을 이룰 때만 안전하다.`};function J(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`아침마다 슬랙으로 브리핑을 받는다. 오늘 볼 것, 답 안 한 멘션, 진행 중인 PR. LLM이 내용을 만들고 슬랙 Block Kit 형식의 JSON 배열로 출력하면, 스크립트가 그걸 뽑아내 슬랙으로 보낸다.`}),`
`,(0,i.jsx)(t.p,{children:`LLM이 만든 JSON은 가끔 깨진다. 이건 새 소식이 아니다. 그래서 예전에 추출기를 한 번 손봤고, 그때 정한 방침은 엄격 쪽이었다. 괄호가 어긋나 파싱이 안 되면 억지로 살리지 않는다. 대충 복구하다가 배열 안쪽의 다른 배열을 최상위 블록으로 잘못 집어 올린 적이 있었기 때문이다. 그건 슬랙에서 형식 오류로 튕긴다.`}),`
`,(0,i.jsx)(t.p,{children:`그 방침은 테스트에 명시적으로 박혀 있었다. 실제 로그에서 뽑아 온 깨진 산출물 하나를 "추출 결과가 없어야 함" 케이스에 넣어 뒀다. 거부가 정답이라고 코드로 선언한 것이다.`}),`
`,(0,i.jsx)(t.h2,{children:`사고 — 8월 19일 아침`}),`
`,(0,i.jsx)(t.p,{children:`그날 브리핑이 이상하게 왔다. 화면에 JSON이 그대로 있었다.`}),`
`,(0,i.jsx)(t.p,{children:`원인을 따라가 보니 LLM이 section 블록을 닫을 때 중괄호 두 개로 닫아야 할 자리를 대괄호와 중괄호로 닫았다. 딱 한 글자 차이다. 두 블록에서 같은 실수가 났다.`}),`
`,(0,i.jsx)(t.p,{children:`그 다음은 전부 설계대로였다.`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsx)(t.li,{children:`추출기가 파싱에 실패했다. 의도대로다.`}),`
`,(0,i.jsx)(t.li,{children:`실패했으니 미배달로 두지 않고 열화 전달 폴백으로 넘어갔다. 이것도 의도대로다.`}),`
`,(0,i.jsx)(t.li,{children:`폴백은 "원본을 그냥 평문으로 보낸다"였다.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`세 번째가 문제였다. 코드는 이랬다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-bash`,children:`log "Block Kit 전송 불가 — plain 텍스트 열화 전달 fallback 시도"
if post_to_slack "\${raw}" "\${SLACK_REPORT_CHANNEL}"; then
`})}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`raw`}),`는 방금 파싱에 실패한 그 문자열이다. 즉 파서가 "이건 형식이 깨져서 쓸 수 없다"고 판단한 바로 그 텍스트를 그대로 사람에게 보낸다. 열화 전달이라는 이름이 붙어 있어서 몇 달 동안 아무도(나 말고 아무도 없지만) 다시 안 열어 본 자리였다.`]}),`
`,(0,i.jsx)(t.p,{children:`엄격한 거부는 완벽하게 작동했다. 문제는 거부한 다음에 무엇을 보여줄지를 한 번도 정하지 않았다는 것이다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 — 엄격함은 혼자 있으면 안전장치가 아니다`}),`
`,(0,i.jsx)(t.p,{children:`이 사고를 보면서 이전 결정이 반쪽이었다는 걸 알았다.`}),`
`,(0,i.jsx)(t.p,{children:`엄격한 파서를 만들 때 실제로 정한 건 "무엇을 통과시키지 않을까"였다. 그건 절반이다. 나머지 절반은 "통과시키지 않은 것을 어떻게 처리할까"인데, 이건 정하지 않고 이미 있던 경로에 얹었다. 그리고 이미 있던 경로는 엄격해지기 전에 만들어진 것이었다. 그때는 거의 안 밟히는 경로였으니 대충 원본을 보내도 괜찮았다.`}),`
`,(0,i.jsx)(t.p,{children:`파서를 엄격하게 만들수록 그 경로를 밟는 빈도가 올라간다. 엄격함을 올리는 변경은 폴백 품질에 대한 요구를 같이 올린다. 두 개가 같이 안 움직이면, 엄격함은 그냥 "더 자주, 더 나쁜 화면으로 실패하기"가 된다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일 — 네 겹으로 나눠서`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`1. 지시 층.`}),` 프롬프트에 블록별 스키마를 명시하고 section 블록을 대괄호로 닫지 말라고 못 박았다. 가장 싸고 가장 안 믿을 층이다. 이걸로 확률은 내려가지만 0이 되지는 않는다. 여기서 멈추면 안 된다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`2. 수리 층.`}),` 괄호 드리프트를 복구하는 단계를 넣었다. 문자열 안팎을 구분하면서 한 글자씩 훑고, 여는 괄호를 스택에 쌓는다. 스택 맨 위와 짝이 안 맞는 닫는 괄호는 버린다. 다 훑고 남은 스택은 순서대로 닫아 준다. 마지막으로 닫는 괄호 앞의 쉼표를 지운다.`]}),`
`,(0,i.jsx)(t.p,{children:`문자열 안팎 구분이 핵심이다. 브리핑 본문에는 대괄호가 얼마든지 들어간다. 이스케이프 상태까지 따라가지 않으면 사람이 쓴 문장을 구조로 착각해서 고친다.`}),`
`,(0,i.jsx)(t.p,{children:`이 층이 들어가면서 이전 테스트의 기대값이 정확히 뒤집혔다. 어제까지 "결과가 없어야 함"이던 실측 입력이 오늘은 "블록 다섯 개가 나와야 함"이 됐다. 같은 입력, 정반대 정답. 어제의 판단이 틀렸다기보다, 그 판단이 성립하려면 있어야 했던 다른 쪽이 없었던 것이다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`3. 최후 표현 층.`}),` 수리해도 파싱이 안 되면 JSON으로 읽기를 포기한다. 대신 텍스트 필드 값만 정규식으로 뽑아 문단으로 잇는다. 구조는 못 살려도 내용은 살린다. 브리핑에서 사람이 실제로 필요한 건 블록 구조가 아니라 거기 적힌 문장이다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`4. 출구 가드.`}),` 이걸 호출자마다 붙이는 대신, 슬랙으로 보내는 함수 하나에 마지막 검사를 뒀다. 보내려는 문자열이 대괄호로 시작하고 안에 타입 키가 보이면, 그건 평문이 아니라 블록 배열이 잘못 흘러온 것이다. 그 자리에서 텍스트로 변환한다.`]}),`
`,(0,i.jsx)(t.p,{children:`호출 경로마다 방어선을 두면 새 경로가 생길 때마다 빠뜨린다. 나가는 문 한 곳에 두면 앞으로 생길 경로도 자동으로 덮인다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`그리고 검사를 바꿨다.`}),` 원래 폴백 테스트는 "폴백이 뭔가를 출력하는가"였다. 그건 사고 당시에도 통과했다. 지금은 이렇게 본다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`출력 안에 중괄호가 없을 것`}),`
`,(0,i.jsx)(t.li,{children:`출력 안에 타입 키 문자열이 없을 것`}),`
`,(0,i.jsx)(t.li,{children:`완전히 깨진 입력에서도 원래 헤더 문구와 본문이 살아 있을 것`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`"폴백이 돈다"가 아니라 "폴백이 원본 구조를 노출하지 않는다"를 검사한다. 앞의 것은 사고를 못 잡고 뒤의 것은 잡는다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`성공 경로는 매일 아침 내가 눈으로 본다. 폴백 출력은 그날 처음 봤다. 몇 달 동안 정의만 되어 있고 한 번도 화면으로 확인된 적 없는 코드가 사용자에게 나가는 마지막 관문에 있었다.`}),`
`,(0,i.jsx)(t.p,{children:`방어선은 짜 두는 것으로 끝나지 않는다. 한 번은 일부러 밟아서 그 화면을 봐야 한다. 안 밟아 본 방어선은 방어선이 아니라 그냥 안 읽은 코드다. 실패 경로를 억지로 밟게 하는 테스트가 필요한 이유가 이것이다 — 실패는 드물게 오고, 드물게 오는 것은 검토되지 않는다.`}),`
`,(0,i.jsx)(t.p,{children:`하나 더. 견고함을 올리는 작업은 보통 입력 쪽을 조인다. 무엇을 받아들이지 않을지 정하는 일이 재미있고 명확하기 때문이다. 그런데 조인 만큼 거절이 늘고, 거절이 늘면 거절 이후의 경험이 제품의 일부가 된다. 이번에는 그쪽을 안 만들어 둔 채로 조이기만 했다.`}),`
`,(0,i.jsx)(t.p,{children:`엄격한 파서를 만들 때 진짜 정해야 하는 질문은 무엇을 거부할까가 아니라 거부한 다음에 무엇을 보여줄까였다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-08-17-not-found-is-not-absent`,children:`/logs#2026-08-17-not-found-is-not-absent`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-07-13-hardening-guest-uploads`,children:`/logs#2026-07-13-hardening-guest-uploads`}),`, `,(0,i.jsx)(t.a,{href:`/notes/ai-output-mode-collapse`,children:`/notes/ai-output-mode-collapse`}),`, `,(0,i.jsx)(t.a,{href:`/essays/silent-truncation-recurrence`,children:`/essays/silent-truncation-recurrence`})]})]})}function it(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(J,{...e})}):J(e)}var at=e({default:()=>ot,frontmatter:()=>Y}),Y={title:`선언한 주기는 지켜지지 않고 있었다 — 폴링을 줄이고, 감시 기준선은 그대로 두기로 한 이유`,date:`2026-08-27 21:20`,type:`Shipped`,summary:`15분마다 돌라고 선언한 잡이 그 주기로 돈 적이 없었다. 무료 스케줄러는 부하가 걸리면 tick을 조용히 버리는데, 버리는 비율마저 시기마다 세 배씩 달랐다. 폴링을 아예 걷어낼까 하다가 간격을 늘리는 쪽으로 정리했고, 정작 러너 시간을 크게 먹던 건 3초짜리 앞잡이었다. 그리고 이 변경을 감시하던 임계값은 계산해 본 뒤 그대로 두기로 했다.`};function X(e){let t={a:`a`,code:`code`,del:`del`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`관심 지역 아파트 정보를 모아 노션에 채우는 개인 봇이 있다. 스케줄이 두 개다. 주 1회 전체 수집, 그리고 새로 등록한 단지를 빨리 처리하려고 15분마다 도는 폴링.`}),`
`,(0,i.jsx)(t.p,{children:`폴링을 붙인 이유는 명확했다. 노션에 단지를 하나 적어 두면 한 시간 안에는 정보가 채워져 있으면 좋겠다는 것. 주 1회만 돌면 최악의 경우 엿새를 기다린다.`}),`
`,(0,i.jsx)(t.p,{children:`이번 달에 이 저장소의 Actions 사용량이 무료 한도를 넘겨 결제가 막히는 일이 다시 생겼다. 사용량을 들여다보다가, 이 폴링이 선언한 주기대로 돈 적이 없다는 걸 알았다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 1 — 무료 스케줄러의 cron은 요청이지 계약이 아니다`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`*/15 * * * *`}),`로 선언하면 하루 96번이다. 실제 실행 기록을 세어 보면 그만큼 돈 적이 없다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`더 흥미로운 건 어긋나는 정도가 일정하지도 않다는 것이었다. 6월에 셌을 때는 하루 6`,(0,i.jsx)(t.del,{children:`17번, 간격으로 치면 1시간에서 4시간이었다. 8월에 다시 세니 하루 35`}),`53번, 간격 34분 언저리였다. 같은 cron, 같은 저장소인데 실측이 세 배 넘게 움직였다.`]}),`
`,(0,i.jsx)(t.p,{children:`무료 CI 스케줄러는 정시를 보장하지 않는다. 부하가 걸리면 예약된 tick을 그냥 버리는데, 버렸다는 사실을 어디에도 남기지 않는다. 실행 기록에는 실행된 것만 있고, 안 온 tick은 애초에 존재한 적이 없는 것처럼 보인다. 그래서 선언과 실제의 차이를 보려면 실행 간격을 직접 재 보는 수밖에 없고, 한 번 재 놓고 그 숫자를 계속 믿어 둘 수도 없다.`}),`
`,(0,i.jsx)(t.p,{children:`정리하면 이랬다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`15분 SLA를 만들려고 붙인 폴링이 그 SLA를 지킨 적이 없다.`}),`
`,(0,i.jsx)(t.li,{children:`그러면서 실행된 횟수만큼의 러너 시간은 정확히 낸다. 8월에는 그 값이 무료 한도를 넘겼다.`}),`
`,(0,i.jsx)(t.li,{children:`실패했을 때는 더 나빴다. 예전에 이 워크플로가 반복 실패하면서 하루에 이슈 82건을 만든 적이 있다. 폴링은 성공도 실패도 자기 빈도만큼 증폭한다. 그 사고 뒤에 이슈 생성에는 중복 억제가 붙었다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`한 일 1 — 걷어내는 대신 간격을 늘렸다`}),`
`,(0,i.jsx)(t.p,{children:`처음엔 폴링을 아예 없애고 대기 중인 단지 처리를 주 1회 실행에 합치는 안을 만들어 봤다. 그 브랜치는 결국 머지하지 않았다.`}),`
`,(0,i.jsx)(t.p,{children:`없애면 최악의 대기가 엿새가 된다. 그건 비용 문제를 푸는 게 아니라 이 봇을 쓰는 방식 자체를 바꾸는 일이다. 단지를 적어 두고 잠시 뒤 열어 보는 흐름이 사라진다. 비용이 문제라면 빈도를 먼저 낮추고, 그래도 모자라면 그때 구조를 바꾸는 게 순서라고 봤다.`}),`
`,(0,i.jsxs)(t.p,{children:[`그래서 `,(0,i.jsx)(t.code,{children:`*/15`}),`를 30분 간격으로 늘렸다. 선언 기준으로 하루 96번에서 48번. 실측이 선언을 따라오지 않는다는 걸 방금 확인했으니 이 숫자도 그대로 믿지 않고, 주석에는 실측값과 `,(0,i.jsx)(t.strong,{children:`그걸 잰 시점`}),`을 같이 적어 뒀다.`]}),`
`,(0,i.jsx)(t.p,{children:`그리고 하나를 문서에 남겼다. 정말 한 시간 이내 처리 보장이 필요해지면 이 폴링을 더 촘촘하게 선언하는 게 아니라 바깥 스케줄러에서 밀어 넣어야 한다는 것. 지금 구조로는 아무리 촘촘하게 적어도 그 보장이 나오지 않는다. 위에서 확인한 게 정확히 그거였다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 2 — 러너 시간을 크게 먹던 건 3초짜리 잡이었다`}),`
`,(0,i.jsx)(t.p,{children:`사용량을 잡 단위로 뜯어보다 예상 못 한 걸 찾았다.`}),`
`,(0,i.jsx)(t.p,{children:`이 워크플로에는 지금 실행이 폴링인지 전체 수집인지 판정하는 잡이 앞에 하나 있었다. 하는 일은 조건문 몇 줄이고 실제 실행 시간은 3초 남짓이다.`}),`
`,(0,i.jsx)(t.p,{children:`그런데 과금은 잡 단위로 분 올림이다. 3초를 써도 1분을 낸다. 폴링이 하루 수십 번 돌면 이 3초짜리 판정이 하루 수십 분이 된다. 정작 일을 하는 수집 잡과는 별개로.`}),`
`,(0,i.jsx)(t.p,{children:`판정 자체를 없애지는 않고 수집 잡 안의 스텝으로 내렸다. 잡 하나가 통째로 사라지면서 러너를 쓰는 잡이 둘에서 하나가 됐다.`}),`
`,(0,i.jsx)(t.p,{children:`주의한 건 입력 검증이다. 그 앞잡이 하던 일 중에 지역 이름이 허용 목록에 있는지 확인하는 검증이 섞여 있었다. 잡을 지우면서 검증까지 같이 지우면 곤란하다. 검증은 사라지지 않고 실제로 값을 쓰는 스텝 바로 앞으로 내려왔다. 오히려 이쪽이 낫다. 검증하는 자리와 쓰는 자리 사이에 잡 경계와 출력 전달이 끼어 있으면, 중간에 값이 바뀌지 않는다는 걸 별도로 믿어야 한다.`}),`
`,(0,i.jsx)(t.p,{children:`되돌아오지 않도록 검사도 붙였다. 이제 없어진 앞잡의 출력을 참조하는 표현식이 파일에 남아 있으면 테스트가 실패한다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 3 — cron 문자열이 판정에 문자 그대로 쓰인다`}),`
`,(0,i.jsxs)(t.p,{children:[`이 워크플로는 지금 실행이 폴링인지를 `,(0,i.jsx)(t.strong,{children:`cron 문자열을 그대로 비교해서`}),` 판정한다. 이벤트가 알려 주는 게 그것뿐이라 달리 방법이 없다.`]}),`
`,(0,i.jsx)(t.p,{children:`즉 cron을 30분으로 바꾸는 순간 그 문자열을 비교하는 자리도 같이 바꿔야 한다. 안 바꾸면 폴링 실행이 전체 수집 모드로 돈다. 에러가 나는 게 아니라 하루 수십 번 전체 수집이 돌면서, 방금 줄이려던 비용을 몇 배로 되돌려 놓는다. 비용을 줄이는 변경이 비용을 폭증시키는 경로가 바로 옆에 있었다.`}),`
`,(0,i.jsx)(t.p,{children:`이건 주석으로 막을 수 있는 종류가 아니다. cron 선언과 판정 조건의 리터럴이 서로 맞는지 확인하는 테스트를 붙였다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일 2 — 감시 기준선은 계산해 보고 그대로 뒀다`}),`
`,(0,i.jsx)(t.p,{children:`이 봇에는 무음 장애를 잡는 watchdog이 붙어 있다. 마지막 성공 실행이 얼마나 오래됐는지 재서 임계값을 넘으면 알린다. 임계값은 6시간이다.`}),`
`,(0,i.jsx)(t.p,{children:`빈도를 절반으로 줄였으니 이 숫자도 같이 봐야 했다. 자동화를 바꾸면 그걸 감시하는 것도 같이 바뀌어야 하는데, 이게 제일 안 보인다. 감시 장치는 대상이 바뀌어도 아무 불평 없이 계속 잘 돌기 때문이다. 잘 도는 채로 틀린 것을 본다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 계산해 봤다. 8월 실측 간격이 34분 언저리였고 선언을 30분으로 늘렸으니, 정상 상태의 간격은 여전히 시간 단위 아래다. 6시간 침묵은 정상 상태에서 나올 수 있는 값이 아니다. 오히려 실행이 촘촘할수록 6시간 침묵은 더 강한 이상 신호가 된다.`}),`
`,(0,i.jsxs)(t.p,{children:[`결론은 그대로 두는 것이었다. 대신 `,(0,i.jsx)(t.strong,{children:`왜 그대로 둬도 되는지`}),`를 근거와 함께 적어 뒀다. 실측 간격, 그걸 잰 시점, 그리고 검출 최악 지연 계산 — 임계 6시간에 watchdog 자신의 실행 주기 2시간을 더해 약 8시간. 다음에 빈도를 또 건드리는 사람이 이 숫자를 다시 계산할 수 있도록.`]}),`
`,(0,i.jsx)(t.p,{children:`임계값을 안 옮긴 것과 임계값을 안 본 것은 결과가 같아 보이지만 전혀 다르다. 앞은 검토된 결정이고 뒤는 누락이다. 그런데 코드에 남는 흔적으로는 둘이 구별되지 않는다. 근거를 적어 두는 것만이 그 둘을 가른다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일 3 — 반대편에서는 상한을 규칙으로 박았다`}),`
`,(0,i.jsxs)(t.p,{children:[`며칠 전, 개인 자동화를 모아 둔 다른 저장소에서는 반대 방향의 작업을 했다. 거기는 빈도가 아니라 `,(0,i.jsx)(t.strong,{children:`한 번의 실행이 얼마나 오래 도는지`}),`에 상한이 없었다. 무언가 매달리면 러너 기본 한도까지 간다.`]}),`
`,(0,i.jsx)(t.p,{children:`정책을 문서가 아니라 린터로 만들었다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`러너를 쓰는 모든 잡은 실행 시간 상한을 선언해야 한다. 없으면 검사 실패.`}),`
`,(0,i.jsx)(t.li,{children:`그 값은 1분 이상 30분 이하의 정수여야 한다. 상한이 있는데 실질적으로 무한이면 없는 것과 같다.`}),`
`,(0,i.jsx)(t.li,{children:`워크플로마다 동시 실행 그룹을 선언해야 하고, 진행 중인 실행을 취소하지 않도록 설정해야 한다. 부작용이 있는 자동화를 중간에 끊으면 절반만 적용된 상태가 남는다.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`워크플로 여덟 개에 전부 상한을 붙였고, 정책 자체에도 단위 테스트를 붙였다. 규칙을 지키는지 검사하는 코드는 그 자체로 틀릴 수 있다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`스케줄은 코드처럼 다뤄지지 않는다. cron 한 줄을 적어 두면 그게 사실이 된 것처럼 느껴지고, 실제로 그 주기로 도는지 재 보는 일은 잘 안 한다. 선언한 값과 받은 값이 다르다는 게 아무 소리도 안 내기 때문이다.`}),`
`,(0,i.jsx)(t.p,{children:`이번에 하나 더 배웠다. 재 보는 것도 한 번으로는 부족했다. 6월의 실측과 8월의 실측이 세 배 넘게 달랐다. 그러니까 재 봤더니 하루 6~17번이더라는 건 관측이지 속성이 아니다. 그걸 속성처럼 주석에 박아 두면, 두 달 뒤에 그 숫자를 근거로 판단하는 사람이 틀린 전제 위에서 결정한다. 지금은 실측값 옆에 잰 시점을 반드시 같이 적는다.`}),`
`,(0,i.jsxs)(t.p,{children:[`그리고 비용을 줄이려고 시작한 작업에서 정작 큰 몫은 빈도가 아니라 `,(0,i.jsx)(t.strong,{children:`과금 단위`}),`에 있었다. 3초짜리 잡이 1분으로 반올림되는 것. 빈도를 반으로 줄인 것보다 잡 하나를 스텝으로 내린 쪽이 더 큰 절감이었다. 무엇이 비싼지는 사용량을 잡 단위로 쪼개 보기 전까지 몰랐고, 그전까지 내 머릿속의 범인은 계속 빈도였다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-08-17-fewer-alerts-then-better-signal`,children:`/logs#2026-08-17-fewer-alerts-then-better-signal`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-07-13-detecting-silent-failure`,children:`/logs#2026-07-13-detecting-silent-failure`}),`, `,(0,i.jsx)(t.a,{href:`/notes/dead-retry-bounded-executor`,children:`/notes/dead-retry-bounded-executor`}),`, `,(0,i.jsx)(t.a,{href:`/essays/automation-doesnt-reduce-work`,children:`/essays/automation-doesnt-reduce-work`})]})]})}function ot(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(X,{...e})}):X(e)}var st=e({default:()=>lt,frontmatter:()=>ct}),ct={title:`기다리면 낫는 실패 — 사용량 한도를 실패가 아니라 일시중단으로`,date:`2026-08-31 21:50`,type:`Shipped`,summary:`예약해 둔 에이전트 작업들이 어느 날 무더기로 실패했다. 코드는 멀쩡했고 원인은 사용량 한도였다. 실패로 처리하니 알림이 울리고 재시도가 돌았는데 둘 다 아무것도 낫게 하지 못했다. 한도를 감지해 리셋 시각까지 건너뛰는 회로를 붙였고, 그 과정에서 한 번만 알린다는 규칙이 영원히 한 번만으로 굳어 있는 걸 발견했다.`};function Z(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`개인 자동화들을 에이전트 스킬로 옮겨 두고 스케줄러가 돌린다. 아침 브리핑, 주간 회고, 알림 정리 같은 것들. 전부 같은 실행 스크립트를 거친다.`}),`
`,(0,i.jsx)(t.p,{children:`어느 날 이것들이 한꺼번에 실패했다. 스크립트도 스킬도 그대로였다. 세션 사용량 한도에 걸렸을 뿐이다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 1 — 실패에는 세 종류가 있는데 처리는 한 종류였다`}),`
`,(0,i.jsx)(t.p,{children:`그때까지 이 스크립트에게 실패는 한 가지였다. 0이 아닌 종료 코드. 그런데 실제로는 셋이다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`재시도로 낫는 실패.`}),` 네트워크가 한 번 튄 것. 다시 하면 된다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`재시도로 안 낫는 실패.`}),` 로그인이 풀린 것. 사람이 손을 대기 전에는 몇 번을 해도 같다. 이건 이달 초에 한 번 데었다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`기다리면 낫는 실패.`}),` 사용량 한도. 아무도 손대지 않아도 정해진 시각에 저절로 낫는다.`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`세 번째를 첫 번째처럼 다루면 두 가지가 망가진다. 재시도가 헛돌고 — 남은 한도가 0이니 갉아먹을 것도 없이 그냥 세션만 낭비한다 — 알림이 실패로 울린다.`}),`
`,(0,i.jsx)(t.p,{children:`그리고 조용히 더 나쁜 게 하나 있다. 실패율이 오염된다. 한도 때문에 실패한 스무 건이 섞여 들어가면, 같은 주에 진짜 결함이 하나 있어도 그 하나가 안 보인다. 노이즈가 신호를 덮는 게 아니라 신호가 노이즈와 같은 칸에 들어가 버린다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일 1 — 한도를 감지하고 리셋 시각까지 건너뛴다`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`CLI가 뱉는 한도 문구를 인식한다. 한도에 도달했고 몇 시에 리셋된다는 형태의 문장.`}),`
`,(0,i.jsx)(t.li,{children:`그 문장에서 리셋 시각을 뽑아 epoch로 바꾼다. 내일이 붙는 경우와, 적힌 시각이 이미 지나서 다음 날을 뜻하는 경우를 둘 다 넘긴다.`}),`
`,(0,i.jsx)(t.li,{children:`상태 파일에 리셋 epoch와 사람이 읽을 힌트를 함께 적는다.`}),`
`,(0,i.jsx)(t.li,{children:`그 시각 전까지 들어오는 예약 실행은 세션을 시작하지도 않고 즉시 건너뛴다. 실패가 아니라 건너뜀이라는 별도 결과로.`}),`
`,(0,i.jsx)(t.li,{children:`리셋 시각이 지나면 상태 파일을 지우고 다음 스케줄부터 알아서 재개된다.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`시각을 사람이 읽으라고 쓴 문장에서 파싱하는 건 취약하다. 문구가 조금만 바뀌어도 못 읽는다. 그래서 파싱이 실패하면 30분짜리 기본값으로 떨어진다. 정확한 재개 시각을 잃는 대신 무한 재시도만은 확실히 막는다. 못 읽었을 때 어디로 떨어지는지를 정하는 게 파싱 자체보다 중요했다.`}),`
`,(0,i.jsx)(t.p,{children:`상태를 파일로 두기로 한 순간 그 파일이 새 공격면이 된다. 디렉터리가 심볼릭 링크면 거부하고, 소유자가 나인지 확인하고, 권한을 소유자 전용으로 좁혔다. 임시 파일에 쓰고 원자적으로 옮긴다. 상태 파일 하나 만드는 데 이만큼 필요한 이유는 이게 다른 프로세스에게 지금 하지 말라고 말하는 신호이기 때문이다. 그 신호를 아무나 쓸 수 있으면 안 된다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 2 — 한 번만 알린다가 영원히 한 번만이 돼 있었다`}),`
`,(0,i.jsx)(t.p,{children:`알림은 한 번만 보내야 한다. 예약 작업이 열 개면 열 개가 다 같은 한도에 걸리는데 슬랙에 열 통이 갈 이유가 없다. 그래서 처음엔 이렇게 했다. 알림을 보냈으면 표식 파일을 만들고, 그 파일이 있으면 보내지 않는다.`}),`
`,(0,i.jsx)(t.p,{children:`돌려 놓고 다음 한도까지 가 보니 조용했다. 표식 파일이 첫 번째 한도 이후로 계속 남아 있었기 때문이다. 중복 억제가 뜻해야 했던 건 이번 한도 동안 한 번인데, 구현된 건 이 기계에서 평생 한 번이었다.`}),`
`,(0,i.jsx)(t.p,{children:`억제 키에 세대를 넣어 고쳤다. 표식 파일에 그때의 리셋 epoch를 함께 적고, 지금 상태의 리셋 epoch와 같을 때만 억제한다. 다음 한도는 리셋 시각이 다르니 다시 울린다.`}),`
`,(0,i.jsxs)(t.p,{children:[`이 실수가 흥미로운 건 코드만 보면 완전히 맞아 보인다는 점이다. 이미 보냈으면 보내지 않는다는 문장은 정확히 의도한 그대로다. 틀린 건 `,(0,i.jsx)(t.strong,{children:`이미`}),`의 범위였다. 조건이 틀린 게 아니라 조건이 참조하는 동일성의 경계가 없었다. 그래서 코드 리뷰로도, 테스트로도 잘 안 잡힌다 — 다음 한도가 올 때까지 며칠을 기다려야 증상이 나온다.`]}),`
`,(0,i.jsx)(t.p,{children:`중복 억제를 쓸 때마다 이제 같은 질문을 한다. 여기서 같은 것은 무엇까지를 같다고 보는가, 그리고 그 동일성은 언제 끝나는가.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일 2 — 알림 문구를 상태 안내로 바꿨다`}),`
`,(0,i.jsx)(t.p,{children:`알림 자체도 고쳤다. 예전 문구는 실패를 알렸다. 지금은 이렇게 말한다. 실패가 아니라 일시 중단이라는 것, 언제 리셋되는지, 일반 보고 작업은 그 뒤 다음 스케줄부터 저절로 재개된다는 것. 그리고 하나 더 — 작업 중 변경된 파일이 남은 체인은 자동 재개 대상이 아니니 따로 확인해야 한다는 것.`}),`
`,(0,i.jsx)(t.p,{children:`마지막 줄이 중요하다. 알아서 재개된다는 게 전부라고 적으면 나는 그 알림을 안 읽게 되고, 그러다 중간에 끊긴 작업 하나를 놓친다. 자동으로 낫는 것과 안 낫는 것을 한 통 안에서 갈라 줘야 그 알림이 계속 읽힌다.`}),`
`,(0,i.jsx)(t.p,{children:`여러 예약 작업이 동시에 같은 한도에 걸리므로 알림 전송에는 잠금을 걸었고, 오래된 잠금은 회수하게 했다. 잠금을 쥔 채 죽은 프로세스가 알림을 영구히 막으면 안 된다. 위의 표식 파일 문제와 같은 모양이다. 한 번만이라는 규칙에는 언제까지 한 번인지가 반드시 붙어야 한다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`이달 초에 쓴 글의 결론은 재시도로 낫지 않는 실패를 재시도하면 되는 실패와 같은 자리에서 삼키지 말라는 것이었다. 이번에 붙인 건 그 분류의 세 번째 칸이다.`}),`
`,(0,i.jsxs)(t.p,{children:[`이 칸이 늦게 생긴 이유를 생각해 봤다. 앞의 두 개는 원인이 코드이거나 사람이다. 세 번째는 `,(0,i.jsx)(t.strong,{children:`원인이 시간`}),`이다. 그래서 코드에서 고칠 게 없어 보이고, 고칠 게 없으면 그냥 실패로 남겨 두게 된다. 하지만 고칠 게 없는 실패일수록 실패라고 부르면 안 된다. 아무 정보도 주지 못하면서 신호 자리만 차지하기 때문이다.`]}),`
`,(0,i.jsx)(t.p,{children:`에이전트에게 일을 맡기는 자동화가 늘수록 이 칸은 더 커질 것 같다. 한도, 큐 대기, 모델 일시 장애. 전부 내 코드는 틀리지 않았는데 지금은 못 하는 상태다. 이걸 실패와 같은 통에 넣으면, 정작 내 코드가 틀렸을 때 그 신호가 묻힌다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-08-10-auth-failure-is-not-retryable`,children:`/logs#2026-08-10-auth-failure-is-not-retryable`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-08-17-fewer-alerts-then-better-signal`,children:`/logs#2026-08-17-fewer-alerts-then-better-signal`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-08-17-auditing-my-own-agent-setup`,children:`/logs#2026-08-17-auditing-my-own-agent-setup`}),`, `,(0,i.jsx)(t.a,{href:`/essays/ai-workflow-chains`,children:`/essays/ai-workflow-chains`})]})]})}function lt(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(Z,{...e})}):Z(e)}var ut=e({default:()=>ft,frontmatter:()=>dt}),dt={title:`혼자 도는 잡이 자기 자신과 경쟁하고 있었다 — 겹치는 실행과 비원자 쓰기`,date:`2026-08-31 21:30`,type:`Shipped`,summary:`쓰는 사람이 나 하나뿐인 자동화라 동시성 문제는 없다고 생각했다. 그런데 같은 데이터베이스를 건드리는 스케줄이 네 개였고, 모든 쓰기가 조회한 다음 만드는 두 단계였다. 두 실행이 같은 대상을 동시에 처리하면 중복이 생길 수 있는 구조였는데, 겹침을 막으라고 넣어 둔 동시 실행 그룹이 하필 가장 자주 일어나는 겹침만 골라서 허용하고 있었다.`};function Q(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsxs)(t.p,{children:[`관심 지역 아파트 정보를 모아 노션에 채우는 개인 봇이 있다. 노션을 가벼운 백엔드로 쓴다. 관심 단지를 하나 적어 두면 봇이 정보를 채워 넣는다. 같은 달 헬스체크에서 나온 `,(0,i.jsx)(t.a,{href:`/logs#2026-08-31-retry-made-the-outage-longer`,children:`서킷 브레이커 작업`}),`과 같은 봇인데, 이번 건 데이터를 못 가져오는 문제가 아니라 가져온 걸 쓰는 쪽 문제였다.`]}),`
`,(0,i.jsx)(t.p,{children:`이 봇을 건드리는 스케줄이 넷이다. 주 1회 전체 수집, 대기 중인 단지를 처리하는 폴링, 월 1회 보강, 월 1회 거시 지표. 이번 달 헬스체크에서 이 넷을 놓고 심각도 높은 항목이 하나 나왔다. 실제로 중복이 쌓인 걸 목격한 건 아니고 코드 경로만 읽고 나온 결론이었는데, 읽어 보니 구조상 가능한 게 맞았다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 1 — 모든 쓰기가 조회 다음 생성이었다`}),`
`,(0,i.jsx)(t.p,{children:`노션 API에는 있으면 갱신하고 없으면 만드는 단일 연산이 없다. 그래서 이 봇의 writer는 전부 같은 모양이다. 키로 조회한다, 없으면 만든다.`}),`
`,(0,i.jsx)(t.p,{children:`두 단계 사이에 창이 있다. A가 조회해서 없음을 확인하고, 그사이 B도 조회해서 없음을 확인하고, 둘 다 만든다. 중복 행이 생긴다.`}),`
`,(0,i.jsxs)(t.p,{children:[`혼자 쓰는 자동화에서 이런 걸 잘 안 본다. 동시 사용자가 없으니까. 그런데 동시성은 사용자 수에서 오는 게 아니라 `,(0,i.jsx)(t.strong,{children:`동시에 도는 실행 수`}),`에서 온다. 내가 한 명이어도 스케줄은 네 개다. 스케줄러는 트래픽이다. 주기적이고 예측 가능한 트래픽일 뿐이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`발견 2 — 동시 실행 그룹이 겹침을 막는 게 아니라 허용하고 있었다`}),`
`,(0,i.jsx)(t.p,{children:`이 워크플로에는 동시 실행 그룹이 이미 있었다. 그런데 그룹 이름을 실행 종류에 따라 갈라 두었다. 대략 이런 모양이다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-yaml`,children:`concurrency:
    # 실행 종류에 따라 그룹 이름이 갈린다 — 폴링과 전체 수집은 서로를 막지 않는다
    group: collect-\${{ github.event.schedule == '*/30 * * * *' && 'pending' || 'full' }}
    cancel-in-progress: false
`})}),`
`,(0,i.jsxs)(t.p,{children:[`폴링과 전체 수집이 서로 다른 그룹이므로 `,(0,i.jsx)(t.strong,{children:`동시에 돌 수 있다`}),`. 그게 의도였다. 6분에서 20분씩 도는 전체 수집이 빠른 폴링을 몇십 분씩 막지 않게 하려던 것이다.`]}),`
`,(0,i.jsx)(t.p,{children:`그런데 바로 그 둘이 겹치는 게 가장 흔한 조합이었다. 전체 수집은 20분 가까이 돌고 폴링은 매시 두 번 온다. 즉 겹침을 막으려고 넣은 장치가 가장 자주 일어나는 겹침만 콕 집어 허용하고 있었다. 성능을 위한 분리가 정확히 정합성이 필요한 자리에 있었다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일 1 — 원자성 대신 직렬화를 골랐다`}),`
`,(0,i.jsx)(t.p,{children:`선택지가 둘이었다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`원자적 쓰기로 바꾼다.`}),` 조회와 생성을 하나로 묶는 것. API가 그걸 제공하지 않으니 잠금 테이블 같은 걸 직접 만들어야 한다. writer 열 몇 개를 전부 고쳐야 하고, 잠금 자체가 새로운 장애 지점이 된다. 잠금을 쥔 채 죽은 실행을 회수하는 로직까지 따라온다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`실행을 직렬화한다.`}),` 그룹을 하나로 합쳐 같은 워크플로의 실행이 절대 겹치지 않게 한다. 대기 시간이 늘어나는 대신 문제 자체가 사라진다.`]}),`
`,(0,i.jsx)(t.p,{children:`두 번째를 골랐다. 이 봇은 지연에 민감하지 않다. 애초에 한 시간 안에만 채워지면 되는 일이고, 전체 수집이 도는 20분 동안 폴링이 밀리는 건 아무도 아쉽지 않다. 원자성은 정말 필요해지는 날 개별 writer에서 다시 볼 문제로 남겼다. 여기서 중요한 건 두 선택지 중 하나가 옳아서가 아니라, 지금 이 시스템이 무엇에 민감하고 무엇에 둔감한지가 답을 정해 줬다는 점이다.`}),`
`,(0,i.jsx)(t.p,{children:`그룹을 실행 종류와 무관한 상수 하나로 바꿨다. 진행 중인 실행을 취소하지 않는 설정은 그대로 뒀다. 부작용이 있는 자동화를 중간에 끊으면 절반만 쓰인 상태가 남는다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 3 — 큐에서 밀려난 실행은 실패가 아니다`}),`
`,(0,i.jsx)(t.p,{children:`직렬화를 켜면 새 걱정이 생긴다. 전체 수집이 도는 동안 폴링이 여러 번 밀려 들어오면 큐에는 하나만 남고 나머지는 취소된다. 이 봇에는 취소를 감지해 알리는 스텝이 있어서, 일요일 밤마다 취소 알림이 쏟아질 줄 알았다.`}),`
`,(0,i.jsxs)(t.p,{children:[`확인해 보니 울리지 않는다. 큐에서 교체되는 실행은 `,(0,i.jsx)(t.strong,{children:`스텝이 시작되기도 전에`}),` 취소되므로 알림 스텝 자체가 돌지 않는다. 알림이 도는 취소는 실행이 시작된 뒤에 끊긴 경우뿐이고, 그건 실제로 알아야 하는 취소가 맞다.`]}),`
`,(0,i.jsx)(t.p,{children:`여기서 하나 배웠다. 취소라는 한 단어로 뭉쳐 있던 게 실은 두 종류였다. 시작 전 교체는 큐가 제 일을 한 것이고, 시작 후 중단은 절반만 적용된 상태를 남긴다. 마침 알림이 놓인 위치가 그 둘을 이미 가르고 있었다 — 설계해서가 아니라 운이 좋아서. 운이 좋았다는 걸 확인한 것도 결과다. 다음에 알림 위치를 옮길 때 이게 왜 거기 있어야 하는지 알게 됐으니까.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일 2 — 그룹이 닿지 않는 곳은 시각을 어긋뜨렸다`}),`
`,(0,i.jsxs)(t.p,{children:[`동시 실행 그룹은 `,(0,i.jsx)(t.strong,{children:`같은 워크플로 안에서만`}),` 유효하다. 월 1회 보강은 별도 워크플로라 같은 그룹에 들어가지 않는다. 직렬화로 못 막는 겹침이 남는다는 뜻이다.`]}),`
`,(0,i.jsx)(t.p,{children:`두 가지를 했다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`폴링 cron을 정시에서 매시 7분과 37분으로 옮겼다. 다른 스케줄이 전부 정시에 걸려 있으니, 최소한 `,(0,i.jsx)(t.strong,{children:`동시에 시작하는 것`}),`은 사라진다.`]}),`
`,(0,i.jsx)(t.li,{children:`남은 창을 문서에 적었다. 월 1회, 몇 분. 이건 못 막은 게 아니라 값을 치르지 않기로 한 것이다.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`수용한 위험은 적어 두지 않으면 다음에 이 코드를 여는 사람이 안전하다고 읽는다. 그 사람은 대체로 몇 달 뒤의 나다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 4 — cron 문자열이 세 자리에 복제돼 있었다`}),`
`,(0,i.jsxs)(t.p,{children:[`이 워크플로는 지금 실행이 폴링인지 전체인지를 `,(0,i.jsx)(t.strong,{children:`cron 문자열을 문자 그대로 비교해서`}),` 판정한다. 이벤트가 알려 주는 게 그것뿐이라 달리 방법이 없다.`]}),`
`,(0,i.jsx)(t.p,{children:`문제는 그 문자열이 여러 자리에 있었다는 것이다. cron 선언, 모드 판정 조건, 그리고 위에 적은 동시 실행 그룹 표현식까지 셋. 하나만 고치면 나머지가 조용히 틀린다. 오타가 나는 게 아니라 의미가 어긋난다. 전체 수집이 폴링 모드로 돌거나 그 반대가 된다.`}),`
`,(0,i.jsx)(t.p,{children:`그룹을 상수로 만들면서 복제 하나가 사라졌다. 남은 둘은 검사로 잠갔다. cron 선언과 모드 판정의 리터럴이 서로 맞는지, 그리고 그룹이 다시 실행 종류로 갈라지지 않았는지를 테스트가 확인한다. 계약을 주석이 아니라 실패하는 테스트로 적어 둔 것이다. 주석은 이미 거기 있었고, 그런데도 갈라져 있었다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`쓰는 사람이 나 하나라는 사실이 오랫동안 이 질문 자체를 막고 있었다. 동시성 버그는 트래픽 있는 시스템의 문제라고 생각했다.`}),`
`,(0,i.jsxs)(t.p,{children:[`더 오래 남을 교훈은 두 번째다. 동시 실행 그룹은 있었다. 이름도 그럴듯했고 설정도 의도대로였다. 다만 그 의도가 성능이었고, 그 성능 최적화가 정확히 정합성이 필요한 자리를 열어 두었다. 안전장치가 있는지 확인하는 것과 그 장치가 `,(0,i.jsx)(t.strong,{children:`무엇을`}),` 막고 있는지 확인하는 건 다른 일이다. 이번엔 그룹 이름 한 줄을 읽는 데 그 차이가 전부 들어 있었다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-08-31-retry-made-the-outage-longer`,children:`/logs#2026-08-31-retry-made-the-outage-longer`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-09-ci-gate-ratchet`,children:`/logs#2026-06-09-ci-gate-ratchet`}),`, `,(0,i.jsx)(t.a,{href:`/notes/notion-lightweight-backend`,children:`/notes/notion-lightweight-backend`}),`, `,(0,i.jsx)(t.a,{href:`/essays/automation-doesnt-reduce-work`,children:`/essays/automation-doesnt-reduce-work`})]})]})}function ft(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(Q,{...e})}):Q(e)}var pt=e({default:()=>ht,frontmatter:()=>mt}),mt={title:`재시도가 장애를 길게 만들었다 — 전면 무응답 앞에서 빨리 포기하는 스위치`,date:`2026-08-31 21:10`,type:`Shipped`,summary:`외부 API 하나가 완전히 무응답이 되자, 평소엔 안정성을 높여 주던 재시도가 장애 시간을 곱하기 시작했다. 요청마다 timeout과 백오프를 성실히 완주하는 동안 전체 수집이 45분 상한에 걸려 통째로 취소됐고, 멀쩡히 응답한 나머지 열한 개 소스의 결과까지 함께 버려졌다. 연속 실패를 시도 단위로 세서 남은 요청을 즉시 차단하는 서킷 브레이커를 붙였다.`};function $(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`관심 지역 아파트 정보를 모아 노션에 채우는 개인 봇이 있다. 실거래가, 지도, 대중교통 같은 것들을 열두 개 남짓의 외부 API에서 긁어 온다. 그중 실거래가 소스 하나가 이달 초에 두 번, 몇 시간씩 완전히 무응답이 됐다.`}),`
`,(0,i.jsx)(t.p,{children:`그때 남은 기록이 이랬다. 전체 수집 실행이 45분 작업 시간 상한에 걸려 취소로 죽었다. 실패가 아니라 취소다. 부분 결과도 남지 않았다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 1 — 재시도는 곧 나아진다에 건 베팅이다`}),`
`,(0,i.jsx)(t.p,{children:`실거래가는 월 단위로 쪼개 여러 번 호출한다. 시도당 timeout이 15초, 요청당 최대 3회 시도. 그러니까 요청 하나가 완전히 죽는 데 45초에 백오프가 더 붙는다. 요청이 수십 개면 그것만으로 수십 분이다.`}),`
`,(0,i.jsx)(t.p,{children:`재시도는 부분 장애를 위한 장치다. 이 요청은 운이 나빴고 다음 시도는 다를 것이라는 가정 위에 서 있다. 서버가 통째로 죽어 있으면 그 가정은 매번 틀리는데, 코드는 매번 똑같이 성실하게 세 번을 채운다. 안정성을 위해 넣은 장치가 장애 상황에서는 장애 시간을 곱하는 계수가 된다.`}),`
`,(0,i.jsx)(t.p,{children:`더 나쁜 건 취소의 성질이었다. 열두 개 소스 중 열한 개는 멀쩡히 응답했다. 그런데 실행이 상한에 걸려 통째로 취소되면 그 열한 개의 결과도 저장되기 전에 사라진다. 소스 하나의 장애가 수집 전체를 0으로 만든다. 피해의 크기가 원인의 크기와 전혀 비례하지 않았다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 일 — 연속 실패를 세서 남은 요청을 즉시 차단`}),`
`,(0,i.jsx)(t.p,{children:`HTTP 클라이언트 인터셉터에 선택적으로 켜는 서킷 브레이커를 붙였다. 규칙은 네 줄이면 끝난다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`연속 transient 실패가 열 번이면 열린다. 열려 있는 동안 남은 요청은 네트워크로 나가지 않고 즉시 거절된다.`}),`
`,(0,i.jsxs)(t.li,{children:[`실패는 `,(0,i.jsx)(t.strong,{children:`시도 단위`}),`로 센다. 요청 단위로 세면 재시도가 소진될 때까지 기다려야 해서 감지가 세 배 늦다.`]}),`
`,(0,i.jsx)(t.li,{children:`서버가 응답한 실패, 그러니까 4xx 같은 건 카운터를 리셋한다. 응답이 왔다는 건 전면 장애가 아니라는 뜻이다.`}),`
`,(0,i.jsx)(t.li,{children:`성공 한 건도 리셋한다. 부분 장애로는 열리지 않는다.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`닫히는 쪽도 필요하다. 열린 뒤 60초가 지나면 probe 요청 한 건만 통과시켜 회복을 시험한다. probe가 성공하면 닫고 수집을 재개하고, 실패하면 쿨다운을 다시 시작한다. 열두 개 클라이언트 중 문제의 하나에만 켰다. 나머지는 인터셉터 구성이 그대로다.`}),`
`,(0,i.jsx)(t.p,{children:`결과적으로 전면 장애에서도 실행이 몇 분 안에 완주한다. 가격은 없지만 나머지 열한 개 소스의 결과는 남는다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 2 — 인터셉터 등록 순서가 곧 계약이었다`}),`
`,(0,i.jsx)(t.p,{children:`이 작업에서 제일 오래 붙잡은 건 코드가 아니라 순서였다. 응답 에러 체인은 등록한 순서대로 돌고, 요청 체인은 그 역순으로 돈다. 그래서 똑같은 세 개의 인터셉터도 등록 순서에 따라 의미가 달라진다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`브레이커 카운터는 재시도보다 `,(0,i.jsx)(t.strong,{children:`먼저`}),`. 매 시도의 실패를 세야 하니까. 뒤에 있으면 재시도가 다 소진된 뒤에 한 번만 세게 된다.`]}),`
`,(0,i.jsxs)(t.li,{children:[`재시도는 로깅보다 `,(0,i.jsx)(t.strong,{children:`먼저`}),`. 로깅 인터셉터가 에러 객체에 남은 인증키를 마스킹하는데, 재시도는 마스킹되기 전 원본으로 재발행돼야 한다.`]}),`
`,(0,i.jsxs)(t.li,{children:[`브레이커의 요청 게이트는 `,(0,i.jsx)(t.strong,{children:`마지막에 등록`}),`. 요청 체인은 역순이라 마지막에 등록한 것이 가장 먼저 실행된다. 그래야 차단된 요청은 보냈다는 로그조차 남기지 않는다.`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`셋 중 어느 하나를 옮겨도 눈에 보이는 에러는 안 난다. 조용히 의미만 틀린다. 그래서 회귀 테스트를 다섯 건 붙였고, 그중 둘은 재시도 재진입과 게이트가 만나는 자리다. probe 요청이 실패해 재시도로 재진입할 때, 그 재진입 요청이 자기가 열어 둔 게이트에 스스로 막히면 안 된다.`}),`
`,(0,i.jsx)(t.p,{children:`차단 에러를 만들 때는 요청 설정 객체를 일부러 붙이지 않았다. 재시도 인터셉터는 설정이 있는 에러만 재시도 대상으로 보고, 로깅 인터셉터도 설정 없는 에러는 건너뛴다. 새 플래그를 하나 더 만드는 대신 이미 존재하던 분기 조건을 이용해서, 차단 에러가 아래 두 인터셉터를 자연스럽게 지나가게 만들었다.`}),`
`,(0,i.jsx)(t.h2,{children:`발견 3 — 빨리 포기하는 것과 포기했다고 알리는 건 다른 층이다`}),`
`,(0,i.jsx)(t.p,{children:`브레이커를 붙이고 나면 새 구멍이 하나 생긴다. 이제 실행은 완주하는데, 가격이 하나도 없는 결과가 정상 종료처럼 저장될 수 있다. 빨리 실패하는 능력이 실패를 감추는 능력이 되는 것이다.`}),`
`,(0,i.jsx)(t.p,{children:`여기에 브레이커가 알림까지 맡게 하고 싶었는데 하지 않았다. 이 봇에는 이미 지역 전체의 가격이 비면 종료 코드로 알리는 커버리지 가드가 따로 있다. 브레이커는 시간을 아끼는 층이고, 커버리지 가드는 결과의 공백을 알리는 층이다.`}),`
`,(0,i.jsx)(t.p,{children:`두 책임을 한 장치에 얹으면 브레이커가 열렸지만 데이터는 충분한 경우와, 브레이커는 안 열렸는데 데이터가 빈 경우를 둘 다 잘못 다루게 된다. 실제로 두 경우 다 존재한다. 앞은 짧은 장애 뒤 회복된 실행이고, 뒤는 서버가 200으로 빈 배열을 주는 실행이다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsxs)(t.p,{children:[`6월에 내 자동화들을 감사할 때 찾은 건 `,(0,i.jsx)(t.strong,{children:`돌지 않는 재시도`}),`였다. 정책은 코드에 정의돼 있는데 호출자가 0건이었다. 이번에 찾은 건 정확히 반대다. 너무 잘 도는 재시도.`]}),`
`,(0,i.jsxs)(t.p,{children:[`재시도 설정을 검토할 때마다 나는 늘 충분히 재시도하는지만 물었다. 최대 횟수, 백오프, 지터. 전부 요청 하나의 관점이다. 그런데 전면 장애에서 실제로 문제가 되는 건 요청 하나가 아니라 `,(0,i.jsx)(t.strong,{children:`시스템 전체가 언제 그만두는가`}),`이고, 그 상한은 어느 요청의 설정에도 적혀 있지 않았다. 작업 시간 상한이 그 역할을 대신하고 있었는데, 그건 상한이 아니라 그냥 죽는 지점이다. 상한은 도달했을 때 무언가를 남기고, 죽는 지점은 아무것도 안 남긴다.`]}),`
`,(0,i.jsx)(t.p,{children:`이제 외부 의존을 붙일 때 두 개를 같이 적는다. 이 요청은 몇 번 다시 시도하는가, 그리고 이 소스가 통째로 죽어 있을 때 전체는 언제 포기하는가.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-18-dead-safeguards`,children:`/logs#2026-06-18-dead-safeguards`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-08-10-auth-failure-is-not-retryable`,children:`/logs#2026-08-10-auth-failure-is-not-retryable`}),`, `,(0,i.jsx)(t.a,{href:`/notes/dead-retry-bounded-executor`,children:`/notes/dead-retry-bounded-executor`}),`, `,(0,i.jsx)(t.a,{href:`/notes/public-api-integration-patterns`,children:`/notes/public-api-integration-patterns`})]})]})}function ht(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)($,{...e})}):$(e)}export{r as A,ge as C,d as D,se as E,s as O,_ as S,ue as T,be as _,nt as a,T as b,qe as c,Re as d,Fe as f,Ce as g,Ee as h,at as i,ne as k,We as l,ke as m,ut as n,$e as o,Me as p,st as r,Xe as s,pt as t,Ve as u,N as v,pe as w,x,k as y};