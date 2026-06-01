import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">본문 바로가기</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
