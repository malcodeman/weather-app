const unitConverter = require("./assets/js/unitConterter");
const weather = require("./assets/js/weather");

function getCurrentWeather() {
    weather.getCurrentWeather("london").then(response => {
            console.log(response);
            let temp = response.main.temp;
            let humidity = response.main.humidity;
            let description = response.weather[0].description;            
            document.getElementById("temperature").textContent = unitConverter.kelvinToCelsius(temp);
            document.getElementById("humidity").textContent = humidity;
            document.getElementById("description").textContent = description;
        })
        .catch(error => {
            console.log(error.message);
        })
}

getCurrentWeather(); 