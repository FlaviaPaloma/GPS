document.getElementById('get-location').addEventListener('click', () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        document.getElementById('location').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
      }, (error) => {
        document.getElementById('location').textContent = "Erro ao obter localização";
      });
    } else {
      document.getElementById('location').textContent = "Geolocalização não suportada no seu navegador.";
    }
  });
  
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch(error => {
          console.log('Falha no registro do Service Worker:', error);
        });
    });
  }
  