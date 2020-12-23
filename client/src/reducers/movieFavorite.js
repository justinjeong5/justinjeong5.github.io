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
  switch (action.type) {
    case LOAD_FAVORITE_NUMBER_REQUEST:
      return {
        ...state,
        loadFavoriteNumberLoading: true,
        loadFavoriteNumberDone: false,
        loadFavoriteNumberError: null,
      }
    case LOAD_FAVORITE_NUMBER_SUCCESS:
      return {
        ...state,
        loadFavoriteNumberLoading: false,
        loadFavoriteNumberDone: true,
        message: action.payload.message,
        favoriteNumber: action.payload.favoriteNumber,
      }
    case LOAD_FAVORITE_NUMBER_FAILURE:
      return {
        ...state,
        loadFavoriteNumberLoading: false,
        loadFavoriteNumberError: action.error.code,
        message: action.error.message,
      }
    case CHANGE_FAVORITE_REQUEST:
      return {
        ...state,
        changeFavoriteLoading: true,
        changeFavoriteDone: false,
        changeFavoriteError: null,
      }
    case CHANGE_FAVORITE_SUCCESS:
      return {
        ...state,
        changeFavoriteLoading: false,
        changeFavoriteDone: true,
        message: action.payload.message,
        isFavorited: action.payload.isFavorited,
      }
    case CHANGE_FAVORITE_FAILURE:
      return {
        ...state,
        changeFavoriteLoading: false,
        changeFavoriteError: action.error.code,
        message: action.error.message,
      }
    case LOAD_IS_FAVORITED_REQUEST:
      return {
        ...state,
        loadIsFavoritedLoading: true,
        loadIsFavoritedDone: false,
        loadIsFavoritedError: null,
      }
    case LOAD_IS_FAVORITED_SUCCESS:
      return {
        ...state,
        loadIsFavoritedLoading: false,
        loadIsFavoritedDone: true,
        message: action.payload.message,
        isFavorited: action.payload.isFavorited,
      }
    case LOAD_IS_FAVORITED_FAILURE:
      return {
        ...state,
        loadIsFavoritedLoading: false,
        loadIsFavoritedError: action.error.code,
        message: action.error.message,
      }
    case LOAD_FAVORITED_LIST_REQUEST:
      return {
        ...state,
        loadFavoritedListLoading: true,
        loadFavoritedListDone: false,
        loadFavoritedListError: null,
      }
    case LOAD_FAVORITED_LIST_SUCCESS:
      return {
        ...state,
        loadFavoritedListLoading: false,
        loadFavoritedListDone: true,
        message: action.payload.message,
        favoritedList: action.payload.favoritedList,
      }
    case LOAD_FAVORITED_LIST_FAILURE:
      return {
        ...state,
        loadFavoritedListLoading: false,
        loadFavoritedListError: action.error.code,
        message: action.error.message,
      }
    default:
      return {
        ...state
      }
  }
}

export default favorite;