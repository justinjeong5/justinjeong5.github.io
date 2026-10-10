import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PRIMARY_NAV, SECONDARY_NAV, ROUTES, isPrimaryNavActive } from './routes.js';

test('primary and secondary menus use one Korean naming scheme', () => {
  assert.deepEqual(PRIMARY_NAV.map((item) => item.label), ['개발 경험', '기술 노트', '소개']);
  for (const item of [...PRIMARY_NAV, ...SECONDARY_NAV]) {
    assert.match(item.label, /[가-힣]/);
    assert.doesNotMatch(item.label, /[A-Za-z]/);
  }
});

test('two article menus link separately and never activate together on the same pathname', () => {
  assert.deepEqual(PRIMARY_NAV.slice(0, 2).map((item) => item.to), ['/cases', '/cases?view=support']);
  const active = (pathname, search, collection) => PRIMARY_NAV.filter((item) => isPrimaryNavActive(item, pathname, search, collection)).map((item) => item.label);
  assert.deepEqual(active('/cases', ''), ['개발 경험']);
  assert.deepEqual(active('/cases/', '?view=support'), ['기술 노트']);
  assert.deepEqual(active('/cases/example', '', 'records'), ['기술 노트']);
  assert.deepEqual(active('/cases/example', '?view=support', 'stories'), ['개발 경험']);
  assert.deepEqual(active('/essays/example', '', 'stories'), ['개발 경험']);
  assert.deepEqual(active('/cases/missing', ''), []);
  assert.deepEqual(active('/about', ''), ['소개']);
  assert.deepEqual(active('/', ''), []);
});

test('retired navigation does not remove legacy direct URLs', () => {
  assert.ok(PRIMARY_NAV.every((item) => item.to !== ROUTES.notes && item.to !== ROUTES.logs));
  assert.equal(ROUTES.notes, '/notes');
  assert.equal(ROUTES.logs, '/logs');
  assert.equal(ROUTES.noteDetail('existing'), '/notes/existing');
});
