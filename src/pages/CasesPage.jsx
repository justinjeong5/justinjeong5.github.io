import { Link } from 'react-router-dom';
import { getAllCases, getAllEssays } from '../lib/content';
import { useReadingView } from '../lib/use-reading-view';
import CompactArticleList from '../components/ui/CompactArticleList';
import { WORK_SERIES, resolveWorkTopic, resolveWorkPath, selectTopicArticles, selectWorkCases, visibleEntries } from '../lib/work-paths';
import { selectEditorialArticles } from '../lib/editorial';
import { ROUTES } from '../lib/routes';

function CasesPage() {
  const requested = useReadingView();
  const topic = resolveWorkTopic(requested);
  const path = resolveWorkPath(requested);
  const support = requested === 'support';
  const view = requested === 'previous' ? 'previous' : support ? 'support' : topic?.id || path?.id || 'all';
  const all = getAllCases();
  const essays = getAllEssays();
  const articles = topic ? selectTopicArticles(all, essays, topic.id) : view === 'previous' ? visibleEntries(all).filter((study) => study.series !== WORK_SERIES) : path ? selectWorkCases(all, view) : selectEditorialArticles(all, essays, support);

  return (
    <div className="page page-list story-index">
      <header className="page-header">
        <p className="eyebrow">글</p>
        <h1>{support ? '짧은 기술 기록' : '개발하며 바뀐 판단들'}</h1>
        <p className="page-lead">{support ? '개별 계약과 작은 개선을 다룬 기록입니다. 제품 개발의 전체 과정은 대표 글에서 읽을 수 있습니다.' : '한 제품이나 문제의 시작부터 선택, 구현과 실제 확인한 결과까지 연결한 이야기입니다.'}</p>
      </header>
      <nav className="reading-tabs" aria-label="글 목록">
        <Link to={ROUTES.cases} aria-current={view === 'all' ? 'page' : undefined}>대표 글</Link>
        <Link to={ROUTES.cases + '?view=support'} aria-current={support ? 'page' : undefined}>기술 기록</Link>
      </nav>
      {topic || path ? <h2 className="article-index-title">{(topic || path).label}</h2> : null}
      {articles.length ? <CompactArticleList key={view} entries={articles} view={view} /> : <p className="empty-state">아직 공개한 글이 없습니다.</p>}
    </div>
  );
}

export default CasesPage;
