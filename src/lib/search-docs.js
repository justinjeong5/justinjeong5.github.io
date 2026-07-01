// 검색 문서 매핑·그룹핑 — 순수 로직만 담아 단위 테스트 가능하게 분리한다.
//
// search.js는 content.js(vite import.meta.glob)와 fuse.js에 결합돼 node 단위 테스트가 불가하다.
// 콘텐츠 엔트리 → 검색 문서 변환과 결과 그룹핑은 순수 함수라, 여기로 떼어 실제 데이터 주입은
// search.js(buildDocs)가 맡고 매핑 규칙만 독립 검증한다. (seo.js↔entry-server와 같은 분리 패턴.)

import { ROUTES } from './routes.js';
import { logUrl } from './log-url.js';

// 타입별 콘텐츠 엔트리 컬렉션을 공통 검색 문서 shape로 변환한다.
// 타입별 필드 차이(topics 소스, growth, date)와 기본값, url 규칙을 한곳에 고정한다.
export function buildDocsFrom({ cases = [], notes = [], essays = [], logs = [] } = {}) {
  return [
    ...cases.map((entry) => ({
      type: 'case',
      typeLabel: 'Case',
      slug: entry.slug,
      title: entry.title,
      summary: entry.summary || '',
      topics: entry.tags || [],
      url: ROUTES.caseDetail(entry.slug),
    })),
    ...notes.map((entry) => ({
      type: 'note',
      typeLabel: 'Note',
      slug: entry.slug,
      title: entry.title,
      summary: entry.summary || '',
      topics: entry.topics || [],
      growth: entry.growth || 'Seedling',
      url: ROUTES.noteDetail(entry.slug),
    })),
    ...essays.map((entry) => ({
      type: 'essay',
      typeLabel: 'Essay',
      slug: entry.slug,
      title: entry.title,
      summary: entry.summary || '',
      topics: [],
      url: ROUTES.essayDetail(entry.slug),
    })),
    ...logs.map((entry) => ({
      type: 'log',
      typeLabel: 'Log',
      slug: entry.slug,
      title: entry.title,
      summary: entry.summary || '',
      topics: [],
      date: entry.date,
      url: logUrl(entry.slug, ROUTES.logs),
    })),
  ];
}

// 검색 결과를 타입별로 그룹핑한다. 알 수 없는 타입은 조용히 무시한다.
export function groupByType(results) {
  const groups = { case: [], note: [], essay: [], log: [] };
  for (const item of results) {
    if (groups[item.type]) groups[item.type].push(item);
  }
  return groups;
}
