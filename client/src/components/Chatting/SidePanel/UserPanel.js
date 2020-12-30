import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RiKakaoTalkFill } from 'react-icons/ri'
import { Dropdown, Image } from 'react-bootstrap'

import firebase from '../../../config/firebase'
import { LOGOUT_CHAT_USER_REQUEST, LOGOUT_USER_REQUEST } from '../../../reducers/types'

function UserPanel() {

  const dispatch = useDispatch();
  const { currentChatUser } = useSelector(state => state.chat);
  const chatUserPresenceRef = firebase.database().ref('presence');

  const handleLogout = () => {
    firebase.auth().signOut();
    dispatch({
      type: LOGOUT_CHAT_USER_REQUEST,
    });
    dispatch({
      type: LOGOUT_USER_REQUEST,
    });
    chatUserPresenceRef.child(currentChatUser.userId).remove()
  }

  return (
    <div>
      <h3 style={{ color: 'white' }}>
        <RiKakaoTalkFill style={{ marginBottom: 9 }} />{' '}Talk-A-Tive
      </h3>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>

        <Image
          style={{ width: '30px', height: '30px', marginTop: '3px' }}
          src={currentChatUser && currentChatUser.image} roundedCircle />

        <Dropdown>
          <Dropdown.Toggle
            style={{ background: 'transparent', border: '0' }}
            id="dropdown-basic">
            {currentChatUser && currentChatUser.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default UserPanel
