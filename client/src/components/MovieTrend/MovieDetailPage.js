import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Youtube from 'react-youtube'
import { PageHeader, Tabs, Divider } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { LOAD_MOVIE_DETAIL_REQUEST, LOAD_MOVIE_TRAILER_REQUEST } from '../../reducers/types'
import MainImage from './Image/MainImage'
import MovieDescription from './Detail/MovieDescription'
import MovieCasting from './Detail/MovieCasting'
import MovieMaker from './Detail/MovieMaker'
import MovieReview from './Detail/MovieReview'

const { TabPane } = Tabs;

function MovieDetailPage(props) {

  let movieDetailsPageFrontRef = React.createRef();
  const dispatch = useDispatch();
  const { currentMovie, loadMovieDetailDone, loadMovieTrailerDone } = useSelector(state => state.movie)

  useEffect(() => {
    if (movieDetailsPageFrontRef) {
      movieDetailsPageFrontRef.scrollIntoView();
    }
    dispatch({
      type: LOAD_MOVIE_DETAIL_REQUEST,
      payload: props.match.params.movieId
    })
  }, [props.match.params.movieId])

  useEffect(() => {
    if (loadMovieDetailDone) {
      dispatch({
        type: LOAD_MOVIE_TRAILER_REQUEST,
        payload: props.match.params.movieId
      })
    }
  }, [loadMovieDetailDone, props.match.params.movieId])

  const renderPageHeader = (<>
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
  </>)

  return (
    <div>
      <div ref={node => (movieDetailsPageFrontRef = node)} />

      {loadMovieTrailerDone && <>
        <MainImage movie={currentMovie} />
        <div style={{ width: '80%', margin: '1rem auto' }}>
          <PageHeader
            className="site-page-header-responsive"
            onBack={() => props.history.goBack()}
            title={currentMovie.title}
            subTitle={currentMovie.original_title}
            footer={renderPageHeader}
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
