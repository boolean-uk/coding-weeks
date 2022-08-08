// Immutable variables

const myFirstVariable = 'Hello, world!'
// myFirstVariable = 'Goodbye, world!'
console.log(myFirstVariable)


// -- 
// Mutable variables

let mySecondVariable = 'Hello, Nathan!'
console.log(mySecondVariable)

mySecondVariable = 'Goodbye, Nathan!'
console.log(mySecondVariable)


// --
// Math operations, storing to variable
const a = 2
const b = 3
console.log(a + b)

let sum = a + b
console.log(sum)


// --
// String concatenation
const firstName = 'Nathan'
const lastName = 'King'
console.log(firstName + lastName)
console.log(firstName + ' ' + lastName)

const fullName = firstName + ' ' + lastName
console.log(fullName)


// --
// String interpolation
const greeting = `Hello, my name is ${firstName} ${lastName}!`
console.log(greeting)