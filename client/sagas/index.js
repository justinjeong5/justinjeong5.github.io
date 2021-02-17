import { all, fork } from 'redux-saga/effects'
import axios from 'axios'

import { SERVER_URL } from '../config/key'
import userSaga from './user'
import blogSaga from './blog'
import commentSaga from './comment'


axios.defaults.baseURL = SERVER_URL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(blogSaga),
    fork(commentSaga),
  ]);
}