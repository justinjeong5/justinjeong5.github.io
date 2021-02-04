import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams, useHistory } from 'react-router-dom'
import { PageHeader, Divider, Card, Avatar } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import moment from 'moment'
import 'moment/locale/ko'
import Comment from '../utils/Comment/Comment'
import { LOAD_BLOG_POST_REQUEST } from '../../reducers/types';

function PostPage() {

  const dispatch = useDispatch();
  const history = useHistory();

  const { postId } = useParams();
  const { currentUser } = useSelector(state => state.user);
  const { currentBlogPost, loadBlogPostLoading, loadBlogPostDone } = useSelector(state => state.blog)

  useEffect(() => {
    dispatch({
      type: LOAD_BLOG_POST_REQUEST,
      payload: postId,
    })
  }, [dispatch, postId])

  const handleCancel = useCallback(() => {
    history.goBack(1)
  }, [])

  const loadingWrapperStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: 'calc(100vh - 128px)' }), [])
  const loadingStyle = useMemo(() => ({ fontSize: '5rem' }), [])
  const rootWrapperStyle = useMemo(() => ({ width: '80%', maxWidth: '1000px', padding: 24, margin: '3rem auto' }), [])
  const cardStyle = useMemo(() => ({ border: 'none' }), [])
  const blogContentStyle = useMemo(() => ({ margin: '3rem auto', height: '100%' }), [])
  const renderBlogPost = useMemo(() => ({ __html: currentBlogPost.content }), [currentBlogPost])
  const commentPayload = useMemo(() => ({ blogId: currentBlogPost._id }), [currentBlogPost])

  return (
    <>
      {loadBlogPostLoading && <div style={loadingWrapperStyle}>
        <LoadingOutlined style={loadingStyle} />
      </div>}
      {loadBlogPostDone && <>
        <div style={rootWrapperStyle}>
          <PageHeader
            ghost={false}
            onBack={handleCancel}
            title={currentBlogPost.title}
          >
            <Card style={cardStyle}>
              <Card.Meta
                avatar={<Avatar size='large' src={currentBlogPost.writer.image} alt={currentBlogPost.writer.name} />}
                title={currentBlogPost.writer.email}
                description={`${currentBlogPost.writer.name} / ${moment(currentBlogPost.createdAt).format('a h:mm:ss, YYYY년 MMMM Do')}`}
              />
            </Card>
          </PageHeader>

          <Divider />
          <div style={blogContentStyle}>
            <div dangerouslySetInnerHTML={renderBlogPost} />
          </div>
          <Comment disabled={!currentUser.isAuth} payload={commentPayload} description='덧글 남기기' placeholder='댓글을 남겨주세요. 블로거에게는 큰 힘이 됩니다.' />
        </div>
      </>}
    </>
  )
}

export default withRouter(PostPage)