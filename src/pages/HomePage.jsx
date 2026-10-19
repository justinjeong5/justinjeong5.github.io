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
    <div className="story-home career-home">
      <header className="career-intro">
        <p className="eyebrow">{siteData.role} · {siteData.careerLine}</p>
        <h1>{siteData.name} <span>Justin Jeong</span></h1>
        <p className="career-lead">버즈빌에서 광고·리워드 제품의 핵심 프론트엔드를 구축했습니다. 서버가 제공한 참여 상태를 화면 행동으로 해석하고, 광고 SDK의 실행·완료 신호와 앱·웹 복귀를 구별하며 QA와 출시 후 관측까지 이어 왔습니다.</p>
        <nav className="career-actions" aria-label="빠른 이동">
          <a className="career-primary-link" href="#selected-work">대표 작업 보기</a>
          <Link to={ROUTES.about}>경력 보기</Link>
          <Link to={ROUTES.writing}>글에서 찾아보기</Link>
        </nav>
      </header>

      <section id="selected-work" className="career-section" aria-labelledby="selected-work-title">
        <div className="career-section-heading">
          <div>
            <p className="eyebrow">버즈빌에서 맡은 일</p>
            <h2 id="selected-work-title">대표 작업</h2>
          </div>
          <Link to={ROUTES.cases}>개발 경험 모두 보기 →</Link>
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
