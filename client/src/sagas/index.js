import { all, fork } from 'redux-saga/effects'
import axios from 'axios'

import { SERVER_URL } from '../config/config'
import userSaga from './user'
import movieSaga from './movie'
import movieFavoriteSaga from './movieFavorite'
import jaymallSaga from './jaymall'


axios.defaults.baseURL = SERVER_URL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(movieSaga),
    fork(movieFavoriteSaga),
    fork(jaymallSaga),
  ]);
}