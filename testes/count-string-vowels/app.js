// const countVowels = string => {
//     const stringArray = string.split('')
//     const vowelsArray = ['a', 'e', 'i', 'o', 'u']
//     const vowelsSumArray = stringArray.filter(letter => 
//         vowelsArray.includes(letter))
    
//     return vowelsSumArray.length
// }

// console.log(countVowels('Luan Marqueti'))


/* 
Remover elementos duplicados de um array
Crie uma função chamada removeDuplicates que recebe como parâmetro um array de 
elementos.

A função deve remover os elementos duplicados do array, mantendo apenas as 
ocorrências únic
*/


// const sumUniqueNumbers = numbers => {
    
//     let sum = 0

//     for (let i = 0; i < numbers.length; i++) {
//         let isUnique = true
        
//         for (let j = 0; j < numbers.length; j++) {
//             if (numbers[i] === numbers[j] && i != j) {
//                 isUnique = false
//             }
//         }
//         if (isUnique) {
//             console.log('entrei')
//             sum += numbers[i]
//         }
//     }
    
//     return sum
// }