import React from "react";

class BookCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="book-card">
        <h2 className="book-card__title">{this.props.book.title}</h2>
        <section className="book-card__content">
          <p className="book-card__author">{this.props.book.author}</p>
          <p>{this.props.book.numPages} pages</p>
        </section>

        <button className={"book-card__read-status " + (
          this.props.book.read ? "read" : "not-read")}
          onClick={this.props.toggleRead.bind(this, this.props.book.id)}>
            {this.props.book.read ? "READ" : "NOT READ" }
        </button>

        <button className="book-card__remove-button"
                onClick={this.props.handleRemove.bind(this, this.props.book.id)}>X</button>
      </div>
    );
  }
}

export default BookCard;
