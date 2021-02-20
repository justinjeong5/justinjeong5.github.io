import React from 'react'

import Header from './utils/Header'
import Menu from './utils/Menu'

function NavBar() {

  return (
    <div style={{ backgroundColor: '#191B1E', padding: '10vw' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Header title='정경하 | JustinJeong' color='#FFFFFF' />
        </div>
        <div>
          <Menu title='Skills' />
          <Menu title='Projects' />
          <Menu title='Contacts' />
        </div>
      </div>
    </div>
  )
}

export default NavBar
