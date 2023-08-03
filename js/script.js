let newBookBtn = document.querySelector('[data-newBook]');
let newBookForm = document.querySelector('[data-newBookForm]');
let titleInput = document.querySelector('[data-input-bookTitle]');
let authorInput = document.querySelector('[data-input-Author]');
let pageCountInput = document.querySelector('[data-input-pageCount]');
let readCheckInput = document.querySelector('[data-input-readCheck]');
let submitBtn = document.querySelector('[data-submitBtn]');



newBookBtn.addEventListener('click', () => {
    console.log('new book button clicked');
    newBookForm.style.display = 'block';
    newBookBtn.classList.add('clicked');
})

newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form submitted');
    addBookToLibrary();
    newBookForm.style.display = 'none';
    alert('Book added to library');
    newBookBtn.classList.remove('clicked');
    newBookForm.reset();
    newBookForm.classList.add('clicked');
})

let myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBookToLibrary = (book) => {
    let nBook = new Book(titleInput.value, authorInput.value, pageCountInput.value, readCheckInput.value);
    console.log(nBook);
}




console.log('script loaded successfully.')