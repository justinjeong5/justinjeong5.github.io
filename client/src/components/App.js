import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Auth from '../hoc/Authentication'
import NavBar from './Header/NavBar'
import Footer from './Footer/Footer'
import MainPage from './LandingPage/MainPage'
import RegisterPage from './User/RegisterPage'
import LoginPage from './User/LoginPage'
import EditPage from './User/EditPage'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Auth(MainPage, null)} />
        <Route exact path='/register' component={Auth(RegisterPage, false)} />
        <Route exact path='/login' component={Auth(LoginPage, false)} />
        <Route exact path='/edit' component={Auth(EditPage, true)} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;