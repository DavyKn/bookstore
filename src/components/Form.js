import React from 'react';
import './form.css';

const Form = () => (
  <div className="form-container">
    <input type="text" className="book-title" placeholder="Book title" />
    <input type="text" className="book-author" placeholder="Author" />
  </div>
);

export default Form;
