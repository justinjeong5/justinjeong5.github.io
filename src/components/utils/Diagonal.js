import React from 'react'
import PropTypes from 'prop-types'

function Diagonal({ children, boxStyle, topStyle, bottomStyle }) {
  return (
    <div>
      <div style={topStyle}></div>
      <div style={{ ...boxStyle }}>
        {children}
      </div>
      <div style={bottomStyle}></div>
    </div >
  )
}

Diagonal.propTypes = {
  children: PropTypes.node.isRequired,
  boxStyle: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired,
  topStyle: PropTypes.object,
  bottomStyle: PropTypes.object,
}

export default Diagonal
