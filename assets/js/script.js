const unitConverter = require("./assets/js/unitConterter");
const weather = require("./assets/js/weather");

function getCurrentWeather() {
    weather.getCurrentWeather("london").then(response => {
            console.log(response);
            let temp = response.main.temp;
            let description = response.weather[0].description;
            getRandomImage(description.split(" ").join(","));
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

function getRandomImage(term) {
    let url = "https://source.unsplash.com/random/?" + term;
    document.getElementById("page").style.backgroundImage = "url(" + url + ")";
}

getCurrentWeather();