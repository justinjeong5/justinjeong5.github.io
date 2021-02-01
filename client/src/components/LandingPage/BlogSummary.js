import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, Avatar } from 'antd'
import moment from 'moment'
import { LOAD_BLOG_POSTS_REQUEST } from '../../reducers/types'
import StyledLink from '../utils/StyledLink';

function BlogSummary() {

  const dispatch = useDispatch();
  const { blogPosts, skip, limit } = useSelector(state => state.blog);

  useEffect(() => {
    if (blogPosts.length === 0) {
      dispatch({
        type: LOAD_BLOG_POSTS_REQUEST,
        payload: { limit, skip }
      })
    }
  }, [blogPosts])

  const getBlogPosts = useCallback(() => {
    return blogPosts.slice(0, 3);
  }, [blogPosts])

  const blogListItemDescriptionStyle = useMemo(() => ({ display: 'flex', justifyContent: 'space-between' }), [])
  const blogListItemTimeStyle = useMemo(() => ({ marginRight: 10 }), [])

  return (
    <List
      itemLayout="horizontal"
      dataSource={getBlogPosts()}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.writer.image} />}
            title={<StyledLink to={`/blog/post/${item._id}`}>{item.title}</StyledLink>}
            description={
              <span style={blogListItemDescriptionStyle}>
                <p>{item.writer.name}</p>
                <p style={blogListItemTimeStyle}>{moment(item.createdAt).fromNow()}</p>
              </span>}
          />
        </List.Item>
      )}
    />
  )
}

export default BlogSummary
