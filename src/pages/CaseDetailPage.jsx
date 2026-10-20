import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { getCase } from '../lib/content';
import { displayWorkPeriod } from '../lib/article-dates.js';
import { ROUTES } from '../lib/routes';
import ConsolidationNotice from '../components/ui/ConsolidationNotice';
import { articleCollection, writingSectionForSlug } from '../lib/editorial';

function CaseDetailPage() {
  const { slug } = useParams();
  const study = getCase(slug);

  if (!study) return <Navigate to={ROUTES.home} replace />;

  const { Component } = study;
  const collection = articleCollection(study);
  const section = study.archived ? undefined : writingSectionForSlug(slug);
  const sectionUrl = section ? `${ROUTES.writing}#${section.id}` : null;

  return (
    <article className="page case-detail">
      <header className="page-header case-detail-header">
        <p className="eyebrow">{study.archived ? '이전 글' : section || collection ? <Link to={sectionUrl || collection.url}>{section?.label || collection.label}</Link> : study.statusLabel || study.status}</p>
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
        <ConsolidationNotice entry={study} />
        {study.archived ? (
          <details className="archive-source">
            <summary>남겨둔 내용 보기</summary>
            <Component />
          </details>
        ) : <Component />}
      </div>

      <footer className="page-footer">
        <Link to={sectionUrl || ROUTES.writing} className="see-all-link">
          <ArrowLeft size={16} aria-hidden="true" /> 글 목록으로
        </Link>
      </footer>
    </article>
  );
}

export default CaseDetailPage;
