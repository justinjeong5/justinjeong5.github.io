import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { Typography, Row, Col, Card, Divider } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { v4 as uuidv4 } from 'uuid'

import { LOAD_MOVIES_REQUEST } from '../../reducers/types';
import { IMAGE_URL } from '../../config/key'
import MainImage from './Image/MainImage';

const { Title } = Typography

function MoviePage() {

  const dispatch = useDispatch();
  const { movieData, pageNumber, loadMoviesLoading } = useSelector(state => state.movie)

  useEffect(() => {
    dispatch({
      type: LOAD_MOVIES_REQUEST,
      payload: pageNumber
    })
  }, [dispatch])

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (!loadMoviesLoading && pageNumber < 100) {
          dispatch({
            type: LOAD_MOVIES_REQUEST,
            payload: pageNumber,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [dispatch, loadMoviesLoading, pageNumber]);

  const renderMovieCard = useMemo(() => (movieData?.map((movie) => {
    return (
      <Col xl={4} lg={6} md={8} sm={12} xs={24} key={uuidv4()}>
        <Link href={`/movieTrend/movie/${movie.id}`}>
          <a><Card
            hoverable
            cover={<img alt={movie.title} src={`${IMAGE_URL}/w500${movie.poster_path}`} />}
          >
            <Card.Meta title={movie.title} description={movie.overview ? `${movie.overview.slice(0, 30)}...` : '(내용 요약 없음)'} />
          </Card>
          </a>
        </Link>
      </Col >
    )
  })), [movieData]);

  const loadingWrapperDivStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }), [])
  const loadingIconStyle = useMemo(() => ({ fontSize: '10rem' }), [])
  const titleDivWrapperStyle = useMemo(() => ({ width: '85%', margin: '1rem auto' }), [])


  return (
    <div>
      {loadMoviesLoading &&
        <div style={loadingWrapperDivStyle}>
          <LoadingOutlined style={loadingIconStyle} />
        </div>}
      <MainImage movie={movieData[0]} />
      <Divider />
      <div style={titleDivWrapperStyle}>
        <Title level={2} >오늘의 영화</Title>
        <Row gutter={[16, 16]}>
          {renderMovieCard}
        </Row>
      </div>
    </div>
  )
}

export default MoviePage;
