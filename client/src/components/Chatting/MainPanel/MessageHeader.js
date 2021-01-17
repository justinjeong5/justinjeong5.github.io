import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, Card, Avatar } from 'antd'
import { UnlockOutlined, LockOutlined, StarOutlined, StarFilled } from '@ant-design/icons'
import moment from 'moment'
import { CHANGE_FAVORITE_REQUEST, LOAD_FAVORITED_REQUEST, LOAD_FAVORITE_NUMBER_REQUEST } from '../../../reducers/types'

const { Title } = Typography;
function MessageHeader() {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user)
  const { currentChatRoom, loadChatRoomsDone, loadChatRoomsLoading } = useSelector(state => state.chat)
  const { favoriteNumber, isFavorited } = useSelector(state => state.favorite)

  useEffect(() => {
    if (currentUser.isAuth && currentChatRoom && !currentChatRoom.private) {
      dispatch({
        type: LOAD_FAVORITED_REQUEST,
        payload: {
          userFrom: currentUser.userId,
          chatRoom: currentChatRoom._id,
        }
      })
    }
    if (currentChatRoom && !currentChatRoom.private) {
      dispatch({
        type: LOAD_FAVORITE_NUMBER_REQUEST,
        payload: {
          chatRoom: currentChatRoom._id
        }
      })
    }
  }, [dispatch, currentUser, currentChatRoom])

  const handleFavorite = () => {
    if (currentUser.isAuth) {
      dispatch({
        type: CHANGE_FAVORITE_REQUEST,
        payload: {
          userFrom: currentUser.userId,
          chatRoom: currentChatRoom._id,
        }
      })
    }
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
                  ? <div style={{ color: 'gray', fontSize: '0.7rem' }}>{` ${moment(currentChatRoom.createdAt).calendar()}  / 즐겨찾기 ${favoriteNumber}개`}</div>
                  : <div style={{ color: 'gray', fontSize: '0.7rem' }}>{`DIRECT MESSAGE  / 즐겨찾기 ${favoriteNumber}명`}</div>
                }
                {currentChatRoom.title}
              </div>
              <div>
                <span onClick={handleFavorite}>
                  {currentChatRoom.favorite === false
                    ? <StarOutlined style={{ marginTop: 20 }} />
                    : isFavorited
                      ? <StarFilled style={{ marginTop: 20 }} />
                      : <StarOutlined style={{ marginTop: 20 }} />
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
