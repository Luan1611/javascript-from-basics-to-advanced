const calculator = {
    add (n1, n2) {
        return n1 + n2
    },
    subtract (n1, n2) {
        return n1 - n2
    },
    multiply (n1, n2) {
        return n1 * n2
    },
    divide (n1, n2) {
        if (n2 != 0) {
            return n1 / n2
        }
        return 'Division by zero is not Mathematically defined'
    }
}

console.log(calculator.add(1, 7))
console.log(calculator.subtract(5, 4))
console.log(calculator.multiply(3, -15))
console.log(calculator.divide(17, 0))