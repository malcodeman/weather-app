const unitConverter = require("./assets/js/unitConterter");
const weather = require("./assets/js/weather");
const unsplash = require("./assets/js/unsplash");

function getCurrentWeather() {
    weather.getCurrentWeather("london").then(response => {
            console.log(response);
            let temp = response.main.temp;
            let description = response.weather[0].description;
            let imageUrl = unsplash.random();
            changeBackgroundImage(imageUrl);
            console.log(imageUrl);
            let city = response.name;
            let country = response.sys.country
            document.getElementById("temperature").textContent = unitConverter.kelvinToCelsius(temp);
            document.getElementById("description").textContent = description;
            document.getElementById("location").textContent = city + ", " + country;
        })
        .catch(error => {
            console.log(error.message);
        })
}

function changeBackgroundImage(url) {
    document.getElementById("page").style.backgroundImage = "url(" + url + ")";
}

getCurrentWeather();