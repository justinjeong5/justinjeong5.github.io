import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StyledLink from '../utils/StyledLink'
import { v4 as uuidv4 } from 'uuid'
import { List, Space, Avatar, Typography, Divider, Card } from 'antd'
import { StarOutlined, MessageOutlined, HeartTwoTone, LoadingOutlined } from '@ant-design/icons'
import { LOAD_FAVORITED_LIST_REQUEST, CHANGE_FAVORITE_REQUEST } from '../../reducers/types';
import { IMAGE_URL } from '../../config/key'

const { Title } = Typography;

const IconText = ({ icon, text }) => (
  <Space>
    {icon}
    {text}
  </Space>
);


function FavoritePage() {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user)
  const { favoritedList, loadFavoritedListLoading, loadFavoritedListDone,
    changeFavoriteDone, changeFavoriteLoading } = useSelector(state => state.favorite)
  let movieDetailsPageFrontRef = useRef();

  useEffect(() => {
    if (movieDetailsPageFrontRef) {
      movieDetailsPageFrontRef.scrollIntoView();
    }
    if (currentUser || changeFavoriteDone) {
      dispatch({
        type: LOAD_FAVORITED_LIST_REQUEST,
        payload: {
          userFrom: currentUser._id,
        }
      })
    }
  }, [dispatch, currentUser, changeFavoriteDone])

  const handleFavorite = useCallback((movie) => () => {
    dispatch({
      type: CHANGE_FAVORITE_REQUEST,
      payload: {
        movieId: movie.movieId,
        userFrom: currentUser._id,
      }
    })
  }, [currentUser])

  const getFavoritedList = useMemo(() => (
    favoritedList.filter(item => {
      return item.movieId;
    })
  ), [favoritedList])
  const rootDivStyle = useMemo(() => ({ position: 'relative', top: 80, width: '80%', margin: '1rem auto', minHeight: 'calc(100vh - 80px)' }), [])
  const loadingWrapperDivStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80vw', height: 'calc(100vh - 300px)' }), [])
  const loadingIconStyle = useMemo(() => ({ fontSize: '10rem' }), [])
  const listStyle = useMemo(() => ({ marginBottom: 100 }), [])
  const cardStyle = useMemo(() => ({ borderRadius: 10, maxHeight: 240, height: 'auto', width: 'auto' }), [])

  return (
    <div style={rootDivStyle}>
      <div ref={node => (movieDetailsPageFrontRef = node)} />
      <Title level={2}>내가 좋아하는 영화들</Title>
      <Divider />
      {(loadFavoritedListLoading || changeFavoriteLoading) &&
        <div style={loadingWrapperDivStyle}>
          <LoadingOutlined style={loadingIconStyle} />
        </div>
      }
      {loadFavoritedListDone &&
        <List
          itemLayout="vertical"
          size="large"
          dataSource={getFavoritedList()}
          style={listStyle}
          renderItem={item => (
            <List.Item
              key={uuidv4()}
              actions={[
                <IconText icon={<StarOutlined />} text={item.movieRate} key="movieRate" />,
                <IconText icon={<HeartTwoTone twoToneColor="#eb2f96" onClick={handleFavorite(item)} />} text="56" key="movieFavorite" />,
                <IconText icon={<MessageOutlined />} text="2" key="movieComment" />,
              ]}
              extra={
                <Card
                  key={uuidv4()}
                  hoverable
                  style={cardStyle}
                  cover={<img
                    alt="moviePoster"
                    src={`${IMAGE_URL}/w500${item.moviePoster}`}
                    style={cardStyle}
                  />} />
              }
            >
              <StyledLink to={`/movieTrend/movie/${item.movieId}`}>
                <List.Item.Meta
                  key={uuidv4()}
                  avatar={<Avatar size='large' src={`${IMAGE_URL}/w500${item.movieImage}`} />}
                  title={item.movieTitle}
                  description={item.movieOriginalTitle}
                />
              </StyledLink>
              {item.movieDescription}
            </List.Item >
          )}
        />}
    </div>
  )
}

export default FavoritePage
