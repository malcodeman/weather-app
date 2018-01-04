// Source: https://www.thoughtco.com/temperature-conversion-formulas-609324
/* 
    1.
    Celsius to Fahrenheit 
    °F = 9/5 (° C) + 32
*/
function celsiusToFahrenheit(celsius) {
    return 1.8 * celsius + 32;
}
/*
    2.
    Kelvin to Fahrenheit 
    °F = 9/5 (K - 273) + 32
*/
function kelvinToFahrenheit(kelvin) {
    return 1.8 * (kelvin - 273) + 32;
}
/*
    3.
    Fahrenheit to Celsius	
    °C = 5/9 (°F - 32)
 */
function fahrenheitToCelsius(fahrenheit) {
    return 0.5 * (fahrenheit - 32);
}
/*
    4.
    Celsius to Kelvin 
    K = °C + 273
*/
function celsiusToKelvin(celsius) {
    return celsius + 273;
}
/*
    5.
    Kelvin to Celsius	
    °C = K - 273
*/
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
/*
    6.
    Fahrenheit to Kelvin	
    K = 5/9 (°F - 32) + 273
*/
function fahrenheitToKelvin(fahrenheit) {
    return 0.5 * (fahrenheit - 32) + 273;
}

module.exports = {
    celsiusToFahrenheit: celsiusToFahrenheit,
    kelvinToFahrenheit: kelvinToFahrenheit,
    fahrenheitToCelsius: fahrenheitToCelsius,
    celsiusToKelvin: celsiusToKelvin,
    kelvinToCelsius: kelvinToCelsius,
    fahrenheitToKelvin: fahrenheitToKelvin
}