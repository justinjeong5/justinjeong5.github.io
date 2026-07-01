// 배포 pre-flight 가드 — gh-pages force-push 전에 dist/ 산출물이 온전한지 검증한다.
//
// 빌드가 exit 0이어도 prerender가 빈 셸을 내거나 라우트가 붕괴하면, 그대로 force-push하면
// 라이브 사이트를 깨진 산출물로 덮어쓴다(복구 경로 없음). build 마지막 단계에서 이 검증을
// 통과하지 못하면 빌드를 실패시켜 배포 단계 자체가 실행되지 않게 한다.
//
// 순수 ESM(vite 비의존) — node 단위 테스트와 빌드 파이프라인 양쪽에서 재사용한다.

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const DEFAULT_DIST_DIR = path.join(rootDir, 'dist');

// 정적 라우트 하한(routes.js STATIC 라우트 수) — 이보다 적으면 정적 페이지조차 누락된 파국.
// 콘텐츠 무결성의 1차 가드는 parity(route수==sitemap loc수)와 마커 검사다:
// vite 글롭이 깨져 상세가 빠지면 sitemap(디스크 기반)과 route 수가 어긋나 parity에서 잡힌다.
// 하한을 정적 수보다 높이면 정당한 대규모 큐레이션(예: 132→66)에서 거짓 실패하므로 static floor로 둔다.
export const MIN_ROUTES = 10;
// prerender된 앱 콘텐츠 마커 — 빈 셸(#root 비어있음)과 정상 prerender를 구분한다.
const CONTENT_MARKER = 'id="main-content"';

async function countIndexHtml(dir) {
  let count = 0;
  const walk = async (d) => {
    let entries;
    try {
      entries = await readdir(d, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.isDirectory()) await walk(path.join(d, e.name));
      else if (e.name === 'index.html') count++;
    }
  };
  await walk(dir);
  return count;
}

// dist/ 산출물의 온전성을 검증한다. 반환: { ok, errors, routes, locs }.
export async function verifyDist(distDir = DEFAULT_DIST_DIR) {
  const errors = [];

  let rootHtml = null;
  try {
    rootHtml = await readFile(path.join(distDir, 'index.html'), 'utf8');
  } catch {
    errors.push('dist/index.html 없음 — 빌드 산출물 누락');
  }
  if (rootHtml !== null && !rootHtml.includes(CONTENT_MARKER)) {
    errors.push(`dist/index.html에 prerender 콘텐츠 마커(${CONTENT_MARKER})가 없음 — 빈 셸(prerender 실패) 가능성`);
  }

  let sitemap = null;
  try {
    sitemap = await readFile(path.join(distDir, 'sitemap.xml'), 'utf8');
  } catch {
    errors.push('dist/sitemap.xml 없음');
  }
  const locs = sitemap ? (sitemap.match(/<loc>/g) || []).length : 0;
  if (sitemap !== null && locs === 0) errors.push('sitemap.xml에 <loc> 항목이 0개');

  const routes = await countIndexHtml(distDir);
  if (routes < MIN_ROUTES) {
    errors.push(`prerender 라우트 ${routes}개 < 하한 ${MIN_ROUTES}개 — 콘텐츠/빌드 붕괴 의심`);
  }
  if (sitemap !== null && locs > 0 && routes !== locs) {
    errors.push(`route 수(${routes}) ≠ sitemap <loc> 수(${locs}) — 부분 손상/드리프트`);
  }

  return { ok: errors.length === 0, errors, routes, locs };
}

async function main() {
  const { ok, errors, routes, locs } = await verifyDist();
  if (!ok) {
    console.error('dist 검증 실패 — 배포 중단:');
    for (const e of errors) console.error(`- ${e}`);
    process.exit(1);
  }
  console.log(`dist 검증 통과 — ${routes} routes, sitemap ${locs} URLs.`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
