import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import Header from './Header';
import Footer from './Footer';
import { getCase, getNote, getEssay } from '../../lib/content';
import { resolveMetaSafe, applyMetaToDom } from '../../lib/client-meta';

// 상세 라우트 frontmatter getter — entry-server의 DETAIL_GETTERS와 동일 구성(client용).
const DETAIL_GETTERS = { cases: getCase, notes: getNote, essays: getEssay };

function Layout() {
  const { pathname } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    // SPA 이동 시 prerender된 정적 head 메타가 갱신되지 않던 회귀를 막는다.
    // 빌드와 동일한 resolveMeta로 title·canonical·og·description을 동기화한다(SSOT: seo.js).
    applyMetaToDom(document, resolveMetaSafe(pathname, DETAIL_GETTERS));
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 최초 하이드레이션에서는 포커스를 옮기지 않는다(딥링크·해시 앵커·자동 포커스 보존).
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // 라우트 변경 시 본문으로 포커스를 옮겨 스크린리더가 새 페이지를 인지하게 한다.
    // preventScroll로 포커스의 스크롤 부작용을 막아 위 scrollTo(및 페이지별 해시 스크롤)와 분리한다.
    document.getElementById('main-content')?.focus({ preventScroll: true });
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
