import React, { useMemo } from 'react'
import { CarOutlined } from '@ant-design/icons'

function Footer() {

  const rootDivStyle = useMemo(() => ({
    height: '80px', display: 'flex',
    flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', fontSize: '1rem'
  }), [])

  return (
    <div style={rootDivStyle}>
      <p>JustinJeong <CarOutlined /> 정경하</p>
    </div>
  )
}

export default Footer
