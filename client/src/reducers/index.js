import { combineReducers } from 'redux'

import user from './user'
import movie from './movie'
import movieFavorite from './movieFavorite'

const rootReducer = (state, action) => {
  const combineReducer = combineReducers({
    user,
    movie,
    movieFavorite,
  })
  return combineReducer(state, action);
};

export default rootReducer;