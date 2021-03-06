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
            저는 웹 프론트엔드 개발자입니다. <br />
            주로 React를 이용하여 개발합니다.<br />
            함께 일하기 좋은 개발자가 되기위해 노력하겠습니다.
          </Title>
        </div>
      </div>
      <img
        src='https://user-images.githubusercontent.com/44011462/108590986-b21f6000-73a9-11eb-94c0-940e49dd07e4.png'
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
