import React, { Component } from 'react'
import { connect } from 'react-redux';
import Message from './Message'
import MessageForm from './MessageForm'
import MessageHeader from './MessageHeader'
import firebase from '../../../config/firebase'

export class MainPanel extends Component {

  messageEndRef = React.createRef();

  state = {
    messages: [],
    messagesRef: firebase.database().ref('messages'),
    typingUsers: [],
    listenerList: [],
  }

  componentDidMount = () => {
    const { currentChatRoom } = this.props;
    if (currentChatRoom) {
      this.addMessagesListeners(currentChatRoom.id);
    }
  }

  componentDidUpdate = () => {
    if (this.messageEndRef) {
      this.messageEndRef.scrollIntoView({ behavior: 'smooth' });
    }
  }

  componentWillUnmount = () => {
    this.removeListeners(this.state.listenerList);
    this.state.messagesRef.off();
  }

  removeListeners = (listeners) => {
    listeners.forEach(listener => {
      listener.ref.child(listener.id).off(listener.event);
    })
  }

  addToListenerLists = (id, ref, event) => {
    // 이미 등록된 리스너인지 확인
    const index = this.state.listenerList.findIndex(listener => {
      return (
        listener.id === id &&
        listener.ref === ref &&
        listener.event === event
      )
    })

    if (index === -1) {
      const newListener = { id, ref, event }
      this.setState({
        listenerList: [...this.state.listenerList, newListener]
      })
    }
  }

  addMessagesListeners = (chatRoomId) => {
    const messageArray = [];
    this.state.messagesRef.child(chatRoomId).on('child_added', (DataSnapShot) => {
      messageArray.push(DataSnapShot.val());
      this.setState({
        messages: messageArray,
      })
    })
  }

  render() {
    return (
      <div style={{ padding: '2rem 2rem 0 2rem' }}>
        <MessageHeader handleSearchChange={this.handleSearchChange} />
        <div
          style={{
            width: 'calc(100vw - 370px)',
            height: 'calc(100vh - 440px)',
            border: '.2rem solid #ececec',
            borderRadius: '4px',
            padding: '1rem',
            marginBottom: '1rem',
            overflowY: 'auto'
          }}>
          <Message
            messages={this.state.messages}
          />
          {/* Ref를 이용한 DOM선택 */}
          <div ref={node => (this.messageEndRef = node)} />
        </div>
        <MessageForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentChatUser: state.chat.currentChatUser,
    currentChatRoom: state.chat.currentChatRoom,
  }
}

export default connect(mapStateToProps)(MainPanel);
