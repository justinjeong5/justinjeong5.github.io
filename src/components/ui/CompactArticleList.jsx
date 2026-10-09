import { useState } from 'react';
import { Link } from 'react-router-dom';
import { displayWorkPeriod } from '../../lib/article-dates';
import { caseStudyUrl, essayStudyUrl } from '../../lib/work-paths';

function CompactArticleList({ entries, view }) {
  const [showSummary, setShowSummary] = useState(false);
  return (
    <div className="compact-index">
      <div className="compact-controls">
        <span>{entries.length}편 · 최신 업무 시점순</span>
        <button type="button" aria-pressed={showSummary} onClick={() => setShowSummary(!showSummary)}>{showSummary ? '제목만 보기' : '요약 함께 보기'}</button>
      </div>
      <ul className="compact-article-list">
        {entries.map((entry) => {
          const essay = entry.kind === 'essay';
          const to = essay ? essayStudyUrl(entry.slug, view) : caseStudyUrl(entry.slug, view);
          return (
            <li key={entry.kind + entry.slug}>
              <Link to={to} className="compact-article-row">
                <div>
                  <span className="compact-kind">{essay ? '비교·회고' : entry.scopeLabel || '구현 사례'}</span>
                  <h3>{entry.title}</h3>
                  {showSummary ? <p>{entry.summary}</p> : null}
                </div>
                <span className="compact-period">{displayWorkPeriod(entry)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CompactArticleList;
