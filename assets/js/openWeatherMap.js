const axios = require("axios");
const openWeatherMapApiKey = process.env.OPEN_WEATHER_MAP_API_KEY;

function getCurrentWeather(city) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}`
    return axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}

function getForecast(city) {
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${openWeatherMapApiKey}`
    return axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}

module.exports = {
    getCurrentWeather: getCurrentWeather,
    getForecast: getForecast
}