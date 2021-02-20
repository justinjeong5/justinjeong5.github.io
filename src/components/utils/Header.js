import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'

const { Title } = Typography;

function Header({ title, color }) {
  return (
    <div>
      <Title style={{ color, fontWeight: 800 }}>
        {title}
      </Title>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string
}

Header.defaultProps = {
  color: '#FFFFFF'
}

export default Header
