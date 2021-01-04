import produce from 'immer';

import {
  REGISTER_CHAT_USER_REQUEST, REGISTER_CHAT_USER_SUCCESS, REGISTER_CHAT_USER_FAILURE,
  LOGIN_CHAT_USER_REQUEST, LOGIN_CHAT_USER_SUCCESS, LOGIN_CHAT_USER_FAILURE,
  LOGOUT_CHAT_USER_REQUEST, LOGOUT_CHAT_USER_SUCCESS, LOGOUT_CHAT_USER_FAILURE,
  SET_CURRENT_CHAT_ROOM,
  SET_CHAT_USER,
  SET_PRIVATE_CHAT_ROOM,
  SET_USER_POSTS,
} from './types'

const initialState = {
  currentChatRoom: {},
  isPrivateChatRoom: false,
  currentChatUser: {},
  userPosts: [],
  messageFromChat: '',

  registerChatUserLoading: false,
  registerChatUserDone: false,
  registerChatUserError: null,
  loginChatUserLoading: false,
  loginChatUserDone: false,
  loginChatUserError: null,
  logoutChatUserLoading: false,
  logoutChatUserDone: false,
  logoutChatUserError: null,
}

const chat = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case REGISTER_CHAT_USER_REQUEST:
        draft.registerChatUserLoading = true;
        draft.registerChatUserDone = false;
        draft.registerChatUserError = null;
        break;
      case REGISTER_CHAT_USER_SUCCESS:
        draft.registerChatUserLoading = false;
        draft.registerChatUserDone = true;
        draft.messageFromChat = action.payload;
        break;
      case REGISTER_CHAT_USER_FAILURE:
        draft.registerChatUserLoading = false;
        draft.registerChatUserError = action.error.code;
        draft.messageFromChat = action.error.message;
        break;
      case LOGIN_CHAT_USER_REQUEST:
        draft.loginChatUserLoading = true;
        draft.loginChatUserDone = false;
        draft.loginChatUserError = null;
        break;
      case LOGIN_CHAT_USER_SUCCESS:
        draft.loginChatUserLoading = false;
        draft.loginChatUserDone = true;
        draft.currentChatUser.userId = action.payload.userId;
        draft.currentChatUser.image = action.payload.image;
        draft.currentChatUser.email = action.payload.email;
        draft.currentChatUser.name = action.payload.name;
        draft.messageFromChat = action.payload.message;
        break;
      case LOGIN_CHAT_USER_FAILURE:
        draft.loginChatUserLoading = false;
        draft.loginChatUserError = action.error.code;
        draft.messageFromChat = action.error.message;
        break;
      case LOGOUT_CHAT_USER_REQUEST:
        draft.logoutChatUserLoading = true;
        draft.logoutChatUserDone = false;
        draft.logoutChatUserError = null;
        break;
      case LOGOUT_CHAT_USER_SUCCESS:
        draft.logoutChatUserLoading = false;
        draft.logoutChatUserDone = true;
        draft.currentChatUser = {};
        draft.messageFromChat = action.payload;
        draft.registerChatUserLoading = false;
        draft.registerChatUserDone = false;
        draft.registerChatUserError = null;
        draft.loginChatUserLoading = false;
        draft.loginChatUserDone = false;
        draft.loginChatUserError = null;
        break;
      case LOGOUT_CHAT_USER_FAILURE:
        draft.logoutChatUserLoading = false;
        draft.logoutChatUserError = action.error.code;
        draft.messageFromChat = action.error.message;
        break;
      case SET_CURRENT_CHAT_ROOM:
        draft.currentChatRoom = action.payload;
        break;
      case SET_CHAT_USER:
        draft.currentChatUser.userId = action.payload.uid;
        draft.currentChatUser.image = action.payload.photoURL;
        draft.currentChatUser.email = action.payload.email;
        draft.currentChatUser.name = action.payload.displayName;
        draft.messageFromChat = 'Firebase에서 사용자가 정상적으로 인증되었습니다.';
        break;
      case SET_PRIVATE_CHAT_ROOM:
        draft.isPrivateChatRoom = action.payload;
        break;
      case SET_USER_POSTS:
        draft.userPosts = action.payload;
        break;
      default:
        break;
    }
  });
}

export default chat;