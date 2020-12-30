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
    presenceRef: firebase.database().ref('presence'),
    users: [],
    usersPresence: [],
    userListenserList: [],
    activeChatRoom: ''
  }

  componentDidMount = () => {
    if (this.props.currentChatUser) {
      this.addUserListeners(this.props.currentChatUser.userId);
      this.addPresentListeners(this.props.currentChatUser.userId)
    }
  }

  componentWillUnmount = () => {
    this.removeListeners(this.state.userListenserList);
    this.state.presenceRef.off();
  }

  removeListeners = (listeners) => {
    listeners.forEach(listener => {
      listener.ref.child(listener.userId).off(listener.event);
    })
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

  addPresentListeners = (userId) => {
    let usersPresence = [];
    // presence이 새로 들어올때
    this.state.presenceRef.on('child_added', (DataSnapShot) => {
      if (DataSnapShot.key !== userId) {
        usersPresence.push({ userId: DataSnapShot.key })
        this.setState({ usersPresence })
        // listenersList state에 위에서 등록한 리스너 넣기
        this.addToListenerLists(DataSnapShot.key, this.state.presenceRef, 'child_added');
      }
    })

    // presence을 제거할 때
    this.state.presenceRef.on('child_removed', (DataSnapShot) => {
      const index = usersPresence.findIndex(user => {
        return user.userId === DataSnapShot.key;
      })
      if (index > -1) {
        usersPresence.splice(index, 1);
        this.setState({ usersPresence })
        // listenersList state에 위에서 등록한 리스너 넣기
        this.addToListenerLists(DataSnapShot.key, this.state.presenceRef, 'child_removed');
      }
    })
  }

  addToListenerLists = (userId, ref, event) => {
    // 이미 등록된 리스너인지 확인
    const index = this.state.userListenserList?.findIndex(listener => {
      return (
        listener.userId === userId &&
        listener.ref === ref &&
        listener.event === event
      )
    })

    if (index === -1) {
      const newListener = { userId, ref, event }
      this.setState({
        userListenserList: [...this.state.userListenserList, newListener]
      })
    }
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
          style={{
            backgroundColor: this.state.activeChatRoom === currentChatUser.userId ? '#ffffff45' : '#415972',
            border: 'none', padding: '5px', display: 'flex', justifyContent: 'space-between',
          }}
        >
          <span>{`# ${currentChatUser.name}`} </span>
          {this.renderPresence(currentChatUser.userId)}

        </ListGroup.Item >
      )
    })
  }

  renderPresence = (userId) => {
    const index = this.state.usersPresence?.findIndex((value, index) => {
      return value.userId === userId
    })
    return <GoPrimitiveDot color={index > -1 ? '#22d100' : 'gray'} style={{ margin: '5px 0px' }} />
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
