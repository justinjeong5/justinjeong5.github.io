import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Auth from '../hoc/Authentication'
import NavBar from './Header/NavBar'
import Footer from './Footer/Footer'
import MainPage from './LandingPage/MainPage'
import RegisterPage from './User/RegisterPage'
import LoginPage from './User/LoginPage'
import EditPage from './User/EditPage'

import MoviePage from './MovieTrend/MoviePage'
import MovieDetailPage from './MovieTrend/MovieDetailPage'
import FavoritePage from './MovieTrend/FavoritePage'

import ProductPage from './Jaymall/ProductPage'
import UploadProductPage from './Jaymall/UploadProductPage'
import DetailProductPage from './Jaymall/DetailProductPage'
import CartPage from './Jaymall/CartPage'

import BlogPage from './Blog/BlogPage'
import CreatePage from './Blog/CreatePage'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Auth(MainPage, null)} />
        <Route exact path='/register' component={Auth(RegisterPage, false)} />
        <Route exact path='/login' component={Auth(LoginPage, false)} />
        <Route exact path='/edit' component={Auth(EditPage, true)} />
        <Route exact path='/movieTrend/' component={Auth(MoviePage, null)} />
        <Route exact path="/movieTrend/movie/:movieId" component={Auth(MovieDetailPage, true)} />
        <Route exact path="/movieTrend/favorite" component={Auth(FavoritePage, true)} />
        <Route exact path="/jaymall/" component={Auth(ProductPage, null)} />
        <Route exact path="/jaymall/upload" component={Auth(UploadProductPage, true)} />
        <Route exact path="/jaymall/product/:productId" component={Auth(DetailProductPage, null)} />
        <Route exact path="/jaymall/cart" component={Auth(CartPage, true)} />
        <Route exact path="/blog/" component={Auth(BlogPage, null)} />
        <Route exact path="/blog/create" component={Auth(CreatePage, true)} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;