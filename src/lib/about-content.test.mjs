import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const about = JSON.parse(readFileSync(new URL('../content/about.json', import.meta.url), 'utf8'));
const site = JSON.parse(readFileSync(new URL('../content/site.json', import.meta.url), 'utf8'));
const careerPaths = JSON.parse(readFileSync(new URL('../../scripts/career-linked-paths.json', import.meta.url), 'utf8')).paths;

test('career page keeps a readable role history and actual-use technology context', () => {
  assert.ok(about.headline.trim());
  assert.ok(about.bio.trim());
  assert.deepEqual(about.career.map((item) => item.period), [
    '2025.10–현재',
    '2023.11–2025.09',
    '2021.04–2023.11',
  ]);
  assert.ok(about.career.every((item) => item.title && item.summary && item.stack));
  assert.ok(about.technologies.every((item) => item.area && item.tools && item.usage));
});

test('representative work links point to current career articles and explain scope, choice, and result', () => {
  assert.equal(about.highlights.length, 6);
  assert.equal(new Set(about.highlights.map((work) => work.to)).size, about.highlights.length);
  for (const work of about.highlights) {
    for (const field of ['period', 'title', 'scope', 'decision', 'result']) {
      assert.ok(work[field]?.trim(), `${work.to} ${field}`);
    }
    assert.ok(careerPaths.includes(`${work.to}/`), `${work.to} 경력 링크 보호 대상 아님`);
    const slug = work.to.match(/^\/cases\/([a-z0-9-]+)$/)?.[1];
    assert.ok(slug, work.to);
    const article = readFileSync(new URL(`../content/cases/${slug}.mdx`, import.meta.url), 'utf8');
    assert.doesNotMatch(article, /^archived: true$/m, work.to);
  }
});

test('career outcomes keep sampling and shared-DB ownership boundaries explicit', () => {
  const diagnostic = about.highlights.find((work) => work.to === '/cases/playhub-diagnostic-sampling');
  const homeDiagnostic = site.homeFeaturedCases.find((work) => work.slug === 'playhub-diagnostic-sampling');
  const diagnosticArticle = readFileSync(new URL('../content/cases/playhub-diagnostic-sampling.mdx', import.meta.url), 'utf8');
  assert.match(diagnostic.decision, /지표 이벤트는 클라이언트 표본에서 제외하고 상세 진단만 기기별 고정 2%/);
  assert.match(diagnostic.result, /데이터 플랫폼 담당자.*진단 이벤트 약 86% 감소/);
  assert.doesNotMatch(diagnostic.result, /54%|비용 절감/);
  for (const text of [homeDiagnostic.result, diagnostic.result, diagnosticArticle]) {
    assert.match(text, /데이터 플랫폼 담당자.{0,150}86%/);
  }

  const server = about.highlights.find((work) => work.to === '/cases/ai-cross-functional-delivery');
  assert.match(server.scope, /미지원 요청.*테스트/);
  assert.match(server.decision, /미지원 요청.*저장·외부 처리 전에 거절/);
  assert.match(server.result, /DBA.*완료 보고.*서버 변경을 병합/);
});

test('representative PlayHub story links to the separately published company articles', () => {
  const article = readFileSync(new URL('../content/cases/playhub-product-architecture.mdx', import.meta.url), 'utf8');
  const playhub = about.highlights.find((work) => work.to === '/cases/playhub-product-architecture');
  assert.equal(playhub.companyWriting, true);
  for (const writing of site.homeWriting) {
    assert.ok(article.includes(`](${writing.url})`), writing.url);
  }
});
