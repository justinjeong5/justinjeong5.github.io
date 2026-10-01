import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

import { WORK_SERIES, WORK_CASE_SLUGS, WORK_PATHS, resolveWorkPath, selectWorkCases, workPathUrl, readingPathsFor, caseStudyUrl, caseListUrl, visibleEntries } from './work-paths.js';

const entries = WORK_CASE_SLUGS.map((slug) => ({ slug, series: WORK_SERIES }));

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

test('all ten records have a reading path and a matching MDX series', () => {
  assert.equal(new Set(WORK_CASE_SLUGS).size, 10);
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
