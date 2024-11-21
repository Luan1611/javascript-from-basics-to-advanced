let divisor = 2
let isPrime = true

const number = parseInt(prompt('Enter the natural number: '))

if (number <= 1) {
    isPrime = false
} else {
    while (divisor < number) {
        if (number % divisor === 0) {
            isPrime = false
            break
        }
        divisor++
    }
}

alert(`The number ${number} is ${isPrime ? 'prime!' : 'not prime!'}`)