import { Link } from 'react-router-dom';
import { BookOpenText, CalendarClock, Sparkles } from 'lucide-react';

import { siteData, getLastUpdated } from '../../lib/content';
import { SECONDARY_NAV } from '../../lib/routes';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
      <div className="footer-brand">
        <span>
          <Sparkles size={16} aria-hidden="true" />
          {siteData.name}
        </span>
        <span>
          <BookOpenText size={16} aria-hidden="true" />
          기술과 제품을 만드는 과정
        </span>
      </div>
      <nav className="footer-nav" aria-label="더 보기">
        {SECONDARY_NAV.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>
      <span className="footer-meta">
        <CalendarClock size={16} aria-hidden="true" />
        최근 수정 {getLastUpdated() || new Date().getFullYear()}
      </span>
      </div>
    </footer>
  );
}

export default Footer;
