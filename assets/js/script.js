const unitConverter = require("./assets/js/unitConterter");
const weather = require("./assets/js/weather");

function getCurrentWeather() {
    weather.getCurrentWeather("london").then(response => {
            console.log(response);
            let temp = response.main.temp;
            document.getElementById("temperature").textContent = unitConverter.kelvinToCelsius(temp)
        })
        .catch(error => {
            console.log(error.message);
        })
}

getCurrentWeather();