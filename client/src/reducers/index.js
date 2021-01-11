import { combineReducers } from 'redux'

import user from './user'
import movie from './movie'
import movieFavorite from './movieFavorite'
import jaymall from './jaymall'
import blog from './blog'
import chat from './chat'

const rootReducer = (state, action) => {
  const combineReducer = combineReducers({
    user,
    movie,
    movieFavorite,
    jaymall,
    blog,
    chat,
  })
  return combineReducer(state, action);
};

export default rootReducer;