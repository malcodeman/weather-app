const unitConverter = require("./assets/js/unitConterter");
const weather = require("./assets/js/openWeatherMap");
const unsplash = require("./assets/js/unsplash");
const windowCommands = require("./assets/js/windowCommands");
const geolocation = require("./assets/js/geolocation");
const timeanddate = require("./assets/js/timeAnDdate");

function main() {
    document.getElementById("close").addEventListener("click", () => {
        windowCommands.close();
    });
    geolocation.currentPosition().then(response => {
            let lat = response.coords.latitude;
            let lon = response.coords.longitude;
            weather.byGeographicCoordinates(lat, lon)
                .then(response => {
                    let temp = response.main.temp;
                    let description = response.weather[0].description;
                    let city = response.name;
                    let country = response.sys.country;
                    document.getElementById("description").textContent = description;
                    document.getElementById("location").textContent = city + ", " + country;
                    document.getElementById("temperature").textContent = Math.round(unitConverter.kelvinToCelsius(temp) * 10) / 10 + "°";
                    document.getElementById("image_left").src = unsplash.randomFromSearchTerm(response.weather[0].main);
                    document.getElementById("image_right").src = unsplash.randomFromSearchTerm(city + ", city");
                })
                .catch(error => {
                    console.log(error.message);
                });
        })
        .catch(error => {
            console.log(error.message);
        });
}

function renderDate() {
    document.getElementById("date").textContent = timeanddate.dayOfTheMonth() + " " + timeanddate.monthAbbreviaton();
}

renderDate();
main();