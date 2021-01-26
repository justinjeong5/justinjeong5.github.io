import { all, put, fork, takeLatest, delay, takeLeading } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { generateDummyTweet } from '../reducers/tweeter';

import {
  LOAD_TWEETS_REQUEST, LOAD_TWEETS_SUCCESS, LOAD_TWEETS_FAILURE,
  ADD_TWEET_REQUEST, ADD_TWEET_SUCCESS, ADD_TWEET_FAILURE,
  REMOVE_TWEET_REQUEST, REMOVE_TWEET_SUCCESS, REMOVE_TWEET_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
  ADD_TWEET_TO_ME, REMOVE_TWEET_FROM_ME,
} from '../reducers/types'

function loadTweetsAPI(data) {
  return axios.get('/api/tweeter/Tweets')
}

function* loadTweets(action) {
  try {
    yield delay(1000);  // server is not ready
    // const result = yield call(loadTweetsAPI, action.data)
    yield put({
      type: LOAD_TWEETS_SUCCESS,
      data: generateDummyTweet(10),
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_TWEETS_FAILURE,
      data: error.response.data
    })
  }
}

function addPostAPI(data) {
  return axios.post('/api/tweeter/addPost', data)
}

function* addPost(action) {
  try {
    yield delay(1000);  // server is not ready
    // const result = yield call(addPostAPI, action.data)
    const id = uuidv4();
    yield put({
      type: ADD_TWEET_SUCCESS,
      data: {
        id,
        content: action.data.content
      }
    })
    yield put({
      type: ADD_TWEET_TO_ME,
      data: {
        id
      }
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: ADD_TWEET_FAILURE,
      data: error.response.data
    })
  }
}

function removePostAPI(data) {
  return axios.post('/api/tweeter/removePost', data)
}

function* removePost(action) {
  try {
    yield delay(1000);  // server is not ready
    // const result = yield call(removePostAPI, action.data)
    yield put({
      type: REMOVE_TWEET_SUCCESS,
      data: {
        id: action.data.id,
      }
    })
    yield put({
      type: REMOVE_TWEET_FROM_ME,
      data: {
        id: action.data.id,
      }
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: REMOVE_TWEET_FAILURE,
      data: error.response.data
    })
  }
}

function addCommentAPI(data) {
  return axios.post('/api/tweeter/addComment', data)
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data)
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: error.response.data
    })
  }
}

function* watchLoadTweets() {
  yield takeLeading(LOAD_TWEETS_REQUEST, loadTweets)
}

function* watchAddPost() {
  yield takeLatest(ADD_TWEET_REQUEST, addPost)
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_TWEET_REQUEST, removePost)
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}



export default function* tweeterSaga() {
  yield all([
    fork(watchLoadTweets),
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchAddComment),
  ])
}