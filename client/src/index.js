import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Kard from './components/Kard';
import store from './store';
import './index.css';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Kard />
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);
