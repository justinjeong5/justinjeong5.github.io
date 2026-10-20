import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getAllCases, getAllEssays } from '../lib/content';
import { displayContextDate } from '../lib/article-dates.js';
import { WRITING_SECTIONS, selectTechnicalRecords, selectWritingSections } from '../lib/editorial';
import { ROUTES } from '../lib/routes';

function WritingGuidePage() {
  const { hash } = useLocation();
  const sections = selectWritingSections(getAllCases());
  const records = selectTechnicalRecords(getAllEssays());

  useEffect(() => {
    const target = hash.slice(1);
    if (target !== 'all-writing' && target !== 'technical-records' && !WRITING_SECTIONS.some((section) => section.id === target)) return undefined;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ block: 'start' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <div className="page writing-guide portfolio-page">
      <header className="writing-intro">
        <p className="eyebrow">개발 기록</p>
        <h1>글</h1>
        <p>회사에서 맡은 일과 개인 작업을 모았습니다. 만들면서 부딪힌 문제와 고친 과정을 적었습니다.</p>
      </header>

      <div id="all-writing" className="writing-groups">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="writing-group"
            aria-labelledby={`${section.id}-title`}
          >
            <div className="writing-group-heading">
              <h2 id={`${section.id}-title`}>{section.label}</h2>
              <p>{section.description}</p>
            </div>
            <ul className="writing-all-list" aria-label={`${section.label} 글 목록`}>
              {section.articles.map((entry) => (
                <li key={entry.slug}>
                  <Link
                    className="writing-entry"
                    to={ROUTES.caseDetail(entry.slug)}
                    aria-labelledby={`writing-title-${entry.slug}`}
                    aria-describedby={`writing-label-${entry.slug} writing-period-${entry.slug} writing-summary-${entry.slug}`}
                  >
                    <div className="writing-entry-meta">
                      <span id={`writing-label-${entry.slug}`} className="writing-entry-label">{entry.label}</span>
                      <span id={`writing-period-${entry.slug}`} className="writing-entry-period">{entry.period}</span>
                    </div>
                    <div className="writing-entry-content">
                      <h3 id={`writing-title-${entry.slug}`}>{entry.title}</h3>
                      <p id={`writing-summary-${entry.slug}`} className="writing-entry-summary">{entry.summary}</p>
                    </div>
                    <span className="writing-entry-arrow" aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {records.length > 0 ? (
        <section id="technical-records" className="writing-records" aria-labelledby="technical-records-title">
          <div className="writing-records-heading">
            <p className="eyebrow">기술 기록</p>
            <h2 id="technical-records-title">기능을 제품에서 쓰며 정리한 글</h2>
            <p>코드에서 헷갈렸던 기능을 실제 사용 장면과 함께 풀었습니다.</p>
          </div>
          <ul className="writing-all-list" aria-label="기술 기록 목록">
            {records.map((entry) => (
              <li key={entry.slug}>
                <Link className="writing-entry" to={ROUTES.essayDetail(entry.slug)}>
                  <div className="writing-entry-meta">
                    <span className="writing-entry-label">기술 에세이</span>
                    <span className="writing-entry-period">{displayContextDate(entry)}</span>
                  </div>
                  <div className="writing-entry-content">
                    <h3>{entry.title}</h3>
                    <p className="writing-entry-summary">{entry.summary}</p>
                  </div>
                  <span className="writing-entry-arrow" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

export default WritingGuidePage;
