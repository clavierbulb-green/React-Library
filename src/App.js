import React from "react";
import Book from "./Book";
import BookList from "./components/BookList.js";
import BookForm from "./components/BookForm.js";


class App extends React.Component {
  constructor(props) {
    super(props);

    const placeholderBooks = [
      new Book("The Hobbit", "JRR Tolkien", 320, true),
      new Book("Brave New World", "Aldous Huxley", 311, true),
      new Book("Foo", "Bar", 1000, false),
      new Book("A Fourth Book", "BarFoo", 70, false),
    ]

    this.state = { 
      books: JSON.parse(localStorage.getItem("books")) || placeholderBooks,
    }
    localStorage.setItem("books", JSON.stringify(this.state.books));

    this.addBook = this.addBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.toggleRead= this.toggleRead.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  addBook(title, author, numPages, read) {
    /* setState is async, so updated state is first calculated and stored
     * in a separate variable so that React state and localStorage state
     * stay in sync */
    const book = new Book(title, author, numPages, read);
    const updatedBookList = this.state.books.concat([book]);
    this.setState({
      books: updatedBookList,
      showForm: false,
    })
    localStorage.setItem("books", JSON.stringify(updatedBookList));
  }

  removeBook(id) {
    const updatedBookList = this.state.books.filter(book => book.id !== id);
    this.setState(state => ({
      books: updatedBookList,
    }));
    localStorage.setItem("books", JSON.stringify(updatedBookList));
  }

  toggleRead(id) {
    const updatedBookList = this.state.books.map(book => {
      if (book.id === id) {
        const copy = Object.assign({}, book);
        const updatedBook = Object.assign(copy, {read: !copy.read});
        return updatedBook;
      }
      return book;
    });
    this.setState({
      books: updatedBookList,
    });
    localStorage.setItem("books", JSON.stringify(updatedBookList));
  }

  toggleForm() {
    this.setState(state => ({
      showForm: !state.showForm,
    }));
  }

  submitForm(title, author, numPages, read) {
    this.toggleForm();
    this.addBook(title, author, numPages, read);
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1 className="headline">React Library</h1>
          <button className="new-book-button"
                  onClick={this.toggleForm}>New Book</button>
        </header>
        <main>
          {this.state.showForm ?
            <BookForm handleClose={this.toggleForm} 
                      onSubmit={this.submitForm} />
            : null
          }
          <BookList books={this.state.books} 
                    toggleRead={this.toggleRead}
                    handleRemove={this.removeBook}
                    />
        </main>
      </div>
    );
  }
}

export default App;
