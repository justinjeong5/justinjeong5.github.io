import { Link } from 'react-router-dom';
import { consolidationTarget } from '../../lib/editorial';

function ConsolidationNotice({ entry }) {
  const target = consolidationTarget(entry);
  if (!target) return null;
  const isGuide = target === '/writing';
  return (
    <aside className="consolidation-notice">
      <p>{isGuide ? '이전 글은 공개 목록에서 내렸습니다. 현재 공개된 글은 글 목록에서 찾아볼 수 있습니다.' : '이 글의 주요 내용은 다른 글로 정리했습니다. 이 주소에는 이전 기록과 안내를 남겨 두었습니다.'}</p>
      <Link to={target}>{isGuide ? '글 목록 열기 →' : '통합한 글 읽기 →'}</Link>
    </aside>
  );
}

export default ConsolidationNotice;
