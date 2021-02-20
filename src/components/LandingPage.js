import React from 'react'
import { BackTop } from 'antd'

import NavBar from './NavBar'
import Welcome from './Welcome'
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'

function Home() {

  return (
    <div>
      <NavBar />
      <Welcome />
      <Skill />
      <Project />
      <Contact />
      <BackTop duration={1500} visibilityHeight={600} />
    </div>
  )
}

export default Home
