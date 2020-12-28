import React, { Component } from 'react'
import { RiBearSmileFill } from 'react-icons/ri'
import { GoPrimitiveDot } from 'react-icons/go'
import { ListGroup } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'

import firebase from '../../../config/firebase'
import { SET_CURRENT_CHAT_ROOM, SET_PRIVATE_CHAT_ROOM } from '../../../reducers/types'

export class DirectMessage extends Component {

  state = {
    usersRef: firebase.database().ref('users'),
    users: [],
    activeChatRoom: ''
  }

  componentDidMount = () => {
    if (this.props.currentChatUser) {
      this.addUserListeners(this.props.currentChatUser.userId);
    }
  }


  addUserListeners = (currentUserId) => {
    let usersArray = [];
    const { usersRef } = this.state;
    usersRef.on('child_added', (DataSnapshot => {
      if (currentUserId !== DataSnapshot.key) {
        let currentChatUser = DataSnapshot.val();
        currentChatUser['userId'] = DataSnapshot.key;
        usersArray.push(currentChatUser);
        this.setState({
          users: usersArray
        })
      }
    }))
  }

  changeChatRoom = (currentChatUser) => {
    const chatRoomId = this.getChatRoomId(currentChatUser.userId);
    const chatRoomData = {
      id: chatRoomId,
      name: currentChatUser.name,
    }
    this.props.dispatch({
      type: SET_CURRENT_CHAT_ROOM,
      payload: chatRoomData,
    })
    this.props.dispatch({
      type: SET_PRIVATE_CHAT_ROOM,
      payload: true,
    });
    this.setActiveChatRoom(currentChatUser.userId);
  }

  setActiveChatRoom = (userId) => {
    this.setState({
      activeChatRoom: userId
    })
  }

  getChatRoomId = (userId) => {
    const currentUserId = this.props.currentChatUser.userId;
    return userId > currentUserId
      ? `${userId}/${currentUserId}`
      : `${currentUserId}/${userId}`
  }

  renderDirectMessages = (users) => {
    if (users.length === 0) return '';
    return users.map((currentChatUser) => {
      return (
        <ListGroup.Item
          key={uuidv4()}
          onClick={() => this.changeChatRoom(currentChatUser)}
          style={{ backgroundColor: this.state.activeChatRoom === currentChatUser.userId ? '#ffffff45' : '#415972', border: 'none', padding: '5px' }}
        >
          {currentChatUser.name}
        </ListGroup.Item >
      )
    })
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <RiBearSmileFill style={{ color: 'white', marginRight: 3 }} /> {`DIRECT MESSAGES [${users.length}]`}
        </span>

        <ListGroup style={{ listStyleType: 'none', padding: 0 }}>
          {this.renderDirectMessages(users)}
        </ListGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentChatUser: state.chat.currentChatUser,
  }
}

export default connect(mapStateToProps)(DirectMessage);
