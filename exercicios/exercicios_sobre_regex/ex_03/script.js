// const pattern = /Marca: (Nike|Adidas|Puma|Asics)/
const pattern = /^Marca: (Nike|Adidas|Puma|Asics)$/

console.log(pattern.test('Marca: Nike'))
console.log(pattern.test('Marca: nike'))
console.log(pattern.test('Marca: Adida'))
console.log(pattern.test('Marca: Adidas'))
console.log(pattern.test('Marca: Não consta'))
console.log(pattern.test('Marca: Nikeeeee'))
console.log(pattern.test('Nike'))