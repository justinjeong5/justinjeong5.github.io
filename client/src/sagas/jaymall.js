import { all, fork, put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

import {
  LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILURE,
  UPLOAD_PRODUCT_REQUEST, UPLOAD_PRODUCT_SUCCESS, UPLOAD_PRODUCT_FAILURE,
  UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE,
  LOAD_PRODUCT_DETAILS_REQUEST, LOAD_PRODUCT_DETAILS_SUCCESS, LOAD_PRODUCT_DETAILS_FAILURE,
  SET_ALL_FILTERS_INFO,
} from '../reducers/types'

function loadProductsAPI(data) {
  return axios.post('/api/jaymall/products', data)
}

function* loadProducts(action) {
  try {
    const result = yield call(loadProductsAPI, action.payload);
    let noMore = false;
    if (result.data.products.length % 8 || result.data.products.length === 0) {
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

function uploadProductAPI(data) {
  return axios.post('/api/jaymall/uploadProduct', data)
}

function* uploadProduct(action) {
  try {
    const result = yield call(uploadProductAPI, action.payload);
    yield put({
      type: UPLOAD_PRODUCT_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: UPLOAD_PRODUCT_FAILURE,
      error: error.response.data,
    })
  }
}

function uploadImageAPI(data) {
  console.log(data, 'Jaymall uploadImageAPI data')
  return axios.post('/api/jaymall/uploadImage', data.formData, data.config)
}

function* uploadImage(action) {
  try {
    const result = yield call(uploadImageAPI, action.payload);
    yield put({
      type: UPLOAD_IMAGE_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: UPLOAD_IMAGE_FAILURE,
      error: error.response.data,
    })
  }
}

function loadProductDetailsAPI(data) {
  return axios.get(`/api/jaymall/product_by_id?id=${data}&type=single`)
}

function* loadProductDetails(action) {
  try {
    const result = yield call(loadProductDetailsAPI, action.payload);
    yield put({
      type: LOAD_PRODUCT_DETAILS_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_PRODUCT_DETAILS_FAILURE,
      error: error.response.data,
    })
  }
}

function* watchLoadProducts() {
  yield takeLatest([LOAD_PRODUCTS_REQUEST, SET_ALL_FILTERS_INFO], loadProducts)
}

function* watchUploadImage() {
  yield takeLatest(UPLOAD_IMAGE_REQUEST, uploadImage)
}

function* watchUploadProduct() {
  yield takeLatest(UPLOAD_PRODUCT_REQUEST, uploadProduct)
}

function* watchLoadProductDetail() {
  yield takeLatest(LOAD_PRODUCT_DETAILS_REQUEST, loadProductDetails)
}


export default function* jaymallSaga() {
  yield all([
    fork(watchLoadProducts),
    fork(watchUploadProduct),
    fork(watchUploadImage),
    fork(watchLoadProductDetail),
  ])
}