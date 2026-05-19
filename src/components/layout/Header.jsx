import { Link, NavLink } from 'react-router-dom';
import { PRIMARY_NAV, ROUTES } from '../../lib/routes';

function Header() {
  return (
    <header className="site-nav" aria-label="Primary">
      <Link className="brand" to={ROUTES.home} aria-label="정경하 홈">
        JKH
      </Link>
      <nav>
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
    </header>
  );
}

export default Header;
