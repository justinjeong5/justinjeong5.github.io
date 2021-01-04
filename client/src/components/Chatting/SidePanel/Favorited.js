import React, { Component } from 'react'
import { connect } from 'react-redux';
import { MdFavorite } from 'react-icons/md'
import { ListGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../../../config/firebase'
import { SET_CURRENT_CHAT_ROOM, SET_PRIVATE_CHAT_ROOM } from '../../../reducers/types'

export class Favorited extends Component {

  state = {
    usersRef: firebase.database().ref('users'),
    favoritedChatRooms: [],
  }

  componentDidMount() {
    if (this.props.currentChatUser?.userId) {
      this.addListeners(this.props.currentChatUser.userId);
    }
  }

  componentWillUnmount() {
    if (this.props.currentChatUser?.userId) {
      this.removeListener(this.props.currentChatUser.userId);
    }
  }
  removeListener = (userId) => {
    this.state.usersRef.child(userId).child('favorited').off()
  }

  addListeners(userId) {
    const { usersRef } = this.state;
    usersRef
      .child(userId)
      .child('favorited')
      .on('child_added', (DataSnapShot) => {
        const favoritedChatRoom = { id: DataSnapShot.key, ...DataSnapShot.val() };
        this.setState({
          favoritedChatRooms: [favoritedChatRoom, ...this.state.favoritedChatRooms]
        })
      })

    usersRef
      .child(userId)
      .child('favorited')
      .on('child_removed', (DataSnapShot) => {
        const chatRoomToRemove = DataSnapShot.key;
        const filteredChatRooms = this.state.favoritedChatRooms.filter(chatRoom => {
          return chatRoom.id !== chatRoomToRemove;
        })
        this.setState({
          favoritedChatRooms: filteredChatRooms,
        })
      })
  }

  changeChatRoom = (chatRoom) => {
    this.props.dispatch({
      type: SET_CURRENT_CHAT_ROOM,
      payload: chatRoom,
    });
    this.props.dispatch({
      type: SET_PRIVATE_CHAT_ROOM,
      payload: false,
    });
    this.setState({ activeChatRoomId: chatRoom.id })
  }

  renderFavoritedChatRooms = () => {
    if (this.state.favoritedChatRooms.length === 0) return;
    return this.state.favoritedChatRooms.map((room) => {
      return (
        <ListGroup.Item
          key={uuidv4()}
          style={{ backgroundColor: room.id === this.state.activeChatRoomId ? '#ffffff45' : '#415972', border: 'none', padding: '5px' }}
          onClick={() => {
            this.changeChatRoom(room)
          }}
        >
          # {room.name}
        </ListGroup.Item>
      )
    })
  }


  render() {
    return (
      <div>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <MdFavorite style={{ marginRight: 3, color: 'white' }} />
          {` 즐겨찾기 [${this.state.favoritedChatRooms.length}]`}
        </span>
        <ListGroup style={{ listStyleType: 'none', padding: 0 }}>
          {this.renderFavoritedChatRooms()}
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

export default connect(mapStateToProps)(Favorited)
