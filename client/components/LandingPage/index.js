import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { Row, Col, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import UserCard from './UserCard';
import BlogSummary from './BlogSummary';

const { Title } = Typography;

function LandingPage() {

  const { currentUser } = useSelector(state => state.user);

  const componentWrapperStyle = useMemo(() => ({ width: '100%', marginBottom: 100 }), [])

  return (
    <Row >
      <Col md={24} lg={4} >
        {currentUser.userId && <UserCard />}
      </Col>
      <Col md={24} lg={16} >
        <div style={{ alignItems: 'center', maxWidth: '1000px', width: '80%', margin: 'auto', height: '100%', padding: '40px 0' }}>
          <div style={{ display: 'flex' }}><GithubOutlined style={{ margin: '50px auto', fontSize: '3rem' }} /></div>
          <div style={componentWrapperStyle}>
            <Title level={4}>📝 블로그</Title>
            <BlogSummary />
          </div>
        </div>
      </Col>
      <Col md={24} lg={4}>
        <div style={{ marginTop: 20 }}>
          <a href="https://slack.shinywaterjeong.com" target="_blank" rel="noreferrer noopener">💬 슬랙 바로가기</a>
        </div>
        <div>
          <a href="https://tweeter.shinywaterjeong.com" target="_blank" rel="noreferrer noopener">🐦 트위터 바로가기</a>
        </div>
        <div>
          <a href="#" target="_blank" rel="noreferrer noopener">🛍️ 제이몰 바로가기</a>
        </div>
      </Col>
    </Row>
  )
}

export default LandingPage
