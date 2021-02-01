import React, { useMemo, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import { Form, Input, Button, Typography, message as Message, Space } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, CheckSquareOutlined } from '@ant-design/icons';
import md5 from 'md5'
import { REGISTER_USER_REQUEST } from '../../reducers/types';
const { Title } = Typography;

function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser, registerUserLoading, registerUserDone, registerUserError, message } = useSelector(state => state.user)

  useEffect(() => {
    if (registerUserDone) {
      Router.push('/login')
    }
    if (currentUser.isAuth) {
      Message.warning('로그인 하지 않은 사용자만 회원가입 가능합니다.');
      return Router.push('/')
    }
    if (registerUserError) {
      Message.error({ content: message, duration: 2 });
    }
  }, [registerUserDone, registerUserError, message, currentUser])

  const onFinish = useCallback((values) => {
    const payload = {
      email: values.email,
      name: values.userName,
      password: values.password,
      image: `https://gravatar.com/avatar/${md5(values.email)}?d=identicon`,
    }
    dispatch({
      type: REGISTER_USER_REQUEST,
      payload
    })
  }, []);

  const handleCancel = useCallback(() => {
    router.back()
  }, [])

  const rootDivWrapperStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }), [])
  const formLabelColStyle = useMemo(() => ({ span: 8 }), [])
  const formWrapperColStyle = useMemo(() => ({ span: 16 }), [])
  const formStyle = useMemo(() => ({ width: '400px' }), [])
  const titleStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', marginBottom: 40 }), [])
  const formEmailRules = useMemo(() => ([
    { required: true, message: '이메일을 입력해주세요.' },
    { type: "email", message: '이메일의 형식이 올바르지 않습니다.' }
  ]), [])
  const formUserNameRules = useMemo(() => ([
    { required: true, message: '이름을 입력해주세요.' },
    { type: "string", max: 20, message: '이름은 20자 이내로 입력해주세요' }
  ]), [])
  const fromPasswordRules = useMemo(() => ([
    { required: true, message: '비밀번호를 입력해주세요.' },
    { type: "string", message: '비밀번호의 형식이 올바르지 않습니다.' },
    { whitespace: false, message: '비밀번호의 형식이 올바르지 않습니다.' },
    { min: 6, message: '비밀번호는 6글자보다 길어야합니다.' }
  ]), [])
  const formPasswordConfirmRules = useMemo(() => ([
    { required: true, message: '비밀번호를 입력해주세요.' },
    ({ getFieldValue }) => ({
      validator(rule, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject('비밀번호 확인이 일치하지 않습니다.');
      },
    })
  ]), [])
  const formItemWrapperColStyle = useMemo(() => ({ offset: 8, span: 16 }), [])
  const formItemStyle = useMemo(() => ({ marginTop: -10 }), [])

  return (
    <div style={rootDivWrapperStyle}>
      <Form
        labelCol={formLabelColStyle}
        wrapperCol={formWrapperColStyle}
        name="basic"
        style={formStyle}
        onFinish={onFinish}
      >
        <Title level={2} style={titleStyle} >회원가입</Title>
        <Form.Item
          label="이메일"
          name="email"
          rules={formEmailRules}
        >
          <Input prefix={<MailOutlined />} placeholder="email" />
        </Form.Item>

        <Form.Item
          label="이름"
          name="userName"
          rules={formUserNameRules}
        >
          <Input prefix={<UserOutlined />} placeholder="name" />
        </Form.Item>

        <Form.Item
          label="비밀번호 "
          name="password"
          rules={fromPasswordRules}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="password" />
        </Form.Item>

        <Form.Item
          label="비밀번호 확인"
          name="passwordConfirm"
          rules={formPasswordConfirmRules}
        >
          <Input.Password prefix={<CheckSquareOutlined />} placeholder="password check" />
        </Form.Item>

        <Form.Item wrapperCol={formItemWrapperColStyle}>
          <Space >
            <Button type="primary" htmlType="submit"
              loading={registerUserLoading}
              disabled={registerUserLoading}>
              회원가입
            </Button>
            <Button onClick={handleCancel} >
              취소
            </Button>
          </Space>
        </Form.Item>

        <Form.Item wrapperCol={formItemWrapperColStyle} style={formItemStyle}>
          <Link href='/login'><a>이미 회원이시라면</a></Link>
        </Form.Item>

      </Form>
    </div >
  )
}

export default RegisterPage;