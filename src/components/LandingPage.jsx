import {
  ArrowUpRight,
  BookOpenText,
  BriefcaseBusiness,
  CheckCircle2,
  GitBranch,
  Mail,
  MapPin,
  NotebookPen,
  Sparkles,
} from 'lucide-react';

import {
  builderLogs,
  caseStudies,
  caseStudyTemplate,
  focusAreas,
  profile,
  trustSignals,
} from '../content/siteContent';

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function ExternalLink({ href, children, variant = 'secondary' }) {
  return (
    <a className={`button button-${variant}`} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

function LandingPage() {
  return (
    <main>
      <header className="site-nav" aria-label="Primary">
        <a className="brand" href="#top" aria-label="정경하 홈">
          JKH
        </a>
        <nav>
          <a href="#work">Cases</a>
          <a href="#logs">Logs</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Seoul based developer</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="headline">{profile.headline}</p>
          <p className="summary">{profile.summary}</p>
          <div className="hero-actions" aria-label="주요 링크">
            <ExternalLink href={`mailto:${profile.email}`} variant="primary">
              <Mail size={18} aria-hidden="true" />
              연락하기
            </ExternalLink>
            <ExternalLink href={profile.github}>
              <GitBranch size={18} aria-hidden="true" />
              GitHub
            </ExternalLink>
          </div>
        </div>

        <div className="hero-visual" aria-label="정경하 프로필 이미지와 핵심 정보">
          <img
            src={profile.avatar}
            alt="정경하 프로필"
          />
          <div className="hero-meta">
            <span>
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </span>
            <span>Open to thoughtful product work</span>
          </div>
        </div>
      </section>

      <section className="trust-band" aria-label="신뢰 신호">
        {trustSignals.map((signal) => (
          <article className="signal-card" key={signal.label}>
            <span>{signal.label}</span>
            <strong>{signal.value}</strong>
            <p>{signal.detail}</p>
          </article>
        ))}
      </section>

      <section className="focus-section">
        <SectionHeader
          eyebrow="Working style"
          title="스택보다 먼저 보는 것"
          description="사이트를 방문한 사람이 기술 이름을 해석하지 않아도, 어떤 방식으로 일하는지 바로 읽히게 구성했습니다."
        />
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <div className="focus-item" key={area}>
              <CheckCircle2 size={20} aria-hidden="true" />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="case-section" id="work">
        <SectionHeader
          eyebrow="Selected cases"
          title="대표 작업은 케이스 스터디로"
          description="앞으로 실제 업무 사례를 채우기 쉽도록 문제, 접근, 결과가 분리된 카드 구조로 만들었습니다."
        />
        <div className="case-grid">
          {caseStudies.map((study) => (
            <article className="case-card" key={study.title}>
              <div className="case-topline">
                <span>{study.tag}</span>
                <BriefcaseBusiness size={20} aria-hidden="true" />
              </div>
              <h3>{study.title}</h3>
              <p className="case-summary">{study.summary}</p>
              <dl>
                <div>
                  <dt>문제</dt>
                  <dd>{study.problem}</dd>
                </div>
                <div>
                  <dt>접근</dt>
                  <dd>{study.approach}</dd>
                </div>
                <div>
                  <dt>결과</dt>
                  <dd>{study.outcome}</dd>
                </div>
              </dl>
              <div className="case-links">
                {study.links.map((link) => (
                  <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="logs-section" id="logs">
        <SectionHeader
          eyebrow="Builder log"
          title="업무 중 업로드할 만한 장면을 쌓는 곳"
          description="큰 프로젝트가 아니어도 반복을 줄였거나 판단을 바꿨거나 운영을 개선했다면 기록할 가치가 있습니다."
        />
        <div className="logs-layout">
          <div className="log-list">
            {builderLogs.map((log) => (
              <article className="log-item" key={`${log.date}-${log.title}`}>
                <div className="log-date">
                  <span>{log.date}</span>
                  <strong>{log.status}</strong>
                </div>
                <div>
                  <h3>{log.title}</h3>
                  <p>{log.summary}</p>
                </div>
              </article>
            ))}
          </div>
          <aside className="template-panel" aria-label="케이스 스터디 작성 기준">
            <NotebookPen size={24} aria-hidden="true" />
            <h3>기록할 때 남길 다섯 가지</h3>
            <ul>
              {caseStudyTemplate.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>좋은 문제와 명확한 결과를 좋아합니다.</h2>
          <p>
            공개 가능한 사례는 이곳에 쌓고, 더 자세한 맥락은 대화에서 이어가겠습니다.
          </p>
        </div>
        <div className="contact-actions">
          <ExternalLink href={`mailto:${profile.email}`} variant="primary">
            <Mail size={18} aria-hidden="true" />
            Email
          </ExternalLink>
          <ExternalLink href={profile.github}>
            <GitBranch size={18} aria-hidden="true" />
            GitHub
          </ExternalLink>
        </div>
      </section>

      <footer className="site-footer">
        <span>{profile.name}</span>
        <span>
          <BookOpenText size={16} aria-hidden="true" />
          Cases, logs, and proof of work
        </span>
        <span>
          <Sparkles size={16} aria-hidden="true" />
          Updated 2026
        </span>
      </footer>
    </main>
  );
}

export default LandingPage;
