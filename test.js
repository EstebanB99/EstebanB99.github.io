function getTrafficData() {
    fetch('https://example.com/api/traffic-data?public_key=pub_d957728c72404daab33fe681059acaad')
      .then(response => response.json())
      .then(data => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        days.forEach((day, index) => {
          const trafficCount = data[day.toLowerCase()];
          document.querySelector(`.traffic-count-${index}`).textContent = trafficCount;
        });
      })
      .catch(error => console.error(error));
  }
  getTrafficData();