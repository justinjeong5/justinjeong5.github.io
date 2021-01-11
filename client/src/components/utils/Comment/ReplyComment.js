import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import SingleComment from './SingleComment'

function ReplyComment(props) {

  const [list, setList] = useState([])
  const [toggleList, setToggleList] = useState(false)
  const { commentList, loadCommentsDone } = useSelector(state => state.comment)

  useEffect(() => {
    const list = commentList.filter(comment => {
      return props.comment._id === comment.responseTo
    })
    setList(list);
  }, [])

  const renderComment = list.map(comment => {
    return (
      <div key={uuidv4()} style={{ marginTop: 20, marginLeft: 50 }}>
        <SingleComment payload={props.payload} description={props.description} comment={comment} />
        <ReplyComment payload={props.payload} description={props.description} comment={comment} />
      </div>
    )
  })

  return (
    <div>
      {list.length > 0 &&
        <span onClick={() => setToggleList(!toggleList)} style={{ color: 'gray' }}>{`${list.length}개의 덧글 더 보기`}</span>
      }
      {loadCommentsDone && toggleList && renderComment}
    </div>
  )
}

export default ReplyComment
