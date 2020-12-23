import { all, fork, put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

import {
  LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILURE,
} from '../reducers/types'

function loadProductsAPI(data) {
  return axios.post('/api/jaymall/products', data)
}

function* loadProducts(action) {
  try {
    const result = yield call(loadProductsAPI, action.payload);
    let noMore = false;
    if (result.data.products.length % 8) {
      noMore = true;
    }
    yield put({
      type: LOAD_PRODUCTS_SUCCESS,
      payload: result.data,
      noMoreProducts: noMore,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_PRODUCTS_FAILURE,
      error: error.response.data,
    })
  }
}

function* watchLoadProducts() {
  yield takeLatest([LOAD_PRODUCTS_REQUEST], loadProducts)
}

export default function* jaymallSaga() {
  yield all([
    fork(watchLoadProducts),
  ])
}