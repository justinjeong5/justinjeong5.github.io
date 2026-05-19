import { useEffect } from 'react';
import { X } from 'lucide-react';

import { useUI } from '../../lib/ui-context';

const SHORTCUTS = [
  { group: '검색·도움말', items: [
    { keys: ['⌘', 'K'], desc: '글로벌 검색' },
    { keys: ['/'], desc: '글로벌 검색 (단축)' },
    { keys: ['?'], desc: '이 도움말 열기·닫기' },
    { keys: ['Esc'], desc: '모달 닫기' },
  ]},
  { group: '테마', items: [
    { keys: ['T'], desc: '테마 전환 (라이트 ↔ 다크)' },
  ]},
  { group: '페이지 이동 (g 누르고 다음 키)', items: [
    { keys: ['g', 'h'], desc: '홈' },
    { keys: ['g', 'c'], desc: 'Cases' },
    { keys: ['g', 'n'], desc: 'Notes' },
    { keys: ['g', 'e'], desc: 'Essays' },
    { keys: ['g', 'l'], desc: 'Logs' },
    { keys: ['g', 'a'], desc: 'About' },
    { keys: ['g', 'u'], desc: 'Uses' },
    { keys: ['g', 'w'], desc: 'Now' },
    { keys: ['g', 'r'], desc: 'Reading' },
    { keys: ['g', 'v'], desc: 'CV' },
  ]},
];

function ShortcutHelp() {
  const { helpOpen, closeHelp } = useUI();

  useEffect(() => {
    if (!helpOpen) return undefined;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    const bg = Array.from(
      document.querySelectorAll('body > #root > *:not(.modal-overlay)'),
    );
    bg.forEach((el) => el.setAttribute('inert', ''));
    return () => {
      document.body.style.overflow = '';
      bg.forEach((el) => el.removeAttribute('inert'));
      previouslyFocused?.focus?.();
    };
  }, [helpOpen]);

  if (!helpOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="키보드 단축키" onClick={closeHelp}>
      <div className="modal-card help-modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h2>키보드 단축키</h2>
          <button type="button" className="icon-button" onClick={closeHelp} aria-label="닫기">
            <X size={18} aria-hidden="true" />
          </button>
        </header>
        <div className="help-body">
          {SHORTCUTS.map((group) => (
            <section key={group.group}>
              <h3>{group.group}</h3>
              <dl>
                {group.items.map((item) => (
                  <div key={item.desc}>
                    <dt>
                      {item.keys.map((k, i) => (
                        <span key={i}>
                          <kbd>{k}</kbd>
                          {i < item.keys.length - 1 ? ' ' : null}
                        </span>
                      ))}
                    </dt>
                    <dd>{item.desc}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShortcutHelp;
