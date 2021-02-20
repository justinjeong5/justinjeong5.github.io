import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Divider, Typography } from 'antd'

import Diagonal from './utils/Diagonal'
import Header from './utils/Header'
import ProjectCard from './utils/ProjectCard'

const { Title } = Typography;

function Project({ setRef }) {

  const slackSkill = useMemo(() => (
    <div>
      <div style={{ display: 'flex' }}>
        <Title level={4}>Client</Title>
        <Title level={5} style={{ margin: '3px 10px' }}>React, Redux(Saga), Next.js</Title>
      </div>
      <div style={{ display: 'flex' }}>
        <Title level={4}>Server</Title>
        <Title level={5} style={{ margin: '3px 10px' }}>Nodejs(Express), MongoDB, WebSocket</Title>
      </div>
      <div style={{ display: 'flex' }}>
        <Title level={4}>Cloud</Title>
        <Title level={5} style={{ margin: '3px 10px' }}>AWS-ec2, AWS-route53</Title>
      </div>
    </div>
  ), [])

  const tweeterSkill = useMemo(() => (
    <div>
      <div style={{ display: 'flex' }}>
        <Title level={4}>Client</Title>
        <Title level={5} style={{ margin: '3px 10px' }}>React, Redux(Saga), Next.js</Title>
      </div>
      <div style={{ display: 'flex' }}>
        <Title level={4}>Server</Title>
        <Title level={5} style={{ margin: '3px 10px' }}>Nodejs(Express), Mysql(Sequelize)</Title>
      </div>
      <div style={{ display: 'flex' }}>
        <Title level={4}>Cloud</Title>
        <Title level={5} style={{ margin: '3px 10px' }}>AWS-ec2, AWS-route53, AWS-lambda</Title>
      </div>
    </div>
  ), [])

  const content = useMemo(() => (
    <div>
      <Header title='Projects' color='#191B1E' />
      <ProjectCard
        image='https://user-images.githubusercontent.com/44011462/108480372-36a2ad80-72da-11eb-99ed-e499613e17f5.png'
        title='React Slack'
        description='WebSocket을 이용한 실시간 채팅 서비스'
        skill={slackSkill}
        link='https://slack.shinywaterjeong.com'
        github='https://github.com/justinjeong5/react-slack'
      />
      <Divider />
      <ProjectCard
        image='https://user-images.githubusercontent.com/44011462/108480385-3bfff800-72da-11eb-8694-a1d238344bf7.png'
        title='React Tweeter'
        description='트윗, 댓글, 좋아요 등의 기능이 있는 SNS'
        skill={tweeterSkill}
        link='https://tweeter.shinywaterjeong.com'
        github='https://github.com/justinjeong5/react-tweeter'
      />
    </div>
  ), [])

  return (
    <div>
      <Diagonal
        boxStyle={{ backgroundColor: '#F6F6F6', padding: '150px  10vw 50px' }}
        topStyle={{ backgroundColor: '#F6F6F6', height: 100, clipPath: 'polygon(0px 100%, 100% 0px, 100% 100%, 0px 100%)' }}
        bottomStyle={{ backgroundColor: '#F6F6F6', height: 100, clipPath: 'polygon(0px -1px, 100% -1px, 100% 30%, 0px 100%)' }}
      >
        <div ref={node => setRef(node)}></div>
        {content}
      </Diagonal>
    </div>
  )
}

Project.propTypes = {
  setRef: PropTypes.func
}

export default Project
