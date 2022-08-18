import React, { useState } from 'react';
import './form.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');

  return (
    <div className="form">
      <form
        className="addbook-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook({
            id: uuidv4(),
            title: titleInput,
            author: authorInput,
          }));
          setTitleInput('');
          setAuthorInput('');
        }}
      >
        <input type="text" placeholder="Book Title" value={titleInput} onInput={(e) => setTitleInput(e.target.value)} />
        <input type="text" placeholder="Author" value={authorInput} onInput={(e) => setAuthorInput(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
