class BookShop {

  constructor() {
    this.books = []
  }

  //book should be an instance of the Book class
  addBook(book) {
    console.log(this)
    console.log(book)
    if(!(book instanceof Book)) {
      throw "book was not an instance of book!"
    }
    this.books.push(book)
  }

  getAllBooks() {
    return this.books
  }

  getBooksForAuthor(author) {
    const booksByAuthor = []
    for(let i=0;i<this.books.length;i++) {
      const book = this.books[i]
      if(book.author===author){
        booksByAuthor.push(book)
      }
    }

    return booksByAuthor
  }

  getBooksInCategory(category) {
    const booksInCategory = []
    for(let i =0;i<this.books.length;i++) {
      const book = this.books[i]
      //TODO: if the book has the category
      //passed in to the method, add it to the
      //booksInCategory array
    }

    return booksInCategory
  }

}

class Book {
  //Categories should be an array
  constructor(author, title, categories) {
    this.author = author
    this.title = title
    this.categories = categories
  }
}

const bookshop = new BookShop()
const books = [
    new Book('Neal Stephenson', 'Termination Shock')
]

// console.log(this)
// books.forEach(book => bookshop.addBook(book))


console.log("loops")
const newFunc = bookshop.addBook
const obj = {books: []}
newFunc.call(obj, books[0])
console.log(obj)
// array.forEach(bookshop.addBook)
