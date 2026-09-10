import{n as e}from"./rolldown-runtime-QTnfLwEv.js";import{f as t,m as n}from"./content-cases-CBUDB2ZQ.js";var r=e({default:()=>s,frontmatter:()=>a}),i=t(),a={title:`AI 코딩 도구 6개월 — Claude Code, Codex, Cursor 세 도구를 같이 쓴 후`,date:`2026-05-28`,summary:`6개월 전에는 Cursor만 썼다. 지금은 Claude Code + Codex CLI + Cursor 세 도구를 같이 쓴다. 각 도구의 자리가 어떻게 다른지, 도구 셋이 만드는 새로운 워크플로우는 무엇인지의 관찰.`,readingTime:`7분`,status:`Draft`};function o(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`6개월 전 vs 지금`}),`
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
`,(0,i.jsxs)(t.p,{children:[`도구는 매년 바뀐다. `,(0,i.jsx)(t.strong,{children:`본인 워크플로우를 시스템으로 만들어둔 사람`}),`과 매번 새 도구 하나씩 다시 배우는 사람의 6개월 후, 1년 후, 5년 후 격차는 비선형이다.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}var c=e({default:()=>d,frontmatter:()=>l}),l={title:`AI와 일하는 법 — dispatch·quality-gate·personas 체인 워크플로우`,date:`2026-05-19`,summary:`단일 AI 도구가 아니라 도구 조합이 만드는 워크플로우. 오늘 세션에서 5번의 quality-gate, 1번의 personas, 다수의 dispatch가 보여준 패턴.`,readingTime:`6분`,status:`Draft`};function u(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`AI 도구 하나로는 부족합니다`}),`
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
`,(0,i.jsx)(t.p,{children:`오늘 이 사이트가 그 작은 증명입니다. 5번의 quality-gate가 같은 사이클로 디자인·모바일·콘텐츠·자동화를 모두 통과시켰습니다. 같은 도구가 다른 영역에 똑같이 적용됐다는 게 핵심입니다. 도구가 영역마다 다르지 않은 게, 워크플로우의 가치입니다.`})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}var f=e({default:()=>h,frontmatter:()=>p}),p={title:`자동화는 일을 줄이지 않는다 — AI 워크플로우와 거버넌스 비용`,date:`2026-05-19`,summary:`자동화 PoC를 4 페르소나로 평가했더니 결론이 뒤집혔습니다. 자동화는 일을 줄이는 게 아니라 종류를 바꿉니다. 그리고 거버넌스 부담이 본 작업보다 클 수 있습니다.`,readingTime:`4분`,status:`Published`};function m(e){let t={a:`a`,blockquote:`blockquote`,em:`em`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`"자동화하면 일이 줄어든다"는 거짓말`}),`
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
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/logs#2026-06-08-writing-bot-reversal`,children:`/logs#2026-06-08-writing-bot-reversal`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-07-healthcheck-six-bots`,children:`/logs#2026-06-07-healthcheck-six-bots`})]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}var g=e({default:()=>y,frontmatter:()=>_}),_={title:`양면 시장에서 데이터를 신뢰한다는 것 — 정확한 숫자가 분쟁을 못 막던 날`,date:`2026-05-29`,summary:`광고 플랫폼에서 측정은 정확했는데도 광고주와 매체 양쪽이 숫자를 의심했다. 신뢰가 측정과 다른 문제라는 걸 분쟁 한복판에서 배우며, 플랫폼 데이터 신뢰를 직접 설계한 기록.`,readingTime:`7분`,status:`Draft`};function v(e){let t={a:`a`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`정확한데도 안 믿는다`}),`
`,(0,i.jsx)(t.p,{children:`측정 파이프라인을 며칠 붙들고 노출 숫자를 0.1% 단위까지 맞춰 놓은 적이 있다. 로그를 다 뒤져 봐도 우리 집계는 정확했다. 그런데 그 주에 광고주는 "우리 MMP는 다른 숫자가 나온다"고 했고, 매체는 "우리 측정이랑 왜 다르냐"고 했다. 양쪽 다, 정확한 숫자를, 동시에 의심했다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`광고주: "노출 100만이라는데 진짜야? 봇 아니야? 우리 MMP는 다른 숫자인데."`}),`
`,(0,i.jsx)(t.li,{children:`매체: "우리 광고 자리에서 발생한 수익이 이거 맞아? 왜 우리 측정이랑 달라?"`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`처음엔 이걸 "신뢰 부족"이나 "측정 버그"로 봤다. 버그를 찾으러 들어갔다가, 찾을 버그가 없다는 걸 알고 나서야 다르게 보였다. 이 불신은 내 코드의 문제가 아니라 `,(0,i.jsx)(t.strong,{children:`양면 시장의 구조적 특성`}),`이었다. 플랫폼이 양쪽 사이에서 숫자를 집계하는 한, 양쪽 다 자기에게 불리한 방향의 오차를 의심할 동기가 있다. 정확도로는 닿지 않는 영역이었다.`]}),`
`,(0,i.jsx)(t.h2,{children:`왜 구조적인가`}),`
`,(0,i.jsx)(t.p,{children:`일반 시장(예: 직접 판매)에서는 측정 주체가 하나다. 내가 파는 사람이고 내가 센다. 분쟁이 적다.`}),`
`,(0,i.jsxs)(t.p,{children:[`양면 시장에서는 `,(0,i.jsx)(t.strong,{children:`플랫폼이 양쪽의 거래를 측정`}),`한다. 그리고 그 측정이 양쪽의 돈을 결정한다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`노출/클릭이 많이 집계되면 → 광고주가 더 낸다 (광고주는 적게 집계되길 원함)`}),`
`,(0,i.jsx)(t.li,{children:`노출/클릭이 많이 집계되면 → 매체가 더 받는다 (매체는 많이 집계되길 원함)`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`같은 숫자가 한쪽에는 비용, 다른 쪽에는 수익이다. `,(0,i.jsx)(t.strong,{children:`이해가 정반대`}),`다. 그래서 양쪽 다 "플랫폼 숫자가 상대방에게 유리하게 편향됐을 것"을 의심한다. 플랫폼이 아무리 정확해도 이 의심은 구조적으로 남는다.`]}),`
`,(0,i.jsx)(t.h2,{children:`그래서 신뢰를 따로 설계했다`}),`
`,(0,i.jsx)(t.p,{children:`버그가 없다는 걸 확인한 다음부터, 나는 측정 코드 대신 신뢰를 설계하기 시작했다. 정확해도 양쪽이 안 믿으면 거래가 멈춘다는 걸 분쟁 한복판에서 배웠기 때문이다. 다음 네 가지는 그렇게 하나씩 붙여 나간 장치들이다.`}),`
`,(0,i.jsx)(t.h3,{children:`제3자 검증을 끌어들이기`}),`
`,(0,i.jsx)(t.p,{children:`플랫폼 자체 숫자만으로는 양쪽을 설득할 수 없다. 우리가 "정확하다"고 백번 말해도 이해가 반대인 쪽은 안 믿는다. 그래서 판단의 무게를 중립적 제3자로 옮겼다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`MMP(Mobile Measurement Partner): AppsFlyer·Adjust 같은 독립 측정`}),`
`,(0,i.jsx)(t.li,{children:`광고 검증: IAS·DoubleVerify 같은 viewability·fraud 검증`}),`
`,(0,i.jsx)(t.li,{children:`양쪽이 동의하는 중립 기준`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`플랫폼이 "우리가 정확하다"고 말하는 것보다, 양쪽이 동의한 제3자가 "이 범위 안"이라고 하는 게 신뢰를 만든다. 설득의 주체를 우리 자신에서 중립 기준으로 옮긴 것이다.`}),`
`,(0,i.jsx)(t.h3,{children:`discrepancy를 버그가 아니라 정상으로 선언하기`}),`
`,(0,i.jsxs)(t.p,{children:[`처음 분쟁의 불씨가 됐던 게 이거였다. 플랫폼 숫자와 광고주 MMP 숫자는 `,(0,i.jsx)(t.strong,{children:`항상 다르다`}),`. 측정 시점·기준·dedup이 다르니까. 그런데 이걸 "0% 일치"인 척 숨기면, 작은 차이 하나에도 "숫자 조작" 의심이 붙는다.`]}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`discrepancy 허용 범위를 사전 합의 (보통 ±10%)`}),`
`,(0,i.jsx)(t.li,{children:`그 범위 안이면 "정상", 벗어나면 조사`}),`
`,(0,i.jsx)(t.li,{children:`왜 다른지(측정 방법론 차이)를 문서로 공개`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`"다를 수 있다, 이 범위까지는 정상"이라고 먼저 말해 두면 신뢰가 오히려 올라간다. 숨기던 걸 먼저 꺼내 놓는 쪽이 더 신뢰받는다는 게 처음엔 직관에 어긋났다.`}),`
`,(0,i.jsx)(t.h3,{children:`측정 방법론을 블랙박스에서 꺼내기`}),`
`,(0,i.jsx)(t.p,{children:`블랙박스 숫자는 불신을 키운다. 양쪽이 검증할 수 없는 숫자는 결국 안 믿는다. 그래서 각 지표가 어떻게 나오는지를 열었다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`노출은 언제 카운트되나 (서버 응답? 클라이언트 렌더? viewable?)`}),`
`,(0,i.jsx)(t.li,{children:`클릭 dedup 규칙은?`}),`
`,(0,i.jsx)(t.li,{children:`fraud 필터링은 어떻게?`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`방법론이 공개되면 양쪽이 "이 숫자가 어떻게 나왔는지" 직접 따라가 볼 수 있다. 검증 가능성이 신뢰의 기반이다.`}),`
`,(0,i.jsx)(t.h3,{children:`기본값을 약한 쪽으로 두기`}),`
`,(0,i.jsx)(t.p,{children:`가장 의식적으로 결정한 게 이 부분이었다. 양면 시장에서 보통 한쪽(매체)이 약하다. 측정 방법론을 강한 쪽(광고주)에 유리하게 기본 설정하면 당장은 조용하지만, 약한 쪽이 장기적으로 플랫폼을 떠난다 — 그러면 양면 시장 자체가 무너진다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`fraud 필터링을 과하게 → 매체 수익 부당 감소`}),`
`,(0,i.jsx)(t.li,{children:`viewability 기준을 과하게 엄격 → 매체 노출이 집계 안 됨`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`기본값을 `,(0,i.jsx)(t.strong,{children:`중립 또는 약한 쪽 보호`}),`로 두고, 강한 쪽이 더 엄격한 기준을 원하면 명시적으로 opt-in. 이게 양쪽 신뢰를 모두 유지하는 길이다.`]}),`
`,(0,i.jsx)(t.h2,{children:`무너지는 건 한순간이었다`}),`
`,(0,i.jsxs)(t.p,{children:[`이 네 장치를 붙여 신뢰가 자리 잡는 데는 수개월이 걸렸다. 일관된 정확성과 투명성을 한참 쌓아야 했다. 그런데 한쪽에 유리한 변경 하나를 조용히 내보낸 순간, 그 모든 게 흔들리는 걸 봤다. "플랫폼이 조작한다"는 인식이 한 번 박히면 그 뒤로는 멀쩡한 숫자까지 의심받는다. 그날 이후 나는 데이터 변경을 `,(0,i.jsx)(t.strong,{children:`양쪽에 동시에, 같은 문장으로`}),` 공지하는 걸 원칙으로 굳혔다. 한쪽이 먼저 알면 다른 쪽은 자기가 늦게 안 만큼 의심한다.`]}),`
`,(0,i.jsx)(t.h2,{children:`측정과 신뢰는 다른 문제다`}),`
`,(0,i.jsx)(t.p,{children:`이 일을 겪고 나서 내 안에서 가장 크게 바뀐 건 문제를 보는 위치였다. 신입 때는 "정확하게만 측정하면 된다"고 생각했다. 그래서 분쟁이 나면 본능적으로 로그부터 뒤졌다. 그러다 찾을 버그가 없는 분쟁을 한 번 제대로 겪고 나니, 정확성은 필요조건이지 충분조건이 아니라는 게 보였다. 양쪽이 그 숫자를 믿고 거래하게 하는 일은 측정 코드 바깥에 있었다. 제3자 검증, discrepancy 선언, 방법론 공개, 약한 쪽 보호 — 전부 정확성 위에 따로 올려야 하는 레이어였다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 지금은 데이터 문제를 받으면 두 가지를 분리해서 본다. 숫자가 틀렸는가, 아니면 맞는데 안 믿기는가. 전자는 코드로 풀고, 후자는 설계로 푼다. 둘을 섞어서 코드만 붙들면 영원히 못 푼다.`}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsx)(t.p,{children:`정확한 숫자를 만드는 건 절반이고, 양쪽이 그 숫자를 믿게 만드는 게 나머지 절반이다 — 나는 두 번째 절반을 직접 설계해 본 엔지니어다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/essays/two-sided-market-decisions`,children:`양면 시장에서 결정하기`}),`의 연장선이다. 거기서 "양쪽이 떠나지 않게 결정한다"였다면, 여기서는 "양쪽이 숫자를 믿게 설계한다"이다. 둘 다 양면 시장의 같은 구조에서 나온다 — 한쪽만 보면 다른 쪽이 무너진다.`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}var b=e({default:()=>C,frontmatter:()=>x}),x={title:`자율성을 어디까지 넘길까 — AI와 사람 위임의 보정`,date:`2026-05-29`,summary:`위임은 0 아니면 1이 아니다. 승인 게이트에서 시작해 검증된 결과로 자율성을 점진적으로 넓힌다. AI 에이전트든 주니어 엔지니어든 같은 보정 원리가 작동한다.`,readingTime:`7분`,status:`Draft`};function S(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`위임은 스위치가 아니라 다이얼`}),`
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
`,(0,i.jsx)(t.p,{children:`지난 2주의 콘텐츠 작업이 이 보정의 작은 사례였다. 매 라운드 결과를 검증(빌드·링크·다양성)하면서 자율성을 넓혔고, 빌드가 깨진 자리에선 자율성이 아니라 검증을 강화했다. 위임의 다이얼은 결과를 볼 수 있을 때만 안전하게 돌아간다.`})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(S,{...e})}):S(e)}var w=e({default:()=>D,frontmatter:()=>T}),T={title:`결정론적 디자인 루프 — 미적 결정을 객관화하기`,date:`2026-05-19`,summary:`디자인은 보통 주관적이지만, rubric + 페르소나 평가 + 통과 임계로 분해하면 코드처럼 "통과까지 반복"하는 결정론적 루프가 가능하다.`,readingTime:`5분`,status:`Draft`};function E(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`디자이너 없이 디자인 사이클을 돌렸습니다`}),`
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
`,(0,i.jsx)(t.p,{children:`이 사이트 자체가 그 실험의 산물입니다.`})]})}function D(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(E,{...e})}):E(e)}var O=e({default:()=>j,frontmatter:()=>k}),k={title:`무관한 자동화 여섯 개가 같은 자리에서 무너졌다 — 공간축 재발`,date:`2026-06-18`,summary:`서로 무관한 개인 자동화 여섯 개를 2주간 손봤는데, 같은 소수의 하드닝 수정이 각자의 자리에서 독립적으로 반복됐습니다. 한 곳에서 두 번이 아니라, 서로 다른 봇이 같은 결함 클래스에 한 번씩 빠지는 공간축 재발입니다.`,readingTime:`5분`,status:`Published`};function A(e){let t={a:`a`,blockquote:`blockquote`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`수렴의 충격`}),`
`,(0,i.jsx)(t.p,{children:`유튜브 알림 봇, 부동산 수집기, 티켓 랭킹, 청첩장, 주간 가든봇, 그리고 이 사이트. 도메인도 언어도 다릅니다. Python과 TypeScript가 섞여 있고, 하는 일도 모니터링·수집·알림·콘텐츠로 제각각입니다. 공유하는 코드도 없고, 같은 사람이 만들었다는 사실 말고는 공통점도 없습니다.`}),`
`,(0,i.jsxs)(t.p,{children:[`그런데 지난 2주간 이들을 하나씩 손보며 고친 버그를 한자리에 늘어놓자, 소수의 `,(0,i.jsx)(t.strong,{children:`결함 클래스`}),`로 수렴했습니다. 한 건의 실패가 전체를 끌어내리는 구조. 조용히 빠진 채 성공으로 집계되는 결손. 그리고 미리보기여야 할 경로가 운영 상태를 건드리는 부작용.`]}),`
`,(0,i.jsxs)(t.p,{children:[`흩어진 작업을 교차로 훑어보면 이게 우연이 아닙니다. 같은 결함 클래스가 `,(0,i.jsx)(t.a,{href:`/logs#2026-06-07-healthcheck-six-bots`,children:`헬스체크를 6개 봇에 돌린 2주`}),`와 한 건의 실패가 전체를 무너뜨리지 않게 한 작업 양쪽에서 독립적으로 튀어나왔습니다. 같은 처방을 서로 베낀 게 아니라, `,(0,i.jsx)(t.strong,{children:`각자의 자리에서 같은 모양으로 무너진 뒤 같은 결론에 도달`}),`한 것입니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`시간축 재발이 아니라 공간축 재발`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/notes/recurring-trap-to-checklist`,children:`같은 함정에 두 번 빠지면 체크리스트가 된다`}),`에서 다룬 건 "같은 곳에서 같은 실수 2회 = rule of two"였습니다. 한 레포 안에서 같은 함정이 시간 간격을 두고 재발하면, 그 한 곳에 자동 검사를 박거나 구조를 재설계합니다. 재발의 축이 `,(0,i.jsx)(t.strong,{children:`시간`}),`입니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`이번에 본 건 축이 다릅니다. 서로 다른 봇이 같은 결함 클래스에 `,(0,i.jsx)(t.strong,{children:`각각 한 번씩`}),` 빠집니다. 한 봇만 떼어놓고 보면 전부 "첫 실수"입니다. 첫 실수에는 보통 검사를 안 박습니다 — 과잉이니까. 그래서 같은 자리가 다른 봇에서 N번 비어 있게 됩니다. 재발의 축이 `,(0,i.jsx)(t.strong,{children:`공간`}),`입니다.`]}),`
`,(0,i.jsxs)(t.blockquote,{children:[`
`,(0,i.jsx)(t.p,{children:`N개 봇의 1회씩이 모이면, 그것도 패턴입니다. 한 곳만 보면 영영 보이지 않는 패턴.`}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[`처방도 달라집니다. 시간축 재발은 한 레포 안의 hook으로 막습니다. 공간축 재발은 hook으로 막을 수 없습니다. 한 곳에서 배운 fix를 `,(0,i.jsx)(t.strong,{children:`나머지 전부로 횡적으로 이식`}),`해야 합니다. 결함 클래스 체크리스트를 만들어 모든 봇에 한 번씩 통과시키는 것 — 그게 공간축 재발의 처방입니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`왜 개인 프로젝트일수록 같은 클래스에서 무너지나`}),`
`,(0,i.jsx)(t.p,{children:`이 fix들은 새로운 지식이 아닙니다. 원자적 쓰기, dry-run의 read-only 보장, per-item 격리, 결손 카운터. 회사 일에서는 진작 당연하게 박던 것들입니다. 그런데 취미 봇에는 "이 정도는 사치"라며 안 박았습니다. "나만 쓰는 건데", "어차피 잘 돌잖아" — 그 믿음이 바로 가드의 부재였습니다.`}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/logs#2026-06-07-healthcheck-six-bots`,children:`헬스체크를 6개 봇에 돌린 2주`}),`에서 가장 흔한 결함이 에러가 아니라 조용히 빠지는 경로였던 것도 같은 이유입니다. 던지는 예외가 없으니 모니터링이 못 잡고, "개인 프로젝트라 안 박은 가드"가 정확히 그 빈자리였습니다. 한 건의 실패가 전체를 무너뜨리지 않게 한 작업에서 본 원자적 쓰기와 per-item 격리도 한 레포의 이야기로 끝나지 않았습니다. 다른 봇을 열 때마다 같은 빈자리가 나왔습니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:`"개인 사이드 프로젝트 = 하드닝 면제"라는 통념이, 바로 여러 곳에서 같은 자리를 비워둔 원인`}),`이었습니다. 결함이 무관한 도메인에 분산돼 있을 뿐, 그것을 막는 습관이 동일하게 빠져 있었으니 같은 모양으로 무너지는 게 당연했습니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`AI가 무너뜨린 것은 지식이 아니라 적용 비용`}),`
`,(0,i.jsxs)(t.p,{children:[`그렇다면 왜 하필 지금 여섯 곳을 한꺼번에 손봤을까요. 달라진 건 무엇이 옳은 fix인지에 대한 지식이 아닙니다. `,(0,i.jsx)(t.strong,{children:`같은 수정을 이질적인 여섯 개 봇에 옮기는 한계비용이 한 오후로 줄었다는 것`}),`입니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/essays/automation-doesnt-reduce-work`,children:`자동화는 일을 줄이지 않는다`}),`는 거버넌스 비용이 본 작업을 추월하는 쪽 — 비용이 늘어나는 이야기였습니다. 이 글은 그 거울상입니다. 하드닝을 적용하는 비용이 0에 수렴하는 쪽. 한쪽은 자동화가 만든 운영 부담을, 다른 쪽은 AI가 없앤 이식 부담을 말합니다. 둘이 맞물려야 그림이 완성됩니다 — 비용은 어떤 축에서는 늘고 어떤 축에서는 줄어듭니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`메커니즘은 둘입니다. 하나는 같은 작업을 Claude와 Codex로 병렬로 굴려 `,(0,i.jsx)(t.a,{href:`/notes/codex-competition`,children:`교차 검증`}),`하는 것입니다. 한 곳에서 잡은 결함의 교정 근거가 커밋 메시지에 그대로 남아, 다음 봇에 옮길 때 검증된 템플릿이 됩니다. 다른 하나는 N개 에이전트를 같은 진단 질문으로 fan-out하는 것입니다. 같은 헬스체크 렌즈를 거의 모든 봇에 재사용하니, `,(0,i.jsx)(t.strong,{children:`같은 성숙도의 안전망을 한 번에 N곳에 입히는`}),` 게 가능해졌습니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`무엇부터 이식하나`}),`
`,(0,i.jsx)(t.p,{children:`여러 개의 개인 자동화를 굴리는 사람이라면, 이식 순서는 이렇게 잡습니다.`}),`
`,(0,i.jsxs)(t.ol,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`원자적 쓰기`}),` — temp 파일에 다 쓰고 rename으로 교체. 중간에 죽어도 상태 파일이 반쪽으로 남지 않습니다. 손상의 폭발 반경을 0으로 만드는 가장 싼 가드입니다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`dry-run의 read-only 보장`}),` — 미리보기 경로가 운영 상태를 건드리지 않게. 미리보기의 부작용은 진짜 실행의 버그보다 잡기 어렵습니다.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`per-item 격리 + 결손 카운터`}),` — 루프 한 바퀴를 try로 감싸 한 건의 실패를 한 건으로 가두되, 빠진 개수를 세어 기대보다 적으면 경보. 격리가 실패를 숨기지 않게 하는 짝입니다.`]}),`
`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/logs#2026-06-09-ci-gate-ratchet`,children:`CI 게이트 래칫`}),`이 한 레포의 검사를 시간축으로 한 칸씩 조이는 패턴이었다면, 여기서는 `,(0,i.jsx)(t.strong,{children:`같은 한 칸을 N개 봇에 동시에 적용`}),`합니다. AI가 이식 비용을 낮춘 덕에 래칫을 한 줄이 아니라 병렬로 돌릴 수 있게 됐습니다. 여러 개인 봇을 굴린다면, 지금 한 봇에서 고친 가드를 오늘 나머지에 그대로 복사해보세요 — 회사 일에서 이미 알던 fix를, 취미 봇 전부에 같은 성숙도로 입히는 가장 싼 방법입니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/essays/automation-doesnt-reduce-work`,children:`/essays/automation-doesnt-reduce-work`}),`, `,(0,i.jsx)(t.a,{href:`/notes/recurring-trap-to-checklist`,children:`/notes/recurring-trap-to-checklist`}),`, `,(0,i.jsx)(t.a,{href:`/notes/codex-competition`,children:`/notes/codex-competition`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-07-healthcheck-six-bots`,children:`/logs#2026-06-07-healthcheck-six-bots`})]})]})}function j(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(A,{...e})}):A(e)}var M=e({default:()=>F,frontmatter:()=>N}),N={title:`내 자동화를 4개 AI 페르소나로 심사했더니, 가장 아픈 한 방은 '나' 자신이 날렸다`,date:`2026-05-19`,summary:`AI 4명에게 내 자동화 PoC를 평가시켰다. 셋은 기술 위험을 짚었고, '6개월 뒤에도 이걸 쓸까'를 짚은 건 나를 시뮬레이션한 페르소나 하나였다. 그날 이후 모든 설계 리뷰에 '나'를 한 명 넣는다.`,readingTime:`4분`,status:`Published`};function P(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`진짜 BLOCKING을 짚은 건 누구였나`}),`
`,(0,i.jsx)(t.p,{children:`내가 만든 글쓰기 자동화 PoC를, 출시 전에 AI 페르소나 4명을 동시에 띄워 심사에 부쳤습니다. 시니어 자동화 엔지니어, 보안 검토자, 콘텐츠 전략가, 그리고 6개월 뒤의 나를 그대로 시뮬레이션한 페르소나 한 명. 각자 다른 렌즈로 같은 시스템을 찢어보게 했습니다.`}),`
`,(0,i.jsx)(t.p,{children:`세 외부 페르소나는 정확히 자기 직무대로 "기능적 위험"을 잡았습니다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`엔지니어: measurement·복구·운영 비용`}),`
`,(0,i.jsx)(t.li,{children:`보안: NDA·credentials·incident response`}),`
`,(0,i.jsx)(t.li,{children:`콘텐츠 전략가: 톤 일관성·자동 발행 신뢰성`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`안전한 시스템 설계의 표준 체크리스트이고, 셋 다 맞는 말이었습니다. 그대로 반영하면 "잘 동작하는" 시스템이 나왔을 겁니다.`}),`
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
`,(0,i.jsx)(t.h2,{children:`왜 '나' 페르소나만 이걸 봤나`}),`
`,(0,i.jsx)(t.p,{children:`외부 페르소나 셋은 "오늘 출시되는 시스템"을 봅니다. 평일 9시-6시 가상 시나리오에서 잘 돌아가는지를 검증하죠. 반면 '나' 페르소나는 그 시스템 안에서 6개월을 살아야 하는 사람의 시점에 섭니다.`}),`
`,(0,i.jsx)(t.p,{children:`차이는 거기서 나왔습니다. 스프린트 마감 주의 압박, 회의 폭증, 휴가 빈도 — 진짜 회사 일정은 나만 압니다. 새 시스템에 대한 흥미가 첫 2주에 정점을 찍고 누적적으로 식는다는 것도, 자동화가 떠넘긴 검토 부담을 30일째의 내가 견딜 수 있는지도, 솔직하게 답할 수 있는 건 나뿐입니다. 외부 페르소나의 모범 답안지에는 이 항목 자체가 없습니다.`}),`
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
`,(0,i.jsx)(t.h2,{children:`35%를 받았다고 폐기하지는 않았다`}),`
`,(0,i.jsx)(t.p,{children:`그렇다고 '나' 페르소나를 맹신하지는 않습니다. 자칫하면 모든 제안이 "그냥 안 만드는 게 낫다"로 끝나 진전이 멈춥니다. 사람은 자기 행동을 평균적으로만 맞히기 때문에 "지속률 35%"는 실제로 60%일 수도, 15%일 수도 있죠. 그래서 외부 페르소나의 "어떻게든 만들어야"와 반드시 교차 검증을 겁니다.`}),`
`,(0,i.jsx)(t.p,{children:`대신 35%를 폐기 사유가 아니라 재설계의 출발점으로 씁니다. "35%인 이유가 manual 트리거를 까먹기 때문이라면, passive trigger와 알림을 붙여 70%까지 끌어올릴 수 있는가?" — 이렇게 BLOCKING 하나를 잡고 시스템을 다시 짜자, 외부 페르소나만으로는 보이지 않던 sustainable한 설계가 나왔습니다.`}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsxs)(t.p,{children:[`시스템이 `,(0,i.jsx)(t.strong,{children:`돌아갈지`}),`는 AI가 알지만, 시스템이 `,(0,i.jsx)(t.strong,{children:`살아남을지`}),`는 그걸 매일 써야 하는 내가 압니다. 그래서 나는 잘 돌아가는 PoC를 만드는 데서 멈추지 않고, 그걸 6개월 뒤에도 쓰게 만드는 데까지 책임지는 사람으로 일합니다 — 그날 이후 모든 설계 리뷰에 '나'를 한 명 넣은 이유입니다.`]})]})}function F(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(P,{...e})}):P(e)}var I=e({default:()=>z,frontmatter:()=>L}),L={title:`단발 조회가 초과분을 조용히 버린다 — truncation 결함의 시·공간 재발`,date:`2026-06-29`,summary:`서로 무관한 두 저장소가 같은 날, "한 번만 조회하고 나머지를 조용히 버리는" 같은 결함에 독립적으로 빠졌습니다. 게다가 한 저장소 안에서는 같은 버그를 한 곳만 고치고 복제 경로에 남겨, 12일 뒤 같은 자리가 또 터졌습니다. 공간축 재발에 시간축 재발이 겹친 한 결함 클래스의 기록입니다.`,readingTime:`6분`,status:`Published`};function R(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,strong:`strong`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`같은 날, 두 저장소`}),`
`,(0,i.jsxs)(t.p,{children:[`6월 22일에 고친 버그 두 개를 나란히 놓고서야 같은 얼굴인 걸 알았습니다. 하나는 청약 공고 수집기(Python)였습니다. 청약홈 OpenAPI를 `,(0,i.jsx)(t.code,{children:`page=1`}),`, `,(0,i.jsx)(t.code,{children:`perPage=100`}),`으로 `,(0,i.jsx)(t.strong,{children:`한 번만`}),` 호출하고 끝냈는데, 공고가 100건을 넘으면 101번째부터는 조용히 사라졌습니다. 다른 하나는 청첩장 관리자 대시보드(TypeScript)였습니다. 방문·행동 집계 쿼리가 `,(0,i.jsx)(t.code,{children:`.limit(5000)`}),` 단발 조회였는데, PostgREST 서버가 `,(0,i.jsx)(t.code,{children:`max-rows`}),` 기본값 1,000에서 응답을 잘랐습니다. 헬스체크 실측으로는 30일 분석 이벤트 8,900여 행 중 1,000행만 집계되고 있었습니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`도메인도, 언어도, 데이터 소스도 다릅니다. 공유하는 코드도 없습니다. 그런데 결함의 모양이 정확히 같았습니다. `,(0,i.jsx)(t.strong,{children:`한 번 조회하고, 상한을 넘긴 나머지를 에러 없이 버린다.`}),` 같은 날 다른 저장소에서 같은 자리가 비어 있었습니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:`/essays/same-defect-class-across-repos`,children:`무관한 자동화 여섯 개가 같은 자리에서 무너졌다`}),`에서 공간축 재발을 다뤘습니다. 그때의 결함 클래스는 원자적 쓰기·dry-run의 read-only 보장·per-item 격리였습니다. 이번엔 거기 없던 새 클래스가 같은 축으로 또 튀어나왔습니다 — 페이지네이션 truncation입니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`truncation이 유독 위험한 이유`}),`
`,(0,i.jsxs)(t.p,{children:[`대부분의 버그는 무언가를 던집니다. 500이 나거나, 예외가 올라오거나, 타임아웃이 납니다. 그래서 모니터링이 잡습니다. truncation은 그렇지 않습니다. 서버는 200을 주고, 1,000행은 진짜 유효한 데이터이며, 코드는 정상적으로 끝납니다. `,(0,i.jsx)(t.strong,{children:`"부분 응답"은 에러가 아니라 정상적인 성공으로 집계됩니다.`}),` 잘렸다는 신호가 응답 어디에도 없습니다.`]}),`
`,(0,i.jsx)(t.p,{children:`그래서 이 결함은 도입된 시점이 아니라 한참 뒤에 발견됩니다. 데이터가 상한 미만일 때는 멀쩡히 돌다가, 트래픽이 상한을 넘는 순간부터 조용히 일부만 세기 시작합니다. 대시보드는 여전히 숫자를 보여주고, 그 숫자는 그럴듯합니다. 다만 틀렸을 뿐입니다. 예식일처럼 트래픽이 몰리는 날일수록 더 많이 잘리고, 하필 그날 수치가 가장 중요합니다.`}),`
`,(0,i.jsx)(t.h2,{children:`절단점 바깥에 있던 죽은 가드`}),`
`,(0,i.jsxs)(t.p,{children:[`더 뼈아픈 건 대시보드에 truncation을 감지하라고 둔 가드가 `,(0,i.jsx)(t.strong,{children:`이미 있었다`}),`는 점입니다. `,(0,i.jsx)(t.code,{children:`rows.length >= 5000`}),`이면 "잘렸을 수 있음"으로 표시하는 코드였습니다. 그런데 서버가 1,000행에서 먼저 자르니, 받은 행 수가 5,000에 닿을 길이 애초에 없었습니다. 가드의 임계가 실제 절단점보다 위에 있어서, 정의돼 있어도 영원히 발화하지 않는 `,(0,i.jsx)(t.a,{href:`/logs#2026-06-18-dead-safeguards`,children:`죽은 안전장치`}),`였던 것입니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`이건 `,(0,i.jsx)(t.a,{href:`/notes/dead-retry-bounded-executor`,children:`정의만 되고 호출자가 0건이던 재시도`}),`와 같은 계열의, 그러나 다른 모양입니다. 그건 "안 돈다"였고, 이건 "돌 수 있는 좌표 밖에 있다"입니다. 침묵을 막으라고 둔 가드가, 침묵하는 실패가 일어나는 지점과 다른 좌표계에 살고 있었습니다. 가드는 클라이언트가 요청한 상한(5,000)을 보고 있었고, 실패는 서버가 정한 상한(1,000)에서 일어났습니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`시간축 재발 — 한 곳만 고치고 복제를 남겼다`}),`
`,(0,i.jsxs)(t.p,{children:[`대시보드의 이 버그는 사실 그 저장소에서 처음 본 얼굴도 아니었습니다. 12일 전, 같은 결함을 텔레그램 일일 브리핑에서 먼저 고쳤습니다. 그때도 `,(0,i.jsx)(t.code,{children:`.limit()`}),` 단발 조회가 서버 max-rows에 잘려, 전일 대비 수치가 이미 오염돼 있었습니다. 페이지네이션으로 고쳤고, 닫혔다고 생각했습니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`문제는 브리핑과 대시보드가 `,(0,i.jsx)(t.strong,{children:`같은 쿼리를 각자 복제해서`}),` 쓰고 있었다는 것입니다. 한 곳을 고칠 때 복제본을 남기면, 그 복제가 다음 재발의 씨앗이 됩니다. 12일 뒤 헬스체크가 대시보드 쪽 잔존분을 잡았습니다. 같은 결함이 같은 저장소 안에서, 복제 경로를 타고 시간 간격을 두고 다시 터진 `,(0,i.jsx)(t.a,{href:`/notes/recurring-trap-to-checklist`,children:`시간축 재발`}),`입니다.`]}),`
`,(0,i.jsxs)(t.p,{children:[`그래서 두 번째 수정은 페이지네이션을 또 한 벌 짜는 대신, 공용 헬퍼 하나로 추출하고 브리핑의 복제본까지 그 헬퍼로 흡수했습니다. 패치를 하나 더 바르는 게 아니라, `,(0,i.jsx)(t.strong,{children:`복제 경로 자체를 없애 재발 계열을 제거`}),`하는 쪽입니다. 같은 버그를 N번째 고칠 땐 "이 fix가 들어갈 자리가 여기 말고 또 어디 있나"가 진짜 질문입니다.`]}),`
`,(0,i.jsx)(t.h2,{children:`"가득 찬 페이지" 가정을 버린다`}),`
`,(0,i.jsx)(t.p,{children:`페이지네이션으로 고칠 때도 함정이 하나 더 있었습니다. 흔한 종료 조건은 "받은 행이 페이지 크기보다 적으면 마지막 페이지"입니다. 그런데 서버 max-rows가 페이지 크기보다 작으면(여기선 1,000 < 요청 크기), 첫 페이지부터 "덜 찬 페이지"로 보여 한 바퀴 만에 멈춰 버립니다 — truncation을 고치려던 코드가 같은 방식으로 다시 자르는 것입니다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 종료 조건을 "페이지가 가득 찼는가"가 아니라 **"빈 페이지가 나왔는가"**로 바꾸고, 매번 실제로 받은 행 수만큼만 다음 오프셋을 전진시켰습니다. 이러면 서버 상한이 페이지 크기보다 낮아도 절단되지 않습니다. 이 불변식은 텔레그램 브리핑을 고칠 때 독립적인 리뷰 렌즈 두 개가 같은 결론으로 수렴해 찾아낸 것이고, 청약 수집기 쪽도 결국 같은 모양으로 — 짧은 페이지가 나올 때까지 돌고, 안전 상한(10페이지)에 닿으면 로그로 경고 — 정착했습니다.`}),`
`,(0,i.jsx)(t.h2,{children:`메커니즘은 달라도 증상은 같다`}),`
`,(0,i.jsxs)(t.p,{children:[`공간축으로 묶인 두 사례의 원인은 사실 서로 다릅니다. 청약 수집기는 `,(0,i.jsx)(t.code,{children:`perPage`}),`를 100으로 명시한 단발 호출이었고, 대시보드는 PostgREST의 전역 `,(0,i.jsx)(t.code,{children:`max-rows`}),`라는 보이지 않는 서버 설정이었습니다. 한쪽은 내가 쓴 숫자, 다른 쪽은 인프라가 정한 숫자입니다. 그런데 증상은 똑같았습니다 — `,(0,i.jsx)(t.strong,{children:`상한을 넘긴 데이터가 에러 없이 사라진다.`})]}),`
`,(0,i.jsx)(t.p,{children:`이게 결함 클래스로 묶이는 이유입니다. "단발 조회 + 암묵적 상한"이라는 구조는 그 상한이 내 코드에 있든 서버 설정에 있든 같은 침묵을 만듭니다. 그러니 처방도 출처를 가리지 않습니다. 외부에서 목록을 받아오는 모든 자리에 같은 질문을 던지면 됩니다 — "이 응답에 상한이 있나? 있다면 넘쳤을 때 그걸 알 방법이 있나?" 답이 "끝까지 페이지를 넘긴다"와 "상한에 닿으면 시끄럽게 운다" 둘 다 아니라면, 그 자리는 언젠가 조용히 일부만 세기 시작할 자리입니다.`}),`
`,(0,i.jsx)(t.p,{children:`목록을 한 번에 가져오는 코드는, 그 목록이 짧을 때만 옳습니다. 길어질 수 있는 목록을 단발로 조회하는 순간, truncation은 버그가 아니라 예약된 미래입니다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/essays/same-defect-class-across-repos`,children:`/essays/same-defect-class-across-repos`}),`, `,(0,i.jsx)(t.a,{href:`/notes/recurring-trap-to-checklist`,children:`/notes/recurring-trap-to-checklist`}),`, `,(0,i.jsx)(t.a,{href:`/notes/dead-retry-bounded-executor`,children:`/notes/dead-retry-bounded-executor`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-18-dead-safeguards`,children:`/logs#2026-06-18-dead-safeguards`}),`, `,(0,i.jsx)(t.a,{href:`/logs#2026-06-07-healthcheck-six-bots`,children:`/logs#2026-06-07-healthcheck-six-bots`})]})]})}function z(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(R,{...e})}):R(e)}var B=e({default:()=>U,frontmatter:()=>V}),V={title:`양면 시장에서 결정하기 — 광고주를 만족시킬수록 매체가 떠나던 자리에서`,date:`2026-05-29`,summary:`광고 플랫폼에선 한쪽을 100점 만족시키는 결정이 다른 쪽을 떠나게 만든다. 대시보드 맨 앞에 무엇을 둘지, 기본값을 누구 편으로 설계할지 — 매번 양쪽을 저울에 올려 내려야 했던 결정들.`,readingTime:`7분`,status:`Published`};function H(e){let t={a:`a`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`광고주를 만족시킬수록 매체가 떠나던 자리`}),`
`,(0,i.jsx)(t.p,{children:`광고주가 더 정밀한 targeting을 요청한다. 들어주면 광고주 ROI가 오른다. 동시에 매체 사용자의 프라이버시를 더 깊이 들여다보게 되고, 매체는 SDK 사용을 조이기 시작한다. 매체가 더 높은 단가를 요구한다. 들어주면 매체 수익이 오른다. 동시에 광고주 ROI가 깎이고, 광고주는 예산을 다른 채널로 옮긴다.`}),`
`,(0,i.jsx)(t.p,{children:`광고 플랫폼에서 일하면서 거의 모든 결정이 이 모양이었다. 한쪽을 100점 만족시키는 버튼이 항상 눈앞에 있었고, 그 버튼은 반대쪽을 조용히 떠나게 만들었다. 광고주와 매체, 어느 쪽도 내 KPI 문서에 "잃어도 되는 쪽"이라고 적혀 있지 않았다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 결정 기준을 따로 세워야 했다. 누구 편을 들지가 아니라, 누가 떠나는지를 먼저 보는 기준을.`}),`
`,(0,i.jsx)(t.h2,{children:`한 축이 아니라 두 축`}),`
`,(0,i.jsx)(t.p,{children:`이전에 일반 제품을 다룰 때는 사용자 만족이라는 한 축만 보면 됐다. 그 축을 올리는 결정이 곧 좋은 결정이었다.`}),`
`,(0,i.jsx)(t.p,{children:`양면 시장은 그게 안 통했다. 한쪽 축을 올리면 다른 쪽 축이 내려가고, 게다가 한쪽이 임계 이하로 빠지면 반대쪽도 따라 무너진다(network effect). 광고 inventory가 마르면 광고주가 자리를 못 찾고, 광고주가 빠지면 inventory가 안 팔려 매체가 떠난다. 두 축을 동시에 떠받쳐야 시장이 선다.`}),`
`,(0,i.jsx)(t.p,{children:`이 구조를 받아들이고 나니, 결정할 때마다 같은 질문들을 반복해서 던지게 됐다.`}),`
`,(0,i.jsx)(t.h2,{children:`1. "이 결정으로 누가 떠나는가"`}),`
`,(0,i.jsx)(t.p,{children:`결정 앞에서 가장 먼저 던지는 질문. 영향이 어느 쪽에 더 큰지.`}),`
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
`,(0,i.jsxs)(t.p,{children:[`그래서 기본값은 약한 쪽을 보호하는 방향으로 설계했다. 광고 노출 시간 상한(`,(0,i.jsx)(t.a,{href:`/notes/frequency-capping-distributed`,children:`frequency capping`}),`)을 끄지 않으면 켜진 상태로 두고, 사용자 데이터 사용은 제한을 기본으로 깔고, 광고 형식 가이드라인은 매체 UX를 깎는 쪽을 막는 선에서 시작했다. 강한 쪽인 광고주가 더 공격적인 옵션을 원하면 명시적으로 opt-in 하게 했다 — 그 순간 양쪽 모두 무슨 거래를 하는지 의식하게 된다.`]}),`
`,(0,i.jsx)(t.p,{children:`반대로 기본값을 강한 쪽 편으로 깔면, 약한 쪽이 스스로 알아서 보호 장치를 켜야 한다. 협상력도 정보도 부족한 쪽에게 그건 사실상 보호가 없는 것과 같다. 기본값은 가장 조용한 결정이면서, 매번 다시 협상하지 않아도 되는 가장 강한 결정이었다.`}),`
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
`,(0,i.jsx)(t.p,{children:`강한 쪽 지표는 시장이 무너지기 직전까지 좋아 보일 수 있다. 광고주는 불만이 생기면 미팅을 잡고 메일을 보내 직접 알려준다. 매체는 한 명씩 SDK를 빼고 조용히 사라진다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 대시보드를 다시 짤 때 약한 쪽 지표 — SDK 통합 유지율, 매체 사용자 NPS, 광고 자리 축소 빈도 — 를 맨 위로 끌어올리고 강한 쪽 지표를 아래로 내렸다. 알람도 같은 순서로 걸었다. 강한 쪽은 알람이 없어도 신호가 들어오니까, 알람의 자리는 조용히 떠나는 쪽 몫이었다.`}),`
`,(0,i.jsx)(t.h2,{children:`KPI를 한 축에서 쌍으로 바꾼 일`}),`
`,(0,i.jsx)(t.p,{children:`가장 자주 본 실수는 분기 KPI 한 축에 매몰되는 것이었다. "이번 분기는 광고 매출"이면 매체가 떠나는 신호를 못 보고, "이번 분기는 매체 통합"이면 광고주 ROI가 깎이는 걸 못 본다. KPI는 한 축인데 시장은 두 축이라, 한쪽만 보면 다음 분기 KPI까지 같이 무너졌다.`}),`
`,(0,i.jsx)(t.p,{children:`그래서 지표를 단독으로 두지 않고 항상 쌍으로 묶었다. 매출은 retention과 함께, targeting 성과는 매체 이탈률과 함께. 한쪽 숫자가 올라가도 짝지은 다른 쪽이 내려가면 그 분기는 성공이 아니라고 판정했다. 한 축짜리 KPI는 자기도 모르게 한쪽 편을 들게 만들지만, 쌍으로 묶인 KPI는 들 수 없게 만든다.`}),`
`,(0,i.jsx)(t.h2,{children:`함정`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`한쪽 stakeholder에 과도하게 노출`}),`: 광고주와 자주 회의하면 광고주 관점에 편향. 매체 회의도 같은 빈도로.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`A/B 테스트를 한쪽 지표로만`}),`: 매출 ↑ 보이면 통과, 사용자 NPS ↓ 안 보임. 양쪽 지표 동시 측정.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`양면 시장 패턴을 모든 일반 시장에 적용`}),`: 일반 시장은 양면이 아니어서 양쪽 균형 고민 불필요. 양면 시장만의 패턴.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`네트워크 효과의 무서움 무시`}),`: 한쪽이 임계 이하로 떨어지면 다른 쪽도 빠진다. 임계 미리 측정.`]}),`
`,(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:`"균형"을 무책임으로 합리화`}),`: 양쪽 다 약간 불만족인 결정을 "균형"이라 부르지만 사실은 결정 회피. 진짜 균형은 양쪽이 거래의 가치를 동의하는 것.`]}),`
`]}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsx)(t.p,{children:`광고 플랫폼에서 일하기 전까지 좋은 결정은 한 축을 최대한 올리는 거라고 생각했다. 양면 시장은 그 본능을 매번 거슬러야 하는 자리였다. 누가 떠나는지를 먼저 보고, 기본값을 약한 쪽에 깔고, 대시보드 맨 위 자리를 조용히 사라지는 쪽에 내주는 일.`}),`
`,(0,i.jsxs)(t.p,{children:[`마켓플레이스든 결제든 소셜이든 앱스토어든, 두 축을 동시에 떠받쳐야 하는 자리라면 같은 본능을 거슬러야 한다고 믿는다. 결국 내가 배운 한 문장은 이거다 — `,(0,i.jsx)(t.strong,{children:`한쪽을 100점 만들 수 있는 버튼을 봤다면, 먼저 반대쪽이 그 100점만큼 떠나는지를 확인한다.`})]})]})}function U(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(H,{...e})}):H(e)}var W=e({default:()=>q,frontmatter:()=>G}),G={title:`이력서 대신 매일 자라는 사이트를 만든 이유`,date:`2026-05-19`,summary:`매주 월요일 10시, 에이전트가 초안을 PR로 올리면 저는 그걸 다듬어 머지합니다. 이력서가 비석이라면, 이 사이트는 제가 매일 가동하는 시스템입니다.`,readingTime:`6분`,status:`Published`};function K(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{children:`매주 월요일 10시, 에이전트가 PR을 올린다`}),`
`,(0,i.jsx)(t.p,{children:`매주 월요일 아침 10시, 제가 만든 에이전트가 이 사이트에 글 초안을 PR로 올립니다. 저는 그걸 열어 사건을 다시 세우고, 지어낸 수치를 걷어내고, 제 목소리로 다듬어 머지합니다. 사이트는 그렇게 매주 자랍니다 — 제 의지가 아니라 시스템으로.`}),`
`,(0,i.jsx)(t.p,{children:`이 사이트 자체가 제가 어떻게 일하는지를 보여주는 증거입니다. AI에게 글을 통째로 맡기지 않고, 반복되는 부분만 자동화한 뒤 판단이 필요한 자리는 제가 쥡니다. 에이전트가 초안을 만들고, 제가 사실과 보이스를 책임지고, commit 한 번으로 인덱스가 갱신됩니다. 이 루프가 6년 묵힌 portfolio를 다시 살아 움직이게 만든 장치입니다.`}),`
`,(0,i.jsx)(t.p,{children:`6년 동안 저는 같은 portfolio 하나를 방치하고 있었습니다. 마지막 업데이트는 첫 회사 입사 시점. 그 옆으로 매주의 일, 매달의 결정, 매년의 시스템이 흘러갔지만 portfolio에는 한 줄도 남지 않았습니다. 이력서도 마찬가지입니다. 누군가 제 이력서를 10초 보고 "이 사람과 일하면 어떨까"를 판단해야 한다면, 그 10초에 들어가는 건 회사 이름·기간·역할명뿐입니다. 그래서 자동화로 갭을 메우기로 했습니다.`}),`
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
`,(0,i.jsx)(t.p,{children:`이걸 시스템으로 만들지 않으면 매일 다듬는 일은 안 됩니다. 사람의 의지에 의존하는 시스템은 한 달 안에 멈춥니다. 그래서 의지가 아니라 구조에 일을 떠넘겼습니다.`}),`
`,(0,i.jsxs)(t.ul,{children:[`
`,(0,i.jsx)(t.li,{children:`주간 에이전트가 월요일 10시에 글 초안 PR을 자동 생성 — 빈 페이지에서 시작하지 않게`}),`
`,(0,i.jsx)(t.li,{children:`lastTendedAt을 frontmatter에 강제 — 안 다듬으면 티가 나게`}),`
`,(0,i.jsx)(t.li,{children:`Logs는 entry 추가가 commit 한 번 — 마찰을 0에 가깝게`}),`
`,(0,i.jsx)(t.li,{children:`Notes는 짧은 추가가 즉시 garden 인덱스 갱신 — 한 문단도 살아있게`}),`
`,(0,i.jsx)(t.li,{children:`Cross-link이 그래프를 만들어 한 노트의 갱신이 다른 노트의 가시성도 살림`}),`
`]}),`
`,(0,i.jsx)(t.p,{children:`핵심은 에이전트에게 글쓰기를 시키는 게 아니라, 제가 판단해야 할 자리와 기계가 반복하면 되는 자리를 갈라놓는 설계입니다. 초안 생성·인덱싱·메타 강제는 기계가, 사실 검증·결정의 서술·보이스는 제가. 그래서 매일 큰 글 한 편이 아니라, 매일 작은 갱신 5개가 쌓입니다.`}),`
`,(0,i.jsx)(t.h2,{children:`채용 시장이 바뀌었다`}),`
`,(0,i.jsx)(t.p,{children:`ChatGPT 시대 이전과 이후, 이력서의 가치가 바뀌었습니다.`}),`
`,(0,i.jsx)(t.p,{children:`이력서를 잘 쓰는 것도 이제 AI가 합니다. 같은 이력서 양식 안에서는 누구나 비슷한 수준의 "잘 정리된 한 페이지"가 나옵니다. 변별력이 떨어집니다.`}),`
`,(0,i.jsx)(t.p,{children:`채용 담당자도 이걸 압니다. 그래서 "이력서 너머의 증거"를 봅니다. GitHub 활동, 블로그 글, 개인 사이트, 오픈소스 기여. 이 모두가 proof-of-work입니다.`}),`
`,(0,i.jsx)(t.p,{children:`이력서가 사라지지는 않을 겁니다. 하지만 이력서 한 장으로 끝나는 시대는 끝났습니다. 같은 사람의 같은 경력을 어떤 형태로 보여주느냐가 점점 더 중요해집니다.`}),`
`,(0,i.jsx)(t.h2,{children:`결론`}),`
`,(0,i.jsx)(t.p,{children:`이력서 한 장은 6년의 시간을 압축하기에 너무 작습니다.`}),`
`,(0,i.jsx)(t.p,{children:`이력서가 사라져야 한다는 말은 아닙니다. 10초 안에 1차 거름망의 역할은 여전히 합니다. 그 다음에 "이 사람과 일하면 어떨까"를 판단하는 자리에서는 proof-of-work 사이트가 필요합니다.`}),`
`,(0,i.jsx)(t.p,{children:`이 사이트는 그 두 번째 자리에 들어가려는 시도입니다. 케이스로 결정을 보여주고, 노트로 학습을 누적하고, 로그로 시간의 차이를 보여줍니다. 그리고 에이전트가 매주 초안을 올리고 제가 다듬는 루프 위에서 매일 자랍니다.`}),`
`,(0,i.jsx)(t.p,{children:`저를 한 줄로 기억하셔야 한다면 이렇게 적어 주세요: 이력서가 비석이라면, 이 사이트는 제가 직접 만들어 매주 돌리는, 살아 자라는 정원입니다.`}),`
`,(0,i.jsxs)(t.p,{children:[`관련: `,(0,i.jsx)(t.a,{href:`/notes/recruiter-10-seconds`,children:`/notes/recruiter-10-seconds`})]})]})}function q(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(K,{...e})}):K(e)}export{O as a,g as c,r as d,M as i,f as l,B as n,w as o,I as r,b as s,W as t,c as u};