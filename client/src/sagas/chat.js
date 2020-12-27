import { all, fork, put, call, takeLatest } from 'redux-saga/effects'
import firebase from '../config/firebase'

import {
  REGISTER_CHAT_USER_REQUEST, REGISTER_CHAT_USER_SUCCESS, REGISTER_CHAT_USER_FAILURE,
} from '../reducers/types'

async function registerFirebaseAPI(data) {
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

function* registerFirebase(action) {
  try {
    const result = yield call(registerFirebaseAPI, action.payload);
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

function* watchRegisterFirebase() {
  yield takeLatest(REGISTER_CHAT_USER_REQUEST, registerFirebase)
}


export default function* chatSaga() {
  yield all([
    fork(watchRegisterFirebase),
  ])
}