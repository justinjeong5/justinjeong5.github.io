import { cvData } from '../lib/content';

function CvPage() {
  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">CV</p>
        <h1>시간순 이력</h1>
        <p>케이스 스터디가 일하는 방식을 보여준다면, 이 페이지는 시간 순서로 정리한 빠른 요약입니다.</p>
      </header>

      <section className="cv-block">
        <h2>Experience</h2>
        <ol className="cv-timeline">
          {cvData.experience.map((item) => (
            <li key={`${item.org}-${item.role}-${item.from}`}>
              <header>
                <strong>{item.role}</strong>
                <span>{item.org}</span>
                <span className="cv-period">
                  {item.from} – {item.to || 'Present'}
                </span>
              </header>
              {item.summary ? <p>{item.summary}</p> : null}
              {item.highlights && item.highlights.length > 0 ? (
                <ul>
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      {cvData.education && cvData.education.length > 0 ? (
        <section className="cv-block">
          <h2>Education</h2>
          <ul className="cv-list">
            {cvData.education.map((item) => (
              <li key={`${item.org}-${item.degree}`}>
                <strong>{item.degree}</strong> · {item.org} · {item.from} – {item.to}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {cvData.talks && cvData.talks.length > 0 ? (
        <section className="cv-block">
          <h2>Talks & Writing</h2>
          <ul className="cv-list">
            {cvData.talks.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                {item.venue ? ` · ${item.venue}` : null}
                {item.date ? ` · ${item.date}` : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

export default CvPage;
