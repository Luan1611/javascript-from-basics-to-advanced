const checkPermissionToTakeDriveLicense = age => {
    return age >= 18 
    ? 'You can take your drive license' 
    : 'You can\'t take your drive license'
}

console.log(checkPermissionToTakeDriveLicense(31))
console.log(checkPermissionToTakeDriveLicense(15))