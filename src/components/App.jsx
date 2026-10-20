import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';

import Layout from './layout/Layout';
import HomePage from '../pages/HomePage';
import WritingGuidePage from '../pages/WritingGuidePage';
import CasesPage from '../pages/CasesPage';
import CaseDetailPage from '../pages/CaseDetailPage';
import NotesPage from '../pages/NotesPage';
import NoteDetailPage from '../pages/NoteDetailPage';
import EssaysPage from '../pages/EssaysPage';
import EssayDetailPage from '../pages/EssayDetailPage';
import UsesPage from '../pages/UsesPage';
import NowPage from '../pages/NowPage';
import ReadingPage from '../pages/ReadingPage';
import AboutPage from '../pages/AboutPage';
import CvPage from '../pages/CvPage';

import { UIProvider } from '../lib/ui-context';
import GlobalShortcuts from './ui/GlobalShortcuts';
import CommandPalette from './ui/CommandPalette';
import ShortcutHelp from './ui/ShortcutHelp';
import MobileMenu from './ui/MobileMenu';

const mdxComponents = {};

export function AppRoutes() {
  return (
    <UIProvider>
      <MDXProvider components={mdxComponents}>
        <GlobalShortcuts />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/writing" element={<WritingGuidePage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/cases/:slug" element={<CaseDetailPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/notes/:slug" element={<NoteDetailPage />} />
            <Route path="/essays" element={<EssaysPage />} />
            <Route path="/essays/:slug" element={<EssayDetailPage />} />
            <Route path="/uses" element={<UsesPage />} />
            <Route path="/now" element={<NowPage />} />
            <Route path="/reading" element={<ReadingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cv" element={<CvPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
        <CommandPalette />
        <ShortcutHelp />
        <MobileMenu />
      </MDXProvider>
    </UIProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
