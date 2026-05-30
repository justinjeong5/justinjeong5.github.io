// Garden Tender — 순수 결정 로직 (부수효과 없음, 테스트 대상)
//
// 입력(사이트 health + 운영 상태)을 받아 이번 실행에서 무엇을 할지 결정한다.
// 이 함수는 콘텐츠를 쓰거나 git을 만지지 않는다 — 오직 "결정"만 반환한다.
// "통과/품질 판정"을 하지 않는다(채점자 ≠ 생산자, B2). propose는 제안일 뿐이다.

export const DEFAULT_CONFIG = {
  backpressureThreshold: 3, // 미검토 work-order가 이 수 이상이면 휴경 (B4)
  dormantAfterConsecutiveFallow: 4, // 연속 휴경이 이 수 이상이면 휴면 권고 (B5)
  weeklyProduceCap: 2, // 주당 신규 생산 상한 (스로틀)
  coverageGapMinImportance: 3, // 이 중요도 이상의 갭만 propose 트리거
};

export const ACTIONS = Object.freeze({
  FIX_ONLY: 'fix-only',
  PROPOSE: 'propose',
  FALLOW: 'fallow',
  DORMANT: 'dormant',
});

// input: {
//   buildOk, brokenLinks, quoteTrapFiles[], schemaViolations,
//   unreviewedDrafts, daysSinceLastRun, consecutiveFallow,
//   coverageGaps[{topic,count,importance}], newWorkSignals, weeklyProduceCount
// }
export function decide(input, config = DEFAULT_CONFIG) {
  const cfg = { ...DEFAULT_CONFIG, ...config };
  const health = healthIssues(input);

  // 1순위: 깨진 것 고치기 — 안전하고 가장 시급 (over-tending 아님)
  if (health.length > 0) {
    return {
      action: ACTIONS.FIX_ONLY,
      reason: `사이트 건강 문제 ${health.length}건 — 신규 생산 전 수정 필요`,
      details: health,
    };
  }

  // 2순위: 백프레셔 — 미검토 work-order가 쌓이면 생산 멈춤 (B4)
  if (input.unreviewedDrafts >= cfg.backpressureThreshold) {
    return {
      action: ACTIONS.FALLOW,
      reason: `백프레셔: 미검토 work-order ${input.unreviewedDrafts}개(임계 ${cfg.backpressureThreshold}). 큐를 먼저 비워라`,
      details: [],
    };
  }

  // 3순위: 포화 — 연속 휴경이 길면 휴면 권고 (B5, 음수 보상)
  if (input.consecutiveFallow >= cfg.dormantAfterConsecutiveFallow) {
    return {
      action: ACTIONS.DORMANT,
      reason: `포화: 연속 휴경 ${input.consecutiveFallow}회. 주간 → 월간으로 낮추거나 일시정지 권고`,
      details: [],
    };
  }

  // 4순위: 주간 생산 상한 — tending은 되지만 신규는 멈춤 (스로틀)
  if (input.weeklyProduceCount >= cfg.weeklyProduceCap) {
    return {
      action: ACTIONS.FALLOW,
      reason: `주간 생산 상한 ${cfg.weeklyProduceCap}편 도달. 이번 주는 휴경`,
      details: [],
    };
  }

  // 5순위: 실제 작업 신호가 있을 때만 제안 (B3 work 감지, over-tending 회피)
  const gaps = (input.coverageGaps || []).filter(
    (g) => g.importance >= cfg.coverageGapMinImportance,
  );
  if (input.newWorkSignals > 0 || gaps.length > 0) {
    return {
      action: ACTIONS.PROPOSE,
      reason: workReason(input.newWorkSignals, gaps),
      details: gaps,
    };
  }

  // 기본값: 휴경 — 할 일 없음이 정상이고 보상받는 결과 (B5, garden-fallow)
  return {
    action: ACTIONS.FALLOW,
    reason: '작업 신호 없음, 시급한 갭 없음 — 휴경이 정상',
    details: [],
  };
}

function healthIssues(input) {
  const issues = [];
  if (input.buildOk === false) issues.push('빌드 실패');
  if (input.brokenLinks > 0) issues.push(`깨진 cross-link ${input.brokenLinks}개`);
  if (input.quoteTrapFiles?.length > 0)
    issues.push(`frontmatter 따옴표 함정 ${input.quoteTrapFiles.length}개`);
  if (input.schemaViolations > 0)
    issues.push(`frontmatter 스키마 위반 ${input.schemaViolations}건`);
  return issues;
}

function workReason(newWorkSignals, gaps) {
  const parts = [];
  if (newWorkSignals > 0) parts.push(`마지막 실행 후 활동 신호 ${newWorkSignals}건`);
  if (gaps.length > 0)
    parts.push(`커버리지 갭 ${gaps.map((g) => g.topic).join(', ')}`);
  return `제안 대상: ${parts.join(' / ')}`;
}
