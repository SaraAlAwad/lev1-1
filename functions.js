// const { arrayCars, arrayNumbers } = require("./data")


function sortCars(arrayCars) {
    return arrayCars.sort()
}
function sortNumbers(array) {
    return array.sort((a, b) => a - b)
}
module.exports = {
    sortCars,
    sortNumbers
}