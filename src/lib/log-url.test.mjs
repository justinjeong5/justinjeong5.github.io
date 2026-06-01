import assert from 'node:assert/strict';
import { test } from 'node:test';

import { logUrl } from './log-url.js';

test('로그 url은 base#<slug> 형태로 hash 앵커를 포함한다', () => {
  assert.equal(logUrl('2026-05-30-deeplink', '/logs'), '/logs#2026-05-30-deeplink');
  assert.match(logUrl('my-slug', '/logs'), /^\/logs#my-slug$/);
});

test('slug가 없으면 hash 없이 base로 폴백한다', () => {
  assert.equal(logUrl('', '/logs'), '/logs');
  assert.equal(logUrl(undefined, '/logs'), '/logs');
});

test('slug가 있으면 항상 # 구분자가 들어간다 (딥링크 보장)', () => {
  assert.match(logUrl('any', '/logs'), /#/);
  assert.doesNotMatch(logUrl('', '/logs'), /#/);
});

test('특수문자 slug는 인코딩되어 decode 왕복이 보존된다', () => {
  const slug = 'a b/c%d';
  const url = logUrl(slug, '/logs');
  assert.doesNotMatch(url, / /);
  const back = url.slice('/logs#'.length);
  assert.equal(decodeURIComponent(back), slug);
});
