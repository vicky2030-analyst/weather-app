const apiKey = "eb181e03eebb0b6743af875346af83de";

async function getWeather(){

  document.getElementById("loading")
.style.display = "block";

  const city =
  document.getElementById("cityInput").value;

  const apiURL =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const response = await fetch(apiURL);

  const data = await response.json();

  document.getElementById("temp").innerHTML =
  Math.round(data.main.temp) + "°C";

  document.getElementById("city").innerHTML =
  data.name;

  document.getElementById("humidity").innerHTML =
  data.main.humidity + "%";

  document.getElementById("wind").innerHTML =
  data.wind.speed + " km/h";

  document.getElementById("loading")
.style.display = "none";

}

if("serviceWorker" in navigator){

  navigator.serviceWorker.register(
    "service-worker.js"
  )

  .then(()=>console.log("PWA Ready"))

  .catch((error)=>console.log(error));

}
