import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React Twitter Clone';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}