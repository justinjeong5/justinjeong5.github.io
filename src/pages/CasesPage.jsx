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
        <p className="page-lead">운영 도구와 앱 안의 웹 화면을 만들며 만난 문제들입니다. 무엇이 어려웠고 어떤 선택을 했으며, 그 뒤 동작이 어떻게 달라졌는지 기록합니다.</p>
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
          <p className="case-group-blurb">{path?.description || (view === 'previous' ? '개인 프로젝트와 사이트를 만들며 살펴본 구현과 아이디어입니다.' : '입력과 저장, 외부 응답, 기술 변경에서 겪은 문제와 판단을 풀어 썼습니다.')}</p>
          <span className="meta">{cases.length}개의 기록</span>
        </div>
        {cases.length ? <ul className="case-grid">{cases.map((study) => <CaseCard key={study.slug} study={study} view={view} />)}</ul> : <p className="empty-state">이 관점의 기록이 아직 없습니다.</p>}
      </section>
    </div>
  );
}

export default CasesPage;
