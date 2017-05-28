import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewTweetPage from './components/tweets/NewTweetPage';
import ProfilePage from './components/profile/ProfilePage';
// higher order components used to protect client side routing
import tweetRedirect from './utils/tweetRedirect';
import loginRedirect from './utils/loginRedirect';

export default (
  <App>
    <Switch>
      <Route exact path="/" component={Greetings} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={loginRedirect(LoginPage)} />
      <Route path="/tweets" component={tweetRedirect(NewTweetPage)} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
  </App>
);


    