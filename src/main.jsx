import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';

import App from './components/App.jsx';
import './css/index.css';
import './css/themes.css';
import './css/pages.css';
import './css/ui.css';
import './css/refine.css';

hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
