const frutas = /\d+ (bananas|maças|laranjas)/
console.log(frutas.test('10 bananas'))
console.log(frutas.test('25 batatas'))
console.log(frutas.test('8 laranjas'))

const nomes = /\w+: (Matheus|João|Maria)/
console.log(nomes.test('Nome: Mateus'))
console.log(nomes.test('Nome: João'))