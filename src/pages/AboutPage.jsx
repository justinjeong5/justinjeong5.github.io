import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

import { aboutData, siteData } from '../lib/content';

function AboutPage() {
  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">About</p>
        <h1>{siteData.name}</h1>
        <p className="page-lead">{aboutData.bio}</p>
      </header>

      <section className="evidence-block">
        <div className="panel-heading">
          <ShieldCheck size={22} aria-hidden="true" />
          <h2>Evidence system — 케이스가 강해지는 네 칸</h2>
        </div>
        <div className="evidence-grid">
          {aboutData.evidenceSystem.map((item) => (
            <article className="evidence-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.prompt}</p>
              <small>{item.artifact}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="principles-block">
        <h2>Operating principles</h2>
        <ul className="principle-list">
          {aboutData.operatingPrinciples.map((principle) => (
            <li key={principle.title}>
              <CheckCircle2 size={18} aria-hidden="true" />
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="principles-block">
        <h2>대표 작업</h2>
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
    </div>
  );
}

export default AboutPage;
