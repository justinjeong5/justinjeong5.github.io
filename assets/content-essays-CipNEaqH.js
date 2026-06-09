import{n as e}from"./rolldown-runtime-QTnfLwEv.js";import{g as t,v as n}from"./content-cases-BgF-y5bM.js";var r=e({default:()=>s,frontmatter:()=>a}),i=t(),a={title:`AI 코딩 도구 6개월 — Claude Code, Codex, Cursor 세 도구를 같이 쓴 후`,date:`2026-05-28`,summary:`6개월 전에는 Cursor만 썼다. 지금은 Claude Code + Codex CLI + Cursor 세 도구를 같이 쓴다. 각 도구의 자리가 어떻게 다른지, 도구 셋이 만드는 새로운 워크플로우는 무엇인지의 관찰.`,readingTime:`7분`,status:`Draft`};function o(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`6개월 전 vs 지금`}),`
`,(0,i.jsx)(t.p,{children:`6개월 전 IDE는 Cursor였다. AI 도구는 Cursor 안에서 chat 또는 inline edit으로 끝났다. 단일 도구, 단일 자리.`}),`
`,(0,i.jsx)(t.p,{children:`지금은 다르다. 세 도구를 같이 쓴다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`Claude Code`}),` (CLI + IDE 확장) — 메인 작업 환경`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`Codex CLI`}),` — 병렬 검증·경쟁`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`Cursor`}),` — 가벼운 chat·시안 탐색`]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`세 도구가 같은 문제를 푸는 게 아니라 `,(0,i.jsx)(t.strong,{children:`다른 자리`}),`를 차지한다. 6개월 전엔 안 보였던 그림이 이제 보인다.`]}),`
`,(0,i.jsx)(t.h2,{children:`Claude Code — 작업의 메인 자리`}),`
`,(0,i.jsx)(t.p,{children:`Claude Code가 메인이 된 이유는 명확하다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`CLI`}),`: terminal에서 직접 호출. 단축키 + 자동화 가능`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`스킬 시스템`}),`: 본인이 만든 워크플로우(dispatch·quality-gate·personas)를 도구 안에 박을 수 있음`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`메모리/세션`}),`: 컨텍스트가 turn 단위가 아닌 세션 단위`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`multi-edit`}),`: 한 번에 여러 파일 수정 (Cursor의 inline edit보다 큰 단위)`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`에이전트 스폰`}),`: 서브에이전트로 병렬 작업 가능`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`"매번 chat에 컨텍스트 적기"가 사라졌다. CLAUDE.md에 원칙을 박고, memory에 자산을 누적하고, 스킬에 워크플로우를 박는다. 한 번 만든 게 다음 호출에 그대로 적용된다.`}),`
`,(0,i.jsxs)(t.p,{children:[`가장 큰 변화는 `,(0,i.jsx)(t.strong,{children:`본인 도구를 만들 수 있다는 것`}),`. Cursor에서는 도구의 동작을 바꾸기 어려웠다. Claude Code에서는 dispatch 같은 라우터를 직접 짜고 모든 메시지가 그 라우터를 거치게 만들 수 있다.`]}),`
`,(0,i.jsx)(t.h2,{children:`Codex CLI — 검증과 경쟁의 자리`}),`
`,(0,i.jsxs)(t.p,{children:[`Codex는 메인이 아니라 `,(0,i.jsx)(t.strong,{children:`두 번째 의견`}),`의 자리다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`Claude가 만든 코드를 Codex가 리뷰`}),`
`,(0,i.jsx)(t.li,{children:`Claude가 분석한 결과를 Codex가 교차 검증`}),`
`,(0,i.jsx)(t.li,{children:`같은 작업을 둘 다 굴려서 두 결과 비교`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`가장 큰 가치는 `,(0,i.jsx)(t.strong,{children:`사각지대 발견`}),`. 같은 모델이 만들고 같은 모델이 리뷰하면 같은 사각지대를 공유한다. 다른 모델 백엔드(GPT 계열)인 Codex는 다른 사각지대를 가진다. 한쪽만 발견한 엣지 케이스가 거의 항상 진짜다. 이 `,(0,i.jsx)(t.a,{href:`/notes/codex-competition`,children:`Codex 경쟁`}),` 패턴은 본인 워크플로우의 기본값이 됐다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`비용은 토큰 2배. 시간도 직렬이면 2배(병렬이면 max). 이 비용이 가치를 넘는가? `,(0,i.jsx)(t.strong,{children:`설계 결정·복잡한 리팩토링·보안 리뷰`}),`에서는 명확히 가치 > 비용. 단순 한 줄 수정에서는 가치 < 비용.`]}),`
`,(0,i.jsx)(t.p,{children:`CLAUDE.md에 "모든 작업에서 Codex 경쟁 기본"이라고 박아뒀다. 단독 진행은 사용자가 "코덱스 없이"라고 명시한 경우만. 강제 기본값이 그게 더 안전해서다.`}),`
`,(0,i.jsx)(t.h2,{children:`Cursor — 가벼운 chat의 자리`}),`
`,(0,i.jsxs)(t.p,{children:[`Cursor를 안 버린 이유는 하나다. `,(0,i.jsx)(t.strong,{children:`가볍게 물어볼 자리`}),`가 필요해서.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"이거 어떻게 동작하지?" 같은 단문 질문`}),`
`,(0,i.jsx)(t.li,{children:`코드 한 조각의 의미 파악`}),`
`,(0,i.jsx)(t.li,{children:`잠깐 시안 탐색 ("이거 React 19에서 어떻게 쓰지?")`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`Claude Code는 메인 작업 환경이라 묵직하다. Cursor는 IDE 안에 박혀있어서 inline으로 빠르게 물어볼 수 있다. 두 도구의 자리가 다르다.`}),`
`,(0,i.jsx)(t.p,{children:`다만 Cursor의 비중이 6개월 전 100%에서 지금 15-20% 정도로 줄었다. 진짜 작업은 Claude Code, 가볍게는 Cursor.`}),`
`,(0,i.jsx)(t.h2,{children:`셋이 만드는 새로운 워크플로우`}),`
`,(0,i.jsxs)(t.p,{children:[`이 세 도구가 각자 도는 게 아니라 `,(0,i.jsx)(t.strong,{children:`체인`}),`을 이룬다. 며칠 써본 패턴은 이렇다.`]}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:`[가벼운 탐색] Cursor — "이 API 뭐지?"
    ↓
[설계 결정] Claude Code + personas — 트레이드오프 비교
    ↓
[구현] Claude Code + ship — 코드 작성
    ↓
[검증] Codex CLI — 같은 작업 다시 굴려서 비교
    ↓
[리뷰] Claude Code + review-changes — 6관점 병렬 리뷰
    ↓
[PR] Claude Code + create-pr — PR 생성
    ↓
[CI 대응] Claude Code + pr-shepherd — 머지까지
`})}),`
`,(0,i.jsx)(t.p,{children:`각 단계가 적합한 도구를 골랐다. 단일 도구에 모든 단계를 떠넘기지 않는다.`}),`
`,(0,i.jsx)(t.h2,{children:`토큰 사용량`}),`
`,(0,i.jsx)(t.p,{children:`도구 셋을 같이 쓰니 토큰 사용량이 6개월 전 대비 4-5배다. Claude Pro 외에 Codex 별도 결제도 있다. 그런데 결과 품질의 차이가 토큰 비용을 뛰어넘는다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`비용 정당성`}),`:`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`사각지대 감소 → 프로덕션 버그 비용 회피 (1개 버그가 며칠 비용)`}),`
`,(0,i.jsx)(t.li,{children:`의사결정 품질 → 재설계 비용 회피`}),`
`,(0,i.jsx)(t.li,{children:`매번 처음부터 안 함 → 시간 비용 회피`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`토큰을 아끼는 게 미덕이 아니다. `,(0,i.jsx)(t.strong,{children:`결과 품질이 토큰 비용을 회수`}),`하면 토큰을 더 쓰는 게 합리적이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`6개월 후 무엇이 달라질까`}),`
`,(0,i.jsx)(t.p,{children:`추측해본다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`도구 통합`}),`: 셋이 점점 통합될 가능성. Cursor가 CLI를 강화하거나, Claude Code가 IDE 통합을 강화하거나, Codex가 자체 워크플로우를 갖거나.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`에이전트 자율성 증가`}),`: 지금은 사람이 도구를 호출하는데, 곧 도구가 도구를 호출하는 비중이 늘어난다 (이미 dispatch가 그렇다).`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`본인 시스템 가치 ↑`}),`: 도구가 통합되든 자율성이 늘어나든 `,(0,i.jsx)(t.strong,{children:`본인이 자기 워크플로우를 시스템으로 만들었는지`}),`가 격차의 핵심이 된다. 도구 좋아진다고 시스템 없는 사람이 따라잡지 못한다.`]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`가장 큰 위험은 `,(0,i.jsx)(t.strong,{children:`도구에 종속`}),`되는 것이다. 본인 시스템이 도구별 lock-in이면 도구 교체 비용이 커진다. dispatch·quality-gate 같은 패턴은 도구가 바뀌어도 옮길 수 있게 추상화해야 한다.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`도구를 늘리기만 함`}),`: 도구 셋이 자리가 다른지 확인 안 하고 그냥 셋 다 쓰면 노이즈. 각 도구의 자리를 명확히.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`모든 작업에 모든 도구`}),`: 단순 한 줄 수정에 도구 셋을 다 굴리면 시간 낭비. 작업 크기 대비 도구 수를 조절.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`본인 시스템 없이 도구만`}),`: 도구가 좋아져도 본인 워크플로우 시스템이 없으면 매번 처음부터. CLAUDE.md·memory·skill에 시스템 박기.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`도구 lock-in`}),`: 본인 시스템을 도구 specific하게 만들면 도구 교체 비용 ↑. 추상화 가능한 패턴으로.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`검증의 자기 confirmation`}),`: Claude만 쓰면 Claude의 사각지대를 공유. 같은 모델에 반복 위임하면 `,(0,i.jsx)(t.a,{href:`/notes/ai-output-mode-collapse`,children:`출력이 한 점으로 수렴`}),`하기도 한다. 다른 모델로 교차 검증 필수.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsxs)(t.p,{children:[`AI 코딩 도구의 가치는 단일 도구 잘 쓰는 게 아니다. `,(0,i.jsx)(t.strong,{children:`각 도구의 자리를 알고 셋을 체인으로 엮는 것`}),`이다.`]}),`
`,(0,i.jsx)(t.p,{children:`Claude Code가 메인, Codex가 검증, Cursor가 가벼운 chat. 이 셋이 따로 도는 게 아니라 dispatch → personas → ship → review-changes → create-pr → pr-shepherd 같은 워크플로우로 엮인다.`}),`
`,(0,i.jsx)(t.p,{children:`6개월 전 단일 도구 100%에서 지금 셋이 자리가 다른 시스템으로 바뀌었다. 6개월 후엔 다섯 도구가 될 수도 있다. 도구 수가 늘어나도 본인 시스템의 형태가 같으면 자연스럽게 흡수할 수 있다.`}),`
`,(0,i.jsxs)(t.p,{children:[`도구는 매년 바뀐다. `,(0,i.jsx)(t.strong,{children:`본인 워크플로우를 시스템으로 만들어둔 사람`}),`과 매번 새 도구 하나씩 다시 배우는 사람의 6개월 후, 1년 후, 5년 후 격차는 비선형이다.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var c=e({default:()=>ee,frontmatter:()=>l}),l={title:`AI와 일하는 법 — dispatch·quality-gate·personas 체인 워크플로우`,date:`2026-05-19`,summary:`단일 AI 도구가 아니라 도구 조합이 만드는 워크플로우. 오늘 세션에서 5번의 quality-gate, 1번의 personas, 다수의 dispatch가 보여준 패턴.`,readingTime:`6분`,status:`Draft`};function u(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`AI 도구 하나로는 부족합니다`}),`
`,(0,i.jsx)(t.p,{children:`Claude Code 처음 쓰던 때, 도구 하나에서 답을 다 얻으려고 했습니다. "이 코드 리뷰해줘", "이거 어떻게 만들어줘", "이거 분석해줘." 단일 호출, 단일 답.`}),`
`,(0,i.jsx)(t.p,{children:`그런데 비슷한 작업이 반복되니 패턴이 보였습니다. 같은 종류의 작업에는 같은 종류의 처리 순서가 필요했습니다. 매번 사람이 "이건 이렇게 해줘, 저건 저렇게 해줘"를 입력하는 건 사람 속도였습니다.`}),`
`,(0,i.jsxs)(t.p,{children:[`그래서 자체 시스템을 만들기 시작했습니다. dispatch·quality-gate·personas. 단일 도구가 아니라 `,(0,i.jsx)(t.strong,{children:`도구 조합이 만드는 워크플로우`}),`입니다.`]}),`
`,(0,i.jsx)(t.p,{children:`오늘 이 사이트를 만들면서 이 시스템이 어떻게 동작하는지 한 세션에 다 봤습니다. 5번의 quality-gate, 1번의 personas, 수십 번의 dispatch가 있었습니다.`}),`
`,(0,i.jsx)(t.h2,{children:`패턴 1: dispatch — 의도 기반 라우팅`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/dispatch-routing-pattern`,children:`dispatch는 의도 기반 라우팅`}),`으로, 모든 메시지의 첫 단계입니다. 사용자가 무슨 의도로 말했는지를 3개 에이전트가 병렬로 판단합니다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`maximizer`}),` — "더 깊은 분석이 가능한 스킬은?"`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`synergist`}),` — "조합이 1+1>2인가?"`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`pragmatist`}),` — "사용자 발화의 진짜 의도는?"`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`각자 후보 스킬과 예상 성과를 제시합니다. 합의되면 즉시 채택, 이견이면 점수 공식. 매번 사람이 "이거는 /ship으로, 저거는 /review로"를 결정할 필요가 없습니다.`}),`
`,(0,i.jsxs)(t.p,{children:[`핵심은 `,(0,i.jsx)(t.strong,{children:`키워드 매칭이 아닌 의미론적 의도 분석`}),`입니다. "PR 만들어줘"는 단순 매칭으로 처리 가능하지만, "이 변경을 어떻게 마무리하지?"는 맥락 의존입니다. dispatch는 후자도 처리합니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`패턴 2: quality-gate — 결정론적 평가 루프`}),`
`,(0,i.jsx)(t.p,{children:`quality-gate는 "잘 됐는지 어떻게 알지"를 측정 가능하게 만듭니다.`}),`
`,(0,i.jsx)(t.p,{children:`모호한 목표("세련된 디자인", "안전한 자동화")를 4-7개 측정 가능한 차원으로 분해합니다. 페르소나 N명이 각자 자기 영역만 채점합니다. 평균 4.5/5 + 모든 항목 4점 이상 + BLOCKING 없음이면 PASS. 미달이면 가장 낮은 점수 항목 1-2개를 개선하고 재평가. max 3 사이클.`}),`
`,(0,i.jsx)(t.p,{children:`오늘 5번 사용했습니다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`디자인 톤: 평균 3.28 → 4.44 (3 사이클)`}),`
`,(0,i.jsx)(t.li,{children:`모바일 최적화: 2.75 → 4.75 (3 사이클)`}),`
`,(0,i.jsx)(t.li,{children:`콘텐츠 시드: 4.04 → 4.59 (2 사이클)`}),`
`,(0,i.jsx)(t.li,{children:`자동화 PoC PLAN: 2.5 → v1만 4.33 PASS (1 사이클)`}),`
`,(0,i.jsx)(t.li,{children:`자동화 v1 시연: 4.33 (자체 채점)`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`각 사이클의 핵심 인사이트는 같았습니다. `,(0,i.jsx)(t.strong,{children:`"평균이 아니라 최저 항목이 통과를 결정한다."`}),` 한 항목이 3점이면 평균 4.7이어도 사용자 시각의 약점이 거기 있습니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`패턴 3: personas — 옵션 비교 토론`}),`
`,(0,i.jsx)(t.p,{children:`personas는 결정에 옵션 공간이 클 때 씁니다. 자동화 PoC 설계가 그랬습니다. 트리거(manual/hook/cron/hybrid), 자동화 수준(L0~L3), 데이터 처리, 보안 — 각 축에 4-5개 옵션. 단일 사고로는 모든 트레이드오프를 못 봅니다.`}),`
`,(0,i.jsx)(t.p,{children:`페르소나 4명을 병렬로 토론시켰습니다. SWE·법무·콘텐츠 전략가·운영 사용자. 각자 같은 4축에 다른 답을 냈습니다. 그 차이가 바로 트레이드오프의 좌표였습니다.`}),`
`,(0,i.jsxs)(t.p,{children:[`가장 큰 깨달음: `,(0,i.jsx)(t.strong,{children:`본인 페르소나가 가장 솔직한 BLOCKING을 짚었습니다.`}),` 외부 페르소나가 "이 시스템 안전하다"라고 결론 내려도, 본인이 "지속률 35%"라고 하면 시스템 가치는 0입니다. 이건 personas 없이 단일 사고로는 안 보였을 겁니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`체인 — dispatch → personas → quality-gate`}),`
`,(0,i.jsx)(t.p,{children:`세 패턴이 따로 도는 게 아닙니다. 자주 체인됩니다.`}),`
`,(0,i.jsx)(t.p,{children:`복잡한 결정의 표준 흐름은 이렇습니다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:`사용자 메시지
  ↓
dispatch — 의도 분석 + 라우팅 (예: ALTERNATIVE_DETECTED)
  ↓
personas — 옵션 비교 토론 → 결론 도출
  ↓
quality-gate — 결론을 측정 가능 rubric으로 평가 → 통과까지 개선
  ↓
실행
`})}),`
`,(0,i.jsxs)(t.p,{children:[`dispatch가 "이건 옵션이 많네"라고 판단하면 personas를 추천합니다. personas의 결론이 나오면 quality-gate가 그 결론을 검증합니다. 사람은 각 단계의 결과를 보고 다음 단계를 승인할 뿐입니다. 구현 단계에서는 `,(0,i.jsx)(t.a,{href:`/notes/plan-mode-one-shot`,children:`Plan Mode로 계획을 확정한 뒤 1-shot으로 실행`}),`해 재작업을 줄입니다.`]}),`
`,(0,i.jsx)(t.p,{children:`오늘 자동화 PoC가 이 체인을 그대로 거쳤습니다. PLAN 자체가 quality-gate에서 FAIL 됐고, scope를 v1/v2로 분리하니 통과했습니다. 한 사람의 직관으로는 도달하기 어려운 결론이었습니다.`}),`
`,(0,i.jsx)(t.h2,{children:`본인 시스템을 만든다는 것`}),`
`,(0,i.jsxs)(t.p,{children:[`이 세 패턴은 표준 도구가 아닙니다. 제가 직접 만들어서 `,(0,i.jsx)(t.code,{children:`~/.claude/skills/`}),`에 둔 스킬들입니다. CLAUDE.md에 "모든 메시지는 dispatch를 거친다"는 제0원칙을 박아뒀습니다.`]}),`
`,(0,i.jsx)(t.p,{children:`처음에는 시간이 들었습니다. 스킬 SKILL.md를 쓰고, 디버깅하고, 매번 동작 확인. 그런데 한 번 자리잡으니 모든 후속 작업의 속도가 비선형으로 올라갔습니다. 같은 종류 결정이 반복될 때 dispatch가 자동 매칭하고, 같은 종류 평가가 반복될 때 quality-gate가 같은 rubric을 재사용합니다.`}),`
`,(0,i.jsx)(t.p,{children:`이게 본인 시스템의 가치입니다. 매번 처음부터 사고하지 않습니다. 한 번 만들어둔 패턴이 다음 결정의 입구가 됩니다.`}),`
`,(0,i.jsx)(t.h2,{children:`함정 — 도구가 목적이 되는 경우`}),`
`,(0,i.jsx)(t.p,{children:`물론 함정이 있습니다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`도구를 만드는 일이 본 작업을 덮는 경우.`}),` 스킬 디버깅에 한 주를 쓰면, 그 한 주에 했어야 할 본 작업이 밀립니다. 자동화 vs 거버넌스 trade-off가 여기에도 적용됩니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`도구가 사고를 좁히는 경우.`}),` dispatch가 매번 quality-gate만 추천하면, "이건 quality-gate가 아닐 수도 있다"는 가능성이 사라집니다. 도구가 사람의 시야를 좁히면 안 됩니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`해결책: `,(0,i.jsx)(t.strong,{children:`도구를 자주 평가`}),`합니다. 스킬 자체에 quality-gate를 적용해서 "이 스킬은 4.5점인가?"를 측정합니다. 4점 미만이면 폐기하거나 다시 만듭니다. 도구가 도구를 평가하는 메타 시스템입니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsxs)(t.p,{children:[`AI와 일하는 가장 큰 가치는 단일 도구를 잘 쓰는 게 아닙니다. `,(0,i.jsx)(t.strong,{children:`본인의 사고 패턴에 맞는 도구 체인을 만드는 것`}),`입니다.`]}),`
`,(0,i.jsx)(t.p,{children:`dispatch가 라우팅, quality-gate가 검증, personas가 비교. 세 가지가 체인을 이루면 단일 도구 N번 사용보다 결과가 깊습니다. 그리고 한 번 만들어두면 다음 결정마다 재사용됩니다.`}),`
`,(0,i.jsx)(t.p,{children:`AI 도구는 매년 좋아지지만, 본인의 워크플로우를 시스템으로 만드는 사람과 매번 새 도구 하나하나로 끝내는 사람의 격차는 더 벌어집니다. 매년 새 도구가 나와도 본인 시스템에 흡수할 수 있는지, 아니면 매번 처음부터 시작하는지의 차이입니다.`}),`
`,(0,i.jsx)(t.p,{children:`오늘 이 사이트가 그 작은 증명입니다. 5번의 quality-gate가 같은 사이클로 디자인·모바일·콘텐츠·자동화를 모두 통과시켰습니다. 같은 도구가 다른 영역에 똑같이 적용됐다는 게 핵심입니다. 도구가 영역마다 다르지 않은 게, 워크플로우의 가치입니다.`})]})}function ee(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}var d=e({default:()=>m,frontmatter:()=>f}),f={title:`자동화는 일을 줄이지 않는다 — AI 워크플로우와 거버넌스 비용`,date:`2026-05-19`,summary:`자동화 PoC를 4 페르소나로 평가했더니 결론이 뒤집혔습니다. 자동화는 일을 줄이는 게 아니라 종류를 바꿉니다. 그리고 거버넌스 부담이 본 작업보다 클 수 있습니다.`,readingTime:`4분`,status:`Published`};function p(e){let t={a:`a`,blockquote:`blockquote`,em:`em`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`"자동화하면 일이 줄어든다"는 거짓말`}),`
`,(0,i.jsx)(t.p,{children:`이 문장을 처음 의심하게 된 건 오늘 일이었습니다.`}),`
`,(0,i.jsx)(t.p,{children:`매일 8시간 동안 AI 도구와 대화하는데 그 안에서 인사이트가 휘발됩니다. 그래서 일일 콘텐츠 자동 추출 시스템 PoC를 설계해보기로 했습니다. 대화 트랜스크립트를 분석해 사이트의 Logs·Notes·Essays 후보를 매일 자동 추출하는 시스템. 직관적으로는 명백한 가치였습니다. 손으로 정리하는 시간이 0이 될 테니까요.`}),`
`,(0,i.jsx)(t.p,{children:`PLAN을 4 페르소나로 평가했습니다. 시니어 자동화 엔지니어, 개인정보·보안 검토자, 콘텐츠 전략가, 그리고 운영 사용자 본인. 네 사람의 결론은 거의 똑같았습니다.`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`자동화는 일을 줄이는 게 아니다. 일의 종류를 바꿀 뿐이다.`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`비교 표`}),`
`,(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:`영역`}),(0,i.jsx)(t.th,{children:`자동화 전 (수동)`}),(0,i.jsx)(t.th,{children:`자동화 후`})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`작성`}),(0,i.jsx)(t.td,{children:`매일 30분`}),(0,i.jsx)(t.td,{children:`매일 0분 (자동)`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`보안 검토`}),(0,i.jsx)(t.td,{children:`N/A`}),(0,i.jsx)(t.td,{children:`매일 false positive 컨펌, redaction 룰 튜닝`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`품질 검토`}),(0,i.jsx)(t.td,{children:`N/A`}),(0,i.jsx)(t.td,{children:`AI 톤 오염 감시, 1인칭 톤 보호`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:`시스템 운영`}),(0,i.jsx)(t.td,{children:`N/A`}),(0,i.jsx)(t.td,{children:`cron·hook 유지, 사고 시 incident response`})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:`합계`})}),(0,i.jsx)(t.td,{children:`30분`}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:`30분 이상 가능`})})]})]})]}),`
`,(0,i.jsx)(t.p,{children:`자동화 전에는 30분의 "작성" 한 가지였습니다. 자동화 후에는 0분의 작성 + N분의 거버넌스. N이 30보다 작다는 보장이 없습니다.`}),`
`,(0,i.jsx)(t.h2,{children:`거버넌스 비용이 본 작업을 추월하는 지점`}),`
`,(0,i.jsx)(t.p,{children:`법무 검토자 페르소나의 평가는 단호했습니다.`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`"현 PLAN 상태로 publish 진행 절대 금지. 4주 dry-run 필요."`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`자동화 본 코딩 작업: 약 1주.
보안 검증 dry-run 운영: 4주.`}),`
`,(0,i.jsxs)(t.p,{children:[`비율이 1:4입니다. 작성 자체를 자동화하느라 보안 검증에 4배의 시간을 써야 한다는 결론이 나오면, "자동화로 시간을 아꼈다"는 명제는 거짓입니다. 이게 `,(0,i.jsx)(t.a,{href:`/notes/automation-vs-governance`,children:`자동화 시스템 vs 거버넌스 부담`}),`의 숨은 trade-off입니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`자동화 인프라 = accidental complexity?`}),`
`,(0,i.jsxs)(t.p,{children:[`Brooks가 `,(0,i.jsx)(t.em,{children:`No Silver Bullet`}),`에서 essential complexity와 accidental complexity를 구분했습니다. 본질 복잡도와 우발 복잡도. 도구·환경에서 오는 어려움은 accidental입니다.`]}),`
`,(0,i.jsx)(t.p,{children:`자동화 인프라는 본질일까요, 우발일까요?`}),`
`,(0,i.jsx)(t.p,{children:`대부분 우발입니다. "사이트에 글을 자주 올린다"는 본질 문제입니다. "트랜스크립트 정규화 + redaction LLM + second-pass + cron + macOS 알림 + incident playbook"은 그 본질을 회피하기 위한 우발 복잡도입니다.`}),`
`,(0,i.jsx)(t.p,{children:`본질 문제는 "글을 자주 쓸 동기와 시간이 있는가"입니다. 자동화는 그 문제를 다른 문제(거버넌스 운영)로 바꿔놓을 뿐, 답하지 않습니다.`}),`
`,(0,i.jsx)(t.h2,{children:`자동화 전 자문할 3가지`}),`
`,(0,i.jsx)(t.p,{children:`이번 PoC 평가에서 합의된 자문 목록은 이렇습니다.`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`자동화가 만드는 거버넌스 일이 자동화하는 실작업보다 작은가?`}),`
비교가 안 되면 거버넌스 부담이 본 일을 추월할 수 있습니다.`]}),`
`]}),`
`,(0,i.jsxs)(t.li,{children:[`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`거버넌스 일은 누가 책임지는가?`}),`
"자동화가 한다"는 답은 거짓입니다. 사고가 나면 결국 사람이 수습합니다.`]}),`
`]}),`
`,(0,i.jsxs)(t.li,{children:[`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`사고 1건의 비용 vs 자동화의 시간 절감 누적 가치`}),`를 비교했는가?
회사 정보 1건 유출의 비용은 자동화 1년 절감 가치보다 클 수 있습니다.`]}),`
`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`세 질문 모두에 "예"가 나와야 자동화가 net 이득입니다. 하나라도 "모르겠다"면 폐기 또는 보수적 dry-run.`}),`
`,(0,i.jsx)(t.h2,{children:`본인 운영 시나리오를 시뮬레이션하라`}),`
`,(0,i.jsx)(t.p,{children:`본인 페르소나의 honest_concern은 이랬습니다.`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`"내가 가장 두려운 건 검토 부담이 아니라 회사 정보 유출 1건이다. 매일 7분은 할 수 있지만, 한 번의 사고로 평판이 망가지면 전체 시스템 가치가 마이너스가 된다."`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`이게 자동화 결정의 진짜 기준입니다. "기능적으로 동작하는가"가 아니라 "내가 6개월 후에도 이 시스템을 운영할 수 있는가". 외부 페르소나는 전자를 보지만 후자는 본인만 알 수 있습니다.`}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsx)(t.p,{children:`자동화는 종종 직관과 반대로 net 부담을 키웁니다. 수동 작성 → 거버넌스 운영. 둘 중 어느 쪽이 자신에게 더 sustainable한지가 결정 기준이지, "자동화 = 무조건 이득"은 환상입니다.`}),`
`,(0,i.jsxs)(t.p,{children:[`그래서 이 사이트의 일일 자동 콘텐츠 PoC는 v1(1회 시연)으로 진행하고 v2(본격 운영)는 4주 dry-run을 거치기로 했습니다. 자동화 시스템을 만드는 게 목적이 아니라, `,(0,i.jsx)(t.strong,{children:`자동화 없이 정리되는지`}),` 먼저 확인하는 게 목적입니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`자동화는 마지막 선택지여야 합니다. 거버넌스가 본 작업을 추월하지 않는 더 가벼운 대안 — `,(0,i.jsx)(t.a,{href:`/notes/recurring-trap-to-checklist`,children:`반복되는 함정을 체크리스트로`}),` 바꾸는 식 — 이 먼저입니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`후일담 — 2주 뒤 실제로 자동화로 넘어갔다`}),`
`,(0,i.jsx)(t.p,{children:`이 보수적 결론은 2주 운영 데이터를 거쳐 일부 뒤집혔습니다. 주간 가든봇을 "글 생성 금지"에서 "생성하되 검증 게이트를 통과"로 전환했습니다. 핵심은 이 글의 논지를 부정한 게 아니라는 점입니다 — 거버넌스 비용은 사라지지 않았고, 형태만 "매일 검토"에서 "공개 전 사람이 PR을 한 번 보는 게이트"로 바뀌었습니다. N분의 거버넌스는 여전히 N분입니다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-08-writing-bot-reversal`,children:`/logs#2026-06-08-writing-bot-reversal`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-07-healthcheck-six-bots`,children:`/logs#2026-06-07-healthcheck-six-bots`})]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}var h=e({default:()=>v,frontmatter:()=>g}),g={title:`양면 시장에서 데이터를 신뢰한다는 것 — 양쪽이 숫자를 의심하는 구조`,date:`2026-05-29`,summary:`광고 플랫폼에서 광고주도 매체도 플랫폼의 숫자를 완전히 믿지 않는다. 이건 버그가 아니라 양면 시장의 구조적 특성이다. 데이터 신뢰를 설계하는 4가지.`,readingTime:`7분`,status:`Draft`};function _(e){let t={a:`a`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`양쪽 다 숫자를 의심한다`}),`
`,(0,i.jsxs)(t.p,{children:[`광고 플랫폼에서 일하면 곧 깨닫는 사실이 있다. `,(0,i.jsx)(t.strong,{children:`광고주도 매체도 플랫폼이 보여주는 숫자를 완전히 믿지 않는다.`})]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`광고주: "노출 100만이라는데 진짜야? 봇 아니야? 우리 MMP는 다른 숫자인데."`}),`
`,(0,i.jsx)(t.li,{children:`매체: "우리 광고 자리에서 발생한 수익이 이거 맞아? 왜 우리 측정이랑 달라?"`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`처음엔 이걸 "신뢰 부족" 또는 "측정 버그"로 본다. 시간이 지나면 다르게 보인다. 이 불신은 `,(0,i.jsx)(t.strong,{children:`양면 시장의 구조적 특성`}),`이다. 플랫폼이 양쪽 사이에서 숫자를 집계하는 한, 양쪽 다 자기에게 불리한 방향의 오차를 의심할 동기가 있다.`]}),`
`,(0,i.jsx)(t.h2,{children:`왜 구조적인가`}),`
`,(0,i.jsx)(t.p,{children:`일반 시장(예: 직접 판매)에서는 측정 주체가 하나다. 내가 파는 사람이고 내가 센다. 분쟁이 적다.`}),`
`,(0,i.jsxs)(t.p,{children:[`양면 시장에서는 `,(0,i.jsx)(t.strong,{children:`플랫폼이 양쪽의 거래를 측정`}),`한다. 그리고 그 측정이 양쪽의 돈을 결정한다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`노출/클릭이 많이 집계되면 → 광고주가 더 낸다 (광고주는 적게 집계되길 원함)`}),`
`,(0,i.jsx)(t.li,{children:`노출/클릭이 많이 집계되면 → 매체가 더 받는다 (매체는 많이 집계되길 원함)`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`같은 숫자가 한쪽에는 비용, 다른 쪽에는 수익이다. `,(0,i.jsx)(t.strong,{children:`이해가 정반대`}),`다. 그래서 양쪽 다 "플랫폼 숫자가 상대방에게 유리하게 편향됐을 것"을 의심한다. 플랫폼이 아무리 정확해도 이 의심은 구조적으로 남는다.`]}),`
`,(0,i.jsx)(t.h2,{children:`신뢰를 설계하는 4가지`}),`
`,(0,i.jsxs)(t.p,{children:[`데이터 신뢰는 "정확하게 측정한다"만으로 안 된다. 정확해도 양쪽이 안 믿으면 신뢰가 없다. 신뢰는 `,(0,i.jsx)(t.strong,{children:`설계`}),`해야 한다.`]}),`
`,(0,i.jsx)(t.h3,{children:`1. 제3자 검증 (third-party verification)`}),`
`,(0,i.jsx)(t.p,{children:`플랫폼 자체 숫자만으로는 양쪽을 설득할 수 없다. 중립적 제3자가 검증하면 신뢰가 생긴다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`MMP(Mobile Measurement Partner): AppsFlyer·Adjust 같은 독립 측정`}),`
`,(0,i.jsx)(t.li,{children:`광고 검증: IAS·DoubleVerify 같은 viewability·fraud 검증`}),`
`,(0,i.jsx)(t.li,{children:`양쪽이 동의하는 중립 기준`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`플랫폼이 "우리가 정확하다"고 말하는 것보다, 양쪽이 동의한 제3자가 "이 범위 안"이라고 하는 게 신뢰를 만든다.`}),`
`,(0,i.jsx)(t.h3,{children:`2. discrepancy를 정상으로 설명`}),`
`,(0,i.jsxs)(t.p,{children:[`플랫폼 숫자와 광고주 MMP 숫자는 `,(0,i.jsx)(t.strong,{children:`항상 다르다`}),`. 측정 시점·기준·dedup이 다르니까. 이걸 숨기면 "숫자 조작" 의심을 키운다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`discrepancy 허용 범위를 사전 합의 (보통 ±10%)`}),`
`,(0,i.jsx)(t.li,{children:`그 범위 안이면 "정상", 벗어나면 조사`}),`
`,(0,i.jsx)(t.li,{children:`왜 다른지(측정 방법론 차이)를 문서로 공개`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`discrepancy를 버그가 아니라 `,(0,i.jsx)(t.strong,{children:`정상 현상으로 사전 설명`}),`하면 신뢰가 오히려 올라간다. "다를 수 있다, 이 범위까지는 정상"이라는 투명성.`]}),`
`,(0,i.jsx)(t.h3,{children:`3. 측정 방법론 공개`}),`
`,(0,i.jsx)(t.p,{children:`블랙박스 숫자는 불신을 키운다. 각 지표를 어떻게 측정하는지 공개.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`노출은 언제 카운트되나 (서버 응답? 클라이언트 렌더? viewable?)`}),`
`,(0,i.jsx)(t.li,{children:`클릭 dedup 규칙은?`}),`
`,(0,i.jsx)(t.li,{children:`fraud 필터링은 어떻게?`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`방법론이 공개되면 양쪽이 "이 숫자가 어떻게 나왔는지" 검증할 수 있다. 검증 가능성이 신뢰의 기반이다.`}),`
`,(0,i.jsx)(t.h3,{children:`4. 약한 쪽 보호 기본값`}),`
`,(0,i.jsx)(t.p,{children:`양면 시장에서 보통 한쪽(매체)이 약하다. 측정 방법론을 강한 쪽(광고주)에 유리하게 기본 설정하면, 약한 쪽이 장기적으로 떠난다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`fraud 필터링을 과하게 → 매체 수익 부당 감소`}),`
`,(0,i.jsx)(t.li,{children:`viewability 기준을 과하게 엄격 → 매체 노출이 집계 안 됨`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`기본값을 `,(0,i.jsx)(t.strong,{children:`중립 또는 약한 쪽 보호`}),`로 두고, 강한 쪽이 더 엄격한 기준을 원하면 명시적으로 opt-in. 이게 양쪽 신뢰를 모두 유지하는 길이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`신뢰의 비대칭 비용`}),`
`,(0,i.jsx)(t.p,{children:`데이터 신뢰는 쌓기는 느리고 무너지기는 빠르다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`신뢰 쌓기: 수개월의 일관된 정확성 + 투명성`}),`
`,(0,i.jsx)(t.li,{children:`신뢰 무너지기: 한 번의 큰 discrepancy 미설명, 또는 한쪽에 유리한 변경 1건`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`한 번 "플랫폼이 조작한다"는 인식이 생기면 그 후 모든 숫자가 의심받는다. 그래서 데이터 변경은 `,(0,i.jsx)(t.strong,{children:`양쪽에 동시에 투명하게`}),` 공지해야 한다. 한쪽만 유리해지는 변경을 조용히 하면 신뢰가 무너진다.`]}),`
`,(0,i.jsx)(t.h2,{children:`측정과 신뢰는 다른 문제`}),`
`,(0,i.jsxs)(t.p,{children:[`엔지니어로서 가장 큰 교훈: `,(0,i.jsx)(t.strong,{children:`측정 정확도와 데이터 신뢰는 다른 문제`}),`다.`]}),`
`,(0,i.jsx)(t.p,{children:`측정을 아무리 정확하게 해도 — 정확성은 필요조건이지 충분조건이 아니다. 양쪽이 그 숫자를 믿고 거래하려면 제3자 검증·discrepancy 설명·방법론 공개·약한 쪽 보호가 같이 와야 한다.`}),`
`,(0,i.jsx)(t.p,{children:`신입 때는 "정확하게만 측정하면 된다"고 생각했다. 시간이 지나니 정확한 숫자를 양쪽이 안 믿어서 매번 분쟁하는 걸 봤다. 신뢰는 정확성 위에 따로 설계하는 레이어다.`}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`"정확하면 신뢰한다" 가정`}),`: 정확해도 양쪽 이해가 반대면 의심은 구조적으로 남는다. 신뢰는 따로 설계.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`discrepancy 숨기기`}),`: 0% 일치를 주장하면 작은 차이도 조작 의심. discrepancy를 정상으로 사전 설명.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`방법론 블랙박스`}),`: 검증 불가능한 숫자는 불신. 측정 방법 공개.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`한쪽에 유리한 조용한 변경`}),`: 신뢰가 비대칭적으로 빠르게 무너진다. 양쪽 동시 투명 공지.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`제3자 검증을 비용으로만 봄`}),`: MMP·검증 도구는 비용이 아니라 신뢰 인프라. 양쪽 설득의 중립 기준.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsx)(t.p,{children:`양면 시장에서 데이터 신뢰는 측정 정확도와 다른 문제다. 양쪽의 이해가 정반대이므로, 플랫폼이 아무리 정확해도 양쪽은 구조적으로 의심한다.`}),`
`,(0,i.jsx)(t.p,{children:`신뢰는 설계한다. 제3자 검증으로 중립 기준을 만들고, discrepancy를 정상으로 설명하고, 방법론을 공개하고, 약한 쪽을 기본값으로 보호한다. 그리고 데이터 변경은 양쪽에 동시에 투명하게.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/essays/two-sided-market-decisions`,children:`양면 시장에서 결정하기`}),`의 연장이다. 거기서 "양쪽이 떠나지 않게 결정한다"였다면, 여기서는 "양쪽이 숫자를 믿게 설계한다"이다. 둘 다 양면 시장의 같은 구조에서 나온다 — 한쪽만 보면 다른 쪽이 무너진다.`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}var y=e({default:()=>S,frontmatter:()=>b}),b={title:`자율성을 어디까지 넘길까 — AI와 사람 위임의 보정`,date:`2026-05-29`,summary:`위임은 0 아니면 1이 아니다. 승인 게이트에서 시작해 검증된 결과로 자율성을 점진적으로 넓힌다. AI 에이전트든 주니어 엔지니어든 같은 보정 원리가 작동한다.`,readingTime:`7분`,status:`Draft`};function x(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`위임은 스위치가 아니라 다이얼`}),`
`,(0,i.jsx)(t.p,{children:`위임을 "맡긴다 / 안 맡긴다"의 이분법으로 보면 둘 다 실패한다. 다 맡기면 통제 불능, 안 맡기면 위임의 의미가 없다.`}),`
`,(0,i.jsxs)(t.p,{children:[`위임은 `,(0,i.jsx)(t.strong,{children:`다이얼`}),`이다. 자율성 수준을 0에서 100까지 돌릴 수 있고, 그 위치를 결과로 보정한다. AI 에이전트에게 일을 맡길 때도, 주니어 엔지니어에게 맡길 때도, 외주에 맡길 때도 같은 보정 원리가 작동한다.`]}),`
`,(0,i.jsx)(t.h2,{children:`자율성 5단계`}),`
`,(0,i.jsx)(t.p,{children:`위임의 자율성을 5단계로 나눠 본다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`L1 — 제안만`}),`: 실행자가 안을 내고, 모든 실행은 위임자가. ("이렇게 하면 어떨까요?")`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`L2 — 승인 후 실행`}),`: 실행자가 안을 내고 위임자 승인 후 실행. ("이렇게 할게요, 괜찮나요?")`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`L3 — 실행 후 보고`}),`: 실행자가 실행하고 사후 보고. 위임자는 되돌릴 수 있음. ("이렇게 했어요")`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`L4 — 예외만 보고`}),`: 실행자가 알아서 하고 문제 시에만 보고. ("문제 있으면 알릴게요")`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`L5 — 완전 위임`}),`: 위임자가 관여 안 함. ("알아서 하세요")`]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`핵심은 `,(0,i.jsx)(t.strong,{children:`이 단계를 작업·실행자·맥락마다 다르게`}),` 두고, 고정하지 않는 것이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`보정 신호는 결과다 (느낌이 아니라)`}),`
`,(0,i.jsxs)(t.p,{children:[`자율성을 넓힐지 좁힐지는 `,(0,i.jsx)(t.strong,{children:`검증된 결과`}),`로 결정한다. "잘하는 것 같다"는 느낌이 아니라.`]}),`
`,(0,i.jsx)(t.p,{children:`위임을 시작할 때:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`L2(승인 후 실행)에서 시작`}),`
`,(0,i.jsx)(t.li,{children:`결과를 검증 — 빌드 통과? 기준 충족? 약속한 것 했나?`}),`
`,(0,i.jsx)(t.li,{children:`검증된 성공이 누적되면 → 한 단계 넓힘 (L3)`}),`
`,(0,i.jsx)(t.li,{children:`한 번의 검증된 실패 → 한 단계 좁힘 (L2로 복귀)`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`신뢰는 결과로 쌓이고 결과로 깎인다. `,(0,i.jsx)(t.strong,{children:`검증 가능한 작업일수록 자율성을 빨리 넓힐 수 있다.`}),` 검증이 안 되는 작업(주관적 품질)은 자율성을 넓히기 어렵다 — 그래서 `,(0,i.jsx)(t.a,{href:`/notes/operationalizing-vague-requests`,children:`모호한 지시를 측정 기준으로`}),` 바꾸는 게 자율성 확대의 전제다.`]}),`
`,(0,i.jsx)(t.h2,{children:`실제 보정의 모양`}),`
`,(0,i.jsx)(t.p,{children:`콘텐츠 작업을 AI에게 위임한 흐름이 이 보정을 그대로 보여준다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`처음: "글 5개 써줘" — 결과를 매번 확인 (L2-L3)`}),`
`,(0,i.jsx)(t.li,{children:`결과 검증: 빌드 통과, 다양성 확보, cross-link 무결성 → 성공 누적`}),`
`,(0,i.jsx)(t.li,{children:`다음: "5개 더, 10개 개선" — 더 큰 범위 위임 (L3)`}),`
`,(0,i.jsx)(t.li,{children:`또 검증 성공 → "다 적용해줘" — 판단까지 위임 (L4에 가까움)`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`각 단계 확대의 근거는 `,(0,i.jsx)(t.strong,{children:`직전 결과의 검증`}),`이었다. 빌드가 깨졌거나 약속한 다양성이 없었다면 자율성을 좁혔을 것이다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`반대 방향도 중요하다. 한 번 YAML 함정으로 빌드가 깨졌을 때 — 그건 자율성을 좁히는 게 아니라 `,(0,i.jsx)(t.strong,{children:`검증 루프를 강화`}),`하는 신호였다(빌드 전 점검 추가). 실패의 원인이 실행자 판단이면 자율성을 좁히고, 검증 공백이면 검증을 강화한다. 둘을 구분해야 한다.`]}),`
`,(0,i.jsx)(t.h2,{children:`AI와 사람의 차이`}),`
`,(0,i.jsx)(t.p,{children:`같은 보정 원리지만 AI와 사람은 다른 점이 있다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`AI는 학습이 누적 안 된다 (세션 간).`}),` 사람 주니어는 한 번 가르치면 다음에 기억한다. AI는 세션이 바뀌면 리셋된다. 그래서 AI의 자율성 확대는 `,(0,i.jsx)(t.strong,{children:`시스템에 박아야`}),` 한다 — 메모리, 프롬프트 규칙, 검증 자동화. 사람은 신뢰를 사람에게 부여하지만, AI는 신뢰를 시스템에 부여한다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`AI는 자신감과 실력이 비례 안 한다.`}),` 사람은 모르면 보통 머뭇거린다. AI는 틀린 답도 자신 있게 한다. 그래서 AI 자율성은 "확신도"가 아니라 `,(0,i.jsx)(t.strong,{children:`검증 결과로만`}),` 넓혀야 한다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`되돌리기 비용이 다르다.`}),` AI는 빠르게 많이 만들어서 한 번에 큰 변경을 낸다. L3(사후 보고)에서도 변경 폭이 크면 되돌리기 비용이 크다. AI에겐 자율성과 함께 `,(0,i.jsx)(t.strong,{children:`변경 단위를 작게`}),` 유지하는 제약이 필요하다.`]}),`
`,(0,i.jsx)(t.h2,{children:`좁혀야 할 신호`}),`
`,(0,i.jsx)(t.p,{children:`자율성을 넓히는 것만큼 좁히는 판단도 중요하다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`검증 없이 통과시킨 결과에서 문제 발견 → 검증 강화 + 자율성 한 단계 ↓`}),`
`,(0,i.jsxs)(t.li,{children:[`같은 종류 실수 반복 → `,(0,i.jsx)(t.a,{href:`/notes/recurring-trap-to-checklist`,children:`재발은 시스템 공백`}),`, 검사 추가`]}),`
`,(0,i.jsx)(t.li,{children:`맥락이 바뀜 (새 도메인·높은 리스크) → 익숙한 영역의 자율성을 낯선 영역에 그대로 적용하지 않기`}),`
`,(0,i.jsx)(t.li,{children:`되돌리기 비용이 큰 결정(one-way door) → 자율성 무관하게 L2로`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`특히 마지막. `,(0,i.jsx)(t.a,{href:`/notes/one-way-two-way-door`,children:`one-way door`}),` 결정은 실행자가 아무리 신뢰받아도 승인 게이트를 둔다. 자율성은 되돌릴 수 있는 영역에서 넓힌다.`]}),`
`,(0,i.jsx)(t.h2,{children:`과소 위임의 비용`}),`
`,(0,i.jsx)(t.p,{children:`위임 글은 보통 "너무 많이 맡기지 말라"고 끝난다. 반대도 비용이다.`}),`
`,(0,i.jsxs)(t.p,{children:[`L2(매번 승인)에 머물면 위임자가 병목이 된다. 실행자는 매번 기다리고, 위임자는 매번 검토한다. 검증된 성공이 쌓였는데도 자율성을 안 넓히면 — 그건 신중함이 아니라 `,(0,i.jsx)(t.strong,{children:`위임 실패`}),`다. 생산성이 위임자 속도에 묶인다.`]}),`
`,(0,i.jsx)(t.p,{children:`좋은 보정은 양방향이다. 성공엔 넓히고 실패엔 좁힌다. 한 방향으로만 고정된 다이얼은 보정이 아니다.`}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`느낌으로 자율성 결정`}),`: "잘하는 것 같다"로 넓히면 검증 안 된 신뢰. 결과로만.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`한 번 정한 자율성 고정`}),`: 작업·맥락이 바뀌어도 그대로 → 과/소 위임. 매번 재보정.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`실패 원인 오진`}),`: 검증 공백을 실행자 탓으로 (자율성만 좁힘) 또는 그 반대. 원인을 구분.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`AI 자율성을 세션에 의존`}),`: AI는 세션 간 학습 안 됨. 자율성 확대는 시스템(메모리·자동화)에 박기.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`one-way door에 높은 자율성`}),`: 되돌리기 비용 큰 결정은 신뢰 무관 승인 게이트.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`과소 위임을 신중함으로 합리화`}),`: 검증된 성공이 쌓였는데 안 넓히면 위임자가 병목. 넓히는 것도 보정.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsxs)(t.p,{children:[`위임은 스위치가 아니라 다이얼이다. 승인 게이트(L2)에서 시작해 `,(0,i.jsx)(t.strong,{children:`검증된 결과로`}),` 자율성을 점진적으로 넓히고, 검증된 실패로 좁힌다. 느낌이 아니라 결과가 보정 신호다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`AI든 사람이든 원리는 같다. 다만 AI는 신뢰를 사람이 아니라 `,(0,i.jsx)(t.strong,{children:`시스템에 부여`}),`하고, 검증을 자동화해야 자율성을 안전하게 넓힐 수 있다. 그래서 위임을 잘하는 것과 검증 루프를 잘 만드는 것은 같은 일이다 — 검증할 수 없으면 위임할 수도 없다.`]}),`
`,(0,i.jsx)(t.p,{children:`지난 2주의 콘텐츠 작업이 이 보정의 작은 사례였다. 매 라운드 결과를 검증(빌드·링크·다양성)하면서 자율성을 넓혔고, 빌드가 깨진 자리에선 자율성이 아니라 검증을 강화했다. 위임의 다이얼은 결과를 볼 수 있을 때만 안전하게 돌아간다.`})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}var C=e({default:()=>E,frontmatter:()=>w}),w={title:`결정론적 디자인 루프 — 미적 결정을 객관화하기`,date:`2026-05-19`,summary:`디자인은 보통 주관적이지만, rubric + 페르소나 평가 + 통과 임계로 분해하면 코드처럼 "통과까지 반복"하는 결정론적 루프가 가능하다.`,readingTime:`5분`,status:`Draft`};function T(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`디자이너 없이 디자인 사이클을 돌렸습니다`}),`
`,(0,i.jsxs)(t.p,{children:[`이 사이트를 다듬으면서 한 가지를 시험해봤습니다. "예쁘다 / 별로다"라는 주관 평가를, 코드 테스트처럼 객관화할 수 있을까. `,(0,i.jsx)(t.a,{href:`/notes/deterministic-loop`,children:`사람 개입 없이 스스로 검증하는 결정론적 루프`}),`를 돌리며 통과할 때까지 자동으로 개선되게 만들 수 있을까.`]}),`
`,(0,i.jsx)(t.p,{children:`결론부터 말하면, 가능했습니다. 디자인의 모호함은 절반쯤 신화에 가까웠습니다.`}),`
`,(0,i.jsx)(t.h2,{children:`시작점 — "엄청 못생겼어"`}),`
`,(0,i.jsxs)(t.p,{children:[`리뷰 한 줄: `,(0,i.jsx)(t.strong,{children:`"엄청 못생겼어."`}),` 이게 1차 피드백이었습니다.`]}),`
`,(0,i.jsx)(t.p,{children:`이 문장은 정보가 없는 듯하지만, 사실 풍부합니다. "엄청"이라는 강도와 "못생겼다"는 방향. 두 가지가 모두 들어 있습니다. 다만 어디가 못생겼는지는 안 들어 있죠.`}),`
`,(0,i.jsx)(t.p,{children:`이걸 그대로 "더 예쁘게 만들어보자"로 받으면 다시 같은 곳에서 막힙니다. 평가가 사람의 직관에 묶여 있으면 진전 속도가 그 사람의 한 마디에 의존하니까요.`}),`
`,(0,i.jsx)(t.h2,{children:`분해 — rubric`}),`
`,(0,i.jsx)(t.p,{children:`대신 한 단계 거쳤습니다. "세련된"이 무엇으로 구성되어 있는가.`}),`
`,(0,i.jsx)(t.p,{children:`분해해보면 디자인은 8축 정도로 쪼개졌습니다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`컬러 팔레트의 톤·일관성`}),`
`,(0,i.jsx)(t.li,{children:`타이포그래피의 위계·가독성`}),`
`,(0,i.jsx)(t.li,{children:`레이아웃·여백`}),`
`,(0,i.jsx)(t.li,{children:`시각 일관성 (토큰 단일 source)`}),`
`,(0,i.jsx)(t.li,{children:`인터랙션 디테일`}),`
`,(0,i.jsx)(t.li,{children:`모바일 반응형`}),`
`,(0,i.jsx)(t.li,{children:`첫인상·임팩트`}),`
`,(0,i.jsx)(t.li,{children:`차별화·기억성`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`각 축에 5점 만점으로 채점할 수 있다면, "세련된"은 더 이상 모호한 형용사가 아닙니다. `,(0,i.jsx)(t.strong,{children:`숫자 8개`}),`입니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`평가자 — 페르소나 분리`}),`
`,(0,i.jsx)(t.p,{children:`채점을 누가 하느냐도 중요했습니다. 한 사람(또는 한 모델)이 전부 채점하면 한 가지 시야에 갇힙니다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 페르소나를 분리해서 평가하게 했습니다. 각자 자기 영역에서만 채점합니다.`}),`
`,(0,i.jsx)(t.p,{children:`디자인 사이클에서는 네 명을 썼습니다 — 디자이너(컬러·타이포·일관성), 엔지니어(인터랙션·접근성·반응형), 기획자(정보 구조·차별화), 채용 담당자(첫인상). 이어진 모바일 최적화 사이클에서는 채용 담당자를 빼고 세 명만 — 모바일은 시장 임팩트보다 구현 디테일이 압도적이라 판단했기 때문입니다.`}),`
`,(0,i.jsx)(t.p,{children:`영역이 겹치는 항목은 두 명 평균. 이게 cross-check 역할을 합니다.`}),`
`,(0,i.jsx)(t.h2,{children:`통과 임계`}),`
`,(0,i.jsxs)(t.p,{children:[`평균 4.5/5. 모든 항목 ≥ 4. FAIL 0개. BLOCKING UNVERIFIED 0개. `,(0,i.jsx)(t.a,{href:`/notes/quality-gate-loop`,children:`quality-gate의 평가·개선 루프`}),`와 같은 통과 기준입니다.`]}),`
`,(0,i.jsx)(t.p,{children:`평균 4.5는 단순한 기준이지만, "모든 항목 ≥ 4"가 결정적입니다. 평균을 깎는 한 항목이 결국 사용자가 느끼는 약점이니까요. 평균 4.7이어도 한 항목이 2점이면 통과 못 합니다.`}),`
`,(0,i.jsx)(t.h2,{children:`첫 사이클 — 평균 3.28`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`컬러 팔레트 2/5 (BLOCKING)`}),`
`,(0,i.jsx)(t.li,{children:`시각 일관성 2/5`}),`
`,(0,i.jsx)(t.li,{children:`타이포그래피 3/5`}),`
`,(0,i.jsx)(t.li,{children:`첫인상 3/5`}),`
`,(0,i.jsx)(t.li,{children:`...`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`페르소나가 코드 라인까지 인용하며 채점했습니다. "index.css:67의 site-nav background가 `,(0,i.jsx)(t.code,{children:`rgba(244, 241, 232, 0.92)`}),` cream 잔재 — themes.css color-mix가 cascade로 덮지만 순서 의존."`]}),`
`,(0,i.jsx)(t.p,{children:`추상적 피드백이 아니라 정확한 좌표가 나오면, 다음 액션도 정확해집니다.`}),`
`,(0,i.jsx)(t.h2,{children:`개선 사이클`}),`
`,(0,i.jsxs)(t.p,{children:[`페르소나의 `,(0,i.jsx)(t.code,{children:`top_3_fixes`}),`를 받아 그대로 코드에 적용했습니다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`cream `,(0,i.jsx)(t.code,{children:`#faf9f5`}),` → white `,(0,i.jsx)(t.code,{children:`#ffffff`})]}),`
`,(0,i.jsxs)(t.li,{children:[`burnt orange `,(0,i.jsx)(t.code,{children:`#c2410c`}),` → indigo `,(0,i.jsx)(t.code,{children:`#4f46e5`})]}),`
`,(0,i.jsxs)(t.li,{children:[`하드코딩 hex 30개 + rgba 12개 → `,(0,i.jsx)(t.code,{children:`var(--*)`}),` 일괄 치환`]}),`
`,(0,i.jsx)(t.li,{children:`font-weight 950/900 → 600/700 다이어트`}),`
`,(0,i.jsx)(t.li,{children:`sepia 테마 삭제 (사용자가 누런 톤을 싫어하므로 가장 누런 sepia는 가장 약점)`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`이 변경은 사람이 "더 세련되게 해야지"라는 직관에서 나온 게 아니라, `,(0,i.jsx)(t.strong,{children:`페르소나 평가가 짚은 좌표`}),`에 정확히 대응합니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`두 번째 사이클 — 평균 4.44`}),`
`,(0,i.jsx)(t.p,{children:`8개 항목 중 5개가 5점, 3개가 4점. 평균 4.44.`}),`
`,(0,i.jsx)(t.p,{children:`다만 4.5 임계 0.06 미달. 통과 못 함.`}),`
`,(0,i.jsx)(t.p,{children:`여기서 두 가지 선택지가 있었습니다.`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsx)(t.li,{children:`4.44를 "사실상 통과"로 보고 종료`}),`
`,(0,i.jsx)(t.li,{children:`한 사이클 더`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`저는 두 번째로 갔습니다. 임계를 임의로 낮추면 시스템 자체가 약해지니까요.`}),`
`,(0,i.jsx)(t.h2,{children:`세 번째 사이클 — 평균 4.75`}),`
`,(0,i.jsx)(t.p,{children:`남은 4점 항목 5개 중 가장 점수 영향이 큰 3개 처리. 평균 4.75/5. 모든 항목 ≥ 4. PASS.`}),`
`,(0,i.jsx)(t.h2,{children:`세 사이클이 남긴 세 가지`}),`
`,(0,i.jsx)(t.p,{children:`세 사이클을 돌리고 나서 세 가지를 확인했습니다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`첫째`}),`, "주관적"이라고 느껴지는 디자인 판단의 80%는 사실 객관적입니다. 토큰 일관성, HIG 준수, 타이포 위계 — 모두 측정 가능합니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`둘째`}),`, 진짜 주관적인 20%(예: "burnt-orange vs indigo가 더 어울리는가")가 남지만, 그것도 페르소나가 `,(0,i.jsx)(t.em,{children:`근거`}),`로 좁힐 수 있습니다 — "사용자가 누런 톤을 싫어한다 → orange는 누런 베이스와 동계열이라 강화"처럼.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`셋째`}),`, `,(0,i.jsx)(t.strong,{children:`최저 항목이 통과를 결정합니다. 평균이 아니라.`}),` 사용자가 보는 건 가장 약한 곳이지 평균이 아니니까요.`]}),`
`,(0,i.jsx)(t.h2,{children:`코드 너머로`}),`
`,(0,i.jsx)(t.p,{children:`이 루프는 디자인에만 적용되지 않습니다. 콘텐츠·정보 구조·심지어 글쓰기에도 적용 가능합니다. 핵심은:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`모호한 목표를 측정 가능한 축으로 분해`}),`
`,(0,i.jsx)(t.li,{children:`다각도 페르소나`}),`
`,(0,i.jsx)(t.li,{children:`평균이 아니라 최저 통과 기준`}),`
`,(0,i.jsx)(t.li,{children:`매몰 방지를 위한 사이클 제한`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`"잘해" 같은 문장 대신 "이 8개 축이 모두 4점 이상인가"로 바꿀 수 있다면, 작업의 생산성이 사람 속도에서 기계 속도로 옮겨갑니다.`}),`
`,(0,i.jsx)(t.p,{children:`이 사이트 자체가 그 실험의 산물입니다.`})]})}function E(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(T,{...e})}):T(e)}var D=e({default:()=>A,frontmatter:()=>O}),O={title:`디지털 가든의 휴경기 — 매일 작성 후 공백이 가르치는 것`,date:`2026-05-26`,summary:`5일간 사이트에 새 글이 안 올라왔다. 이전 3일간 매일 N편씩 양산했던 패턴이 갑자기 멈춘 게 실패가 아니라 운영의 일부였다는 관찰.`,readingTime:`5분`,status:`Published`};function k(e){let t={a:`a`,blockquote:`blockquote`,em:`em`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`5일간 공백`}),`
`,(0,i.jsx)(t.p,{children:`5/19부터 5/21까지 3일간 30편 가까운 콘텐츠를 추가했다. 사이트 리빌드, Note 라운드 2, 케이스 추가, 9편 레포 인터뷰. git log가 빽빽했다.`}),`
`,(0,i.jsx)(t.p,{children:`그리고 5/22부터 5/26까지 5일간 새 글이 0편이다. 같은 사이트, 같은 손, 같은 작업 환경. 그런데 공백.`}),`
`,(0,i.jsxs)(t.p,{children:[`처음에는 게으름이라 생각했다. 그런데 곰곰이 보니 다른 그림이 보인다. 이 공백은 운영의 `,(0,i.jsx)(t.strong,{children:`휴경기`}),`다.`]}),`
`,(0,i.jsx)(t.h2,{children:`농지 비유`}),`
`,(0,i.jsxs)(t.p,{children:[`농지는 매년 같은 자리에 같은 작물을 심으면 지력이 떨어진다. 한 시즌 비워두면 — 휴경하면 — 흙이 회복된다. 이때 흙은 멈춰 있는 게 아니라 `,(0,i.jsx)(t.strong,{children:`다음 시즌의 자양분을 누적`}),`하고 있다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`디지털 가든도 같다. 매일 새 글을 쓰면 처음에는 가파르게 자란다. 그러다 어느 시점에 글이 양산되지 않고 `,(0,i.jsx)(t.strong,{children:`얕아진다`}),`. 같은 주제를 다른 각도로 한 번 더 쓰는 식의 반복.`]}),`
`,(0,i.jsx)(t.p,{children:`이 시점에 강제로 더 쓰면 가든이 노이즈로 채워진다. 반대로 잠깐 비워두면 다음 라운드의 시드가 흙 속에 누적된다.`}),`
`,(0,i.jsx)(t.h2,{children:`5일 공백 동안 일어난 일`}),`
`,(0,i.jsx)(t.p,{children:`5일간 글은 안 썼지만 머릿속에서 다른 일이 일어났다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`5/19-5/21에 쓴 글들을 다시 읽었다. "이 글이 정말 가치 있나"를 거리를 두고 봤다.`}),`
`,(0,i.jsx)(t.li,{children:`라운드 2에서 채운 함정 섹션이 빈 다른 노트들이 보였다. 다음 라운드 시드.`}),`
`,(0,i.jsx)(t.li,{children:`새 토픽 후보가 떠올랐다. 5일 동안 일하면서 자연스럽게.`}),`
`,(0,i.jsx)(t.li,{children:`사이트의 운영 자체에 대한 메타 관찰이 생겼다 (이 글이 그 결과).`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`만약 5일을 더 양산으로 채웠다면 이 메타 관찰은 안 나왔다. 새 글이 안 나오는 시간이 메타 관찰을 가능하게 만들었다.`}),`
`,(0,i.jsx)(t.h2,{children:`휴경의 두 종류`}),`
`,(0,i.jsx)(t.p,{children:`휴경에도 종류가 있다. 같은 공백이지만 의미가 다르다.`}),`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`A. 자연스러운 휴경`})}),`
`,(0,i.jsx)(t.p,{children:`직전 라운드가 흙을 다 썼다. 양산할 토픽이 머릿속에 없다. 한 번 더 쓰려고 하면 라운드 N의 글을 다시 쓰는 식이 된다.`}),`
`,(0,i.jsx)(t.p,{children:`이때는 멈춘다. 강제로 쓰면 가든이 노이즈로 채워진다. 며칠 비워두면 다음 라운드의 시드가 자연스럽게 떠오른다.`}),`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`B. 회피성 휴경`})}),`
`,(0,i.jsx)(t.p,{children:`토픽은 있는데 쓰기 싫다. 함정 섹션 채우기가 귀찮다. 라운드 2 cross-link가 작업량이 크다.`}),`
`,(0,i.jsx)(t.p,{children:`이건 회피다. 휴경의 외피를 입었지만 본질은 미루기다. 며칠이 지나도 시드가 안 떠오르고 가든이 정체된다.`}),`
`,(0,i.jsx)(t.p,{children:`A와 B를 구분 못하면 운영이 무너진다. A를 회피라 오해해서 강제로 쓰면 노이즈, B를 자연스러움이라 오해해서 미루면 정체.`}),`
`,(0,i.jsx)(t.h2,{children:`어떻게 구분하나`}),`
`,(0,i.jsx)(t.p,{children:`세 가지 신호로 본다.`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`시드의 자연 발생`}),`: 자연스러운 휴경에서는 며칠 안에 새 토픽 시드가 떠오른다. 회피 휴경에서는 안 떠오른다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`거리감의 변화`}),`: 자연 휴경에서는 이전 글들을 다시 읽을 때 거리감이 생긴다. "이 글은 약하다"는 객관이 보인다. 회피 휴경에서는 안 본다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`다음 라운드 시드의 모양`}),`: 자연 휴경 후 떠오르는 시드는 메타 관찰이 많다 (라운드 자체에 대한 글). 회피 휴경 후 떠오르는 시드는 직전 라운드의 연장이다 (같은 토픽).`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`이 글이 자연 휴경 후의 결과다. 5일 동안 시드가 자연스럽게 떠올랐고, 거리감이 생겼고, 메타 관찰 종류의 시드가 떠올랐다.`}),`
`,(0,i.jsx)(t.h2,{children:`휴경을 운영의 일부로`}),`
`,(0,i.jsx)(t.p,{children:`만약 휴경이 운영의 일부라면 매일 양산이 목표가 아니다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`라운드 → 휴경 → 다음 라운드`}),`의 사이클이 목표다. 라운드는 양산기, 휴경은 발효기. 둘 다 운영의 일부.`]}),`
`,(0,i.jsxs)(t.p,{children:[`블로그처럼 매일 글을 올리는 게 목표인 운영이 아니다. `,(0,i.jsx)(t.a,{href:`/notes/digital-garden-vs-blog`,children:`디지털 가든은 블로그보다 운영 부담이 적다`}),` — 자라야 하지만 `,(0,i.jsx)(t.strong,{children:`다음 라운드의 시드를 누적하는 시간`}),`도 필요하다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`매일 양산이 미덕이 아니라, `,(0,i.jsx)(t.strong,{children:`라운드와 휴경을 잘 운영하는 게 미덕`}),`이다. 라운드 동안은 최대 양산, 휴경 동안은 거리감과 시드 누적.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.p,{children:[`가장 큰 함정은 `,(0,i.jsx)(t.strong,{children:`휴경을 실패로 인식`}),`하는 것이다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"이번 주 새 글 0편" → 실패?`}),`
`,(0,i.jsx)(t.li,{children:`"이번 라운드 30편 + 다음 라운드 시드 5개 + 거리감 관찰 3개" → 운영의 일부`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`지표를 글 N편으로만 잡으면 휴경은 실패다. 라운드 단위로 잡으면 휴경은 운영이다. 게시일 대신 `,(0,i.jsx)(t.a,{href:`/notes/last-tended-signal`,children:`lastTendedAt 신호`}),`로 보면, 휴경 중에도 사이트는 멈춘 게 아니다.`]}),`
`,(0,i.jsx)(t.p,{children:`다른 함정도 있다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`휴경을 너무 길게 끌기`}),`. 자연 휴경이라도 무한정 끌면 회피로 전환된다. 휴경의 적정 기간은 3-7일 정도다. 그 이상은 다음 라운드의 시드가 흩어진다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`휴경 중에 다른 활동 0`}),`. 휴경은 글을 안 쓰는 거지 다른 활동까지 멈추는 게 아니다. 일·읽기·다른 프로젝트는 계속한다. 그게 다음 라운드의 자양분이다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`휴경 끝나면 다시 N편 양산이라는 압박`}),`. 휴경 후 라운드는 휴경 전과 같은 양일 필요가 없다. 자연스러운 양만 양산하면 된다. 강제 N편이 다음 휴경을 더 빨리 부른다.`]}),`
`,(0,i.jsx)(t.h2,{children:`다음 라운드의 시드`}),`
`,(0,i.jsx)(t.p,{children:`이 글을 쓰면서 다음 라운드의 시드가 명확해졌다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`라운드 패턴 자체에 대한 노트 (메타)`}),`
`,(0,i.jsx)(t.li,{children:`휴경의 종류 구분 (이 글의 일부)`}),`
`,(0,i.jsx)(t.li,{children:`라운드별 적정 사이즈`}),`
`,(0,i.jsx)(t.li,{children:`가든 hygiene 체크리스트`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`이게 휴경의 산출물이다. 휴경 동안 글 0편이지만 다음 라운드의 도면이 그려졌다. 가든이 자라기 위한 시간이 흘렀다.`}),`
`,(0,i.jsx)(t.h2,{children:`한 줄`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsxs)(t.p,{children:[`디지털 가든은 매일 자라는 게 아니다. `,(0,i.jsx)(t.strong,{children:`라운드와 휴경이 번갈아 운영되는 시스템`}),`이다. 5일 공백은 정체가 아니라 다음 라운드의 시드가 발효되는 시간이다.`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`휴경이 끝나가는 게 느껴진다. 다음 라운드의 시드가 충분히 누적됐다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:`(2026-06 갱신)`}),` 이후 이 양산의 일부를 주간 봇에게 넘겼다 — 봇이 매주 초안을 낸다. 하지만 라운드/휴경의 리듬 판단은 여전히 사람의 몫이다. 봇이 초안을 내도 무엇을 키우고 무엇을 묵힐지는 휴경 신호로 본다. 자동화가 휴경 개념을 폐기한 게 아니라, 양산의 손만 옮겼을 뿐이다. 관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-08-writing-bot-reversal`,children:`/logs#2026-06-08-writing-bot-reversal`})]})]})}function A(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}var j=e({default:()=>P,frontmatter:()=>M}),M={title:`본인 페르소나로 자기를 검토하기 — 외부 시야가 못 짚는 BLOCKING`,date:`2026-05-19`,summary:`외부 페르소나는 시스템이 동작하는지 봅니다. 본인 페르소나는 시스템 안에서 살아야 하는지 봅니다. 가장 솔직한 BLOCKING은 후자에서 나옵니다.`,readingTime:`4분`,status:`Published`};function N(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`진짜 BLOCKING을 짚은 건 누구였나`}),`
`,(0,i.jsx)(t.p,{children:`오늘 자동화 PoC를 4 페르소나로 평가했습니다. 시니어 자동화 엔지니어, 보안 검토자, 콘텐츠 전략가, 그리고 운영 사용자 본인.`}),`
`,(0,i.jsx)(t.p,{children:`세 외부 페르소나는 모두 "기능적 위험"을 잡았습니다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`엔지니어: measurement·복구·운영 비용`}),`
`,(0,i.jsx)(t.li,{children:`보안: NDA·credentials·incident response`}),`
`,(0,i.jsx)(t.li,{children:`콘텐츠 전략가: 톤 일관성·자동 발행 신뢰성`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`이게 안전한 시스템 설계의 표준 체크리스트입니다. 다 정확합니다.`}),`
`,(0,i.jsx)(t.p,{children:`그런데 누구도 짚지 못한 게 있었습니다.`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`"이 시스템이 6개월 후에도 사용될까?"
"회사 스프린트 시즌에도 매일 7분이 가능한가?"
"한 달 쉬었다가 다시 시작할 동기가 있는가?"`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`이 질문들은 시스템이 `,(0,i.jsx)(t.strong,{children:`동작하는지`}),`가 아니라 `,(0,i.jsx)(t.strong,{children:`살아남는지`}),`를 묻습니다. 외부 페르소나의 모범 답변지에는 없는 항목입니다.`]}),`
`,(0,i.jsx)(t.p,{children:`답을 짚은 건 본인 페르소나였습니다.`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`"honest_likelihood_of_sustained_use: 35%"
"내가 가장 두려운 건 검토 부담이 아니라 회사 정보 유출 1건이다."`}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`왜 본인 페르소나가 다른가`}),`
`,(0,i.jsxs)(t.p,{children:[`외부 페르소나는 시스템이 `,(0,i.jsx)(t.strong,{children:`동작하는 시나리오`}),`를 봅니다. 본인 페르소나는 시스템 안에서 `,(0,i.jsx)(t.strong,{children:`살아야 하는 시나리오`}),`를 봅니다.`]}),`
`,(0,i.jsx)(t.p,{children:`세 가지 결정적 차이가 있습니다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`첫째, 시간 지속성을 안다.`}),` 6개월 후의 자기를 시뮬레이션할 수 있는 건 본인뿐입니다. 외부 페르소나는 "오늘 출시되는 시스템"만 봅니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`둘째, 회사 일정을 안다.`}),` 스프린트 시즌의 압박, 회의 폭증, 휴가 빈도. 외부 시야는 평일 9시-6시 가상 시나리오에서 평가합니다. 본인은 진짜 일정을 압니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`셋째, 자기 인내심을 안다.`}),` 새 시스템에 대한 흥미는 첫 2주에 가장 높고 누적적으로 떨어집니다. 자동화로 만든 검토 부담이 30일째에 견딜 수 있는지는 본인만 솔직히 평가할 수 있습니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`"지속률 35%"라는 숫자가 의미하는 것`}),`
`,(0,i.jsx)(t.p,{children:`본인 페르소나가 "지속률 35%"라고 적었다는 건 이런 의미입니다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`14일 PoC 중 약 5일만 실제 운영할 것`}),`
`,(0,i.jsx)(t.li,{children:`사이클이 깨지면 다시 시작할 동기 없음`}),`
`,(0,i.jsx)(t.li,{children:`회사 일정에 밀리면 자연 중단`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`세 외부 페르소나가 "기술적으로 완벽"이라고 결론 내려도, 본인이 "안 쓸 것 같다"고 하면 시스템 가치는 0입니다. 35%는 BLOCKING입니다. 아니, 외부 페르소나가 짚을 수 없는 차원의 BLOCKING이라 더 위험합니다.`}),`
`,(0,i.jsx)(t.p,{children:`이게 보이지 않으면, "기능적으로 완벽한 시스템을 만들고 6개월 후 폐기"가 반복됩니다. 자동화 시스템의 흔한 묘지 패턴입니다.`}),`
`,(0,i.jsx)(t.h2,{children:`시스템 설계에 본인 페르소나를 포함하는 패턴`}),`
`,(0,i.jsx)(t.p,{children:`오늘 이후 저는 시스템 설계 시 다음 패턴을 적용하기로 했습니다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/self-persona-evaluation`,children:`외부 페르소나 N명 + 본인 페르소나 1명`}),`.`]}),`
`,(0,i.jsx)(t.p,{children:`본인 페르소나는 다른 페르소나와 다른 출력을 냅니다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:`honest_likelihood_of_sustained_use: 35%  ← 정량 추정
honest_concern: "이게 진짜로 무서운 부분이다"  ← 솔직한 우려
fail_cases: [
  "회사 스프린트 마감 주에 3일 연속 스킵 → 영구 중단",
  "redaction false positive 누적 → 회피 행동 시작"
]
`})}),`
`,(0,i.jsxs)(t.p,{children:[`핵심은 `,(0,i.jsx)(t.strong,{children:`honest_concern`}),`입니다. 외부 페르소나의 `,(0,i.jsx)(t.code,{children:`top_3_fixes`}),`는 "이걸 어떻게 고칠까"입니다. 본인 페르소나의 `,(0,i.jsx)(t.code,{children:`honest_concern`}),`은 "이걸 만들지 말까"입니다. 두 출력이 충돌하면 후자가 우선입니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정 — 너무 보수적일 위험`}),`
`,(0,i.jsx)(t.p,{children:`본인 페르소나가 항상 옳은 건 아닙니다. 두 가지 함정이 있습니다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`함정 1: "그냥 안 만드는 게 낫다"로 자주 끝남.`}),`
모든 시스템이 폐기되면 진전이 없습니다. 외부 페르소나의 "어떻게든 만들어야"와 cross-check이 필요합니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`함정 2: 자기 인식의 한계.`}),`
사람은 자기 행동을 평균적으로만 정확히 예측합니다. "지속률 35%"가 사실 60%일 수도, 15%일 수도 있습니다. 그래도 외부 페르소나의 "100% 가능"보다는 항상 더 정확합니다.`]}),`
`,(0,i.jsx)(t.p,{children:`mitigation 탐색을 먼저 합니다. "35%인 이유는 manual 트리거가 까먹기 쉬워서? 그러면 passive trigger + 알림으로 70%까지 끌어올릴 수 있는가?" 이렇게 본인 페르소나의 BLOCKING을 출발점으로 시스템을 다시 설계하면, 외부 페르소나만으로는 안 보였던 sustainable한 시스템이 나옵니다.`}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsxs)(t.p,{children:[`시스템이 `,(0,i.jsx)(t.strong,{children:`돌아갈지`}),`는 외부 페르소나가 알지만, 시스템이 `,(0,i.jsx)(t.strong,{children:`살아남을지`}),`는 본인 페르소나만 압니다.`]}),`
`,(0,i.jsx)(t.p,{children:`그래서 어떤 시스템 설계 토론에도 본인 페르소나를 1명 끼워 넣습니다. 다른 페르소나와 분리해서, 자기 일정·자기 인내심·자기 동기로 솔직하게 평가합니다. honest_concern이 다른 페르소나의 결론을 뒤집어도 받아들입니다.`}),`
`,(0,i.jsx)(t.p,{children:`그래야 6개월 후에도 살아있는 시스템이 만들어집니다.`})]})}function P(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}var F=e({default:()=>R,frontmatter:()=>I}),I={title:`동료에게 의존할 자리와 의존하지 말 자리 — 시니어의 균형`,date:`2026-05-28`,summary:`시니어가 되면 두 함정이 동시에 온다. 너무 자기 혼자 풀려고 해서 팀 지식을 안 쓰는 것, 그리고 매번 동료에게 물어서 자기 깊이를 안 만드는 것. 균형의 5가지 신호.`,readingTime:`6분`,status:`Draft`};function L(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`두 함정`}),`
`,(0,i.jsx)(t.p,{children:`시니어 엔지니어가 되어 가는 길에 두 함정이 동시에 온다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`함정 1 — 자기 혼자 풀기.`}),` "시니어니까 막혀도 안 보여줘야 한다"는 압박. 같은 팀의 답을 아는 사람이 있는데도 4시간 혼자 헤맨다. 결국 4시간 후에 풀려도 비용은 4시간 + 동료가 도와줬으면 4시간 안 들었다는 기회비용.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`함정 2 — 매번 동료에게 물어보기.`}),` "주니어 때는 묻는 게 좋았지" 같은 관성. 그러나 시니어가 매번 물으면 본인 깊이가 안 만들어진다. 동료의 답을 기억해도 1년 후 같은 자리에서 또 묻는다.`]}),`
`,(0,i.jsx)(t.p,{children:`이 두 함정이 동시에 온다. 어떤 자리에선 함정 1, 어떤 자리에선 함정 2. 어느 자리가 어느 함정인지를 가르는 게 시니어의 균형이다.`}),`
`,(0,i.jsx)(t.h2,{children:`의존해야 할 자리 (함정 1 회피)`}),`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`1. 도메인 지식이 본인보다 깊은 동료가 있는 자리`})}),`
`,(0,i.jsx)(t.p,{children:`광고 산업·세금·법무·금융처럼 도메인 깊이가 코드보다 더 중요한 자리. 본인이 코드 잘 짜도 도메인 모르면 잘못된 코드를 잘 짠다.`}),`
`,(0,i.jsx)(t.p,{children:`도메인 동료 5분 = 본인 검색·문서 읽기 2시간. 의존하는 게 합리적.`}),`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`2. 본인이 그 시스템에 처음 들어가는 자리`})}),`
`,(0,i.jsx)(t.p,{children:`처음 만지는 코드베이스의 trap이 있는 자리. 6개월 전 사고로 추가된 workaround, 다른 팀이 의존하는 implicit contract. 코드만 봐서 안 보이는 것들.`}),`
`,(0,i.jsx)(t.p,{children:`이 자리는 무조건 동료. "잘 알 것 같아도" 모르는 게 더 많다.`}),`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`3. 결정의 trade-off가 본인 직관 밖인 자리`})}),`
`,(0,i.jsx)(t.p,{children:`본인이 한 번도 안 만든 종류의 결정 (예: 인프라 결정, 보안 결정, 비즈니스 결정). 직관이 없으니 추측한 trade-off가 틀릴 가능성 높음.`}),`
`,(0,i.jsx)(t.p,{children:`이 자리는 동료 + 외부 자료. 본인 직관을 키울 자리가 아님.`}),`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`4. 시간이 critical하고 동료 답이 빠른 자리`})}),`
`,(0,i.jsx)(t.p,{children:`incident response·hotfix. "본인이 풀 수 있어도 1시간 걸리는데 동료가 5분 안다면" 시간 critical이면 동료. 본인 학습은 incident 후로 미룸.`}),`
`,(0,i.jsx)(t.h2,{children:`의존하지 말 자리 (함정 2 회피)`}),`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`1. 본인이 자주 만질 영역의 깊이`})}),`
`,(0,i.jsx)(t.p,{children:`자기 메인 영역(예: frontend 시니어면 React)에서 매번 동료에게 의존하면 시니어가 안 된다. 한 번씩 4시간 혼자 헤매는 게 6개월 후 자기 자산.`}),`
`,(0,i.jsxs)(t.p,{children:[`이 자리는 동료한테 묻고 싶어도 참고 본인이 푼다. 도구·검색·시도가 본인 자산이 된다. 회사에서 못 쓰는 기술은 `,(0,i.jsx)(t.a,{href:`/notes/learning-repo-sandbox-value`,children:`학습 레포를 실험장`}),`으로 삼아 깊이를 따로 만든다.`]}),`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`2. 다음 분기에도 또 만날 자리`})}),`
`,(0,i.jsx)(t.p,{children:`같은 종류 결정이 자주 반복될 자리. 매번 동료한테 물으면 동료 부담 + 본인 학습 곡선 정체.`}),`
`,(0,i.jsx)(t.p,{children:`이 자리는 한 번은 본인이 다 푼다. 두 번째 만날 때부터는 본인이 빠르게.`}),`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`3. 본인이 더 길게 그 시스템에 있을 자리`})}),`
`,(0,i.jsx)(t.p,{children:`본인이 6개월 더 있고 동료가 곧 다른 팀으로 갈 예정이면, 본인이 도메인 지식을 만들어야 한다. 동료 떠난 후 비어있게 두면 안 된다.`}),`
`,(0,i.jsx)(t.p,{children:`이 자리는 동료가 옆에 있을 때 본인이 직접 만져서 학습. 동료에게 의존하면 안 됨.`}),`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`4. 책임이 본인 영역인 자리`})}),`
`,(0,i.jsx)(t.p,{children:`본인 영역의 결정을 동료에게 의존하면 책임 소재가 흐려진다. "X가 그렇게 하라고 했어요" 같은 자세는 시니어 자세 아님.`}),`
`,(0,i.jsxs)(t.p,{children:[`본인 영역은 본인이 결정. 동료의 의견은 input이지만 결정은 본인. `,(0,i.jsx)(t.a,{href:`/notes/code-review-real-value`,children:`코드 리뷰의 진짜 가치도 코드보다 결정`}),`에 있다.`]}),`
`,(0,i.jsx)(t.h2,{children:`의존의 5가지 신호 (자기 점검)`}),`
`,(0,i.jsx)(t.p,{children:`본인이 의존을 잘 하고 있는지 자문하는 5가지:`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`같은 종류 질문을 같은 사람에게 반복?`}),` → 함정 2. 한 번은 본인이 직접.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`혼자 4시간+ 헤맸는데 동료에게 물어보면 5분?`}),` → 함정 1. 다음엔 1시간 후에 묻기.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`본인이 책임진 자리의 결정인데 동료의 답에 의존?`}),` → 함정 2. 본인 책임의 자리는 본인 결정.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`동료에게 물어본 후 답 받고 끝남?`}),` → 함정 2 진화형. 답을 받았으면 "왜 그게 답인지"까지 이해해야 함. 안 그러면 1년 후 또 묻는다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`시니어 동료에게는 물어도 주니어 동료에게는 안 물음?`}),` → 자존심 함정. 주니어가 본인보다 깊은 영역도 많다.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`균형의 운영`}),`
`,(0,i.jsx)(t.p,{children:`균형은 한 번 결정하지 않는다. 자리마다 달리 판단.`}),`
`,(0,i.jsx)(t.p,{children:`같은 사람도 시간에 따라 다르다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`입사 첫 6개월: 함정 2가 더 큼 (모든 자리에 의존하는 게 자연스러움). 함정 1 신호만 자문.`}),`
`,(0,i.jsx)(t.li,{children:`6개월 ~ 2년: 두 함정 동시. 자리별 분류 필요.`}),`
`,(0,i.jsx)(t.li,{children:`시니어 2년+: 함정 1이 더 큼 (자기 혼자 풀려는 압박). 함정 2 신호를 자문.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`본인 단계에 따라 가르는 기준이 다르다. 매번 같은 기준으로 두 함정 자문하면 됨.`}),`
`,(0,i.jsx)(t.h2,{children:`함정의 함정`}),`
`,(0,i.jsxs)(t.p,{children:[`가장 큰 메타 함정: `,(0,i.jsx)(t.strong,{children:`"함정 1·2를 잘 가르면 시니어"라고 단순화`}),`.`]}),`
`,(0,i.jsx)(t.p,{children:`실제로는:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`자리별 분류가 매번 어렵다 (도메인이 깊은지·시간 critical인지 즉판 어려움)`}),`
`,(0,i.jsx)(t.li,{children:`본인 단계가 어디인지도 헷갈림`}),`
`,(0,i.jsx)(t.li,{children:`두 함정이 같은 자리에서 같이 올 때도 있음`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`그래서 균형은 `,(0,i.jsx)(t.strong,{children:`매번 자문`}),`하는 자세. 한 번 정한 규칙으로 자동 처리가 안 된다.`]}),`
`,(0,i.jsx)(t.p,{children:`좋은 신호: 본인이 균형을 의식하고 있는 자체. 무의식적으로 모든 자리에 같은 패턴이면 균형이 깨졌다.`}),`
`,(0,i.jsx)(t.h2,{children:`동료 입장에서`}),`
`,(0,i.jsx)(t.p,{children:`본인이 동료에게 의존받는 자리도 균형이 필요하다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`매번 같은 질문이 오면: "이 질문 다음엔 어디서 답을 찾으면 좋을지" 같이 답해주기. 답만 주면 의존이 누적.`}),`
`,(0,i.jsx)(t.li,{children:`도와줘도 시간이 너무 들면: "이건 페어로 30분 같이 보자"로 페어 시간을 명시. 답을 그냥 주지 않고 같이 보면서 본인이 추측·검증하게.`}),`
`,(0,i.jsx)(t.li,{children:`본인이 답을 모르면 솔직히: "나도 잘 몰라"가 신뢰. 답을 추측해서 주면 잘못된 학습.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`동료 입장의 균형이 잘 되어야 본인의 균형도 동작한다.`}),`
`,(0,i.jsx)(t.h2,{children:`본인 사례`}),`
`,(0,i.jsx)(t.p,{children:`본인이 가장 자주 빠진 함정은 함정 1 (자기 혼자 풀기). 시니어 압박 + 자존심. 4시간 헤맸는데 동료한테 묻고 5분에 풀린 경험이 여러 번.`}),`
`,(0,i.jsx)(t.p,{children:`이게 학습이 되긴 했다. 4시간 동안 다른 방법 시도하고 트레이드오프 봐서. 그러나 같은 비용을 다른 자리에서 더 큰 학습으로 쓸 수 있었다. 4시간 다 쓰기 전 1시간 후에 물었어야 했다.`}),`
`,(0,i.jsx)(t.p,{children:`지금 운영 규칙은 이렇다.`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`1시간 안에 진전이 없으면 동료한테 묻는다. 단, 묻기 전에 무엇을 시도했고 무엇이 안 됐는지 정리한다.`})}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`1시간이 짧은 것 같지만 본인 영역이면 1시간 안에 보통 풀린다. 1시간 후에도 안 풀린다는 신호는 본인 직관 밖이라는 의미. 그땐 의존이 합리적.`}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsx)(t.p,{children:`시니어의 균형은 두 함정을 동시에 자문하는 자세다. 자기 혼자 풀려는 압박과 매번 동료에게 의존하는 관성. 자리마다 어느 함정에 가까운지 자문하고 의존 여부 결정.`}),`
`,(0,i.jsx)(t.p,{children:`균형은 한 번 결정 안 한다. 매번 자문. 자문하는 자체가 균형의 신호. 자문 없이 한 패턴으로만 가면 한쪽 함정이 누적된다.`}),`
`,(0,i.jsx)(t.p,{children:`좋은 시니어는 두 함정 사이의 자리를 매번 찾는 사람이다. 함정 1을 회피한 결과로 동료의 시간을 잘 쓰고, 함정 2를 회피한 결과로 본인 깊이가 자란다. 둘 다 자기 영역에 누적.`})]})}function R(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(L,{...e})}):L(e)}var z=e({default:()=>H,frontmatter:()=>B}),B={title:`사이트가 살아있다는 신호 — 디지털 가든을 매일 다듬는 시스템`,date:`2026-05-19`,summary:`게시일 대신 lastTendedAt, 완성된 글 대신 자라는 노트. 한 번에 끝내지 않는 사이트 운영을 시스템으로 만드는 법.`,readingTime:`4분`,status:`Draft`};function V(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`죽은 블로그와 살아있는 가든`}),`
`,(0,i.jsxs)(t.p,{children:[`블로그는 보통 죽어갑니다. 처음에는 매주 글이 올라오다가, 한 달에 한 번이 되고, 결국 마지막 글이 "2년 전"으로 박힙니다. 방문자가 보는 신호는 명확합니다. `,(0,i.jsx)(t.strong,{children:`"이 사이트는 멈춰있다."`})]}),`
`,(0,i.jsx)(t.p,{children:`디지털 가든은 다릅니다. 같은 양의 글이 있어도 살아있어 보입니다. 차이는 한 가지 메타데이터에서 옵니다.`}),`
`,(0,i.jsx)(t.h2,{children:`publishedAt vs lastTendedAt`}),`
`,(0,i.jsx)(t.p,{children:`일반 블로그의 frontmatter는 이렇습니다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-yaml`,children:`publishedAt: 2023-01-15
`})}),`
`,(0,i.jsx)(t.p,{children:`이게 박히면 2년 후에 "2023년 1월에 멈춘 글"이 됩니다. 시간이 지날수록 신뢰가 떨어집니다.`}),`
`,(0,i.jsx)(t.p,{children:`디지털 가든의 frontmatter는 이렇습니다.`}),`
`,(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:`language-yaml`,children:`plantedAt: 2023-01-15      # 처음 심은 날
lastTendedAt: 2026-05-19   # 최근 다듬은 날
`})}),`
`,(0,i.jsx)(t.p,{children:`방문자가 보는 신호:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"2023년에 심었고, 어제 마지막으로 다듬음"`}),`
`,(0,i.jsx)(t.li,{children:`→ "이 글은 한 달 전에도 손이 갔다"`}),`
`,(0,i.jsx)(t.li,{children:`→ "이 사이트는 살아있다"`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`같은 글인데 인상이 완전히 다릅니다. 게시일 한 시점에 박혀 있던 글이, 시간 안에서 계속 자라는 글로 바뀝니다.`}),`
`,(0,i.jsx)(t.h2,{children:`성숙도 시스템 — 🌱 🌿 🌳`}),`
`,(0,i.jsx)(t.p,{children:`게시일을 빼면 또 다른 가치가 생깁니다. "완성된 글"이라는 환상에서 해방됩니다.`}),`
`,(0,i.jsx)(t.p,{children:`Maggie Appleton이 자기 사이트에 도입한 성숙도 시스템:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`🌱 `,(0,i.jsx)(t.strong,{children:`Seedling`}),`: 갓 심은 노트. 한 단락의 메모일 수도.`]}),`
`,(0,i.jsxs)(t.li,{children:[`🌿 `,(0,i.jsx)(t.strong,{children:`Budding`}),`: 다듬어진 노트. 근거와 함정까지 채움.`]}),`
`,(0,i.jsxs)(t.li,{children:[`🌳 `,(0,i.jsx)(t.strong,{children:`Evergreen`}),`: 여러 번 재방문 후 정착한 노트. 다른 노트의 백링크를 자주 받음.`]}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`새 노트는 🌱로 시작합니다. 처음부터 완성하려고 하지 않습니다. 시간이 지나며 🌿로, 더 시간이 지나며 🌳로 자랍니다. 다듬지 않은 노트도 부담 없이 공개합니다.`}),`
`,(0,i.jsx)(t.p,{children:`이게 글쓰기의 진입 장벽을 결정적으로 낮춥니다. "완성된 글을 매주 한 편" 부담 → "지금 떠오른 생각을 새싹으로 심기" 가벼움. 사이트가 자랍니다.`}),`
`,(0,i.jsx)(t.h2,{children:`Brian Lovin의 "incrementally correct"`}),`
`,(0,i.jsxs)(t.p,{children:[`Brian Lovin은 자기 사이트를 `,(0,i.jsx)(t.a,{href:`/notes/incrementally-correct`,children:`"incrementally correct"`}),`라고 부릅니다. 한 번에 옳지 않아도 됩니다. 시간을 두고 점진적으로 정확해집니다.`]}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`"blog 게시 → 닫힘"이 아니라 "심기 → 자람 → 정착"의 흐름이다.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`한 글에 "Draft" 또는 "In progress"라고 적어두는 것을 부끄러워하지 않습니다. 그게 살아있다는 신호니까요.`}),`
`,(0,i.jsx)(t.h2,{children:`작게 다듬기 패턴`}),`
`,(0,i.jsx)(t.p,{children:`오늘 이 사이트에 9가지 영역으로 묶인 15개 commit을 push했습니다. 한 번에 다 한 게 아닙니다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`사이트 리빌드 (Phase 1)`}),`
`,(0,i.jsx)(t.li,{children:`인터랙티브 (Phase 3)`}),`
`,(0,i.jsx)(t.li,{children:`디자인 리뉴얼`}),`
`,(0,i.jsx)(t.li,{children:`누런 톤 박멸 (quality-gate 3 사이클)`}),`
`,(0,i.jsx)(t.li,{children:`모바일 GNB + quality-gate`}),`
`,(0,i.jsx)(t.li,{children:`콘텐츠 시드 11편`}),`
`,(0,i.jsx)(t.li,{children:`자동화 PoC 설계`}),`
`,(0,i.jsx)(t.li,{children:`SESSION 문서 + 노트·로그 promote`}),`
`,(0,i.jsx)(t.li,{children:`frontmatter 보정`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`각 commit마다 빌드, push, 라이브 반응 확인. 다음 단계 결정. 만약 한 번에 다 했다면, 중간에 "엄청 못생겼어" 같은 피드백을 받았을 때 어디로 돌아가야 할지 알 수 없었을 겁니다.`}),`
`,(0,i.jsx)(t.p,{children:`오늘 결과: 노트가 9개에서 20개로, 에세이가 2편에서 6편으로 자랐습니다. 모든 추가 노트의 lastTendedAt이 오늘로 표시됩니다. 방문자가 보는 신호는 "이 사이트는 지금도 손이 가는 곳"입니다. 다듬기의 합이 글의 수보다 사이트의 살아있음을 더 잘 보여줍니다.`}),`
`,(0,i.jsx)(t.p,{children:`작게 다듬는 게 사이트를 살리는 시스템입니다. 한 commit = 한 가지 변경 = 한 가지 검증.`}),`
`,(0,i.jsx)(t.h2,{children:`운영 부담 vs 가치`}),`
`,(0,i.jsx)(t.p,{children:`매일 다듬는 게 정말 sustainable한가? 솔직히, 항상은 아닙니다. 회사 스프린트 시즌엔 며칠 빠집니다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 한 가지 규칙을 둡니다.`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`빠진 날이 default여야 한다.`})}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`알림도 streak도 없습니다. 안 한 날은 그냥 안 한 날입니다. 죄책감 루프가 시작되면 시스템이 죽습니다. "오늘은 그냥 패스" → 며칠 누적 → "이번 주는 망했네" → 영구 중단. 이 fail case는 너무 흔합니다.`}),`
`,(0,i.jsx)(t.p,{children:`대신 트리거 조건이 자연스럽게 맞는 날에만 새싹을 심습니다. 의미 있는 작업이 끝났을 때, 디버깅 후 패턴을 찾았을 때, 디자인 결정을 내렸을 때. 매일이 아닙니다.`}),`
`,(0,i.jsx)(t.p,{children:`평균적으로 주 2-3개의 새싹이면 가든은 자라고 있습니다. 사이트가 살아있는 신호로 충분합니다.`}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsxs)(t.p,{children:[`사이트의 "살아있음"은 게시 빈도가 아니라 `,(0,i.jsx)(t.strong,{children:`다듬기 빈도`}),`입니다.`]}),`
`,(0,i.jsx)(t.p,{children:`매주 새 글을 안 올려도, 기존 노트 하나를 더 정확하게 다듬으면 사이트가 살아납니다. lastTendedAt이 어제로 표시되면, 방문자가 보는 신호는 "어제도 누군가 이 사이트에 손이 갔다"입니다.`}),`
`,(0,i.jsxs)(t.p,{children:[`그래서 이 사이트는 publishedAt을 안 표시합니다. `,(0,i.jsx)(t.a,{href:`/notes/last-tended-signal`,children:`lastTendedAt만 봅니다`}),`. 글이 한 시점에 박히지 않고, 시간 안에서 계속 자라도록.`]}),`
`,(0,i.jsx)(t.p,{children:`블로그는 죽어가는 게 자연스럽지만, 가든은 자라는 게 자연스럽습니다. 둘 중 어느 쪽이 본인 사이트의 메타포가 되어야 할지, 그게 사이트 운영 시스템의 첫 결정입니다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:`(2026-06 갱신)`}),` 이 다듬기의 일부는 이후 주간 봇이 초안을 내도록 자동화했습니다. "사람이 트리거 날에만 새싹을 심는다"에서 "봇이 매주 초안을 내고 사람이 게이트에서 고른다"로 바뀌었지만, 핵심 원칙은 그대로입니다 — lastTendedAt이 살아있음의 신호이고, 무엇을 키울지는 여전히 사람이 정합니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-08-writing-bot-reversal`,children:`/logs#2026-06-08-writing-bot-reversal`}),`, `,(0,i.jsx)(t.a,{href:`/essays/garden-fallow-meaning`,children:`/essays/garden-fallow-meaning`})]})]})}function H(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(V,{...e})}):V(e)}var U=e({default:()=>K,frontmatter:()=>W}),W={title:`장애가 가르치는 시스템 사고`,date:`2026-05-20`,summary:`장애는 단발 사건이 아니라 시스템 입력이다. incident → 모니터링 갭 → 알람 룰 → 다음 장애. 한 번의 학습으로 끝나지 않고 다음 사이클의 인풋이 되는 것이 시스템 사고다.`,readingTime:`5분`,status:`Published`};function G(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`장애를 사건으로 볼 때`}),`
`,(0,i.jsx)(t.p,{children:`처음 장애를 겪을 때는 "사건"으로 본다. 시작 / 끝 / 원인 / 해결. 일직선 인과.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`장애 발생 → 임시 패치 → 정상화`}),`
`,(0,i.jsx)(t.li,{children:`회고에서 원인 정리 → "다음에 안 일어나게 조심"`}),`
`,(0,i.jsx)(t.li,{children:`끝.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`이 시각에서는 매번 새 장애가 새 사건이다. 학습은 누적되지 않는다. 같은 카테고리의 장애가 6개월 후 다시 일어나도 "이번엔 다른 거"라고 분류한다. 같은 형태의 실수가 반복되는데 사람만 매번 새로워하는 셈이다.`}),`
`,(0,i.jsx)(t.h2,{children:`장애를 시스템 입력으로 볼 때`}),`
`,(0,i.jsxs)(t.p,{children:[`다른 시각이 있다. 장애를 `,(0,i.jsx)(t.strong,{children:`시스템에 들어오는 입력`}),`으로 본다. 시스템은 그 입력으로 자신을 갱신한다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`장애 → 임시 패치 / 근본 수정 분리`}),`
`,(0,i.jsx)(t.li,{children:`회고 → 모니터링 갭 발견`}),`
`,(0,i.jsx)(t.li,{children:`알람 룰 추가 → 좋은 알람 4기준 적용`}),`
`,(0,i.jsx)(t.li,{children:`다음 같은 장애 → 알람 즉시 → 영향 최소화`}),`
`,(0,i.jsx)(t.li,{children:`또 다른 장애에서 새 갭 발견 → 또 추가`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`이 사이클이 돌면 `,(0,i.jsx)(t.strong,{children:`시스템이 자라난다`}),`. 똑같은 장애 시간이 매번 조금씩 줄어든다. 같은 카테고리에서 두 번째 장애가 첫 번째의 절반이고, 세 번째가 두 번째의 절반이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`4단계 사이클`}),`
`,(0,i.jsx)(t.p,{children:`이 사이클을 더 자세히 보면 4단계가 있다.`}),`
`,(0,i.jsx)(t.h3,{children:`1단계 — 임시 패치 vs 근본 수정 분리`}),`
`,(0,i.jsxs)(t.p,{children:[`장애 진압이 우선이다. 임시 패치로 일단 정상화. 동시에 `,(0,i.jsx)(t.strong,{children:`근본 수정을 별도 항목으로`}),` 등록한다. 임시 패치를 영구로 두지 않는다. 임시 패치가 누적되면 시스템이 임시 패치 더미가 된다.`]}),`
`,(0,i.jsx)(t.p,{children:`근본 수정은 다음 sprint, 늦어도 다음 달. 미루면 안 한다.`}),`
`,(0,i.jsx)(t.h3,{children:`2단계 — 모니터링 갭 식별`}),`
`,(0,i.jsx)(t.p,{children:`회고에서 가장 가치 있는 질문은 "원인이 뭐였나"가 아니다.`}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:`"이건 왜 알람이 안 떴지?"`})}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`알람이 떴는데 못 본 거면 우선순위·전달 채널 문제. 알람 자체가 없었다면 모니터링 갭. 갭은 두 종류 — 측정 안 됨(metric missing), 측정 되지만 알람 안 됨(alert missing). 각각 다른 처방.`}),`
`,(0,i.jsx)(t.p,{children:`이 질문 하나가 "다음에 조심하자"를 "다음에 알람이 잡는다"로 바꾼다. 사람의 주의력에 기대지 않는다.`}),`
`,(0,i.jsx)(t.h3,{children:`3단계 — 알람 룰 추가`}),`
`,(0,i.jsx)(t.p,{children:`갭을 알람으로 메운다. 단, 좋은 알람 4기준 통과해야 한다.`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsx)(t.li,{children:`사람이 지금 행동할 일이 있는가`}),`
`,(0,i.jsx)(t.li,{children:`임계가 SLO 기반인가`}),`
`,(0,i.jsx)(t.li,{children:`runbook 링크가 있는가`}),`
`,(0,i.jsx)(t.li,{children:`알람 후 회고로 룰 정리하는가`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`통과 못 하면 알람 추가 X, 대시보드에만. 노이즈가 신호를 가린다. 한 번의 false positive가 다음 100번 무시 행동을 만든다.`}),`
`,(0,i.jsx)(t.h3,{children:`4단계 — runbook 업데이트`}),`
`,(0,i.jsx)(t.p,{children:`새 알람마다 runbook이 있어야 한다. 새벽 4시 본인이 처음부터 추리 안 하게. runbook은 24h 안에 쓴다 — 기억이 휘발되기 전.`}),`
`,(0,i.jsx)(t.h2,{children:`사이클이 한 번 돌고 나면`}),`
`,(0,i.jsx)(t.p,{children:`한 번의 장애가 다음 4가지를 남긴다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`근본 수정 (단발성)`}),`
`,(0,i.jsx)(t.li,{children:`알람 룰 1-2개 (지속적)`}),`
`,(0,i.jsx)(t.li,{children:`runbook 1개 (지속적)`}),`
`,(0,i.jsx)(t.li,{children:`사람의 학습 (1단계 분리 사고 습관)`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`이 중 3가지가 `,(0,i.jsx)(t.strong,{children:`다음 장애의 인프라`}),`가 된다. 사람의 학습은 다음 사이클을 더 빠르게 돌게 만든다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`이게 시스템 사고다. 사건이 아니라 `,(0,i.jsx)(t.strong,{children:`시스템 갱신의 트리거`}),`.`]}),`
`,(0,i.jsx)(t.h2,{children:`사이클을 도는 일은 쉽지 않다`}),`
`,(0,i.jsxs)(t.p,{children:[`이론은 단순한데 실무에서는 쉽지 않다. 가장 큰 적은 `,(0,i.jsx)(t.strong,{children:`시간 압박`}),`이다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`임시 패치로 끝내고 다음 일로 → 근본 수정 누락`}),`
`,(0,i.jsx)(t.li,{children:`회고 미루기 → 24h 지나면 디테일 휘발 → runbook stale`}),`
`,(0,i.jsx)(t.li,{children:`"이번엔 흔치 않은 케이스" → 알람 룰 안 만듦 → 6개월 후 재발`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`이걸 막는 한 가지 습관: `,(0,i.jsx)(t.strong,{children:`장애가 끝나기 전에 사이클을 끝낸다`}),`. 진압 → 회고 → runbook → 알람 룰 → 근본 수정 ticket까지 `,(0,i.jsx)(t.strong,{children:`하루 안에`}),`. 미루면 안 한다.`]}),`
`,(0,i.jsx)(t.p,{children:`처음에는 부담스럽다. 새벽까지 일하고 또 한두 시간 더 써야 한다. 그런데 한 번 끝까지 돌고 나면 다음에 같은 카테고리 장애 시간이 줄어든다. 그 시간 절약이 사이클 비용보다 크다. 두 번째 같은 장애에서 알람이 즉시 뜨고 runbook 따라 5분 안에 처리되는 경험을 한 번 하면, 사이클이 비싸지 않다는 게 체감된다.`}),`
`,(0,i.jsx)(t.h2,{children:`AI와 함께 도는 사이클`}),`
`,(0,i.jsx)(t.p,{children:`요즘은 사이클 자체를 AI와 함께 돈다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`진압 중: Claude/Codex가 가설 검증 페어 (incident-ai-pair-debugging)`}),`
`,(0,i.jsx)(t.li,{children:`회고: AI가 timeline 정리, 사람이 판단`}),`
`,(0,i.jsx)(t.li,{children:`runbook: AI가 명령어 풀로 정리, 사람이 검토`}),`
`,(0,i.jsx)(t.li,{children:`알람 룰: AI가 4기준 자가 평가, 사람이 승인`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`각 단계에서 사람의 가치는 `,(0,i.jsx)(t.strong,{children:`판단`}),`에 집중된다. 가설 생성·문서화·평가 1차 패스는 AI가. 사람의 시간이 가장 비싼 진압 중에 가설 생성을 페어로 분산하는 게 가장 큰 절약.`]}),`
`,(0,i.jsx)(t.p,{children:`특히 회고와 runbook 작성. 사람이 처음부터 쓰면 한 시간, AI 초안 후 사람 검토면 15분. 시간이 줄어드니 24h 임계를 지키기 쉽다. 사이클이 더 자주 끝까지 돈다.`}),`
`,(0,i.jsx)(t.h2,{children:`장애에 화내지 않는 법`}),`
`,(0,i.jsxs)(t.p,{children:[`장애에 화내지 않는 법은 그것을 `,(0,i.jsx)(t.strong,{children:`사이클의 입력`}),`으로 보는 것이다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`장애 = 시스템이 자신을 알려주는 신호`}),`
`,(0,i.jsx)(t.li,{children:`회고 = 신호를 해석하는 자리`}),`
`,(0,i.jsx)(t.li,{children:`알람 룰·runbook = 신호를 시스템에 박는 작업`}),`
`,(0,i.jsx)(t.li,{children:`다음 장애 = 시스템이 자란 정도를 측정`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`이 시각에서 보면 화 낼 일은 줄어든다. 장애를 한 번도 안 겪는 시스템은 자라지 않은 시스템이다.`}),`
`,(0,i.jsx)(t.p,{children:`물론 같은 장애를 같은 형태로 두 번 겪으면 부끄럽다. 사이클이 안 돈 것이다. 1단계에서 임시 패치만 했거나, 2단계에서 갭을 못 봤거나, 3단계에서 알람을 안 만들었거나.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`같은 장애를 두 번 겪지 않게 만드는 게 시스템 사고의 작은 증명`}),`이다. 그리고 그것은 한 번에 만들어지는 게 아니라 매 사이클마다 조금씩 자라는 것이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsxs)(t.p,{children:[`좋은 모니터링은 한 번에 완성되지 않는다. 좋은 알람 룰셋도 한 번에 완성되지 않는다. `,(0,i.jsx)(t.strong,{children:`장애가 갭을 자연 노출하는 사이클이 시스템을 자라게 한다.`})]}),`
`,(0,i.jsx)(t.p,{children:`사이클을 한 번이라도 끝까지 돌고 나면, 다음 장애에서 자기 시스템이 자라는 게 보인다. 그게 시스템 사고가 주는 가장 큰 보상이다.`}),`
`,(0,i.jsx)(t.p,{children:`장애는 막을 수 없다. 다만 같은 장애를 두 번 겪지 않게는 만들 수 있다. 그 차이가 6년 후 시스템의 모양을 결정한다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련 노트: `,(0,i.jsx)(t.a,{href:`/notes/incident-temp-vs-root`,children:`/notes/incident-temp-vs-root`}),`, `,(0,i.jsx)(t.a,{href:`/notes/incident-monitoring-gap`,children:`/notes/incident-monitoring-gap`}),`, `,(0,i.jsx)(t.a,{href:`/notes/good-alert-four-criteria`,children:`/notes/good-alert-four-criteria`}),`, `,(0,i.jsx)(t.a,{href:`/notes/incident-ai-pair-debugging`,children:`/notes/incident-ai-pair-debugging`}),`, `,(0,i.jsx)(t.a,{href:`/notes/runbook-write-during-incident`,children:`/notes/runbook-write-during-incident`})]}),`
`,(0,i.jsxs)(t.p,{children:[`관련 로그: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-07-healthcheck-six-bots`,children:`/logs#2026-06-07-healthcheck-six-bots`}),` — 에러를 안 던지는 silent failure는 모니터링이 못 잡아 헬스체크라는 별도 렌즈가 필요했다, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-03-silent-failure-dry-run`,children:`/logs#2026-06-03-silent-failure-dry-run`})]})]})}function K(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(G,{...e})}):G(e)}var q=e({default:()=>X,frontmatter:()=>J}),J={title:`양면 시장에서 결정하기 — 광고주와 매체 사이의 패턴`,date:`2026-05-29`,summary:`광고 플랫폼은 한쪽이 행복하면 다른 쪽이 불행해지는 자리가 많다. 매번 한쪽 편을 들 수 없을 때 어떤 기준으로 결정하는가. 양면 시장에서 일한 시간이 가르친 5가지.`,readingTime:`7분`,status:`Published`};function Y(e){let t={a:`a`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`양면 시장의 구조`}),`
`,(0,i.jsx)(t.p,{children:`광고 플랫폼은 양면 시장(two-sided market)이다. 한쪽엔 광고주, 다른 쪽엔 매체(앱·사이트). 플랫폼은 두 쪽을 중개한다.`}),`
`,(0,i.jsx)(t.p,{children:`문제는 한쪽이 좋아하는 결정이 다른 쪽을 불행하게 만드는 경우가 많다는 것.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`광고주가 원하는 더 정밀한 targeting → 매체 사용자 프라이버시 침해`}),`
`,(0,i.jsx)(t.li,{children:`매체가 원하는 더 높은 단가 → 광고주 ROI 하락`}),`
`,(0,i.jsx)(t.li,{children:`광고주가 원하는 더 큰 광고 노출 → 매체 사용자 경험 악화`}),`
`,(0,i.jsx)(t.li,{children:`매체가 원하는 광고 형식 제어 → 광고주 캠페인 표준화 어려움`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`매번 한쪽 편을 들면 시장이 한쪽으로 기운다. 그래서 결정 기준이 단순하지 않다.`}),`
`,(0,i.jsx)(t.h2,{children:`일반 시장 vs 양면 시장`}),`
`,(0,i.jsx)(t.p,{children:`일반 시장:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`사용자 만족 → 좋은 결정`}),`
`,(0,i.jsx)(t.li,{children:`한 axis로 최적화`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`양면 시장:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`한쪽 만족 → 다른 쪽 불만 가능`}),`
`,(0,i.jsx)(t.li,{children:`두 axis 동시 최적화`}),`
`,(0,i.jsx)(t.li,{children:`한쪽이 떠나면 시장 자체가 무너짐 (network effect)`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`이 차이가 의사결정의 모양을 바꾼다. 5가지 패턴을 정리해본다.`}),`
`,(0,i.jsx)(t.h2,{children:`1. "이 결정으로 누가 떠나는가"`}),`
`,(0,i.jsx)(t.p,{children:`가장 먼저 묻는 질문. 결정의 영향이 어느 쪽에 더 큰지.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`광고주가 떠나면 → 광고 inventory가 안 팔림 → 매체 수익 ↓`}),`
`,(0,i.jsx)(t.li,{children:`매체가 떠나면 → 광고 노출 자리 부족 → 광고주 ROI ↓`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`누구든 떠나면 양쪽 다 손해`}),`다. 따라서 결정의 1차 기준은 "어느 쪽도 떠나지 않게"다. 한쪽을 100점 만족시키는 결정보다 양쪽 70점 결정이 시장에 더 안전한 경우가 많다.`]}),`
`,(0,i.jsx)(t.h2,{children:`2. 장기 vs 단기`}),`
`,(0,i.jsx)(t.p,{children:`단기에 좋은 결정이 장기에 시장을 무너뜨릴 수 있다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`예시 — 광고 단가 정책`}),`:`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`단기: 광고주에게 단가 인하 → 광고 수요 ↑ → 매체 수익도 ↑`}),`
`,(0,i.jsx)(t.li,{children:`장기: 단가가 너무 낮아지면 매체가 광고 자리를 줄임 → inventory ↓ → 광고주가 자리 못 찾음`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`예시 — targeting 정밀화`}),`:`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`단기: 더 정밀한 targeting → 광고주 ROI ↑`}),`
`,(0,i.jsx)(t.li,{children:`장기: 사용자 프라이버시 문제 → 매체가 SDK 사용 제한 → 시장 자체 축소`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`장기 영향이 양면 시장에서 더 큰 비중이다. 단기 만족을 위한 결정은 장기 비용을 미리 본다.`}),`
`,(0,i.jsx)(t.h2,{children:`3. 기본값(default)의 비대칭성`}),`
`,(0,i.jsx)(t.p,{children:`양면 시장에서 한쪽이 자주 더 약하다. 보통 매체가 약함 — 광고주는 비용을 쓰니 강한 협상력, 매체는 inventory를 제공하니 의존적.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`기본값을 약한 쪽 보호로 설계`}),`:`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[`광고 노출 시간 상한 (`,(0,i.jsx)(t.a,{href:`/notes/frequency-capping-distributed`,children:`frequency capping`}),`, 매체 보호)`]}),`
`,(0,i.jsx)(t.li,{children:`사용자 데이터 사용 제한 (사용자/매체 보호)`}),`
`,(0,i.jsx)(t.li,{children:`광고 형식 가이드라인 (매체 UX 보호)`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`기본값이 약한 쪽을 보호하면, 강한 쪽은 명시적 opt-in으로 더 적극적인 옵션을 선택. 양쪽이 의식적으로 결정.`}),`
`,(0,i.jsx)(t.p,{children:`기본값이 강한 쪽 편이면, 약한 쪽이 알아서 보호받아야 하는데 그러기 어렵다.`}),`
`,(0,i.jsx)(t.h2,{children:`4. 투명성이 의사결정 비용을 줄인다`}),`
`,(0,i.jsx)(t.p,{children:`양면 시장의 결정은 "왜 이렇게 했는가"가 설명 안 되면 양쪽 모두 의심한다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`광고주: "왜 우리 캠페인이 노출 안 되지? 매체가 거부했나?"`}),`
`,(0,i.jsx)(t.li,{children:`매체: "왜 단가가 낮아? 광고주가 다 떠났나?"`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`투명한 룰`}),`: 모든 결정 규칙을 양쪽에 공개. 광고 거부 사유, 단가 책정 알고리즘, ranking 기준 등.`]}),`
`,(0,i.jsxs)(t.p,{children:[`투명성이 있으면 "이 결과는 룰에 따른 것"이라 양쪽이 받아들임. 투명성 없으면 매 결과가 협상 대상. 애초에 `,(0,i.jsx)(t.a,{href:`/essays/data-trust-two-sided`,children:`양쪽이 플랫폼의 숫자를 의심하는 게 구조적 특성`}),`이라 더 그렇다.`]}),`
`,(0,i.jsx)(t.p,{children:`투명성 비용 ↑, 신뢰 비용 ↓. 양면 시장에선 신뢰가 핵심 자산.`}),`
`,(0,i.jsx)(t.h2,{children:`5. 시그널을 약한 쪽에서 먼저 본다`}),`
`,(0,i.jsx)(t.p,{children:`위에서 "약한 쪽이 떠나면 시장이 무너진다"고 했다. 이는 모니터링 우선순위에도 영향.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`강한 쪽 (광고주)`}),` 신호:`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`캠페인 출고량`}),`
`,(0,i.jsx)(t.li,{children:`ROI`}),`
`,(0,i.jsx)(t.li,{children:`단가 협상력`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`약한 쪽 (매체)`}),` 신호:`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`SDK 통합 유지율`}),`
`,(0,i.jsx)(t.li,{children:`매체 사용자 NPS`}),`
`,(0,i.jsx)(t.li,{children:`광고 자리 축소 빈도`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`강한 쪽 지표는 시장이 무너지기 직전까지 좋아 보일 수 있다. 약한 쪽이 한 명씩 떠나는 신호를 먼저 봐야 한다.`}),`
`,(0,i.jsx)(t.p,{children:`알람과 대시보드는 약한 쪽 지표를 앞에 둔다. 강한 쪽 지표는 뒤에. 강한 쪽은 신호 보내는 능력이 강해서 알람 없어도 들어오고, 약한 쪽은 조용히 떠난다.`}),`
`,(0,i.jsx)(t.h2,{children:`본인 경험에서 배운 것`}),`
`,(0,i.jsx)(t.p,{children:`광고 플랫폼에서 일하면서 가장 자주 본 실수는 "한쪽 KPI"에 매몰되는 것이다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`"이번 분기는 광고 매출이 KPI" → 광고주 편을 들면 매체가 떠나는 신호 무시`}),`
`,(0,i.jsx)(t.li,{children:`"이번 분기는 매체 통합이 KPI" → 매체 편을 들면 광고주 ROI 무시`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`KPI는 한 축이지만 시장은 두 축. KPI가 한쪽만 보면 다른 쪽이 무너지고 다음 분기 KPI도 무너진다.`}),`
`,(0,i.jsxs)(t.p,{children:[`가장 효과적인 KPI 설계는 `,(0,i.jsx)(t.strong,{children:`양쪽 지표를 항상 같이 본다`}),`. 매출 + retention 같은 쌍. 한쪽 지표가 좋아져도 다른 쪽이 나빠지면 결과가 부정적.`]}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`한쪽 stakeholder에 과도하게 노출`}),`: 광고주와 자주 회의하면 광고주 관점에 편향. 매체 회의도 같은 빈도로.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`A/B 테스트를 한쪽 지표로만`}),`: 매출 ↑ 보이면 통과, 사용자 NPS ↓ 안 보임. 양쪽 지표 동시 측정.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`양면 시장 패턴을 모든 일반 시장에 적용`}),`: 일반 시장은 양면이 아니어서 양쪽 균형 고민 불필요. 양면 시장만의 패턴.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`네트워크 효과의 무서움 무시`}),`: 한쪽이 임계 이하로 떨어지면 다른 쪽도 빠진다. 임계 미리 측정.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`"균형"을 무책임으로 합리화`}),`: 양쪽 다 약간 불만족인 결정을 "균형"이라 부르지만 사실은 결정 회피. 진짜 균형은 양쪽이 거래의 가치를 동의하는 것.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsxs)(t.p,{children:[`양면 시장의 결정은 `,(0,i.jsx)(t.strong,{children:`한쪽 만족이 다른 쪽 손실`}),`인 자리가 많다. 일반 시장의 "사용자 만족 최대화"가 단순히 안 된다.`]}),`
`,(0,i.jsx)(t.p,{children:`5가지 패턴이 이 자리의 의사결정에 도움 됐다.`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsx)(t.li,{children:`누가 떠나는가`}),`
`,(0,i.jsx)(t.li,{children:`장기 vs 단기`}),`
`,(0,i.jsx)(t.li,{children:`기본값을 약한 쪽 보호로`}),`
`,(0,i.jsx)(t.li,{children:`투명성이 신뢰 비용 ↓`}),`
`,(0,i.jsx)(t.li,{children:`약한 쪽 신호를 먼저`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`이 5가지는 광고에 한정되지 않는다. 양면 시장 구조라면 — 마켓플레이스·결제·소셜·앱스토어 — 같은 패턴이 동작.`}),`
`,(0,i.jsx)(t.p,{children:`본인 회사가 어느 자리에 있는지가 다르지만, 양면 시장의 본질은 같다. 한쪽만 보면 다른 쪽이 무너지고, 시장 전체가 같이 떠난다.`})]})}function X(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(Y,{...e})}):Y(e)}var Z=e({default:()=>te,frontmatter:()=>Q}),Q={title:`일반 이력서로 부족한 이유`,date:`2026-05-19`,summary:`이력서 한 장은 무엇을 했는지를 보여주지만, 어떻게 일하는지를 보여주지 못합니다. 이 사이트가 그 갭을 메우려는 시도입니다.`,readingTime:`6분`,status:`Published`};function $(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`6년 만에 돌아본 portfolio`}),`
`,(0,i.jsx)(t.p,{children:`6년 동안 같은 portfolio 사이트 하나를 두고 있었습니다. 마지막 업데이트는 첫 회사 입사 시점. 그 후로 한 번도 손대지 않았습니다.`}),`
`,(0,i.jsx)(t.p,{children:`그동안 회사 안에서는 매주 일하고, 매달 한 번씩 큰 결정을 내리고, 매년 한두 번씩 큰 시스템을 만들었습니다. 그런데 그 모든 활동이 portfolio에는 한 줄도 반영되지 않았습니다. "현재 직장·기간·역할명"만 적힌 한 줄 옆에 6년이 흐른 것입니다.`}),`
`,(0,i.jsx)(t.p,{children:`이력서도 비슷합니다. 매년 한 줄씩 더 추가하지만, 그 한 줄이 6년의 시간을 압축한 결과로는 너무 작습니다. 누군가 제 이력서를 10초 보고 "이 사람과 일하면 어떨까"를 판단해야 한다면, 그 10초 안에 들어가는 정보는 회사 이름·기간·역할명뿐입니다.`}),`
`,(0,i.jsx)(t.h2,{children:`이력서가 못 보여주는 것`}),`
`,(0,i.jsx)(t.h3,{children:`1. 결과만 있고 판단 과정이 없다`}),`
`,(0,i.jsx)(t.p,{children:`이력서에는 "X 프로젝트를 React로 만들었다"가 한 줄로 들어갑니다. 사실입니다. 하지만 그 한 줄은 다음 질문에 답하지 않습니다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`왜 Vue가 아니고 React였나`}),`
`,(0,i.jsx)(t.li,{children:`어떤 대안을 비교했나`}),`
`,(0,i.jsx)(t.li,{children:`무엇을 양보했나`}),`
`,(0,i.jsx)(t.li,{children:`6개월 후에 그 결정을 어떻게 평가하나`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`일은 결과가 아니라 결과까지 가는 `,(0,i.jsx)(t.strong,{children:`판단의 연속`}),`입니다. 그 판단이 가려져 있으면, 결과만 가지고는 그 사람이 다음 결정을 어떻게 내릴지 추측할 수 없습니다.`]}),`
`,(0,i.jsx)(t.p,{children:`이력서가 보여주는 건 "이 사람이 무엇을 했는가"입니다. 채용 담당자가 진짜 알고 싶은 건 "이 사람과 일하면 어떤 결정이 나올까"입니다. 두 질문 사이에 큰 갭이 있습니다.`}),`
`,(0,i.jsx)(t.h3,{children:`2. 시간이 누적되지 않는다`}),`
`,(0,i.jsxs)(t.p,{children:[`이력서는 `,(0,i.jsx)(t.strong,{children:`현재 시점의 스냅샷`}),`입니다. 매년 갱신하지만 어제와 오늘의 차이는 보이지 않습니다. 회사 이름이 바뀌거나 직책이 바뀔 때만 한 줄이 추가됩니다.`]}),`
`,(0,i.jsx)(t.p,{children:`그런데 실무에서 가장 자주 일어나는 학습은 회사가 바뀔 때가 아닙니다. 매주, 매월, 분기마다 일어납니다. 새 도구를 도입하고, 시스템을 한 번 깨뜨리고, 회고를 통해 다음 달 접근법을 바꿉니다.`}),`
`,(0,i.jsx)(t.p,{children:`이 누적이 이력서에는 단 한 줄도 안 보입니다. 매일 자라는 정원과 매년 한 번 업데이트되는 비석의 차이입니다.`}),`
`,(0,i.jsx)(t.h3,{children:`3. 다양한 형태를 허용하지 않는다`}),`
`,(0,i.jsx)(t.p,{children:`이력서는 정해진 양식이 있습니다. 한 페이지, 글머리표, 회사 이름과 기간. 글, 도식, 인터랙티브 데모, 데이터 시각화, 코드 임베드 같은 다양한 표현은 들어갈 자리가 없습니다.`}),`
`,(0,i.jsx)(t.p,{children:`하지만 개발자가 일하는 방식은 다양합니다. 어떤 결정은 글로 정리하면 가장 잘 보이고, 어떤 결정은 도식 하나가 100자 글보다 명확합니다. 어떤 작업은 동작하는 데모가 가장 강한 증명입니다. 이력서 한 양식에 모든 걸 밀어넣으면 형식이 내용을 잘라먹습니다.`}),`
`,(0,i.jsx)(t.h2,{children:`proof-of-work 사이트의 가치`}),`
`,(0,i.jsx)(t.p,{children:`이력서가 "내가 무엇을 했는가"라면, proof-of-work 사이트는 **"내가 어떻게 일하는가"**입니다.`}),`
`,(0,i.jsx)(t.p,{children:`같은 사람의 같은 경력을 두 양식으로 보여주면 그 결과가 크게 다릅니다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`이력서: "5년차 React 개발자. TypeScript·Next.js·자동화 워크플로우."`}),`
`,(0,i.jsx)(t.li,{children:`proof-of-work: 십수 개의 케이스 스터디(각각 문제·결정·산출물·임팩트), 수십 편의 디지털 가든 노트, 누적되는 빌더 로그, 매일 자라는 lastTendedAt 메타.`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`두 번째 양식은 채용 담당자가 10초 안에 "어떤 결정을 어떻게 내리는 사람인지"를 잡을 수 있습니다. 케이스 하나만 클릭해도 그 사람의 결정 흐름이 보이고, 노트 한 편만 읽어도 어떤 함정에 빠지지 않으려는지가 보입니다.`}),`
`,(0,i.jsx)(t.p,{children:`10초 룰은 잔인하지만 현실입니다. 이력서에서 10초는 회사 이름·직책만 보고 끝납니다. proof-of-work 사이트에서 10초는 케이스 제목 3개·summary 2-3줄을 읽을 수 있습니다. 같은 10초가 다른 정보를 담습니다.`}),`
`,(0,i.jsx)(t.h2,{children:`이 사이트의 4 채널`}),`
`,(0,i.jsx)(t.p,{children:`이 사이트는 네 가지 채널로 "어떻게 일하는가"를 분산해 보여줍니다.`}),`
`,(0,i.jsxs)(t.h3,{children:[(0,i.jsx)(t.code,{children:`/cases`}),` — 문제·결정·산출물·임팩트`]}),`
`,(0,i.jsx)(t.p,{children:`각 케이스는 같은 네 칸을 채웁니다. 문제 정의 / 비교한 옵션과 선택 / 만들어진 산출물 / 측정된 임팩트.`}),`
`,(0,i.jsx)(t.p,{children:`이력서의 한 줄이 케이스 하나로 풀어집니다. "프론트엔드 빌드 사이즈 41% 감소" 한 줄이 manualChunks 결정 비교·청크 분포 표·임팩트 측정·다음 단계까지의 전체 흐름으로 보입니다.`}),`
`,(0,i.jsxs)(t.h3,{children:[(0,i.jsx)(t.code,{children:`/notes`}),` — 자라는 디지털 가든`]}),`
`,(0,i.jsx)(t.p,{children:`생각의 누적입니다. 한 번에 완성하지 않습니다. 처음에는 🌱 Seedling으로 한두 문단, 다듬으며 🌿 Budding, 여러 번 손대면서 🌳 Evergreen.`}),`
`,(0,i.jsx)(t.p,{children:`매 노트에 plantedAt(처음 심은 날짜)과 lastTendedAt(마지막으로 다듬은 날짜) 두 메타를 둡니다. 글이 정원처럼 자라는 게 시각화됩니다.`}),`
`,(0,i.jsxs)(t.h3,{children:[(0,i.jsx)(t.code,{children:`/logs`}),` — 어제와 오늘의 차이`]}),`
`,(0,i.jsx)(t.p,{children:`매일·매주의 작은 작업을 시간순으로 기록합니다. "오늘 이걸 만들었음" 같은 한 줄짜리 entry부터, 회고가 있는 긴 entry까지.`}),`
`,(0,i.jsx)(t.p,{children:`이력서가 1년 단위 스냅샷이라면, 로그는 일주일 단위 차분(diff)입니다. 어떤 작업이 자주 일어나는지, 어떤 시기에 어떤 영역에 집중했는지가 그대로 보입니다.`}),`
`,(0,i.jsxs)(t.h3,{children:[(0,i.jsx)(t.code,{children:`/uses`}),`, `,(0,i.jsx)(t.code,{children:`/now`}),`, `,(0,i.jsx)(t.code,{children:`/reading`}),` — 사람으로서의 입체감`]}),`
`,(0,i.jsx)(t.p,{children:`도구·현재 관심사·최근 읽은 글. 직무 외의 맥락이 들어갑니다. 이력서가 "직장인으로서의 한 사람"만 보여준다면, 이 페이지들은 "한 사람으로서의 직장인"을 보여줍니다.`}),`
`,(0,i.jsx)(t.p,{children:`채용은 동료를 고르는 일이고, 동료는 직무 외의 사람이기도 합니다. 이 입체감이 LinkedIn에는 절대 안 들어갑니다.`}),`
`,(0,i.jsx)(t.h2,{children:`매일 다듬는 시스템`}),`
`,(0,i.jsxs)(t.p,{children:[`proof-of-work 사이트가 이력서보다 강한 이유는 콘텐츠가 풍부해서가 아닙니다. `,(0,i.jsx)(t.strong,{children:`매일 자라기 때문`}),`입니다.`]}),`
`,(0,i.jsx)(t.p,{children:`이력서는 분기에 한 번 업데이트하면 잘 한 것입니다. 사이트는 매일 한 줄이라도 다듬어야 살아있는 것으로 보입니다. 사이트 footer에 "Last updated 6 months ago"라고 적혀있으면, 그 사이트는 죽은 사이트입니다.`}),`
`,(0,i.jsx)(t.p,{children:`이걸 시스템으로 만들지 않으면 매일 다듬는 일은 안 됩니다. 사람의 의지에 의존하는 시스템은 한 달 안에 멈춥니다. 그래서:`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`lastTendedAt이 frontmatter에 강제`}),`
`,(0,i.jsx)(t.li,{children:`Logs는 entry 추가가 commit 한 번`}),`
`,(0,i.jsx)(t.li,{children:`Notes는 짧은 추가가 즉시 garden 인덱스 갱신`}),`
`,(0,i.jsx)(t.li,{children:`Cross-link이 그래프를 만들어 한 노트의 갱신이 다른 노트의 가시성도 살림`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`매일 큰 글 한 편이 아니라, 매일 작은 갱신 5개. 누적의 형태가 다릅니다.`}),`
`,(0,i.jsx)(t.h2,{children:`채용 시장이 바뀌었다`}),`
`,(0,i.jsx)(t.p,{children:`ChatGPT 시대 이전과 이후, 이력서의 가치가 바뀌었습니다.`}),`
`,(0,i.jsx)(t.p,{children:`이력서를 잘 쓰는 것도 이제 AI가 합니다. 같은 이력서 양식 안에서는 누구나 비슷한 수준의 "잘 정리된 한 페이지"가 나옵니다. 변별력이 떨어집니다.`}),`
`,(0,i.jsx)(t.p,{children:`채용 담당자도 이걸 압니다. 그래서 "이력서 너머의 증거"를 봅니다. GitHub 활동, 블로그 글, 개인 사이트, 오픈소스 기여. 이 모두가 proof-of-work입니다.`}),`
`,(0,i.jsx)(t.p,{children:`이력서가 사라지지는 않을 겁니다. 하지만 이력서 한 장으로 끝나는 시대는 끝났습니다. 같은 사람의 같은 경력을 어떤 형태로 보여주느냐가 점점 더 중요해집니다.`}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsx)(t.p,{children:`이력서 한 장은 6년의 시간을 압축하기에 너무 작습니다.`}),`
`,(0,i.jsx)(t.p,{children:`이력서가 사라져야 한다는 말은 아닙니다. 10초 안에 1차 거름망의 역할은 여전히 합니다. 그 다음에 "이 사람과 일하면 어떨까"를 판단하는 자리에서는 proof-of-work 사이트가 필요합니다.`}),`
`,(0,i.jsx)(t.p,{children:`이 사이트는 그 두 번째 자리에 들어가려는 시도입니다. 케이스로 결정을 보여주고, 노트로 학습을 누적하고, 로그로 시간의 차이를 보여줍니다. 그리고 매일 자랍니다.`}),`
`,(0,i.jsx)(t.p,{children:`이력서가 비석이라면, 이 사이트는 정원입니다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/recruiter-10-seconds`,children:`/notes/recruiter-10-seconds`}),`, `,(0,i.jsx)(t.a,{href:`/notes/last-tended-signal`,children:`/notes/last-tended-signal`}),`, `,(0,i.jsx)(t.a,{href:`/notes/digital-garden-vs-blog`,children:`/notes/digital-garden-vs-blog`})]})]})}function te(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)($,{...e})}):$(e)}export{F as a,C as c,d,c as f,z as i,y as l,q as n,j as o,r as p,U as r,D as s,Z as t,h as u};