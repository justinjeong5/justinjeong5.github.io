import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Comment, Avatar, Skeleton, Empty } from 'antd'
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'
import { LOAD_CHATS_REQUEST } from '../../../reducers/types'

function Message() {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user)
  const { chatList, currentChatRoom, loadChatsDone, loadChatsLoading, loadChatRoomsDone, loadChatRoomsLoading } = useSelector(state => state.chat)

  useEffect(() => {
    if (currentChatRoom) {
      const payload = {};
      if (currentChatRoom.private) {
        payload.directRoom = currentChatRoom._id;
      } else {
        payload.chatRoom = currentChatRoom._id;
      }
      dispatch({
        type: LOAD_CHATS_REQUEST,
        payload
      })
    }
  }, [dispatch, currentChatRoom])

  const timeFromNow = useCallback((timestamp) => {
    return moment(timestamp).fromNow();
  }, [])

  const isMessageMine = useCallback((message) => {
    if (!message || !currentUser) return false;
    return message.writer._id === currentUser.userId
  }, [currentUser])

  const renderMessages = useCallback(() => chatList?.map(message => {
    if (isMessageMine(message)) {
      return (
        <div key={uuidv4()} style={{ marginLeft: 'auto', padding: '16px 0', display: 'flex' }}>
          <div >
            <div style={{ textAlign: 'end', marginBottom: 4 }}>
              <span style={{ fontSize: 12, color: '#CCC', marginRight: 8 }}>{timeFromNow(message.createdAt)}</span>
              <span style={{ fontSize: 12 }}>{message.writer?.name}</span>
            </div>
            <div className="ant-comment-content-detail">
              <p style={{ textAlign: 'end' }}>{message.content}</p>
            </div>
          </div>
          <div>
            <Avatar style={{ cursor: 'default', margin: '3px 10px' }} src={message.writer?.image} alt={message.writer?.name} />
          </div>
        </div>
      )
    } else {
      return (
        <Comment
          key={uuidv4()}
          author={<span style={{ color: 'black' }}>{message.writer?.name}</span>}
          avatar={<Avatar style={{ cursor: 'default' }} src={message.writer?.image} alt={message.writer?.name} />}
          content={<p>{message.content}</p>}
          datetime={<span>{timeFromNow(message.createdAt)}</span>}
        />
      )
    }
  }), [chatList])


  const renderSkeleton = useCallback(Array.from(Array(4)).map(_ => <Skeleton key={uuidv4()} avatar />), [])
  const emptyWrapperStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'calc(100vh - 500px)' }), [])
  const rootDivWrapperStyle = useMemo(() => ({ display: 'flex', flexDirection: 'column' }), [])

  return (<>
    {chatList?.length === 0
      ? loadChatsLoading || loadChatRoomsLoading
        ? renderSkeleton
        : <div style={emptyWrapperStyle}>
          <Empty description='대화기록이 없습니다. 말을 걸어보세요.' />
        </div>
      : <div style={rootDivWrapperStyle}>
        {(loadChatsLoading || loadChatRoomsLoading) && renderSkeleton}
        {loadChatsDone && loadChatRoomsDone && renderMessages}
      </div>
    }
  </>)
}

export default Message
