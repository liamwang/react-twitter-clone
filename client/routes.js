import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewTweetPage from './components/tweets/NewTweetPage';
// higher order components used to protect client side routing
import requireAuth from './utils/requireAuth';
import loginRedirect from './utils/loginRedirect';

export default (
  <App>
    <Switch>
      <Route exact path="/" component={Greetings} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={loginRedirect(LoginPage)} />
      <Route path="/tweets" component={requireAuth(NewTweetPage)} />
    </Switch>
  </App>
);


    