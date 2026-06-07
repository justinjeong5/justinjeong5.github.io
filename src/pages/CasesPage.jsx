import { Link } from 'react-router-dom';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';

import { getAllCases } from '../lib/content';
import { ROUTES } from '../lib/routes';

const GROUPS = [
  {
    key: 'product',
    title: '제품·실무',
    blurb: '회사·사이드 프로젝트에서 문제를 풀고 운영한 기록.',
  },
  {
    key: 'builder-log',
    title: '이 사이트를 만든 기록 (Builder log)',
    blurb: '이 사이트와 AI 워크플로우를 어떻게 만들고 운영했는지의 과정 기록.',
  },
];

function CaseCard({ study }) {
  return (
    <li>
      <Link to={ROUTES.caseDetail(study.slug)} className="case-card-link">
        <article>
          <div className="case-card-top">
            <span className={`status-pill status-${(study.status || 'draft').toLowerCase()}`}>
              {study.status}
            </span>
            <BriefcaseBusiness size={18} aria-hidden="true" />
          </div>
          <h3>{study.title}</h3>
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
  );
}

function CasesPage() {
  const cases = getAllCases();
  const grouped = GROUPS.map((g) => ({
    ...g,
    items: cases.filter((c) => (c.category || 'builder-log') === g.key),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">Cases</p>
        <h1>일하는 방식의 기록</h1>
        <p>각 케이스는 문제, 버린 선택지, 산출물, 임팩트의 네 칸을 채워 일하는 방식을 증명합니다. 제품·실무와 이 사이트를 만든 기록을 나눠 둡니다.</p>
      </header>

      {cases.length === 0 ? (
        <p className="empty-state">아직 케이스가 없습니다. 곧 채워집니다.</p>
      ) : (
        grouped.map((g) => (
          <section key={g.key} className="case-group">
            <div className="case-group-head">
              <h2 className="case-group-title">{g.title}</h2>
              <p className="case-group-blurb">{g.blurb}</p>
            </div>
            <ul className="case-grid">
              {g.items.map((study) => (
                <CaseCard key={study.slug} study={study} />
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}

export default CasesPage;
