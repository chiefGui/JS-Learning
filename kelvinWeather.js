/*
Kelvin Weather

Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there's a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let's convert Kelvin to Celsius, then to Fahrenheit.

Kelvin, Celsius, and Fahrenheit thermometers

For example, 283 K converts to 10 °C which converts to 50 °F.
*/

//creats variable kelvin and permanently sets it to 293
const kelvin = 293; 

//creats variable celcius and permanently sets it to kelvin - 273
let celsius = kelvin - 273;

//creats variable fahrenheit and permanently sets it to a function of celsius
let fahrenheit = celsius * (9/5) + 32;

//rounds down fahrenheit
fahrenheit = Math.floor(fahrenheit);

//prints the final converted temperature in Fahrenheit degrees
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
