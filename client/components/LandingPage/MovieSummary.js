import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import { List, Avatar } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { LOAD_MOVIES_REQUEST } from '../../reducers/types';
import { IMAGE_URL } from '../../config/key';

function MovieSummary() {

  const dispatch = useDispatch();
  const { movieData } = useSelector(state => state.movie);

  useEffect(() => {
    if (movieData.length === 0) {
      dispatch({
        type: LOAD_MOVIES_REQUEST,
        payload: 1
      })
    }
  }, [movieData])

  const getMovieData = useCallback(() => {
    return movieData.slice(0, 2);
  }, [movieData])

  const movieAvatarStyle = useMemo(() => ({ width: 55, height: 55 }), [])

  return (
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
                style={movieAvatarStyle}
              />
            }
            title={<Link href={`/movieTrend/movie/${item.id}`}><a>{item.title}</a></Link>}
            description={item.original_title}
          />
          {item.overview}
        </List.Item>
      )}
    />
  )
}

export default MovieSummary
