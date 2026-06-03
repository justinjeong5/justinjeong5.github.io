#!/usr/bin/env node
// Prerender — 빌드 타임에 모든 라우트를 정적 HTML로 렌더링한다.
//
// dist-ssr/entry-server.js의 render(url)로 각 경로의 마크업을 생성하고,
// 클라이언트 빌드 산출물 dist/index.html의 <div id="root"></div> placeholder에 주입한다.
// 동시에 getMeta(url)로 얻은 라우트별 head 메타(title/canonical/og)를 SEO 마커 블록에 주입한다.
// 결과는 dist/{path}/index.html로 저장되어 GitHub Pages에서 그대로 서빙된다.
//
// 안전 경계: dist/ 밖으로 절대 쓰지 않는다(assertInsideDist).
//
// 사용:
//   node scripts/prerender.mjs   # (vite build + vite build --ssr 이후)

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { render, getAllPaths, getMeta } from '../dist-ssr/entry-server.js';
import { applyHeadMeta, assertInsideDist } from './prerender-head.mjs';

// SSR 번들이 stale하면(getMeta 미export) head 메타 주입이 누락된다 — 명시적으로 차단한다.
if (typeof getMeta !== 'function') {
  throw new Error('SSR 번들에 getMeta export가 없다 — `vite build --ssr`를 먼저 실행하라');
}

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const MARKER = '<div id="root"></div>';

const template = readFileSync(join(DIST, 'index.html'), 'utf8');
if (!template.includes(MARKER)) {
  throw new Error(`root placeholder(${MARKER})가 dist/index.html에 없다`);
}

let n = 0;
for (const path of getAllPaths()) {
  const html = render(path);
  const meta = getMeta(path);
  // replacer를 함수로 전달해 html 내 $&·$1 등 특수 치환 패턴이 해석되지 않게 한다.
  let page = template.replace(MARKER, () => `<div id="root">${html}</div>`);
  page = applyHeadMeta(page, meta);
  const outDir = path === '/' ? DIST : join(DIST, path);
  mkdirSync(assertInsideDist(outDir, DIST), { recursive: true });
  writeFileSync(assertInsideDist(join(outDir, 'index.html'), DIST), page);
  n++;
}

console.log(`prerendered ${n} routes`);
