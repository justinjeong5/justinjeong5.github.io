import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from 'antd'
import { BellOutlined } from '@ant-design/icons'
import { v4 as uuidv4 } from 'uuid'
import { LOAD_CHAT_ROOMS_REQUEST, SET_CURRENT_CHAT_ROOM } from '../../../reducers/types';
const { Title } = Typography;

function Favorited() {

  const dispatch = useDispatch();
  const [favoriteChatRooms, setFavoriteChatRooms] = useState([])
  const { chatRooms, currentChatRoom, loadChatRoomsDone } = useSelector(state => state.chat)

  useEffect(() => {
    dispatch({
      type: LOAD_CHAT_ROOMS_REQUEST
    })
  }, [])

  useEffect(() => {
    if (chatRooms?.length) {
      const favorites = chatRooms.filter(room => room.favorite)
      setFavoriteChatRooms(favorites)
    }
  }, [chatRooms])

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

  const renderChatRooms = favoriteChatRooms.map((room) => (
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
        <BellOutlined />{` 좋아요 [${favoriteChatRooms.length}] `}
      </Title>
      {loadChatRoomsDone && renderChatRooms}
    </div>
  )
}

export default Favorited
