import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Row, Col, Card, Empty } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { IMAGE_URL } from '../../../config/key';

function MovieMaker() {

  const { currentMovie, loadMovieDetailDone, loadMovieDetailLoading } = useSelector(state => state.movie)

  return (
    <div>
      {loadMovieDetailLoading &&
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: 'calc(100vh - 80px)' }}>
          <LoadingOutlined style={{ fontSize: '10rem' }} />
        </div>}
      <Row gutter={[32, 32]}>
        {loadMovieDetailDone && currentMovie.production_companies.map(comp => {
          return (<>
            <Col lg={6} md={8} sm={12} xs={24} key={uuidv4()}>
              {comp.logo_path
                ? <Card
                  style={{ width: 250 }}
                  cover={<img alt={comp.name} style={{ padding: '1rem' }} src={`${IMAGE_URL}/w500/${comp.logo_path}`} />}
                >
                  <Card.Meta title={comp.name} />
                </Card>
                :
                <Card style={{ width: 250 }}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 270 }}>
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
            <Card style={{ width: 250 }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 270 }}>
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
