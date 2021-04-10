import React from 'react'
import PropTypes from 'prop-types'
import { Col, Typography } from 'antd'
import { GiftOutlined } from '@ant-design/icons'

const { Title } = Typography;

function Image({ title, content }) {
  return (
    <Col lg={12} md={24}>
      <div style={{ backgroundColor: '#F6F6F6', height: 450, width: '100%', maxWidth: 600, borderRadius: '10px', borderTop: '9px solid #4B6CC1' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Title style={{ color: '#4B6CC1' }}>{title} <GiftOutlined /></Title>
        </div>
        <div style={{ padding: '2vw 4vw' }}>
          <Title level={4}>
            {content}
          </Title>
        </div>
      </div>
    </Col>
  )
}

Image.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
}


export default Image
