
const { arrayCars, arrayNumbers } = require("./data.js");
const { sortCars, sortNumbers } = require("./functions.js")
const sortCarsResult = sortCars(arrayCars);
console.log(sortCarsResult);

const sortNumbersResult = sortNumbers(arrayNumbers)
console.log(sortNumbersResult);