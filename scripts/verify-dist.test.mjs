import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

import { verifyDist, MIN_ROUTES } from './verify-dist.mjs';

const OK_HTML = '<!doctype html><html><body><div id="root"><main id="main-content">내용</main></div></body></html>';

// n개의 라우트(index.html)와 m개의 sitemap <loc>를 가진 임시 dist를 만든다.
async function makeDist({ routes = MIN_ROUTES, locs = MIN_ROUTES, rootHtml = OK_HTML, sitemap = true } = {}) {
  const dir = await mkdtemp(path.join(tmpdir(), 'verify-dist-'));
  if (rootHtml !== null) await writeFile(path.join(dir, 'index.html'), rootHtml);
  // 추가 라우트: sub-1/index.html ... (루트 포함해 routes개)
  for (let i = 1; i < routes; i++) {
    const sub = path.join(dir, `r${i}`);
    await mkdir(sub, { recursive: true });
    await writeFile(path.join(sub, 'index.html'), OK_HTML);
  }
  if (sitemap) {
    const body = Array.from({ length: locs }, (_, i) => `<url><loc>https://x/${i}/</loc></url>`).join('');
    await writeFile(path.join(dir, 'sitemap.xml'), `<urlset>${body}</urlset>`);
  }
  return dir;
}

async function withDist(opts, fn) {
  const dir = await makeDist(opts);
  try {
    return await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

test('verifyDist: 정상 dist(마커·sitemap·parity·하한 충족)는 ok', async () => {
  await withDist({ routes: 12, locs: 12 }, async (dir) => {
    const r = await verifyDist(dir);
    assert.equal(r.ok, true, r.errors.join('; '));
    assert.equal(r.routes, 12);
    assert.equal(r.locs, 12);
  });
});

test('verifyDist: index.html 누락 시 실패', async () => {
  await withDist({ routes: 12, locs: 12, rootHtml: null }, async (dir) => {
    const r = await verifyDist(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('index.html 없음')));
  });
});

test('verifyDist: prerender 마커 없는 빈 셸 index.html은 실패', async () => {
  const emptyShell = '<!doctype html><html><body><div id="root"></div></body></html>';
  await withDist({ routes: 12, locs: 12, rootHtml: emptyShell }, async (dir) => {
    const r = await verifyDist(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('마커')));
  });
});

test('verifyDist: sitemap.xml 누락 시 실패', async () => {
  await withDist({ routes: 12, sitemap: false }, async (dir) => {
    const r = await verifyDist(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('sitemap.xml 없음')));
  });
});

test('verifyDist: route 수와 sitemap <loc> 수 불일치(부분 손상) 시 실패', async () => {
  await withDist({ routes: 12, locs: 20 }, async (dir) => {
    const r = await verifyDist(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('sitemap')));
  });
});

test('verifyDist: 라우트 수가 하한 미만이면 실패(콘텐츠 붕괴)', async () => {
  await withDist({ routes: 3, locs: 3 }, async (dir) => {
    const r = await verifyDist(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('하한')));
  });
});

test('verifyDist: sitemap.xml은 있으나 <loc> 0개면 실패(누락과 구분)', async () => {
  await withDist({ routes: 12, locs: 0, sitemap: true }, async (dir) => {
    const r = await verifyDist(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('0개')));
  });
});

test('verifyDist: 라우트 수 경계값 — 하한과 정확히 같으면 통과, 하나 적으면 실패', async () => {
  await withDist({ routes: MIN_ROUTES, locs: MIN_ROUTES }, async (dir) => {
    const r = await verifyDist(dir);
    assert.equal(r.ok, true, r.errors.join('; '));
  });
  await withDist({ routes: MIN_ROUTES - 1, locs: MIN_ROUTES - 1 }, async (dir) => {
    const r = await verifyDist(dir);
    assert.equal(r.ok, false);
    assert.ok(r.errors.some((e) => e.includes('하한')));
  });
});
