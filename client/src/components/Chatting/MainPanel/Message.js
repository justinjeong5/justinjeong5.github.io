import React from 'react'
import { useSelector } from 'react-redux'
import { Media, Image } from 'react-bootstrap'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
import { Empty } from 'antd'

function Message({ messages }) {

  const { currentChatUser } = useSelector(state => state.chat)

  const timeFromNow = (timestamp) => {
    return moment(timestamp).fromNow();
  }

  const isMessageMine = (message, currentChatUser) => {
    if (!message || !currentChatUser) return false;
    return message.user.id === currentChatUser.userId
  }

  if (messages.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'calc(100vh - 500px)' }}>
        <Empty description='대화기록이 없습니다. 말을 걸어보세요.' />
      </div>
    )
  }

  return (<>
    {messages.map((message) => (
      < Media key={uuidv4()} style={{ marginTop: 5 }}>
        { isMessageMine(message, currentChatUser)
          ? <>
            <Media.Body style={{ textAlign: 'end', marginRight: 10 }}>
              <h6 style={{ marginRight: 'auto' }}>
                <span style={{ fontSize: 10, color: 'gray', marginRight: 10 }}>
                  {timeFromNow(message.timestamp)}
                </span>
                <span >
                  {message.user.name}
                </span>
              </h6>
              <p>{message.content}</p>
            </Media.Body>
            <Image
              roundedCircle
              style={{ width: 48, height: 48, marginBottom: 5, marginRight: 7 }}
              src={message.user.image}
              alt={message.user.name}
            />
          </>
          : <>
            <Image
              roundedCircle
              style={{ width: 48, height: 48, marginBottom: 5, marginRight: 7 }}
              src={message.user.image}
              alt={message.user.name}
            />
            <Media.Body>
              <h6>
                {message.user.name}{' '}
                <span style={{ fontSize: 10, color: 'gray' }}>
                  {timeFromNow(message.timestamp)}
                </span>
              </h6>
              <p>{message.content}</p>
            </Media.Body>
          </>
        }
      </Media>
    ))}
  </>)
}

export default Message
