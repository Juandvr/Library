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
    library.appendChild(div);

    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let read = document.createElement('p');

    title.innerHTML = `Title: ${book.title}`;
    author.innerHTML = `Author: ${book.author}`;
    pages.innerHTML = `Pages: ${book.pages}`;
    read.innerHTML = `Read status: ${book.read}`;

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
  })
}

window.onload = displayLibrary();