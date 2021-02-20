import React, { useMemo } from 'react'
import { Typography } from 'antd'

import Diagonal from './utils/Diagonal'

const { Title } = Typography;

function WelcomePage() {

  const content = useMemo(() => (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <Title style={{ color: '#FFFFFF' }}>
            안녕하세요.<br /> 정경하입니다.
          </Title>
          <Title style={{ color: '#5D5D5F', width: 'calc(100vw - 800px)' }} level={3}>
            저는 웹 프론트엔드 개발자입니다. 주로 React와 Next를 이용하여 개발합니다.<br />
          </Title>
        </div>
      </div>
      <img
        src='https://user-images.githubusercontent.com/44011462/108510061-64e7b380-7301-11eb-82e0-dd9a66c26528.jpeg'
        alt='JustinJeongImage'
        style={{
          width: '40vw', maxWidth: 400,
          height: '40vw', maxHeight: 400,
          border: '30px solid #131417',
          borderRadius: 5
        }}
      />
    </div >
  ), [])

  return (
    <>
      <Diagonal
        children={content}
        boxStyle={{ backgroundColor: '#191B1E', padding: '150px 10vw' }}
        bottomStyle={{ backgroundColor: '#191B1E', height: 100, clipPath: 'polygon(0px -1px, 100% -1px, 100% 30%, 0px 100%)' }}
      />
    </>
  )
}

export default WelcomePage
