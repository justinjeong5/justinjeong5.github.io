import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, Button, Form, ListGroup } from 'react-bootstrap'
import { RiChatSmile3Fill } from 'react-icons/ri'
import { FaPlusSquare } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

import firebase from '../../../config/firebase'
import { SET_CURRENT_CHAT_ROOM, SET_PRIVATE_CHAT_ROOM } from '../../../reducers/types'

export class ChatRooms extends Component {
  state = {
    showModal: false,
    name: '',
    description: '',
    chatRoomsRef: firebase.database().ref('chatRooms'),
    messagesRef: firebase.database().ref('messages'),
    chatRooms: [],
    firstLoad: true,
    activeChatRoomId: '',
  }

  componentDidMount() {
    this.addChatRoomsListeners();
  }

  componentWillUnmount() {
    this.state.chatRoomsRef.off();
    this.state.chatRooms.forEach(currentChatRoom => {
      this.state.messagesRef.child(currentChatRoom.id).off();
    })
  }

  setFirstChatRoom = () => {
    if (this.state.firstLoad && this.state.chatRooms.length > 0) {
      const firstChatRoom = this.state.chatRooms[0];
      this.props.dispatch({
        type: SET_CURRENT_CHAT_ROOM,
        payload: firstChatRoom,
      });
      this.setState({
        firstLoad: false,
        activeChatRoomId: firstChatRoom.id
      })
    }
  }

  addChatRoomsListeners = () => {
    let chatRoomsArray = [];
    this.state.chatRoomsRef.on('child_added', (DataSnapshot) => {
      chatRoomsArray.push(DataSnapshot.val());
      this.setState({
        chatRooms: chatRoomsArray,
      })
      this.setFirstChatRoom();
    })
  }

  handleClose = () => {
    this.setState({ showModal: false })
  };
  handleShow = () => {
    this.setState({ showModal: true })
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, description } = this.state;
    if (!this.isFormValid(name, description)) return;
    this.addChatRoom();
  }

  isFormValid = (name, description) => {
    return name && description;
  }

  addChatRoom = async () => {
    // reference => https://firebase.google.com/docs/database/web/lists-of-data#append_to_a_list_of_data
    const key = await this.state.chatRoomsRef.push().key;
    const { name, description } = this.state;
    const { currentChatUser } = this.props;
    const newChatRoom = {
      id: key,
      name,
      description,
      createdBy: {
        name: currentChatUser.name,
        image: currentChatUser.image,
      }
    }
    try {
      await this.state.chatRoomsRef.child(key).update(newChatRoom)
      this.setState({
        showModal: false,
        name: '',
        description: '',
      })
    } catch (error) {
      console.error(error);
    }
  }

  changeChatRoom = (room) => {
    this.props.dispatch({
      type: SET_CURRENT_CHAT_ROOM,
      payload: room,
    });
    this.props.dispatch({
      type: SET_PRIVATE_CHAT_ROOM,
      payload: false,
    });
    this.setState({ activeChatRoomId: room.id })
  }

  renderChatRooms = () => {
    if (this.state.chatRooms.length === 0) return;
    return this.state.chatRooms.map((room) => {
      return (
        <ListGroup.Item
          key={uuidv4()}
          style={{ backgroundColor: room.id === this.state.activeChatRoomId ? '#ffffff45' : '#415972', border: 'none', padding: '5px' }}
          onClick={() => {
            this.changeChatRoom(room);
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
        <div style={{
          position: 'relative', width: '100%', display: 'flex', alignItems: 'center'
        }}>
          <RiChatSmile3Fill
            style={{ color: 'white', marginRight: 6 }}
          />
          {`방 목록 [${this.state.chatRooms.length}]`}
          <FaPlusSquare
            style={{ color: 'white', position: 'absolute', right: 0, cursor: 'pointer' }}
            onClick={this.handleShow}
          />
        </div>
        <ListGroup style={{ listStyleType: 'none', padding: 0 }}>
          {this.renderChatRooms()}
        </ListGroup>
        {/* 모달으로 새 채팅방 정보 입력받기 */}
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              새로운 대화방 만들기
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* 모달 내부 form 시작 */}
            <Form onSubmit={this.handleSubmit}>
              <Form.Group >
                <Form.Label>방 이름</Form.Label>
                <Form.Control
                  onChange={(e) => this.setState({ name: e.target.value })}
                  type="text"
                  placeholder="새로운 대화방의 이름을 적어주세요" />
              </Form.Group>

              <Form.Group >
                <Form.Label>방 설명</Form.Label>
                <Form.Control
                  onChange={(e) => this.setState({ description: e.target.value })}
                  type="text"
                  placeholder="방 정보를 적어주세요" />
              </Form.Group>
            </Form>
            {/* 모달 내부 form 끝 */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              취소
            </Button>
            <Button variant="primary" onClick={this.handleSubmit} >
              방 만들기
            </Button>
          </Modal.Footer>
        </Modal>
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
export default connect(mapStateToProps)(ChatRooms);
