import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

import { STORY_STARTS, STORY_QUICK_READS, TECH_STARTS, findGuideLens } from './reading-guide.js';

const frontmatter = (slug) => readFileSync(new URL(`../content/cases/${slug}.mdx`, import.meta.url), 'utf8').split('---')[1] || '';

test('guide starts are distinct, live articles in the intended collection', () => {
  assert.equal(STORY_STARTS.length, 6);
  assert.equal(STORY_QUICK_READS.length, 2);
  assert.equal(TECH_STARTS.length, 6);
  const all = [...STORY_STARTS, ...STORY_QUICK_READS, ...TECH_STARTS];
  assert.equal(new Set(all.map((item) => item.slug)).size, all.length);
  for (const item of all) {
    const source = frontmatter(item.slug);
    assert.match(source, new RegExp(`^collection: ${TECH_STARTS.includes(item) ? 'records' : 'stories'}$`, 'm'));
    assert.doesNotMatch(source, /^archived: true$/m);
    assert.ok(item.situation.trim());
    assert.ok(item.question.trim());
  }
});

test('related reads are live stories and never point to the same article', () => {
  for (const item of STORY_STARTS) {
    for (const related of item.related || []) {
      assert.notEqual(related.slug, item.slug);
      assert.ok(related.reason.trim());
      assert.match(frontmatter(related.slug), /^collection: stories$/m);
      assert.doesNotMatch(frontmatter(related.slug), /^archived: true$/m);
    }
  }
});

test('detail pages can retrieve a specific reading question without changing article content', () => {
  assert.match(findGuideLens('ad-preload-lifecycle'), /준비와 실제 광고 표시/);
  assert.match(findGuideLens('cs-workflow-product'), /요청 수락과 상태 반영/);
  assert.equal(findGuideLens('unrelated'), undefined);
});
