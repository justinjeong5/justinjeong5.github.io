import React from 'react'
import { GithubOutlined } from '@ant-design/icons'

function MainPage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: 'calc(100vh - 80px)' }}>
        <GithubOutlined style={{ fontSize: '10rem' }} />
      </div>
    </div>
  )
}

export default MainPage
