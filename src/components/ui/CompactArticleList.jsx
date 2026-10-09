import { Link } from 'react-router-dom';
import { displayWorkPeriod } from '../../lib/article-dates';
import { caseStudyUrl, essayStudyUrl } from '../../lib/work-paths';

function CompactArticleList({ entries, view }) {
  return (
    <div className="compact-index">
      <div className="compact-controls">
        <span>{entries.length}편 · 최신 업무 시점순</span>
      </div>
      <ul className="compact-article-list">
        {entries.map((entry) => {
          const essay = entry.kind === 'essay';
          const to = essay ? essayStudyUrl(entry.slug, view) : caseStudyUrl(entry.slug, view);
          return (
            <li key={entry.kind + entry.slug}>
              <Link to={to} className="compact-article-row">
                <div>
                  <h3>{entry.title}</h3>
                  <p>{entry.summary}</p>
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
