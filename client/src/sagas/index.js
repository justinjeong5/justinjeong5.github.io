import { all, fork } from 'redux-saga/effects'
import axios from 'axios'

import { SERVER_URL } from '../config/key'
import userSaga from './user'
import movieSaga from './movie'
import favoriteSaga from './favorite'
import jaymallSaga from './jaymall'
import blogSaga from './blog'
import chatSaga from './chat'
import commentSaga from './comment'
import tweeterSaga from './tweeter'


axios.defaults.baseURL = SERVER_URL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(movieSaga),
    fork(jaymallSaga),
    fork(blogSaga),
    fork(chatSaga),
    fork(commentSaga),
    fork(favoriteSaga),
    fork(tweeterSaga),
  ]);
}