import {
  ArrowUpRight,
  BookOpenText,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  GitBranch,
  Mail,
  MapPin,
  MessageCircle,
  NotebookPen,
  PenLine,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

import {
  builderLogs,
  caseStudies,
  evidenceSystem,
  heroProof,
  operatingPrinciples,
  profile,
  qualityRubric,
  visitorPaths,
  writingIdeas,
} from '../content/siteContent';

const iconMap = {
  'Hiring manager': Users,
  Teammate: MessageCircle,
  'Future me': NotebookPen,
};

function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-header section-header-${align}`}>
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
          <a href="#paths">Paths</a>
          <a href="#cases">Cases</a>
          <a href="#logs">Logs</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Proof-of-work personal site</p>
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

        <aside className="profile-panel" aria-label="프로필 요약">
          <img src={profile.avatar} alt="정경하 GitHub 프로필" />
          <div className="profile-panel-body">
            <span className="location">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </span>
            <h2>요즘 집중하는 것</h2>
            <ul>
              {profile.currentFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="첫 화면 증거 요약">
        {heroProof.map((item) => (
          <article key={item.label}>
            <p>{item.label}</p>
            <strong>{item.value}</strong>
            <span>{item.detail}</span>
          </article>
        ))}
      </section>

      <section className="paths-section" id="paths">
        <SectionHeader
          eyebrow="Visitor paths"
          title="방문자가 가진 질문에서 출발합니다"
          description="좋은 개인 사이트는 섹션을 많이 늘리는 것보다, 들어온 사람이 자기 목적에 맞는 증거를 빨리 찾게 해줍니다."
        />
        <div className="path-grid">
          {visitorPaths.map((path) => {
            const Icon = iconMap[path.audience] || Compass;

            return (
              <a className="path-card" href={path.anchor} key={path.audience}>
                <div className="path-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <p>{path.audience}</p>
                <h3>{path.question}</h3>
                <span>{path.answer}</span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="evidence-section" id="operating-system">
        <div>
          <SectionHeader
            eyebrow="Evidence system"
            title="사례는 이 네 칸을 채울 때 강해집니다"
            description="실제 업무 사례가 아직 비공개이거나 정리 전이어도, 어떤 근거를 모아야 하는지 페이지 자체가 알려주도록 설계했습니다."
          />
          <div className="evidence-grid">
            {evidenceSystem.map((item) => (
              <article className="evidence-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.prompt}</p>
                <small>{item.artifact}</small>
              </article>
            ))}
          </div>
        </div>
        <aside className="principles-panel">
          <div className="panel-heading">
            <ShieldCheck size={24} aria-hidden="true" />
            <h3>Operating principles</h3>
          </div>
          <div className="principle-list">
            {operatingPrinciples.map((principle) => (
              <article key={principle.title}>
                <CheckCircle2 size={18} aria-hidden="true" />
                <div>
                  <h4>{principle.title}</h4>
                  <p>{principle.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="case-section" id="cases">
        <SectionHeader
          eyebrow="Selected cases"
          title="프로젝트 목록이 아니라 판단의 기록"
          description="각 케이스는 아직 플레이스홀더가 섞여 있어도 문제, 역할, 결정, 증거, 다음 보강 포인트를 갖습니다."
        />
        <div className="case-stack">
          {caseStudies.map((study, index) => (
            <article className="case-card" key={study.title}>
              <div className="case-index">0{index + 1}</div>
              <div className="case-content">
                <div className="case-topline">
                  <span>{study.status}</span>
                  <BriefcaseBusiness size={20} aria-hidden="true" />
                </div>
                <h3>{study.title}</h3>
                <p className="case-summary">{study.oneLine}</p>
                <dl className="case-meta">
                  <div>
                    <dt>Role</dt>
                    <dd>{study.role}</dd>
                  </div>
                  <div>
                    <dt>Timeframe</dt>
                    <dd>{study.timeframe}</dd>
                  </div>
                </dl>
                <div className="case-narrative">
                  <section>
                    <h4>문제</h4>
                    <p>{study.problem}</p>
                  </section>
                  <section>
                    <h4>핵심 결정</h4>
                    <ul>
                      {study.decisions.map((decision) => (
                        <li key={decision}>{decision}</li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h4>남은 증거</h4>
                    <ul>
                      {study.evidence.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>
                <div className="impact-box">
                  <Target size={20} aria-hidden="true" />
                  <div>
                    <strong>Impact</strong>
                    <p>{study.impact}</p>
                    <small>{study.nextProof}</small>
                  </div>
                </div>
                <div className="case-links">
                  {study.links.length > 0 ? (
                    study.links.map((link) => (
                      <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    ))
                  ) : (
                    <span className="empty-link">공개 링크 준비 중</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="logs-section" id="logs">
        <SectionHeader
          eyebrow="Builder log"
          title="작은 업무 장면도 다음 기회가 되게 쌓습니다"
          description="큰 프로젝트만 올리는 포트폴리오는 금방 멈춥니다. 대신 공개 가능한 작은 판단과 개선을 계속 기록하는 구조로 둡니다."
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
                  <small>{log.proof}</small>
                </div>
              </article>
            ))}
          </div>
          <aside className="writing-panel">
            <div className="panel-heading">
              <PenLine size={24} aria-hidden="true" />
              <h3>Writing queue</h3>
            </div>
            {writingIdeas.map((idea) => (
              <article key={idea.title}>
                <span>{idea.type}</span>
                <h4>{idea.title}</h4>
                <small>{idea.status}</small>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="quality-section">
        <SectionHeader
          eyebrow="Quality loop"
          title="좋아 보이는지보다, 통과 조건을 만족하는지 봅니다"
          description="이번 리빌드는 감으로 끝내지 않고 아래 체크리스트를 기준으로 빌드, 보안, 모바일 검증까지 통과시키는 것을 목표로 합니다."
          align="center"
        />
        <div className="quality-grid">
          {qualityRubric.map((item) => (
            <div className="quality-item" key={item}>
              <ClipboardCheck size={20} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>좋은 문제와 명확한 결과를 좋아합니다.</h2>
          <p>
            이 사이트의 빈칸은 앞으로 실제 업무 사례로 채워갈 자리입니다. 공개 가능한 맥락이
            생길 때마다 문제, 결정, 증거, 결과를 남기겠습니다.
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
        <span>
          <Sparkles size={16} aria-hidden="true" />
          {profile.name}
        </span>
        <span>
          <BookOpenText size={16} aria-hidden="true" />
          Cases, logs, and proof of work
        </span>
        <span>
          <CalendarClock size={16} aria-hidden="true" />
          Updated 2026
        </span>
      </footer>
    </main>
  );
}

export default LandingPage;
