import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Compass,
  GitBranch,
  Mail,
  MapPin,
  MessageCircle,
  NotebookPen,
  Sprout,
  Users,
} from 'lucide-react';

import {
  siteData,
  getAllCases,
  getAllNotes,
  getAllLogs,
} from '../lib/content';
import { ROUTES } from '../lib/routes';

const audienceIcon = {
  'Hiring manager': Users,
  Teammate: MessageCircle,
  'Future me': NotebookPen,
};

const growthIcon = {
  Seedling: '🌱',
  Budding: '🌿',
  Evergreen: '🌳',
};

function HomePage() {
  const allCases = getAllCases();
  const liveCases = allCases.filter((c) => c.status === 'Live');
  const featuredCases = liveCases.length > 0 ? liveCases.slice(0, 3) : allCases.slice(0, 3);
  const recentNotes = getAllNotes().slice(0, 5);
  const recentLogs = getAllLogs().slice(0, 3);

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Proof-of-work personal site</p>
          <h1>{siteData.name}</h1>
          <p className="role">{siteData.role}</p>
          <p className="headline">{siteData.headline}</p>
          <p className="summary">{siteData.summary}</p>
          <div className="hero-actions" aria-label="주요 링크">
            <a className="button button-primary" href={`mailto:${siteData.email}`}>
              <Mail size={18} aria-hidden="true" />
              연락하기
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href={siteData.github} target="_blank" rel="noreferrer">
              <GitBranch size={18} aria-hidden="true" />
              GitHub
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="profile-panel" aria-label="프로필 요약">
          <img src={siteData.avatar} alt={`${siteData.name} GitHub 프로필`} />
          <div className="profile-panel-body">
            <span className="location">
              <MapPin size={16} aria-hidden="true" />
              {siteData.location}
            </span>
            <h2>요즘 집중하는 것</h2>
            <ul>
              {siteData.currentFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="hero-proof-section" aria-label="요약 증거">
        <div className="hero-proof-grid">
          {siteData.heroProof.map((item) => (
            <article key={item.label} className="hero-proof-card">
              <p className="eyebrow">{item.label}</p>
              <strong>{item.value}</strong>
              <span>{item.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="paths-section" id="paths">
        <div className="section-header">
          <p className="eyebrow">Visitor paths</p>
          <h2>방문자가 가진 질문에서 출발합니다</h2>
          <p>들어온 사람이 자기 목적에 맞는 증거를 빠르게 찾도록 입구를 셋으로 나눠둡니다.</p>
        </div>
        <div className="path-grid">
          {siteData.visitorPaths.map((path) => {
            const Icon = audienceIcon[path.audience] || Compass;
            return (
              <Link className="path-card" to={path.to} key={path.audience}>
                <div className="path-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <p>{path.audience}</p>
                <h3>{path.question}</h3>
                <span>{path.answer}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <p className="eyebrow">Selected cases</p>
          <h2>일하는 방식의 기록</h2>
          <p>문제 → 의사결정(버린 선택지) → 산출물 → 임팩트로 정리한 사례.</p>
        </div>
        <ul className="case-preview-grid">
          {featuredCases.map((study) => (
            <li key={study.slug}>
              <Link to={ROUTES.caseDetail(study.slug)} className="case-preview-card">
                <span className="status-pill">{study.status}</span>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <span className="meta">
                  {study.role} · {study.period}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={ROUTES.cases} className="see-all-link">
          모든 케이스 보기 <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </section>

      <section className="featured-section featured-section-alt">
        <div className="section-header">
          <p className="eyebrow">Digital garden</p>
          <h2>자라고 있는 노트</h2>
          <p>완성된 글이 아니라 토픽별로 자라는 노트들입니다. 🌱 → 🌿 → 🌳.</p>
        </div>
        <ul className="note-preview-grid">
          {recentNotes.map((note) => (
            <li key={note.slug}>
              <Link to={ROUTES.noteDetail(note.slug)} className="note-preview-card">
                <span className="growth-badge" title={note.growth} aria-label={note.growth}>
                  {growthIcon[note.growth] || '🌱'}
                </span>
                <h3>{note.title}</h3>
                <p>{note.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={ROUTES.notes} className="see-all-link">
          모든 노트 보기 <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <p className="eyebrow">Builder log</p>
          <h2>오늘 만든 것, 막힌 것, 다음 시도</h2>
          <p>큰 프로젝트만 올리는 포트폴리오는 금방 멈춥니다. 작은 판단·개선을 시간순으로 쌓습니다.</p>
        </div>
        <ul className="log-preview-list">
          {recentLogs.map((log) => (
            <li key={log.slug} className="log-preview-item">
              <header>
                <span className="log-date">{log.date}</span>
                <span className={`log-type log-type-${(log.type || 'building').toLowerCase()}`}>
                  <Sprout size={14} aria-hidden="true" />
                  {log.type}
                </span>
              </header>
              <h3>{log.title}</h3>
              <p>{log.summary}</p>
            </li>
          ))}
        </ul>
        <Link to={ROUTES.logs} className="see-all-link">
          모든 로그 보기 <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}

export default HomePage;
