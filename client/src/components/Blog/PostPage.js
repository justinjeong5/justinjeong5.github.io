import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { PageHeader, Divider, Card, Avatar } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { LOAD_BLOG_POST_REQUEST } from '../../reducers/types';
import moment from 'moment'
import 'moment/locale/ko'

function PostPage(props) {

  const dispatch = useDispatch();
  const { currentBlogPost, loadBlogPostLoading, loadBlogPostDone } = useSelector(state => state.blog)

  useEffect(() => {
    dispatch({
      type: LOAD_BLOG_POST_REQUEST,
      payload: props.match.params.postId,
    })
  }, [])

  return (
    <>
      {loadBlogPostLoading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: 'calc(100vh - 128px)' }}>
        <LoadingOutlined style={{ fontSize: '5rem' }} />
      </div>}
      {loadBlogPostDone && <>
        <div style={{ width: '80%', maxWidth: '1000px', padding: 24, margin: '3rem auto' }}>
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title={currentBlogPost.title}
          >
            <Card style={{ border: 'none' }}>
              <Card.Meta
                avatar={<Avatar size='large' src={currentBlogPost.writer.image} alt={currentBlogPost.writer.name} />}
                title={currentBlogPost.writer.email}
                description={`${currentBlogPost.writer.name} / ${moment(currentBlogPost.createdAt).format('a h:mm:ss, YYYY년 MMMM Do')}`}
              />
            </Card>
          </PageHeader>

          <Divider />
          <div style={{ margin: '3rem auto', height: '100%' }}>
            <div dangerouslySetInnerHTML={{ __html: currentBlogPost.content }} />
          </div>
        </div>
      </>}
    </>
  )
}

export default withRouter(PostPage)
