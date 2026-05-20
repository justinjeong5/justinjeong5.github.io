import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import { getAllEssays } from '../lib/content';
import { ROUTES } from '../lib/routes';

function EssaysPage() {
  const essays = getAllEssays();

  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">Essays</p>
        <h1>긴 글로만 풀리는 생각</h1>
        <p>노트보다 호흡이 긴, 한 주제를 끝까지 따라가본 글들입니다.</p>
      </header>

      {essays.length === 0 ? (
        <p className="empty-state">아직 발행한 에세이가 없습니다.</p>
      ) : (
        <ul className="essay-list">
          {essays.map((essay) => (
            <li key={essay.slug}>
              <Link to={ROUTES.essayDetail(essay.slug)} className="essay-card">
                {essay.readingTime ? (
                  <span className="eyebrow">{essay.readingTime}</span>
                ) : null}
                <h2>{essay.title}</h2>
                <p>{essay.summary}</p>
                <span className="see-detail">
                  읽기 <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EssaysPage;
