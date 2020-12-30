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
  currentChatRoom: null,
  isPrivateChatRoom: false,
  currentChatUser: null,
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
  switch (action.type) {
    case REGISTER_CHAT_USER_REQUEST:
      return {
        ...state,
        registerChatUserLoading: true,
        registerChatUserDone: false,
        registerChatUserError: null,
      }
    case REGISTER_CHAT_USER_SUCCESS:
      return {
        ...state,
        registerChatUserLoading: false,
        registerChatUserDone: true,
        messageFromChat: action.payload,
      }
    case REGISTER_CHAT_USER_FAILURE:
      return {
        ...state,
        registerChatUserLoading: false,
        registerChatUserError: action.error.code,
        messageFromChat: action.error.message,
      }
    case LOGIN_CHAT_USER_REQUEST:
      return {
        ...state,
        loginChatUserLoading: true,
        loginChatUserDone: false,
        loginChatUserError: null,
      }
    case LOGIN_CHAT_USER_SUCCESS:
      return {
        ...state,
        loginChatUserLoading: false,
        loginChatUserDone: true,
        currentChatUser: {
          ...state.currentChatUser,
          userId: action.payload.userId,
          image: action.payload.image,
          email: action.payload.email,
          name: action.payload.name,
        },
        messageFromChat: action.payload.message,
      }
    case LOGIN_CHAT_USER_FAILURE:
      return {
        ...state,
        loginChatUserLoading: false,
        loginChatUserError: action.error.code,
        messageFromChat: action.error.message,
      }
    case LOGOUT_CHAT_USER_REQUEST:
      return {
        ...state,
        logoutChatUserLoading: true,
        logoutChatUserDone: false,
        logoutChatUserError: null,
      }
    case LOGOUT_CHAT_USER_SUCCESS:
      return {
        ...state,
        logoutChatUserLoading: false,
        logoutChatUserDone: true,
        currentChatUser: null,
        messageFromChat: action.payload,
        registerChatUserLoading: false,
        registerChatUserDone: false,
        registerChatUserError: null,
        loginChatUserLoading: false,
        loginChatUserDone: false,
        loginChatUserError: null,
      }
    case LOGOUT_CHAT_USER_FAILURE:
      return {
        ...state,
        logoutChatUserLoading: false,
        logoutChatUserError: action.error.code,
        messageFromChat: action.error.message,
      }
    case SET_CURRENT_CHAT_ROOM:
      return {
        ...state,
        currentChatRoom: action.payload,
      }
    case SET_CHAT_USER:
      return {
        ...state,
        currentChatUser: {
          ...state.currentChatUser,
          userId: action.payload.uid,
          image: action.payload.photoURL,
          email: action.payload.email,
          name: action.payload.displayName,
        },
        messageFromChat: 'Firebase에서 사용자가 정상적으로 인증되었습니다.',
      }
    case SET_PRIVATE_CHAT_ROOM:
      return {
        ...state,
        isPrivateChatRoom: action.payload,
      }
    case SET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
      }
    default:
      return state;
  }
}

export default chat;