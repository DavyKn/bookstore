import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
