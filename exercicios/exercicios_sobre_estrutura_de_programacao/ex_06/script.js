const age = 30
const hasLicense = true

if (age > 18 && !hasLicense) {
    console.log('You can\'t drive, because you don\'t have a license!')
} else if(age > 18 && hasLicense) {
    console.log('You can drive, congratulations!')
} else {
    console.log('You can\'t drive, because you don\'t have age either license!')
}