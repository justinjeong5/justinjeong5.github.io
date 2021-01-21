import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Row, Col, Card, Empty } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { IMAGE_URL } from '../../../config/key';

function MovieMaker() {

  const { currentMovie, loadMovieDetailDone, loadMovieDetailLoading } = useSelector(state => state.movie)

  const loadingWrapperDivStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: 'calc(100vh - 80px)' }), [])
  const loadingIconStyle = useMemo(() => ({ fontSize: '10rem' }), [])
  const cardStyle = useMemo(() => ({ width: 250 }), [])
  const cardCoverStyle = useMemo(() => ({ padding: '1rem' }), [])
  const cardEmptyStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 270 }), [])

  return (
    <div>
      {loadMovieDetailLoading &&
        <div style={loadingWrapperDivStyle}>
          <LoadingOutlined style={loadingIconStyle} />
        </div>}
      <Row gutter={[32, 32]}>
        {loadMovieDetailDone && currentMovie.production_companies.map(comp => {
          return (<>
            <Col lg={6} md={8} sm={12} xs={24} key={uuidv4()}>
              {comp.logo_path
                ? <Card
                  style={cardStyle}
                  cover={<img alt={comp.name} style={cardCoverStyle} src={`${IMAGE_URL}/w500/${comp.logo_path}`} />}
                >
                  <Card.Meta title={comp.name} />
                </Card>
                :
                <Card style={cardStyle}>
                  <div style={cardEmptyStyle}>
                    <Empty description='' />
                  </div>
                  <Card.Meta title={comp.name} />
                </Card>
              }
            </Col>
          </>)
        })}
        {loadMovieDetailDone && currentMovie.production_companies.length === 0 &&
          <Col>
            <Card style={cardStyle}>
              <div style={cardEmptyStyle}>
                <Empty description='' />
              </div>
            </Card>
          </Col>
        }
      </Row>
    </div >
  )
}

export default MovieMaker
