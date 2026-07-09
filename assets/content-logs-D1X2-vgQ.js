import{n as e}from"./rolldown-runtime-QTnfLwEv.js";import{f as t,m as n}from"./content-cases-CBUDB2ZQ.js";var r=e({default:()=>s,frontmatter:()=>a}),i=t(),a={title:`내가 만든 자동화 PLAN을 내 AI 게이트가 2.5/5로 떨어뜨렸다`,date:`2026-05-19 21:00`,type:`Building`,summary:`AI 페르소나 4명에게 내 자동화 설계를 토론시키고, 품질 게이트로 채점했더니 BLOCKING 2개 FAIL. 그 거부 신호 덕에 v1 시연·v2 운영을 쪼개 충돌을 풀었다.`};function o(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
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
`,(0,i.jsxs)(t.p,{children:[`자세한 인사이트: `,(0,i.jsx)(t.a,{href:`/notes/automation-vs-governance`,children:`자동화 시스템 vs 거버넌스 부담`})]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var c=e({default:()=>ee,frontmatter:()=>l}),l={title:`빌드 사이즈 41% 감소 — manualChunks로 코드 분할`,date:`2026-05-19 22:00`,type:`Shipped`,summary:`빌드 로그에 뜬 청크 경고 한 줄을 그냥 넘기지 않고 따라간 끝에, 첫 로드 gzip을 150KB에서 88KB로 줄인 이야기.`};function u(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[`빌드 로그 맨 아래에 노란 경고 한 줄이 떴다. "단일 청크가 500KB를 넘었다." 무시하고 배포해도 사이트는 멀쩡히 떴고, 아무도 고치라고 하지 않았다. 그래도 한 줄이 거슬렸다. 콘텐츠가 50편을 넘기면서 `,(0,i.jsx)(t.code,{children:`index.js`}),` 하나가 514KB까지 부풀어 있었고, 글을 한 편 추가할 때마다 방문자는 514KB 전체를 다시 받고 있었다. 경고는 "지금은 괜찮지만 곧 안 괜찮아진다"는 신호였다. 그날 저녁, 그 한 줄을 따라가 보기로 했다.`]}),`
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
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/vite-manual-chunks`,children:`/notes/vite-manual-chunks`})]})]})}function ee(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}var d=e({default:()=>m,frontmatter:()=>f}),f={title:`내 UI를 AI 세 명에게 채점시켰다 — 평균 2.75에서 4.75까지`,date:`2026-05-19 18:00`,type:`Shipped`,summary:`디자이너·기획자·개발자 페르소나에게 모바일 화면을 8축으로 채점시키고, 통과할 때까지 고치는 루프를 돌렸다. 첫 채점은 전 항목 낙제였다.`};function p(e){let t={code:`code`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:`내 모바일 화면에 점수를 매겨 줄 심사위원 셋을 세웠다. 디자이너, 기획자, 개발자 페르소나. 각자 8개 축으로 채점하고, 통과 못 하면 다시 고쳐서 재채점하는 루프. 첫 사이클 결과지를 받아 들었을 때 기분이 묘했다. 전 항목 FAIL, 평균 2.75/5. 내가 괜찮다고 믿고 넘겼던 화면이었다.`}),`
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
`,(0,i.jsx)(t.p,{children:`평균이 아니라 최저 항목이 통과를 결정한다. 한 항목만 3점이어도 전체가 FAIL이다. 그래서 이 루프가 좋았다 — 내가 보고 싶은 것만 보지 않게, 가장 약한 곳을 매번 먼저 들이밀었다. 모바일은 디테일의 누적이고, 8축 중 하나만 빠져도 사용자는 즉시 느낀다. 잘 만들었다는 내 감(感)을 믿는 대신, 통과 기준을 숫자로 박아 두고 거기에 도달할 때까지 고친다.`})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}var h=e({default:()=>v,frontmatter:()=>g}),g={title:`홈레이더 케이스 + 개인 레포 9편 자산화 + CodeRabbit 도입`,date:`2026-05-21 20:00`,type:`Shipped`,summary:`사이드 프로젝트(홈레이더)를 케이스로 정리하고, 6년치 개인 GitHub 레포 3개를 인터뷰 형식 9편으로 추출했다. 사이트 PR에 CodeRabbit 자동 리뷰를 붙였다.`};function _(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
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
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/cases/home-radar-system`,children:`/cases/home-radar-system`}),`, `,(0,i.jsx)(t.a,{href:`/cases/personal-repos-interview`,children:`/cases/personal-repos-interview`}),`, `,(0,i.jsx)(t.a,{href:`/notes/coderabbit-cubic-double-review`,children:`/notes/coderabbit-cubic-double-review`})]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}var y=e({default:()=>S,frontmatter:()=>b}),b={title:`SPA를 크롤러가 읽게 만들기 — 빌드타임 prerender로 색인 강화`,date:`2026-06-02 21:00`,type:`Building`,summary:`React SPA는 크롤러에 빈 div로 보였다. 빌드 타임에 라우트 110개를 정적 HTML로 prerender하고 라우트별 canonical과 title을 주입해 색인을 살렸다.`};function x(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
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
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-07-healthcheck-six-bots`,children:`/logs#2026-06-07-healthcheck-six-bots`})]})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}var C=e({default:()=>E,frontmatter:()=>w}),w={title:`헬스체크를 6개 봇에 돌린 2주 — silent failure 사냥`,date:`2026-06-07 21:00`,type:`Shipped`,summary:`혼자 돌리는 자동화 여섯 개에 직접 헬스체크를 돌려, 에러 한 줄 안 내고 조용히 망가지던 경로 세 개를 잡아냈다. 그중 하나가 가든봇을 자동 작성으로 전환시켰다.`};function T(e){let t={a:`a`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
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
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/essays/automation-doesnt-reduce-work`,children:`/essays/automation-doesnt-reduce-work`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-08-writing-bot-reversal`,children:`/logs#2026-06-08-writing-bot-reversal`})]})]})}function E(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(T,{...e})}):T(e)}var D=e({default:()=>A,frontmatter:()=>O}),O={title:`글 안 쓰는 글쓰기 봇을 만들고, 2주 뒤 뒤집은 이유`,date:`2026-06-08 11:00`,type:`Building`,summary:`일부러 글을 못 쓰게 막아둔 주간 봇을, 2주치 운영 데이터를 읽고 자동 작성으로 뒤집었다. 지금 읽고 있는 이 글이 그 봇이 쓴 첫 결과물이다.`};function k(e){let t={a:`a`,h2:`h2`,p:`p`,strong:`strong`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[`지금 이 문단을 사람이 쓰지 않았다. 주간 봇이 내 지난 2주치 작업 이력과 대화 기록을 읽고 초안을 뽑았고, 나는 공개 전 한 번 검수만 했다. 2주 전만 해도 나는 이 봇이 글을 `,(0,i.jsx)(t.strong,{children:`못 쓰도록`}),` 코드로 막아둔 사람이었다.`]}),`
`,(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsx)(t.p,{children:`주 1회 사이트 건강을 점검하는 가든봇을 만들면서, 나는 의식적으로 글 생성 기능을 뺐다. 무인 공개 게시 금지, 그리고 "채점자와 생산자를 분리한다"는 두 원칙을 코드에 박았다. 봇은 글을 쓰지 않고, 사람에게 "이번 주에 남길 게 있나?"를 묻는 체크리스트만 냈다.`}),`
`,(0,i.jsx)(t.h2,{children:`무엇이 드러났나`}),`
`,(0,i.jsx)(t.p,{children:`2주를 돌려보니 결과는 정직했다 — 체크리스트만 쌓이고 글은 한 편도 안 나왔다. 봇은 매주 "글감 12건 있음"이라고 알렸지만, 그 다음 단계인 사람의 집필이 늘 병목이었다. 점검은 자동인데 생산은 수동이라, 자동화의 가치가 마지막 한 걸음에서 증발했다. 데이터는 내 설계가 절반만 맞았다고 말하고 있었다.`}),`
`,(0,i.jsx)(t.h2,{children:`결정 — 분리에서 위임으로`}),`
`,(0,i.jsx)(t.p,{children:`그래서 막아뒀던 빗장을 내가 직접 풀었다. 봇이 지난 작업 이력과 대화 기록을 읽고 초안을 직접 쓰게 한다. 대신 원래의 안전 원칙은 폐기하지 않고 형태만 바꿔 유지했다 — 회사 기밀은 추상화하고, 공개 전 사람이 한 번 본다. "생산 금지"가 아니라 "생산하되 검증 게이트를 통과"로. 실행 시점도 일요일에서 월요일 1회로 옮겼다 — 일요일엔 노트북이 꺼져 있어 잡이 그냥 흘러갔고, 월요일 출근 리듬이 라운드 주기와도 맞았다.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`처음의 보수적 설계가 틀렸다고 보지 않는다. 미지의 자동화는 가장 안전한 형태로 시작하는 게 맞았다. 다만 운영 데이터가 쌓이면 그 제약이 여전히 옳은지 다시 물어야 한다. 이 글은 그 재질문의 답이다 — 봇이 내 2주를 읽고 쓴 다섯 편 중 하나.`}),`
`,(0,i.jsx)(t.p,{children:`자동화는 한 번 설계하고 끝나는 게 아니라, 운영 데이터를 근거로 도구에게 넘기는 권한의 경계를 매주 다시 긋는 일이다. 나는 봇에게 일을 시키는 사람이 아니라, 봇이 어디까지 해도 되는지를 결정하는 사람이고 싶다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-07-healthcheck-six-bots`,children:`/logs#2026-06-07-healthcheck-six-bots`}),`, `,(0,i.jsx)(t.a,{href:`/essays/delegation-autonomy-calibration`,children:`/essays/delegation-autonomy-calibration`})]})]})}function A(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}var j=e({default:()=>P,frontmatter:()=>M}),M={title:`CI 게이트를 매번 한 칸씩 조인다 — 안전망의 래칫`,date:`2026-06-09 11:00`,type:`Building`,summary:`AI가 PR을 쏟아내는 레포에서, 안전망을 한 번에 설계하는 대신 매주 한 칸씩 조이는 래칫으로 키웠다. secret-leak 가드, 커버리지 회귀 임계, 상태쓰기 concurrency 가드를 점진 추가했다.`};function N(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
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
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/coverage-gap-analysis`,children:`/notes/coverage-gap-analysis`}),`, `,(0,i.jsx)(t.a,{href:`/notes/recurring-trap-to-checklist`,children:`/notes/recurring-trap-to-checklist`}),`, `,(0,i.jsx)(t.a,{href:`/cases/quality-gate-system`,children:`/cases/quality-gate-system`})]})]})}function P(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}var F=e({default:()=>R,frontmatter:()=>I}),I={title:`화면은 베껴도 경계는 못 베낀다 — 기능 단위로 자르며 찾은 모듈 seam`,date:`2026-06-16 21:00`,type:`Shipped`,summary:`화면이 정답으로 주어진 클론에서 내가 통제할 변수는 구조 하나뿐이었다. 설계도를 미리 그리는 대신, 한 덩어리가 서로의 상태를 들춰보기 시작하는 신호를 따라 기능 단위로 한 칸씩 잘라 모듈 경계를 발견해 나간 기록.`};function L(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
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
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/learning-repo-sandbox-value`,children:`/notes/learning-repo-sandbox-value`})]})]})}function R(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(L,{...e})}):L(e)}var z=e({default:()=>H,frontmatter:()=>B}),B={title:`안전장치는 있느냐가 아니라 도는가로 본다 — 죽은 재시도와 거짓 runbook`,date:`2026-06-18 21:00`,type:`Building`,summary:`재시도 정책이 코드에 정의돼 있는데 호출자가 0건이었다. runbook은 자동 재시도된다고 안내하는데 실제로는 한 번도 돌지 않았다. 이번 주는 안전장치를 추가하는 게 아니라, 있다고 믿었지만 돌지 않던 장치들을 골라내는 일이었다.`};function V(e){let t={h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
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
`,(0,i.jsx)(t.p,{children:`추가가 아니라 점검도 안전망 작업이다. 더하는 주가 있으면, 더한 게 진짜 도는지 확인하는 주도 있어야 한다.`})]})}function H(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(V,{...e})}):V(e)}var U=e({default:()=>K,frontmatter:()=>W}),W={title:`지금을 인자로 들어올리면 시간을 미리 볼 수 있다 — 청첩장 날짜 정책 미리보기`,date:`2026-06-29 11:30`,type:`Shipped`,summary:`청첩장은 식 전후로 화면이 단계별로 바뀌는데, 그 단계를 정하는 함수들이 내부에서 현재 시각을 직접 읽고 있었다. 테스트도 미리보기도 불가능했다. 현재 시각을 기본값 인자로 들어올리고, 단계를 하나의 유한 상태로 모은 뒤, 임의 날짜를 주입해 미리보는 훅을 붙였다.`};function G(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
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
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/essays/deterministic-design-loop`,children:`/essays/deterministic-design-loop`})]})]})}function K(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(G,{...e})}):G(e)}var q=e({default:()=>X,frontmatter:()=>J}),J={title:`청첩장을 읽는 종이에서 함께 채우는 자리로 — 하객 참여 갤러리`,date:`2026-07-06 21:00`,type:`Shipped`,summary:`청첩장은 보통 한쪽이 정보를 주고 하객은 읽기만 한다. 식 전엔 곧 열린다는 미리보기로 기대를 만들고, 당일엔 하객이 직접 찍은 사진을 올리고 서로 이모지로 반응하며, 사진 제안 칩으로 무엇을 담을지 안내하는 참여 갤러리를 붙였다. 하객이 읽는 대상에서 함께 채우는 참여자로 바뀌었다.`};function Y(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
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
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-29-injectable-now-policy-preview`,children:`/logs#2026-06-29-injectable-now-policy-preview`}),`, `,(0,i.jsx)(t.a,{href:`/essays/two-sided-market-decisions`,children:`/essays/two-sided-market-decisions`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-07-06-instrument-your-own-product`,children:`/logs#2026-07-06-instrument-your-own-product`})]})]})}function X(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(Y,{...e})}):Y(e)}var Z=e({default:()=>te,frontmatter:()=>Q}),Q={title:`만든 다음 날 아침, 제일 먼저 여는 화면 — 내 프로젝트를 계측하는 어드민`,date:`2026-07-06 21:30`,type:`Shipped`,summary:`참여 기능을 붙였으면 하객이 실제로 참여했는지 알아야 한다. 도달률은 어드민과 나 자신을 뺀 공개 섹션 기준으로만 세고, 시간대별 방문 추이를 롤링으로 보고, 실패율이 임계값을 넘으면 주의 신호로 뒤집는 어드민 분석 화면을 만들었다. 만든 걸 감으로 두지 않고 계측하는 층.`};function $(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
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
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/exclude-yourself-from-metrics`,children:`/notes/exclude-yourself-from-metrics`}),`, `,(0,i.jsx)(t.a,{href:`/essays/data-trust-two-sided`,children:`/essays/data-trust-two-sided`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-07-06-guest-participation-gallery`,children:`/logs#2026-07-06-guest-participation-gallery`})]})]})}function te(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)($,{...e})}):$(e)}export{F as a,C as c,d,c as f,z as i,y as l,q as n,j as o,r as p,U as r,D as s,Z as t,h as u};