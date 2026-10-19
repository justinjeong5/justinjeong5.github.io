import { readingData } from '../lib/content';

function ReadingPage() {
  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">Reading</p>
        <h1>2026년 5월의 독서 메모</h1>
        <p>당시에 읽었거나 읽고 싶다고 적어 둔 책입니다. 지금의 독서 목록은 아닙니다.</p>
      </header>

      <section className="reading-block">
        <h2>당시 읽은 책</h2>
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
        <h2>당시 읽고 싶었던 책</h2>
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
