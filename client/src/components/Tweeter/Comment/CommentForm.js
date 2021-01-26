import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_COMMENT_REQUEST } from '../../../reducers/types';
const { useForm } = Form;

function CommentForm({ postId }) {

  const dispatch = useDispatch();
  const [form] = useForm()
  const { currentUser } = useSelector(state => state.user)
  const { addCommentDone } = useSelector(state => state.tweeter)

  const handleFinish = useCallback((values) => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        comment: values.comment,
        postId: postId,
        userId: currentUser.userId
      }
    })
  }, [postId, currentUser])

  useEffect(() => {
    form.resetFields();
  }, [addCommentDone])

  return (
    <Form
      onFinish={handleFinish}
      form={form}
    >
      <div style={{ position: 'relative', margin: 0 }}>
        <Form.Item name='comment' >
          <Input.TextArea
            rows={4}
            placeholder={currentUser.userId ? '공감을 남겨주세요' : '로그인해 주세요'}
          />
        </Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 10 }}
          disabled={!currentUser.userId}
        >Tweet
        </Button>
      </div>
    </Form>
  )
}

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired
}

export default CommentForm
