import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Функция для обновления приложения
// function updateApp() {
  navigator.serviceWorker.getRegistration().then((registration) => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({action: 'skipWaiting'});
    }
  });
// }

navigator.serviceWorker.addEventListener('message', (event) => {
  if (event.data.action === 'refresh') {
    window.location.reload();
  }
});

reportWebVitals();
serviceWorkerRegistration.register();