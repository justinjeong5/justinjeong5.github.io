import { Link } from 'react-router-dom';

import { ROUTES } from '../lib/routes';

function CvPage() {
  return (
    <div className="page page-empty">
      <p className="eyebrow">Reading work</p>
      <h1>먼저 실제 기록을 읽습니다</h1>
      <p className="page-lead">현재는 일의 과정과 여러 관점을 연결해 검토하는 단계입니다. 이전 이력 페이지를 최신 소개로 사용하지 않고, 업무 기록과 관련 글에서 확인할 수 있는 범위를 먼저 정리합니다.</p>
      <Link to={ROUTES.cases} className="button button-primary">판단과 구현의 기록</Link>
      <Link to={ROUTES.essayDetail('why-not-traditional-resume')} className="see-all-link">이 기록을 읽는 방법</Link>
    </div>
  );
}

export default CvPage;
