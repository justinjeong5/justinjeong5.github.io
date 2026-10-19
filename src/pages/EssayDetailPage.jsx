import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { getEssay } from '../lib/content';
import { ROUTES } from '../lib/routes';
import { displayContextDate } from '../lib/article-dates.js';
import ConsolidationNotice from '../components/ui/ConsolidationNotice';
import { articleCollection } from '../lib/editorial';

function EssayDetailPage() {
  const { slug } = useParams();
  const essay = getEssay(slug);

  if (!essay) {
    return (
      <div className="page page-empty">
        <p className="eyebrow">404</p>
        <h1>찾을 수 없는 에세이</h1>
        <Link to={ROUTES.writing} className="see-all-link">
          <ArrowLeft size={16} aria-hidden="true" /> 글 목록
        </Link>
      </div>
    );
  }

  const { Component } = essay;
  const collection = articleCollection(essay);

  return (
    <article className="page essay-detail">
      <header className="page-header">
        <p className="eyebrow">{essay.archived ? essay.supersededBy === ROUTES.writing ? '이전 글' : '통합한 이전 글' : collection ? <Link to={collection.url}>{collection.label}</Link> : '기술 에세이'} · {displayContextDate(essay)}</p>
        <h1>{essay.title}</h1>
        {essay.summary ? <p className="page-lead">{essay.summary}</p> : null}
      </header>

      <div className="prose">
        <ConsolidationNotice entry={essay} />
        {essay.archived ? (
          <details className="archive-source">
            <summary>남겨둔 내용 보기</summary>
            <Component />
          </details>
        ) : <Component />}
      </div>

      <footer className="page-footer">
        <Link to={ROUTES.writing} className="see-all-link">
          <ArrowLeft size={16} aria-hidden="true" /> 글 목록으로
        </Link>
      </footer>
    </article>
  );
}

export default EssayDetailPage;
