import React, { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <div className="book-list">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <Form />
      </div>
    </div>
  );
};

export default BookList;
