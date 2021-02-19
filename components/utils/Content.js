import React from 'react'
import PropTypes from 'prop-types'
import { CheckOutlined } from '@ant-design/icons'

function Content({ content }) {
  return (
    <div style={{ marginBottom: 3 }}>
      <CheckOutlined /> {content}
    </div>
  )
}

Content.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Content
