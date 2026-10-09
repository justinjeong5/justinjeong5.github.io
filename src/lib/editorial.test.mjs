import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { test } from 'node:test';
import { PRIMARY_ARTICLES, articleCollection, selectEditorialArticles, consolidationTarget } from './editorial.js';
import { caseStudyUrl, essayStudyUrl, essayListUrl, caseListUrl } from './work-paths.js';

function entries(type) {
  return readdirSync(new URL(`../content/${type}/`, import.meta.url)).filter((name) => name.endsWith('.mdx')).map((name) => {
    const source = readFileSync(new URL(`../content/${type}/${name}`, import.meta.url), 'utf8');
    const field = (key) => source.match(new RegExp('^' + key + ':\\s*"?([^"\\n]+)"?$', 'm'))?.[1];
    return { slug: name.slice(0, -4), series: field('series'), collection: field('collection'), date: field('date'), dateBasis: field('dateBasis'), archived: /^archived: true$/m.test(source), supersededBy: field('supersededBy'), source };
  });
}

test('representative articles and supplementary records partition the live work corpus', () => {
  const cases = entries('cases');
  const essays = entries('essays');
  const primary = selectEditorialArticles(cases, essays);
  const support = selectEditorialArticles(cases, essays, true);
  assert.equal(primary.length, PRIMARY_ARTICLES.length);
  assert.equal(primary.length, 12);
  assert.equal(support.length, 16);
  const keys = (items) => items.map((entry) => entry.kind + ':' + entry.slug);
  assert.equal(new Set(keys([...primary, ...support])).size, primary.length + support.length);
  assert.ok(primary.every((entry) => !entry.archived));
  assert.ok(primary.every((entry) => articleCollection(entry)?.id === 'stories'));
  assert.ok(support.every((entry) => articleCollection(entry)?.id === 'records'));
  assert.deepEqual(keys(primary), keys([...primary].sort((a, b) => b.date.localeCompare(a.date))));
});

test('classification belongs to each article, not its technical detail or file type', () => {
  const cases = [{ slug: 'playhub-product-architecture', series: 'work-evidence-2026', collection: 'records', dateBasis: 'context', date: '2026-06' }];
  const essays = [{ slug: 'reflection', collection: 'stories', dateBasis: 'context', date: '2026-07' }];
  assert.deepEqual(selectEditorialArticles(cases, essays).map((entry) => entry.slug), ['reflection']);
  assert.deepEqual(selectEditorialArticles(cases, essays, true).map((entry) => entry.slug), ['playhub-product-architecture']);
  assert.equal(articleCollection({ collection: 'unknown' }), undefined);
});

test('consolidated originals remain readable and point directly to an active article', () => {
  const cases = entries('cases');
  const essays = entries('essays');
  const byUrl = new Map([...cases.map((entry) => ['/cases/' + entry.slug, entry]), ...essays.map((entry) => ['/essays/' + entry.slug, entry])]);
  const consolidated = [...cases, ...essays].filter((entry) => entry.supersededBy && entry.archived && (entry.series === 'work-evidence-2026' || essays.includes(entry)));
  assert.equal(consolidated.length, 11);
  for (const entry of consolidated) {
    const target = consolidationTarget(entry);
    assert.ok(byUrl.has(target));
    assert.equal(byUrl.get(target).archived, false);
    assert.ok(entry.source.split('---').slice(2).join('---').trim().length > 100);
  }
});

test('consolidation notices never accept external or executable URLs', () => {
  assert.equal(consolidationTarget({ archived: true, supersededBy: '/cases/example' }), '/cases/example');
  for (const supersededBy of ['javascript:alert(1)', 'https://example.com', '//example.com', '/cases/example?next=other']) {
    assert.equal(consolidationTarget({ archived: true, supersededBy }), null);
  }
  assert.equal(consolidationTarget({ supersededBy: '/cases/example' }), null);
});

test('supplementary record navigation returns to the supplementary list', () => {
  assert.equal(caseStudyUrl('canvas-input-lifecycle', 'support'), '/cases/canvas-input-lifecycle?view=support');
  assert.equal(caseListUrl({ slug: 'canvas-input-lifecycle', series: 'work-evidence-2026' }, 'support'), '/cases?view=support');
  assert.equal(essayStudyUrl('same-defect-class-across-repos', 'support'), '/essays/same-defect-class-across-repos?view=support');
  assert.equal(essayListUrl('same-defect-class-across-repos', 'support'), '/cases?view=support');
});
