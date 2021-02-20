import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd'
import { v4 as uuidv4 } from 'uuid'

import Diagonal from './utils/Diagonal'
import Header from './utils/Header'
import SkillCard from './utils/SkillCard'
import Content from './utils/Content'

function Skill({ setRef }) {

  const renderCards = [
    <SkillCard
      key={uuidv4()}
      title='REACT'
      content={<>
        <Content content='HOOKS 사용' />
        <Content content='REDUX를 이용한 상태 관리' />
        <Content content='REDUX-SAGA 비동기 통신' />
        <Content content='ROUTER등의 LIBRARY 사용' />
      </>}
    />,
    <SkillCard
      key={uuidv4()}
      title='NEXT.JS'
      content={<>
        <Content content='GetServerSideProps를 이용한 SSR' />
        <Content content='DYNAMIC ROUTING 사용' />
        <Content content='BUNDLE-ALAYZER 사용' />
        <Content content='ROUTER, HEAD 등의 LIBRARY 사용' />
      </>}
    />,
    <SkillCard
      key={uuidv4()}
      title='NODE.JS'
      content={<>
        <Content content='EXPRESS와 MIDDLEWARE 사용' />
        <Content content='SEQUELIZE를 이용한 MYSQL' />
        <Content content='MONGODB 사용' />
        <Content content='JWT, PASSPORT, SESSION을 이용한 유저관리' />
      </>}
    />,
    <SkillCard
      key={uuidv4()}
      title='CLOUD'
      content={<>
        <Content content='AWS-ec2, AWS-route53, AWS-s3 사용 경험' />
        <Content content='HEROKU 사용 경험' />
      </>}
    />,
  ]

  const content = useMemo(() => (
    <div>
      <div style={{ padding: '0px 150px' }}>
        <Header title='Skills' color='#191B1E' />
      </div>
      <div style={{ padding: '50px 150px 150px' }}>
        <Row gutter={[40, 40]}>
          {renderCards}
        </Row>
      </div>
    </div>
  ), [])

  return (
    <div>
      <div ref={node => setRef(node)}></div>
      <Diagonal
        children={content}
        boxStyle={{ backgroundColor: '#FFFFFF', padding: '200px 0px 0px ' }}
        bottomStyle={{ backgroundColor: '#FFFFFF', height: 100, clipPath: 'polygon(0px 0%, 100% 0px, 100% 30%, 0px 100%)' }}
      />
    </div>
  )
}

Skill.propTypes = {
  ref: PropTypes.func,
}

export default Skill

