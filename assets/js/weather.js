const apiKey = process.env.API_KEY;

function getCurrentWeather(city) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
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
    getCurrentWeather: getCurrentWeather
}