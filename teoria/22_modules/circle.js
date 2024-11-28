import randomNumber from "./utils.js"

function circleArea(radius) {
    return Math.PI * radius * radius
}

function circlePerimeter(radius) {
    return 2 * Math.PI * radius
}

function getRandomNumber() {
    return randomNumber()
}

const circle = {circleArea, circlePerimeter, getRandomNumber}

export default circle