import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, GitBranch, Mail } from 'lucide-react';

import { siteData, getAllCases, getAllEssays, getAllNotes } from '../lib/content';
import { ROUTES } from '../lib/routes';
import { WORK_PATHS, selectWorkCases, workPathUrl } from '../lib/work-paths';

function HomePage() {
  const records = selectWorkCases(getAllCases());
  const featuredCases = (siteData.featuredCaseSlugs || []).map((slug) => records.find((entry) => entry.slug === slug)).filter(Boolean);
  const essays = (siteData.featuredEssaySlugs || []).map((slug) => getAllEssays().find((entry) => entry.slug === slug)).filter(Boolean);
  const notes = (siteData.featuredNoteSlugs || []).map((slug) => getAllNotes().find((entry) => entry.slug === slug)).filter(Boolean);

  return (
    <div className="work-home">
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Frontend · 판단과 구현의 기록</p>
          <h1>{siteData.name}</h1>
          <p className="role">{siteData.role}</p>
          <p>만 5년 6개월 · 6년차 <small>(2026.09 기준)</small></p>
          <p className="headline">{siteData.headline}</p>
          <p className="summary">{siteData.summary}</p>
          <div className="hero-actions" aria-label="읽기 시작">
            <Link className="button button-primary" to={ROUTES.cases}>업무 과정 살펴보기 <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link className="button button-secondary" to={ROUTES.essayDetail('why-not-traditional-resume')}>이 기록 읽는 법 <Compass size={18} aria-hidden="true" /></Link>
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

      <section className="paths-section" id="paths">
        <div className="section-header">
          <p className="eyebrow">Reading paths</p>
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
          <p className="eyebrow">Selected work</p>
          <h2>선택을 구체적으로 설명하는 일</h2>
          <p>문제, 본인의 판단, 동료와의 조율, 구현과 확인 범위를 함께 읽습니다.</p>
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
          <p className="eyebrow">Connected ideas</p>
          <h2>다른 선택이 한 사람 안에 있는 이유</h2>
          <p>상반돼 보이는 선택은 당시의 제약과 함께 읽습니다. 개인의 경험과 일반적인 설계 메모도 구분합니다.</p>
        </div>
        <ul className="case-preview-grid">
          {essays.map((essay) => <li key={essay.slug}><Link to={ROUTES.essayDetail(essay.slug)} className="case-preview-card"><h3>{essay.title}</h3><p>{essay.summary}</p></Link></li>)}
        </ul>
        <Link to={ROUTES.essays} className="see-all-link">생각을 연결한 글 <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <p className="eyebrow">Working notes</p>
          <h2>다음 판단에 다시 쓰는 메모</h2>
          <p>완료 조건, 외부 의존성, AI 검토와 운영 부담에 관한 기존 글을 다듬어 연결했습니다.</p>
        </div>
        <ul className="note-preview-grid">
          {notes.map((note) => <li key={note.slug}><Link to={ROUTES.noteDetail(note.slug)} className="note-preview-card"><span className="status-pill">설계 메모</span><h3>{note.title}</h3><p>{note.summary}</p></Link></li>)}
        </ul>
        <div className="library-links">
          <Link to={ROUTES.notes} className="see-all-link">메모 모두 보기 <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <Link to={ROUTES.logs} className="see-all-link">시간순 작업 로그 <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <Link to={workPathUrl('previous')} className="see-all-link">개인 프로젝트와 탐구 <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
