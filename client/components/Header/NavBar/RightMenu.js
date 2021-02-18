import React, { useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import Link from '../../utils/Link'
import PropTypes from 'prop-types'
import { Menu, message as Message } from 'antd';
import { LogoutOutlined, LoginOutlined, UserAddOutlined, UserOutlined, LoadingOutlined } from '@ant-design/icons'
import { LOGOUT_USER_REQUEST } from '../../../reducers/types';

const { Item } = Menu;

function RightMenu(props) {

  const dispatch = useDispatch();
  const { currentUser, logoutUserLoading, logoutUserDone, logoutUserError, message } = useSelector(state => state.user)

  useEffect(() => {
    if (logoutUserError) {
      Message.error({ content: message, duration: 2 });
    }
  }, [logoutUserError, message])

  useEffect(() => {
    if (logoutUserDone) {
      Router.push('/');
    }
  }, [logoutUserDone])

  const handleLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_USER_REQUEST
    })
  }, [])

  const loadingStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: 'calc(100vh - 80px)' }), [])
  const loadingIconStyle = useMemo(() => ({ fontSize: '10rem' }), [])

  return (
    <>
      {logoutUserLoading &&
        <div style={loadingStyle}>
          <LoadingOutlined style={loadingIconStyle} />
        </div>
      }
      {currentUser?.isAuth
        ? <Menu mode={props.mode}>
          <Item key="logout"
            onClick={handleLogout} >
            <Link href='/'><a><LogoutOutlined />{props.mode === 'inline' ? '로그아웃' : ''}</a></Link>
          </Item >
          <Item key="edit" >
            <Link href='/edit'><a><UserOutlined />{props.mode === 'inline' ? '정보수정' : ''}</a></Link>
          </Item>
        </Menu >
        : <Menu mode={props.mode}>
          <Item key="login" >
            <Link href='/login'><a><LoginOutlined />{props.mode === 'inline' ? '로그인' : ''}</a></Link>
          </Item>
          <Item key="register" >
            <Link href='/register'><a><UserAddOutlined />{props.mode === 'inline' ? '회원가입' : ''}</a></Link>
          </Item>
        </Menu>
      }
    </>
  );
}

RightMenu.propTypes = {
  mode: PropTypes.string.isRequired
}

export default RightMenu;
