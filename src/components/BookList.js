import React from "react";
import BookCard from "./BookCard";


function BookList(props) {
  const bookItems = props.books.map(book => 
    <li key={book.id}>
      <BookCard book={book} handleRemove={props.handleRemove}/>
    </li>
  );
  return (
    <ul className="book-list">
      {bookItems}
    </ul>
  );
}

export default BookList;
      
