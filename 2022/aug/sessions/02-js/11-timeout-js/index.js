// Get the hello element
const helloDiv = document.querySelector('.hello')
console.log(helloDiv)

function sayGoodbye() {
    helloDiv.innerText = 'Goodbye, World!'
}

setTimeout(sayGoodbye, 3000)