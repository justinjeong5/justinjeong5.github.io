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
        <Content content='Hooks 사용' />
        <Content content='Prop Types 활용' />
        <Content content='Redux를 이용한 상태 관리' />
        <Content content='Redux-Saga 비동기 통신' />
        <Content content='HOC 활용' />
        <Content content='React-Router-Dom 등의 Library 사용' />
        <Content content='Styled Component 사용' />
        <Content content='Ant Design, Bootstrap 활용' />
      </>}
    />,
    <SkillCard
      key={uuidv4()}
      title='NEXT.JS'
      content={<>
        <Content content='GetStaticProps를 이용한 SSR' />
        <Content content='GetServerSideProps를 이용한 SSR' />
        <Content content='Dynamic Routing 사용' />
        <Content content='Head, Link 등의 Built-in Component 사용' />
      </>}
    />,
    <SkillCard
      key={uuidv4()}
      title='NODE.JS'
      content={<>
        <Content content='Express 활용' />
        <Content content='Restful API 작성' />
        <Content content='Middleware로 Routing 관리' />
        <Content content='Mysql, MongoDB 활용' />
        <Content content='Sequelize를 이용한 Mysql' />
        <Content content='JWT, Passport을 통한 유저 상태 관리' />
      </>}
    />,
    <SkillCard
      key={uuidv4()}
      title='CLOUD'
      content={<>
        <Content content='AWS-ec2, AWS-route53, AWS-s3 경험' />
        <Content content='AWS-lambda 경험' />
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
      <Diagonal
        boxStyle={{ backgroundColor: '#FFFFFF', padding: '200px 0px 0px ' }}
        bottomStyle={{ backgroundColor: '#FFFFFF', height: 100, clipPath: 'polygon(0px 0%, 100% 0px, 100% 30%, 0px 100%)' }}
      >
        <div ref={node => setRef(node)}></div>
        {content}
      </Diagonal>
    </div>
  )
}

Skill.propTypes = {
  setRef: PropTypes.func,
}

export default Skill

