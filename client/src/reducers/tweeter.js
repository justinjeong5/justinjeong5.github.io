import faker from 'faker'
import produce from 'immer'

import { v4 as uuidv4 } from 'uuid'
import {
  LOAD_TWEETS_REQUEST, LOAD_TWEETS_SUCCESS, LOAD_TWEETS_FAILURE,
  ADD_TWEET_REQUEST, ADD_TWEET_SUCCESS, ADD_TWEET_FAILURE,
  REMOVE_TWEET_REQUEST, REMOVE_TWEET_SUCCESS, REMOVE_TWEET_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
} from './types'

export const generateDummyTweet = (number) => (Array(number).fill().map(_ => dummyData({ id: uuidv4(), content: faker.lorem.sentences() })))

const dummyData = (data) => ({
  id: data.id,
  User: {
    id: uuidv4(),
    nickname: faker.name.findName(),
  },
  content: `${data.content}\n자동으로 생성된 정보입니다.`,
  Images: Array.from(Array(Math.floor(Math.random() * 3) + 1)).map(_ => ({ src: faker.image.image() })),
  Comments: Array.from(Array(2)).map(_ => (dummyComment(faker.lorem.sentence()))),
})

const dummyComment = (comment) => ({
  User: {
    id: faker.random.number(),
    nickname: faker.name.firstName(),
  },
  content: `${comment}\n자동으로 생성된 정보입니다.`,
})

const initialState = {
  tweetsList: [],
  imagePaths: [],
  hasMoreTweet: true,

  loadTweetsDone: false,
  loadTweetsLoading: false,
  loadTweetsError: null,
  addTweetDone: false,
  addTweetLoading: false,
  addTweetError: null,
  removeTweetDone: false,
  removeTweetLoading: false,
  removeTweetError: null,
  addCommentDone: false,
  addCommentLoading: false,
  addCommentError: null,
}

const tweeterReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_TWEETS_REQUEST:
        draft.loadTweetsLoading = true;
        draft.loadTweetsDone = false;
        draft.loadTweetsError = null;
        break;
      case LOAD_TWEETS_SUCCESS:
        draft.tweetsList.push(...action.data);
        draft.message = action.message;
        draft.loadTweetsLoading = false;
        draft.loadTweetsDone = true;
        draft.hasMoreTweet = draft.tweetsList.length < 50;
        break;
      case LOAD_TWEETS_FAILURE:
        draft.message = action.message;
        draft.loadTweetsLoading = false;
        draft.loadTweetsError = action.error;
        break;
      case ADD_TWEET_REQUEST:
        draft.addTweetLoading = true;
        draft.addTweetDone = false;
        draft.addTweetError = null;
        break;
      case ADD_TWEET_SUCCESS:
        draft.tweetsList.unshift(dummyData(action.data));
        draft.message = action.message;
        draft.addTweetLoading = false;
        draft.addTweetDone = true;
        break;
      case ADD_TWEET_FAILURE:
        draft.message = action.message;
        draft.addTweetLoading = false;
        draft.addTweetError = action.error;
        break;
      case REMOVE_TWEET_REQUEST:
        draft.removeTweetLoading = true;
        draft.removeTweetDone = false;
        draft.removeTweetError = null;
        break;
      case REMOVE_TWEET_SUCCESS:
        const tweetIndex = draft.tweetsList.findIndex((tweet) => tweet.id === action.data.id);
        draft.tweetsList.splice(tweetIndex, 1);
        draft.message = action.message;
        draft.removeTweetLoading = false;
        draft.removeTweetDone = true;
        break;
      case REMOVE_TWEET_FAILURE:
        draft.message = action.message;
        draft.removeTweetLoading = false;
        draft.removeTweetError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS: {
        const tweet = draft.tweetsList.find((post) => post.id === action.data.postId);
        tweet.Comments.unshift(dummyComment(action.data.comment));
        draft.message = action.message;
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }
      case ADD_COMMENT_FAILURE:
        draft.message = action.message;
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      default:
        break;
    }
  });
}

export default tweeterReducer;