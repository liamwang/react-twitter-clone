import { GET_TWEETS } from '../actions/types';

export default (state = [], action = {}) => {
  switch(action.type) {
    case GET_TWEETS:
      return Object.assign({}, state, {
        tweetList: action.tweets
      })
    default: return state;
  }
}