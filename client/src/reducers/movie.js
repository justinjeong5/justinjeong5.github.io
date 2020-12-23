import {
  LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE,
  LOAD_MOVIE_DETAIL_REQUEST, LOAD_MOVIE_DETAIL_SUCCESS, LOAD_MOVIE_DETAIL_FAILURE,
  LOAD_MOVIE_TRAILER_REQUEST, LOAD_MOVIE_TRAILER_SUCCESS, LOAD_MOVIE_TRAILER_FAILURE,
  LOAD_MOVIE_CASTING_REQUEST, LOAD_MOVIE_CASTING_SUCCESS, LOAD_MOVIE_CASTING_FAILURE,
} from './types'

const initialState = {
  movieData: [],
  currentMovie: null,
  pageNumber: 1,

  loadMoviesLoading: false,
  loadMoviesDone: false,
  loadMoviesError: null,
  loadMovieDetailLoading: false,
  loadMovieDetailDone: false,
  loadMovieDetailError: null,
  loadMovieTrailerLoading: false,
  loadMovieTrailerDone: false,
  loadMovieTrailerError: null,
  loadMovieCastingLoading: false,
  loadMovieCastingDone: false,
  loadMovieCastingError: null,
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
    case LOAD_MOVIE_DETAIL_REQUEST:
      return {
        ...state,
        loadMovieDetailLoading: true,
        loadMovieDetailDone: false,
        loadMovieDetailError: null,
      }
    case LOAD_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        loadMovieDetailLoading: false,
        loadMovieDetailDone: true,
        message: action.payload.message,
        currentMovie: action.payload,
      }
    case LOAD_MOVIE_DETAIL_FAILURE:
      return {
        ...state,
        loadMovieDetailLoading: false,
        loadMovieDetailError: action.error.code,
        message: action.error.message,
      }
    case LOAD_MOVIE_TRAILER_REQUEST:
      return {
        ...state,
        loadMovieTrailerLoading: true,
        loadMovieTrailerDone: false,
        loadMovieTrailerError: null,
      }
    case LOAD_MOVIE_TRAILER_SUCCESS:
      return {
        ...state,
        loadMovieTrailerLoading: false,
        loadMovieTrailerDone: true,
        message: action.payload.message,
        currentMovie: {
          ...state.currentMovie,
          trailer: action.payload.results[0],
        },
      }
    case LOAD_MOVIE_TRAILER_FAILURE:
      return {
        ...state,
        loadMovieTrailerLoading: false,
        loadMovieTrailerError: action.error.code,
        message: action.error.message,
      }
    case LOAD_MOVIE_CASTING_REQUEST:
      return {
        ...state,
        loadMovieCastingLoading: true,
        loadMovieCastingDone: false,
        loadMovieCastingError: null,
      }
    case LOAD_MOVIE_CASTING_SUCCESS:
      return {
        ...state,
        loadMovieCastingLoading: false,
        loadMovieCastingDone: true,
        message: action.payload.message,
        currentMovie: {
          ...state.currentMovie,
          casting: action.payload.cast,
        },
      }
    case LOAD_MOVIE_CASTING_FAILURE:
      return {
        ...state,
        loadMovieCastingLoading: false,
        loadMovieCastingError: action.error.code,
        message: action.error.message,
      }
    default:
      return state;
  }
}

export default movie;