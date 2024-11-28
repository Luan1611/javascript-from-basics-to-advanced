const pattern = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(pattern.test('matheus_123'))
console.log(pattern.test('Lu'))
console.log(pattern.test('13222222222222222222233333'))