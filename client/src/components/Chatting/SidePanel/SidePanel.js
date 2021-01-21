import React, { useMemo } from 'react'
import { Divider } from 'antd'
import ChatRooms from './ChatRooms'
import UserPanel from './UserPanel'
import Favorited from './Favorited'
import DirectMessage from './DirectMessage'

function SidePanel() {

  const rootDivStyle = useMemo(() => ({
    backgroundColor: '#415972',
    padding: '2rem',
    height: 'calc(100vh - 48px)',
    color: 'white',
    width: '275px',
    overflowX: 'scroll',
  }), [])


  return (
    <div style={rootDivStyle}>
      <UserPanel />
      <Divider />
      <Favorited />
      <Divider />
      <ChatRooms />
      <Divider />
      <DirectMessage />
    </div>
  )
}

export default SidePanel
