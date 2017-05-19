import axios from 'axios';

export function createTweet(tweet) {
  return dispatch => {
    console.log(tweet);
    return axios.post('/api/tweets', tweet);
  }
}