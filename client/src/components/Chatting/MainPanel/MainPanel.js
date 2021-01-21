import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import MessageHeader from './MessageHeader'
import Message from './Message'
import MessageForm from './MessageForm'
import { useSelector } from 'react-redux'

function MainPanel() {

  let messageEndRef = useRef(null);
  const { chatList } = useSelector(state => state.chat)

  useEffect(() => {
    if (messageEndRef) {
      messageEndRef.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatList])


  const rootDivStyle = useMemo(() => ({ padding: '2rem' }), [])
  const messageComponentWrapperStyle = useMemo(() => ({
    width: 'calc(100vw - 370px)',
    height: 'calc(100vh - 440px)',
    border: '.2rem solid #ececec',
    borderRadius: '4px',
    padding: '1rem',
    margin: '1rem auto',
    overflowY: 'auto'
  }), [])

  return (
    <div style={rootDivStyle}>
      <MessageHeader />
      <div style={messageComponentWrapperStyle}>
        <Message />
        {/* Ref를 이용한 DOM선택 */}
        <div ref={(node) => (messageEndRef = node)} /></div>
      <MessageForm />
    </div>
  )
}

export default MainPanel
