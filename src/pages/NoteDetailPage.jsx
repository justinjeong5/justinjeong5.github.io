import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { getNote, getAllNotes } from '../lib/content';
import { ROUTES } from '../lib/routes';

const growthIcon = {
  Seedling: '🌱',
  Budding: '🌿',
  Evergreen: '🌳',
};

function findRelated(note) {
  if (!note || !note.topics || note.topics.length === 0) return [];
  const topicSet = new Set(note.topics);
  return getAllNotes()
    .filter((other) => other.slug !== note.slug)
    .filter((other) => (other.topics || []).some((t) => topicSet.has(t)))
    .slice(0, 5);
}

function NoteDetailPage() {
  const { slug } = useParams();
  const note = getNote(slug);

  if (!note) {
    return (
      <div className="page page-empty">
        <p className="eyebrow">404</p>
        <h1>찾을 수 없는 노트</h1>
        <Link to={ROUTES.notes} className="see-all-link">
          <ArrowLeft size={16} aria-hidden="true" /> 노트 목록
        </Link>
      </div>
    );
  }

  const { Component } = note;
  const related = findRelated(note);

  return (
    <article className="page note-detail">
      <header className="page-header note-detail-header">
        <p className="eyebrow growth-eyebrow">
          <span aria-hidden="true">{growthIcon[note.growth] || '🌱'}</span>
          {note.growth || 'Seedling'}
        </p>
        <h1>{note.title}</h1>
        {note.summary ? <p className="page-lead">{note.summary}</p> : null}
        {note.topics && note.topics.length > 0 ? (
          <ul className="topic-list" aria-label="topics">
            {note.topics.map((topic) => (
              <li key={topic}>#{topic}</li>
            ))}
          </ul>
        ) : null}
      </header>

      <div className="prose">
        <Component />
      </div>

      {related.length > 0 ? (
        <section className="related-block">
          <h2>관련 노트</h2>
          <ul className="note-grid">
            {related.map((other) => (
              <li key={other.slug}>
                <Link to={ROUTES.noteDetail(other.slug)} className="note-card">
                  <h3>
                    <span aria-hidden="true">{growthIcon[other.growth] || '🌱'}</span> {other.title}
                  </h3>
                  <p>{other.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <footer className="page-footer">
        <Link to={ROUTES.notes} className="see-all-link">
          <ArrowLeft size={16} aria-hidden="true" /> 노트 목록
        </Link>
      </footer>
    </article>
  );
}

export default NoteDetailPage;
