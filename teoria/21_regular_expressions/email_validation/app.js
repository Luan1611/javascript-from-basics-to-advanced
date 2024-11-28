const validaEmail = /\w+@\w+\.\w+/

console.log(validaEmail.test('luan@gmail.com'))
console.log(validaEmail.test('luana_17@outlook.com.br'))
console.log(validaEmail.test('luan@luan'))
console.log(validaEmail.test('luan.com'))