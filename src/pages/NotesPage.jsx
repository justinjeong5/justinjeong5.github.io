import { Link } from 'react-router-dom';

import { getAllNotes } from '../lib/content';
import { ROUTES } from '../lib/routes';
import { visibleEntries } from '../lib/work-paths';

const growthIcon = {
  Seedling: '🌱',
  Budding: '🌿',
  Evergreen: '🌳',
};

const growthLabel = {
  Seedling: '새싹',
  Budding: '자라는 중',
  Evergreen: '상록수',
};

function NotesPage() {
  const notes = visibleEntries(getAllNotes());

  const grouped = notes.reduce((acc, note) => {
    const key = note.growth || 'Seedling';
    if (!acc[key]) acc[key] = [];
    acc[key].push(note);
    return acc;
  }, {});

  const order = ['Evergreen', 'Budding', 'Seedling'];

  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">Archive</p>
        <h1>짧은 기록 아카이브</h1>
        <p>
          예전에 남긴 설계 메모를 보관한 곳입니다. 최근의 문제 해결 과정은 경험 기록에서 읽을 수 있습니다.
        </p>
        <Link className="see-all-link" to={ROUTES.cases}>최근 개발 경험 읽기</Link>
      </header>

      {notes.length === 0 ? (
        <p className="empty-state">아직 심은 노트가 없습니다. 첫 새싹을 곧 심을 거예요.</p>
      ) : (
        order
          .filter((stage) => grouped[stage])
          .map((stage) => (
            <section key={stage} className="note-stage">
              <h2 className="note-stage-title">
                <span aria-hidden="true">{growthIcon[stage]}</span>
                <span>{growthLabel[stage]}</span>
                <span className="note-stage-count">{grouped[stage].length}</span>
              </h2>
              <ul className="note-grid">
                {grouped[stage].map((note) => (
                  <li key={note.slug}>
                    <Link to={ROUTES.noteDetail(note.slug)} className="note-card">
                      <h3>{note.title}</h3>
                      <p>{note.summary}</p>
                      {note.topics && note.topics.length > 0 ? (
                        <ul className="topic-list" aria-label="topics">
                          {note.topics.map((topic) => (
                            <li key={topic}>#{topic}</li>
                          ))}
                        </ul>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))
      )}
    </div>
  );
}

export default NotesPage;
