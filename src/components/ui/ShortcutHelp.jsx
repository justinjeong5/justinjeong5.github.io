import { useEffect, useRef } from 'react';
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
    { keys: ['g', 'c'], desc: '개발 경험' },
    { keys: ['g', 'e'], desc: '기술 에세이' },
    { keys: ['g', 'a'], desc: '소개' },
    { keys: ['g', 'u'], desc: '도구' },
    { keys: ['g', 'w'], desc: '요즘' },
    { keys: ['g', 'r'], desc: '읽은 책' },
    { keys: ['g', 'v'], desc: '경력 안내' },
  ]},
];

function ShortcutHelp() {
  const { helpOpen, closeHelp } = useUI();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!helpOpen) return undefined;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    const bg = Array.from(
      document.querySelectorAll('body > #root > *:not(.modal-overlay)'),
    );
    bg.forEach((el) => el.setAttribute('inert', ''));
    const id = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    return () => {
      document.body.style.overflow = '';
      window.cancelAnimationFrame(id);
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
          <button ref={closeButtonRef} type="button" className="icon-button" onClick={closeHelp} aria-label="닫기">
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
