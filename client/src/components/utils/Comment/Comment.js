import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Skeleton } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { LOAD_COMMENTS_REQUEST } from '../../../reducers/types'
import CommentForm from './CommentForm'
import SingleComment from './SingleComment'
import ReplyComment from './ReplyComment';

function Comment(props) {

  const dispatch = useDispatch();
  const { commentList, loadCommentsLoading, loadCommentsDone } = useSelector(state => state.comment)

  useEffect(() => {
    console.log(props.payload, 'comment dispatcher payload')
    dispatch({
      type: LOAD_COMMENTS_REQUEST,
      payload: props.payload
    })
  }, [])

  const renderSkeleton = Array.from(Array(3)).map(_ => <Skeleton key={uuidv4()} avatar />)

  const renderComment = commentList.map(comment => {
    if (!comment.responseTo)
      return (
        <div key={uuidv4()} style={{ margin: '20px 0' }}>
          <SingleComment payload={props.payload} description={props.description} comment={comment} />
          <ReplyComment payload={props.payload} description={props.description} comment={comment} />
        </div>
      )
  })

  return (
    <div>
      {loadCommentsLoading && renderSkeleton}
      {loadCommentsDone && renderComment}
      <br />
      <CommentForm payload={props.payload} description={props.description} placeholder={props.placeholder} />
    </div>
  )
}

export default Comment
