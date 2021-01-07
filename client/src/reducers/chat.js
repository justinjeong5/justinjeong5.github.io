import produce from 'immer';

import {
  SOCKET_CONNECT, SOCKET_DISCONNECT,
  SOCKET_SUBSCRIBE_SUCCESS, SOCKET_SUBSCRIBE_FAILURE,
  LOAD_CHATS_REQUEST, LOAD_CHATS_SUCCESS, LOAD_CHATS_FAILURE,
  LOAD_CHAT_ROOMS_REQUEST, LOAD_CHAT_ROOMS_SUCCESS, LOAD_CHAT_ROOMS_FAILURE,
  CREATE_CHAT_ROOM_SUCCESS, CREATE_CHAT_ROOM_FAILURE,
  SET_CURRENT_CHAT_ROOM,
  TOGGLE_CHAT_ROOM_FAVORITE_REQUEST, TOGGLE_CHAT_ROOM_FAVORITE_SUCCESS, TOGGLE_CHAT_ROOM_FAVORITE_FAILURE,
  LOAD_CHAT_USERS_REQUEST, LOAD_CHAT_USERS_SUCCESS, LOAD_CHAT_USERS_FAILURE,
  SET_CURRENT_DIRECT_ROOM,
} from './types'

const initialState = {
  chatList: [],
  chatRooms: [],
  chatUsers: [],
  currentChatRoom: {},
  readCounts: [],
  message: '',

  socketConnected: null,
  socketError: null,
  socketSubscribe: null,
  loadChatsLoading: false,
  loadChatsDone: false,
  loadChatsError: null,
  loadChatRoomsLoading: false,
  loadChatRoomsDone: false,
  loadChatRoomsError: null,
  createChatRoomLoading: false,
  createChatRoomDone: false,
  createChatRoomError: null,
  toggleChatRoomFavoriteLoading: false,
  toggleChatRoomFavoriteDone: false,
  toggleChatRoomFavoriteError: null,
  loadChatUsersLoading: false,
  loadChatUsersDone: false,
  loadChatUsersError: null,
}

const chat = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SOCKET_CONNECT:
        draft.socketConnected = true;
        draft.socketError = null;
        draft.loadChatsLoading = false;
        draft.loadChatsDone = false;
        draft.loadChatsError = null;
        break;
      case SOCKET_DISCONNECT:
        draft.socketConnected = false;
        draft.socketError = null;
        draft.loadChatsLoading = false;
        draft.loadChatsDone = false;
        draft.loadChatsError = null;
        break;
      case SOCKET_SUBSCRIBE_SUCCESS:
        draft.socketSubscribe = true;
        if (action.payload.chat.chatRoom === draft.currentChatRoom._id) {
          draft.chatList.push(action.payload.chat);
        }
        draft.message = action.payload.message;
        break;
      case SOCKET_SUBSCRIBE_FAILURE:
        draft.socketSubscribe = false;
        draft.socketError = action.error.code;
        draft.message = action.error.message;
        break;
      case LOAD_CHATS_REQUEST:
        draft.loadChatsLoading = true;
        draft.loadChatsDone = false;
        draft.loadChatsError = null;
        break;
      case LOAD_CHATS_SUCCESS:
        draft.loadChatsLoading = false;
        draft.loadChatsDone = true;
        draft.chatList = action.payload.chats;
        draft.message = action.payload.message;
        break;
      case LOAD_CHATS_FAILURE:
        draft.loadChatsLoading = false;
        draft.loadChatsError = action.error.code;
        draft.message = action.error.message;
        break;
      case LOAD_CHAT_ROOMS_REQUEST:
        draft.loadChatRoomsLoading = true;
        draft.loadChatRoomsDone = false;
        draft.loadChatRoomsError = null;
        break;
      case LOAD_CHAT_ROOMS_SUCCESS:
        draft.loadChatRoomsLoading = false;
        draft.loadChatRoomsDone = true;
        draft.chatRooms = action.payload.chatRooms;
        draft.currentChatRoom = action.payload.chatRooms[0];
        draft.message = action.payload.message;
        break;
      case LOAD_CHAT_ROOMS_FAILURE:
        draft.loadChatRoomsLoading = false;
        draft.loadChatRoomsError = action.error.code;
        draft.message = action.error.message;
        break;
      case CREATE_CHAT_ROOM_SUCCESS:
        draft.createChatRoomLoading = false;
        draft.createChatRoomDone = true;
        draft.chatRooms.push(action.payload.chatRoom);
        draft.message = action.payload.message;
        break;
      case CREATE_CHAT_ROOM_FAILURE:
        draft.createChatRoomLoading = false;
        draft.createChatRoomError = action.error.code;
        draft.message = action.error.message;
        break;
      case SET_CURRENT_CHAT_ROOM:
        const room = draft.chatRooms.filter(room => {
          return room._id === action.payload;
        })[0]
        draft.currentChatRoom = room;
        draft.message = 'currentChatRoom 정보를 정상적으로 변경했습니다.';
        break;
      case TOGGLE_CHAT_ROOM_FAVORITE_REQUEST:
        draft.toggleChatRoomFavoriteLoading = true;
        draft.toggleChatRoomFavoriteDone = false;
        draft.toggleChatRoomFavoriteError = null;
        break;
      case TOGGLE_CHAT_ROOM_FAVORITE_SUCCESS:
        draft.toggleChatRoomFavoriteLoading = false;
        draft.toggleChatRoomFavoriteDone = true;
        draft.currentChatRoom.favorite = action.payload.favorite;
        draft.chatRooms = draft.chatRooms.map((value) => {
          if (value._id === action.payload.roomId) {
            value.favorite = !value.favorite;
          }
          return value;
        })
        draft.message = action.payload.message;
        break;
      case TOGGLE_CHAT_ROOM_FAVORITE_FAILURE:
        draft.toggleChatRoomFavoriteLoading = false;
        draft.toggleChatRoomFavoriteError = action.error.code;
        draft.message = action.error.message;
        break;
      case LOAD_CHAT_USERS_REQUEST:
        draft.loadChatUsersLoading = true;
        draft.loadChatUsersDone = false;
        draft.loadChatUsersError = null;
        break;
      case LOAD_CHAT_USERS_SUCCESS:
        draft.loadChatUsersLoading = false;
        draft.loadChatUsersDone = true;
        draft.chatUsers = action.payload.users.filter(user => (user._id !== action.payload.userId));
        draft.message = action.payload.message;
        break;
      case LOAD_CHAT_USERS_FAILURE:
        draft.loadChatUsersLoading = false;
        draft.loadChatUsersError = action.error.code;
        draft.message = action.error.message;
        break;
      case SET_CURRENT_DIRECT_ROOM:
        const directUser = draft.chatUsers.filter(user => (user._id === action.payload))[0];
        draft.currentChatRoom = {
          private: true,
          favorite: null,
          _id: directUser._id,
          title: directUser.name,
          description: `${directUser.name}님에게 안부를 물어보세요.`,
          writer: directUser,
        };
        draft.message = 'currentChatRoom 정보를 정상적으로 변경했습니다.';
        break;
      default:
        break;
    }
  });
}

export default chat;