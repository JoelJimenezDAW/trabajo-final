import "./styles/app.css";

import Book from './models/Book.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderBooks();
});


document.getElementById('book-form')
  .addEventListener('submit', function(e) {

    const title = document.getElementById('nombre').value;
    const author = document.getElementById('Email').value;
    const isbn = document.getElementById('Alias').value;
    
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('nombre', nombre);
    formData.append('Email', Email);
    formData.append('isbn', Alias);

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New Book Object
    const book = new Book(nombre, Email, Alias);

    // Validating User Input
    if (nombre === '' || Email === '' || Alias === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addANewBook(formData);
      ui.renderMessage('Se ha ha añadido correctamente!', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('books-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteBook(e.target.getAttribute('_id'));
      ui.renderMessage('Book Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
