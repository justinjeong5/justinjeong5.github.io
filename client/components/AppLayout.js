import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './Header/NavBar'
import Footer from './Footer/footer'

function AppLayout({ children }) {

  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div >
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout