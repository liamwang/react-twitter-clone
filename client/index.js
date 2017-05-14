import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root'));

// Hot Loading
if (module.hot) {
  module.hot.accept();
}