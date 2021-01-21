import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { Card, Avatar, Typography } from 'antd'
import { SoundOutlined, CaretDownOutlined } from '@ant-design/icons'
const { Title } = Typography;

function UserPanel() {

  const { currentUser } = useSelector(state => state.user);

  const titleStyle = useMemo(() => ({ color: 'white' }), [])
  const cardWrapperDivStyle = useMemo(() => ({ display: 'flex', marginBottom: -15 }), [])
  const cardStyle = useMemo(() => ({ backgroundColor: '#415972', border: 'none', padding: 0 }), [])
  const avatarStyle = useMemo(() => ({ marginTop: -4, marginRight: -12 }), [])
  const nameStyle = useMemo(() => ({ color: 'white' }), [])
  const caretIconStyle = useMemo(() => ({ zIndex: 1, marginTop: 27, marginLeft: -17 }), [])
  const noUserTitleStyle = useMemo(() => ({ color: 'gray' }), [])


  return (
    <div>
      <Title level={3} style={titleStyle}>
        <SoundOutlined />{' '}Talk-A-Tive
      </Title>

      {currentUser.isAuth
        ? <div style={cardWrapperDivStyle}>
          <Card style={cardStyle}>
            <Card.Meta
              avatar={<Avatar style={avatarStyle} src={currentUser?.image} />}
              title={<p style={nameStyle}>{currentUser?.name}</p>} />
          </Card>
          <CaretDownOutlined style={caretIconStyle} />
        </div>
        : <Title level={5} style={noUserTitleStyle}>로그인이 필요한 서비스입니다.</Title>}
    </div>
  )
}

export default UserPanel
