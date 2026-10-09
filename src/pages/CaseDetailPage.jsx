import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { getCase } from '../lib/content';
import { displayWorkPeriod } from '../lib/article-dates.js';
import { useReadingView } from '../lib/use-reading-view';
import { ROUTES } from '../lib/routes';
import { readingPathsFor, workPathUrl, caseListUrl } from '../lib/work-paths';

function CaseDetailPage() {
  const { slug } = useParams();
  const view = useReadingView();
  const study = getCase(slug);

  if (!study) {
    return (
      <div className="page page-empty">
        <p className="eyebrow">404</p>
        <h1>찾을 수 없는 케이스</h1>
        <Link to={ROUTES.cases} className="see-all-link">
          <ArrowLeft size={16} aria-hidden="true" /> 개발 경험 목록
        </Link>
      </div>
    );
  }

  const { Component } = study;

  return (
    <article className="page case-detail">
      <header className="page-header case-detail-header">
        <p className="eyebrow">{study.statusLabel || study.status}</p>
        <h1>{study.title}</h1>
        <p className="page-lead">{study.summary}</p>
        <dl className="case-meta">
          <div>
            <dt>담당</dt>
            <dd>{study.role}</dd>
          </div>
          <div>
            <dt>시기</dt>
            <dd>{displayWorkPeriod(study)}</dd>
          </div>
          {study.tags && study.tags.length > 0 ? (
            <div>
            <dt>주제</dt>
              <dd>{study.tags.map((tag) => `#${tag}`).join(' ')}</dd>
            </div>
          ) : null}
        </dl>
      </header>

      <div className="prose">
        <Component />
      </div>

      {readingPathsFor(slug).length > 0 ? (
        <section className="related-block">
          <h2>다른 관점에서 함께 읽기</h2>
          <div className="reading-tabs">
            {readingPathsFor(slug).map((path) => <Link key={path.id} to={workPathUrl(path.id)}>{path.label}</Link>)}
          </div>
        </section>
      ) : null}

      <footer className="page-footer">
        <Link to={caseListUrl(study, view)} className="see-all-link">
          <ArrowLeft size={16} aria-hidden="true" /> 개발 경험 목록
        </Link>
      </footer>
    </article>
  );
}

export default CaseDetailPage;
