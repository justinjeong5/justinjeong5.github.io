import React from 'react'
import { END } from 'redux-saga'
import axios from 'axios'
import wrapper from '../store/storeConfiguration'
import AppLayout from '../components/AppLayout'
import LandingPage from '../components/LandingPage'
import { LOAD_BLOG_POSTS_REQUEST, LOAD_CHAT_ROOMS_REQUEST, LOAD_PRODUCTS_REQUEST, AUTHENTICATE_USER_REQUEST } from '../reducers/types'

function Home() {

  return (
    <AppLayout>
      <LandingPage />
    </AppLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  axios.defaults.headers.Cookie = '';
  const cookie = context.req ? context.req.headers.cookie : '';
  if (cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: AUTHENTICATE_USER_REQUEST
  })
  context.store.dispatch({
    type: LOAD_BLOG_POSTS_REQUEST,
    payload: { limit: 3, skip: 0 }
  })
  context.store.dispatch({
    type: LOAD_CHAT_ROOMS_REQUEST
  })
  context.store.dispatch({
    type: LOAD_PRODUCTS_REQUEST
  })

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Home
