import React from 'react'
import { END } from 'redux-saga'
import axios from 'axios'
import wrapper from '../../store/storeConfiguration'
import AppLayout from '../../components/AppLayout'
import CreatePage from '../../components/Blog/CreatePage'
import { AUTHENTICATE_USER_REQUEST } from '../../reducers/types'

function Create() {
  return (
    <AppLayout>
      <CreatePage />
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

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Create
