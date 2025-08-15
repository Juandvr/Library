const myLibrary = [];
const collections = [];

function Book(title, author, pages, read, collection) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.collection = collection || 'All';
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

dialog.addEventListener('mousedown', (e) => {
  if (e.target === dialog) {
    dialog.close();
  }
})

cancel.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.close();
})

add.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  let status = document.getElementById('status');
  const collection = document.getElementById('collectionList').value;
  status = status.checked === true ? 'read' : 'unread';

  let newBook = new Book(title.value, author.value, pages.value, status, collection);
  myLibrary.push(newBook);

  title.value = '';
  author.value = '';
  pages.value = '';
  status.checked = false;

  displayLibrary();
});

function displayLibrary() {
  const library = document.getElementById('library');

  library.innerHTML = '';

  myLibrary.forEach((book) => {
    let div = document.createElement('div');
    div.setAttribute('class', 'book');
    div.innerHTML = `<p>Title: ${book.title}</p>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <button class="bookstatus ${book.read}">${book.read}</button>`;
    const button = div.querySelector('.bookstatus');
    button.addEventListener('click', () => {
      if (book.read === 'read') {
        book.read = 'unread';
      } else {
        book.read = 'read';
      }
    });
    library.appendChild(div);
  })
}

window.addEventListener('load', () => {
  displayLibrary();
  displayCollections();
  displayCollectionList();
});

const collectionsDiv = document.getElementById('collections');
const newCollection = document.getElementById('newCollection');
const addCollection = document.getElementById('addCollection');
const collectionList = document.getElementById('collectionList');

addCollection.addEventListener('click', () => {
  const collectionName = newCollection.value.trim();
  if (collectionName && !collections.includes(collectionName)) {
    collections.push(collectionName);
    displayCollections();
    displayCollectionList();
    newCollection.value = '';
  }
});

function displayCollections() {
  collectionsDiv.innerHTML = '';
  collections.forEach((collection) => {
    const collectionDiv = document.createElement('div');
    collectionDiv.textContent = collection;
    collectionDiv.classList.add('collection');
    collectionDiv.addEventListener('click', () => {
      const filteredBooks = myLibrary.filter(book => book.collection === collection);
      const library = document.getElementById('library');
      library.innerHTML = '';
      filteredBooks.forEach((book) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'book');
        div.innerHTML = `<p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <button class="bookstatus ${book.read}">${book.read}</button>`;
        const button = div.querySelector('.bookstatus');
        button.addEventListener('click', () => {
          if (book.read === 'read') {
            book.read = 'unread';
          } else {
            book.read = 'read';
          }
      });
        library.appendChild(div);
      });
    });
    collectionsDiv.appendChild(collectionDiv);
  });
}

function displayCollectionList() {
  collectionList.innerHTML = '';
  collections.forEach((collection) => {
    const option = document.createElement('option');
    option.value = collection;
    option.textContent = collection;
    collectionList.appendChild(option);
  });
}

const allCollections = document.getElementById('allCollections');

allCollections.addEventListener('click', () => {
  displayLibrary();
});