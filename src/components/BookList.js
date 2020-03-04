import React from "react";
import BookCard from "./BookCard";


function BookList(props) {
  if (!props.books) {
    return null;
  }
  const bookItems = props.books.map(book => 
    <li key={book.id}>
      <BookCard book={book} 
                toggleRead={props.toggleRead}
                handleRemove={props.handleRemove}
      />
    </li>
  );
  return (
    <ul className="book-list">
      {bookItems}
    </ul>
  );
}

export default BookList;
      
