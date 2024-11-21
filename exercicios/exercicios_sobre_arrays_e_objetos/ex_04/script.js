const bus = {
    wheels: 8,
    passengerLimit: 40,
    doors: 2
}

bus.windows = 20

delete bus.wheels

console.log(bus.windows)