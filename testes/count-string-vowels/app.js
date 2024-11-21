const countVowels = string => {
    const stringArray = string.split('')
    const vowelsArray = ['a', 'e', 'i', 'o', 'u']
    const vowelsSumArray = stringArray.filter(letter => 
        vowelsArray.includes(letter))
    
    return vowelsSumArray.length
}

console.log(countVowels('Luan Marqueti'))