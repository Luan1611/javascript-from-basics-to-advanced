const checkStringLength = string => 
    string.length > 10
        ? 'too long text' 
        : 'text inside limit'

console.log(checkStringLength('Luan'))
console.log(checkStringLength('São Carlos - SP'))