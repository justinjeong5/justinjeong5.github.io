import React from 'react'
import { useSelector } from 'react-redux'
import { Form, Button, Input } from 'antd'
import { sendChat } from '../../utils/socket'

function MessageForm() {

  const [form] = Form.useForm();
  const { currentUser } = useSelector(state => state.user)
  const { currentChatRoom } = useSelector(state => state.chat)

  const handleFinish = () => {
    const value = form.getFieldValue();
    if (!value.content?.trim()) return;
    const payload = {
      content: value.content.trim(),
      writer: currentUser.userId,
    };

    if (currentChatRoom.private) {
      payload.directRoom = currentChatRoom._id;
    } else {
      payload.chatRoom = currentChatRoom._id;
    }
    sendChat(payload)
    form.resetFields();
  }

  const handleKeyDown = (event) => {
    if ((event.shiftKey && event.key === 'Enter') || (event.ctrlKey && event.key === 'Enter')) {
      handleFinish();
    }
  }

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        onKeyDown={handleKeyDown}
      >
        <Form.Item name='content' >
          <Input.TextArea placeholder="메세지를 입력하세요." showCount maxLength={100} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
            보내기
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default MessageForm
