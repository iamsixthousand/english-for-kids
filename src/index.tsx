import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combinedReducer from './state/reducers';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import offlineCheck from './@core/middleware/offlineCheck';

const store = createStore(combinedReducer, applyMiddleware(offlineCheck));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
