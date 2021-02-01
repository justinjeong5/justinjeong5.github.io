import { all, fork, put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

import {
  POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS, POST_COMMENT_FAILURE,
  LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE,
} from '../reducers/types'

function saveCommentAPI(data) {
  return axios.post('/api/comment/save', data)
}

function* saveComment(action) {
  try {
    const result = yield call(saveCommentAPI, action.payload);
    yield put({
      type: POST_COMMENT_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: POST_COMMENT_FAILURE,
      error: error.response.data,
    })
  }
}

function loadCommentsAPI(data) {
  return axios.post('/api/comment/comments', data)
}

function* loadComments(action) {
  try {
    const result = yield call(loadCommentsAPI, action.payload);
    yield put({
      type: LOAD_COMMENTS_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_COMMENTS_FAILURE,
      error: error.response.data,
    })
  }
}

function* watchSaveComment() {
  yield takeLatest(POST_COMMENT_REQUEST, saveComment)
}

function* watchLoadComments() {
  yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments)
}


export default function* commentSaga() {
  yield all([
    fork(watchSaveComment),
    fork(watchLoadComments),
  ])
}