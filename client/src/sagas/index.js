import { all, fork } from 'redux-saga/effects'
import axios from 'axios'

import { SERVER_URL } from '../config/key'
import userSaga from './user'
import movieSaga from './movie'
import movieFavoriteSaga from './movieFavorite'
import jaymallSaga from './jaymall'
import blogSaga from './blog'
import chatSaga from './chat'


axios.defaults.baseURL = SERVER_URL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(movieSaga),
    fork(movieFavoriteSaga),
    fork(jaymallSaga),
    fork(blogSaga),
    fork(chatSaga),
  ]);
}