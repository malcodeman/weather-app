// Source: http://openweathermap.org/api

const axios = require("axios");
const openWeatherMapApiKey = process.env.OPEN_WEATHER_MAP_API_KEY;

function byCityName(city_name, forecast = false) {
    /* 
        Example:
        api.openweathermap.org/data/2.5/weather?q=London
    */
    let type = "weather"
    if (forecast === true) {
        type = "forecast";
    }
    let url = `http://api.openweathermap.org/data/2.5/${type}?q=${city_name}&appid=${openWeatherMapApiKey}`
    return axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}

function byCityId(Id, forecast = false) {
    /* 
        Example:
        api.openweathermap.org/data/2.5/weather?id=2172797
    */
    let type = "weather"
    if (forecast === true) {
        type = "forecast";
    }
    let url = `http://api.openweathermap.org/data/2.5/${type}?id=${Id}&appid=${openWeatherMapApiKey}`
    return axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}

function byGeographicCoordinates(lat, lon, forecast = false) {
    /* 
        Example:
        api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
    */
    let type = "weather"
    if (forecast === true) {
        type = "forecast";
    }
    let url = `http://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${lon}&appid=${openWeatherMapApiKey}`
    return axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}

function byZipCode(zip, forecast = false) {
    /* 
        Example:
        api.openweathermap.org/data/2.5/weather?zip=94040,us
    */
    let type = "weather"
    if (forecast === true) {
        type = "forecast";
    }
    let url = `http://api.openweathermap.org/data/2.5/${type}?zip=${zip}&appid=${openWeatherMapApiKey}`
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
    byCityName: byCityName,
    byCityId: byCityId,
    byGeographicCoordinates: byGeographicCoordinates,
    byZipCode: byZipCode
}