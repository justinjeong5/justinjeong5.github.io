import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { getCase } from '../lib/content';
import { ROUTES } from '../lib/routes';

function CaseDetailPage() {
  const { slug } = useParams();
  const study = getCase(slug);

  if (!study) {
    return (
      <div className="page page-empty">
        <p className="eyebrow">404</p>
        <h1>찾을 수 없는 케이스</h1>
        <Link to={ROUTES.cases} className="see-all-link">
          <ArrowLeft size={16} aria-hidden="true" /> 케이스 목록
        </Link>
      </div>
    );
  }

  const { Component } = study;

  return (
    <article className="page case-detail">
      <header className="page-header case-detail-header">
        <p className="eyebrow">{study.status}</p>
        <h1>{study.title}</h1>
        <p className="page-lead">{study.summary}</p>
        <dl className="case-meta">
          <div>
            <dt>Role</dt>
            <dd>{study.role}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{study.period}</dd>
          </div>
          {study.tags && study.tags.length > 0 ? (
            <div>
              <dt>Tags</dt>
              <dd>{study.tags.map((tag) => `#${tag}`).join(' ')}</dd>
            </div>
          ) : null}
        </dl>
      </header>

      <div className="prose">
        <Component />
      </div>

      <footer className="page-footer">
        <Link to={ROUTES.cases} className="see-all-link">
          <ArrowLeft size={16} aria-hidden="true" /> 케이스 목록
        </Link>
      </footer>
    </article>
  );
}

export default CaseDetailPage;
