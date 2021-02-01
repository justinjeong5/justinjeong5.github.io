import React, { useCallback, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux';
import { Typography } from 'antd';
import { GithubOutlined, LoadingOutlined } from '@ant-design/icons';
import Link from 'next/head'

import UserCard from './UserCard';
import BlogSummary from './BlogSummary';
import MovieSummary from './MovieSummary';
import ChatSummary from './ChatSummary';
import JaymallSummary from './JaymallSummary';

const { Title } = Typography;

function MainPage() {

  let landingPageFrontRef = useRef();
  const { currentUser } = useSelector(state => state.user);
  const { loadBlogPostsLoading } = useSelector(state => state.blog);
  const { loadMoviesLoading } = useSelector(state => state.movie);
  const { loadChatRoomsLoading } = useSelector(state => state.chat);
  const { loadProductsLoading } = useSelector(state => state.jaymall);

  const rootDivStyle = useMemo(() => ({ alignItems: 'center', maxWidth: '1000px', width: '80%', margin: 'auto', height: '100%', padding: '80px 0' }), [])
  const titleDivWrapperStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', margin: '50px 0 100px 0' }), [])
  const contentWrapperStyle = useMemo(() => ({ display: 'flex' }), [])
  const githubIconStyle = useMemo(() => ({ margin: 'auto', fontSize: '3rem' }), [])
  const componentWrapperStyle = useMemo(() => ({ width: '100%', marginBottom: 100 }), [])

  const renderLoading = useMemo(() => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <LoadingOutlined style={{ fontSize: '3rem' }} />
    </div>
  ), [])

  return (
    <div style={rootDivStyle}>
      <div ref={node => (landingPageFrontRef = node)} />
      <div style={titleDivWrapperStyle}>
        <Title level={3} >
          <div style={contentWrapperStyle}><GithubOutlined style={githubIconStyle} /></div>
          {currentUser.name ? `안녕하세요. ${currentUser.name}님!` : null}
        </Title>
      </div>
      <div style={contentWrapperStyle}>
        {currentUser.userId ? <UserCard /> : null}
        <div style={componentWrapperStyle}>
          <Title level={4}> <Link to='/blog'><a>📝 블로그</a></Link> </Title>
          {loadBlogPostsLoading ? renderLoading : <BlogSummary />}
        </div>
      </div>
      <div style={componentWrapperStyle}>
        <Title level={4}><Link to='/movieTrend'><a>🍿 영화 트렌드</a></Link></Title>
        {loadMoviesLoading ? renderLoading : <MovieSummary />}
      </div>
      <div style={componentWrapperStyle}>
        <Title level={4}><Link to='/talkative'><a>🤝 채팅방</a></Link></Title>
        {loadChatRoomsLoading ? renderLoading : <ChatSummary />}
      </div>
      <div style={componentWrapperStyle}>
        <Title level={4}><Link to='/jaymall'><a>🛍️ 제이몰</a></Link></Title>
        {loadProductsLoading ? renderLoading : <JaymallSummary />}
      </div>
      <div style={componentWrapperStyle}>
        <Title level={4}>🐦 트위터</Title>
        <a href="https://tweeter.shinywaterjeong.com" target="_blank" rel="noreferrer noopener">트위터 바로가기</a>
      </div>
    </div>
  )
}

export default MainPage
