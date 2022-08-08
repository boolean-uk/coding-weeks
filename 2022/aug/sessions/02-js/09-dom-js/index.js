// Select an element
const helloDiv = document.querySelector('.hello')
console.log(helloDiv)
console.log(helloDiv.innerText)


// --
// Change, add & remove styles

// helloDiv.style.color = 'red'
// helloDiv.style.fontSize = '50px'

helloDiv.classList.add('red')
helloDiv.classList.add('big')
helloDiv.classList.add('font')
helloDiv.classList.add('bold')

helloDiv.classList.remove('red')
helloDiv.classList.remove('bold')


// --
// Add new elements to the page
const list = document.querySelector('.list')
console.log(list)

const newListItem = document.createElement('li')
newListItem.innerText = 'Item One'
newListItem.classList.add('red')
list.append(newListItem)

const secondListItem = document.createElement('li')
secondListItem.innerText = 'Item Two'
secondListItem.style.color = 'green'
list.append(secondListItem)