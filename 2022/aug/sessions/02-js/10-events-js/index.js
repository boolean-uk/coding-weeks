// Get the button element
const button = document.querySelector('#btn')
console.log(button)

function changeStyle() {
    const helloDiv = document.querySelector('.hello')
    helloDiv.classList.add('red', 'bold', 'big', 'font')
}

button.addEventListener('click', changeStyle)