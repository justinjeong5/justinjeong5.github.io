import assert from 'node:assert/strict';
import { test } from 'node:test';
import { dateKey, contextDate, compareContextDates, displayContextDate, displayWorkPeriod } from './article-dates.js';

test('year/month precision does not invent a day', () => {
  assert.equal(contextDate({ dateBasis: 'context', date: '2026-08' }), '2026-08');
  assert.equal(displayContextDate({ dateBasis: 'context', date: '2022' }), '2022');
  assert.equal(contextDate({ period: '2025.11–2026.04', date: '2026-10-09' }), '2026-04');
  assert.equal(contextDate({ period: '2021-2022' }), '2022');
  assert.equal(contextDate({ period: '2026.04~05' }), '2026-05');
});

test('maintenance timestamps cannot make an old experience newer', () => {
  const entries = [
    { slug: 'old', dateBasis: 'context', date: '2022', updated: '2026-10-09' },
    { slug: 'new', dateBasis: 'context', date: '2026-09', updated: '2026-01-01' },
  ];
  assert.deepEqual(entries.sort(compareContextDates).map((entry) => entry.slug), ['new', 'old']);
});

test('invalid dates and uncertain context do not fall back to writing date', () => {
  assert.equal(dateKey('2026-13'), '');
  assert.equal(dateKey('2026-02-29'), '');
  assert.equal(dateKey('2024-02-29'), '20240229');
  assert.equal(contextDate({ dateBasis: 'context', date: 'unknown', updated: '2026-10-09' }), '');
});

test('work periods preserve the span while chronological sorting uses the context end', () => {
  const work = { period: '2025.11–2026.04', dateBasis: 'context', date: '2026-04' };
  assert.equal(displayWorkPeriod(work), '2025.11–2026.04');
  assert.equal(contextDate(work), '2026-04');
  assert.equal(displayWorkPeriod({ period: '2022' }), '2022');
  assert.equal(displayWorkPeriod({ dateBasis: 'context', date: '2026-08' }), '2026.08');
  assert.equal(displayWorkPeriod({ period: '2026.04~05' }), '2026.04–05');
  assert.equal(displayWorkPeriod({ period: '2026', dateBasis: 'context', date: '2026-10-01' }), '2026.10.01');
});
