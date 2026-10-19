import { nowData } from '../lib/content';

function NowPage() {
  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">/now</p>
        <h1>{nowData.month}에 남긴 기록</h1>
        <p>당시에 적어 둔 내용입니다. 지금 하고 있는 일을 보여주는 페이지는 아닙니다.</p>
      </header>

      <section className="now-block">
        <h2>당시 집중하던 것</h2>
        <ul>
          {nowData.focusing.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {nowData.stopped && nowData.stopped.length > 0 ? (
        <section className="now-block">
          <h2>당시 줄이려던 것</h2>
          <ul>
            {nowData.stopped.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {nowData.reading && nowData.reading.length > 0 ? (
        <section className="now-block">
          <h2>당시 읽던 것</h2>
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
