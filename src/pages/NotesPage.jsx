import { Link } from 'react-router-dom';

import { getAllNotes } from '../lib/content';
import { ROUTES } from '../lib/routes';

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
  const notes = getAllNotes();

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
        <p className="eyebrow">Notes</p>
        <h1>디지털 가든</h1>
        <p>
          완성된 글이 아니라 자라고 있는 노트들입니다. 🌱 새싹은 초기 아이디어, 🌿 자라는 중은
          발전 중, 🌳 상록수는 여러 번 다듬어 정착한 노트입니다.
        </p>
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
