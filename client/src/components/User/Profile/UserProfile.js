import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Card, Avatar, Button } from 'antd';
import { LOGOUT_USER_REQUEST } from '../../../reducers/types'

const { Meta } = Card;

function UserProfile() {

  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, tweets, followings, followers, logoutUserLoading } = useSelector(state => state.user)

  const cardStyle = useMemo(() => ({ maxWidth: 240, width: '20vw' }), [])

  const handleLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_USER_REQUEST
    })
  }, [])

  const handleFollowList = useCallback(() => {
    history.push('/tweeter/profile')
  }, [history])

  return (
    <Card
      style={cardStyle}
      cover={
        <img
          alt={currentUser.name}
          src={currentUser.image}
        />
      }
      actions={[
        <div key='tweet'>게시글<br />{tweets.length}</div>,
        <div key='followings' onClick={handleFollowList}>팔로윙<br />{followings.length}</div>,
        <div key='followers' onClick={handleFollowList}>팔로워<br />{followers.length}</div>,
      ]}
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
