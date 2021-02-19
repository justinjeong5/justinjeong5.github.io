import React from 'react'
import { BackTop } from 'antd'

import NavBar from '../components/NavBar'
import Landing from '../components/Landing'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Contact from '../components/Contact'

function Home() {

  return (
    <div>
      <NavBar />
      <Landing />
      <Skill />
      <Project />
      <Contact />
      <BackTop duration={1500} visibilityHeight={600} />
    </div>
  )
}

export default Home
