import produce from 'immer'

import {
  CREATE_BLOG_POST_REQUEST, CREATE_BLOG_POST_SUCCESS, CREATE_BLOG_POST_FAILURE,
  RESET_CREATE_BLOG_POST,
  LOAD_BLOG_POSTS_REQUEST, LOAD_BLOG_POSTS_SUCCESS, LOAD_BLOG_POSTS_FAILURE,
  RESET_LOAD_BLOG_POSTS,
  LOAD_BLOG_POST_REQUEST, LOAD_BLOG_POST_SUCCESS, LOAD_BLOG_POST_FAILURE,
  UPLOAD_BLOG_DATASET_REQUEST, UPLOAD_BLOG_DATASET_SUCCESS, UPLOAD_BLOG_DATASET_FAILURE,
  RESET_UPLOAD_BLOG_DATASET,
} from './types'

const initialState = {
  currentBlogPost: {
    writer: {}
  },
  blogPosts: [],
  uploadDataset: {
    files: [],
  },
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
  uploadBlogDatasetLoading: false,
  uploadBlogDatasetDone: false,
  uploadBlogDatasetError: null,
}

const blog = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CREATE_BLOG_POST_REQUEST:
        draft.createBlogPostLoading = true;
        draft.createBlogPostDone = false;
        draft.createBlogPostError = null;
        break;
      case CREATE_BLOG_POST_SUCCESS:
        draft.createBlogPostLoading = false;
        draft.createBlogPostDone = true;
        draft.blogPosts.push(action.payload.blog);
        draft.message = action.payload.message;
        break;
      case CREATE_BLOG_POST_FAILURE:
        draft.createBlogPostLoading = false;
        draft.createBlogPostError = action.error.code;
        draft.message = action.error.message;
        break;
      case RESET_CREATE_BLOG_POST:
        draft.createBlogPostLoading = false;
        draft.createBlogPostDone = false;
        draft.createBlogPostError = null;
        draft.message = '블로그 작성이 정상적으로 초기화되었습니다.';
        break;
      case LOAD_BLOG_POSTS_REQUEST:
        draft.loadBlogPostsLoading = true;
        draft.loadBlogPostsDone = false;
        draft.loadBlogPostsError = null;
        break;
      case LOAD_BLOG_POSTS_SUCCESS:
        draft.loadBlogPostsLoading = false;
        draft.loadBlogPostsDone = true;
        draft.message = action.payload.message;
        draft.blogPosts.push(...action.payload.blogs);
        draft.noMorePosts = action.noMorePosts;
        draft.skip += draft.limit;
        break;
      case LOAD_BLOG_POSTS_FAILURE:
        draft.loadBlogPostsLoading = false;
        draft.loadBlogPostsError = action.error.code;
        draft.message = action.error.message;
        break;
      case RESET_LOAD_BLOG_POSTS:
        draft.loadBlogPostsLoading = false;
        draft.loadBlogPostsDone = false;
        draft.loadBlogPostsError = null;
        draft.blogPosts = [];
        draft.noMorePosts = false;
        draft.skip = 0;
        draft.limit = 6;
        draft.message = '블로그 목록이 정상적으로 초기화되었습니다.';
        break;
      case LOAD_BLOG_POST_REQUEST:
        draft.loadBlogPostLoading = true;
        draft.loadBlogPostDone = false;
        draft.loadBlogPostError = null;
        break;
      case LOAD_BLOG_POST_SUCCESS:
        draft.loadBlogPostLoading = false;
        draft.loadBlogPostDone = true;
        draft.message = action.payload.message;
        draft.currentBlogPost._id = action.payload.blog._id;
        draft.currentBlogPost.title = action.payload.blog.title;
        draft.currentBlogPost.content = action.payload.blog.content;
        draft.currentBlogPost.createdAt = action.payload.blog.createdAt;
        draft.currentBlogPost.writer.userId = action.payload.blog.writer._id;
        draft.currentBlogPost.writer.name = action.payload.blog.writer.name;
        draft.currentBlogPost.writer.email = action.payload.blog.writer.email;
        draft.currentBlogPost.writer.image = action.payload.blog.writer.image;
        break;
      case LOAD_BLOG_POST_FAILURE:
        draft.loadBlogPostLoading = false;
        draft.loadBlogPostError = action.error.code;
        draft.message = action.error.message;
        break;
      case UPLOAD_BLOG_DATASET_REQUEST:
        draft.uploadBlogDatasetLoading = true;
        draft.uploadBlogDatasetDone = false;
        draft.uploadBlogDatasetError = null;
        break;
      case UPLOAD_BLOG_DATASET_SUCCESS:
        draft.uploadBlogDatasetLoading = false;
        draft.uploadBlogDatasetDone = true;
        draft.uploadDataset.url = action.payload.url;
        draft.uploadDataset.fileName = action.payload.fileName;
        draft.uploadDataset.dataType = action.payload.dataType;
        draft.uploadDataset.files.push(action.payload.file);
        draft.message = action.payload.message;
        break;
      case UPLOAD_BLOG_DATASET_FAILURE:
        draft.uploadBlogDatasetLoading = false;
        draft.uploadBlogDatasetError = action.error.code;
        draft.message = action.error.message;
        break;
      case RESET_UPLOAD_BLOG_DATASET:
        draft.uploadBlogDatasetLoading = false;
        draft.uploadBlogDatasetDone = false;
        break;
      default:
        break;
    }
  })
}

export default blog;