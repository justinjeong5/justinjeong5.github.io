import React from 'react'
import { Typography } from 'antd'

import { IMAGE_URL } from '../../../config/config'
const { Title } = Typography

function MainImage(props) {

  return (
    <>
      {props?.movie &&
        <div style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 41%, rgba(0,0,0,0.65) 100%), 
        url(${IMAGE_URL}/w1280${props.movie.backdrop_path}), #1c1c1c`,
          backgroundSize: '100% cover',
          backgroundPosition: 'center, center',
          width: '100%',
          height: 500,
          position: 'relative'
        }} >
          <div style={{ position: 'absolute', maxWidth: 500, bottom: '2rem', marginLeft: '2rem' }}>
            <Title style={{ color: 'white' }} level={2}>{props.movie.title}</Title>
            <p style={{ color: 'white', fontSize: '1rem' }}>{`${props.movie.overview.slice(0, 40)}...`}</p>
          </div>
        </div>
      }
    </>
  )
}

export default MainImage