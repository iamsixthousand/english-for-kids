import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import combinedReducer from './state/reducers';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import offlineCheck from './@core/middleware/offlineCheck';
import { PUBLIC_URL } from './@core/constants';

export const store = createStore(combinedReducer, applyMiddleware(offlineCheck));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// navigator.serviceWorker.addEventListener('controllerchange', () => {
//   window.location.reload();
// });

reportWebVitals();
