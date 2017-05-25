import axios from 'axios';
import { GET_TWEETS } from './types';

export function getTweetsLists(tweets) {
  return {
    type: GET_TWEETS,
    tweets
  }
}

export function createTweet(tweet) {
  return dispatch => {
    return axios.post('/api/tweets', tweet)
    .then(tweets => {
      dispatch(getTweets());
    });
  }
}

export function getTweets() {
  return dispatch => {
    return axios.get('/api/tweets')
    .then(tweets => {
      dispatch(getTweetsLists(tweets.data.tweets));
    })
    .catch(error => {
      console.log(error);
    });
  }
}