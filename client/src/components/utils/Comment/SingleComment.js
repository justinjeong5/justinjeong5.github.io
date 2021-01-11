import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Comment } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import CommentForm from './CommentForm'

function SingleComment(props) {

  const { comment } = props;
  const [toggleReply, setToggleReply] = useState(false);
  const { currentUser } = useSelector(state => state.user)

  const handleReply = () => {
    setToggleReply(prev => !prev)
  }

  const actions = [<span>좋아요</span>, <span>신고하기</span>]
  if (comment.writer._id !== currentUser.userId) {
    actions.unshift(<span onClick={handleReply}>대댓글 달기</span>)
  }

  return (
    <Comment
      author={<span style={{ color: 'black' }}>{comment.writer.name}</span>}
      avatar={<Avatar style={{ cursor: 'default' }} src={comment.writer.image} alt={comment.writer.name} />}
      content={<p>{comment.content}</p>}
      datetime={<span>{moment(comment.createdAt).fromNow()}</span>}
      actions={actions}
      key={uuidv4()}
    >
      {toggleReply && <CommentForm payload={props.payload} description={props.description} placeholder={props.placeholder} responseTo={comment._id} />}
    </Comment>
  )
}

export default SingleComment
