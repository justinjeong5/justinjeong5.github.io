import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { getEssay } from '../lib/content';
import { ROUTES } from '../lib/routes';
import { displayContextDate } from '../lib/article-dates.js';
import { useReadingView } from '../lib/use-reading-view';
import { essayListUrl } from '../lib/work-paths';
import ConsolidationNotice from '../components/ui/ConsolidationNotice';
import { articleCollection } from '../lib/editorial';

function EssayDetailPage() {
  const { slug } = useParams();
  const view = useReadingView();
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
  const returnTo = essayListUrl(slug, view);
  const collection = articleCollection(essay);

  return (
    <article className="page essay-detail">
      <header className="page-header">
        <p className="eyebrow">{essay.archived ? '통합한 이전 글' : collection ? <Link to={collection.url}>{collection.label}</Link> : '기술 에세이'} · {displayContextDate(essay)}</p>
        <h1>{essay.title}</h1>
        {essay.summary ? <p className="page-lead">{essay.summary}</p> : null}
      </header>

      <div className="prose">
        <ConsolidationNotice entry={essay} />
        <Component />
      </div>

      <footer className="page-footer">
        <Link to={returnTo} className="see-all-link">
          <ArrowLeft size={16} aria-hidden="true" /> {returnTo === ROUTES.essays ? '에세이 목록' : view === 'all' ? '대표 글' : view === 'support' ? '기술 기록' : '주제 목록'}
        </Link>
      </footer>
    </article>
  );
}

export default EssayDetailPage;
