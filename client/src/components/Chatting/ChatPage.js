import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { SET_CHAT_USER } from '../../reducers/types';

import MainPanel from './MainPanel/MainPanel'
import SidePanel from './SidePanel/SidePanel'
import firebase from '../../config/firebase'

function ChatPage(props) {

  const { currentChatRoom, currentChatUser } = useSelector(state => state.chat);
  const dispatch = useDispatch();
  const [showViewport, setShowViewport] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(window.innerWidth)
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

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) { // 로그인 된 상태
        dispatch({
          type: SET_CHAT_USER,
          payload: user
        })
      } else {  // 로그인 하지 않은 상태
        props.history.push('/login');
      }
    })
  }, []);

  return (
    <>
      {showViewport
        ? <div style={{ position: 'absolute', display: 'flex', marginTop: 48, height: 'calc(100vh - 128px)' }}>
          <div style={{ width: '300px' }}>
            <SidePanel key={currentChatUser?.userId} />
          </div>
          <div style={{ width: '100%' }}>
            <MainPanel key={currentChatRoom?.id} />
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
