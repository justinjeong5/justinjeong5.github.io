import { Link } from 'react-router-dom';

import { ROUTES } from '../lib/routes';

function CvPage() {
  return (
    <div className="page page-empty">
      <p className="eyebrow">경력과 개발 경험</p>
      <h1>제품을 만든 과정과 기술적 선택</h1>
      <p className="page-lead">제품의 초기 구축부터 출시와 후속 개선까지 맡아 온 프론트엔드 엔지니어입니다. 소개에서 경력과 일하는 방식을, 개발 경험에서 실제 문제를 풀며 내린 판단과 구현 과정을 읽을 수 있습니다.</p>
      <Link to={ROUTES.about} className="button button-primary">경력과 일하는 방식</Link>
      <Link to={ROUTES.cases} className="see-all-link">개발 경험 읽기</Link>
    </div>
  );
}

export default CvPage;
