import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import TweeterLayout from './TweeterLayout'
import FollowList from '../User/Profile/FollowList'

function TweeterProfile() {

  const history = useHistory();
  const { followers, followings } = useSelector(state => state.user)

  return (
    <TweeterLayout>
      <FollowList header='나를 팔로우 하는 사람' data={followers} />
      <FollowList header='내가 팔로우 하는 사람' data={followings} />
      <Button type='primary' onClick={() => history.goBack(1)}>뒤로가기</Button>
    </TweeterLayout>
  )
}

export default TweeterProfile
