import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

import { WORK_SERIES, WORK_CASE_SLUGS, WORK_PATHS, WORK_TOPICS, RECOMMENDED_READS, resolveWorkTopic, selectAllWorkArticles, selectTopicArticles, resolveWorkPath, selectWorkCases, workPathUrl, readingPathsFor, caseStudyUrl, caseListUrl, essayListUrl, essayStudyUrl, visibleEntries } from './work-paths.js';

const entries = WORK_CASE_SLUGS.map((slug) => ({ slug, series: WORK_SERIES }));

test('legacy topic map retains every article URL, including consolidated originals', () => {
  const cases = WORK_TOPICS.flatMap((topic) => topic.caseSlugs);
  const essays = WORK_TOPICS.flatMap((topic) => topic.essaySlugs);
  assert.deepEqual([...cases].sort(), [...WORK_CASE_SLUGS].sort());
  assert.equal(new Set(cases).size, cases.length);
  const published = readdirSync(new URL('../content/essays/', import.meta.url)).filter((file) => {
    const source = readFileSync(new URL(`../content/essays/${file}`, import.meta.url), 'utf8');
    return /^status: Published$/m.test(source);
  }).map((file) => file.replace('.mdx', '')).sort();
  assert.deepEqual([...essays].sort(), published);
  assert.equal(new Set(essays).size, essays.length);
});

test('topics combine article kinds in date order and exclude missing or archived entries', () => {
  const cases = [
    { slug: 'ai-cross-functional-delivery', dateBasis: 'context', date: '2026-08', period: '2026.08' },
    { slug: 'unrelated', date: '2026-10' },
  ];
  const essays = [
    { slug: 'ai-coding-tools-six-months', dateBasis: 'context', date: '2026-09' },
    { slug: 'self-persona-blocking', dateBasis: 'context', date: '2026-10', archived: true },
  ];
  const selected = selectTopicArticles(cases, essays, 'collaboration');
  assert.deepEqual(selected.map((entry) => [entry.slug, entry.kind]), [['ai-coding-tools-six-months', 'essay'], ['ai-cross-functional-delivery', 'case']]);
  assert.equal(cases[0].kind, undefined);
  assert.deepEqual(selectTopicArticles(cases, essays, 'unknown'), []);
  assert.equal(resolveWorkTopic('unknown'), undefined);
});

test('case detail keeps only a topic that contains the article', () => {
  assert.equal(workPathUrl('runtime'), '/cases?view=runtime');
  assert.equal(caseStudyUrl('latest-request-boundaries', 'runtime'), '/cases/latest-request-boundaries?view=runtime');
  assert.equal(caseStudyUrl('latest-request-boundaries', 'product'), '/cases/latest-request-boundaries');
});

test('all work includes both article kinds, not unrelated projects or archives', () => {
  const source = [{ slug: 'playhub-product-flow', series: WORK_SERIES, dateBasis: 'context', date: '2026-06' }, { slug: 'personal', date: '2026-10' }];
  const essays = [{ slug: 'current', dateBasis: 'context', date: '2026-09' }, { slug: 'retired', archived: true }];
  assert.deepEqual(selectAllWorkArticles(source, essays).map((entry) => [entry.slug, entry.kind]), [['current', 'essay'], ['playhub-product-flow', 'case']]);
});

test('essay navigation preserves the actual all/topic/essay-list origin', () => {
  const slug = 'self-persona-blocking';
  assert.equal(essayStudyUrl(slug, 'all'), '/essays/self-persona-blocking?view=all');
  assert.equal(essayListUrl(slug, 'all'), '/cases');
  assert.equal(essayStudyUrl(slug, 'collaboration'), '/essays/self-persona-blocking?view=collaboration');
  assert.equal(essayListUrl(slug, 'collaboration'), '/cases?view=collaboration');
  assert.equal(essayStudyUrl(slug, 'product'), '/essays/self-persona-blocking');
  assert.equal(essayListUrl(slug, 'product'), '/essays');
  assert.equal(essayListUrl(slug), '/essays');
  assert.equal(essayStudyUrl(slug, 'https://example.com'), '/essays/self-persona-blocking');
});

test('recommended reading stays separate from chronology and matches actual article titles', () => {
  assert.deepEqual(RECOMMENDED_READS.map((item) => item.to), [
    '/cases/playhub-product-architecture',
    '/cases/playhub-diagnostic-sampling',
    '/cases/cs-workflow-product',
  ]);
  for (const item of RECOMMENDED_READS) {
    const content = readFileSync(new URL(`../content${item.to}.mdx`, import.meta.url), 'utf8');
    assert.ok(content.includes(`title: "${item.title}"`));
    assert.doesNotMatch(content, /^archived: true$/m);
  }
});

test('site featured work never directs readers to consolidated originals', () => {
  const site = JSON.parse(readFileSync(new URL('../content/site.json', import.meta.url), 'utf8'));
  for (const slug of site.featuredCaseSlugs) {
    assert.ok(WORK_CASE_SLUGS.includes(slug));
    const source = readFileSync(new URL(`../content/cases/${slug}.mdx`, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /^archived: true$/m);
  }
});

test('all and reading paths show the latest context first, not curation or editing date', () => {
  const source = [
    { slug: 'bulk-partial-results', series: WORK_SERIES, dateBasis: 'context', date: '2022', updated: '2026-10-09' },
    { slug: 'playhub-product-flow', series: WORK_SERIES, dateBasis: 'context', date: '2026-06' },
    { slug: 'article-content-integration', series: WORK_SERIES, dateBasis: 'context', date: '2026-09' },
  ];
  for (const view of ['all', 'operator']) {
    assert.deepEqual(selectWorkCases(source, view).map((entry) => entry.slug), ['article-content-integration', 'playhub-product-flow', 'bulk-partial-results']);
  }
});

test('all view keeps the editorial order and excludes previous records', () => {
  assert.deepEqual(selectWorkCases([...entries].reverse().concat({ slug: 'old', status: 'Live' })).map((entry) => entry.slug), WORK_CASE_SLUGS);
});

test('each reading path returns only its curated records in order', () => {
  for (const path of WORK_PATHS) {
    assert.deepEqual(selectWorkCases(entries, path.id).map((entry) => entry.slug), path.caseSlugs);
    assert.equal(workPathUrl(path.id), `/cases?view=${path.id}`);
  }
});

test('unknown views fall back to all records without accepting arbitrary URLs', () => {
  assert.deepEqual(selectWorkCases(entries, 'https://example.com'), entries);
  assert.equal(workPathUrl('unknown'), '/cases');
  assert.equal(resolveWorkPath('unknown'), undefined);
});

test('missing records do not introduce legacy fallback entries', () => {
  assert.deepEqual(selectWorkCases([{ slug: 'old', status: 'Live' }]), []);
  assert.equal(selectWorkCases(entries.slice(1)).length, WORK_CASE_SLUGS.length - 1);
});

test('detail links retain a valid reading path and previous-record context', () => {
  assert.equal(caseStudyUrl('bulk-partial-results', 'operator'), '/cases/bulk-partial-results?view=operator');
  assert.equal(caseStudyUrl('j-chat-first-production', 'previous'), '/cases/j-chat-first-production?view=previous');
  assert.equal(caseStudyUrl('bulk-partial-results', 'unknown'), '/cases/bulk-partial-results');
});

test('archive selection hides aliases without changing the raw entries', () => {
  const source = [{ slug: 'current' }, { slug: 'alias', archived: true }];
  assert.deepEqual(visibleEntries(source), [{ slug: 'current' }]);
  assert.equal(source.length, 2);
});

test('detail context must actually contain the record', () => {
  assert.equal(caseStudyUrl('build-cache-compatibility', 'operator'), '/cases/build-cache-compatibility');
  assert.equal(caseStudyUrl('bulk-partial-results', 'previous'), '/cases/bulk-partial-results');
  assert.equal(caseListUrl({ slug: 'old', archived: true }, 'previous'), '/cases');
  assert.equal(caseListUrl({ slug: 'j-chat-first-production' }, 'previous'), '/cases?view=previous');
});

test('an archived canonical record is excluded from curated paths too', () => {
  const source = entries.map((entry, index) => index === 0 ? { ...entry, archived: true } : entry);
  assert.ok(selectWorkCases(source, 'operator').every((entry) => entry.slug !== WORK_CASE_SLUGS[0]));
});

test('all curated work records have a reading path and a matching MDX series', () => {
  assert.equal(new Set(WORK_CASE_SLUGS).size, WORK_CASE_SLUGS.length);
  for (const slug of WORK_CASE_SLUGS) {
    assert.ok(readingPathsFor(slug).length > 0);
    const source = readFileSync(new URL(`../content/cases/${slug}.mdx`, import.meta.url), 'utf8');
    assert.match(source, new RegExp(`^series: ${WORK_SERIES}$`, 'm'));
    assert.doesNotMatch(source, /buzzvil\.slack\.com|github\.com\/Buzzvil|\/Users\/|\b(?:puid|userId|app_id|unit_id)\s*[:=]/);
  }
  for (const path of WORK_PATHS) {
    assert.equal(new Set(path.caseSlugs).size, path.caseSlugs.length);
    assert.ok(path.caseSlugs.every((slug) => WORK_CASE_SLUGS.includes(slug)));
  }
});

test('every published work-series MDX is discoverable in the all view', () => {
  const directory = new URL('../content/cases/', import.meta.url);
  const publishedSlugs = readdirSync(directory).filter((file) => {
    if (!file.endsWith('.mdx')) return false;
    const source = readFileSync(new URL(file, directory), 'utf8');
    return new RegExp(`^series: ${WORK_SERIES}$`, 'm').test(source) && !/^archived: true$/m.test(source);
  }).map((file) => file.replace(/\.mdx$/, ''));

  const expected = WORK_CASE_SLUGS.filter((slug) => publishedSlugs.includes(slug));
  assert.deepEqual([...publishedSlugs].sort(), [...expected].sort());
  assert.deepEqual(selectWorkCases(publishedSlugs.map((slug) => ({ slug, series: WORK_SERIES }))).map((entry) => entry.slug), expected);
});

test('new work records retain their actual reading path on detail and return', () => {
  for (const path of WORK_PATHS) {
    for (const slug of path.caseSlugs) {
      assert.equal(caseStudyUrl(slug, path.id), `/cases/${slug}?view=${path.id}`);
      assert.equal(caseListUrl({ slug, series: WORK_SERIES }, path.id), `/cases?view=${path.id}`);
    }
  }
});
