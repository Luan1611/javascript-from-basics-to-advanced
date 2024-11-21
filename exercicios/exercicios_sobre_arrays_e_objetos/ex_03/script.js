const bus = {
    wheels: 8,
    passengerLimit: 40,
    doors: 2
}

console.log(bus.wheels)
console.log(bus.passengerLimit)
console.log(bus.doors)

// With Destructuring
const {wheels, passengerLimit, doors} = bus
console.log(wheels, passengerLimit, doors)