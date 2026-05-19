import { usesData } from '../lib/content';

function UsesPage() {
  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">/uses</p>
        <h1>지금 쓰는 도구</h1>
        <p>{usesData.intro}</p>
      </header>

      {usesData.categories.map((category) => (
        <section key={category.name} className="uses-category">
          <h2>{category.name}</h2>
          <ul className="uses-list">
            {category.items.map((item) => (
              <li key={item.name} className="uses-item">
                <div className="uses-name">
                  <strong>{item.name}</strong>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      ↗
                    </a>
                  ) : null}
                </div>
                {item.why ? <p>{item.why}</p> : null}
                {item.since ? <small>since {item.since}</small> : null}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default UsesPage;
