import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'

import user from './user'
import blog from './blog'
import comment from './comment'


const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        blog,
        comment,
      })
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;