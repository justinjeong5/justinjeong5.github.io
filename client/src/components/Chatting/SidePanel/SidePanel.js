import React from 'react'
import ChatRooms from './ChatRooms'
import UserPanel from './UserPanel'

function SidePanel() {
  return (
    <div
      style={{
        backgroundColor: '#415972',
        padding: '2rem',
        height: 'calc(100vh - 48px)',
        color: 'white',
        width: '275px'
      }}
    >
      <UserPanel />
      <hr />
      <ChatRooms />
    </div>
  )
}

export default SidePanel
