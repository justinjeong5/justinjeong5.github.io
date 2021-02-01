import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Typography, message as Message, Space, Popover } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { EDIT_USER_REQUEST, CONFIRM_USER_REQUEST, UPLOAD_USER_IMAGE_REQUEST } from '../../reducers/types';
const { Title } = Typography;

function EditPage() {

  const inputOpenImageRef = useRef();
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser, editUserLoading, editUserDone, editUserError, message,
    confirmUserLoading, confirmUserDone, confirmUserError } = useSelector(state => state.user)

  useEffect(() => {
    form.setFieldsValue({
      userName: currentUser?.name,
    });
    if (editUserDone) {
      history.push('/')
    }
    if (editUserError || confirmUserError) {
      Message.error({ content: message, duration: 2 });
    }
  }, [currentUser, editUserDone, editUserError, confirmUserError, message, history, form])

  const handleEdit = useCallback((values) => {
    dispatch({
      type: EDIT_USER_REQUEST,
      payload: {
        name: values.userName,
      }
    })
  }, []);

  const handleConfirm = useCallback((values) => {
    dispatch({
      type: CONFIRM_USER_REQUEST,
      payload: {
        password: values.password,
      }
    })
  }, []);

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();

    const config = {
      header: { 'content-type': 'multipart/form-data' }
    }
    formData.append('file', file)
    // return console.log(file, 'UPLOAD_USER_IMAGE_REQUEST file')

    dispatch({
      type: UPLOAD_USER_IMAGE_REQUEST,
      payload: {
        formData,
        config,
      }
    })
  }

  const handleClickRef = useCallback(() => {
    inputOpenImageRef.current.click()
  }, [inputOpenImageRef])

  const handleCancel = useCallback(() => {
    history.goBack(1)
  }, [])

  const rootDivWrapperStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }), [])
  const formLabelColStyle = useMemo(() => ({ span: 8 }), [])
  const formWrapperColStyle = useMemo(() => ({ span: 16 }), [])
  const formStyle = useMemo(() => ({ width: '400px' }), [])
  const titleStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', marginBottom: 40 }), [])
  const formUserNameRules = useMemo(() => ([
    { required: true, message: '이름을 입력해주세요.' },
    { type: "string", max: 20, message: '이름은 20자 이내로 입력해주세요' }
  ]), [])
  const formPasswordRules = useMemo(() => ([
    { required: true, message: '비밀번호를 입력해주세요.' },
    { type: "string", message: '비밀번호의 형식이 올바르지 않습니다.' },
    { whitespace: false, message: '비밀번호의 형식이 올바르지 않습니다.' },
    { min: 6, message: '비밀번호는 6글자보다 길어야합니다.' }
  ]), [])
  const formItemWrapperColStyle = useMemo(() => ({ offset: 8, span: 16 }), [])


  return (
    <div style={rootDivWrapperStyle}>
      <Form
        name="basic"
        form={form}
        labelCol={formLabelColStyle}
        wrapperCol={formWrapperColStyle}
        style={formStyle}
        onFinish={confirmUserDone ? handleEdit : handleConfirm}
      >
        <Title level={2} style={titleStyle} >회원정보수정</Title>

        <Form.Item label="이메일">
          <Popover placement="right" content='이메일은 변경할 수 없습니다.'>
            <span>{currentUser?.email}</span>
          </Popover>
        </Form.Item>
        {(confirmUserDone || confirmUserError === false)
          ? <Form.Item
            label="이름"
            name="userName"
            rules={formUserNameRules}
          >
            <Input prefix={<UserOutlined />} placeholder="name" />
          </Form.Item>
          : <Form.Item
            label="비밀번호"
            name="password"
            rules={formPasswordRules}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="password" />
          </Form.Item>}

        <Form.Item wrapperCol={formItemWrapperColStyle}>
          <Space>
            {(confirmUserDone || confirmUserError === false)
              ? <>
                <Button type="primary" htmlType="submit" loading={editUserLoading} disabled={editUserLoading}>
                  수정하기
                </Button>
                <Button loading={editUserLoading} disabled={editUserLoading} onClick={handleClickRef}>
                  사진변경
                </Button>
                <input accept='image/jpeg, image/png' type="file" hidden ref={inputOpenImageRef} onChange={handleImage} />
              </>
              : <Button type="primary" htmlType="submit" loading={confirmUserLoading} disabled={confirmUserLoading}>
                본인 확인
                </Button>}
            <Button onClick={handleCancel} >
              취소
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div >
  )
}

export default EditPage;