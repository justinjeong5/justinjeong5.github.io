import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

test('public writing excludes private source locations and identifiers', () => {
  for (const type of ['cases', 'notes', 'essays', 'logs']) {
    const dir = new URL(`../content/${type}/`, import.meta.url);
    for (const file of readdirSync(dir).filter((name) => name.endsWith('.mdx'))) {
      const source = readFileSync(new URL(file, dir), 'utf8');
      assert.doesNotMatch(source, /buzzvil\.slack\.com|github\.com\/Buzzvil|\/Users\/|\b(?:puid|userId|app_id|unit_id)\s*[:=]|ghp_[A-Za-z0-9]+/, `${type}/${file}`);
      if (type === 'logs') {
        assert.match(source, /^type: Reviewed$/m);
        assert.match(source, /^updated: 2026-10-01$/m);
        assert.doesNotMatch(source, /\d+(?:\.\d+)?\s*%|\d+(?:\.\d+)?\/5/);
      }
    }
  }
});
