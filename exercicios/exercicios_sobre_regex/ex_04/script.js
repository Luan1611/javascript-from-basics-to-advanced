const pattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/

console.log(pattern.test('192.168.0.1'))
console.log(pattern.test('127.0.0.1'))
console.log(pattern.test('1274.0.0.1'))
console.log(pattern.test('127.1230.0.1'))
console.log(pattern.test('127.123..1'))
console.log(pattern.test('127.123.4561.1'))
console.log(pattern.test('127.123.4.1000'))
console.log(pattern.test('999.999.999.999'))