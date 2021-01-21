import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StyledLink from '../utils/StyledLink'
import { v4 as uuidv4 } from 'uuid'
import { Button, Avatar, Typography, Skeleton, Empty, List } from 'antd'
import moment from 'moment'
import { LOAD_BLOG_POSTS_REQUEST } from '../../reducers/types'

const { Title } = Typography;

function BlogPage() {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user)
  const { blogPosts, loadBlogPostsDone, loadBlogPostsLoading, noMorePosts, skip, limit } = useSelector(state => state.blog)

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (!loadBlogPostsLoading && !noMorePosts) {
          dispatch({
            type: LOAD_BLOG_POSTS_REQUEST,
            payload: { skip, limit },
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [dispatch, loadBlogPostsLoading, noMorePosts, skip, limit, blogPosts]);

  useEffect(() => {
    dispatch({
      type: LOAD_BLOG_POSTS_REQUEST,
      payload: { skip, limit },
    });
  }, [dispatch])

  const renderSkeleton = useMemo(() => (Array.from(Array(2)).map(_ => <Skeleton key={uuidv4()} />)), [])
  const rootDivStyle = useMemo(() => ({ width: '75%', margin: '3rem auto' }), [])
  const titleDivStyle = useMemo(() => ({ textAlign: 'center', marginTop: 100, marginBottom: 30 }), [])
  const buttonWrapperDivStyle = useMemo(() => ({ display: 'flex' }), [])
  const buttonStyle = useMemo(() => ({ marginLeft: 'auto', marginBottom: 20 }), [])
  const avatarStyle = useMemo(() => ({ marginTop: 7 }), [])
  const descriptionStyle = useMemo(() => ({ marginTop: 10 }), [])
  const descriptionWrapperStyle = useMemo(() => ({ display: 'flex', justifyContent: 'space-between' }), [])
  const emptyWrapperStyle = useMemo(() => ({ margin: '200px auto' }), [])

  const renderBlogPosts = useCallback(() => (
    <List
      width="100%"
      itemLayout="horizontal"
      dataSource={blogPosts}
      renderItem={post => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={post.writer.image} style={avatarStyle} />}
            title={<StyledLink to={`/blog/post/${post._id}`}>{post.title}</StyledLink>}
            description={
              <span style={descriptionWrapperStyle}>
                <p>{post.writer.name}</p>
                <p style={descriptionStyle}>{moment(post.createdAt).fromNow()}</p>
              </span>}
          />
        </List.Item>
      )}
    />
  ), [blogPosts])

  return (
    <div style={rootDivStyle}>
      <div style={titleDivStyle}>
        <Title level={2} >블로그 목록</Title>
      </div>
      <div style={buttonWrapperDivStyle}>
        <Button
          type='primary'
          disabled={!currentUser.isAuth}
          loading={loadBlogPostsLoading}
          style={buttonStyle}>
          <StyledLink to='/blog/create'>
            글쓰기
          </StyledLink>
        </Button>
      </div>

      {loadBlogPostsLoading && renderSkeleton}
      {loadBlogPostsDone && blogPosts.length > 0 &&
        renderBlogPosts()}
      {loadBlogPostsDone && blogPosts.length === 0 &&
        <div style={emptyWrapperStyle}>
          <Empty description='블로그에 게시글이 아직 없습니다.' />
        </div>
      }
    </div >
  )
}

export default BlogPage
