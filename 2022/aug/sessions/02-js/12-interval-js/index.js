// Create a function to run
function sayHello() {
    console.log('Hello, world!')
}

setInterval(sayHello, 2000)


// --
// Create a countdown
const timer = document.querySelector('#timer')

let seconds = 10

const countdown = setInterval(function () {
    timer.innerText = `${seconds} seconds to go!`

    if (seconds === 0) {
        clearInterval(countdown)
        timer.innerText = 'Countdown complete!'
    } else {
        seconds--
    }
}, 1000)