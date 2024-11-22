// const pessoa = {
//     maos: 2
// }

// console.log(Object.getPrototypeOf(pessoa))
// console.log(Object.getPrototypeOf(pessoa) === Object.prototype)

// console.log(pessoa.hasOwnProperty('maos'))


// ---------------------------------------------------

let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) === Object.prototype)
console.log(pessoa.hasOwnProperty('maos'))

const pessoaNova = Object.create(pessoa)
console.log(pessoaNova.hasOwnProperty('maos'))
console.log(pessoaNova.maos) //pega do prototype (pessoa)
console.log(Object.getPrototypeOf(pessoaNova))
console.log(Object.getPrototypeOf(pessoaNova) === pessoa)
