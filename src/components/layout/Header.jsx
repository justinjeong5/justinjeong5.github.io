import { Link, NavLink } from 'react-router-dom';
import { Keyboard, Menu, Search } from 'lucide-react';

import { PRIMARY_NAV, ROUTES } from '../../lib/routes';
import { useUI } from '../../lib/ui-context';
import ThemeToggle from '../ui/ThemeToggle';

function Header() {
  const { openPalette, toggleHelp, helpOpen, toggleMenu, menuOpen } = useUI();

  return (
    <header className="site-nav" aria-label="Primary">
      <Link className="brand" to={ROUTES.home} aria-label="정경하 홈">
        JKH
      </Link>
      <nav className="primary-nav">
        {PRIMARY_NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
          >
            {item.label}
          </NavLink>
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
    </header>
  );
}

export default Header;
