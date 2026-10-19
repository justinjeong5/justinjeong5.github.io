import { Link } from 'react-router-dom';

import { aboutData, siteData } from '../lib/content';
import { ROUTES } from '../lib/routes';

function AboutPage() {
  return (
    <div className="page about-page portfolio-page">
      <header className="about-intro">
        <p className="eyebrow">{siteData.role} · {siteData.careerLine}</p>
        <h1>{siteData.name} <span>Justin Jeong</span></h1>
        <p className="about-headline">{aboutData.headline}</p>
        <p className="about-bio">{aboutData.bio}</p>
      </header>

      <section id="career-history" className="about-section" aria-labelledby="career-history-title">
        <header>
          <h2 id="career-history-title">경력</h2>
          <p>버즈빌 · 2021.04–현재</p>
        </header>
        <ol className="about-timeline">
          {aboutData.career.map((item) => (
            <li key={item.period}>
              <div className="about-timeline-period">{item.period}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p className="about-stack">{item.stack}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="career-work" className="about-section" aria-labelledby="career-work-title">
        <header>
          <h2 id="career-work-title">대표 작업</h2>
          <p>맡은 범위와 선택의 이유, 확인한 결과를 적었습니다.</p>
        </header>
        <ol className="about-work-list">
          {aboutData.highlights.map((work, index) => (
            <li key={work.to}>
              <div className="about-work-index">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{work.period}</span>
              </div>
              <div className="about-work-content">
                <h3>{work.title}</h3>
                <dl>
                  <div><dt>문제</dt><dd>{work.problem}</dd></div>
                  <div><dt>선택</dt><dd>{work.decision}</dd></div>
                  <div><dt>결과</dt><dd>{work.result}</dd></div>
                </dl>
                <Link className="about-work-link" to={work.to} aria-label={`${work.title} 자세한 글 읽기`}>자세한 글 읽기 →</Link>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="career-technology" className="about-section" aria-labelledby="career-technology-title">
        <header>
          <h2 id="career-technology-title">사용한 기술</h2>
          <p>기술 이름보다 실제로 어디에 썼는지를 함께 적었습니다.</p>
        </header>
        <ul className="about-technology">
          {aboutData.technologies.map((item) => (
            <li key={item.area}>
              <h3>{item.area}</h3>
              <p className="about-technology-tools">{item.tools}</p>
              <p>{item.usage}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="about-footer">
        <p>각 작업의 구체적인 과정은 글에서 이어집니다.</p>
        <Link to={ROUTES.writing}>글 목록 보기 →</Link>
      </footer>
    </div>
  );
}

export default AboutPage;
