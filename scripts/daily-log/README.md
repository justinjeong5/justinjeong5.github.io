# daily-log 자동화 시스템

PoC v2 코드 위치. **다음 세션에 본격 구현 시작**.

## 디렉토리 구조 (예정)

```
scripts/daily-log/
├── README.md              (this file)
├── adapter.mjs            (Phase 1: Claude + Codex transcript 정규화)
├── extract.mjs            (Phase 2: 메시지 → Log/Note/Essay 후보 매핑)
├── security/
│   ├── allowlist.mjs      (Phase 3: default-deny 게이트)
│   ├── second-pass.mjs    (Phase 3: 독립 LLM 재검증)
│   └── incident.md        (Phase 3: incident response playbook)
├── trigger/
│   ├── cron.plist         (Phase 4: launchd 정의)
│   └── notify.osascript   (Phase 4: macOS 알림)
└── promote/
    └── promote.mjs        (Phase 5: cache → src/content/ 이동)
```

## 핵심 제약 (SESSION.md 참조)

- 첫 4주 dry-run only
- Default-deny 보안
- L2/L3 자동 발행 절대 금지

## 진행 상태

- ✅ Phase 0: PoC v1 시연 (`.cache/daily/2026-05-19.mdx`)
- ☐ Phase 1: Source Adapter (다음 세션)
- ☐ Phase 2~7: SESSION.md 참조

## 시작 방법 (다음 세션)

1. 사이트 루트 SESSION.md 읽기
2. `~/.claude/projects/-Users-justinjeong-Workspace-justinjeong5-github-io/` 안의 JSONL 1개 샘플 분석
3. `~/.codex/sessions/` 안의 세션 파일 1개 샘플 분석
4. 공통 스키마(`NormalizedMessage`)로 정규화하는 `adapter.mjs` 작성
5. 단위 테스트로 정규화 결과 확인
