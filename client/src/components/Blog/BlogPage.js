import React, { useEffect } from 'react'
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

  const renderSkeleton = Array.from(Array(2)).map(_ => <Skeleton key={uuidv4()} />)

  return (
    <div style={{ width: '75%', margin: '3rem auto' }}>
      <div style={{ textAlign: 'center', marginTop: 100, marginBottom: 30 }}>
        <Title level={2} >블로그 목록</Title>
      </div>
      <div style={{ display: 'flex' }}>
        <Button
          type='primary'
          disabled={!currentUser.isAuth}
          loading={loadBlogPostsLoading}
          style={{ marginLeft: 'auto', marginBottom: 20 }}>
          <StyledLink to='/blog/create'>
            글쓰기
          </StyledLink>
        </Button>
      </div>

      {loadBlogPostsLoading && renderSkeleton}
      {loadBlogPostsDone && blogPosts.length > 0 &&
        <List
          width="100%"
          itemLayout="horizontal"
          dataSource={blogPosts}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.writer.image} style={{ marginTop: 7 }} />}
                title={<StyledLink to={`/blog/post/${item._id}`}>{item.title}</StyledLink>}
                description={
                  <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>{item.writer.name}</p>
                    <p style={{ marginRight: 10 }}>{moment(item.createdAt).fromNow()}</p>
                  </span>}
              />
            </List.Item>
          )}
        />}
      {
        loadBlogPostsDone && blogPosts.length === 0 && <div style={{ margin: '200px auto' }}>
          <Empty description='블로그에 게시글이 아직 없습니다.' />
        </div>
      }
    </div >
  )
}

export default BlogPage
