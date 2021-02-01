import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import { List, Avatar } from 'antd'
import moment from 'moment'
import Link from 'next/link'

function ChatSummary() {

  const { chatRooms } = useSelector(state => state.chat);

  const getChatRooms = useCallback(() => {
    return chatRooms.slice(0, 3);
  }, [chatRooms])

  return (
    <List
      itemLayout="horizontal"
      dataSource={getChatRooms()}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.writer.image} style={{ marginTop: 5 }} />}
            title={<Link href={`/talkative`}><a>{item.title}</a></Link>}
            description={
              <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>{item.description}</p>
                <p style={{ marginRight: 10 }}>{moment(item.createdAt).fromNow()}</p>
              </span>}
          />
        </List.Item>
      )}
    />
  )
}

export default ChatSummary
