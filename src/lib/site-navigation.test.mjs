import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PRIMARY_NAV, SECONDARY_NAV, ROUTES } from './routes.js';

test('primary and secondary menus use one Korean naming scheme', () => {
  assert.deepEqual(PRIMARY_NAV.map((item) => item.label), ['글', '소개']);
  for (const item of [...PRIMARY_NAV, ...SECONDARY_NAV]) {
    assert.match(item.label, /[가-힣]/);
    assert.doesNotMatch(item.label, /[A-Za-z]/);
  }
});

test('retired navigation does not remove legacy direct URLs', () => {
  assert.ok(PRIMARY_NAV.every((item) => item.to !== ROUTES.notes && item.to !== ROUTES.logs));
  assert.equal(ROUTES.notes, '/notes');
  assert.equal(ROUTES.logs, '/logs');
  assert.equal(ROUTES.noteDetail('existing'), '/notes/existing');
});
