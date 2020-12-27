import {
  REGISTER_CHAT_USER_REQUEST, REGISTER_CHAT_USER_SUCCESS, REGISTER_CHAT_USER_FAILURE,
} from './types'

const initialState = {
  messageFromChat: '',

  registerChatUserLoading: false,
  registerChatUserDone: false,
  registerChatUserError: null,
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
    default:
      return state;
  }
}

export default chat;