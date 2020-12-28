import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css';
import 'antd/dist/antd.css'
import 'react-image-gallery/styles/css/image-gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import store from './store/storeConfiguration'


ReactDOM.render(
  <>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </>,
  document.getElementById('root')
);
