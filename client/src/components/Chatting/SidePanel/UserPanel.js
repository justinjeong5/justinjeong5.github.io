import React from 'react'
import { useSelector } from 'react-redux';
import { Card, Avatar, Typography } from 'antd'
import { SoundOutlined, CaretDownOutlined } from '@ant-design/icons'
const { Title } = Typography;

function UserPanel() {

  const { currentUser } = useSelector(state => state.user);

  return (
    <div>
      <Title level={3} style={{ color: 'white' }}>
        <SoundOutlined />{' '}Talk-A-Tive
        </Title>
      <div style={{ display: 'flex', marginBottom: -15 }}>
        <Card style={{ backgroundColor: '#415972', border: 'none', padding: 0 }}>
          <Card.Meta
            avatar={<Avatar style={{ marginTop: -4, marginRight: -12 }} src={currentUser?.image} />}
            title={<p style={{ color: 'white' }}>{currentUser?.name}</p>} />
        </Card>
        <CaretDownOutlined style={{ zIndex: 1, marginTop: 27, marginLeft: -17 }} />
      </div>
    </div>
  )
}

export default UserPanel
