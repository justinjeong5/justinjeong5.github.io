import { all, fork, put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { API_URL, API_KEY } from '../config/config'

import {
  LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE,
} from '../reducers/types'

function LoadMoviesAPI(data) {
  return axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${data}`, { withCredentials: false })
}

function* loadMovies(action) {
  try {
    const result = yield call(LoadMoviesAPI, action.payload);
    yield put({
      type: LOAD_MOVIES_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_MOVIES_FAILURE,
      error: error.response.data,
    })
  }
}

function* watchLoadMovies() {
  yield takeLatest(LOAD_MOVIES_REQUEST, loadMovies)
}


export default function* movieSaga() {
  yield all([
    fork(watchLoadMovies),
  ])
}