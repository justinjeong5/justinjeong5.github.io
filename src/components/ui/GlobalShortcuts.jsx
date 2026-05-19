import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUI } from '../../lib/ui-context';
import { ROUTES } from '../../lib/routes';

const GOTO_MAP = {
  h: ROUTES.home,
  c: ROUTES.cases,
  n: ROUTES.notes,
  e: ROUTES.essays,
  l: ROUTES.logs,
  a: ROUTES.about,
  u: ROUTES.uses,
  w: ROUTES.now,
  r: ROUTES.reading,
  v: ROUTES.cv,
};

function isEditableTarget(target) {
  if (!target) return false;
  const tag = target.tagName;
  return (
    tag === 'INPUT' ||
    tag === 'TEXTAREA' ||
    tag === 'SELECT' ||
    target.isContentEditable
  );
}

function GlobalShortcuts() {
  const navigate = useNavigate();
  const {
    paletteOpen,
    helpOpen,
    openPalette,
    closePalette,
    toggleHelp,
    closeHelp,
    cycleTheme,
  } = useUI();

  const pendingG = useRef(false);
  const pendingTimer = useRef(null);

  useEffect(() => {
    function clearPendingG() {
      pendingG.current = false;
      if (pendingTimer.current) {
        clearTimeout(pendingTimer.current);
        pendingTimer.current = null;
      }
    }

    function handler(event) {
      // 모달이 떠 있을 때 Escape는 모달이 자체 처리 (여기서는 일반 단축키만 비활성화)
      if (paletteOpen || helpOpen) {
        if (event.key === 'Escape') {
          closePalette();
          closeHelp();
        }
        return;
      }

      if (isEditableTarget(event.target)) return;

      // ⌘K / Ctrl+K → 검색
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        openPalette();
        return;
      }

      // 일반 한 글자 단축키들은 modifier 없을 때만
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      if (event.key === '/') {
        event.preventDefault();
        openPalette();
        return;
      }
      if (event.key === '?') {
        event.preventDefault();
        toggleHelp();
        return;
      }
      if (event.key === 't' || event.key === 'T') {
        cycleTheme();
        return;
      }

      // 'g' 시퀀스 처리
      if (pendingG.current) {
        const target = GOTO_MAP[event.key.toLowerCase()];
        clearPendingG();
        if (target) {
          event.preventDefault();
          navigate(target);
        }
        return;
      }

      if (event.key === 'g' || event.key === 'G') {
        pendingG.current = true;
        pendingTimer.current = setTimeout(clearPendingG, 1200);
        return;
      }
    }

    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      clearPendingG();
    };
  }, [
    navigate,
    paletteOpen,
    helpOpen,
    openPalette,
    closePalette,
    toggleHelp,
    closeHelp,
    cycleTheme,
  ]);

  return null;
}

export default GlobalShortcuts;
