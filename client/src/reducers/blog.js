import {
  CREATE_BLOG_POST_REQUEST, CREATE_BLOG_POST_SUCCESS, CREATE_BLOG_POST_FAILURE,
  RESET_CREATE_BLOG_POST,
  LOAD_BLOG_POSTS_REQUEST, LOAD_BLOG_POSTS_SUCCESS, LOAD_BLOG_POSTS_FAILURE,
  RESET_LOAD_BLOG_POSTS,
  LOAD_BLOG_POST_REQUEST, LOAD_BLOG_POST_SUCCESS, LOAD_BLOG_POST_FAILURE,
} from './types'

const initialState = {
  currentBlogPost: null,
  blogPosts: [],
  message: '',
  noMorePosts: false,
  skip: 0,
  limit: 6,

  createBlogPostLoading: false,
  createBlogPostDone: false,
  createBlogPostError: null,
  loadBlogPostsLoading: false,
  loadBlogPostsDone: false,
  loadBlogPostsError: null,
  loadBlogPostLoading: false,
  loadBlogPostDone: false,
  loadBlogPostError: null,
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
    case LOAD_BLOG_POSTS_REQUEST:
      return {
        ...state,
        loadBlogPostsLoading: true,
        loadBlogPostsDone: false,
        loadBlogPostsError: null,
      }
    case LOAD_BLOG_POSTS_SUCCESS:
      return {
        ...state,
        loadBlogPostsLoading: false,
        loadBlogPostsDone: true,
        message: action.payload.message,
        blogPosts: [...state.blogPosts, ...action.payload.blogs],
        noMorePosts: action.noMorePosts,
        skip: state.skip + state.limit,
      }
    case LOAD_BLOG_POSTS_FAILURE:
      return {
        ...state,
        loadBlogPostsLoading: false,
        loadBlogPostsError: action.error.code,
        message: action.error.message,
      }
    case RESET_LOAD_BLOG_POSTS:
      return {
        ...state,
        loadBlogPostsLoading: false,
        loadBlogPostsDone: false,
        loadBlogPostsError: null,
        blogPosts: [],
        noMorePosts: false,
        skip: 0,
        limit: 6,
        message: '블로그 목록이 정상적으로 초기화되었습니다.',
      }
    case LOAD_BLOG_POST_REQUEST:
      return {
        ...state,
        loadBlogPostLoading: true,
        loadBlogPostDone: false,
        loadBlogPostError: null,
      }
    case LOAD_BLOG_POST_SUCCESS:
      return {
        ...state,
        loadBlogPostLoading: false,
        loadBlogPostDone: true,
        message: action.payload.message,
        currentBlogPost: {
          ...action.payload.blog,
          writer: {
            userId: action.payload.blog.writer._id,
            name: action.payload.blog.writer.name,
            email: action.payload.blog.writer.email,
            image: action.payload.blog.writer.image,
          }
        },
      }
    case LOAD_BLOG_POST_FAILURE:
      return {
        ...state,
        loadBlogPostLoading: false,
        loadBlogPostError: action.error.code,
        message: action.error.message,
      }
    default:
      return state
  }
}

export default blog;