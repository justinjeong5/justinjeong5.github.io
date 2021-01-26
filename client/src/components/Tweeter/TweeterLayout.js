import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import NavBar from '../Header/NavBar'
import UserProfile from '../User/Profile/UserProfile'

function TweeterLayout({ children }) {

  const { currentUser } = useSelector(state => state.user)
  const rootDivWrapperStyle = useMemo(() => ({ marginTop: 48 }), [])

  return (
    <div style={rootDivWrapperStyle}>
      <NavBar />
      <Row gutter={[10, 10]}>
        <Col xs={24} md={6}>
          {currentUser.userId ? <UserProfile /> : <div style={{ position: 'fixed', top: 48, padding: 5 }}>로그인이 필요한 서비스입니다.</div>}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </div>
  )
}

TweeterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TweeterLayout
