import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // readEvents内で非同期処理を実行するため
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import reducer from './reduces';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import reportWebVitals from './reportWebVitals';
import { apply } from 'prelude-ls';
// import registerServiceWorker from './registerServiceWorker';

const enhancer = process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/events/new" element={<EventsNew />} />
        <Route path="/events/:id" element={<EventsShow />} />
        <Route exact path="/events" element={<EventsShow />} />
        <Route exact path="/" element={<EventsIndex />} />
      </Routes>
      {/* <Switch>
        <Route path="/events/new" component={EventsNew} />
        <Route path="/events/:id" component={EventsShow} />
        <Route exact path="/events" component={EventsShow} />
        <Route exact path="/" component={EventsIndex} />
      </Switch> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();