import React from 'react'
import { useSelector } from 'react-redux'
import Link from '../utils/Link'
import { List, Avatar, Empty } from 'antd'
import moment from 'moment'
moment.locale('ko');

function BlogSummary() {

  const { blogPosts } = useSelector(state => state.blog)

  return (<>
    {blogPosts.length === 0
      ? <Empty description='블로그를 작성해 보세요' />
      : <List
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
      />}
  </>)
}

export default BlogSummary
