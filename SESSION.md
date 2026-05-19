# SESSION.md — daily-log 자동화 v2

자동화 시스템 PoC v2 작업 컨텍스트. compact 내성 + 다음 세션 인계용.

## 작업 정의

- **목적**: Claude/Codex transcript → justinjeong5.github.io 콘텐츠(Logs/Notes/Essays) 자동 추출
- **PoC v1 시연**: 완료 (`.cache/daily/2026-05-19.mdx` 산출, 사용자 결정 B로 v2 진행)
- **PoC v2**: 4주 dry-run + 2주 publish 보수적 운영

## 통과 기준 (사용자 명시)

- Acceptance Rate ≥ 50%
- 평균 promote 소요 ≤ 7분
- 보안 사고 0건
- 14일 중 10일 운영 (빠진 날 죄책감 금지)

## 절대 위반 금지 (BLOCKING)

- **첫 4주 dry-run only** (publish 차단, `.cache/`에만 산출)
- **Default-deny 보안 모델** (allowlist 외 의심 처리)
- **Redaction LLM ≠ Summary LLM** 분리 + second-pass 독립 스캔
- **24시간 publish cooldown** (작성일 ≠ promote일)
- **L2/L3 자동 발행 절대 금지** (사용자 명시 promote만)
- **streak 게이미피케이션 금지** (빠진 날 = 그냥 빠진 날)

## 페르소나 토론 결과 (사이클 1 quality-gate FAIL → v1/v2 분리)

### 4축 최종 결정

| 축 | 결정 | 근거 |
|---|---|---|
| TRIGGER | **Hybrid (Passive cron + Manual)** | cron 21:00 자동 cache + macOS 알림 1회. 만성 망각 방지. promote는 manual. |
| AUTOMATION_LEVEL | **L1** | 자동 초안 + 사용자 명시 promote. 만장일치. |
| DATA_PROCESSING | **B + D 하이브리드** | `.cache/daily/*.mdx` (.gitignore) + 명시적 promote |
| SECURITY | **D 구조 + A 7개 게이트** | 아래 게이트 7개 모두 필수 |

### 보안 게이트 7개 (법무 검토자 요구사항, 모두 필수)

1. **Default-deny allowlist** — 외부 공개 정보만 통과, 신규 키워드는 자동 차단
2. **Redaction/Summary LLM 분리** + publish 직전 second-pass 독립 스캔
3. **동료 식별자 게이트 확장** — GitHub username, 이메일, @handle, PR URL owner segment
4. **`~/.claude/projects/` 보호 정책** — 디스크 암호화·iCloud/Dropbox 동기화 차단·30일 자동 삭제
5. **Incident response playbook** — repo private 전환·filter-repo·GitHub Support 캐시 purge·Wayback 삭제 요청·사내 보고 SLA
6. **24시간 publish cooldown** — 작성 후 본인 재검토 의무
7. **첫 4주 dry-run 강제** — false negative율 측정 후 본 가동

## 데이터 소스 위치 (확인 완료)

### Claude transcripts
- `~/.claude/projects/-Users-justinjeong-Workspace-justinjeong5-github-io/*.jsonl`
- 일반 형식: JSONL, 라인별 message 객체
- 다른 프로젝트도 같은 위치 (`~/.claude/projects/<encoded-cwd>/`)

### Codex transcripts
- `~/.codex/sessions/` — 메인 세션 파일들
- `~/.codex/history.jsonl` — 히스토리 스트림
- `~/.codex/session_index.jsonl` — 세션 인덱스
- `~/.codex/logs_2.sqlite` — 로그 DB (SQL 쿼리 가능)
- `~/.codex/state_5.sqlite` — 상태 DB

### 공통 정규화 스키마

```ts
type NormalizedMessage = {
  timestamp: string;       // ISO 8601
  source: 'claude' | 'codex';
  session_id: string;
  role: 'user' | 'assistant' | 'tool';
  text: string;
  meta?: Record<string, any>;
};
```

## 진행 상태

- ✅ **Phase 0**: PoC v1 시연 — `.cache/daily/2026-05-19.mdx`
- ☐ **Phase 1**: Source Adapter (Claude + Codex 정규화) — **다음 세션 시작**
- ☐ **Phase 2**: `/daily-log` 슬래시 커맨드 + 자동 metrics (`.cache/daily/_metrics.jsonl`)
- ☐ **Phase 3**: 보안 게이트 7개 구현
- ☐ **Phase 4**: Passive trigger (cron + macOS osascript 알림)
- ☐ **Phase 5**: `/promote-log` 커맨드 + 24h cooldown
- ☐ **Phase 6**: 4주 dry-run 운영 + false negative율 측정
- ☐ **Phase 7**: 보안 통과 시 publish 활성화

## 산출물 위치 (다음 세션부터 작성)

- 자동화 코드: `scripts/daily-log/` (사이트 repo 내, gh-pages 빌드에서 제외)
- Claude Code skill: `~/.claude/skills/daily-log/SKILL.md`
- cache: `.cache/daily/*.mdx` (이미 .gitignore)
- metrics: `.cache/daily/_metrics.jsonl`

## 다음 세션 시작 가이드

```
1. 이 SESSION.md 처음부터 끝까지 읽기
2. .cache/daily/2026-05-19.mdx 확인 (v1 산출물)
3. Phase 1 시작:
   a. scripts/daily-log/adapter.mjs — Claude JSONL 파싱
   b. Codex sessions/history 파싱 (jsonl/sqlite)
   c. 공통 스키마 정규화
   d. 단위 테스트 (claude/codex 각 1세션 정규화 결과 검증)
4. Phase 2: scripts/daily-log/extract.mjs — 정규화된 메시지 → 의미 단위 → Log/Note/Essay 후보 매핑
5. 예상 시간: Phase 1 + 2 = 1 세션 (~2-3시간)
```

## 위험 신호 (감시)

- **운영 지속률 35%** — 본인 honest_concern. passive trigger로 완화 시도하지만 본질 위험.
- **Codex transcript 포맷 변경** — codex 업데이트 시 adapter 깨질 가능성. 버전 핀 필요.
- **AI 자체 누설** — LLM이 redaction 이전 컨텍스트를 본 상태에서 본문에 endpoint·코드네임 인용.
- **Allowlist 갱신 부담** — 새 회사 코드네임이 나올 때마다 사용자가 등록해야. 자체가 운영 부담.

## 폐기 조건 (FAIL 시 즉시 중단)

- **보안 사고 1건** (publish된 콘텐츠에서 회사 정보 발견) → 즉시 폐기, repo private 전환, 수동 워크플로 회귀
- **운영 14일 중 5일 미만** → "지속 불가" 신호, 시스템 자체 의미 없음
- **Acceptance Rate < 30% 2주 연속** → 추출 품질 의미 없음
- **Redaction false negative 1건이라도** → publish 영구 차단, dry-run으로 회귀

## L2 graduate 조건 (4주 dry-run + 2주 publish 통과 후)

- Acceptance Rate ≥ 80% 2주 연속
- 사고 0건 4주 연속
- 게이트 차단 후 git diff 재스캔 통과율 100%

## PASS/PARTIAL/FAIL 결정 매트릭스 (PoC 종료 시)

| 결과 | 조건 | 다음 |
|---|---|---|
| **PASS** | Acceptance≥50% AND 평균소요≤7분 AND 누출 0건 | L2 graduate 설계 착수 |
| **PARTIAL** | 1지표 미달 | PoC 2주 연장, 미달 원인 1개만 수정 |
| **FAIL** | 2지표 이상 미달 OR 실제 누출 1건 | 폐기, 수동 워크플로 회귀 |

## 핵심 인사이트 (PoC v1에서 추출)

- 자동화는 일을 줄이는 게 아니라 **종류를 바꾼다** (수동 작성 → 거버넌스 운영)
- 운영 사용자 본인 페르소나가 가장 솔직한 BLOCKING을 짚는다
- PoC scope를 v1(시연) + v2(운영) 분리한 게 페르소나 충돌 해결의 키

## 관련 파일

- `.cache/daily/2026-05-19.mdx` — v1 산출물 (콘텐츠 후보 2개)
- `.gitignore` — `.cache` 추가됨
- 이 세션 commit 히스토리: 4eebd63 (Logs/Notes/Essay 11개 PASS)

## 사용자 솔직한 입장 (잊지 말 것)

> "어렵다... 그래도 해보고싶어. B로가자."

부담은 인지하면서 의지로 진행. 다음 세션에서 단계를 작게 쪼개 부담 줄이기. 한 번에 다 하려 하지 말 것.
