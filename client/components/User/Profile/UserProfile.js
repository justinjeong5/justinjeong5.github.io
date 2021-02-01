import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Avatar, Button } from 'antd';
import { LOGOUT_USER_REQUEST } from '../../../reducers/types'

const { Meta } = Card;

function UserProfile() {

  const dispatch = useDispatch();
  const { currentUser, logoutUserLoading } = useSelector(state => state.user)

  const cardStyle = useMemo(() => ({ maxWidth: 240, width: '20vw' }), [])

  const handleLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_USER_REQUEST
    })
  }, [])

  return (
    <Card
      style={cardStyle}
      cover={
        <img
          alt={currentUser.name}
          src={currentUser.image}
        />
      }
    >
      <Meta
        avatar={<Avatar>{currentUser.name[0]}</Avatar>}
        title={currentUser.name}
      />
      <Button onClick={handleLogout} disabled={logoutUserLoading} loading={logoutUserLoading}>로그아웃</Button>
    </Card>
  )
}

export default UserProfile
