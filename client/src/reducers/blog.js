import {
  CREATE_BLOG_POST_REQUEST, CREATE_BLOG_POST_SUCCESS, CREATE_BLOG_POST_FAILURE,
  RESET_CREATE_BLOG_POST,
} from './types'

const initialState = {
  message: '',

  createBlogPostLoading: false,
  createBlogPostDone: false,
  createBlogPostError: null,
}

const blog = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BLOG_POST_REQUEST:
      return {
        ...state,
        createBlogPostLoading: true,
        createBlogPostDone: false,
        createBlogPostError: null,
      }
    case CREATE_BLOG_POST_SUCCESS:
      return {
        ...state,
        createBlogPostLoading: false,
        createBlogPostDone: true,
        blogPosts: [...state.blogPosts, action.payload.blog],
        message: action.payload.message,
      }
    case CREATE_BLOG_POST_FAILURE:
      return {
        ...state,
        createBlogPostLoading: false,
        createBlogPostError: action.error.code,
        message: action.error.message,
      }
    case RESET_CREATE_BLOG_POST:
      return {
        ...state,
        createBlogPostLoading: false,
        createBlogPostDone: false,
        createBlogPostError: null,
        message: '블로그 작성이 정상적으로 초기화되었습니다.',
      }
    default:
      return state
  }
}

export default blog;