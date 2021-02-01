import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, Button, Avatar, Card } from 'antd'
import { POST_COMMENT_REQUEST } from '../../../reducers/types'

function CommentForm(props) {

  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { currentUser } = useSelector(state => state.user)

  const onFinish = (value) => {
    const payload = {
      content: value.content,
      writer: currentUser.userId,
      ...props.payload,
    }
    if (props.responseTo) {
      payload.responseTo = props.responseTo;
    }
    dispatch({
      type: POST_COMMENT_REQUEST,
      payload
    })
    form.resetFields();
  }

  return (
    <div style={{ display: 'flex', marginTop: 20, marginBottom: -30 }}>
      <Card.Meta
        avatar={<Avatar src={currentUser.image} style={{ marginTop: 10 }} />}
        title={<span style={{ fontSize: 14 }}>{currentUser.name}</span>}
        description={<span >{currentUser.email}</span>}
        style={{ marginRight: 15 }}
      />
      <Form
        form={form}
        onFinish={onFinish}
        style={{ width: '70%' }}
      >
        <Form.Item
          name="content"
          rules={[{ required: true, message: '내용을 입력해주세요.' }]}
        >
          <Input.TextArea disabled={props.disabled} placeholder={props.disabled ? '로그인해주세요.' : props.placeholder} />
        </Form.Item>

        <Form.Item >
          <Button disabled={props.disabled} type="primary" htmlType="submit">
            {props.description}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CommentForm
