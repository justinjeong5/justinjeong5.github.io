import { combineReducers } from 'redux'

import user from './user'
import movie from './movie'

const rootReducer = (state, action) => {
  const combineReducer = combineReducers({
    user,
    movie,
  })
  return combineReducer(state, action);
};

export default rootReducer;