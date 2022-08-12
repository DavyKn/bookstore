import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import BookList from './components/BookList';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/Categories" element={<Categories />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
