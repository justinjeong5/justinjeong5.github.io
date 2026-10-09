import { Link } from 'react-router-dom';
import { getAllCases, getAllEssays } from '../lib/content';
import { useReadingView } from '../lib/use-reading-view';
import CompactArticleList from '../components/ui/CompactArticleList';
import { WORK_TOPICS, WORK_SERIES, RECOMMENDED_READS, resolveWorkTopic, resolveWorkPath, selectAllWorkArticles, selectTopicArticles, selectWorkCases, workPathUrl, visibleEntries } from '../lib/work-paths';

function CasesPage() {
  const requested = useReadingView();
  const topic = resolveWorkTopic(requested);
  const path = resolveWorkPath(requested);
  const view = requested === 'previous' ? 'previous' : topic?.id || path?.id || 'all';
  const all = getAllCases();
  const cases = topic ? selectTopicArticles(all, getAllEssays(), topic.id) : view === 'previous' ? visibleEntries(all).filter((study) => study.series !== WORK_SERIES) : path ? selectWorkCases(all, view) : selectAllWorkArticles(all, getAllEssays());
  const tabs = [{ id: 'all', label: '전체 글' }, ...WORK_TOPICS, { id: 'previous', label: '개인 프로젝트' }];

  return (
    <div className="page page-list scan-index">
      <header className="page-header">
        <p className="eyebrow">개발 경험</p>
        <h1>어떤 문제를 다뤄 왔는가</h1>
        <p className="page-lead">제품 구축, 비동기 실행, 관측과 개발환경. 제목에서 관심 있는 문제를 골라 읽을 수 있습니다.</p>
      </header>
      {view === 'all' ? <nav className="recommended-inline" aria-label="대표 경험"><span>대표 경험:</span>{RECOMMENDED_READS.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</nav> : null}
      <nav className="reading-tabs" aria-label="개발 주제">
        {tabs.map((tab) => <Link key={tab.id} to={workPathUrl(tab.id)} aria-current={view === tab.id ? 'page' : undefined} className={view === tab.id ? 'is-selected' : ''}>{tab.label}</Link>)}
      </nav>
      <section className="case-group" aria-labelledby="case-view-title">
        <h2 id="case-view-title" className="article-index-title">{topic?.label || path?.label || (view === 'previous' ? '개인 프로젝트' : '전체 개발 경험과 회고')}</h2>
        {topic || path ? <p className="article-index-description">{(topic || path).description}</p> : null}
        {cases.length ? <CompactArticleList key={view} entries={cases} view={view} /> : <p className="empty-state">이 주제의 기록이 아직 없습니다.</p>}
      </section>
    </div>
  );
}

export default CasesPage;
