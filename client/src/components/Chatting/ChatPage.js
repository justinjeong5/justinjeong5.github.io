import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { subscribeChat, subscribeChatRoom } from '../utils/socket'
import {
  SOCKET_CONNECT, SOCKET_DISCONNECT, SOCKET_SUBSCRIBE_REQUEST,
  LOAD_CHAT_USERS_REQUEST, CREATE_CHAT_ROOM_REQUEST,
} from '../../reducers/types';
import MainPanel from './MainPanel/MainPanel'
import SidePanel from './SidePanel/SidePanel'

function ChatPage() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);
  const [showViewport, setShowViewport] = useState(true)

  useEffect(() => {
    dispatch({
      type: SOCKET_CONNECT
    })
    subscribeChat((error, message) => {
      dispatch({
        type: SOCKET_SUBSCRIBE_REQUEST,
        payload: error || message
      })
    })
    subscribeChatRoom((error, message) => {
      dispatch({
        type: CREATE_CHAT_ROOM_REQUEST,
        payload: error || message
      })
    })
    dispatch({
      type: LOAD_CHAT_USERS_REQUEST
    })
    return () => {
      dispatch({
        type: SOCKET_DISCONNECT
      })
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth < 992) {
        setShowViewport(false)
      } else {
        setShowViewport(true)
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      {showViewport
        ? <div style={{ position: 'absolute', display: 'flex', marginTop: 48, height: 'calc(100vh - 128px)' }}>
          <div style={{ width: '300px' }}>
            <SidePanel key={currentUser?.userId} />
          </div>
          <div style={{ width: '100%' }}>
            <MainPanel key={1} />
          </div>
        </div >
        : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 48, height: 'calc(100vh - 128px)', backgroundColor: '#415972' }}>
          <h2> 너비가 992px보다 작은 화면에서는 <br />Talk-A-Tive가 지원되지 않습니다. </h2>
        </div>
      }
    </>
  )
}

export default withRouter(ChatPage)
