import { Link } from 'react-router-dom';
import { ArrowUpRight, GitBranch } from 'lucide-react';
import { siteData, getAllCases, getAllEssays } from '../lib/content';
import { ROUTES } from '../lib/routes';
import ExperienceMap from '../components/ui/ExperienceMap';
import ReadingStart from '../components/ui/ReadingStart';

function HomePage() {
  return (
    <div className="scan-home">
      <header className="scan-intro">
        <p className="eyebrow">{siteData.role} · 6년차</p>
        <h1>{siteData.name}</h1>
        <p className="scan-headline">{siteData.headline}</p>
        <p>{siteData.summary}</p>
        <div className="scan-links">
          <Link to={ROUTES.about}>경력과 함께 일하는 방식 <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <a href={siteData.github} target="_blank" rel="noreferrer"><GitBranch size={16} aria-hidden="true" /> GitHub</a>
          <Link to={ROUTES.cases}>전체 글 최신순으로 보기</Link>
        </div>
      </header>
      <ExperienceMap cases={getAllCases()} essays={getAllEssays()} />
      <ReadingStart />
    </div>
  );
}

export default HomePage;
