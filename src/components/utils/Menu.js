import React from 'react'
import PropTypes from 'prop-types'

function Menu({ title, handleRef }) {
  return (
    <span style={{ marginLeft: 30, color: '#FFFFFF', fontSize: '1.3em' }} onClick={handleRef} >
      {title}
    </span>
  )
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  handleRef: PropTypes.func.isRequired,
}

export default Menu
