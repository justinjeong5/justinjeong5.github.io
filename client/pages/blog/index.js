import React from 'react'
import { END } from 'redux-saga'
import axios from 'axios'
import wrapper from '../../store/storeConfiguration'
import AppLayout from '../../components/AppLayout'
import BlogPage from '../../components/Blog/BlogPage'
import { AUTHENTICATE_USER_REQUEST, LOAD_BLOG_POSTS_REQUEST } from '../../reducers/types'

function Blog() {
  return (
    <AppLayout>
      <BlogPage />
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
    payload: { skip: 0, limit: 6 },
  });

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Blog
