import { siteData } from '../../lib/content';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-identity">
          <p className="footer-name">{siteData.name}</p>
          <p className="footer-role">{siteData.role}</p>
          <p className="footer-career">{siteData.careerLine}</p>
        </div>
        <div className="footer-aside">
          <address className="footer-contact">
            <span>{siteData.email}</span>
            <a href={siteData.github}>{siteData.github.replace(/^https?:\/\//, '')}</a>
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
