import React from 'react';
import { createRoot } from 'react-dom/client';

import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';

import App from './components/App.jsx';
import './css/index.css';
import './css/themes.css';
import './css/pages.css';
import './css/ui.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
