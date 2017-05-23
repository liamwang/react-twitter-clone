import { GET_TWEETS } from '../actions/types';

export default (state = [], action = {}) => {
  switch(action.type) {
    case GET_TWEETS:
      return {
        tweetList: action.tweets
      }
    default: return state;
  }
}