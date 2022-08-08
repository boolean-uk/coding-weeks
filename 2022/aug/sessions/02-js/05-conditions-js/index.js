// Using booleans to control logic

if (true) {
    console.log('My name is Nathan!')
}

if (false) {
    console.log('My name is Jeff!')
}

const firstName = 'Nathan'

if (firstName === 'Nathan') {
    console.log('My name is Nathan!')
}

if (firstName !== 'Jeff') { // evaluates to true, if statement body runs
    console.log('My name is not Jeff!')
}

if (firstName !== 'Nathan') {
    console.log('My name is not Nathan!')
}


// --
// Numeric conditions
const a = 5
const b = 7

if (a < 10) {
    console.log('a is less than 10')
}

if (a > 10) { // evaluates to false, if body doesn't run
    console.log('a is more than 10')
}

if (a === b) {
    console.log('a is the same as b')
}

if (a !== b) {
    console.log('a is not the same as b')
}


// --
// Multiple conditions
if (a < 10 && b < 10) {
    console.log('both a and b are less than 10')
}

if (a < 10 && b > 10) {
    console.log('a is less than 10 AND b is greater than 10')
}

if (a < 10 || b > 10) {
    console.log('either a is less than 10 OR b is more than 10')
}


// --
// else

const colour = 'Red'

if (colour === 'Blue') {
    console.log('The colour is blue')
} else {
    console.log('The colour is not blue')
}

if (colour === 'Blue') {
    console.log('The colour is blue')
} else if (colour === 'Red') {
    console.log('The colour is red')
} else {
    console.log('The colour is something other than blue or red')
}
