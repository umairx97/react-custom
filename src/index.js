import React from 'react';
import ReactDOM from 'react-dom';
const title = 'React with Webpack and Babel';
ReactDOM.render(
  <div>{title} this is</div>,
  document.getElementById('app')
);

module.hot.accept();