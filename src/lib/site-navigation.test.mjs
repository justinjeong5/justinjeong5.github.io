import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PRIMARY_NAV, ROUTES, isPrimaryNavActive } from './routes.js';

test('primary menu uses one Korean naming scheme without upkeep pages', () => {
  assert.deepEqual(PRIMARY_NAV.map((item) => item.label), ['대표 작업', '경력·소개', '글']);
  for (const item of PRIMARY_NAV) {
    assert.match(item.label, /[가-힣]/);
    assert.doesNotMatch(item.label, /[A-Za-z]/);
  }
  assert.ok(PRIMARY_NAV.every((item) => ![ROUTES.uses, ROUTES.now, ROUTES.reading].includes(item.to)));
});

test('main navigation gives home, career and every writing route one active section', () => {
  assert.deepEqual(PRIMARY_NAV.map((item) => item.to), ['/', '/about', '/writing']);
  const active = (pathname) => PRIMARY_NAV.filter((item) => isPrimaryNavActive(item, pathname)).map((item) => item.label);
  assert.deepEqual(active('/'), ['대표 작업']);
  assert.deepEqual(active('/about'), ['경력·소개']);
  for (const pathname of ['/writing', '/cases', '/cases/', '/cases/example', '/essays/example', '/notes', '/notes/example']) {
    assert.deepEqual(active(pathname), ['글']);
  }
  assert.deepEqual(PRIMARY_NAV.filter((item) => isPrimaryNavActive(item, '/cases/missing', false)), []);
  assert.deepEqual(active('/uses'), []);
});

test('retired navigation does not remove legacy direct URLs', () => {
  assert.ok(PRIMARY_NAV.every((item) => item.to !== ROUTES.notes));
  assert.equal(ROUTES.notes, '/notes');
  assert.equal(ROUTES.cases, '/cases');
  assert.equal(ROUTES.uses, '/uses');
  assert.equal(ROUTES.now, '/now');
  assert.equal(ROUTES.reading, '/reading');
  assert.equal(ROUTES.noteDetail('existing'), '/notes/existing');
});
