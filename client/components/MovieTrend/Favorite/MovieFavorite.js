import React, { useMemo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tag } from 'antd'
import { HeartTwoTone, HeartOutlined, LoadingOutlined } from '@ant-design/icons'
import {
  LOAD_FAVORITE_NUMBER_REQUEST, CHANGE_FAVORITE_REQUEST, LOAD_FAVORITED_REQUEST
} from '../../../reducers/types';

function MovieFavorite() {

  const dispatch = useDispatch();
  const { isFavorited, favoriteNumber, loadIsFavoritedDone,
    loadFavoriteNumberLoading, loadFavoriteNumberDone } = useSelector(state => state.favorite)
  const { currentMovie } = useSelector(state => state.movie)
  const { currentUser } = useSelector(state => state.user)

  useEffect(() => {
    if (currentUser.isAuth && currentMovie) {
      dispatch({
        type: LOAD_FAVORITED_REQUEST,
        payload: {
          userFrom: currentUser._id,
          movieId: currentMovie.id,
        }
      })
    }
    if (currentMovie) {
      dispatch({
        type: LOAD_FAVORITE_NUMBER_REQUEST,
        payload: {
          movieId: currentMovie.id
        }
      })
    }
  }, [dispatch, currentUser, currentMovie, isFavorited])

  const handleFavorite = useCallback(() => {
    dispatch({
      type: CHANGE_FAVORITE_REQUEST,
      payload: {
        userFrom: currentUser._id,
        movieId: currentMovie.id,
        movieTitle: currentMovie.title,
        movieOriginalTitle: currentMovie.original_title,
        movieRate: currentMovie.vote_average,
        movieRuntime: currentMovie.runtime,
        movieReleased: currentMovie.release_date,
        moviePoster: currentMovie.poster_path,
        movieImage: currentMovie.backdrop_path,
        movieGenre: currentMovie.genres,
        movieDescription: currentMovie.overview,
      }
    })
  }, [currentUser, currentMovie])

  const favoriteStyle = useMemo(() => ({ color: 'gray' }), [])

  return (
    <div>
      {loadFavoriteNumberLoading && <LoadingOutlined />}
      {loadFavoriteNumberDone &&
        <Tag icon={loadIsFavoritedDone &&
          currentUser.isAuth ? (isFavorited
            ? <HeartTwoTone twoToneColor="#eb2f96" onClick={handleFavorite} />
            : <HeartOutlined onClick={handleFavorite} />)
          : <span style={favoriteStyle}>로그인해주세요(좋아요 개수) </span>
        }>
          {favoriteNumber}
        </Tag>
      }
    </div >
  )
}

export default MovieFavorite
