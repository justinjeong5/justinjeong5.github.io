import { all, fork, put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

import { initiateSocket, disconnectSocket, detectError } from '../components/utils/socket'

import {
  SOCKET_CONNECT, SOCKET_DISCONNECT,
  SOCKET_SUBSCRIBE_REQUEST, SOCKET_SUBSCRIBE_SUCCESS, SOCKET_SUBSCRIBE_FAILURE,
  LOAD_CHATS_REQUEST, LOAD_CHATS_SUCCESS, LOAD_CHATS_FAILURE,
  LOAD_CHAT_ROOMS_REQUEST, LOAD_CHAT_ROOMS_SUCCESS, LOAD_CHAT_ROOMS_FAILURE,
  TOGGLE_CHAT_ROOM_FAVORITE_REQUEST, TOGGLE_CHAT_ROOM_FAVORITE_SUCCESS, TOGGLE_CHAT_ROOM_FAVORITE_FAILURE,
  LOAD_CHAT_USERS_REQUEST, LOAD_CHAT_USERS_SUCCESS, LOAD_CHAT_USERS_FAILURE,
  CREATE_CHAT_ROOM_REQUEST, CREATE_CHAT_ROOM_SUCCESS, CREATE_CHAT_ROOM_FAILURE,
} from '../reducers/types'

function* socketConnect() {
  yield initiateSocket();
  yield detectError();
}

function* socketDisconnect() {
  yield disconnectSocket();
}

function* SocketSubscribe(action) {
  if (action.error) {
    yield put({
      type: SOCKET_SUBSCRIBE_FAILURE,
      payload: action.error,
    })
  } else {
    yield put({
      type: SOCKET_SUBSCRIBE_SUCCESS,
      payload: action.payload,
    })
  }
}

function loadChatAPI(data) {
  return axios.post('/api/chat/chats', data)
}

function* loadChat(action) {
  try {
    const result = yield call(loadChatAPI, action.payload);
    yield put({
      type: LOAD_CHATS_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_CHATS_FAILURE,
      error: error.response.data,
    })
  }
}

function loadChatRoomAPI() {
  return axios.get('/api/chatRoom/chatRooms')
}

function* loadChatRoom() {
  try {
    const result = yield call(loadChatRoomAPI);
    yield put({
      type: LOAD_CHAT_ROOMS_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_CHAT_ROOMS_FAILURE,
      error: error.response.data,
    })
  }
}

function toggleChatRoomFavoriteAPI(data) {
  return axios.post('/api/chatRoom/toggleFavorite', data)
}

function* toggleChatRoomFavorite(action) {
  try {
    const result = yield call(toggleChatRoomFavoriteAPI, action.payload);
    yield put({
      type: TOGGLE_CHAT_ROOM_FAVORITE_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: TOGGLE_CHAT_ROOM_FAVORITE_FAILURE,
      error: error.response.data,
    })
  }
}

function loadChatUsersAPI() {
  return axios.get('/api/user/users')
}

function* loadChatUsers() {
  try {
    const result = yield call(loadChatUsersAPI);
    yield put({
      type: LOAD_CHAT_USERS_SUCCESS,
      payload: result.data,
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_CHAT_USERS_FAILURE,
      error: error.response.data,
    })
  }
}

function* socketSubscribeCreateChatRoom(action) {
  if (action.error) {
    yield put({
      type: CREATE_CHAT_ROOM_FAILURE,
      payload: action.error,
    })
  } else {
    yield put({
      type: CREATE_CHAT_ROOM_SUCCESS,
      payload: action.payload,
    })
  }
}

function* watchSocketConnect() {
  yield takeLatest(SOCKET_CONNECT, socketConnect)
}

function* watchSocketDisonnect() {
  yield takeLatest(SOCKET_DISCONNECT, socketDisconnect)
}

function* watchSocketSubscribe() {
  yield takeLatest(SOCKET_SUBSCRIBE_REQUEST, SocketSubscribe)
}

function* watchLoadChat() {
  yield takeLatest(LOAD_CHATS_REQUEST, loadChat)
}

function* watchLoadChatRoom() {
  yield takeLatest(LOAD_CHAT_ROOMS_REQUEST, loadChatRoom)
}

function* watchToggleChatRoomFavorite() {
  yield takeLatest(TOGGLE_CHAT_ROOM_FAVORITE_REQUEST, toggleChatRoomFavorite)
}

function* watchLoadChatUsers() {
  yield takeLatest(LOAD_CHAT_USERS_REQUEST, loadChatUsers)
}

function* watchSocketSubscribeCreateChatRoom() {
  yield takeLatest(CREATE_CHAT_ROOM_REQUEST, socketSubscribeCreateChatRoom)
}


export default function* chatSaga() {
  yield all([
    fork(watchSocketConnect),
    fork(watchSocketDisonnect),
    fork(watchSocketSubscribe),
    fork(watchLoadChat),
    fork(watchLoadChatRoom),
    fork(watchToggleChatRoomFavorite),
    fork(watchLoadChatUsers),
    fork(watchSocketSubscribeCreateChatRoom),
  ])
}