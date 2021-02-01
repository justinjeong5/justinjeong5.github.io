import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { List, Avatar } from 'antd'
import moment from 'moment'

function BlogSummary() {

  const { blogPosts } = useSelector(state => state.blog)

  return (
    <List
      itemLayout="horizontal"
      dataSource={blogPosts}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.writer.image} />}
            title={<Link href={`/blog/${item._id}`}><a>{item.title}</a></Link>}
            description={
              <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>{item.writer.name}</p>
                <p style={{ marginRight: 10 }}>{moment(item.createdAt).fromNow()}</p>
              </span>}
          />
        </List.Item>
      )}
    />
  )
}

export default BlogSummary
