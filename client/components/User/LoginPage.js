import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'
import { Form, Button, Checkbox, Space, Typography, message as Message } from 'antd';
import { LOGIN_USER_REQUEST } from '../../reducers/types';
import EmailForm from './LoginForm/EmailForm';
import PasswordForm from './LoginForm/PasswordForm';

const { Title } = Typography;

function LoginPage() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const { loginUserLoading, loginUserDone, loginUserError, message } = useSelector(state => state.user)

  useEffect(() => {
    if (loginUserDone) {
      Router.push('/')
    }
    if (loginUserError) {
      Message.error({ content: message, duration: 2 });
    }
  }, [loginUserDone, loginUserError, message])

  // let initialValues = useMemo(() => ({
  //   rememberMe: true,
  //   email: localStorage.getItem('rememberMe'),
  // }), [localStorage])

  const onFinish = useCallback((values) => {
    // if (values.rememberMe) {
    //   window.localStorage.setItem('rememberMe', values.email);
    // }
    dispatch({
      type: LOGIN_USER_REQUEST,
      payload: {
        email: values.email,
        password: values.password,
      }
    })
  }, []);

  const handleCancel = useCallback(() => {
    router.back()
  }, [])

  const onFinishFailed = useCallback(({ errorFields }) => {
    form.scrollToField(errorFields[0].name);
  }, [form]);
  const rootDivWrapperStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }), [])
  const formLabelColStyle = useMemo(() => ({ span: 8 }), [])
  const formWrapperColStyle = useMemo(() => ({ span: 16 }), [])
  const formStyle = useMemo(() => ({ width: '400px' }), [])
  const titleStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', marginBottom: 40 }), [])
  const formItemWrapperColStyle = useMemo(() => ({ offset: 8, span: 16 }), [])
  const formItemStyle = useMemo(() => ({ marginTop: -10 }), [])


  return (
    <div style={rootDivWrapperStyle}>
      <Form
        name="basic"
        // initialValues={initialValues}
        labelCol={formLabelColStyle}
        wrapperCol={formWrapperColStyle}
        style={formStyle}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Title level={2} style={titleStyle} >로그인</Title>
        <EmailForm />
        <PasswordForm />

        <Form.Item wrapperCol={formItemWrapperColStyle} name="rememberMe" valuePropName="checked">
          <Checkbox>아이디 기억하기</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={formItemWrapperColStyle}>
          <Space>
            <Button type="primary" htmlType="submit"
              loading={loginUserLoading}
              disabled={loginUserLoading}>
              로그인
              </Button>
            <Button onClick={handleCancel}>
              취소
            </Button>
          </Space>
        </Form.Item>

        <Form.Item wrapperCol={formItemWrapperColStyle} style={formItemStyle}>
          <Link href='/register'><a>아직 회원이 아니시라면</a></Link>
        </Form.Item>
      </Form>
    </div >
  )
}

export default LoginPage;