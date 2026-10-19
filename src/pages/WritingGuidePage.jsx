import { Link } from 'react-router-dom';

import { getAllCases } from '../lib/content';
import { selectWritingIndex } from '../lib/editorial';
import { ROUTES } from '../lib/routes';

function WritingGuidePage() {
  const articles = selectWritingIndex(getAllCases());

  return (
    <div className="page writing-guide portfolio-page">
      <header className="writing-intro">
        <p className="eyebrow">개발 기록</p>
        <h1>글</h1>
        <p>제품을 만들고 고치면서 마주한 문제와 그때 내린 선택을 적었습니다.</p>
      </header>

      <ul id="all-writing" className="writing-all-list" aria-label="글 목록">
        {articles.map((entry) => (
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
                <h2 id={`writing-title-${entry.slug}`}>{entry.title}</h2>
                <p id={`writing-summary-${entry.slug}`} className="writing-entry-summary">{entry.summary}</p>
              </div>
              <span className="writing-entry-arrow" aria-hidden="true">↗</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WritingGuidePage;
