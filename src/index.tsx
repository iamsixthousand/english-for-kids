import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

window.addEventListener('load', async () => {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    try {
      // const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      const reg = await navigator.serviceWorker.register(
        `${process.env.PUBLIC_URL}/service-worker.js`
      );
      console.log('success', reg);
    } catch (e) {
      console.log('fail');
    }
  }
});

reportWebVitals();
