// src/serviceWorkerRegistration.js

// Это код для регистрации service worker
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.\d+){0,2}\.\d+$/
    )
  );
  
  export function register(config) {
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
    
    if ('serviceWorker' in navigator) {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

      if (publicUrl.origin !== window.location.origin) {
        return;
      }
  
      window.addEventListener('load', () => {
        // новое
        navigator.serviceWorker.register('service-worker-v2.js')
            .then(registration => {
              console.log('Service Worker зарегистрирован с областью:', registration.scope);
    
              registration.onupdatefound = () => {
                  const newWorker = registration.installing;
                  newWorker.onstatechange = () => {
                      if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                          // Новая версия доступна
                          showUpdateNotification(); // Функция для показа сообщения
                      }
                  };
              };
            })
            .catch(error => {
              console.error('Ошибка регистрации Service Worker:', error);
            });
          
        navigator.serviceWorker.addEventListener('message', event => {
            if (event.data.type === 'NEW_VERSION_AVAILABLE') {
                showUpdateNotification();
            }
        });

        // старое
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          checkValidServiceWorker(swUrl, config);
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'Этот PWA работает в режиме разработки. Чтобы запустить его в режиме продакшена, используйте npm run build.'
            );
          });
        } else {
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then(registration => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              // Новая версия найдена
              if (navigator.serviceWorker.controller) {
                console.log(
                  'Новое содержимое доступно, перезагрузите страницу.'
                );
              } else {
                console.log('Содержимое кэшировано для оффлайн-доступа.');
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('Ошибка при регистрации service worker:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    })
      .then(response => {
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log(
          'Нет доступа к сервисному работнику. Убедитесь, что ваш сервер работает.'
        );
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    }
  }