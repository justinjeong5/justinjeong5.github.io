import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, List, Typography, Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, GithubOutlined, LogoutOutlined } from '@ant-design/icons';
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
  const { blogPosts, skip, limit } = useSelector(state => state.blog);
  const { movieData } = useSelector(state => state.movie);
  const { chatRooms } = useSelector(state => state.chat);
  const { productData } = useSelector(state => state.jaymall);

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

  const getMovieData = () => {
    return movieData.slice(0, 2);
  }

  const getBlogPosts = () => {
    return blogPosts.slice(0, 3);
  }

  const getChatRooms = () => {
    return chatRooms.slice(0, 3);
  }

  const getProductData = () => {
    return productData.slice(0, 4);
  }

  const handleLogout = () => {
    dispatch({
      type: LOGOUT_USER_REQUEST
    })
  }

  const handlePageFrontRef = () => {
    landingPageFrontRef.scrollIntoView();
  }

  return (
    <div style={{ alignItems: 'center', maxWidth: '1000px', width: '80%', margin: 'auto', height: '100%', padding: '80px 0' }}>
      <div ref={node => (landingPageFrontRef = node)} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Title level={3} >
          <div style={{ display: 'flex' }}><GithubOutlined style={{ margin: 'auto', fontSize: '3rem' }} /></div>
          {currentUser.name
            ? `안녕하세요. ${currentUser.name}님!`
            : ''}</Title>
      </div>
      <div style={{ display: 'flex', marginTop: 100 }}>
        <div style={{ width: '100%' }}>
          <Title level={4}> <StyledLink to='/blog' onClick={handlePageFrontRef}>📝 블로그</StyledLink> </Title>
          <List
            itemLayout="horizontal"
            dataSource={getBlogPosts()}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.writer.image} />}
                  title={<StyledLink to={`/blog/post/${item._id}`}>{item.title}</StyledLink>}
                  description={
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p>{item.writer.name}</p>
                      <p style={{ marginRight: 10 }}>{moment(item.createdAt).fromNow()}</p>
                    </span>}
                />
              </List.Item>
            )}
          />
        </div>
        <div style={{ marginLeft: 'auto', paddingLeft: 20 }}>
          {currentUser.userId
            ? <Card
              style={{ width: 180 }}
              cover={
                <img
                  alt={currentUser.name}
                  src={currentUser.image}
                  style={{ borderRadius: 4, width: '100%' }}
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
            : ''}
        </div>
      </div>
      <div style={{ marginTop: 100 }}>
        <Title level={4}><StyledLink to='/movieTrend' onClick={handlePageFrontRef}>🍿 영화 트렌드</StyledLink></Title>
        <List
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
                    style={{ width: 55, height: 55 }}
                  />
                }
                title={<StyledLink to={`/movieTrend/movie/${item.id}`}>{item.title}</StyledLink>}
                description={item.original_title}
              />
              {item.overview}
            </List.Item>
          )}
        />
      </div>
      <div style={{ marginTop: 100 }}>
        <Title level={4}><StyledLink to='/talkative'>🤝 채팅방</StyledLink></Title>
        <div>
          <List
            itemLayout="horizontal"
            dataSource={getChatRooms()}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.writer.image} style={{ marginTop: 5 }} />}
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
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p>{item.description}</p>
                      <p style={{ marginRight: 10 }}>{moment(item.createdAt).fromNow()}</p>
                    </span>}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
      <div style={{ marginTop: 100 }}>
        <Title level={4}><StyledLink to='/jaymall' onClick={handlePageFrontRef}>🛍️ 제이몰</StyledLink></Title>
        <Row gutter={[10, 10]}>
          {getProductData().map(product => {
            return (<ProductCard key={uuidv4()} product={product} />)
          })}
        </Row>
      </div>
    </div>
  )
}

export default MainPage
