import assert from 'node:assert/strict';
import { test } from 'node:test';
import { decide, ACTIONS, DEFAULT_CONFIG } from './decide.mjs';

const base = {
  buildOk: true,
  brokenLinks: 0,
  quoteTrapFiles: [],
  schemaViolations: 0,
  unreviewedDrafts: 0,
  daysSinceLastRun: 7,
  consecutiveFallow: 0,
  coverageGaps: [],
  newWorkSignals: 0,
  weeklyProduceCount: 0,
};

test('할 일 없으면 휴경이 기본값', () => {
  assert.equal(decide(base).action, ACTIONS.FALLOW);
});

test('빌드 실패는 fix-only', () => {
  assert.equal(decide({ ...base, buildOk: false }).action, ACTIONS.FIX_ONLY);
});

test('깨진 링크/따옴표 함정/스키마 위반은 fix-only', () => {
  assert.equal(decide({ ...base, brokenLinks: 2 }).action, ACTIONS.FIX_ONLY);
  assert.equal(decide({ ...base, quoteTrapFiles: ['notes/x'] }).action, ACTIONS.FIX_ONLY);
  assert.equal(decide({ ...base, schemaViolations: 1 }).action, ACTIONS.FIX_ONLY);
});

test('fix-only가 백프레셔보다 우선 (건강 문제가 최우선)', () => {
  const d = decide({ ...base, buildOk: false, unreviewedDrafts: 99 });
  assert.equal(d.action, ACTIONS.FIX_ONLY);
});

test('미검토 work-order 임계 이상이면 백프레셔 휴경', () => {
  const d = decide({ ...base, unreviewedDrafts: DEFAULT_CONFIG.backpressureThreshold, newWorkSignals: 5 });
  assert.equal(d.action, ACTIONS.FALLOW);
  assert.match(d.reason, /백프레셔/);
});

test('연속 휴경 임계 이상이면 dormant 권고', () => {
  const d = decide({ ...base, consecutiveFallow: DEFAULT_CONFIG.dormantAfterConsecutiveFallow, newWorkSignals: 5 });
  assert.equal(d.action, ACTIONS.DORMANT);
});

test('백프레셔가 dormant보다 우선', () => {
  const d = decide({
    ...base,
    unreviewedDrafts: DEFAULT_CONFIG.backpressureThreshold,
    consecutiveFallow: DEFAULT_CONFIG.dormantAfterConsecutiveFallow,
  });
  assert.equal(d.action, ACTIONS.FALLOW);
  assert.match(d.reason, /백프레셔/);
});

test('주간 생산 상한 도달 시 휴경', () => {
  const d = decide({ ...base, weeklyProduceCount: DEFAULT_CONFIG.weeklyProduceCap, newWorkSignals: 3 });
  assert.equal(d.action, ACTIONS.FALLOW);
  assert.match(d.reason, /상한/);
});

test('활동 신호 있으면 propose', () => {
  assert.equal(decide({ ...base, newWorkSignals: 2 }).action, ACTIONS.PROPOSE);
});

test('중요도 높은 커버리지 갭이면 propose', () => {
  const d = decide({ ...base, coverageGaps: [{ topic: 'security', count: 0, importance: 5 }] });
  assert.equal(d.action, ACTIONS.PROPOSE);
});

test('중요도 낮은 갭은 propose 트리거 안 함 (over-tending 회피)', () => {
  const d = decide({ ...base, coverageGaps: [{ topic: 'x', count: 2, importance: 1 }] });
  assert.equal(d.action, ACTIONS.FALLOW);
});

test('decide는 통과/품질 판정을 반환하지 않는다 (채점자≠생산자)', () => {
  const actions = new Set(Object.values(ACTIONS));
  for (const variant of [base, { ...base, newWorkSignals: 1 }, { ...base, buildOk: false }]) {
    assert.ok(actions.has(decide(variant).action));
  }
});
