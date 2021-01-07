import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Card, Avatar } from 'antd'
import { UnlockOutlined, LockOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import moment from 'moment'
import { TOGGLE_CHAT_ROOM_FAVORITE_REQUEST } from '../../../reducers/types'

const { Title } = Typography;
function MessageHeader() {

  const dispatch = useDispatch();
  const { currentChatRoom, loadChatRoomsDone, loadChatRoomsLoading } = useSelector(state => state.chat)

  const handleFavorite = () => {
    dispatch({
      type: TOGGLE_CHAT_ROOM_FAVORITE_REQUEST,
      payload: {
        roomId: currentChatRoom._id,
        favorite: !currentChatRoom.favorite,
      }
    })
  }

  return (
    <div style={{
      width: '100%',
      height: '100%',
      padding: '1rem 2rem',
      marginBottom: '1rem'
    }}>
      {loadChatRoomsLoading &&
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '130px' }}>
          Loading
        </div>
      }
      {loadChatRoomsDone && currentChatRoom?.title &&
        < div style={{ display: 'flex', justifyContent: 'space-between' }} >
          <div>
            <Title level={3} style={{ display: 'flex', justifyContent: 'space-between', width: 'calc(100vw - 620px)' }}>
              <div>
                {currentChatRoom.createdAt
                  ? <div style={{ color: 'gray', fontSize: '0.7rem' }}>{` ${moment(currentChatRoom.createdAt).calendar()}`}</div>
                  : <div style={{ color: 'gray', fontSize: '0.7rem' }}>{`DIRECT MESSAGE`}</div>
                }
                {currentChatRoom.title}
              </div>
              <div>
                <span onClick={handleFavorite}>
                  {currentChatRoom.favorite === null
                    ? ''
                    : currentChatRoom.favorite
                      ? <MinusOutlined style={{ marginTop: 20 }} />
                      : <PlusOutlined style={{ marginTop: 20 }} />
                  }
                </span>
                {currentChatRoom.private
                  ? <LockOutlined style={{ marginTop: 20 }} />
                  : <UnlockOutlined style={{ marginTop: 20 }} />
                }
              </div>

            </Title>

            <p>{currentChatRoom.description}</p>
          </div>
          <div>
            {currentChatRoom._id &&
              <Card style={{ width: '100%', border: 'none' }}>
                <Card.Meta
                  avatar={<Avatar style={{ marginTop: -4, marginRight: -12 }} src={currentChatRoom.writer.image} />}
                  title={currentChatRoom.writer.name} />
              </Card>
            }
          </div>
        </div>
      }
    </div >)
}

export default MessageHeader
