// Sort an array
const names = ['Nathan', 'Ed', 'Patrick', 'Andy', 'Lewis']
console.log(names)

names.sort()
console.log(names)


// --
// Add something to the end of an array
names.push('James')
console.log(names)


// --
// Remove something from the end of an array
names.pop()
console.log(names)


// --
// Get the index of an item in the array
const indexOfPatrick = names.indexOf('Patrick')
console.log(indexOfPatrick)


// --
// Change elements in an array
function uppercaseString(name) {
    return name.toUpperCase()
}

const upperCaseNames = names.map(uppercaseString)
console.log(upperCaseNames)


// --
// Reverse an array
names.reverse()
console.log(names)


// --
// Check if an array contains a specific thing
const containsNathan = names.includes('Nathan')
console.log(containsNathan)

const containsJesse = names.includes('Jesse')
console.log(containsJesse)


// --
// Check if at least one item matches a specified condition
function isLongerThanFiveCharacters(str) {
    return str.length > 5
}

const atleastOneIsLongerThan5 = names.some(isLongerThanFiveCharacters)
console.log(atleastOneIsLongerThan5)


// --
// Check if every item matches a specified condition
const everyNameIsLongerThan5 = names.every(isLongerThanFiveCharacters)
console.log(everyNameIsLongerThan5)