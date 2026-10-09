import { Link } from 'react-router-dom';
import { consolidationTarget } from '../../lib/editorial';

function ConsolidationNotice({ entry }) {
  const target = consolidationTarget(entry);
  if (!target) return null;
  return (
    <aside className="consolidation-notice">
      <p>이 글의 주요 개발 사례를 하나의 글로 다시 정리했습니다. 아래 원문도 계속 읽을 수 있습니다.</p>
      <Link to={target}>통합한 글 읽기 →</Link>
    </aside>
  );
}

export default ConsolidationNotice;
