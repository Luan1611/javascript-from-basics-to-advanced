const checkType = value => `The informed value is from type ${typeof value}`
console.log(checkType(false))
console.log(checkType(10.45))
console.log(checkType('Hello'))
console.log(checkType({key: 'value'}))