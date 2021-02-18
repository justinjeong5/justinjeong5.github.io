import React from 'react'
import Head from 'next/head'
import Proptypes from 'prop-types'

import '../css/index.css';
import '../css/navBar.css';
import 'antd/dist/antd.css';

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

export default App;