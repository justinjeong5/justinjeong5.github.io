import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from 'antd'
import { BellOutlined } from '@ant-design/icons'
import { v4 as uuidv4 } from 'uuid'
import { SET_CURRENT_CHAT_ROOM, LOAD_FAVORITED_REQUEST, LOAD_FAVORITED_LIST_REQUEST } from '../../../reducers/types';
const { Title } = Typography;

function Favorited() {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user)
  const { currentChatRoom } = useSelector(state => state.chat)
  const { favoritedList, loadFavoritedListDone, changeFavoriteDone } = useSelector(state => state.favorite)

  useEffect(() => {
    if (currentUser.isAuth && currentChatRoom) {
      dispatch({
        type: LOAD_FAVORITED_REQUEST,
        payload: {
          userFrom: currentUser.userId,
          chatRoom: currentChatRoom._id,
        }
      })
    }
  }, [dispatch])

  useEffect(() => {
    if (currentChatRoom) {
      dispatch({
        type: LOAD_FAVORITED_LIST_REQUEST,
        payload: {
          userFrom: currentUser.userId,
        }
      })
    }
  }, [dispatch, changeFavoriteDone])

  const handleCurrentRoom = (chatRoomId) => () => {
    dispatch({
      type: SET_CURRENT_CHAT_ROOM,
      payload: chatRoomId,
    })
  }

  const renderSelected = (chatRoomId) => {
    if (chatRoomId === currentChatRoom._id) {
      return 'gray'
    }
    return ''
  }

  const renderChatRooms = favoritedList?.filter(item => {
    return item.chatRoom
  }).map((favorited) => {
    const chatRoom = favorited.chatRoom;
    return (
      <div key={uuidv4()} onClick={handleCurrentRoom(chatRoom._id)}
        style={{
          backgroundColor: renderSelected(chatRoom._id),
          margin: '0.2rem',
          padding: '0.2rem',
          borderRadius: '0.3rem'
        }}
      >
        {`# ${chatRoom.title}`}
      </div>
    )
  })

  const renderEmptyMessages = (<div style={{ color: 'gray' }}>
    로그인해주세요.
  </div>)

  return (
    <div>
      <Title level={5} style={{ color: 'white' }}>
        <BellOutlined />{favoritedList ? ` 즐겨찾기 [${favoritedList.filter(item => {
          return item.chatRoom
        }).length}] ` : ' 즐겨찾기 [0]'}
      </Title>
      {loadFavoritedListDone && (favoritedList ? renderChatRooms : renderEmptyMessages)}
    </div>
  )
}

export default Favorited
