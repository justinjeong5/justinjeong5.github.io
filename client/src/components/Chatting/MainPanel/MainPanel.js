import React, { Component } from 'react'
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'
import Message from './Message'
import MessageForm from './MessageForm'
import MessageHeader from './MessageHeader'
import firebase from '../../../config/firebase'

export class MainPanel extends Component {

  messageEndRef = React.createRef();

  state = {
    messages: [],
    messagesRef: firebase.database().ref('messages'),
    typingRef: firebase.database().ref('typing'),
    typingUsers: [],
    listenerList: [],
    searchTerm: '',
    searchResults: [],
    searchLoading: false,
  }

  componentDidMount = () => {
    const { currentChatRoom } = this.props;
    if (currentChatRoom) {
      this.addMessagesListeners(currentChatRoom.id);
      this.addTypingListeners(currentChatRoom.id)
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

  addTypingListeners = (chatRoomId) => {
    let typingUsers = [];
    // typing이 새로 들어올때
    this.state.typingRef.child(chatRoomId).on('child_added', (DataSnapShot) => {
      if (DataSnapShot.key !== this.props.currentChatUser.uid) {
        typingUsers.push({ id: DataSnapShot.key, name: DataSnapShot.val() })
        this.setState({ typingUsers })
      }
    })
    // listenersList state에 위에서 등록한 리스너 넣기
    this.addToListenerLists(chatRoomId, this.state.typingRef, 'child_added');

    // typing을 제거할 때
    this.state.typingRef.child(chatRoomId).on('child_removed', (DataSnapShot) => {
      const index = typingUsers.findIndex(user => {
        return user.id === DataSnapShot.key;
      })
      if (index > -1) {
        typingUsers.splice(index, 1);
        this.setState({ typingUsers })
      }
    })
    // listenersList state에 위에서 등록한 리스너 넣기
    this.addToListenerLists(chatRoomId, this.state.typingRef, 'child_removed');
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

  renderTypingUsers = (typingUsers) => {
    if (typingUsers.length > 0) {
      return typingUsers.map((user) => {
        return <span key={uuidv4()}>{user.name}님이 채팅을 입력하고 있습니다.</span>
      })
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
      searchLoading: true,
    }, () => {
      this.handleSearchMessages();
    })
  }

  handleSearchMessages = () => {
    const chatRoomMessages = [...this.state.messages];
    const regex = new RegExp(this.state.searchTerm, 'gi');
    const searchResults = chatRoomMessages.reduce((acc, message) => {
      if ((message.content && message.content.match(regex)) || message.user.name.match(regex)) {
        acc.push(message);
      }
      return acc;
    }, [])
    this.setState({ searchResults });
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
            messages={
              this.state.searchTerm
                ? this.state.searchResults
                : this.state.messages
            }
          />
          {this.renderTypingUsers(this.state.typingUsers)}
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
