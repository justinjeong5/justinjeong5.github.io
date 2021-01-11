import produce from 'immer'

import {
  POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS, POST_COMMENT_FAILURE,
  LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE,
} from './types'

const initialState = {
  commentList: [],
  message: '',

  postCommentLoading: false,
  postCommentDone: false,
  postCommentError: null,
  loadCommentsLoading: false,
  loadCommentsDone: false,
  loadCommentsError: null,
}

const comment = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case POST_COMMENT_REQUEST:
        draft.postCommentLoading = true;
        draft.postCommentDone = false;
        draft.postCommentError = null;
        break;
      case POST_COMMENT_SUCCESS:
        draft.postCommentLoading = false;
        draft.postCommentDone = true;
        draft.message = action.payload.message;
        draft.commentList.push(action.payload.comment);
        break;
      case POST_COMMENT_FAILURE:
        draft.postCommentLoading = false;
        draft.postCommentError = action.error.code;
        draft.message = action.error.message;
        break;
      case LOAD_COMMENTS_REQUEST:
        draft.loadCommentsLoading = true;
        draft.loadCommentsDone = false;
        draft.loadCommentsError = null;
        break;
      case LOAD_COMMENTS_SUCCESS:
        draft.loadCommentsLoading = false;
        draft.loadCommentsDone = true;
        draft.message = action.payload.message;
        draft.commentList = action.payload.comments;
        break;
      case LOAD_COMMENTS_FAILURE:
        draft.loadCommentsLoading = false;
        draft.loadCommentsError = action.error.code;
        draft.message = action.error.message;
        break;
      default:
        break;
    }
  });
}

export default comment;