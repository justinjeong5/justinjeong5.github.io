import { all, fork, put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

import {
  CREATE_BLOG_POST_REQUEST, CREATE_BLOG_POST_SUCCESS, CREATE_BLOG_POST_FAILURE,
  LOAD_BLOG_POSTS_REQUEST, LOAD_BLOG_POSTS_SUCCESS, LOAD_BLOG_POSTS_FAILURE,
  RESET_LOAD_BLOG_POSTS,
  LOAD_BLOG_POST_REQUEST, LOAD_BLOG_POST_SUCCESS, LOAD_BLOG_POST_FAILURE,
  UPLOAD_BLOG_DATASET_REQUEST, UPLOAD_BLOG_DATASET_SUCCESS, UPLOAD_BLOG_DATASET_FAILURE,
} from '../reducers/types'

function createPostAPI(data) {
  return axios.post('/api/blog/createPost', data)
}

function* createPost(action) {
  try {
    const result = yield call(createPostAPI, action.payload);
    yield put({
      type: CREATE_BLOG_POST_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: CREATE_BLOG_POST_FAILURE,
      error: error.response.data,
    })
  }
}

function loadPostsAPI(data) {
  return axios.post('/api/blog/blogs', data)
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.payload);
    let noMore = false;
    if (result.data.blogs.length % 6 || result.data.blogs.length === 0) {
      noMore = true;
    }
    yield put({
      type: LOAD_BLOG_POSTS_SUCCESS,
      payload: result.data,
      noMorePosts: noMore,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_BLOG_POSTS_FAILURE,
      error: error.response.data,
    })
  }
}

function loadPostAPI(data) {
  return axios.get(`/api/blog/${data}`)
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.payload);
    yield put({
      type: LOAD_BLOG_POST_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_BLOG_POST_FAILURE,
      error: error.response.data,
    })
  }
}

function uploadDatasetAPI(data) {
  return axios.post(`/api/blog/uploadDataset`, data.formData, data.config)
}

function* uploadDataset(action) {
  try {
    const result = yield call(uploadDatasetAPI, action.payload);
    yield put({
      type: UPLOAD_BLOG_DATASET_SUCCESS,
      payload: {
        ...result.data,
        file: action.payload.file,
        dataType: action.payload.dataType,
      },
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: UPLOAD_BLOG_DATASET_FAILURE,
      error: error.response.data,
    })
  }
}

function* watchCreatePost() {
  yield takeLatest(CREATE_BLOG_POST_REQUEST, createPost)
}

function* watchLoadPosts() {
  yield takeLatest([LOAD_BLOG_POSTS_REQUEST, RESET_LOAD_BLOG_POSTS], loadPosts)
}

function* watchLoadPost() {
  yield takeLatest(LOAD_BLOG_POST_REQUEST, loadPost)
}

function* watchUploadDataset() {
  yield takeLatest(UPLOAD_BLOG_DATASET_REQUEST, uploadDataset)
}


export default function* blogSaga() {
  yield all([
    fork(watchCreatePost),
    fork(watchLoadPosts),
    fork(watchLoadPost),
    fork(watchUploadDataset),
  ])
}