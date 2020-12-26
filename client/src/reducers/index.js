import { combineReducers } from 'redux'

import user from './user'
import movie from './movie'
import movieFavorite from './movieFavorite'
import jaymall from './jaymall'
import blog from './blog'

const rootReducer = (state, action) => {
  const combineReducer = combineReducers({
    user,
    movie,
    movieFavorite,
    jaymall,
    blog,
  })
  return combineReducer(state, action);
};

export default rootReducer;