import { Link } from 'react-router-dom';
import { siteData, getAllCases, getAllEssays } from '../lib/content';
import { ROUTES } from '../lib/routes';
import { selectEditorialArticles } from '../lib/editorial';
import CompactArticleList from '../components/ui/CompactArticleList';

function HomePage() {
  const articles = selectEditorialArticles(getAllCases(), getAllEssays());
  const featured = articles.find((entry) => entry.slug === 'playhub-product-architecture');
  const rest = articles.filter((entry) => entry !== featured);
  return (
    <div className="story-home">
      <header className="story-intro">
        <p className="eyebrow">{siteData.role} · 6년차</p>
        <h1>{siteData.name}</h1>
        <p>리워드 제품과 운영 도구를 개발하며 만난 문제를 기록합니다. 어떤 선택을 했고, 실제 사용과 동료의 반론이 그 판단을 어떻게 바꿨는지 이야기합니다.</p>
        <Link to={ROUTES.about}>경력과 함께 일하는 방식 →</Link>
      </header>
      {featured ? (
        <section className="featured-story" aria-labelledby="featured-story-title">
          <p className="eyebrow">대표 글</p>
          <h2 id="featured-story-title"><Link to={ROUTES.caseDetail(featured.slug)}>{featured.title}</Link></h2>
          <p>{featured.summary}</p>
          <Link to={ROUTES.caseDetail(featured.slug)}>글 읽기 →</Link>
        </section>
      ) : null}
      <section aria-labelledby="stories-title">
        <h2 id="stories-title" className="article-index-title">개발하며 바뀐 판단들</h2>
        <CompactArticleList entries={rest} view="all" />
      </section>
      <nav className="story-footer-links" aria-label="더 읽기">
        <Link to={ROUTES.cases}>대표 글 모두 보기</Link>
        <Link to={ROUTES.cases + '?view=support'}>짧은 기술 기록</Link>
      </nav>
    </div>
  );
}

export default HomePage;
