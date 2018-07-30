import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

import ReduxPromise from 'redux-promise';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './redux/reducers';

const appStore = createStore(
  appReducer, compose(
    applyMiddleware(ReduxPromise),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>, 
  document.getElementById('root'));

