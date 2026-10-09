import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import { getAllCases } from '../lib/content';
import { displayWorkPeriod } from '../lib/article-dates.js';
import ReadingStart from '../components/ui/ReadingStart';
import { useReadingView } from '../lib/use-reading-view';
import { WORK_PATHS, WORK_SERIES, resolveWorkPath, selectWorkCases, workPathUrl, caseStudyUrl, visibleEntries } from '../lib/work-paths';

function CaseRow({ study, view }) {
  return (
    <li>
      <Link to={caseStudyUrl(study.slug, view)} className="article-row" aria-label={study.title}>
        <span className="article-period">{displayWorkPeriod(study)}</span>
        <article className="article-row-copy">
          <h3>{study.title}</h3>
          <p>{study.summary}</p>
          <div className="article-tags" aria-label="글 주제">
            {(study.tags || []).slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </article>
        <ArrowUpRight className="article-row-arrow" size={20} aria-hidden="true" />
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
  const tabs = [{ id: 'all', label: '전체' }, ...WORK_PATHS, { id: 'previous', label: '개인 프로젝트' }];

  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">개발 경험</p>
        <h1>제품을 만드는 과정</h1>
        <p className="page-lead">제품 규칙과 API, 앱·웹 참여 흐름, 관측과 개발 도구. 실제 업무에서 어떤 문제를 풀고 설계를 바꿨는지 기록합니다.</p>
      </header>
      {view === 'all' ? <ReadingStart /> : null}
      <nav className="reading-tabs" aria-label="경험을 읽는 관점">
        {tabs.map((tab) => (
          <Link key={tab.id} to={workPathUrl(tab.id)} aria-current={view === tab.id ? 'page' : undefined} className={view === tab.id ? 'is-selected' : ''}>
            {tab.label}
          </Link>
        ))}
      </nav>
      <section className="case-group" aria-labelledby="case-view-title">
        <div className="case-group-head">
          <h2 id="case-view-title" className="article-index-title">{path?.label || (view === 'previous' ? '개인 프로젝트' : '전체 글')}</h2>
          <span className="meta">{cases.length}편</span>
        </div>
        {path ? <p className="article-index-description">{path.description}</p> : null}
        {cases.length ? <ul className="article-list">{cases.map((study) => <CaseRow key={study.slug} study={study} view={view} />)}</ul> : <p className="empty-state">이 관점의 기록이 아직 없습니다.</p>}
      </section>
    </div>
  );
}

export default CasesPage;
