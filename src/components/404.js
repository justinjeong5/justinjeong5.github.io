import React from 'react'

function Custom404() {
  return (
    <div>
      <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ borderRight: '1px solid gray', padding: '20px 40px' }}>404</div>
        <div style={{ padding: 40 }}>요청하신 페이지를 찾을 수 없습니다.</div>
      </div>
    </div>
  )
}

export default Custom404