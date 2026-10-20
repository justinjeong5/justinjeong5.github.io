import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { test } from 'node:test';

import { PRIMARY_ARTICLES, SUBMITTED_ARTICLE_SLUGS, articleCollection, selectEditorialArticles, selectTechnicalRecords, selectWritingIndex, consolidationTarget } from './editorial.js';

function entries(type) {
  return readdirSync(new URL(`../content/${type}/`, import.meta.url))
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => {
      const source = readFileSync(new URL(`../content/${type}/${name}`, import.meta.url), 'utf8');
      const field = (key) => source.match(new RegExp('^' + key + ':\\s*"?([^"\\n]+)"?$', 'm'))?.[1];
      return {
        slug: name.slice(0, -4),
        series: field('series'),
        collection: field('collection'),
        date: field('date'),
        dateBasis: field('dateBasis'),
        period: field('period'),
        summary: field('summary'),
        archived: /^archived: true$/m.test(source),
        supersededBy: field('supersededBy'),
        source,
      };
    });
}

test('public career articles and the new technical essay stay live while retired content leaves discovery', () => {
  const cases = entries('cases');
  const essays = entries('essays');
  const notes = entries('notes');
  const career = JSON.parse(readFileSync(new URL('../../scripts/career-linked-paths.json', import.meta.url), 'utf8'));
  const protectedSlugs = career.paths.map((path) => path.match(/^\/cases\/([^/]+)\/$/)?.[1]).filter(Boolean);
  const liveCases = cases.filter((entry) => !entry.archived);

  assert.equal(liveCases.length, 15);
  assert.deepEqual(new Set(liveCases.map((entry) => entry.slug)), new Set(protectedSlugs));
  const liveEssaySlugs = essays.filter((entry) => !entry.archived).map((entry) => entry.slug);
  assert.deepEqual(liveEssaySlugs, ['tanstack-query-server-state-boundaries']);
  assert.equal(notes.filter((entry) => !entry.archived).length, 0);
  assert.deepEqual(new Set(PRIMARY_ARTICLES.map(([, slug]) => slug)), new Set(protectedSlugs));
  const discoverable = [...selectEditorialArticles(cases, essays), ...selectEditorialArticles(cases, essays, true)];
  assert.deepEqual(new Set(discoverable.map((entry) => entry.slug)), new Set([...protectedSlugs, ...liveEssaySlugs]));
  assert.equal(selectEditorialArticles(cases, essays, true).length, 2);
});

test('writing home lists exactly the direct article links in submitted PDFs', () => {
  const submitted = JSON.parse(readFileSync(new URL('../../scripts/submitted-blog-paths.json', import.meta.url), 'utf8'));
  const expected = submitted.paths.map((path) => path.match(/^\/cases\/([^/]+)\/$/)?.[1]);
  const articles = selectWritingIndex(entries('cases'));
  const slugs = articles.map((entry) => entry.slug);

  assert.equal(slugs.length, 11);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.deepEqual(new Set(slugs), new Set(SUBMITTED_ARTICLE_SLUGS));
  assert.deepEqual(new Set(slugs), new Set(expected));
  assert.deepEqual(slugs, [
    'pullup-record-driven-coach',
    'playhub-product-architecture',
    'playhub-diagnostic-sampling',
    'article-content-integration',
    'poketokenbar-account-cache',
    'ai-cross-functional-delivery',
    'gateway-rendering-context',
    'shared-ad-execution-delivery',
    'experiment-routing-context',
    'cs-workflow-product',
    'frontend-delivery-boundary',
  ]);
  assert.ok(articles.every((entry) => !entry.archived && entry.kind === 'case'));
  assert.ok(articles.every((entry) => entry.label.trim() && entry.period.trim()));
  assert.ok(articles.every((entry) => entry.summary?.trim()));
  assert.ok(articles.some((entry) => entry.slug === 'pullup-record-driven-coach' && entry.series === 'personal-projects'));
  assert.throws(() => selectWritingIndex(entries('cases').filter((entry) => entry.slug !== 'cs-workflow-product')), /cs-workflow-product/);
  assert.throws(() => selectWritingIndex(entries('cases').map((entry) => entry.slug === 'cs-workflow-product' ? { ...entry, summary: '' } : entry)), /요약.*cs-workflow-product/);
});

test('technical records add a separate reading path without changing submitted articles', () => {
  const records = selectTechnicalRecords(entries('essays'));
  assert.deepEqual(records.map((entry) => entry.slug), ['tanstack-query-server-state-boundaries']);
  assert.equal(records[0].collection, 'records');
  assert.equal(selectWritingIndex(entries('cases')).length, 11);
  assert.deepEqual(selectTechnicalRecords([
    { slug: 'draft', status: 'Draft', collection: 'records' },
    { slug: 'archived', archived: true, collection: 'records' },
  ]), []);
});

test('classification follows article metadata for independent inputs', () => {
  const cases = [{ slug: 'gateway-rendering-context', series: 'work-evidence-2026', collection: 'records', date: '2026-06' }];
  const essays = [{ slug: 'reflection', collection: 'stories', date: '2026-07' }];
  assert.deepEqual(selectEditorialArticles(cases, essays).map((entry) => entry.slug), ['reflection']);
  assert.deepEqual(selectEditorialArticles(cases, essays, true).map((entry) => entry.slug), ['gateway-rendering-context']);
  assert.equal(articleCollection({ collection: 'unknown' }), undefined);
});

test('retired pages keep a readable source and point directly to current content or the writing home', () => {
  const byUrl = new Map(['cases', 'essays', 'notes'].flatMap((type) => entries(type).map((entry) => [`/${type}/${entry.slug}`, entry])));
  const retired = [...byUrl.values()].filter((entry) => entry.archived);
  assert.ok(retired.length > 50);
  for (const entry of retired) {
    const target = consolidationTarget(entry);
    assert.ok(target, entry.slug);
    if (target !== '/writing') {
      assert.ok(byUrl.has(target), entry.slug);
      assert.equal(byUrl.get(target).archived, false, entry.slug);
    }
    assert.ok(entry.source.split('---').slice(2).join('---').trim().length > 0, entry.slug);
  }
});

test('consolidation notices reject external and executable URLs', () => {
  assert.equal(consolidationTarget({ archived: true, supersededBy: '/cases/example' }), '/cases/example');
  assert.equal(consolidationTarget({ archived: true, supersededBy: '/notes/example' }), '/notes/example');
  assert.equal(consolidationTarget({ archived: true, supersededBy: '/writing' }), '/writing');
  for (const supersededBy of ['javascript:alert(1)', 'https://example.com', '//example.com', '/cases/example?next=other', '/about']) {
    assert.equal(consolidationTarget({ archived: true, supersededBy }), null);
  }
  assert.equal(consolidationTarget({ supersededBy: '/cases/example' }), null);
});
