import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Card, Row, Col, Empty } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { LOAD_MOVIE_CASTING_REQUEST } from '../../../reducers/types'
import { IMAGE_URL } from '../../../config/key';

function MovieCasting() {

  const dispatch = useDispatch();
  const { currentMovie, loadMovieDetailDone,
    loadMovieCastingLoading, loadMovieCastingDone } = useSelector(state => state.movie)

  useEffect(() => {
    if (loadMovieDetailDone) {
      dispatch({
        type: LOAD_MOVIE_CASTING_REQUEST,
        payload: currentMovie.id
      })
    }
  }, [loadMovieDetailDone, currentMovie.id])

  return (
    <div>
      {loadMovieCastingLoading &&
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80vw', height: '300px' }}>
          <LoadingOutlined style={{ fontSize: '3rem' }} />
        </div>}
      {loadMovieCastingDone && <>
        <Row gutter={[16, 16]}>
          {currentMovie.casting?.map(cast => {
            return (<>
              <Col xl={4} lg={6} md={8} sm={12} xs={24} key={uuidv4()}>
                {cast.profile_path
                  ? <Card
                    key={uuidv4()}
                    style={{ width: 180 }}
                    cover={<img alt="example" src={`${IMAGE_URL}/w500/${cast.profile_path}`} />}
                  >
                    <Card.Meta title={cast.name} description={cast.character} />
                  </Card>
                  :
                  <Card
                    key={uuidv4()}
                    style={{ width: 180 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 270 }}>
                      <Empty description='' />
                    </div>
                    <Card.Meta title={cast.name} description={cast.character} />
                  </Card>
                }
              </Col>
            </>)
          })}
        </Row>
      </>}
    </div>
  )
}

export default MovieCasting
