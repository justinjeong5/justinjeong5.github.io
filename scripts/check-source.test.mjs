import assert from 'node:assert/strict';
import test from 'node:test';

import {
  checkSyntaxSource,
  hasDecorativeGardenCopy,
  modeFromArgs,
} from './check-source.mjs';

test('modeFromArgs defaults to lint and only enables the supported typecheck mode', () => {
  assert.equal(modeFromArgs([]), 'lint');
  assert.equal(modeFromArgs(['--mode', 'typecheck']), 'typecheck');
  assert.equal(modeFromArgs(['--mode']), 'lint');
  assert.equal(modeFromArgs(['--mode', 'unknown']), 'lint');
});

test('hasDecorativeGardenCopy catches emoji progression and stripped arrow residue', () => {
  assert.equal(hasDecorativeGardenCopy('노트들입니다. 🌱 → 🌿 → 🌳.'), true);
  assert.equal(hasDecorativeGardenCopy('노트들입니다. →  → .'), true);
});

test('hasDecorativeGardenCopy allows plain explanatory copy', () => {
  assert.equal(hasDecorativeGardenCopy('완성된 글이 아니라 토픽별로 자라는 노트들입니다.'), false);
});

test('checkSyntaxSource rejects invalid JavaScript syntax', async () => {
  await assert.rejects(checkSyntaxSource('const =', '/tmp/bad.js'));
});
