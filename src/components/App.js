import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LandingPage from './LandingPage'
import NotFound from './404'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
