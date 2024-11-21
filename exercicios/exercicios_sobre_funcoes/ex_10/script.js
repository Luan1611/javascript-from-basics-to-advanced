const logEvenNumbers = number => {
    for (let i = number; i >= 0; i--) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

logEvenNumbers(15)
logEvenNumbers(8)