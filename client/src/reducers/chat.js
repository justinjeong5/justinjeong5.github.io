import {
  REGISTER_CHAT_USER_REQUEST, REGISTER_CHAT_USER_SUCCESS, REGISTER_CHAT_USER_FAILURE,
  LOGIN_CHAT_USER_REQUEST, LOGIN_CHAT_USER_SUCCESS, LOGIN_CHAT_USER_FAILURE,
} from './types'

const initialState = {
  currentUserFromChat: {},
  messageFromChat: '',

  registerChatUserLoading: false,
  registerChatUserDone: false,
  registerChatUserError: null,
  loginChatUserLoading: false,
  loginChatUserDone: false,
  loginChatUserError: null,
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
        currentUserFromChat: {
          ...state.currentUserFromChat,
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
    default:
      return state;
  }
}

export default chat;