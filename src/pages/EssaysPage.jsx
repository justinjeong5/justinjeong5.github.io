import { getAllEssays } from '../lib/content';
import { visibleEntries } from '../lib/work-paths';
import CompactArticleList from '../components/ui/CompactArticleList';

function EssaysPage() {
  const essays = visibleEntries(getAllEssays()).map((entry) => ({ ...entry, kind: 'essay' }));
  return (
    <div className="page page-list scan-index">
      <header className="page-header">
        <p className="eyebrow">기술 에세이</p>
        <h1>여러 경험에서 얻은 설계와 협업의 기준</h1>
        <p className="page-lead">개별 구현을 넘어, 서로 다른 상황에서 왜 다른 선택을 했는지 비교한 글입니다.</p>
      </header>
      <h2 className="article-index-title">전체 기술 에세이</h2>
      {essays.length ? <CompactArticleList entries={essays} /> : <p className="empty-state">아직 발행한 에세이가 없습니다.</p>}
    </div>
  );
}

export default EssaysPage;
