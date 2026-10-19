import { Link } from 'react-router-dom';

import { getAllCases, getAllEssays, getCase, siteData } from '../lib/content';
import { selectEditorialArticles } from '../lib/editorial';
import { STORY_STARTS, STORY_QUICK_READS, TECH_STARTS } from '../lib/reading-guide';
import { ROUTES } from '../lib/routes';

function GuideCard({ card, entry, entries }) {
  return (
    <article className="writing-card">
      <p className="eyebrow">{card.context || '기술 기록'}</p>
      <h3>{card.situation}</h3>
      <p className="writing-card-question"><span>읽을 관점</span>{card.question}</p>
      <Link className="writing-card-link" to={ROUTES.caseDetail(card.slug)}>{entry.title} →</Link>
      {card.scope ? <p className="writing-card-scope">{card.scope}</p> : null}
      {card.related?.length ? (
        <div className="writing-related">
          <span>함께 읽기</span>
          {card.related.map((related) => (
            <Link key={related.slug} to={ROUTES.caseDetail(related.slug)}>
              {entries.get(related.slug)?.title} · {related.reason}
            </Link>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function WritingGuidePage() {
  const cases = getAllCases();
  const entries = new Map(cases.map((entry) => [entry.slug, entry]));
  const records = selectEditorialArticles(cases, getAllEssays(), true);
  const firstRecords = new Set(TECH_STARTS.map((item) => item.slug));
  const moreRecords = records.filter((entry) => !firstRecords.has(entry.slug));

  return (
    <div className="page writing-guide">
      <header className="writing-intro">
        <p className="eyebrow">글 · 작업 기록</p>
        <h1>일의 장면에서 글을 고르기</h1>
        <p>광고·리워드 제품과 운영 도구에서 마주친 상황부터 살펴보세요. 각 글에서 무엇을 구별하고 확인했는지 읽을 관점을 함께 적었습니다. 모든 글을 순서대로 읽을 필요는 없습니다.</p>
        <nav className="writing-jump" aria-label="글 안내판 목차">
          <a href="#experience">경험 사례</a>
          <a href="#technical">기술 기록</a>
          <a href="#more-writing">다른 글 찾기</a>
        </nav>
      </header>

      <section id="experience" className="writing-section" aria-labelledby="experience-title">
        <div className="writing-section-heading">
          <div>
            <p className="eyebrow">경험 사례</p>
            <h2 id="experience-title">이런 상황이라면</h2>
          </div>
          <p>먼저 읽을 글 한 편과 그 글에서 확인할 판단입니다.</p>
        </div>
        <div className="writing-grid">
          {STORY_STARTS.map((card) => <GuideCard key={card.slug} card={card} entry={entries.get(card.slug)} entries={entries} />)}
        </div>

        <div className="writing-quick">
          <h3>이 문제라면 바로 읽기</h3>
          <ul>
            {STORY_QUICK_READS.map((card) => (
              <li key={card.slug}>
                <p>{card.situation}</p>
                <span>{card.question}</span>
                <Link to={ROUTES.caseDetail(card.slug)}>{entries.get(card.slug)?.title} →</Link>
                {card.note ? <small>{card.note}</small> : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="technical" className="writing-section" aria-labelledby="technical-title">
        <div className="writing-section-heading">
          <div>
            <p className="eyebrow">구현을 더 파고들기</p>
            <h2 id="technical-title">고장 증상에서 시작하기</h2>
          </div>
          <p>기술 기록 전체를 새 분류에 끼워 넣지 않고, 구체적인 시작점만 골랐습니다.</p>
        </div>
        <div className="writing-grid writing-technical-grid">
          {TECH_STARTS.map((card) => <GuideCard key={card.slug} card={card} entry={entries.get(card.slug)} entries={entries} />)}
        </div>

        <details id="technical-index" className="writing-index">
          <summary>다른 기술 기록 {moreRecords.length}편 펼치기</summary>
          <ul>
            {moreRecords.map((entry) => (
              <li key={`${entry.kind}:${entry.slug}`}>
                <Link to={entry.kind === 'essay' ? ROUTES.essayDetail(entry.slug) : ROUTES.caseDetail(entry.slug)}>{entry.title}</Link>
                <p>{entry.summary}</p>
              </li>
            ))}
          </ul>
        </details>
      </section>

      <section id="more-writing" className="writing-section writing-more" aria-labelledby="more-writing-title">
        <p className="eyebrow">다른 글 찾기</p>
        <h2 id="more-writing-title">목록에서 더 찾아보기</h2>
        <p>알고 있는 제목은 상단 검색에서 찾을 수 있습니다. 이전의 짧은 메모는 별도 보관함에 있습니다.</p>
        <nav aria-label="글 목록 바로가기">
          <Link to={ROUTES.cases}>개발 경험 시점순 목록 →</Link>
          <a href="#technical-index">기술 기록 색인으로 이동 →</a>
          <Link to={ROUTES.notes}>이전 짧은 기록 →</Link>
        </nav>
        <div className="writing-personal">
          <h3>개인 제품과 오픈소스</h3>
          {siteData.homePersonalCases.map((card) => (
            <Link key={card.slug} to={ROUTES.caseDetail(card.slug)}>{card.name} · {getCase(card.slug)?.title} →</Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default WritingGuidePage;
