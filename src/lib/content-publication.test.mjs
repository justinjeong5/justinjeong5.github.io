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

test('personal posts do not reintroduce editorial audit notices', () => {
  for (const type of ['cases', 'notes', 'essays', 'logs']) {
    const dir = new URL(`../content/${type}/`, import.meta.url);
    for (const file of readdirSync(dir).filter((name) => name.endsWith('.mdx'))) {
      const source = readFileSync(new URL(file, dir), 'utf8');
      assert.doesNotMatch(source, /이 글에 사용한 기록과 확인 범위|원문을 대조한 공개용 재구성|방문자가 원문을 직접 검증|이 글은 이전 회고를 다시 편집한 기록이다/, `${type}/${file}`);
    }
  }
});
