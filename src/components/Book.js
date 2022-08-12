import React from 'react';

export default function Book(Props) {
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
    </div>
  );
}
