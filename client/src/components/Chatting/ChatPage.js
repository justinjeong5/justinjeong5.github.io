import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { SET_CHAT_USER } from '../../reducers/types';

import MainPanel from './MainPanel/MainPanel'
import SidePanel from './SidePanel/SidePanel'
import firebase from '../../config/firebase'

function ChatPage(props) {
  const { currentChatRoom, currentChatUser } = useSelector(state => state.chat);

  const dispatch = useDispatch();

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
    <div style={{ position: 'absolute', display: 'flex', marginTop: 48, height: 'calc(100vh - 128px)' }}>
      <div style={{ width: '300px' }}>
        <SidePanel key={currentChatUser?.userId} />
      </div>
      <div style={{ width: '100%' }}>
        <MainPanel key={currentChatRoom?.id} />
      </div>
    </div>
  )
}

export default withRouter(ChatPage)
