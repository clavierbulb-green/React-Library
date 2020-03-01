import React from "react";

class BookCard extends React.Component {
  render() {
    return (
      <div className="book-card">
        <h2 className="title">{this.props.book.title}</h2>
        <p>{this.props.book.author}</p>
        <p>{this.props.book.numPages} pages</p>
      </div>
    );
  }
}

export default BookCard;
