import { Link } from 'react-router-dom';
import { WORK_TOPICS, selectTopicArticles, workPathUrl, caseStudyUrl, essayStudyUrl } from '../../lib/work-paths';

function ExperienceMap({ cases, essays }) {
  return (
    <section className="experience-map" aria-labelledby="experience-map-title">
      <header>
        <h2 id="experience-map-title">한눈에 보는 개발 경험</h2>
        <p>관심 있는 주제에서 골라 읽으세요. 구현 사례와 여러 경험을 비교한 글을 함께 모았습니다.</p>
      </header>
      <nav className="topic-jump" aria-label="경험 지도 주제">
        {WORK_TOPICS.map((topic) => <a key={topic.id} href={`#topic-${topic.id}`}>{topic.label}</a>)}
      </nav>
      <div className="experience-map-grid">
        {WORK_TOPICS.map((topic) => {
          const entries = selectTopicArticles(cases, essays, topic.id);
          const curated = [...topic.caseSlugs.map((slug) => entries.find((entry) => entry.kind === 'case' && entry.slug === slug)), ...topic.essaySlugs.map((slug) => entries.find((entry) => entry.kind === 'essay' && entry.slug === slug))].filter(Boolean).slice(0, 3);
          return (
            <section key={topic.id} id={`topic-${topic.id}`}>
              <h3><Link to={workPathUrl(topic.id)}>{topic.label}</Link><span>{entries.length}편</span></h3>
              <p>{topic.description}</p>
              <ul>{curated.map((entry) => <li key={entry.kind + entry.slug}><Link to={entry.kind === 'essay' ? essayStudyUrl(entry.slug, topic.id) : caseStudyUrl(entry.slug, topic.id)}><span>{entry.kind === 'essay' ? '비교·회고' : entry.scopeLabel || '구현 사례'}</span>{entry.title}</Link></li>)}</ul>
              <Link className="topic-more" to={workPathUrl(topic.id)}>이 주제 모두 보기 →</Link>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default ExperienceMap;
