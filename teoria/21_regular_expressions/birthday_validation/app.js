const validateBirthday = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validateBirthday.test('05/02/2020'))
console.log(validateBirthday.test('5/2/2020'))
console.log(validateBirthday.test('15/12/20'))
console.log(validateBirthday.test('15-12-2021'))
console.log(validateBirthday.test('55/88/9999'))