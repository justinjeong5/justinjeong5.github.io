import React from 'react'
import PropTypes from 'prop-types'

function Contact({ Icon, content }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <Icon style={{ marginRight: 10 }} />{content}
    </div>
  )
}

Contact.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  content: PropTypes.string.isRequired
}

export default Contact
