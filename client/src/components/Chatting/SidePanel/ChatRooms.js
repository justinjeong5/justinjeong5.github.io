import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Modal, Input, Form } from 'antd'
import { SendOutlined, PlusSquareOutlined, ApiOutlined } from '@ant-design/icons'
import { v4 as uuidv4 } from 'uuid'
import { LOAD_CHAT_ROOMS_REQUEST, SET_CURRENT_CHAT_ROOM } from '../../../reducers/types';
import { createChatRoom } from '../../utils/socket'
const { Title } = Typography;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

function ChatRooms() {

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { chatRooms, currentChatRoom, loadChatRoomsDone, createChatRoomDone } = useSelector(state => state.chat)
  const { currentUser } = useSelector(state => state.user)

  useEffect(() => {
    dispatch({
      type: LOAD_CHAT_ROOMS_REQUEST
    })
  }, [dispatch])

  useEffect(() => {
    if (createChatRoomDone && chatRooms[chatRooms.length - 1].writer._id === currentUser.userId) {
      dispatch({
        type: SET_CURRENT_CHAT_ROOM,
        payload: chatRooms[chatRooms.length - 1]._id
      })
    }
  }, [dispatch, createChatRoomDone, chatRooms, currentUser.userId])

  const handleModal = () => {
    setShowModal(!showModal);
  }

  const handleMakeRoom = () => {
    const { title, description } = form.getFieldValue();
    if (!title || !description) return;
    if (title.length > 15) return;
    createChatRoom({
      title,
      description,
      writer: currentUser.userId,
      favorite: false,
      private: false,
    })
    form.resetFields();
    handleModal();
  }

  const handleCurrentRoom = (roomId) => () => {
    dispatch({
      type: SET_CURRENT_CHAT_ROOM,
      payload: roomId,
    })
  }

  const renderSelected = (roomId) => {
    if (roomId === currentChatRoom._id) {
      return 'gray'
    }
    return ''
  }

  const renderChatRooms = chatRooms.map((room) => (
    <div key={uuidv4()} onClick={handleCurrentRoom(room._id)}
      style={{
        backgroundColor: renderSelected(room._id),
        margin: '0.2rem',
        padding: '0.2rem',
        borderRadius: '0.3rem'
      }}
    >
      {`# ${room.title}`}
    </div>
  ))

  return (
    <div>
      <Title level={5} style={{ color: 'white' }}>
        <SendOutlined />{` 방 목록 [${chatRooms.length}] `}<PlusSquareOutlined onClick={handleModal} style={{ float: 'right', marginTop: 5, marginRight: 7 }} />
      </Title>

      <Modal
        title={<span><ApiOutlined style={{ marginTop: 5 }} /> 새로운 대화방을 만듭니다</span>}
        visible={showModal}
        onOk={handleMakeRoom}
        onCancel={handleModal}
        okText="방 만들기"
        cancelText="취소"
      >
        <Form {...layout} name="basic" form={form} onFinish={handleMakeRoom}>
          <Form.Item label="방 이름" name="title" rules={[{ required: true, message: '방 제목을 정해주세요' }, { max: 15, message: '방 이름은 14글자 이하로 해주세요' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="방 설명" name="description" rules={[{ required: true, message: '방 설명을 적어주세요' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {loadChatRoomsDone && renderChatRooms}
    </div>
  )
}

export default ChatRooms
