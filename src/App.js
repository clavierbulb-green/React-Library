import React from "react";
import Book from "./Book";
import BookList from "./components/BookList.js";
import BookForm from "./components/BookForm.js";


class App extends React.Component {
  constructor(props) {
    super(props);

    /* PLACEHOLDER BOOKS */
    const book1 = new Book("The Hobbit", "JRR Tolkien", 300, true);
    const book2 = new Book("Brave New World", "Aldous Huxley", 200, true);

    this.state = {
      books: [book1, book1, book1, book2, book2, book2],
    }

    this.addBook = this.addBook.bind(this);
  }

  addBook(title, author, numPages, read) {
    const book = new Book(title, author, numPages, read);
    this.setState({
      books: this.state.books.concat([book]),
    })
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1 className="headline">React Library</h1>
          <button className="new-book-button">New Book</button>
        </header>
        <main>
          <BookForm onSubmit={this.addBook} />
          <BookList books={this.state.books} />
        </main>
      </div>
    );
  }
}

export default App;
