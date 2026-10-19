import { Link } from 'react-router-dom';
import { getCase, siteData } from '../lib/content';
import { ROUTES } from '../lib/routes';

function HomePage() {
  const featured = siteData.homeFeaturedCases.map((card) => {
    const entry = getCase(card.slug);
    if (!entry) throw new Error(`대표 작업을 찾을 수 없습니다: ${card.slug}`);
    return { ...card, title: entry.title };
  });
  const personal = siteData.homePersonalCases.map((card) => {
    const entry = getCase(card.slug);
    if (!entry) throw new Error(`개인 작업 글을 찾을 수 없습니다: ${card.slug}`);
    return { ...entry, name: card.name };
  });

  return (
    <div className="story-home career-home portfolio-page">
      <header className="career-intro">
        <h1>{siteData.name} <span>Justin Jeong</span></h1>
        <p className="career-lead">버즈빌에서 광고·리워드 제품의 주요 화면을 만들었습니다. 앱과 웹에서 참여하고 보상을 확인하는 과정에는 서버의 참여 상태, 광고 SDK의 완료 신호, 앱으로 돌아오는 시점이 맞물립니다. 이 과정에서 사용자가 무엇을 보고 다음에 무엇을 할 수 있는지 정하고, QA와 출시 뒤 문제 확인까지 맡아 왔습니다.</p>
      </header>

      <section id="selected-work" className="career-section" aria-labelledby="selected-work-title">
        <div className="career-section-heading">
          <div>
            <p className="eyebrow">버즈빌에서 맡은 일</p>
            <h2 id="selected-work-title">대표 작업</h2>
          </div>
          <Link to={ROUTES.writing}>다른 글 보기 →</Link>
        </div>
        <div className="career-work-grid">
          {featured.map((card) => (
            <article className="career-work-card" key={card.slug}>
              <p className="eyebrow">{card.label}</p>
              <h3><Link to={ROUTES.caseDetail(card.slug)}>{card.title}</Link></h3>
              <dl>
                <div><dt>문제</dt><dd>{card.problem}</dd></div>
                <div><dt>선택</dt><dd>{card.decision}</dd></div>
                <div><dt>변화</dt><dd>{card.result}</dd></div>
              </dl>
              <Link className="career-detail-link" to={ROUTES.caseDetail(card.slug)}>사례 읽기 →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="career-section" aria-labelledby="career-personal-title">
        <div className="career-section-heading">
          <div>
            <p className="eyebrow">업무 밖에서 만든 것</p>
            <h2 id="career-personal-title">개인 작업과 오픈소스</h2>
          </div>
        </div>
        <ul className="career-personal-list">
          {personal.map((entry) => (
            <li key={entry.slug}>
              <p className="eyebrow">{entry.name} · {entry.statusLabel}</p>
              <h3><Link to={ROUTES.caseDetail(entry.slug)}>{entry.title}</Link></h3>
              <p>{entry.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="career-section" aria-labelledby="career-writing-title">
        <div className="career-section-heading">
          <div>
            <p className="eyebrow">버즈빌 공식 기술블로그 · tech.buzzvil.com</p>
            <h2 id="career-writing-title">회사 기술블로그에 쓴 글</h2>
          </div>
        </div>
        <ul className="career-writing-list">
          {siteData.homeWriting.map((article) => (
            <li key={article.url}>
              <a href={article.url}>{article.title} ↗</a>
              <span>{article.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
