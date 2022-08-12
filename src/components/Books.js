import React from 'react';
import Form from './Form';

export default function Books(Props) {
  const { title, author } = Props;
  return (
    <div className="container">
      <div className="book-arrange">
        <p>
          {title}
        </p>
        <p><small>{author}</small></p>
      </div>
      <button type="button" className="remove-btn">Remove</button>
      <Form />
    </div>
  );
}
