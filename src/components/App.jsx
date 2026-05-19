import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';

import Layout from './layout/Layout';
import HomePage from '../pages/HomePage';
import CasesPage from '../pages/CasesPage';
import CaseDetailPage from '../pages/CaseDetailPage';
import NotesPage from '../pages/NotesPage';
import NoteDetailPage from '../pages/NoteDetailPage';
import EssaysPage from '../pages/EssaysPage';
import EssayDetailPage from '../pages/EssayDetailPage';
import LogsPage from '../pages/LogsPage';
import UsesPage from '../pages/UsesPage';
import NowPage from '../pages/NowPage';
import ReadingPage from '../pages/ReadingPage';
import AboutPage from '../pages/AboutPage';
import CvPage from '../pages/CvPage';
import NotFoundPage from '../pages/NotFoundPage';

const mdxComponents = {};

function App() {
  return (
    <MDXProvider components={mdxComponents}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/cases/:slug" element={<CaseDetailPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/notes/:slug" element={<NoteDetailPage />} />
            <Route path="/essays" element={<EssaysPage />} />
            <Route path="/essays/:slug" element={<EssayDetailPage />} />
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/uses" element={<UsesPage />} />
            <Route path="/now" element={<NowPage />} />
            <Route path="/reading" element={<ReadingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cv" element={<CvPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MDXProvider>
  );
}

export default App;
