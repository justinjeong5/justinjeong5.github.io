import React from 'react'
import Head from 'next/head'
import Proptypes from 'prop-types'
import withReduxSaga from 'next-redux-saga'
import '../css/NavBar.css';
import 'antd/dist/antd.css';
import 'react-image-gallery/styles/css/image-gallery.css';

import wrapper from '../store/storeConfiguration'

function App({ Component }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>정경하(JustinJeong)</title>
      </Head>
      <Component />
    </>
  )
}

App.propTypes = {
  Component: Proptypes.elementType.isRequired,
}

export default wrapper.withRedux(withReduxSaga(App));