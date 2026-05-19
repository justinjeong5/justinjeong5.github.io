import { Link } from 'react-router-dom';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';

import { getAllCases } from '../lib/content';
import { ROUTES } from '../lib/routes';

function CasesPage() {
  const cases = getAllCases();

  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">Cases</p>
        <h1>일하는 방식의 기록</h1>
        <p>각 케이스는 문제, 버린 선택지, 산출물, 임팩트의 네 칸을 채워 일하는 방식을 증명합니다.</p>
      </header>

      {cases.length === 0 ? (
        <p className="empty-state">아직 케이스가 없습니다. 곧 채워집니다.</p>
      ) : (
        <ul className="case-grid">
          {cases.map((study) => (
            <li key={study.slug}>
              <Link to={ROUTES.caseDetail(study.slug)} className="case-card-link">
                <article>
                  <div className="case-card-top">
                    <span className={`status-pill status-${(study.status || 'draft').toLowerCase()}`}>
                      {study.status}
                    </span>
                    <BriefcaseBusiness size={18} aria-hidden="true" />
                  </div>
                  <h2>{study.title}</h2>
                  <p className="case-summary">{study.summary}</p>
                  <dl className="case-mini-meta">
                    <div>
                      <dt>Role</dt>
                      <dd>{study.role}</dd>
                    </div>
                    <div>
                      <dt>Period</dt>
                      <dd>{study.period}</dd>
                    </div>
                  </dl>
                  <span className="see-detail">
                    자세히 보기 <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CasesPage;
