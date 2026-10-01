import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';

import App from './components/App.jsx';
import './css/index.css';
import './css/themes.css';
import './css/pages.css';
import './css/ui.css';
import './css/refine.css';

const root = document.getElementById('root');
const app = <React.StrictMode><App /></React.StrictMode>;
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
