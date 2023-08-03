let newBookBtn = document.querySelector('[data-newBook]');
let newBookForm = document.querySelector('[data-newBookForm]');
let titleInput = document.querySelector('[data-input-bookTitle]');
let authorInput = document.querySelector('[data-input-Author]');
let pageCountInput = document.querySelector('[data-input-pageCount]');
let readCheckInput = document.querySelector('[data-input-readCheck]');
let submitBtn = document.querySelector('[data-submitBtn]');
let libraryDiv = document.querySelector('[data-libraryBooks]');

newBookBtn.addEventListener('click', () => {
    console.log('new book button clicked');
    newBookForm.style.display = 'block';
    newBookBtn.classList.add('clicked');
})

newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form submitted');
    addBookToLibrary();
    alert('Book added to the library');
    newBookForm.classList.remove('clicked'); 
    newBookForm.reset(); 
})

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBookToLibrary = () => {
    let nBook = new Book(titleInput.value, authorInput.value, pageCountInput.value, readCheckInput.checked);
    console.log(nBook);
    myLibrary.push(nBook);
    console.log(myLibrary);
    render_books();
}

function render_books(){
    libraryDiv.innerHTML = '';
    for(let i=0; i<myLibrary.length; i++){
        console.log(myLibrary[i]);
        let currentBook = myLibrary[i];
        let bookDiv = document.createElement('div');
        let bookTitle = document.createElement('h2');
        let bookAuthor = document.createElement('h3');
        let bookPages = document.createElement('h4');
        let bookRead = document.createElement('h5');
    

        bookDiv.classList.add('book');
        bookTitle.classList.add('bookTitle');
        bookAuthor.classList.add('bookAuthor');
        bookPages.classList.add('bookPageCount');
        bookRead.classList.add('bookReadCheck');

        libraryDiv.appendChild(bookDiv);
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(bookRead);

        bookTitle.textContent = currentBook.title;
        bookAuthor.textContent = currentBook.author;
        bookPages.textContent = currentBook.pages;
        bookRead.textContent = currentBook.read;
        
        bookTitle.innerHTML = '<span class="book-label">Title:</span> ' + currentBook.title;
        bookAuthor.innerHTML = '<span class="book-label">Author:</span> ' + currentBook.author;
        bookPages.innerHTML = '<span class="book-label">Pages:</span> ' + currentBook.pages;
        bookRead.innerHTML = '<span class="book-label">Read:</span> ' + currentBook.read;
    }
}
console.log('script loaded successfully.');
