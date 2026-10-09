import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout } from 'lucide-react';

import { getAllLogs } from '../lib/content';
import { ROUTES } from '../lib/routes';

const SCROLL_MARGIN_TOP = '88px';

function LogsPage() {
  const logs = getAllLogs();
  const { hash } = useLocation();
  const detailsRefs = useRef(new Map());

  useEffect(() => {
    const raw = hash ? hash.replace(/^#/, '') : '';
    if (!raw) return undefined;

    let slug = '';
    try {
      slug = decodeURIComponent(raw);
    } catch {
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      const card = document.getElementById(slug);
      if (!card) return;
      const details = detailsRefs.current.get(slug);
      if (details) details.open = true;
      card.scrollIntoView({ block: 'start' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">Archive</p>
        <h1>지난 작업 기록</h1>
        <p>시간순으로 남긴 짧은 기록을 보관합니다. 지금은 문제와 설계 판단을 묶은 경험 기록을 중심으로 글을 씁니다.</p>
        <Link className="see-all-link" to={ROUTES.cases}>최근 개발 경험 읽기</Link>
      </header>

      {logs.length === 0 ? (
        <p className="empty-state">아직 기록한 로그가 없습니다.</p>
      ) : (
        <ol className="log-list">
          {logs.map((log) => {
            const { Component } = log;
            return (
              <li
                key={log.slug}
                id={log.slug}
                className="log-item-card"
                style={{ scrollMarginTop: SCROLL_MARGIN_TOP }}
              >
                <header className="log-item-header">
                  <span className="log-date">{log.date}</span>
                  <span className={`log-type log-type-${(log.type || 'building').toLowerCase()}`}>
                    <Sprout size={14} aria-hidden="true" />
                    {log.type === 'Reviewed' ? '재정리' : log.type}
                  </span>
                </header>
                <h2>{log.title}</h2>
                <p>{log.summary}</p>
                {Component ? (
                  <details
                    className="log-body-toggle"
                    ref={(el) => {
                      if (el) detailsRefs.current.set(log.slug, el);
                      else detailsRefs.current.delete(log.slug);
                    }}
                  >
                    <summary aria-label={`${log.title} 자세히`}>자세히</summary>
                    <div className="prose log-body">
                      <Component />
                    </div>
                  </details>
                ) : null}
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}

export default LogsPage;
