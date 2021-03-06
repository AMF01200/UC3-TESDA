// Book Class
class Book {
  constructor(title, author, isbn) {
   this.title = title;
   this.author =author ;
   this.isbn = isbn;
  }
}


// UI Class
class UI {
  addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>    
        <td>${book.isbn}</td>
        <td><a class="delete">X</td>
        
     `;
     // console.log(row);
    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text 
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);

  // Timeour after 3 sec
  setTimeout(function() {
   document.querySelector('.alert').remove();
  }, 3000);
  
  }
  
  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
  }
}
  
    clearFields() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#isbn').value = '';
    }
  }

// Local Storage
class Storage {
  static getBook() {
   let books;
   if(localStorage.getItem('books') === null) {
     books = [];
   } else {
     books = JSON.parse(localStorage.getItem('books'));
   }    
   return books;
  }

  static displayBooks() {
    const books = Storage.getBooks();
    books.forEach(function(book) {
     const ui = new UI();

    //  Add Book to UI
    ui.addBookToList();
    });
  }

  static addBook(book) {
   const books = Storage.getBooks();

   books.push(book);

   localStorage.setItem('books', JSON.stringify(books));

  }

  static removeBook(isbn) {
    const books = Storage.getBooks();

    books.forEach(function(book, index) {
      if(book.isbn) {
       books.splice(index, 1);
      }
    }); 

    localStorage.setItem('books', JSON.stringify(books));
  }
}

export {Book, UI, Storage}