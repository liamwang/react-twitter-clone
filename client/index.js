import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';

render(
  <Router history={createBrowserHistory()}>
    {routes}
  </Router>,
  document.getElementById('root'));

// Hot Loading
if (module.hot) {
  module.hot.accept();
}