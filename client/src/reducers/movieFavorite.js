import produce from 'immer'

import {
  LOAD_FAVORITE_NUMBER_REQUEST, LOAD_FAVORITE_NUMBER_SUCCESS, LOAD_FAVORITE_NUMBER_FAILURE,
  CHANGE_FAVORITE_REQUEST, CHANGE_FAVORITE_SUCCESS, CHANGE_FAVORITE_FAILURE,
  LOAD_IS_FAVORITED_REQUEST, LOAD_IS_FAVORITED_SUCCESS, LOAD_IS_FAVORITED_FAILURE,
  LOAD_FAVORITED_LIST_REQUEST, LOAD_FAVORITED_LIST_SUCCESS, LOAD_FAVORITED_LIST_FAILURE,
} from './types'

const initialState = {
  favoriteNumber: 0,
  isFavorited: false,
  favoritedList: [],
  message: '',

  loadFavoriteNumberLoading: false,
  loadFavoriteNumberDone: false,
  loadFavoriteNumberError: null,
  changeFavoriteLoading: false,
  changeFavoriteDone: false,
  changeFavoriteError: null,
  loadIsFavoritedLoading: false,
  loadIsFavoritedDone: false,
  loadIsFavoritedError: null,
  loadFavoritedListLoading: false,
  loadFavoritedListDone: false,
  loadFavoritedListError: null,
}

const favorite = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_FAVORITE_NUMBER_REQUEST:
        draft.loadFavoriteNumberLoading = true;
        draft.loadFavoriteNumberDone = false;
        draft.loadFavoriteNumberError = null;
        break;
      case LOAD_FAVORITE_NUMBER_SUCCESS:
        draft.loadFavoriteNumberLoading = false;
        draft.loadFavoriteNumberDone = true;
        draft.message = action.payload.message;
        draft.favoriteNumber = action.payload.favoriteNumber;
        break;
      case LOAD_FAVORITE_NUMBER_FAILURE:
        draft.loadFavoriteNumberLoading = false;
        draft.loadFavoriteNumberError = action.error.code;
        draft.message = action.error.message;
        break;
      case CHANGE_FAVORITE_REQUEST:
        draft.changeFavoriteLoading = true;
        draft.changeFavoriteDone = false;
        draft.changeFavoriteError = null;
        break;
      case CHANGE_FAVORITE_SUCCESS:
        draft.changeFavoriteLoading = false;
        draft.changeFavoriteDone = true;
        draft.message = action.payload.message;
        draft.isFavorited = action.payload.isFavorited;
        break;
      case CHANGE_FAVORITE_FAILURE:
        draft.changeFavoriteLoading = false;
        draft.changeFavoriteError = action.error.code;
        draft.message = action.error.message;
        break;
      case LOAD_IS_FAVORITED_REQUEST:
        draft.loadIsFavoritedLoading = true;
        draft.loadIsFavoritedDone = false;
        draft.loadIsFavoritedError = null;
        break;
      case LOAD_IS_FAVORITED_SUCCESS:
        draft.loadIsFavoritedLoading = false;
        draft.loadIsFavoritedDone = true;
        draft.message = action.payload.message;
        draft.isFavorited = action.payload.isFavorited;
        break;
      case LOAD_IS_FAVORITED_FAILURE:
        draft.loadIsFavoritedLoading = false;
        draft.loadIsFavoritedError = action.error.code;
        draft.message = action.error.message;
        break;
      case LOAD_FAVORITED_LIST_REQUEST:
        draft.loadFavoritedListLoading = true;
        draft.loadFavoritedListDone = false;
        draft.loadFavoritedListError = null;
        break;
      case LOAD_FAVORITED_LIST_SUCCESS:
        draft.loadFavoritedListLoading = false;
        draft.loadFavoritedListDone = true;
        draft.message = action.payload.message;
        draft.favoritedList = action.payload.favoritedList;
        break;
      case LOAD_FAVORITED_LIST_FAILURE:
        draft.loadFavoritedListLoading = false;
        draft.loadFavoritedListError = action.error.code;
        draft.message = action.error.message;
        break;
      default:
        break;
    }

  })
}

export default favorite;