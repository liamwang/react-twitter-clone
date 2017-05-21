import axios from 'axios';

export function createTweet(tweet) {
  return dispatch => {
    return axios.post('/api/tweets', tweet);
  }
}