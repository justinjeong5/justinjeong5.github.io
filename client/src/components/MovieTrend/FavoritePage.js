import React, { useEffect, useRef } from 'react'
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

  const handleFavorite = (movie) => () => {
    dispatch({
      type: CHANGE_FAVORITE_REQUEST,
      payload: {
        movieId: movie.movieId,
        userFrom: currentUser._id,
      }
    })
  }

  const getFavoritedList = () => {
    return favoritedList.filter(item => {
      return item.movieId;
    })
  }

  return (
    <>
      <div style={{ position: 'relative', top: 80, width: '80%', margin: '1rem auto', minHeight: 'calc(100vh - 80px)' }}>
        <div ref={node => (movieDetailsPageFrontRef = node)} />
        <Title level={2}>내가 좋아하는 영화들</Title>
        <Divider />
        {(loadFavoritedListLoading || changeFavoriteLoading) &&
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80vw', height: 'calc(100vh - 300px)' }}>
            <LoadingOutlined style={{ fontSize: '10rem' }} />
          </div>
        }
        {loadFavoritedListDone &&
          <List
            itemLayout="vertical"
            size="large"
            dataSource={getFavoritedList()}
            style={{ marginBottom: 100 }}
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
                    style={{ borderRadius: 10, maxHeight: 240, height: 'auto', width: 'auto' }}
                    cover={<img
                      alt="moviePoster"
                      src={`${IMAGE_URL}/w500${item.moviePoster}`}
                      style={{ borderRadius: 10, maxHeight: 240, height: 'auto', width: 'auto' }}
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
    </>
  )
}

export default FavoritePage
