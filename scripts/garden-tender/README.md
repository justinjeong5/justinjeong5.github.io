# Garden Tender

주 1회 사이트 health를 평가하고 **work-order(사람용 체크리스트)** 를 내는 봇.
페르소나 적대 검토(NO-GO → GO-WITH-CONDITIONS)에서 도출한 5조건을 코드에 baked-in 했다.

## 무엇을 하나 / 안 하나

- ✅ 사이트 건강 점검: 빌드·깨진 링크·frontmatter 따옴표 함정·스키마·커버리지 갭
- ✅ "이번 주 무엇을 할지" 결정: `fix-only` / `propose` / `fallow` / `dormant`
- ✅ `propose`/`fix-only`면 `.cache/garden-tender/work-orders/`에 체크리스트 작성
- ❌ **콘텐츠를 생성하지 않는다** — "무엇을 검토/작성할지"만 제안 (채점·작성은 사람)
- ❌ **git add/commit/push, PR 생성, src/content 수정 안 한다** — write 경로는 `.cache/`뿐

## 5조건이 코드 어디에 있나

| 조건 | 위치 |
|---|---|
| B1 무인 public write 금지 | `garden-tender.mjs` `assertInsideCache()` — 모든 write가 `.cache/` 밖이면 throw |
| B2 채점자 ≠ 생산자 | `decide.mjs` — 통과/품질 판정을 반환 안 함. work-order는 사람용 질문 |
| B3 백프레셔 | `decide.mjs` — 미검토 work-order ≥ `backpressureThreshold`면 휴경 |
| B4 주 1회 + 휴경 기본 | launchd 주 1회 + `decide`의 기본값이 `fallow` |
| B5 포화 음수보상·정지 | `decide.mjs` — 연속 휴경 ≥ 임계면 `dormant` 권고, 갭 없으면 휴경 |

## 사람 워크플로우

1. 주 1회 봇이 실행 → 알림 + (필요 시) work-order
2. `fallow`/`dormant`면 **할 일 없음 — 정상.** 무시
3. work-order가 있으면 열어서: 글로 남길 게 있나 판단 → **직접** `src/content/`에 작성 → 검토 → push
4. 처리한 work-order는 삭제 (백프레셔 카운터가 줄어듦)

## 실행

```bash
# 결정만 미리보기 (상태/파일 안 건드림)
node scripts/garden-tender/garden-tender.mjs --dry-run --no-build

# 실제 실행 (상태 갱신 + work-order)
node scripts/garden-tender/garden-tender.mjs

# 테스트
node --test scripts/garden-tender/decide.test.mjs
```

## 주 1회 스케줄 (macOS launchd) — 의식적으로 켜기

무인 잡 활성화는 자동이 아니다. 직접 켠다:

```bash
cp scripts/garden-tender/com.garden-tender.weekly.plist ~/Library/LaunchAgents/
launchctl load ~/Library/LaunchAgents/com.garden-tender.weekly.plist
# 끄기: launchctl unload ~/Library/LaunchAgents/com.garden-tender.weekly.plist
```

plist의 경로(`REPO_PATH_PLACEHOLDER`)를 실제 레포 절대경로로 먼저 치환해야 한다.
로그는 `.cache/garden-tender/launchd.log`.

## 알려진 한계 (v1)

- 활동 신호 = 사이트 git 커밋 수(마지막 실행 이후). "회사·외부 활동"은 안 보임 — 그래서 work-order가 사람에게 "한 일 중 남길 게 있나?"를 묻는다 (봇이 소스를 만들지 않음).
- 콘텐츠 자동 생성은 일부러 뺐다. 사람이 작성한다. 자동 초안 생성을 원하면 `.cache/`에만 쓰는 별도 단계로 추가하되 B1·B2를 다시 검토할 것.
