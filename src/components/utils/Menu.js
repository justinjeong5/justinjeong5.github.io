import React from 'react'
import PropTypes from 'prop-types'

function Menu({ title }) {
  return (
    <span style={{ marginLeft: 30, color: '#FFFFFF', fontSize: '1.3em' }}>
      {title}
    </span>
  )
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Menu
