import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import HomePage from './HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

// Функция для обновления приложения
navigator.serviceWorker.getRegistration().then((registration) => {
  if (registration && registration.waiting) {
    registration.waiting.postMessage({action: 'skipWaiting'});
  }
});

navigator.serviceWorker.addEventListener('message', (event) => {
  if (event.data.action === 'refresh') {
    window.location.reload();
  }
});

function showUpdateNotification() {
  // Ваш код для отображения уведомления об обновлении
  const notification = document.createElement('div');
  notification.innerText = 'Доступно обновление! Перезагрузите приложение.';
  notification.style.position = 'fixed';
  notification.style.bottom = '10px';
  notification.style.right = '10px';
  notification.style.backgroundColor = '#f8d7da';
  notification.style.color = '#721c24';
  notification.style.padding = '10px';
  notification.style.border = '1px solid #f5c6cb';

  const reloadButton = document.createElement('button');
  reloadButton.innerText = 'Перезагрузить';
  reloadButton.onclick = () => {
      window.location.reload();
  };

  notification.appendChild(reloadButton);
  document.body.appendChild(notification);
}

showUpdateNotification();

reportWebVitals();
serviceWorkerRegistration.register();

