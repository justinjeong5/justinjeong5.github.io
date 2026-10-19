import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

import { useUI } from '../../lib/ui-context';
import { PRIMARY_NAV, isPrimaryNavActive } from '../../lib/routes';
import { hasContentAt } from '../../lib/content';

function MobileMenu() {
  const { menuOpen, closeMenu } = useUI();
  const { pathname } = useLocation();
  const hasContent = hasContentAt(pathname);
  const closeButton = useRef(null);

  useEffect(() => {
    if (menuOpen) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    const bg = Array.from(
      document.querySelectorAll('body > #root > *:not(.mobile-menu-overlay)'),
    );
    bg.forEach((el) => el.setAttribute('inert', ''));
    closeButton.current?.focus();
    function handler(event) {
      if (event.key === 'Escape') closeMenu();
    }
    window.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
      bg.forEach((el) => el.removeAttribute('inert'));
      previouslyFocused?.focus?.();
    };
  }, [menuOpen, closeMenu]);

  if (!menuOpen) return null;

  return (
    <div className="mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="메뉴" onClick={closeMenu}>
      <nav className="mobile-menu" onClick={(event) => event.stopPropagation()} aria-label="모바일 네비게이션">
        <header className="mobile-menu-header">
          <p className="mobile-menu-eyebrow">메뉴</p>
          <button ref={closeButton} type="button" className="icon-button" onClick={closeMenu} aria-label="닫기">
            <X size={18} aria-hidden="true" />
          </button>
        </header>

        <section className="mobile-menu-section">
          <p className="mobile-menu-eyebrow">주요 메뉴</p>
          <ul>
            {PRIMARY_NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={closeMenu}
                  aria-current={isPrimaryNavActive(item, pathname, hasContent) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </div>
  );
}

export default MobileMenu;
