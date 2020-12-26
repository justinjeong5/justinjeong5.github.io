import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { Card, Avatar, Col, Row, Typography, Skeleton, Empty } from 'antd'
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'
import { LOAD_BLOG_POSTS_REQUEST } from '../../reducers/types'

const { Title } = Typography;

function BlogPage() {

  const dispatch = useDispatch();
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
  }, [loadBlogPostsLoading, noMorePosts, skip, limit, blogPosts]);

  useEffect(() => {
    dispatch({
      type: LOAD_BLOG_POSTS_REQUEST,
      payload: { skip, limit },
    });
  }, [])

  const renderCards = blogPosts.map((blog) => {
    return (<>
      <Col key={uuidv4()} xl={8} lg={12} md={12} xs={24}>
        <Card
          hoverable
          style={{ width: '100%' }}
          actions={[
            <SettingOutlined />,
            <EditOutlined />,
            <EllipsisOutlined />
          ]}
        >
          <Link to={`/blog/post/${blog._id}`}>
            <Card.Meta
              avatar={<Avatar src={blog.writer.image} />}
              title={blog.title.slice(0, 20)}
              description={blog.writer.name}
            />
            <div style={{ height: 400, overflowY: 'scroll', marginTop: 10, color: 'black' }}>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </Link>
        </Card>
      </Col>
    </>)
  })

  const renderSkeleton = Array.from(Array(6)).map(_ => {
    return (
      <Col key={uuidv4()} xl={8} lg={12} md={12} xs={24}>
        <Skeleton active paragraph={{ rows: 8 }} />
      </Col>
    )
  })

  return (
    <div style={{ width: '75%', margin: '3rem auto' }}>
      <div style={{ textAlign: 'center', marginTop: 100, marginBottom: 100 }}>
        <Title level={2} >블로그 목록</Title>
      </div>
      <Row gutter={[12, 8]}>
        {loadBlogPostsLoading && renderSkeleton}
        {loadBlogPostsDone && blogPosts.length > 0 && renderCards}
        {loadBlogPostsDone && blogPosts.length === 0 && <div style={{ margin: '200px auto' }}>
          <Empty description='블로그에 게시글이 아직 없습니다.' />
        </div>}
      </Row>
    </div>
  )
}

export default BlogPage
