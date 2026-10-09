import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import { getAllEssays } from '../lib/content';
import { ROUTES } from '../lib/routes';
import { visibleEntries } from '../lib/work-paths';
import { displayContextDate } from '../lib/article-dates.js';

function EssaysPage() {
  const essays = visibleEntries(getAllEssays());

  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">기술 에세이</p>
        <h1>개발하며 바뀐 판단들</h1>
        <p className="page-lead">여러 업무에서 반복해서 만난 문제를 연결합니다. 설계와 검증, 동료와의 협업, AI에 맡길 범위와 직접 확인할 끝점을 실제 경험으로 풀어 썼습니다.</p>
      </header>

      {essays.length === 0 ? (
        <p className="empty-state">아직 발행한 에세이가 없습니다.</p>
      ) : (
        <ul className="article-list">
          {essays.map((essay) => (
            <li key={essay.slug}>
              <Link to={ROUTES.essayDetail(essay.slug)} className="article-row" aria-label={essay.title}>
                <span className="article-period">{displayContextDate(essay)}</span>
                <article className="article-row-copy">
                  <h2>{essay.title}</h2>
                  <p>{essay.summary}</p>
                </article>
                <ArrowUpRight className="article-row-arrow" size={20} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EssaysPage;
