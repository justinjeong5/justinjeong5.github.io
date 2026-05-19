import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { getEssay } from '../lib/content';
import { ROUTES } from '../lib/routes';

function EssayDetailPage() {
  const { slug } = useParams();
  const essay = getEssay(slug);

  if (!essay) {
    return (
      <div className="page page-empty">
        <p className="eyebrow">404</p>
        <h1>찾을 수 없는 에세이</h1>
        <Link to={ROUTES.essays} className="see-all-link">
          <ArrowLeft size={16} aria-hidden="true" /> 에세이 목록
        </Link>
      </div>
    );
  }

  const { Component } = essay;

  return (
    <article className="page essay-detail">
      <header className="page-header">
        <p className="eyebrow">Essay{essay.readingTime ? ` · ${essay.readingTime}` : ''}</p>
        <h1>{essay.title}</h1>
        {essay.summary ? <p className="page-lead">{essay.summary}</p> : null}
      </header>

      <div className="prose">
        <Component />
      </div>

      <footer className="page-footer">
        <Link to={ROUTES.essays} className="see-all-link">
          <ArrowLeft size={16} aria-hidden="true" /> 에세이 목록
        </Link>
      </footer>
    </article>
  );
}

export default EssayDetailPage;
