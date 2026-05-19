import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { ROUTES } from '../lib/routes';

function NotFoundPage() {
  return (
    <div className="page page-empty">
      <p className="eyebrow">404</p>
      <h1>이 길은 아직 비어있어요</h1>
      <p>찾으시는 페이지가 없거나 이동했습니다. 홈으로 돌아가서 다른 입구를 찾아보세요.</p>
      <Link to={ROUTES.home} className="see-all-link">
        <ArrowLeft size={16} aria-hidden="true" /> 홈으로
      </Link>
    </div>
  );
}

export default NotFoundPage;
