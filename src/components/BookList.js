import React from "react";
import BookCard from "./BookCard";


function BookList(props) {
  const bookItems = props.books.map(book => 
    <li>
      <BookCard book={book} />
    </li>
  );
  return (
    <ul className="book-list">
      {bookItems}
    </ul>
  );
}

export default BookList;
      
