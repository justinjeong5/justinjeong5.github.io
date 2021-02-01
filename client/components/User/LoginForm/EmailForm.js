import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Form, Input } from 'antd'
import { MailOutlined } from '@ant-design/icons';

function EmailForm() {

  const { loginUserError } = useSelector(state => state.user)

  const formEmailRules = useMemo(() => ([
    { required: true, message: '이메일을 입력해주세요.' },
    { type: "email", message: '이메일의 형식이 올바르지 않습니다.' }
  ]), [])

  return (
    <div>
      {(!loginUserError || loginUserError === 'PasswordMismatch') &&
        <Form.Item
          label="이메일"
          name="email"
          rules={formEmailRules}
        >
          <Input prefix={<MailOutlined />} placeholder="email" />
        </Form.Item>
      }
      {loginUserError === 'NoSuchUser' &&
        <Form.Item
          label="이메일"
          name="email"
          validateStatus="error"
          rules={formEmailRules}
        >
          <Input prefix={<MailOutlined />} placeholder="존재하지 않는 사용자입니다." />
        </Form.Item>
      }
    </div>
  )
}

export default EmailForm
