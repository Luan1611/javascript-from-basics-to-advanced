const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
const arr2 = [7, 14, 21]

const logMessageAccordingToArrayLength = array => 
    array.length >= 5 
        ? console.log('Muitos elementos') 
        : console.log('Poucos elementos')

logMessageAccordingToArrayLength(arr1)
logMessageAccordingToArrayLength(arr2)

