import React from 'react'
import PropTypes from 'prop-types'

import Header from './utils/Header'
import Menu from './utils/Menu'

function NavBar({ handleSkillRef, handleProjectRef, handleContactRef }) {

  return (
    <div style={{ backgroundColor: '#191B1E', padding: '10vw' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Header title='정경하 | JustinJeong' color='#FFFFFF' />
        </div>
        <div>
          <Menu title='Skills' handleRef={handleSkillRef} />
          <Menu title='Projects' handleRef={handleProjectRef} />
          <Menu title='Contacts' handleRef={handleContactRef} />
        </div>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  handleSkillRef: PropTypes.func,
  handleProjectRef: PropTypes.func,
  handleContactRef: PropTypes.func,
}

export default NavBar
