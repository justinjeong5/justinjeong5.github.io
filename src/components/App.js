import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LandingPage from './LandingPage'
import Custom404 from './404'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route component={Custom404} />
      </Switch>
    </div>
  )
}

export default App
