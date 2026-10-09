import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, GitBranch, Mail } from 'lucide-react';

import { siteData, getAllCases, getAllEssays } from '../lib/content';
import { ROUTES } from '../lib/routes';
import { WORK_PATHS, selectWorkCases, workPathUrl } from '../lib/work-paths';
import { compareContextDates } from '../lib/article-dates.js';
import ReadingStart from '../components/ui/ReadingStart';

function HomePage() {
  const records = selectWorkCases(getAllCases());
  const featuredCases = (siteData.featuredCaseSlugs || []).map((slug) => records.find((entry) => entry.slug === slug)).filter(Boolean).sort(compareContextDates);
  const essays = (siteData.featuredEssaySlugs || []).map((slug) => getAllEssays().find((entry) => entry.slug === slug)).filter(Boolean).sort(compareContextDates);

  return (
    <div className="work-home">
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Frontend · 판단과 구현의 기록</p>
          <h1>{siteData.name}</h1>
          <p className="role">{siteData.role} · 6년차</p>
          <p className="headline">{siteData.headline}</p>
          <p className="summary">{siteData.summary}</p>
          <div className="hero-actions" aria-label="읽기 시작">
            <Link className="button button-primary" to={ROUTES.caseDetail('playhub-product-architecture')}>제품을 만든 과정 읽기 <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link className="button button-secondary" to={ROUTES.cases}>모든 개발 경험 <Compass size={18} aria-hidden="true" /></Link>
          </div>
        </div>
        <aside className="profile-panel work-profile" aria-label="관심과 연락처">
          <img src={siteData.avatar} alt={siteData.name + ' GitHub 프로필'} />
          <h2>연결해 보는 세 가지 면</h2>
          <ul>{siteData.currentFocus.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="profile-links">
            <a href={siteData.github} target="_blank" rel="noreferrer"><GitBranch size={16} aria-hidden="true" /> GitHub</a>
            <a href={'mailto:' + siteData.email}><Mail size={16} aria-hidden="true" /> 연락하기</a>
          </div>
        </aside>
      </section>

      <ReadingStart />

      <section className="paths-section" id="paths">
        <div className="section-header">
          <p className="eyebrow">관심 있는 주제로</p>
          <h2>궁금한 질문에서 시작하세요</h2>
          <p>한 가지 면만 고르지 않았습니다. 같은 경험을 제품의 행동, 시스템의 계약, 기술 변경의 비용에서 다르게 읽을 수 있습니다.</p>
        </div>
        <div className="path-grid">
          {WORK_PATHS.map((path) => (
            <Link className="path-card" to={workPathUrl(path.id)} key={path.id}>
              <p>{path.label}</p>
              <h3>{path.question}</h3>
              <span>{path.description}</span>
              <strong className="path-count">{selectWorkCases(records, path.id).length}개의 기록 <ArrowUpRight size={14} aria-hidden="true" /></strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <p className="eyebrow">최근 다룬 문제</p>
          <h2>참여 흐름의 작은 차이를 파고들기</h2>
          <p>기사 한 장을 눌렀을 때, 광고를 기다릴 때, 복권을 긁을 때. 실제 제품에서 만난 기술적인 질문들입니다.</p>
        </div>
        <ul className="case-preview-grid">
          {featuredCases.map((study) => (
            <li key={study.slug}>
              <Link to={ROUTES.caseDetail(study.slug)} className="case-preview-card">
                <span className="status-pill">{study.statusLabel || study.status}</span>
                <h3>{study.title}</h3><p>{study.summary}</p>
                <span className="meta">{study.role} · {study.period}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={ROUTES.cases} className="see-all-link">업무 기록 모두 읽기 <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="featured-section featured-section-alt">
        <div className="section-header">
          <p className="eyebrow">여러 경험에서 얻은 생각</p>
          <h2>함께 일하는 방식</h2>
          <p>AI에 맡길 일, 직접 검증할 일, 동료와 합의할 일을 실제 개발 경험에서 연결해 봅니다.</p>
        </div>
        <ul className="case-preview-grid">
          {essays.map((essay) => <li key={essay.slug}><Link to={ROUTES.essayDetail(essay.slug)} className="case-preview-card"><h3>{essay.title}</h3><p>{essay.summary}</p></Link></li>)}
        </ul>
        <Link to={ROUTES.essays} className="see-all-link">생각을 연결한 글 <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </section>

    </div>
  );
}

export default HomePage;
