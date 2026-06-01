#!/usr/bin/env node
// Sitemap generator — 빌드 타임 public/sitemap.xml 생성 (의존성 0).
//
// 정적 라우트 + cases/notes/essays 슬러그(src/content/*/*.mdx 파일명)를 순회해
// sitemap 0.9 스키마 XML을 출력한다. 로그는 /logs 단일 페이지만 (개별 URL 없음).
// <lastmod>는 frontmatter의 lastTendedAt > plantedAt > date 우선순위로 파싱, 없으면 생략.
//
// 안전 경계: public/ 밖으로 절대 쓰지 않는다(assertInsidePublic).
//
// 사용:
//   node scripts/generate-sitemap.mjs   # public/sitemap.xml 생성

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const BASE = 'https://justinjeong5.github.io';

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_DIR = join(REPO_ROOT, 'src', 'content');
const PUBLIC_DIR = join(REPO_ROOT, 'public');
const OUTPUT_PATH = join(PUBLIC_DIR, 'sitemap.xml');

// 정적 라우트 (src/lib/routes.js의 ROUTES와 정렬). 콘텐츠 상세는 동적으로 추가.
export const STATIC_PATHS = [
  '/',
  '/cases',
  '/notes',
  '/essays',
  '/logs',
  '/uses',
  '/now',
  '/reading',
  '/about',
  '/cv',
];

// 개별 URL을 가지는 콘텐츠 타입 (logs는 /logs 단일 페이지라 제외).
const DETAIL_TYPES = ['cases', 'notes', 'essays'];

function assertInsidePublic(target) {
  const r = resolve(target);
  if (r !== PUBLIC_DIR && !r.startsWith(PUBLIC_DIR + '/')) {
    throw new Error(`SAFETY: write 경로가 public/ 밖이다: ${r}`);
  }
  return r;
}

function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  return m ? m[1] : '';
}

// frontmatter에서 ISO date(YYYY-MM-DD)를 우선순위대로 찾는다. 따옴표는 벗긴다.
export function parseLastmod(fm) {
  for (const key of ['lastTendedAt', 'plantedAt', 'date']) {
    const m = fm.match(new RegExp(`^${key}:\\s*['"]?(\\d{4}-\\d{2}-\\d{2})`, 'm'));
    if (m) return m[1];
  }
  return null;
}

// src/content/{type}/*.mdx 파일명에서 슬러그를 추출하고 lastmod를 파싱한다.
export function collectSlugs(type, { contentDir = CONTENT_DIR } = {}) {
  const dir = join(contentDir, type);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .sort()
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '');
      const lastmod = parseLastmod(frontmatter(readFileSync(join(dir, f), 'utf8')));
      return { slug, lastmod };
    });
}

// 모든 공개 URL을 { loc, lastmod } 형태로 모은다.
export function collectUrls({ contentDir = CONTENT_DIR } = {}) {
  const urls = STATIC_PATHS.map((path) => ({ loc: `${BASE}${path}`, lastmod: null }));
  for (const type of DETAIL_TYPES) {
    for (const { slug, lastmod } of collectSlugs(type, { contentDir })) {
      urls.push({ loc: `${BASE}/${type}/${slug}`, lastmod });
    }
  }
  return urls;
}

function xmlEscape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function buildXml(urls) {
  const body = urls
    .map(({ loc, lastmod }) => {
      const lines = [`    <loc>${xmlEscape(loc)}</loc>`];
      if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
      return `  <url>\n${lines.join('\n')}\n  </url>`;
    })
    .join('\n');
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    `${body}\n` +
    '</urlset>\n'
  );
}

function main() {
  const urls = collectUrls();
  const xml = buildXml(urls);
  mkdirSync(PUBLIC_DIR, { recursive: true });
  writeFileSync(assertInsidePublic(OUTPUT_PATH), xml);
  console.log(`sitemap.xml: ${urls.length} URLs → ${OUTPUT_PATH}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
