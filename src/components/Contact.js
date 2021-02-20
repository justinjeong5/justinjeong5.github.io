import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'
import { PhoneOutlined, MailOutlined, GithubOutlined } from '@ant-design/icons'

import Diagonal from './utils/Diagonal'
import Header from './utils/Header'
import Contact from './utils/Contact'

const { Title } = Typography;

function Footer({ setRef }) {

  const content = useMemo(() => (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <Header title='Contacts' />
        <Title level={3} style={{ color: '#5D5D5F' }}>함께 일하고 싶은 개발자<br /></Title>
      </div>
      <div style={{ color: '#FFFFFF', fontSize: '1.5em', fontWeight: 700 }}>
        <Contact Icon={PhoneOutlined} content='01072734775' />
        <Contact Icon={MailOutlined} content='justin.jeong5@gmail.com' />
        <Contact Icon={GithubOutlined} content='github.com/justinjeong5' />
      </div>
    </div>
  ), [])

  return (
    <div>
      <Diagonal
        boxStyle={{ backgroundColor: '#191B1E', padding: '150px 10vw', }}
        topStyle={{ backgroundColor: '#191B1E', marginTop: -100, height: 100, clipPath: 'polygon(0px 100%, 100% 0px, 100% 101%, 0px 101%)' }}
      >
        <div ref={node => setRef(node)}></div>
        {content}
      </Diagonal>
    </div>
  )
}

Footer.propTypes = {
  setRef: PropTypes.func
}

export default Footer
