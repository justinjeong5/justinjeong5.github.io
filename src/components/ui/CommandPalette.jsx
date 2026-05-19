import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';

import { useUI } from '../../lib/ui-context';
import { groupByType, searchAll } from '../../lib/search';

const GROWTH_ICON = {
  Seedling: '🌱',
  Budding: '🌿',
  Evergreen: '🌳',
};

const GROUP_ORDER = [
  { key: 'case', label: 'Cases' },
  { key: 'note', label: 'Notes' },
  { key: 'essay', label: 'Essays' },
  { key: 'log', label: 'Logs' },
];

function CommandPalette() {
  const navigate = useNavigate();
  const { paletteOpen, closePalette } = useUI();
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const results = useMemo(() => searchAll(query, 24), [query]);
  const groups = useMemo(() => groupByType(results), [results]);

  const orderedResults = useMemo(() => {
    const flat = [];
    for (const { key } of GROUP_ORDER) {
      for (const item of groups[key] || []) flat.push(item);
    }
    return flat;
  }, [groups]);

  useEffect(() => {
    if (!paletteOpen) return undefined;
    setQuery('');
    setActiveIdx(0);
    document.body.style.overflow = 'hidden';
    const id = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = '';
      window.cancelAnimationFrame(id);
    };
  }, [paletteOpen]);

  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  useEffect(() => {
    if (!paletteOpen) return undefined;
    function handler(event) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveIdx((idx) => Math.min(idx + 1, Math.max(orderedResults.length - 1, 0)));
        return;
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveIdx((idx) => Math.max(idx - 1, 0));
        return;
      }
      if (event.key === 'Enter') {
        event.preventDefault();
        const item = orderedResults[activeIdx];
        if (item) {
          navigate(item.url);
          closePalette();
        }
      }
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [paletteOpen, orderedResults, activeIdx, navigate, closePalette]);

  useEffect(() => {
    const active = listRef.current?.querySelector('[data-active="true"]');
    if (active && typeof active.scrollIntoView === 'function') {
      active.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIdx]);

  if (!paletteOpen) return null;

  let runningIdx = 0;

  return (
    <div
      className="modal-overlay palette-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="검색"
      onClick={closePalette}
    >
      <div className="modal-card palette-card" onClick={(event) => event.stopPropagation()}>
        <header className="palette-input-row">
          <Search size={18} aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="케이스·노트·에세이·로그 검색…"
            aria-label="검색어"
            spellCheck="false"
            autoComplete="off"
          />
          <button type="button" className="icon-button" onClick={closePalette} aria-label="닫기">
            <X size={18} aria-hidden="true" />
          </button>
        </header>

        <div ref={listRef} className="palette-results">
          {orderedResults.length === 0 ? (
            <p className="palette-empty">검색 결과가 없습니다.</p>
          ) : (
            GROUP_ORDER.map(({ key, label }) => {
              const items = groups[key];
              if (!items || items.length === 0) return null;
              return (
                <section key={key} className="palette-group">
                  <h3>{label}</h3>
                  <ul>
                    {items.map((item) => {
                      const idx = runningIdx;
                      runningIdx += 1;
                      const isActive = idx === activeIdx;
                      return (
                        <li key={`${item.type}-${item.slug}`}>
                          <button
                            type="button"
                            className="palette-item"
                            data-active={isActive ? 'true' : 'false'}
                            onMouseEnter={() => setActiveIdx(idx)}
                            onClick={() => {
                              navigate(item.url);
                              closePalette();
                            }}
                          >
                            <span className="palette-item-title">
                              {item.type === 'note' ? (
                                <span aria-hidden="true">{GROWTH_ICON[item.growth] || '🌱'} </span>
                              ) : null}
                              {item.title}
                            </span>
                            {item.summary ? (
                              <span className="palette-item-summary">{item.summary}</span>
                            ) : null}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })
          )}
        </div>

        <footer className="palette-footer">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> 이동
          </span>
          <span>
            <kbd>Enter</kbd> 열기
          </span>
          <span>
            <kbd>Esc</kbd> 닫기
          </span>
        </footer>
      </div>
    </div>
  );
}

export default CommandPalette;
