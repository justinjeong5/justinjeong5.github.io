import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import Router from 'next/router'
import { v4 as uuidv4 } from 'uuid'
import { Card } from 'antd'
import { LogoutOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'
import { LOGOUT_USER_REQUEST } from '../../reducers/types'

const { Meta } = Card;

function UserCard() {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user)

  const handleLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_USER_REQUEST
    })
    Router.push('/')
  }, [])

  return (
    <div style={{ marginLeft: 'auto', paddingRight: 30 }}>
      <Card
        style={{ width: 180 }}
        cover={
          <img
            alt={currentUser.name}
            src={currentUser.image}
            style={{ borderRadius: 4, width: '100%' }}
          />
        }
        actions={[
          <LogoutOutlined onClick={handleLogout} />,
          <Link key={uuidv4()} href='/edit'><a><EditOutlined /></a></Link>,
          <EllipsisOutlined key={uuidv4()} />,
        ]}
      >
        <Meta
          title={currentUser.name}
          description={currentUser.email}
        />
      </Card>
    </div>
  )
}

export default UserCard
