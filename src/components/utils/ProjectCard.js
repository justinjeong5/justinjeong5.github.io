import React from 'react'
import PropTypes from 'prop-types'

import { Typography, Divider } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

const { Title } = Typography;

function ProjectCard({ image, title, description, skill, link, github }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '120px 30px' }}>
      <div style={{ width: '35vw', maxWidth: 600 }}>
        <img src={image} width='100%' />
      </div>
      <div style={{ marginLeft: 100 }}>
        <Title level={3}>
          {title}
        </Title>
        <Divider />
        <Title level={4}>
          {description}
        </Title>
        {skill}
        <br />
        <a className='project__link' href={link} target="_blank" rel="noreferrer noopener">사용하기</a>
        <a className='project__link' href={github} target="_blank" rel="noreferrer noopener"><GithubOutlined /> Github</a>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skill: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
}

export default ProjectCard
