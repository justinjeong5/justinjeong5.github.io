import React, { useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, } from 'antd'
import { LogoutOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'
import { v4 as uuidv4 } from 'uuid'
import { LOGOUT_USER_REQUEST } from '../../reducers/types'
import StyledLink from '../utils/StyledLink'

const { Meta } = Card;

function UserCard() {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user)

  const handleLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_USER_REQUEST
    })
  }, [])

  const userWrapperStyle = useMemo(() => ({ marginLeft: 'auto', paddingRight: 30 }), [])
  const userCardStyle = useMemo(() => ({ width: 180 }), [])
  const userCardImageStyle = useMemo(() => ({ borderRadius: 4, width: '100%' }), [])

  return (
    <div style={userWrapperStyle}>
      <Card
        style={userCardStyle}
        cover={
          <img
            alt={currentUser.name}
            src={currentUser.image}
            style={userCardImageStyle}
          />
        }
        actions={[
          <StyledLink key={uuidv4()} to='#'><LogoutOutlined onClick={handleLogout} /></StyledLink>,
          <StyledLink key={uuidv4()} to='/edit'><EditOutlined /></StyledLink>,
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
