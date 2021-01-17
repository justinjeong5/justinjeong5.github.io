import { combineReducers } from 'redux'

import user from './user'
import movie from './movie'
import jaymall from './jaymall'
import blog from './blog'
import chat from './chat'
import comment from './comment'
import favorite from './favorite'

const rootReducer = (state, action) => {
  const combineReducer = combineReducers({
    user,
    movie,
    jaymall,
    blog,
    chat,
    comment,
    favorite,
  })
  return combineReducer(state, action);
};

export default rootReducer;