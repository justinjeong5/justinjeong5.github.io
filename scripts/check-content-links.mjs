// 내부 콘텐츠 링크 무결성 가드 — 빌드 전에 삭제된 콘텐츠를 가리키는 dead link를 잡는다.
//
// 콘텐츠 큐레이션(mdx 삭제)으로 site.json/about.json의 featured 슬러그나 다른 글의
// 내부 링크가 존재하지 않는 slug를 가리키게 되는 회귀를 막는다. 런타임까지 미뤄지던
// dead link를 빌드 타임(및 npm test)에 결정론적으로 표면화한다.
//
// 순수 ESM(vite 비의존) — node 단위 테스트와 빌드 파이프라인 양쪽에서 재사용한다.

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const DEFAULT_CONTENT_DIR = path.join(rootDir, 'src', 'content');

const DETAIL_TYPES = ['cases', 'notes', 'essays'];

// 콘텐츠 디렉터리에서 타입별 slug 집합과 로그 앵커(파일명) 집합을 수집한다.
async function collectSlugs(contentDir) {
  const slugs = { cases: new Set(), notes: new Set(), essays: new Set() };
  const logs = new Set();
  for (const type of [...DETAIL_TYPES, 'logs']) {
    let entries;
    try {
      entries = await readdir(path.join(contentDir, type));
    } catch {
      continue;
    }
    for (const f of entries) {
      if (!f.endsWith('.mdx')) continue;
      const slug = f.slice(0, -4);
      if (type === 'logs') logs.add(slug);
      else slugs[type].add(slug);
    }
  }
  return { slugs, logs };
}

// 경로 문자열을 내부 콘텐츠 참조로 분류한다. 콘텐츠 삭제로 깨질 수 있는 것만 대상:
// - /cases|notes|essays/<slug> (상세 페이지)
// - /logs#<anchor> (로그 앵커 = 로그 파일명)
// 정적 라우트(/cases, /about 등)나 외부 링크는 콘텐츠 큐레이션과 무관하므로 null.
export function classifyRef(target) {
  const detail = target.match(/^\/(cases|notes|essays)\/([a-z0-9-]+)\/?$/);
  if (detail) return { kind: 'detail', type: detail[1], slug: detail[2] };
  const logAnchor = target.match(/^\/logs#([a-z0-9-]+)$/);
  if (logAnchor) return { kind: 'logAnchor', slug: logAnchor[1] };
  return null;
}

// 마크다운 텍스트에서 링크 타깃 `](target)`을 추출한다.
// - 코드 펜스(```...```)와 인라인 코드(`...`)는 예시일 뿐이므로 먼저 제거해 거짓양성을 막는다
//   (마크다운 링크 문법을 코드로 보여주는 글에서 존재하지 않는 예시 경로를 dead로 오검하지 않도록).
// - 제목 붙은 링크 `](target "title")`도 경로만 추출한다(공백 뒤 제목은 거짓음성 없이 흡수).
export function extractMarkdownTargets(text) {
  const withoutCode = text.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  return [...withoutCode.matchAll(/\]\(\s*([^\s)]+)(?:\s+[^)]*)?\)/g)].map((m) => m[1]);
}

// 콘텐츠 전체(mdx 내부 링크 + site.json/about.json featured 참조)에서 dead link를 찾는다.
// 반환: [{ source, ref }] — source는 참조 위치, ref는 존재하지 않는 대상.
export async function findDeadContentLinks(contentDir = DEFAULT_CONTENT_DIR) {
  const { slugs, logs } = await collectSlugs(contentDir);
  const dead = [];

  const check = (source, ref) => {
    if (!ref) return;
    if (ref.kind === 'detail' && !slugs[ref.type].has(ref.slug)) {
      dead.push({ source, ref: `/${ref.type}/${ref.slug}` });
    } else if (ref.kind === 'logAnchor' && !logs.has(ref.slug)) {
      dead.push({ source, ref: `/logs#${ref.slug}` });
    }
  };

  // 1) mdx 내부 링크
  for (const type of [...DETAIL_TYPES, 'logs']) {
    let entries;
    try {
      entries = await readdir(path.join(contentDir, type));
    } catch {
      continue;
    }
    for (const f of entries) {
      if (!f.endsWith('.mdx')) continue;
      const text = await readFile(path.join(contentDir, type, f), 'utf8');
      for (const target of extractMarkdownTargets(text)) {
        check(`${type}/${f}`, classifyRef(target));
      }
    }
  }

  // 2) site.json featured 슬러그 (bare slug)
  const readJson = async (name) => {
    try {
      return JSON.parse(await readFile(path.join(contentDir, name), 'utf8'));
    } catch {
      return null;
    }
  };
  const site = await readJson('site.json');
  if (site) {
    for (const slug of site.featuredCaseSlugs || []) {
      check('site.json:featuredCaseSlugs', { kind: 'detail', type: 'cases', slug });
    }
    for (const slug of site.featuredEssaySlugs || []) {
      check('site.json:featuredEssaySlugs', { kind: 'detail', type: 'essays', slug });
    }
  }

  // 3) about.json highlights[].to (/type/slug 경로)
  const about = await readJson('about.json');
  if (about) {
    for (const h of about.highlights || []) {
      check('about.json:highlights', classifyRef(h.to || ''));
    }
  }

  return dead;
}

async function main() {
  const dead = await findDeadContentLinks();
  if (dead.length > 0) {
    console.error(`내부 콘텐츠 링크 검증 실패 — dead link ${dead.length}건:`);
    for (const d of dead) console.error(`- ${d.source} → ${d.ref} (존재하지 않음)`);
    process.exit(1);
  }
  console.log('내부 콘텐츠 링크 검증 통과 — dead link 없음.');
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
