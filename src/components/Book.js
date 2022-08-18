import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book(Props) {
  const { book } = Props;
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="book-arrange">
        <p>
          {book.title}
        </p>
        <p><small>{book.author}</small></p>
      </div>
      <button type="button" className="remove-btn" onClick={() => dispatch(removeBook(book))}>Remove</button>
    </div>
  );
}
