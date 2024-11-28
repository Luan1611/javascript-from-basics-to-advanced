const validaDominio = /[?www].\w+\.com.br|.com/

console.log(validaDominio.test('www.google.com.br'))
console.log(validaDominio.test('google.com.br'))
console.log(validaDominio.test('www.horadecodar.com.br'))
console.log(validaDominio.test('www.horadecodar'))