const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

const theHobbit = new Book('The Hobbit', 'Tolkien', 95, 'unread');
const mobyDick = new Book('Moby Dick', 'Herman Melville', 635, 'unread');
const mockingbird = new Book('To kill a mockingbird', 'Harper Lee', 384, 'unread');

myLibrary.push(theHobbit);
myLibrary.push(mobyDick);
myLibrary.push(mockingbird);

const dialog = document.querySelector('dialog');
const dialogBtn = document.getElementById('dialogBtn');
const cancel = document.getElementById('cancel');
const add = document.getElementById('add');

dialogBtn.addEventListener('click', () => {
  dialog.showModal();
})

cancel.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.close();
})

add.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  let status = document.getElementById('status').checked;
  status = status === true ? 'read' : 'unread';

  let newBook = new Book(name, author, pages, status);
  myLibrary.push(newBook);

  displayLibrary();
});

function displayLibrary() {
  const library = document.querySelector('.library');

  library.innerHTML = '';

  myLibrary.forEach((book) => {
    let div = document.createElement('div');
    div.setAttribute('class', 'book');
    div.innerHTML = `<p>Title: ${book.title}</p>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <button class="bookstatus ${book.read}">${book.read}</button>`;
    library.appendChild(div);
  })
}

window.onload = displayLibrary();

const bookstatus = document.querySelectorAll('.bookstatus');

bookstatus.forEach((books) => {
  books.addEventListener('click', () => {
    if (books.innerText === 'read') {
      books.classList.add('unread');
      books.classList.remove('read');
      books.innerText = 'unread';
    } else {
      books.classList.add('read');
      books.classList.remove('unread');
      books.innerText = 'read';
    }
  })
})