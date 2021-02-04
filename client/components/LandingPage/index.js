import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link'
import { Typography } from 'antd';
import { GithubOutlined, LoadingOutlined } from '@ant-design/icons';

import UserCard from './UserCard';
import BlogSummary from './BlogSummary';
import JaymallSummary from './JaymallSummary';

const { Title } = Typography;

function LandingPage() {

  const { currentUser } = useSelector(state => state.user);
  const { loadBlogPostsLoading } = useSelector(state => state.blog);
  const { loadProductsLoading } = useSelector(state => state.jaymall);

  const componentWrapperStyle = useMemo(() => ({ width: '100%', marginBottom: 100 }), [])
  const renderLoading = useMemo(() => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <LoadingOutlined style={{ fontSize: '3rem' }} />
    </div>
  ), [])

  return (
    <div style={{ alignItems: 'center', maxWidth: '1000px', width: '80%', margin: 'auto', height: '100%', padding: '80px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0 100px 0' }}>
        <Title level={3} >
          <div style={{ display: 'flex' }}><GithubOutlined style={{ margin: 'auto', fontSize: '3rem' }} /></div>
          {currentUser.name ? `안녕하세요. ${currentUser.name}님!` : null}
        </Title>
      </div>
      <div style={{ display: 'flex' }}>
        {currentUser.userId ? <UserCard /> : null}
        <div style={componentWrapperStyle}>
          <Title level={4}><Link href='/blog'><a>📝 블로그</a></Link></Title>
          {loadBlogPostsLoading ? renderLoading : <BlogSummary />}
        </div>
      </div>
      <div style={componentWrapperStyle}>
        <Title level={4}><Link href='/jaymall'><a>🛍️ 제이몰</a></Link></Title>
        {loadProductsLoading ? renderLoading : <JaymallSummary />}
      </div>
      <div style={componentWrapperStyle}>
        <Title level={4}>🐦 트위터</Title>
        <a href="https://tweeter.shinywaterjeong.com" target="_blank" rel="noreferrer noopener">트위터 바로가기</a>
      </div>
    </div>
  )
}

export default LandingPage
