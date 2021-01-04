import produce from 'immer'

import {
  LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE,
  LOAD_MOVIE_DETAIL_REQUEST, LOAD_MOVIE_DETAIL_SUCCESS, LOAD_MOVIE_DETAIL_FAILURE,
  LOAD_MOVIE_TRAILER_REQUEST, LOAD_MOVIE_TRAILER_SUCCESS, LOAD_MOVIE_TRAILER_FAILURE,
  LOAD_MOVIE_CASTING_REQUEST, LOAD_MOVIE_CASTING_SUCCESS, LOAD_MOVIE_CASTING_FAILURE,
} from './types'

const initialState = {
  movieData: [],
  currentMovie: {},
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
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_MOVIES_REQUEST:
        draft.loadMoviesLoading = true;
        draft.loadMoviesDone = false;
        draft.loadMoviesError = null;
        break;
      case LOAD_MOVIES_SUCCESS:
        draft.loadMoviesLoading = false;
        draft.loadMoviesDone = true;
        draft.message = action.payload.message;
        draft.movieData = draft.movieData.concat(action.payload.results);
        draft.pageNumber += 1;
        break;
      case LOAD_MOVIES_FAILURE:
        draft.loadMoviesLoading = false;
        draft.loadMoviesError = action.error.code;
        draft.message = action.error.message;
        break;
      case LOAD_MOVIE_DETAIL_REQUEST:
        draft.loadMovieDetailLoading = true;
        draft.loadMovieDetailDone = false;
        draft.loadMovieDetailError = null;
        break;
      case LOAD_MOVIE_DETAIL_SUCCESS:
        draft.loadMovieDetailLoading = false;
        draft.loadMovieDetailDone = true;
        draft.message = action.payload.message;
        draft.currentMovie = action.payload;
        break;
      case LOAD_MOVIE_DETAIL_FAILURE:
        draft.loadMovieDetailLoading = false;
        draft.loadMovieDetailError = action.error.code;
        draft.message = action.error.message;
        break;
      case LOAD_MOVIE_TRAILER_REQUEST:
        draft.loadMovieTrailerLoading = true;
        draft.loadMovieTrailerDone = false;
        draft.loadMovieTrailerError = null;
        break;
      case LOAD_MOVIE_TRAILER_SUCCESS:
        draft.loadMovieTrailerLoading = false;
        draft.loadMovieTrailerDone = true;
        draft.message = action.payload.message;
        draft.currentMovie.trailer = action.payload.results[0];
        break;
      case LOAD_MOVIE_TRAILER_FAILURE:
        draft.loadMovieTrailerLoading = false;
        draft.loadMovieTrailerError = action.error.code;
        draft.message = action.error.message;
        break;
      case LOAD_MOVIE_CASTING_REQUEST:
        draft.loadMovieCastingLoading = true;
        draft.loadMovieCastingDone = false;
        draft.loadMovieCastingError = null;
        break;
      case LOAD_MOVIE_CASTING_SUCCESS:
        draft.loadMovieCastingLoading = false;
        draft.loadMovieCastingDone = true;
        draft.message = action.payload.message;
        draft.currentMovie.casting = action.payload.cast;
        break;
      case LOAD_MOVIE_CASTING_FAILURE:
        draft.loadMovieCastingLoading = false;
        draft.loadMovieCastingError = action.error.code;
        draft.message = action.error.message;
        break;
      default:
        break;
    }
  });
}

export default movie;