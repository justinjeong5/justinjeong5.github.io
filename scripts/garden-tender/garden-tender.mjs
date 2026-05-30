#!/usr/bin/env node
// Garden Tender — 주 1회 사이트 health 평가 + work-order 생성 (부수효과 오케스트레이터)
//
// 안전 경계 (B1): 이 스크립트는 .cache/garden-tender/ 밖으로 절대 쓰지 않는다.
// git add/commit/push, PR 생성, src/content 수정 — 모두 안 한다.
// 콘텐츠를 생성하지 않는다(B2): "무엇을 검토/작성할지" work-order(사람용 체크리스트)만 낸다.
// 사람이 work-order를 보고 직접 작성·검토·push 한다.
//
// 사용:
//   node scripts/garden-tender/garden-tender.mjs            # 실행(상태 갱신 + work-order)
//   node scripts/garden-tender/garden-tender.mjs --dry-run  # 결정만 출력, 상태/파일 안 건드림
//   node scripts/garden-tender/garden-tender.mjs --no-build # 빌드 검사 생략(빠른 점검)

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { decide, ACTIONS } from './decide.mjs';

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const CONTENT_DIR = join(REPO_ROOT, 'src', 'content');
const CACHE_DIR = join(REPO_ROOT, '.cache', 'garden-tender');
const WORK_ORDER_DIR = join(CACHE_DIR, 'work-orders');
const STATE_PATH = join(CACHE_DIR, 'state.json');
const IMPORTANT_AREAS = ['security', 'testing', 'backend', 'accessibility', 'performance'];
const GAP_FLOOR = 3;

function assertInsideCache(target) {
  const r = resolve(target);
  if (r !== CACHE_DIR && !r.startsWith(CACHE_DIR + '/')) {
    throw new Error(`SAFETY: write 경로가 .cache 밖이다: ${r}`);
  }
  return r;
}

function git(args) {
  return execFileSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8' }).trim();
}

function listContent(sub) {
  const dir = join(CONTENT_DIR, sub);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => ({ slug: f.replace(/\.mdx$/, ''), path: join(dir, f) }));
}

function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  return m ? m[1] : '';
}

function scanQuoteTrap() {
  const hits = [];
  for (const sub of ['notes', 'essays', 'cases', 'logs']) {
    for (const { slug, path } of listContent(sub)) {
      const fm = frontmatter(readFileSync(path, 'utf8'));
      for (const line of fm.split('\n')) {
        if (/^(title|summary):\s*"/.test(line)) hits.push(`${sub}/${slug}`);
      }
    }
  }
  return hits;
}

function scanBrokenLinks() {
  const existing = new Set();
  for (const sub of ['notes', 'essays', 'cases', 'logs']) {
    for (const { slug } of listContent(sub)) existing.add(`/${sub}/${slug}`);
  }
  let broken = 0;
  for (const sub of ['notes', 'essays', 'cases', 'logs']) {
    for (const { path } of listContent(sub)) {
      const text = readFileSync(path, 'utf8');
      for (const m of text.matchAll(/\]\((\/(?:notes|essays|cases|logs)\/[a-z0-9-]+)\)/g)) {
        if (!existing.has(m[1])) broken += 1;
      }
    }
  }
  return broken;
}

function scanSchema() {
  let violations = 0;
  for (const sub of ['notes', 'essays', 'cases', 'logs']) {
    for (const { path } of listContent(sub)) {
      const fm = frontmatter(readFileSync(path, 'utf8'));
      if (!/^title:/m.test(fm)) violations += 1;
      if (!/^summary:/m.test(fm) && sub !== 'logs') violations += 1;
    }
  }
  return violations;
}

function runBuild() {
  try {
    execFileSync('npm', ['run', 'build'], { cwd: REPO_ROOT, stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function computeGaps() {
  const counts = new Map();
  for (const { path } of listContent('notes')) {
    const fm = frontmatter(readFileSync(path, 'utf8'));
    const m = fm.match(/^topics:\s*\[(.*)\]/m);
    if (!m) continue;
    for (const t of m[1].split(',').map((s) => s.trim())) {
      counts.set(t, (counts.get(t) || 0) + 1);
    }
  }
  const gaps = [];
  for (const area of IMPORTANT_AREAS) {
    const count = counts.get(area) || 0;
    if (count < GAP_FLOOR) {
      gaps.push({ topic: area, count, importance: Math.min(5, GAP_FLOOR - count + 2) });
    }
  }
  return gaps;
}

function countWorkOrders() {
  if (!existsSync(WORK_ORDER_DIR)) return 0;
  return readdirSync(WORK_ORDER_DIR).filter((f) => f.endsWith('.md')).length;
}

function gitCommitsSince(isoDate) {
  if (!isoDate) return 0;
  const out = git(['log', `--since=${isoDate}`, '--oneline']);
  return out ? out.split('\n').filter(Boolean).length : 0;
}

function loadState() {
  if (!existsSync(STATE_PATH)) {
    return { lastRun: null, consecutiveFallow: 0, weeklyProduceCount: 0, weekKey: null };
  }
  try {
    return JSON.parse(readFileSync(STATE_PATH, 'utf8'));
  } catch {
    return { lastRun: null, consecutiveFallow: 0, weeklyProduceCount: 0, weekKey: null, corrupt: true };
  }
}

function weekKey(d) {
  const onejan = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil(((d - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${week}`;
}

function daysBetween(iso, now) {
  if (!iso) return Infinity;
  return Math.floor((now - new Date(iso)) / 86400000);
}

function buildWorkOrder(decision, input, stamp) {
  const lines = [
    `# Garden Tender work-order — ${stamp}`,
    '',
    `결정: **${decision.action}** — ${decision.reason}`,
    '',
    '## 사이트 상태',
    `- 빌드: ${input.buildOk === null ? '검사 생략' : input.buildOk ? 'OK' : '실패'}`,
    `- 깨진 링크: ${input.brokenLinks} / 따옴표 함정: ${input.quoteTrapFiles.length} / 스키마 위반: ${input.schemaViolations}`,
    `- 마지막 실행 후 커밋: ${input.newWorkSignals} / 미검토 work-order: ${input.unreviewedDrafts}`,
    '',
  ];
  if (decision.action === ACTIONS.FIX_ONLY) {
    lines.push('## 고칠 것 (생산 전 우선)', ...decision.details.map((d) => `- [ ] ${d}`));
  } else if (decision.action === ACTIONS.PROPOSE) {
    lines.push(
      '## 사람이 결정할 것 (봇은 제안만 — 채점/작성은 사람)',
      '- [ ] 마지막 실행 후 한 일 중 글로 남길 게 있나? (git log / memory 참고)',
      ...decision.details.map((g) => `- [ ] 커버리지 갭: ${g.topic} (현재 ${g.count}편) — 채울 가치 있나?`),
      '',
      '> 작성하기로 했으면 직접 src/content/에 쓰고 검토 후 push. 이 work-order는 검토 후 삭제.',
    );
  }
  return lines.join('\n') + '\n';
}

function notify(message) {
  try {
    execFileSync('osascript', ['-e', `display notification ${JSON.stringify(message)} with title "Garden Tender"`], { stdio: 'ignore' });
  } catch {
    // 알림 실패는 무시 (CI/비-macOS)
  }
}

function main() {
  const argv = process.argv.slice(2);
  const dryRun = argv.includes('--dry-run');
  const noBuild = argv.includes('--no-build');
  const now = new Date();
  const state = loadState();

  const input = {
    buildOk: noBuild ? null : runBuild(),
    brokenLinks: scanBrokenLinks(),
    quoteTrapFiles: scanQuoteTrap(),
    schemaViolations: scanSchema(),
    unreviewedDrafts: countWorkOrders(),
    daysSinceLastRun: daysBetween(state.lastRun, now),
    consecutiveFallow: state.consecutiveFallow || 0,
    coverageGaps: computeGaps(),
    newWorkSignals: gitCommitsSince(state.lastRun),
    weeklyProduceCount: state.weekKey === weekKey(now) ? state.weeklyProduceCount || 0 : 0,
  };
  // build === null(생략)은 health 이슈로 치지 않음
  const decision = decide({ ...input, buildOk: input.buildOk === false ? false : true });

  const stamp = now.toISOString().slice(0, 10);
  report(stamp, decision, input, dryRun);

  if (dryRun) return decision;

  mkdirSync(WORK_ORDER_DIR, { recursive: true });
  const isFallow = decision.action === ACTIONS.FALLOW || decision.action === ACTIONS.DORMANT;
  if (!isFallow) {
    const file = assertInsideCache(join(WORK_ORDER_DIR, `${stamp}.md`));
    writeFileSync(file, buildWorkOrder(decision, input, stamp));
  }
  const next = {
    lastRun: now.toISOString(),
    consecutiveFallow: isFallow ? input.consecutiveFallow + 1 : 0,
    weeklyProduceCount: input.weeklyProduceCount,
    weekKey: weekKey(now),
  };
  writeFileSync(assertInsideCache(STATE_PATH), JSON.stringify(next, null, 2) + '\n');
  notify(`${decision.action}: ${decision.reason}`);
  return decision;
}

function report(stamp, decision, input, dryRun) {
  console.log(`\n🌱 Garden Tender — ${stamp}${dryRun ? ' (dry-run)' : ''}`);
  console.log(`   결정: ${decision.action} — ${decision.reason}`);
  console.log(
    `   상태: 빌드 ${input.buildOk === null ? '생략' : input.buildOk}, 링크깸 ${input.brokenLinks}, 따옴표 ${input.quoteTrapFiles.length}, 스키마 ${input.schemaViolations}, 미검토 ${input.unreviewedDrafts}, 활동 ${input.newWorkSignals}`,
  );
}

main();
