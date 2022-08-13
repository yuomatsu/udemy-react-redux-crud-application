import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // readEvents内で非同期処理を実行するため

import './index.css';
import reducer from './reduces';
import EventsIndex from './components/events_index';
import reportWebVitals from './reportWebVitals';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();