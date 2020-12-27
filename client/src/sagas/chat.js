import { all, fork, put, call, takeLatest } from 'redux-saga/effects'
import firebase from '../config/firebase'

import {
  REGISTER_CHAT_USER_REQUEST, REGISTER_CHAT_USER_SUCCESS, REGISTER_CHAT_USER_FAILURE,
  LOGIN_CHAT_USER_REQUEST, LOGIN_CHAT_USER_SUCCESS, LOGIN_CHAT_USER_FAILURE,
} from '../reducers/types'

async function registerChatAPI(data) {
  try {
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    await createdUser.user.updateProfile({
      displayName: data.name,
      photoURL: data.image,
    })
    await firebase.database().ref('users').child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      image: createdUser.user.photoURL
    })
    return 'Firebase에 정상적으로 등록되었습니다.';
  } catch (error) {
    throw error;
  }
}

function* registerChat(action) {
  try {
    const result = yield call(registerChatAPI, action.payload);
    yield put({
      type: REGISTER_CHAT_USER_SUCCESS,
      payload: result,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: REGISTER_CHAT_USER_FAILURE,
      error: {
        code: 'AlreadyExistUserFirebase',
        message: '이미 존재하는 Firebase 사용자입니다.',
        error,
      }
    })
  }
}

function loginChatAPI(data) {
  return firebase.auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then(payload => {
      return ({
        userId: payload.user.uid,
        image: payload.user.photoURL,
        email: payload.user.email,
        name: payload.user.displayName,
        message: 'Firebase에 정상적으로 로그인되었습니다.',
      })
    }).catch(error => {
      throw error;
    })
}

function* loginFirebase(action) {
  try {
    const result = yield call(loginChatAPI, action.payload);
    yield put({
      type: LOGIN_CHAT_USER_SUCCESS,
      payload: result,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOGIN_CHAT_USER_FAILURE,
      error: {
        code: 'FirebaseError',
        message: 'Firebase에 로그인 하는 과정에서 문제가 발생했습니다.',
        error,
      }
    })
  }
}

function* watchRegisterChat() {
  yield takeLatest(REGISTER_CHAT_USER_REQUEST, registerChat)
}

function* watchLoginChat() {
  yield takeLatest(LOGIN_CHAT_USER_REQUEST, loginFirebase)
}


export default function* chatSaga() {
  yield all([
    fork(watchRegisterChat),
    fork(watchLoginChat),
  ])
}