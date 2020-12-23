import {
  LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE,
} from './types'

const initialState = {
  movieData: [],
  pageNumber: 1,

  loadMoviesLoading: false,
  loadMoviesDone: false,
  loadMoviesError: null,
}

const movie = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES_REQUEST:
      return {
        ...state,
        loadMoviesLoading: true,
        loadMoviesDone: false,
        loadMoviesError: null,
      }
    case LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        loadMoviesLoading: false,
        loadMoviesDone: true,
        message: action.payload.message,
        movieData: [...state.movieData, ...action.payload.results],
        pageNumber: state.pageNumber + 1,
      }
    case LOAD_MOVIES_FAILURE:
      return {
        ...state,
        loadMoviesLoading: false,
        loadMoviesError: action.error.code,
        message: action.error.message,
      }
    default:
      return state;
  }
}

export default movie;