import{n as e}from"./rolldown-runtime-S-ySWqyJ.js";import{g as t,v as n}from"./content-cases-DBTnyHr2.js";var r=e({default:()=>ee,frontmatter:()=>a}),i=t(),a={title:`GitHub Pages 활용 사례 외부 리서치`,date:`2026-05-17`,type:`Building`,summary:`emmabostian/developer-portfolios, Evavic44/portfolio-ideas, Maggie Appleton, Brian Lovin, Lee Robinson 등 50+ 사례 조사. 7가지 패턴으로 분류.`};function o(e){let t={h2:`h2`,li:`li`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`조사 범위`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`큐레이션 리스트 3개 (총 1,700+ 사이트)`}),`
`,(0,i.jsx)(t.li,{children:`Digital garden 사례 8개 (Maggie Appleton, Gwern, Tim Rodenbröker, ...)`}),`
`,(0,i.jsx)(t.li,{children:`Terminal-style portfolio 7개 (satnaing, BrijenMakwana, ...)`}),`
`,(0,i.jsx)(t.li,{children:`Interactive/3D 10개 (Bruno Simon, Jesse Zhou, ...)`}),`
`,(0,i.jsx)(t.li,{children:`채용 담당자 통계 글 5개`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`핵심 발견`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`86% of hiring managers visit linked portfolios; 71%가 채용 판단에 영향.`}),`
`,(0,i.jsx)(t.li,{children:`동아시아권 digital garden 사례는 매우 드묾 — 선점 영역.`}),`
`,(0,i.jsx)(t.li,{children:`인터랙티브의 80%는 "정보 구조 + 키보드 + 검색"으로 충분. WebGL 풀-3D는 비용 대비 ROI 낮음.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`다음 액션`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`인터랙션 레벨 2 (Living Site) 명세화.`}),`
`,(0,i.jsx)(t.li,{children:`9개 핵심 인터랙션 우선순위 결정 (Cmd+K > 성숙도 필터 > 의사결정 트리 > ...).`}),`
`]})]})}function ee(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var s=e({default:()=>u,frontmatter:()=>c}),c={title:`사이트 방향 — 하이브리드(Case + Garden) 채택`,date:`2026-05-18`,type:`Building`,summary:`Traditional/Terminal/3D/Wiki 등 7가지 패턴을 비교한 끝에, 미니멀 베이스에 인터랙티브 요소를 얹은 Case + Garden 하이브리드로 결정.`};function l(e){let t={h2:`h2`,li:`li`,ol:`ol`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`비교한 선택지`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsx)(t.li,{children:`Traditional Portfolio — 차별화 약함`}),`
`,(0,i.jsx)(t.li,{children:`Interactive/Gamified (3D) — 미니멀 톤과 충돌`}),`
`,(0,i.jsx)(t.li,{children:`Terminal/CLI — 이미 흔한 패턴`}),`
`,(0,i.jsx)(t.li,{children:`Digital Garden 단독 — 글쓰기 의존도 너무 높음`}),`
`,(0,i.jsx)(t.li,{children:`Wiki/OS Style — 정보 아키텍처 부담`}),`
`,(0,i.jsx)(t.li,{children:`Long-form Writing Hub — 블로그 운영 부담`}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`Case + Garden 하이브리드`}),` ← 채택`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`채택 이유`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"다양한 정보를 다양한 형태로" 요구를 정확히 충족.`}),`
`,(0,i.jsx)(t.li,{children:`한국 시장에 디지털 가든 형식이 거의 없어 선점 가능.`}),`
`,(0,i.jsx)(t.li,{children:`케이스 스터디로 "일하는 방식"을 증명, 가든으로 "생각의 누적"을 노출.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`함의`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`콘텐츠 채우기 전에 빈 상태 디자인이 중요 — "아직 새싹이 3개 있어요" 같은 우아한 빈 화면.`}),`
`,(0,i.jsx)(t.li,{children:`MDX 도입으로 본문 안 컴포넌트 임베드 가능 → 임팩트 차트·다이어그램 향후 확장.`}),`
`]})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}var d=e({default:()=>m,frontmatter:()=>f}),f={title:`자동화 PoC PLAN 설계 — personas + quality-gate 체인`,date:`2026-05-19 21:00`,type:`Building`,summary:`4 페르소나 토론으로 자동화 시스템 옵션 4축 결정. quality-gate PLAN 평가에서 BLOCKING 2개 FAIL → v1 시연 + v2 운영 분리로 scope 재조정.`};function p(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsxs)(t.p,{children:[`콘텐츠 자동 채우기 시스템 PoC PLAN을 설계했다. dispatch가 `,(0,i.jsx)(t.code,{children:`[ALTERNATIVE_DETECTED]`}),`를 감지해 `,(0,i.jsx)(t.code,{children:`personas → quality-gate`}),` 체인을 만장일치로 채택.`]}),`
`,(0,i.jsx)(t.h3,{children:`personas 토론 (4 페르소나)`}),`
`,(0,i.jsx)(t.p,{children:`옵션 공간 4축:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`TRIGGER: manual / hook / cron / hybrid`}),`
`,(0,i.jsx)(t.li,{children:`AUTOMATION_LEVEL: L0~L3`}),`
`,(0,i.jsx)(t.li,{children:`DATA: raw / cache / MCP / hook-extract`}),`
`,(0,i.jsx)(t.li,{children:`SECURITY: redaction / 사용자 검토 / allowlist / private-promote`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`페르소나마다 동일 4축에 다른 선택:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`시니어 자동화 SWE`}),`: D/L1/B/D. Hidden complexity = Codex transcript 정규화`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`개인정보·보안 검토자`}),`: D/L1/D/A. "L3 + 자동 redaction은 one-way door, 절대 금지"`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`콘텐츠 전략가`}),`: C/L1/B/B. "자동화는 글 더 많이 쓰게 하는 도구가 아니라 쓸 만한 순간 놓치지 않게 하는 알람"`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`운영 부담 관점 사용자(나)`}),`: C/L2/B/B. `,(0,i.jsx)(t.strong,{children:`"운영 지속률 35%"`}),`, `,(0,i.jsx)(t.strong,{children:`"가장 두려운 건 회사 정보 유출 1건"`})]}),`
`]}),`
`,(0,i.jsx)(t.h3,{children:`quality-gate 평가`}),`
`,(0,i.jsx)(t.p,{children:`6축 rubric, BLOCKING 2개(G1·G2). 결과:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`G1 목표 적합성: 3/5 FAIL (Codex transcript 정규화 누락)`}),`
`,(0,i.jsx)(t.li,{children:`G2 보안 게이트: 2/5 FAIL (5 시나리오 중 3-4개 공백)`}),`
`,(0,i.jsx)(t.li,{children:`G5 운영 지속성: 2/5 FAIL (manual + 알림 없음 = 까먹기 100%)`}),`
`,(0,i.jsxs)(t.li,{children:[`평균 `,(0,i.jsx)(t.strong,{children:`2.5/5 — QUALITY FAIL`})]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`법무 검토자: `,(0,i.jsx)(t.strong,{children:`"현 PLAN으로 publish 진행 절대 금지, 4주 dry-run 필요."`})]}),`
`,(0,i.jsx)(t.h3,{children:`v1/v2 분리`}),`
`,(0,i.jsx)(t.p,{children:`PoC를 두 단계로 쪼개니 페르소나 충돌이 풀렸다:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`v1`}),`: 1회 시연 dry-run — 즉시 가능, publish 절대 차단`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`v2`}),`: 4주 dry-run + 2주 publish — 사용자 결정 후 별도 PoC`]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`v1만 자체 채점 4.33/5 PASS. v1 산출물(`,(0,i.jsx)(t.code,{children:`.cache/daily/2026-05-19.mdx`}),`)에 Log·Note 후보 2개 추출.`]}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsxs)(t.p,{children:[`자동화 PoC는 직관과 다르게 거버넌스 부담을 키운다. 운영 사용자 본인 페르소나가 가장 솔직한 BLOCKING(`,(0,i.jsx)(t.code,{children:`지속률 35%`}),`)을 짚은 게 다행 — SRE·법무·콘텐츠 전략가 누구도 짚지 못한 신호였다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`자세한 인사이트: `,(0,i.jsx)(t.a,{href:`/notes/automation-vs-governance`,children:`자동화 시스템 vs 거버넌스 부담`})]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}var h=e({default:()=>ne,frontmatter:()=>te}),te={title:`빌드 사이즈 41% 감소 — manualChunks로 코드 분할`,date:`2026-05-19 22:00`,type:`Shipped`,summary:`콘텐츠 50편+ 누적으로 단일 index.js 514KB가 빌드 경고 트리거. vendor·router·content를 별도 청크로 분리해 첫 로드 gzip 150KB → 88KB로 감소.`};function g(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:`vite.config.js`}),`에 `,(0,i.jsx)(t.code,{children:`build.rollupOptions.output.manualChunks`}),` 추가.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`node_modules`}),`를 vendor 종류별 분리: react / router / icons / search(Fuse.js) / mdx-runtime / pretendard`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`src/content/*`}),`를 콘텐츠 타입별 분리: cases / notes / essays / logs`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`chunkSizeWarningLimit: 600`}),`으로 조정 (기본 500 → 600)`]}),`
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
`,(0,i.jsx)(t.p,{children:`콘텐츠 50편+ 시점부터 단일 청크 비효율이 시작됨. manualChunks 한 번 설정으로 콘텐츠 추가 시마다 vendor 재다운로드 부담 사라짐. 인프라가 콘텐츠 추가에 비례 비용을 만들지 않는 게 중요.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/vite-manual-chunks`,children:`/notes/vite-manual-chunks`})]})]})}function ne(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}var _=e({default:()=>b,frontmatter:()=>v}),v={title:`Editorial Modern 디자인 리뉴얼 — Pretendard + 절제 팔레트`,date:`2026-05-19 15:00`,type:`Shipped`,summary:`Inter → Pretendard Variable. 베이지에서 cream + charcoal + burnt-orange로 톤다운. 그림자 제거, hairline border, 6px 모서리.`};function y(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.h3,{children:`폰트`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`Pretendard Variable (dynamic-subset) 도입. 한국어 가독성 향상. 풀버전 2MB → 청크 ~40KB×N로 첫 로드 부담 ↓.`}),`
`,(0,i.jsx)(t.li,{children:`일괄 weight 다이어트: 950/900 → 600/700 (Pretendard 균형에 맞춤).`}),`
`]}),`
`,(0,i.jsx)(t.h3,{children:`토큰`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`Light: cream `,(0,i.jsx)(t.code,{children:`#faf9f5`}),` + charcoal `,(0,i.jsx)(t.code,{children:`#18181b`}),` + burnt-orange `,(0,i.jsx)(t.code,{children:`#c2410c`})]}),`
`,(0,i.jsxs)(t.li,{children:[`Dark: almost-black `,(0,i.jsx)(t.code,{children:`#0c0a09`}),` + cream`]}),`
`,(0,i.jsx)(t.li,{children:`Sepia: 따뜻한 reading tone`}),`
`]}),`
`,(0,i.jsx)(t.h3,{children:`Typography`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`h1·section 헤딩 사이즈 축소`}),`
`,(0,i.jsx)(t.li,{children:`letter-spacing -0.025em ~ -0.03em`}),`
`,(0,i.jsx)(t.li,{children:`line-height 1.66 안정`}),`
`]}),`
`,(0,i.jsx)(t.h3,{children:`Shape`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`카드 box-shadow 제거 → hairline border만`}),`
`,(0,i.jsx)(t.li,{children:`호버는 border-color 강조`}),`
`,(0,i.jsx)(t.li,{children:`모서리 8px → 6px`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`한 사이클에 "세련된" 톤을 잡는 건 불가능에 가깝다. 일단 절제된 베이스를 깔고, 다음 사이클에서 잔재(누런 톤·하드코딩 색)를 박멸해야 한다.`})]})}function b(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}var x=e({default:()=>w,frontmatter:()=>S}),S={title:`Cmd+K 검색·키보드 단축키·다크 테마 (Phase 3 인터랙티브)`,date:`2026-05-19 14:00`,type:`Shipped`,summary:`Fuse.js 글로벌 검색 + 키보드 단축키 + 다크/세피아 테마 토글. UIProvider로 모달 상태 중앙화하고 inert 패턴으로 focus 격리.`};function C(e){let t={code:`code`,h2:`h2`,li:`li`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`lib/ui-context.jsx`}),` — UIProvider 신설. 팔레트·도움말·테마 상태 + localStorage 영속`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`lib/search.js`}),` — Fuse.js 기반 글로벌 검색 인덱스. cases·notes·essays·logs 통합 + 그룹별 결과`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`components/ui/CommandPalette.jsx`}),` — `,(0,i.jsx)(t.code,{children:`⌘K`}),`/`,(0,i.jsx)(t.code,{children:`/`}),`로 열림. ↑↓ Enter 키보드 네비, mouse-keyboard 동기화`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`components/ui/ShortcutHelp.jsx`}),` — `,(0,i.jsx)(t.code,{children:`?`}),` 키로 단축키 도움말 모달`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`components/ui/ThemeToggle.jsx`}),` — 베이지/다크/세피아 순환 (`,(0,i.jsx)(t.code,{children:`T`}),` 키), prefers-color-scheme 추정`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`components/ui/GlobalShortcuts.jsx`}),` — `,(0,i.jsx)(t.code,{children:`g h/c/n/e/l/a/u/w/r/v`}),` 시퀀스 페이지 점프 (1200ms idle timeout)`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`막힌 것`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`ui-context.js`}),`에 JSX 사용 → 빌드 실패. `,(0,i.jsx)(t.code,{children:`.jsx`}),`로 확장자 변경.`]}),`
`,(0,i.jsx)(t.li,{children:`Esc 핸들러를 모달마다 두지 않고 GlobalShortcuts에서 일괄 처리 — paletteOpen·helpOpen 상태로 분기.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`다음`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`인터랙션은 본격 살아있음. 디자인 톤 다듬기로 넘어간다.`}),`
`]})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(C,{...e})}):C(e)}var T=e({default:()=>O,frontmatter:()=>E}),E={title:`모바일 GNB 햄버거 메뉴 — iPhone 15 viewport overflow 해결`,date:`2026-05-19 17:00`,type:`Shipped`,summary:`393px viewport에서 brand + nav 5 + actions 3이 한 줄에 강제로 가로 스크롤. 720px 이하에서 primary-nav 숨김 + 햄버거 드로어로 전환.`};function D(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`문제`}),`
`,(0,i.jsx)(t.p,{children:`iPhone 15(393×852)에서 GNB가 viewport를 넘어 가로 스크롤. 계산:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`brand 42 + padding 32 + nav links 5개 × 평균 60 + actions 3개 × 38 + gap = `,(0,i.jsx)(t.strong,{children:`484px`})]}),`
`,(0,i.jsx)(t.li,{children:`viewport 393px에서 91px 초과`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`720px 이하 미디어 쿼리: `,(0,i.jsx)(t.code,{children:`.primary-nav { display: none }`}),` + 햄버거 트리거 표시`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`components/ui/MobileMenu.jsx`}),` 신설`,`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`우측 슬라이드인 240ms cubic-bezier`}),`
`,(0,i.jsx)(t.li,{children:`Esc·바깥 클릭·라우트 변경 시 자동 닫힘`}),`
`,(0,i.jsx)(t.li,{children:`메뉴 안에 PRIMARY (Cases·Notes·Essays·Logs·About) + SECONDARY (Uses·Now·Reading·CV) 모두 노출`}),`
`]}),`
`]}),`
`,(0,i.jsxs)(t.li,{children:[`키보드 도움말 버튼은 `,(0,i.jsx)(t.code,{children:`.desktop-only`}),`로 모바일 숨김 (모바일에 키보드 없음 = 무의미)`]}),`
`,(0,i.jsxs)(t.li,{children:[`UIProvider에 `,(0,i.jsx)(t.code,{children:`menuOpen`}),`·`,(0,i.jsx)(t.code,{children:`openMenu`}),`·`,(0,i.jsx)(t.code,{children:`closeMenu`}),`·`,(0,i.jsx)(t.code,{children:`toggleMenu`}),` 추가`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`새 모바일 GNB 구조`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:`[JKH] ........... [🔍][☀/🌙][≡]
  42px         search theme menu
`})}),`
`,(0,i.jsx)(t.p,{children:`폭 약 220px. 393px viewport에 여유 170px.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`모바일은 별도 사고가 필요한 채널. 데스크탑 디자인 통과 후에도 모바일에서 다시 깨질 수 있다. 다음은 모바일 전반 quality-gate.`})]})}function O(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(D,{...e})}):D(e)}var k=e({default:()=>M,frontmatter:()=>A}),A={title:`모바일 최적화 quality-gate — 평균 2.75 → 4.75`,date:`2026-05-19 18:00`,type:`Shipped`,summary:`3 페르소나(디자이너·기획자·개발자) × 8축 rubric × 3 사이클. iOS HIG 44×44, viewport-fit, 100dvh, safe-area-inset, inert focus 등 종합 적용.`};function j(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`사이클 1 결과`}),`
`,(0,i.jsx)(t.p,{children:`모든 항목 FAIL. 평균 2.75/5.`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`영역`}),(0,i.jsx)(t.th,{children:`점수`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`iOS Safari 특수성`}),(0,i.jsx)(t.td,{children:`2/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`인터랙션 (모바일)`}),(0,i.jsx)(t.td,{children:`2/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`콘텐츠 우선순위`}),(0,i.jsx)(t.td,{children:`2.5/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`터치 타겟`}),(0,i.jsx)(t.td,{children:`3/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`타이포·여백`}),(0,i.jsx)(t.td,{children:`3/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`반응형 일관성`}),(0,i.jsx)(t.td,{children:`3/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`접근성`}),(0,i.jsx)(t.td,{children:`3/5`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`Viewport overflow`}),(0,i.jsx)(t.td,{children:`3.5/5`})]})]})]}),`
`,(0,i.jsx)(t.h2,{children:`적용한 변경 (사이클 1·2·3 통합)`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`iOS Safari`}),`: viewport-fit=cover, theme-color light/dark, safe-area-inset env(), 100vh → 100dvh, -webkit-tap-highlight-color transparent, -webkit-backdrop-filter 폴백, -webkit-text-size-adjust 100%`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`터치 타겟 (HIG 44×44)`}),`: icon-button·search-trigger·brand·button 모두 44 통일, see-all-link 모바일 min-height 44`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`인터랙션·접근성`}),`: CommandPalette input mobile attrs, 3 모달에 previouslyFocused 캐시 + trigger 복귀, inert 패턴(focus trap 대체), :focus-visible 글로벌 outline, prefers-reduced-motion 가드, @media (hover: none) sticky hover 방지`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`콘텐츠 우선순위`}),`: 모바일에서 .profile-panel display:none (currentFocus·heroProof 중복 해소), hero padding 56/48, hero-actions row+flex-wrap, LogsPage 본문 `,(0,i.jsx)(t.code,{children:`<details>`}),` 토글로 목록 페이지 패턴 통일`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`사이클 3 결과`}),`
`,(0,i.jsxs)(t.p,{children:[`모든 항목 ≥4. 평균 `,(0,i.jsx)(t.strong,{children:`4.75/5`}),` PASS.`]}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`평균이 아니라 최저 항목이 통과를 결정한다. 한 항목만 3점이어도 전체 FAIL. 그리고 모바일은 디테일 누적 — 8축 중 어디 하나만 빠져도 사용자가 즉시 느낀다.`})]})}function M(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}var N=e({default:()=>I,frontmatter:()=>P}),P={title:`react-router + MDX 파이프라인 도입`,date:`2026-05-19 13:00`,type:`Shipped`,summary:`단일 SPA를 13개 라우트로 분리하고 MDX 콘텐츠 파이프라인을 깔았다. 데이터만 추가하면 페이지가 자동 확장되는 베이스가 완성.`};function F(e){let t={code:`code`,h2:`h2`,li:`li`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`react-router-dom@7`}),`, `,(0,i.jsx)(t.code,{children:`@mdx-js/rollup`}),`, `,(0,i.jsx)(t.code,{children:`remark-frontmatter`}),`, `,(0,i.jsx)(t.code,{children:`remark-mdx-frontmatter`}),`, `,(0,i.jsx)(t.code,{children:`remark-gfm`}),` 추가.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`vite.config.js`}),`에 MDX 플러그인 enforce: 'pre'로 등록.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`src/lib/content.js`}),`에서 `,(0,i.jsx)(t.code,{children:`import.meta.glob`}),`로 콘텐츠 자동 인덱싱.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`public/404.html`}),` + `,(0,i.jsx)(t.code,{children:`index.html`}),` SPA fallback 표준 패턴(spa-github-pages) 적용.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`막힌 것`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`없음. (가장 까다로운 부분이 `,(0,i.jsx)(t.code,{children:`remark-mdx-frontmatter`}),`의 `,(0,i.jsx)(t.code,{children:`name: 'frontmatter'`}),` 옵션이었는데 문서 보고 한 번에 해결.)`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`다음`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`CSS 토큰 추출 + 새 페이지 클래스 정리.`}),`
`,(0,i.jsx)(t.li,{children:`Cmd+K 글로벌 검색(Phase 3).`}),`
`,(0,i.jsx)(t.li,{children:`다크 테마 토글(Phase 3).`}),`
`]})]})}function I(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(F,{...e})}):F(e)}var re=e({default:()=>z,frontmatter:()=>L}),L={title:`누런 톤 박멸 + 토큰 single source — quality-gate 평균 3.28 → 4.44`,date:`2026-05-19 16:00`,type:`Shipped`,summary:`cream → pure white + zinc + indigo로 전면 교체. 하드코딩 hex 30+, rgba 12+ 모두 토큰화하고 sepia 삭제.`};function R(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.h3,{children:`토큰 재설계 (light)`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`--bg: #ffffff`}),` (pure white)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`--bg-alt: #fafafa`}),` (zinc-50)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`--bg-cool: #f4f4f5`}),` (zinc-100)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`--bg-deep: #09090b`}),` (zinc-950)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`--accent-red: #4f46e5`}),` (indigo-600) — burnt orange는 누런 베이스와 동계열이라 누런 톤 강화. indigo로 신뢰감.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`--text-inverse: #fafafa`}),` 토큰 신설 — 다크 배경 위 light text 의미 명확화`]}),`
`]}),`
`,(0,i.jsx)(t.h3,{children:`토큰화`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`index.css`}),` 하드코딩 hex 30+, rgba 12+ 모두 `,(0,i.jsx)(t.code,{children:`var(--*)`}),` 일괄 치환`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`rgba(244, 241, 232, 0.92)`}),` (cream 잔재) → `,(0,i.jsx)(t.code,{children:`color-mix(in srgb, var(--bg) 92%, transparent)`})]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:`rgba(255, 250, 240, 0.X)`}),` 5개 변형 → `,(0,i.jsx)(t.code,{children:`color-mix(var(--text-inverse) X%)`})]}),`
`]}),`
`,(0,i.jsx)(t.h3,{children:`Sepia 삭제`}),`
`,(0,i.jsx)(t.p,{children:`사용자가 cream도 누렇다 했는데 sepia는 더 누런 톤이라 존재 자체가 약점. CSS·JS·도움말에서 흔적 제거.`}),`
`,(0,i.jsx)(t.h3,{children:`Dark 토큰`}),`
`,(0,i.jsxs)(t.p,{children:[`zinc-950 기반 갱신. accent indigo-400(`,(0,i.jsx)(t.code,{children:`#818cf8`}),`) — 다크에서 채도 적정.`]}),`
`,(0,i.jsx)(t.h2,{children:`quality-gate 결과`}),`
`,(0,i.jsx)(t.p,{children:`3 사이클:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`컬러 팔레트 2 → 4 → 5`}),`
`,(0,i.jsx)(t.li,{children:`시각 일관성 2 → 3 → 5`}),`
`,(0,i.jsx)(t.li,{children:`타이포그래피 3 → 4 → 5`}),`
`,(0,i.jsx)(t.li,{children:`다크 테마 3.5 → 4 → 5`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`평균 3.28 → 4.44/5. BLOCKING 4개 모두 5/5.`}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`세련된 디자인은 토큰 일관성이 80%다. 사용자가 hex 잔재를 의식적으로 못 보지만, 시각적 안정감의 무게가 다르다.`})]})}function z(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(R,{...e})}):R(e)}var B=e({default:()=>U,frontmatter:()=>V}),V={title:`야간 장애·모니터링 인사이트 자산화 + Notes 라운드 2`,date:`2026-05-20 21:00`,type:`Shipped`,summary:`과거 incident 경험을 노트 클러스터로 추출하고, 누적된 노트 30여 편에 처음으로 대규모 cross-link를 걸었다. 같은 날 quality-gate 일괄 개선으로 Critical 1 + High 13건 처리.`};function H(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`세 갈래 작업을 하루에 묶었다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`incident/observability 노트 신규`}),`: 야간 장애 대응 2편(임시 패치 vs 근본 수정, AI 페어 디버깅), 모니터링 2편(좋은 알람 4기준, 모니터링 갭 사이클), 의존성·dev warning 비용 2편`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`Notes 라운드 2`}),`: 누적 노트에 16편 cross-link + 4편 함정 섹션 보강 + 3편 신규`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`quality-gate 일괄 개선`}),`: 콘텐츠 전반 점검에서 Critical 1 + High 13건 수정`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`측정`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`항목`}),(0,i.jsx)(t.th,{children:`수치`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`신규 노트`}),(0,i.jsx)(t.td,{children:`약 9편 (incident·observability·dependency)`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`cross-link 추가`}),(0,i.jsx)(t.td,{children:`16편`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`함정 섹션 보강`}),(0,i.jsx)(t.td,{children:`4편`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`quality-gate 처리`}),(0,i.jsx)(t.td,{children:`Critical 1 + High 13`})]})]})]}),`
`,(0,i.jsx)(t.h2,{children:`임팩트`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`머릿속에만 있던 incident 대응 경험이 검색·인용 가능한 노트가 됨`}),`
`,(0,i.jsx)(t.li,{children:`노트가 30여 편 누적된 시점에 처음으로 "섬"들을 cross-link로 연결 → 가든이 그래프 형태로`}),`
`,(0,i.jsx)(t.li,{children:`"신규 양산 → 누적 후 cross-link"의 라운드 사이클이 자연 발생 (이때는 아직 명명 전)`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`incident 경험은 시간이 지나면 디테일이 휘발된다. 늦기 전에 노트로 굳힌 게 맞았다. cross-link는 신규 작성보다 시간이 더 들었다 — 30여 편을 다 읽고 의미 연결을 판단해야 해서. 이 부담이 나중에 "라운드"라는 단위로 cross-link를 묶어서 처리하는 패턴으로 이어졌다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/incident-temp-vs-root`,children:`/notes/incident-temp-vs-root`}),`, `,(0,i.jsx)(t.a,{href:`/notes/good-alert-four-criteria`,children:`/notes/good-alert-four-criteria`}),`, `,(0,i.jsx)(t.a,{href:`/notes/incident-monitoring-gap`,children:`/notes/incident-monitoring-gap`}),`, `,(0,i.jsx)(t.a,{href:`/notes/runbook-write-during-incident`,children:`/notes/runbook-write-during-incident`})]})]})}function U(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(H,{...e})}):H(e)}var W=e({default:()=>q,frontmatter:()=>G}),G={title:`홈레이더 케이스 + 개인 레포 9편 자산화 + CodeRabbit 도입`,date:`2026-05-21 20:00`,type:`Shipped`,summary:`사이드 프로젝트(홈레이더)를 케이스로 정리하고, 6년치 개인 GitHub 레포 3개를 인터뷰 형식 9편으로 추출했다. 사이트 PR에 CodeRabbit 자동 리뷰를 붙였다.`};function K(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
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
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/cases/home-radar-system`,children:`/cases/home-radar-system`}),`, `,(0,i.jsx)(t.a,{href:`/cases/personal-repos-interview`,children:`/cases/personal-repos-interview`}),`, `,(0,i.jsx)(t.a,{href:`/notes/archive-or-keep-old-repo`,children:`/notes/archive-or-keep-old-repo`}),`, `,(0,i.jsx)(t.a,{href:`/notes/coderabbit-cubic-double-review`,children:`/notes/coderabbit-cubic-double-review`})]})]})}function q(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(K,{...e})}):K(e)}var J=e({default:()=>ie,frontmatter:()=>Y}),Y={title:`콘텐츠를 "라운드 + 휴경"으로 운영하기 시작`,date:`2026-05-26 19:00`,type:`Building`,summary:`5/19~21에 30편 가까이 양산한 뒤 5일 공백이 있었다. 이 공백을 실패가 아니라 휴경으로 재해석하고, 이후 콘텐츠를 라운드 단위로 운영하기로 했다. 회고를 메타운영 5편으로 자산화.`};function X(e){let t={a:`a`,del:`del`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`맥락`}),`
`,(0,i.jsxs)(t.p,{children:[`5/19`,(0,i.jsx)(t.del,{children:`5/21에 사이트 리빌드 + 콘텐츠 30편 가까이를 몰아쳤다. 그 뒤 5/22`}),`5/26 5일간 새 글이 0편이었다. 처음엔 게으름이라 생각했다.`]}),`
`,(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsxs)(t.p,{children:[`5일 공백을 돌아보니 이건 정체가 아니라 `,(0,i.jsx)(t.strong,{children:`휴경`}),`이었다 — 다음 라운드의 시드가 누적되는 시간. 이 관찰을 포함해 메타운영 5편을 썼다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`라운드 패턴 명명 (신규 → cross-link → 함정 → 다음 라운드)`}),`
`,(0,i.jsx)(t.li,{children:`가든 휴경기 에세이 (매일 양산이 목표가 아니다)`}),`
`,(0,i.jsx)(t.li,{children:`리빌드 vs 점진 (구조는 리빌드, 추가는 점진)`}),`
`,(0,i.jsx)(t.li,{children:`개인 레포 인터뷰 케이스 + 이중 자동 리뷰 노트`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`결정 — 운영 단위를 "라운드"로`}),`
`,(0,i.jsxs)(t.p,{children:[`매일 글 N편이 목표가 아니라 `,(0,i.jsx)(t.strong,{children:`라운드 → 휴경 → 다음 라운드`}),` 사이클을 운영 단위로 삼는다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`라운드: 신규 양산 (시그니처 하나로 5편 내외)`}),`
`,(0,i.jsx)(t.li,{children:`휴경: 거리감 + 다음 시드 누적 (3~7일)`}),`
`,(0,i.jsx)(t.li,{children:`cross-link은 라운드 사이에 묶어서`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`임팩트`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"이번 주 새 글 0편 = 실패"라는 압박에서 벗어남 — 지표를 라운드 단위로`}),`
`,(0,i.jsx)(t.li,{children:`이후 라운드마다 시그니처를 명시적으로 다르게 잡는 습관의 출발점`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`이 회고 자체가 휴경의 산출물이었다. 5일간 글은 0편이었지만 "라운드"라는 운영 개념이 그 시간에 발효됐다. 매일 양산했다면 이 메타 관찰은 안 나왔을 것. 다만 휴경을 너무 길게 끌면 회피로 전환되니 3~7일 임계를 둔다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/notes-round-pattern`,children:`/notes/notes-round-pattern`}),`, `,(0,i.jsx)(t.a,{href:`/essays/garden-fallow-meaning`,children:`/essays/garden-fallow-meaning`}),`, `,(0,i.jsx)(t.a,{href:`/notes/rebuild-vs-incremental`,children:`/notes/rebuild-vs-incremental`})]})]})}function ie(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(X,{...e})}):X(e)}var ae=e({default:()=>se,frontmatter:()=>oe}),oe={title:`밸런스 분석으로 빈 영역 채우기 + 가든 hygiene 정량화`,date:`2026-05-29 18:00`,type:`Shipped`,summary:`콘텐츠 분포를 측정하니 Backend·Security·Testing·A11y가 비어 있었다. 강한 곳(frontend) 대신 빈 곳을 채우고, Seedling 승급·Essay 게시를 정량 기준으로 처리했다.`};function Z(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`먼저 분포를 측정했다. 토픽·형식·growth·status를 집계.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`frontend 10 / workflow 9 vs backend 4 / `,(0,i.jsx)(t.strong,{children:`security 1 / testing 1 / a11y 0`})]}),`
`,(0,i.jsx)(t.li,{children:`Notes growth: Seedling 73% (정착 노트 거의 없음)`}),`
`,(0,i.jsx)(t.li,{children:`Essays: 10편 전부 Draft`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`측정이 빈 영역을 드러냈다. 그걸 기준으로 작업.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`부재 영역 5편`}),`: postgres isolation, jwt vs session, oauth 함정, flaky test, keyboard nav — Backend·Security·Testing·A11y`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`가든 hygiene`}),`: Seedling → Budding 7편 승급 (정량 기준: 본문 80줄+ / cross-link 3+ / 코드·표 4+), Essay Draft → Published 3편`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`광고 시리즈 시작`}),`: 양면 시장 의사결정 에세이 1편`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`측정`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`항목`}),(0,i.jsx)(t.th,{children:`수치`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`부재 영역 신규`}),(0,i.jsx)(t.td,{children:`5편`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`Seedling → Budding`}),(0,i.jsx)(t.td,{children:`7편`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`Draft → Published`}),(0,i.jsx)(t.td,{children:`3편`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`Essay Published 비율`}),(0,i.jsx)(t.td,{children:`0% → 약 23%`})]})]})]}),`
`,(0,i.jsx)(t.h2,{children:`임팩트`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"골고루 쓰고 있다"는 착각이 측정으로 깨짐 — 실제론 frontend·workflow 편향`}),`
`,(0,i.jsx)(t.li,{children:`승급/게시를 직관이 아니라 정량 기준으로 → 임의 선별 방지`}),`
`,(0,i.jsx)(t.li,{children:`security·testing 클러스터가 0~1에서 의미 있는 크기로`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`사람은 잘하는 영역에 더 쌓고 빈 곳은 못 본다. 분포를 측정하지 않았으면 frontend 글만 더 늘렸을 것. "개선"을 정량 기준 없이 하면 임의 선별이 된다는 것도 이때 확인 — 승급 기준을 숫자로 정의하고 나서야 자동 판정이 가능했다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/coverage-gap-analysis`,children:`/notes/coverage-gap-analysis`}),`, `,(0,i.jsx)(t.a,{href:`/notes/jwt-vs-session-tradeoffs`,children:`/notes/jwt-vs-session-tradeoffs`}),`, `,(0,i.jsx)(t.a,{href:`/notes/flaky-test-diagnosis`,children:`/notes/flaky-test-diagnosis`}),`, `,(0,i.jsx)(t.a,{href:`/essays/two-sided-market-decisions`,children:`/essays/two-sided-market-decisions`})]})]})}function se(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(Z,{...e})}):Z(e)}var Q=e({default:()=>le,frontmatter:()=>ce}),ce={title:`quality-gate 4.7 적용 + 대화 마이닝 + YAML 함정 3회차`,date:`2026-05-30 17:00`,type:`Shipped`,summary:`광고 플랫폼 시리즈를 심화하고, 지난 2주 AI 협업 경험을 일반화 노트로 추출했다. 품질 기준을 4.7로 올려 평가-개선 루프를 돌렸고, YAML 따옴표 함정이 3번째로 재발해 빌드 전 점검을 자산화했다.`};function $(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`한 일`}),`
`,(0,i.jsx)(t.p,{children:`두 라운드(R7·R8)를 묶었다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`광고 플랫폼 시리즈`}),`: ad-metric-traps, idempotency-keys-billing, exactly-once-delivery-myth, frequency-capping + incident 클러스터 10편 개편(그래프 연결)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`대화 마이닝`}),`: 지난 2주 AI 협업 경험을 일반화 교훈 5편으로 — mode collapse, 모호한 지시의 정량화, 재발 함정, 커버리지 갭, 위임 자율성 보정`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`quality-gate 4.7`}),`: 새 글에 6차원 rubric을 4.7 임계로 적용 (기존 4.5보다 높게 — 외부 게시 콘텐츠라)`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`측정`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`항목`}),(0,i.jsx)(t.th,{children:`수치`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`신규 (R7+R8)`}),(0,i.jsx)(t.td,{children:`10편 (Note 8 + Essay 2)`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`개편`}),(0,i.jsx)(t.td,{children:`15편 (incident 10 + AI 클러스터 5)`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`quality-gate`}),(0,i.jsx)(t.td,{children:`5편 평균 4.83~5.0, 모든 항목 4+`})]})]})]}),`
`,(0,i.jsx)(t.h2,{children:`YAML 함정 3회차`}),`
`,(0,i.jsxs)(t.p,{children:[`frontmatter `,(0,i.jsx)(t.code,{children:`summary`}),`가 큰따옴표로 시작 → YAML이 quoted scalar로 오해 → 빌드 실패. css-color-scheme-native(5/19), frequency-capping(R7)에 이어 `,(0,i.jsx)(t.strong,{children:`3번째`}),`. 공교롭게도 "재발 함정은 자동 검사가 된다"는 노트를 쓰는 중에 그 노트의 summary에서 재발.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`대응: 빌드 전 `,(0,i.jsx)(t.code,{children:`grep -rnE '^(title|summary): "' src/content/`}),`를 검증 루프에 고정`]}),`
`,(0,i.jsx)(t.li,{children:`이 점검이 3회차를 커밋 전에 잡았다 — 검사가 작동`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`임팩트`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`대화(메타 작업)도 일반화하면 게시 가능한 콘텐츠가 됨 — 단 "내가 한 일"이 아니라 전이되는 교훈으로`}),`
`,(0,i.jsx)(t.li,{children:`품질 기준을 노출도에 맞춰 조정(내부 4.5 / 외부 4.7)하는 운영 확립`}),`
`,(0,i.jsx)(t.li,{children:`반복 함정이 grep 한 줄로 봉인됨`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`회고`}),`
`,(0,i.jsx)(t.p,{children:`navel-gazing 위험과 재발 함정이 같은 세션에서 둘 다 실현됐고 둘 다 막혔다 — quality-gate의 "일반화 가능성" 차원이 자기 참조적 서술을 눌렀고, grep 점검이 YAML 함정 3회차를 잡았다. 검사를 글로만 쓰지 않고 검증 루프에 박은 게 효과를 봤다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/recurring-trap-to-checklist`,children:`/notes/recurring-trap-to-checklist`}),`, `,(0,i.jsx)(t.a,{href:`/notes/ai-output-mode-collapse`,children:`/notes/ai-output-mode-collapse`}),`, `,(0,i.jsx)(t.a,{href:`/notes/operationalizing-vague-requests`,children:`/notes/operationalizing-vague-requests`}),`, `,(0,i.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`/notes/quality-gate-loop`})]})]})}function le(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)($,{...e})}):$(e)}export{B as a,k as c,_ as d,h as f,r as h,W as i,T as l,s as m,ae as n,re as o,d as p,J as r,N as s,Q as t,x as u};