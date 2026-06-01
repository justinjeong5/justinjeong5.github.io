import { Link } from 'react-router-dom';
import { BookOpenText, CalendarClock, Sparkles } from 'lucide-react';

import { siteData, getLastUpdated } from '../../lib/content';
import { SECONDARY_NAV } from '../../lib/routes';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span>
          <Sparkles size={16} aria-hidden="true" />
          {siteData.name}
        </span>
        <span>
          <BookOpenText size={16} aria-hidden="true" />
          Cases, notes, logs, and proof of work
        </span>
      </div>
      <nav className="footer-nav" aria-label="Secondary">
        {SECONDARY_NAV.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>
      <span className="footer-meta">
        <CalendarClock size={16} aria-hidden="true" />
        Updated {getLastUpdated() || new Date().getFullYear()}
      </span>
    </footer>
  );
}

export default Footer;
