// Objects (things with attributes)
const person = {
    name: 'Nathan',
    age: 32
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.profession) // undefined

// --
// Adding keys to an object
person.profession = 'Software Developer'
console.log(person)
console.log(person.profession)


// --
// Adding an array to an object
person.favouriteGames = ['Pathfinder', 'Baldurs Gate', 'Elder Scrolls']
console.log(person)
console.log(person.favouriteGames)
