const pattern = /\d+ID\b/

console.log(pattern.test('1231ID'))
console.log(pattern.test('1231abID'))
console.log(pattern.test('abcID'))
console.log(pattern.test('123id'))
console.log(pattern.test('ID'))