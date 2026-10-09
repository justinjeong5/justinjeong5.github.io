import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

import { aboutData, siteData } from '../lib/content';

function AboutPage() {
  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">소개 · Frontend Engineer</p>
        <h1>{siteData.name}</h1>
        <p className="page-lead">{aboutData.bio}</p>
      </header>

      <section className="principles-block">
        <h2>맡아 온 일</h2>
        <ul className="principle-list">
          {aboutData.highlights.map((h) => (
            <li key={h.to}>
              <ArrowUpRight size={18} aria-hidden="true" />
              <div>
                <h3>
                  <Link to={h.to}>{h.title}</Link>
                </h3>
                <p>{h.impact}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="principles-block">
        <h2>일해 온 곳 · 버즈빌</h2>
        <ol className="career-timeline">
          {aboutData.career.map((item) => (
            <li key={item.period}>
              <span className="meta">{item.period}</span>
              <div><h3>{item.title}</h3><p>{item.detail}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="principles-block">
        <h2>함께 일할 때</h2>
        <ul className="principle-list">
          {aboutData.operatingPrinciples.map((principle) => (
            <li key={principle.title}>
              <CheckCircle2 size={18} aria-hidden="true" />
              <div><h3>{principle.title}</h3><p>{principle.detail}</p></div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
