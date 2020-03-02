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
    const book3 = new Book("Foo", "Bar", 1000, false);
    const book4 = new Book("A Fourth Book", "BarFoo", 70, false);

    this.state = {
      books: [book1, book2, book3, book4],
    }

    this.addBook = this.addBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
  }

  addBook(title, author, numPages, read) {
    const book = new Book(title, author, numPages, read);
    this.setState({
      books: this.state.books.concat([book]),
    })
  }

  removeBook(id) {
    this.setState(state => ({
      books: state.books.filter(book => book.id !== id)
    }));
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
          <BookList books={this.state.books} handleRemove={this.removeBook} />
        </main>
      </div>
    );
  }
}

export default App;
