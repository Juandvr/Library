const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

const theHobbit = new Book('The Hobbit', 'Tolkien', 95, 'not read');
const mobyDick = new Book('Moby Dick', 'Herman Melville', 635, 'not read');
const mockingbird = new Book('To kill a mockingbird', 'Harper Lee', 384, 'not read');

myLibrary.push(theHobbit);
myLibrary.push(mobyDick);
myLibrary.push(mockingbird);

function addBookToLibrary() {
  // do stuff here
}

function displayLibrary() {
  const library = document.querySelector('.library');

  myLibrary.forEach((book) => {
    let div = document.createElement('div');
    div.setAttribute('class', 'book');
    div.innerHTML = `<p>Title: ${book.title}</p>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages} pages</p>
    <p>Read status: ${book.read}</p>`;
    library.appendChild(div);
  })
}

window.onload = displayLibrary();