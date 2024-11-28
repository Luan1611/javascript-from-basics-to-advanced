const upperCaseLetters = /[A-Z]/

console.log(upperCaseLetters.test('ABC'))
console.log(upperCaseLetters.test('abc'))
console.log(upperCaseLetters.test('Ab1'))
console.log(upperCaseLetters.test('123'))