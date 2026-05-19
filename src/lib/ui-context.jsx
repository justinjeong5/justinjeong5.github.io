import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const UIContext = createContext(null);

const THEMES = ['light', 'dark'];

function readInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = window.localStorage.getItem('theme');
    if (saved && THEMES.includes(saved)) return saved;
  } catch {
    /* localStorage 접근 실패는 무시 */
  }
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}

export function UIProvider({ children }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setThemeState] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem('theme', theme);
    } catch {
      /* localStorage 접근 실패는 무시 */
    }
  }, [theme]);

  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);
  const toggleHelp = useCallback(() => setHelpOpen((open) => !open), []);
  const closeHelp = useCallback(() => setHelpOpen(false), []);
  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);
  const cycleTheme = useCallback(() => {
    setThemeState((current) => THEMES[(THEMES.indexOf(current) + 1) % THEMES.length]);
  }, []);
  const setTheme = useCallback((next) => {
    if (THEMES.includes(next)) setThemeState(next);
  }, []);

  return (
    <UIContext.Provider
      value={{
        paletteOpen,
        openPalette,
        closePalette,
        helpOpen,
        toggleHelp,
        closeHelp,
        menuOpen,
        openMenu,
        closeMenu,
        toggleMenu,
        theme,
        setTheme,
        cycleTheme,
        themes: THEMES,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used inside <UIProvider>');
  return ctx;
}
