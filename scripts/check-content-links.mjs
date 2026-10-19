// 내부 콘텐츠 링크 무결성 가드 — 빌드 전에 삭제된 콘텐츠를 가리키는 dead link를 잡는다.
//
// 콘텐츠 큐레이션(mdx 삭제)으로 site.json/about.json의 대표 슬러그나 다른 글의
// 내부 링크가 존재하지 않는 slug를 가리키게 되는 회귀를 막는다. 런타임까지 미뤄지던
// dead link를 빌드 타임(및 npm test)에 결정론적으로 표면화한다.
//
// 순수 ESM(vite 비의존) — node 단위 테스트와 빌드 파이프라인 양쪽에서 재사용한다.

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { STORY_STARTS, STORY_QUICK_READS, TECH_STARTS } from '../src/lib/reading-guide.js';

const rootDir = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const DEFAULT_CONTENT_DIR = path.join(rootDir, 'src', 'content');
const DEFAULT_GUIDE = { stories: [...STORY_STARTS, ...STORY_QUICK_READS], records: TECH_STARTS };
const frontmatterOf = (source) => /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(source)?.[1] || '';

const DETAIL_TYPES = ['cases', 'notes', 'essays'];
const isArchived = (source) => /^archived:\s*true(?:\s*#.*)?\s*$/m.test(source);

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

// 콘텐츠 전체(mdx 내부 링크 + site.json/about.json 대표 참조)에서 dead link를 찾는다.
// 반환: [{ source, ref }] — source는 참조 위치, ref는 존재하지 않는 대상.
export async function findDeadContentLinks(contentDir = DEFAULT_CONTENT_DIR, guide = contentDir === DEFAULT_CONTENT_DIR ? DEFAULT_GUIDE : null) {
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

  // 2) 홈 큐레이션과 site.json 대표 글
  const readJson = async (name) => {
    try {
      return JSON.parse(await readFile(path.join(contentDir, name), 'utf8'));
    } catch {
      return null;
    }
  };
  const site = await readJson('site.json');
  if (site) {
    const cards = site.homeFeaturedCases;
    if ((cards !== undefined || contentDir === DEFAULT_CONTENT_DIR) && (!Array.isArray(cards) || cards.length !== 3)) {
      dead.push({ source: 'site.json:homeFeaturedCases', ref: '대표 업무 사례는 3개여야 합니다' });
    }
    const seen = new Set();
    for (const [index, card] of (Array.isArray(cards) ? cards : []).entries()) {
      const source = `site.json:homeFeaturedCases[${index}]`;
      const slug = card?.slug;
      if (typeof slug !== 'string' || !/^[a-z0-9-]+$/.test(slug)) {
        dead.push({ source, ref: '유효한 slug가 필요합니다' });
        continue;
      }
      check(source, { kind: 'detail', type: 'cases', slug });
      if (seen.has(slug)) dead.push({ source, ref: `중복 slug: ${slug}` });
      seen.add(slug);
      for (const field of ['label', 'problem', 'decision', 'result']) {
        if (typeof card[field] !== 'string' || !card[field].trim()) {
          dead.push({ source, ref: `필수 문구 누락: ${field}` });
        }
      }
      if (slugs.cases.has(slug)) {
        const text = await readFile(path.join(contentDir, 'cases', `${slug}.mdx`), 'utf8');
        if (!/^series: work-evidence-2026$/m.test(text) || isArchived(text)) {
          dead.push({ source, ref: `공개 업무 사례가 아님: ${slug}` });
        }
      }
    }
    const personalCases = site.homePersonalCases;
    if ((personalCases !== undefined || contentDir === DEFAULT_CONTENT_DIR) && (!Array.isArray(personalCases) || personalCases.length !== 2)) {
      dead.push({ source: 'site.json:homePersonalCases', ref: '개인 작업 글은 2개여야 합니다' });
    }
    const personalSeen = new Set();
    for (const [index, card] of (Array.isArray(personalCases) ? personalCases : []).entries()) {
      const source = `site.json:homePersonalCases[${index}]`;
      const slug = card?.slug;
      if (typeof slug !== 'string' || !/^[a-z0-9-]+$/.test(slug) || typeof card.name !== 'string' || !card.name.trim()) {
        dead.push({ source, ref: '유효한 개인 작업 slug와 이름이 필요합니다' });
        continue;
      }
      check(source, { kind: 'detail', type: 'cases', slug });
      if (personalSeen.has(slug)) dead.push({ source, ref: `중복 slug: ${slug}` });
      personalSeen.add(slug);
      if (slugs.cases.has(slug)) {
        const text = await readFile(path.join(contentDir, 'cases', `${slug}.mdx`), 'utf8');
        if (!/^series: personal-projects$/m.test(text) || isArchived(text)) {
          dead.push({ source, ref: `공개 개인 작업 글이 아님: ${slug}` });
        }
      }
    }
    for (const slug of site.featuredEssaySlugs || []) {
      check('site.json:featuredEssaySlugs', { kind: 'detail', type: 'essays', slug });
    }
    const writing = site.homeWriting;
    if ((writing !== undefined || contentDir === DEFAULT_CONTENT_DIR) && (!Array.isArray(writing) || writing.length !== 2)) {
      dead.push({ source: 'site.json:homeWriting', ref: '회사 기고는 2개여야 합니다' });
    }
    for (const [index, article] of (Array.isArray(writing) ? writing : []).entries()) {
      const url = typeof article?.url === 'string' && URL.canParse(article.url) ? new URL(article.url) : null;
      if (typeof article?.title !== 'string' || !article.title.trim() || typeof article?.description !== 'string' || !article.description.trim() || !url || url.protocol !== 'https:' || url.hostname !== 'tech.buzzvil.com' || !url.pathname.startsWith('/blog/') || url.username || url.password) {
        dead.push({ source: `site.json:homeWriting[${index}]`, ref: '기고 제목·설명·공식 HTTPS 블로그 URL이 필요합니다' });
      }
    }
  }

  if (guide) {
    const guideSeen = new Set();
    for (const [collection, items] of Object.entries(guide)) {
      for (const [index, item] of items.entries()) {
        const source = `reading-guide:${collection}[${index}]`;
        const slug = item?.slug;
        if (typeof slug !== 'string' || !/^[a-z0-9-]+$/.test(slug)) {
          dead.push({ source, ref: '유효한 읽기 안내 slug가 필요합니다' });
          continue;
        }
        check(source, { kind: 'detail', type: 'cases', slug });
        if (guideSeen.has(slug)) dead.push({ source, ref: `중복 읽기 안내: ${slug}` });
        guideSeen.add(slug);
        if (typeof item.situation !== 'string' || !item.situation.trim() || typeof item.question !== 'string' || !item.question.trim()) {
          dead.push({ source, ref: '상황과 읽을 질문이 필요합니다' });
        }
        if (slugs.cases.has(slug)) {
          const text = await readFile(path.join(contentDir, 'cases', `${slug}.mdx`), 'utf8');
          const metadata = frontmatterOf(text);
          if (!new RegExp(`^collection: ${collection}$`, 'm').test(metadata) || isArchived(metadata)) {
            dead.push({ source, ref: `공개 ${collection} 글이 아님: ${slug}` });
          }
        }
        for (const related of item.related || []) {
          const relatedSource = `${source}:related`;
          check(relatedSource, { kind: 'detail', type: 'cases', slug: related.slug });
          if (related.slug === slug || typeof related.reason !== 'string' || !related.reason.trim()) {
            dead.push({ source: relatedSource, ref: '다른 글과 함께 읽을 이유가 필요합니다' });
          }
          if (slugs.cases.has(related.slug)) {
            const text = await readFile(path.join(contentDir, 'cases', `${related.slug}.mdx`), 'utf8');
            const metadata = frontmatterOf(text);
            if (!/^collection: stories$/m.test(metadata) || isArchived(metadata)) {
              dead.push({ source: relatedSource, ref: `공개 stories 글이 아님: ${related.slug}` });
            }
          }
        }
      }
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
    console.error(`콘텐츠 무결성 검증 실패 — ${dead.length}건:`);
    for (const d of dead) console.error(`- ${d.source} → ${d.ref}`);
    process.exit(1);
  }
  console.log('콘텐츠 무결성 검증 통과 — 잘못된 참조 없음.');
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
