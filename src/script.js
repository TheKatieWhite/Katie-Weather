let now = new Date();
let day = now.getDay();

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let currentInfo = document.querySelector("#currentDayTime");
currentInfo.innerHTML = `${weekDays[day]} ${hours}:${minutes}, `;

//Current City
function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
  axios
    .get(`${apiUrl}lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
    .then(showLocal);
}

navigator.geolocation.getCurrentPosition(getPosition);

function showLocal(response) {
  let newCity = response.data.name;
  let displayCity = document.querySelector("#currentCity");
  displayCity.innerHTML = `<strong>${newCity}</strong>`;

  let temp = Math.round(response.data.main.temp);
  let displayTemp = document.querySelector("#tempNow");
  displayTemp.innerHTML = `${temp}°`;
  let f = document.querySelector("#fah");
  f.innerHTML = "<a style='color: #3ebdff'> F </a>";
  let c = document.querySelector("#cel");
  c.innerHTML = "<a style='color: blue'> C </a>";

  let conditions = response.data.weather[0].main;
  let displayConditions = document.querySelector("#condition");
  displayConditions.innerHTML = `${conditions}`;

  let humidity = response.data.main.humidity;
  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = `${humidity}`;

  let wind = response.data.wind.speed;
  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = `${wind}`;
}

//Search for City
function showWeather(response) {
  let newCity = response.data.name;
  let displayCity = document.querySelector("#currentCity");
  displayCity.innerHTML = `<strong>${newCity}</strong>`;

  let temp = Math.round(response.data.main.temp);
  let displayTemp = document.querySelector("#tempNow");
  displayTemp.innerHTML = `${temp}°`;
  let f = document.querySelector("#fah");
  f.innerHTML = "<a style='color: #3ebdff'> F </a>";
  let c = document.querySelector("#cel");
  c.innerHTML = "<a style='color: blue'> C </a>";

  let conditions = response.data.weather[0].main;
  let displayConditions = document.querySelector("#condition");
  displayConditions.innerHTML = `${conditions}`;

  let humidity = response.data.main.humidity;
  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = `${humidity}`;

  let wind = response.data.wind.speed;
  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = `${wind}`;
}

function findWeather(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input").value;
  let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}`;

  axios.get(`${apiUrl}&appid=${apiKey}&units=metric`).then(showWeather);
}

let searchWeather = document.querySelector("#enterCity");
searchWeather.addEventListener("submit", findWeather);

function showCel(response) {
  let temp = Math.round(response.data.main.temp);
  let displayTempC = document.querySelector("#tempNow");
  displayTempC.innerHTML = `${temp}°`;
  let f = document.querySelector("#fah");
  f.innerHTML = "<a style='color:#3ebdff'> F </a>";
  let c = document.querySelector("#cel");
  c.innerHTML = "<a style='color: blue'> C </a>";
}
function showCelTemp(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input").value;
  let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}`;

  axios.get(`${apiUrl}&appid=${apiKey}&units=metric`).then(showCel);
}

let cTemp = document.querySelector("#cel");
cTemp.addEventListener("click", showCelTemp);

function showFah(response) {
  let temp = Math.round(response.data.main.temp);
  let displayTempF = document.querySelector("#tempNow");
  displayTempF.innerHTML = `${temp}°`;
  let f = document.querySelector("#fah");
  f.innerHTML = "<a style='color:blue'> F </a>";
  let c = document.querySelector("#cel");
  c.innerHTML = "<a style='color:#3ebdff'> C </a>";
}
function showFahTemp(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input").value;
  let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}`;

  axios.get(`${apiUrl}&appid=${apiKey}&units=imperial`).then(showFah);
}

let fTemp = document.querySelector("#fah");
fTemp.addEventListener("click", showFahTemp);

function getLocal(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}

let localWeather = document.querySelector("#buttonlocal");
localWeather.addEventListener("click", getLocal);
