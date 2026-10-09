import { Link } from 'react-router-dom';
import { getAllEssays } from '../lib/content';
import { ROUTES } from '../lib/routes';
import { visibleEntries } from '../lib/work-paths';
import CompactArticleList from '../components/ui/CompactArticleList';

function EssaysPage() {
  const essays = visibleEntries(getAllEssays()).map((entry) => ({ ...entry, kind: 'essay' }));
  return (
    <div className="page page-list scan-index">
      <header className="page-header">
        <p className="eyebrow">기술 에세이</p>
        <h1>비교와 회고 기록</h1>
        <p className="page-lead">주요 개발 사례는 하나의 글로 통합했습니다. 여기는 독립적으로 남긴 비교와 운영 회고를 모았습니다.</p>
        <Link to={ROUTES.cases}>대표 글 읽기 →</Link>
      </header>
      <h2 className="article-index-title">전체 기술 에세이</h2>
      {essays.length ? <CompactArticleList entries={essays} /> : <p className="empty-state">아직 발행한 에세이가 없습니다.</p>}
    </div>
  );
}

export default EssaysPage;
