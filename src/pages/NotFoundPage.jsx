import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { ROUTES } from '../lib/routes';

function NotFoundPage() {
  return (
    <div className="page page-empty">
      <p className="eyebrow">404</p>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>주소가 바뀌었거나 없는 페이지일 수 있습니다. 홈에서 다시 찾아보세요.</p>
      <Link to={ROUTES.home} className="see-all-link">
        <ArrowLeft size={16} aria-hidden="true" /> 홈으로
      </Link>
    </div>
  );
}

export default NotFoundPage;
