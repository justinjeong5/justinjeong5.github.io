import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { List, Avatar } from 'antd'
import moment from 'moment'
import { LOAD_CHAT_ROOMS_REQUEST, SET_CURRENT_CHAT_ROOM } from '../../reducers/types';
import StyledLink from '../utils/StyledLink';

function ChatSummary() {

  const dispatch = useDispatch();
  const { chatRooms } = useSelector(state => state.chat);

  useEffect(() => {
    if (chatRooms.length === 0) {
      dispatch({
        type: LOAD_CHAT_ROOMS_REQUEST
      })
    }
  }, [chatRooms])

  const getChatRooms = useCallback(() => {
    return chatRooms.slice(0, 3);
  }, [chatRooms])

  const chatAvatarStyle = useMemo(() => ({ marginTop: 5 }), [])
  const chatListItemDescriptionStyle = useMemo(() => ({ display: 'flex', justifyContent: 'space-between' }), [])
  const chatListItemTimeStyle = useMemo(() => ({ marginRight: 10 }), [])

  return (
    <List
      itemLayout="horizontal"
      dataSource={getChatRooms()}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.writer.image} style={chatAvatarStyle} />}
            title={
              <StyledLink to={`/talkative`} onClick={() => {
                setTimeout(() => {
                  dispatch({
                    type: SET_CURRENT_CHAT_ROOM,
                    payload: item._id
                  })
                }, 500)
              }}>
                {item.title}
              </StyledLink>
            }
            description={
              <span style={chatListItemDescriptionStyle}>
                <p>{item.description}</p>
                <p style={chatListItemTimeStyle}>{moment(item.createdAt).fromNow()}</p>
              </span>}
          />
        </List.Item>
      )}
    />
  )
}

export default ChatSummary
