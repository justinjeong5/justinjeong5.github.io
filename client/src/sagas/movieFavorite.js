import { all, fork, put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { SERVER_URL } from '../config/config'

import {
  LOAD_FAVORITE_NUMBER_REQUEST, LOAD_FAVORITE_NUMBER_SUCCESS, LOAD_FAVORITE_NUMBER_FAILURE,
  CHANGE_FAVORITE_REQUEST, CHANGE_FAVORITE_SUCCESS, CHANGE_FAVORITE_FAILURE,
  LOAD_IS_FAVORITED_REQUEST, LOAD_IS_FAVORITED_SUCCESS, LOAD_IS_FAVORITED_FAILURE,
  LOAD_FAVORITED_LIST_REQUEST, LOAD_FAVORITED_LIST_SUCCESS, LOAD_FAVORITED_LIST_FAILURE,
} from '../reducers/types'

function LoadFavoriteNumberAPI(data) {
  return axios.post(`${SERVER_URL}/api/movie/favorite/favoriteNumber`, data)
}

function* loadFavoriteNumber(action) {
  try {
    const result = yield call(LoadFavoriteNumberAPI, action.payload);
    yield put({
      type: LOAD_FAVORITE_NUMBER_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_FAVORITE_NUMBER_FAILURE,
      error: error.response.data,
    })
  }
}

function changeFavoriteAPI(data) {
  return axios.post(`${SERVER_URL}/api/movie/favorite/changeFavorited`, data)
}

function* changeFavorite(action) {
  try {
    const result = yield call(changeFavoriteAPI, action.payload);
    yield put({
      type: CHANGE_FAVORITE_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: CHANGE_FAVORITE_FAILURE,
      error: error.response.data,
    })
  }
}

function isFavoritedAPI(data) {
  return axios.post(`${SERVER_URL}/api/movie/favorite/isFavorited`, data)
}

function* isFavorited(action) {
  try {
    const result = yield call(isFavoritedAPI, action.payload);
    yield put({
      type: LOAD_IS_FAVORITED_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_IS_FAVORITED_FAILURE,
      error: error.response.data,
    })
  }
}

function loadFavoritedListAPI(data) {
  return axios.post(`${SERVER_URL}/api/movie/favorite/favoritedList`, data)
}

function* loadFavoritedList(action) {
  try {
    const result = yield call(loadFavoritedListAPI, action.payload);
    yield put({
      type: LOAD_FAVORITED_LIST_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_FAVORITED_LIST_FAILURE,
      error: error.response.data,
    })
  }
}

function* watchLoadFavoriteNumber() {
  yield takeLatest(LOAD_FAVORITE_NUMBER_REQUEST, loadFavoriteNumber)
}

function* watchChangeFavorite() {
  yield takeLatest(CHANGE_FAVORITE_REQUEST, changeFavorite)
}

function* watchIsFavorited() {
  yield takeLatest(LOAD_IS_FAVORITED_REQUEST, isFavorited)
}

function* watchLoadFavoritedList() {
  yield takeLatest(LOAD_FAVORITED_LIST_REQUEST, loadFavoritedList)
}

export default function* movieFavoriteSaga() {
  yield all([
    fork(watchLoadFavoriteNumber),
    fork(watchChangeFavorite),
    fork(watchIsFavorited),
    fork(watchLoadFavoritedList),
  ])
}