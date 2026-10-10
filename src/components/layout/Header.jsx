import { Link, useLocation } from 'react-router-dom';
import { Keyboard, Menu, Search } from 'lucide-react';

import { PRIMARY_NAV, ROUTES, isPrimaryNavActive } from '../../lib/routes';
import { getCase, getEssay } from '../../lib/content';
import { useReadingView } from '../../lib/use-reading-view';
import { useUI } from '../../lib/ui-context';
import ThemeToggle from '../ui/ThemeToggle';

function Header() {
  const { pathname } = useLocation();
  const view = useReadingView();
  const search = view ? '?view=' + encodeURIComponent(view) : '';
  const detail = pathname.match(/^\/(cases|essays)\/([^/]+)\/?$/);
  const entry = detail ? (detail[1] === 'cases' ? getCase(detail[2]) : getEssay(detail[2])) : undefined;
  const { openPalette, toggleHelp, helpOpen, toggleMenu, menuOpen } = useUI();

  return (
    <header className="site-nav" aria-label="주메뉴">
      <div className="site-nav-inner">
      <Link className="brand" to={ROUTES.home} aria-label="정경하 홈">
        JKH
      </Link>
      <nav className="primary-nav">
        {PRIMARY_NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={isPrimaryNavActive(item, pathname, search, entry?.collection) ? 'nav-link is-active' : 'nav-link'}
            aria-current={isPrimaryNavActive(item, pathname, search, entry?.collection) ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="nav-actions">
        <button
          type="button"
          className="search-trigger"
          onClick={openPalette}
          aria-label="검색"
          title="검색 (⌘K 또는 /)"
        >
          <Search size={16} aria-hidden="true" />
          <span>검색</span>
          <kbd>⌘K</kbd>
        </button>
        <ThemeToggle />
        <button
          type="button"
          className="icon-button desktop-only"
          onClick={toggleHelp}
          aria-label="키보드 단축키"
          aria-expanded={helpOpen}
          aria-haspopup="dialog"
          title="키보드 단축키 (? 키)"
        >
          <Keyboard size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="icon-button menu-trigger"
          onClick={toggleMenu}
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          aria-haspopup="dialog"
          title="메뉴"
        >
          <Menu size={18} aria-hidden="true" />
        </button>
      </div>
      </div>
    </header>
  );
}

export default Header;
