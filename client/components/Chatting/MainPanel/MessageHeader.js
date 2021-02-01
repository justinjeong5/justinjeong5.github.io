import React, { useCallback, useEffect, useMemo } from 'react'
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

  const handleFavorite = useCallback(() => {
    if (currentUser.isAuth) {
      dispatch({
        type: CHANGE_FAVORITE_REQUEST,
        payload: {
          userFrom: currentUser.userId,
          chatRoom: currentChatRoom._id,
        }
      })
    }
  }, [currentUser, currentChatRoom])

  const rootDivStyle = useMemo(() => ({
    width: '100%',
    height: '100%',
    padding: '1rem 2rem',
    marginBottom: '1rem'
  }), [])
  const loadingStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '130px' }), [])
  const headerDivWrapperStyle = useMemo(() => ({ display: 'flex', justifyContent: 'space-between' }), [])
  const titleWrapperStyle = useMemo(() => ({ display: 'flex', justifyContent: 'space-between', width: 'calc(100vw - 620px)' }), [])
  const roomCreatedDivStyle = useMemo(() => ({ color: 'gray', fontSize: '0.7rem' }), [])
  const roomStateIconStyle = useMemo(() => ({ marginTop: 20 }), [])
  const roomCreatorCardStyle = useMemo(() => ({ width: '100%', border: 'none' }), [])
  const avatarStyle = useMemo(() => ({ marginTop: -4, marginRight: -12 }), [])

  return (
    <div style={rootDivStyle}>
      {loadChatRoomsLoading &&
        <div style={loadingStyle}>
          Loading
        </div>
      }
      {loadChatRoomsDone && currentChatRoom?.title &&
        <div style={headerDivWrapperStyle} >
          <div>
            <Title level={3} style={titleWrapperStyle}>
              <div>
                {currentChatRoom.createdAt
                  ? <div style={roomCreatedDivStyle}>{` ${moment(currentChatRoom.createdAt).calendar()}  / 즐겨찾기 ${favoriteNumber}명`}</div>
                  : <div style={roomCreatedDivStyle}>{`DIRECT MESSAGE  / 즐겨찾기 ${favoriteNumber}명`}</div>
                }
                {currentChatRoom.title}
              </div>
              <div>
                <span onClick={handleFavorite}>
                  {currentChatRoom.favorite === false
                    ? <StarOutlined style={roomStateIconStyle} />
                    : isFavorited
                      ? <StarFilled style={roomStateIconStyle} />
                      : <StarOutlined style={roomStateIconStyle} />
                  }
                </span>
                {currentChatRoom.private
                  ? <LockOutlined style={roomStateIconStyle} />
                  : <UnlockOutlined style={roomStateIconStyle} />
                }
              </div>
            </Title>
            <p>{currentChatRoom.description}</p>
          </div>
          <div>
            {currentChatRoom._id &&
              <Card style={roomCreatorCardStyle}>
                <Card.Meta
                  avatar={<Avatar style={avatarStyle} src={currentChatRoom.writer.image} />}
                  title={currentChatRoom.writer.name} />
              </Card>
            }
          </div>
        </div>
      }
    </div >)
}

export default MessageHeader
