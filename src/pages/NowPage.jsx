import { nowData } from '../lib/content';

function NowPage() {
  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">/now</p>
        <h1>지금 무엇에 집중하고 있는지</h1>
        <p>
          이 페이지는 <strong>{nowData.month}</strong> 기준입니다. 보통 한 달에 한 번 다듬습니다.
        </p>
      </header>

      <section className="now-block">
        <h2>지금 집중하는 것</h2>
        <ul>
          {nowData.focusing.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {nowData.stopped && nowData.stopped.length > 0 ? (
        <section className="now-block">
          <h2>최근에 그만둔 것</h2>
          <ul>
            {nowData.stopped.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {nowData.reading && nowData.reading.length > 0 ? (
        <section className="now-block">
          <h2>읽는 중</h2>
          <ul>
            {nowData.reading.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

export default NowPage;
