import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { AUTHENTICATE_USER_REQUEST } from '../reducers/types'
import { message } from 'antd'

export default function Auth(SpecificComponent, option, adminRoute = null) {

  const history = useHistory();

  // option 설명 => [null, true, false] = [로그인과 관계 없이 아무나, 로그인 한 유저만, 로그인 안한 유저만]
  // adminRoute 설명 => [null, true] = [어드민과 관계 없이 아무나, 어드민 한 유저만] , 참고로 false는 거의 있기 힘들다.

  function AuthenticationCheck() {

    const dispatch = useDispatch();
    const { currentUser, authenticateUserDone, logoutUserLoading } = useSelector(state => state.user)

    useEffect(() => {
      dispatch({
        type: AUTHENTICATE_USER_REQUEST
      })
    }, [dispatch])

    useEffect(() => {
      if (logoutUserLoading) {
        return;
      }
      if (option === null) {
        // 로그인 여부와 관계없이 접근 가능한 페이지
        return;
      }
      if (authenticateUserDone && currentUser) {
        if (currentUser.isAuth) {
          if (!option) {
            // 로그인이 된 사용자 && 로그인을 안한 사용자만 사용하는 페이지
            return history.push('/')
          }
          if (!currentUser.isAdmin) {
            if (adminRoute) {
              // 어드민이 아닌 사용자 && 어드민 권한이 필요한 페이지
              message.warning('관리자 사용자만 접근할 수 있습니다.')
              history.push('/')
            }
          }
        } else {
          if (option) {
            // 로그인 하지 않은 사용자 && 로그인이 필요한 페이지
            history.push('/login')
          }
        }
      }
    }, [currentUser, authenticateUserDone, logoutUserLoading])

    return (
      <SpecificComponent />
    );
  }

  return AuthenticationCheck;
}