import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, List, Typography, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, GithubOutlined, LogoutOutlined, LoadingOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid'
import { LOAD_BLOG_POSTS_REQUEST, LOAD_CHAT_ROOMS_REQUEST, LOAD_MOVIES_REQUEST, LOAD_PRODUCTS_REQUEST, LOGOUT_USER_REQUEST, SET_CURRENT_CHAT_ROOM } from '../../reducers/types';
import StyledLink from '../utils/StyledLink';
import { IMAGE_URL } from '../../config/key';
import moment from 'moment'
import ProductCard from '../Jaymall/Product/ProductCard';

const { Meta } = Card;
const { Title } = Typography;

function MainPage() {

  let landingPageFrontRef = useRef();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);
  const { blogPosts, loadBlogPostsLoading, skip, limit } = useSelector(state => state.blog);
  const { movieData, loadMoviesLoading } = useSelector(state => state.movie);
  const { chatRooms, loadChatRoomsLoading } = useSelector(state => state.chat);
  const { productData, loadProductsLoading } = useSelector(state => state.jaymall);

  useEffect(() => {
    if (blogPosts.length === 0) {
      dispatch({
        type: LOAD_BLOG_POSTS_REQUEST,
        payload: { limit, skip }
      })
    }
    if (movieData.length === 0) {
      dispatch({
        type: LOAD_MOVIES_REQUEST,
        payload: 1
      })
    }
    if (chatRooms.length === 0) {
      dispatch({
        type: LOAD_CHAT_ROOMS_REQUEST
      })
    }
    if (productData.length === 0) {
      dispatch({
        type: LOAD_PRODUCTS_REQUEST
      })
    }
  }, [])

  const getMovieData = useCallback(() => {
    return movieData.slice(0, 2);
  }, [movieData])

  const getBlogPosts = useCallback(() => {
    return blogPosts.slice(0, 3);
  }, [blogPosts])

  const getChatRooms = useCallback(() => {
    return chatRooms.slice(0, 3);
  }, [chatRooms])

  const getProductData = useCallback(() => {
    return productData.slice(0, 4);
  }, [productData])

  const handleLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_USER_REQUEST
    })
  }, [])

  const handlePageFrontRef = useCallback(() => {
    landingPageFrontRef.scrollIntoView();
  }, [landingPageFrontRef])

  const rootDivStyle = useMemo(() => ({ alignItems: 'center', maxWidth: '1000px', width: '80%', margin: 'auto', height: '100%', padding: '80px 0' }), [])
  const titleDivWrapperStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center' }), [])
  const githubIconWrapperStyle = useMemo(() => ({ display: 'flex' }), [])
  const githubIconStyle = useMemo(() => ({ margin: 'auto', fontSize: '3rem' }), [])
  const contentWrapperStyle = useMemo(() => ({ display: 'flex', marginTop: 100 }), [])
  const blogWrapperStyle = useMemo(() => ({ width: '100%' }), [])
  const blogListItemDescriptionStyle = useMemo(() => ({ display: 'flex', justifyContent: 'space-between' }), [])
  const blogListItemTimeStyle = useMemo(() => ({ marginRight: 10 }), [])
  const userWrapperStyle = useMemo(() => ({ marginLeft: 'auto', paddingRight: 30 }), [])
  const userCardStyle = useMemo(() => ({ width: 180 }), [])
  const userCardImageStyle = useMemo(() => ({ borderRadius: 4, width: '100%' }), [])
  const movieWrapperStyle = useMemo(() => ({ marginTop: 100 }), [])
  const movieAvatarStyle = useMemo(() => ({ width: 55, height: 55 }), [])
  const chatWrapperStyle = useMemo(() => ({ marginTop: 100 }), [])
  const chatAvatarStyle = useMemo(() => ({ marginTop: 5 }), [])
  const chatListItemDescriptionStyle = useMemo(() => ({ display: 'flex', justifyContent: 'space-between' }), [])
  const chatListItemTimeStyle = useMemo(() => ({ marginRight: 10 }), [])
  const jaymallWrapperStyle = useMemo(() => ({ marginTop: 100 }), [])
  const loadingWrapperDivStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center' }), [])
  const loadingIconStyle = useMemo(() => ({ fontSize: '3rem' }), [])

  const renderLoading = useMemo(() => (
    <div style={loadingWrapperDivStyle}>
      <LoadingOutlined style={loadingIconStyle} />
    </div>
  ), [])

  return (
    <div style={rootDivStyle}>
      <div ref={node => (landingPageFrontRef = node)} />
      <div style={titleDivWrapperStyle}>
        <Title level={3} >
          <div style={githubIconWrapperStyle}><GithubOutlined style={githubIconStyle} /></div>
          {currentUser.name
            ? `안녕하세요. ${currentUser.name}님!`
            : ''}</Title>
      </div>
      <div style={contentWrapperStyle}>
        {currentUser.userId
          ? <div style={userWrapperStyle}>
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
          : ''}
        <div style={blogWrapperStyle}>
          <Title level={4}> <StyledLink to='/blog' onClick={handlePageFrontRef}>📝 블로그</StyledLink> </Title>
          {loadBlogPostsLoading
            ? renderLoading
            : <List
              itemLayout="horizontal"
              dataSource={getBlogPosts()}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.writer.image} />}
                    title={<StyledLink to={`/blog/post/${item._id}`}>{item.title}</StyledLink>}
                    description={
                      <span style={blogListItemDescriptionStyle}>
                        <p>{item.writer.name}</p>
                        <p style={blogListItemTimeStyle}>{moment(item.createdAt).fromNow()}</p>
                      </span>}
                  />
                </List.Item>
              )}
            />
          }
        </div>

      </div>
      <div style={movieWrapperStyle}>
        <Title level={4}><StyledLink to='/movieTrend' onClick={handlePageFrontRef}>🍿 영화 트렌드</StyledLink></Title>
        {loadMoviesLoading
          ? renderLoading
          : <List
            itemLayout="vertical"
            dataSource={getMovieData()}
            renderItem={item => (
              <List.Item
                key={uuidv4()}
                extra={
                  <img
                    width={180}
                    alt={item.title}
                    src={`${IMAGE_URL}/w500${item.poster_path}`}
                  />
                }
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`${IMAGE_URL}/w500${item.backdrop_path}`}
                      style={movieAvatarStyle}
                    />
                  }
                  title={<StyledLink to={`/movieTrend/movie/${item.id}`}>{item.title}</StyledLink>}
                  description={item.original_title}
                />
                {item.overview}
              </List.Item>
            )}
          />
        }
      </div>
      <div style={chatWrapperStyle}>
        <Title level={4}><StyledLink to='/talkative'>🤝 채팅방</StyledLink></Title>
        {loadChatRoomsLoading
          ? renderLoading
          : <List
            itemLayout="horizontal"
            dataSource={getChatRooms()}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.writer.image} style={chatAvatarStyle} />}
                  title={
                    <StyledLink to={`/talkative`} onClick={() => {
                      setTimeout(() => {
                        dispatch({
                          type: SET_CURRENT_CHAT_ROOM,
                          payload: item._id
                        })
                      }, 500)
                    }}>
                      {item.title}
                    </StyledLink>
                  }
                  description={
                    <span style={chatListItemDescriptionStyle}>
                      <p>{item.description}</p>
                      <p style={chatListItemTimeStyle}>{moment(item.createdAt).fromNow()}</p>
                    </span>}
                />
              </List.Item>
            )}
          />
        }
      </div>
      <div style={jaymallWrapperStyle}>
        <Title level={4}><StyledLink to='/jaymall' onClick={handlePageFrontRef}>🛍️ 제이몰</StyledLink></Title>
        {loadProductsLoading
          ? renderLoading
          : <Row gutter={[10, 10]}>
            {getProductData().map(product => {
              return (<ProductCard key={uuidv4()} product={product} />)
            })}
          </Row>
        }
      </div>
    </div>
  )
}

export default MainPage
