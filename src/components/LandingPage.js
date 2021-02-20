import React from 'react'
import { BackTop } from 'antd'

import { useInput } from './utils/CustomUseRef'

import NavBar from './NavBar'
import Welcome from './Welcome'
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'

function Home() {
  const [skillRef, setSkillRef, handleSkillRef] = useInput(null);
  const [projectRef, setProjectRef, handleProjectRef] = useInput(null);
  const [contactRef, setContactRef, handleContactRef] = useInput(null);

  return (
    <div>
      <NavBar handleSkillRef={handleSkillRef} handleProjectRef={handleProjectRef} handleContactRef={handleContactRef} />
      <Welcome />
      <Skill setRef={setSkillRef} />
      <Project setRef={setProjectRef} />
      <Contact setRef={setContactRef} />
      <BackTop />
    </div>
  )
}

export default Home
