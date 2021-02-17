import produce from 'immer'

import {
  REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILURE,
  AUTHENTICATE_USER_REQUEST, AUTHENTICATE_USER_SUCCESS, AUTHENTICATE_USER_FAILURE,
  EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAILURE,
  CONFIRM_USER_REQUEST, CONFIRM_USER_SUCCESS, CONFIRM_USER_FAILURE,
  UPLOAD_USER_IMAGE_REQUEST, UPLOAD_USER_IMAGE_SUCCESS, UPLOAD_USER_IMAGE_FAILURE,
} from './types'

const initialState = {
  currentUser: {},

  registerUserLoading: false,
  registerUserDone: false,
  registerUserError: null,
  loginUserLoading: false,
  loginUserDone: false,
  loginUserError: null,
  logoutUserLoading: false,
  logoutUserDone: false,
  logoutUserError: null,
  authenticateUserLoading: false,
  authenticateUserDone: false,
  authenticateUserError: null,
  confirmUserLoading: false,
  confirmUserDone: false,
  confirmUserError: null,
  editUserLoading: false,
  editUserDone: false,
  editUserError: null,
  uploadUserImageLoading: false,
  uploadUserImageDone: false,
  uploadUserImageError: null,
}

const user = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        draft.registerUserLoading = true;
        draft.registerUserDone = false;
        draft.registerUserError = null;
        break;
      case REGISTER_USER_SUCCESS:
        draft.registerUserLoading = false;
        draft.registerUserDone = true;
        break;
      case REGISTER_USER_FAILURE:
        draft.registerUserLoading = false;
        draft.registerUserError = action.error;
        break;
      case LOGIN_USER_REQUEST:
        draft.loginUserLoading = true;
        draft.loginUserDone = false;
        draft.loginUserError = null;
        break;
      case LOGIN_USER_SUCCESS:
        draft.loginUserLoading = false;
        draft.loginUserDone = true;
        draft.currentUser.userId = action.payload.userId;
        break;
      case LOGIN_USER_FAILURE:
        draft.loginUserLoading = false;
        draft.loginUserError = action.error;
        break;
      case LOGOUT_USER_REQUEST:
        draft.logoutUserLoading = true;
        draft.logoutUserDone = false;
        draft.logoutUserError = null;
        break;
      case LOGOUT_USER_SUCCESS:
        draft.logoutUserLoading = false;
        draft.logoutUserDone = true;
        draft.currentUser = {};
        break;
      case LOGOUT_USER_FAILURE:
        draft.logoutUserLoading = false;
        draft.logoutUserError = action.error;
        break;
      case AUTHENTICATE_USER_REQUEST:
        draft.authenticateUserLoading = true;
        draft.authenticateUserDone = false;
        draft.authenticateUserError = null;
        break;
      case AUTHENTICATE_USER_SUCCESS:
        draft.currentUser = action.payload.user;

        draft.authenticateUserLoading = false;
        draft.authenticateUserDone = true;
        draft.registerUserLoading = false;
        draft.registerUserDone = false;
        draft.registerUserError = null;
        draft.loginUserLoading = false;
        draft.loginUserDone = false;
        draft.loginUserError = null;
        draft.logoutUserLoading = false;
        draft.logoutUserDone = false;
        draft.logoutUserError = null;
        draft.confirmUserLoading = false;
        draft.confirmUserDone = false;
        draft.confirmUserError = null;
        draft.editUserLoading = false;
        draft.editUserDone = false;
        draft.editUserError = null;
        break;
      case AUTHENTICATE_USER_FAILURE:
        draft.currentUser = action.error.user;
        draft.authenticateUserLoading = false;
        draft.authenticateUserError = action.error.err;
        break;
      case CONFIRM_USER_REQUEST:
        draft.confirmUserLoading = true;
        draft.confirmUserDone = false;
        draft.confirmUserError = null;
        break;
      case CONFIRM_USER_SUCCESS:
        draft.confirmUserLoading = false;
        draft.confirmUserDone = true;
        break;
      case CONFIRM_USER_FAILURE:
        draft.confirmUserLoading = false;
        draft.confirmUserError = action.error;
        break;
      case EDIT_USER_REQUEST:
        draft.editUserLoading = true;
        draft.editUserDone = false;
        draft.editUserError = null;
        break;
      case EDIT_USER_SUCCESS:
        draft.editUserLoading = false;
        draft.editUserDone = true;
        draft.currentUser.isAuth = true;
        break;
      case EDIT_USER_FAILURE:
        draft.editUserLoading = false;
        draft.editUserError = action.error;
        break;
      case UPLOAD_USER_IMAGE_REQUEST:
        draft.uploadUserImageLoading = true;
        draft.uploadUserImageDone = false;
        draft.uploadUserImageError = null;
        break;
      case UPLOAD_USER_IMAGE_SUCCESS:
        draft.uploadUserImageLoading = false;
        draft.uploadUserImageDone = true;
        draft.currentUser.image = action.payload.url;
        break;
      case UPLOAD_USER_IMAGE_FAILURE:
        draft.uploadUserImageLoading = false;
        draft.uploadUserImageError = action.error;
        break;
      default:
        break;
    }
  });
}

export default user;