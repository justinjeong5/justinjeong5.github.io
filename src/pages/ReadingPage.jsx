import { readingData } from '../lib/content';

function ReadingPage() {
  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">Reading</p>
        <h1>읽은 책 · Antilibrary</h1>
        <p>다 읽은 책뿐 아니라 읽고 싶지만 아직 못 읽은 책(Antilibrary)도 함께 둡니다.</p>
      </header>

      <section className="reading-block">
        <h2>최근에 읽은 것</h2>
        <ul className="reading-list">
          {readingData.read.map((book) => (
            <li key={book.title}>
              <h3>{book.title}</h3>
              <p className="reading-author">{book.author}</p>
              {book.note ? <p className="reading-note">{book.note}</p> : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="reading-block">
        <h2>Antilibrary — 아직 안 읽은 책</h2>
        <ul className="reading-list">
          {readingData.antilibrary.map((book) => (
            <li key={book.title}>
              <h3>{book.title}</h3>
              <p className="reading-author">{book.author}</p>
              {book.reason ? <p className="reading-note">{book.reason}</p> : null}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ReadingPage;
