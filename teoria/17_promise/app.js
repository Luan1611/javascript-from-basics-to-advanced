// let p = Promise.resolve(5)

// console.log('Outros códigos')

// console.log(p)

// p.then((value) => {console.log(`O valor é ${value}`)})

// p
//     .then(value => value + 5)
//     .then(value => console.log(value))


// --------------------------------------------------

// let p = Promise.resolve(new Error('Não deu certo'))

// console.log('Outros códigos')

// p
//     .then(value => console.log(value))
//     .catch(msg => console.log('Falhou: ' + msg))

// --------------------------------------------------

// function verificarNumero(num) {
//     return new Promise((resolve, reject) => {
//         if (num === 2) {
//             resolve(console.log(`O número é ${num}`))
//         } else {
//             reject(new Error('Falhou'))
//         }
//     })
// }

// verificarNumero(2)
// verificarNumero(3)

// --------------------------------------------------

//Resolvendo várias Promises

// const p1 = new Promise(function(resolve, rejec) {
//     setTimeout(function() {
//         resolve(15)
//     }, 5000)
// })

// const p2 = Promise.resolve(10)

// const p3 = new Promise((resolve, reject) => {
//     resolve(12)
// })

// Promise.all([p1, p2, p3]).then(values => console.log(values))

// ----------------------------------------------------

// // Funções assíncronas

// async function somar(a, b) {
//     return a + b
// }

// console.log(somar(2, 4))

// somar(2, 4).then(value => console.log(value))

// ----------------------------------------------------

function somarComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a+b)
        }, 4000)
    })
}

async function resSoma(a, b, c) {
    let x = somarComDelay(a, b)
    let y = c

    return await x + y
}

resSoma(1, 2, 3).then(value => console.log(value))