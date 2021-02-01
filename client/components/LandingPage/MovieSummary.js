import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link'
import { List, Avatar } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { IMAGE_URL } from '../../config/key';

function MovieSummary() {

  const { movieData } = useSelector(state => state.movie);

  const getMovieData = useCallback(() => {
    return movieData.slice(0, 2);
  }, [movieData])

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
                style={{ width: 55, height: 55 }}
              />
            }
            title={<Link href={`/movieTrend/${item.id}`}><a>{item.title}</a></Link>}
            description={item.original_title}
          />
          {item.overview}
        </List.Item>
      )}
    />
  )
}

export default MovieSummary
