import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, withRouter } from 'react-router-dom'
import { Menu, message as Message } from 'antd';
import { LogoutOutlined, LoginOutlined, UserAddOutlined, UserOutlined, LoadingOutlined } from '@ant-design/icons'
import { LOGOUT_USER_REQUEST, LOGOUT_CHAT_USER_REQUEST } from '../../../reducers/types';
import { routerPathList } from '../../utils/RouterPathList'

function RightMenu(props) {

  const dispatch = useDispatch();
  const { currentUser, logoutUserLoading, logoutUserDone, logoutUserError, message } = useSelector(state => state.user)
  const { currentChatUser, logoutChatUserLoading, logoutChatUserDone, logoutChatUserError, messageFromChat } = useSelector(state => state.chat)
  const [prevLocation, setPrevLocation] = useState('/')
  const currentLocation = useLocation();

  useEffect(() => {
    const router = routerPathList.filter((path) => {
      return currentLocation.pathname.includes(path)
    })[0]
    setPrevLocation(router);
  }, [currentLocation])

  useEffect(() => {
    if (logoutUserError) {
      Message.error({ content: message, duration: 2 });
    }
    if (logoutChatUserError) {
      Message.error({ content: messageFromChat, duration: 2 });
    }
  }, [logoutUserError, message, logoutChatUserError, messageFromChat])

  useEffect(() => {
    if (logoutUserDone && logoutChatUserDone)
      if (prevLocation === '/talkative') {
        props.history.push('/');
      } else {
        props.history.push(prevLocation);
      }
  }, [logoutUserDone, logoutChatUserDone, props.history])

  const handleLogout = () => {
    dispatch({
      type: LOGOUT_USER_REQUEST
    })
    dispatch({
      type: LOGOUT_CHAT_USER_REQUEST
    })
  }

  return (
    <>
      { (logoutUserLoading || logoutChatUserLoading) &&
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: 'calc(100vh - 80px)' }}>
          <LoadingOutlined style={{ fontSize: '10rem' }} />
        </div>
      }
      {currentUser?.isAuth || currentChatUser
        ? <Menu mode={props.mode}>
          <Menu.Item key="logout"
            onClick={handleLogout} >
            <Link to='#'><LogoutOutlined />{props.mode === 'inline' ? '로그아웃' : ''}</Link>
          </Menu.Item >
          <Menu.Item key="edit" >
            <Link to='/edit'><UserOutlined />{props.mode === 'inline' ? '정보수정' : ''}</Link>
          </Menu.Item>
        </Menu >
        : <Menu mode={props.mode}>
          <Menu.Item key="login" >
            <Link to='/login'><LoginOutlined />{props.mode === 'inline' ? '로그인' : ''}</Link>
          </Menu.Item>
          <Menu.Item key="register" >
            <Link to='/register'><UserAddOutlined />{props.mode === 'inline' ? '회원가입' : ''}</Link>
          </Menu.Item>
        </Menu>
      }
    </>
  );

}
export default withRouter(RightMenu);
