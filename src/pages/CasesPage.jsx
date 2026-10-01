import { Link } from 'react-router-dom';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';

import { getAllCases } from '../lib/content';
import { useReadingView } from '../lib/use-reading-view';
import { WORK_PATHS, WORK_SERIES, resolveWorkPath, selectWorkCases, workPathUrl, caseStudyUrl, visibleEntries } from '../lib/work-paths';

function CaseCard({ study, view }) {
  return (
    <li>
      <Link to={caseStudyUrl(study.slug, view)} className="case-card-link">
        <article>
          <div className="case-card-top">
            <span className="status-pill">{study.statusLabel || study.status}</span>
            <BriefcaseBusiness size={18} aria-hidden="true" />
          </div>
          <h3>{study.title}</h3>
          <p className="case-summary">{study.summary}</p>
          <dl className="case-mini-meta">
            <div><dt>담당</dt><dd>{study.role}</dd></div>
            <div><dt>시기</dt><dd>{study.period}</dd></div>
          </dl>
          <span className="see-detail">과정 읽기 <ArrowUpRight size={14} aria-hidden="true" /></span>
        </article>
      </Link>
    </li>
  );
}

function CasesPage() {
  const requested = useReadingView();
  const path = resolveWorkPath(requested);
  const view = requested === 'previous' ? 'previous' : path?.id || 'all';
  const all = getAllCases();
  const previous = visibleEntries(all).filter((study) => study.series !== WORK_SERIES);
  const cases = view === 'previous' ? previous : selectWorkCases(all, view);
  const tabs = [{ id: 'all', label: '업무 기록' }, ...WORK_PATHS, { id: 'previous', label: '개인 프로젝트와 탐구' }];

  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">Work records</p>
        <h1>판단과 구현의 기록</h1>
        <p className="page-lead">어떤 문제를 발견했고, 누구와 무엇을 조율했으며, 어느 범위까지 구현하고 확인했는지 기록합니다. 하나의 정체성보다 서로 다른 질문에서 같은 일을 읽습니다.</p>
      </header>
      <nav className="reading-tabs" aria-label="경험을 읽는 관점">
        {tabs.map((tab) => (
          <Link key={tab.id} to={workPathUrl(tab.id)} aria-current={view === tab.id ? 'page' : undefined} className={view === tab.id ? 'is-selected' : ''}>
            {tab.label}
          </Link>
        ))}
      </nav>
      <section className="case-group" aria-labelledby="case-view-title">
        <div className="case-group-head">
          <h2 id="case-view-title" className="case-group-title">{path?.question || (view === 'previous' ? '다른 맥락에서의 선택' : '제품과 운영에서 다룬 일')}</h2>
          <p className="case-group-blurb">{path?.description || (view === 'previous' ? '기존 글에서 수치와 실행 범위를 다시 구분한 개인 프로젝트·사이트 구현 기록입니다.' : '제안·협의·구현·후속 대응의 연결을 중심으로 정리했습니다. 운영 효과는 확인된 범위와 구분합니다.')}</p>
          <span className="meta">{cases.length}개의 기록</span>
        </div>
        {cases.length ? <ul className="case-grid">{cases.map((study) => <CaseCard key={study.slug} study={study} view={view} />)}</ul> : <p className="empty-state">이 관점의 기록이 아직 없습니다.</p>}
      </section>
    </div>
  );
}

export default CasesPage;
