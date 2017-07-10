import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Kard from './components/Kard';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Kard />
  </Provider>,
  document.getElementById('root')
);
