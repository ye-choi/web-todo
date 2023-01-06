const API_KEY = config.apikey;
const weather = document.querySelector(".weather span:first-child");
const city = document.querySelector(".weather span:last-child");

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
    });
}

function onGeoFailed() {
  alert("위치 정보를 얻지 못했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailed);
