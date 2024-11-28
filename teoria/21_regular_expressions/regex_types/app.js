// console.log(/testando/.test('tttttestandoooooo'))
// console.log(/testando/.test('TESTANDO'))
// console.log(/testando/.test('asdasdsad'))


// const reg1 = new RegExp('bola')
// console.log(reg1.test('Tem bola?'))
// console.log(reg1.test('Não tem'))


// const reg2 = /bola/
// let text = 'Tem bola na cesta'
// console.log(reg2.test('Tem bola?'))
// console.log(reg2.test('Não tem'))
// console.log(reg2.test(text))

// console.log(/quadrado/.test('Onde tem um quadrado?'))
// console.log(/quadrado/.test('Onde tem um retangulo?'))


// -------------------------------------------------------

// CONJUNTOS

// const reg1 = /[12345]/

// console.log(reg1.test('Temos o número 6'))
// console.log(reg1.test('Temos o número 2'))
// console.log(reg1.test('Temos o número 23'))
// console.log(reg1.test('Temos o número 60'))

// const reg2 = /[0-9]/
// console.log(reg2.test('Temos o número 1235411233'))
// console.log(reg2.test('Temos o número'))

// -------------------------------------------------------

// CARACTERES ESPECIAIS

// const pontoRegex = /./
// console.log(pontoRegex.test('asd'))
// console.log(pontoRegex.test(' '))
// console.log(pontoRegex.test('123'))
// console.log(pontoRegex.test('123asd'))

// const dRegex = /\d/ //a mesma coisa que [0-9]
// console.log(dRegex.test('asd'))
// console.log(dRegex.test(' '))
// console.log(dRegex.test('123'))
// console.log(dRegex.test('123asd'))

// const dRegex2 = /\D/ // a mesma coisa que [^0-9]
// console.log(dRegex2.test('asd'))
// console.log(dRegex2.test(' '))
// console.log(dRegex2.test('123'))
// console.log(dRegex2.test('123asd'))

// const sRegex = /\s/
// console.log(sRegex.test('asd'))
// console.log(sRegex.test(' '))
// console.log(sRegex.test('123'))
// console.log(sRegex.test('123asd'))

// const wRegex = /\w/
// console.log(wRegex.test('asd'))
// console.log(wRegex.test(' '))
// console.log(wRegex.test('123'))
// console.log(wRegex.test('123asd'))

// -------------------------------------------------------

// REGEX NA PRÁTICA

// const dia = /\d\d/ // Expressão que tenha 2 dígitos numéricos
// console.log(dia.test('2019') && '2019'.length === 2)
// console.log(dia.test('asd') && 'asd'.length === 2)
// console.log(dia.test('05') && '05'.length === 2)
// console.log(dia.test('asd12') && 'asd12'.length === 2)
// console.log(dia.test('asd1') && 'asd1'.length === 2)

// const palavraPeloMenosTresLetras = /\w\w\w/
// console.log(palavraPeloMenosTresLetras.test('asd'))
// console.log(palavraPeloMenosTresLetras.test('asdd'))
// console.log(palavraPeloMenosTresLetras.test('as'))

// -------------------------------------------------------

// OPERADOR NOT (^)

// const notab = /[^ab]/ // nada que tenha 'a' e 'b' isoladamente

// console.log(notab.test('a'))
// console.log(notab.test('b'))
// console.log(notab.test('Aqui tem a'))

// const notatoz = /[^a-z]/
// console.log(notatoz.test('123 as'))
// console.log(notatoz.test('abvc'))

// -------------------------------------------------------

// OPERADOR QUESTION (?)

// const padrao = /Abacax?i/ // o 'x' é opcional na frase
// console.log(padrao.test("Abacaxi"))
// console.log(padrao.test("Abacai"))

// const padrao2 = /\d+\w?/ // pode conter infinitos dígitos e pode conter um alfanumérico
// console.log(padrao2.test('12312312317897982a'))
// console.log(padrao2.test('12312312317897982ab'))
// console.log(padrao2.test('12312312317897982'))

// -------------------------------------------------------

// OPERADOR DE PRECISÃO

// const cep = /\d{5}-\d{3}/
// console.log(cep.test('88117-500'))
// console.log(cep.test('8811u-500'))
// console.log(cep.test('8811-500'))

// const tel = /\(\d{2}\)\d{4,5}-\d{4}/
// console.log(tel.test('(16)9942-4050'))
// console.log(tel.test('(16)94328-4050'))
// console.log(tel.test('(16)99432-409'))