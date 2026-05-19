import { Sprout } from 'lucide-react';

import { getAllLogs } from '../lib/content';

function LogsPage() {
  const logs = getAllLogs();

  return (
    <div className="page page-list">
      <header className="page-header">
        <p className="eyebrow">Builder log</p>
        <h1>오늘 만든 것, 막힌 것, 다음 시도</h1>
        <p>큰 프로젝트가 아니어도 작은 판단·개선이 다음 기회의 입력이 되도록 시간순으로 쌓습니다.</p>
      </header>

      {logs.length === 0 ? (
        <p className="empty-state">아직 기록한 로그가 없습니다.</p>
      ) : (
        <ol className="log-list">
          {logs.map((log) => {
            const { Component } = log;
            return (
              <li key={log.slug} className="log-item-card">
                <header className="log-item-header">
                  <span className="log-date">{log.date}</span>
                  <span className={`log-type log-type-${(log.type || 'building').toLowerCase()}`}>
                    <Sprout size={14} aria-hidden="true" />
                    {log.type}
                  </span>
                </header>
                <h2>{log.title}</h2>
                <p>{log.summary}</p>
                {Component ? (
                  <div className="prose log-body">
                    <Component />
                  </div>
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
