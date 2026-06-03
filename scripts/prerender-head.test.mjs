import assert from 'node:assert/strict';
import { test } from 'node:test';

import { htmlEscape, buildHeadMeta, applyHeadMeta, assertInsideDist } from './prerender-head.mjs';

const TEMPLATE = [
  '<head>',
  '    <meta charset="UTF-8" />',
  '    <!-- seo:start -->',
  '    <meta name="description" content="홈 설명" />',
  '    <meta property="og:title" content="홈 타이틀" />',
  '    <meta property="og:description" content="홈 설명" />',
  '    <meta property="og:url" content="https://justinjeong5.github.io/" />',
  '    <meta name="twitter:title" content="홈 타이틀" />',
  '    <meta name="twitter:description" content="홈 설명" />',
  '    <link rel="canonical" href="https://justinjeong5.github.io/" />',
  '    <title>홈 타이틀</title>',
  '    <!-- seo:end -->',
  '</head>',
].join('\n');

const META = {
  title: '케이스 제목 · 정경하',
  description: '케이스 설명',
  canonical: 'https://justinjeong5.github.io/cases/x/',
};

test('htmlEscape: &, <, >, " 이스케이프', () => {
  assert.equal(htmlEscape('a & b < c > d "e"'), 'a &amp; b &lt; c &gt; d &quot;e&quot;');
});

test('applyHeadMeta: SEO 블록을 라우트 메타로 치환하고 홈 기본값을 제거', () => {
  const out = applyHeadMeta(TEMPLATE, META);
  assert.ok(out.includes('<title>케이스 제목 · 정경하</title>'));
  assert.ok(out.includes('href="https://justinjeong5.github.io/cases/x/"'));
  assert.ok(out.includes('content="케이스 설명"'));
  assert.ok(!out.includes('홈 타이틀'), '홈 기본 타이틀이 남으면 안 됨');
  assert.ok(!out.includes('content="홈 설명"'), '홈 기본 설명이 남으면 안 됨');
  assert.ok(!out.includes('seo:start') && !out.includes('seo:end'), 'SEO 마커는 제거되어야 함');
});

test('applyHeadMeta: 마커 밖 고정 메타는 보존', () => {
  const out = applyHeadMeta(TEMPLATE, META);
  assert.ok(out.includes('<meta charset="UTF-8" />'));
});

test('applyHeadMeta: title/description을 og/twitter에 일관 적용', () => {
  const out = applyHeadMeta(TEMPLATE, META);
  assert.ok(out.includes('property="og:title" content="케이스 제목 · 정경하"'));
  assert.ok(out.includes('property="og:description" content="케이스 설명"'));
  assert.ok(out.includes('property="og:url" content="https://justinjeong5.github.io/cases/x/"'));
  assert.ok(out.includes('name="twitter:title" content="케이스 제목 · 정경하"'));
  assert.ok(out.includes('name="twitter:description" content="케이스 설명"'));
});

test('applyHeadMeta: 마커 부재 시 throw (silent fail 방지)', () => {
  assert.throws(() => applyHeadMeta('<head><title>x</title></head>', META), /seo 마커/);
});

test('applyHeadMeta: 메타값의 특수 치환 패턴($1)을 리터럴로 보존', () => {
  // 함수 replacer를 쓰므로 $1/$& 같은 패턴이 캡처그룹으로 해석되지 않아야 한다.
  // ('&'는 htmlEscape 대상이라 패턴 검증에는 '$1'을 사용)
  const out = applyHeadMeta(TEMPLATE, { title: 'A $1 B', description: 'd', canonical: 'c' });
  assert.ok(out.includes('<title>A $1 B</title>'));
});

test('buildHeadMeta: 속성값을 이스케이프해 속성 깨짐을 막는다', () => {
  const out = buildHeadMeta({ title: '따옴표 "q"', description: '<b>&', canonical: 'u' });
  assert.ok(out.includes('content="따옴표 &quot;q&quot;"'));
  assert.ok(out.includes('content="&lt;b&gt;&amp;"'));
});

test('assertInsideDist: dist 안 경로 허용', () => {
  const dist = '/tmp/dist';
  assert.equal(assertInsideDist('/tmp/dist/cases/index.html', dist), '/tmp/dist/cases/index.html');
  assert.equal(assertInsideDist('/tmp/dist', dist), '/tmp/dist');
});

test('assertInsideDist: dist 밖 경로는 throw (traversal·prefix 함정 포함)', () => {
  const dist = '/tmp/dist';
  assert.throws(() => assertInsideDist('/tmp/dist/../evil.html', dist), /SAFETY/);
  assert.throws(() => assertInsideDist('/etc/passwd', dist), /SAFETY/);
  // prefix 함정: /tmp/distractor는 /tmp/dist로 시작하지만 dist/ 안이 아니다.
  assert.throws(() => assertInsideDist('/tmp/distractor/x', dist), /SAFETY/);
});
