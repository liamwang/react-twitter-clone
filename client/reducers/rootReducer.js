import  { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import auth from './auth';
import tweets from './tweets';

export default combineReducers({
  flashMessages,
  auth,
  tweets
});