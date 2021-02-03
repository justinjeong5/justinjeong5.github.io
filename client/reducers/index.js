import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'

import user from './user'
import jaymall from './jaymall'
import blog from './blog'
import chat from './chat'
import comment from './comment'
import favorite from './favorite'


const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        jaymall,
        blog,
        chat,
        comment,
        favorite,
      })
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;