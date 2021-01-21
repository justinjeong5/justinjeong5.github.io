import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, useHistory, useParams } from 'react-router-dom'
import Youtube from 'react-youtube'
import { PageHeader, Tabs, Divider } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { LOAD_MOVIE_DETAIL_REQUEST, LOAD_MOVIE_TRAILER_REQUEST } from '../../reducers/types'
import MainImage from './Image/MainImage'
import MovieDescription from './Detail/MovieDescription'
import MovieCasting from './Detail/MovieCasting'
import MovieMaker from './Detail/MovieMaker'
import MovieReview from './Detail/MovieReview'
import MovieFavorite from './Favorite/MovieFavorite'

const { TabPane } = Tabs;

function MovieDetailPage() {

  let movieDetailsPageFrontRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const { movieId } = useParams();
  const { currentMovie, loadMovieDetailDone, loadMovieTrailerDone, loadMovieTrailerLoading } = useSelector(state => state.movie)

  useEffect(() => {
    movieDetailsPageFrontRef.scrollIntoView();
    dispatch({
      type: LOAD_MOVIE_DETAIL_REQUEST,
      payload: movieId
    })
  }, [dispatch, movieId])

  useEffect(() => {
    if (loadMovieDetailDone) {
      dispatch({
        type: LOAD_MOVIE_TRAILER_REQUEST,
        payload: movieId
      })
    }
  }, [dispatch, loadMovieDetailDone, movieId])

  const handleCancel = useCallback(() => {
    history.goBack(1)
  }, [])

  const renderPageHeader = useMemo(() => (<>
    <Divider />
    <Tabs defaultActiveKey="trailer">
      <TabPane tab="트레일러" key="trailer" >
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {loadMovieTrailerDone
            ? <Youtube videoId={currentMovie.trailer?.key} />
            : <LoadingOutlined style={{ fontSize: '5rem' }} />}
        </div>
      </TabPane>
      <TabPane tab="배우" key="casting" >
        <br />
        <MovieCasting />
      </TabPane>
      <TabPane tab="후기 및 평점" key="review"  >
        <br />
        <MovieReview />
      </TabPane>
      <TabPane tab="제작사" key="makers" >
        <br />
        <MovieMaker />
      </TabPane>
    </Tabs>
  </>), [currentMovie])

  const loadingWrapperDivStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: 'calc(100vh - 128px)' }), [])
  const loadingIconStyle = useMemo(() => ({ fontSize: '5rem' }), [])
  const pageHeaderWrapperStyle = useMemo(() => ({ width: '80%', margin: '1rem auto' }), [])

  return (
    <div>
      <div ref={node => (movieDetailsPageFrontRef = node)} />
      {loadMovieTrailerLoading && <div style={loadingWrapperDivStyle}>
        <LoadingOutlined style={loadingIconStyle} />
      </div>}
      {loadMovieTrailerDone && <>
        <MainImage movie={currentMovie} />
        <div style={pageHeaderWrapperStyle}>
          <PageHeader
            onBack={handleCancel}
            title={currentMovie.title}
            subTitle={currentMovie.original_title}
            footer={renderPageHeader}
            extra={[<MovieFavorite />]}
          >
            <Divider />
            <MovieDescription />
          </PageHeader>
        </div>
      </>}
    </div>
  )
}

export default withRouter(MovieDetailPage)
