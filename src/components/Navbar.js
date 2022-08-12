import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="title">
        Bookstore CMS
      </h2>
      <ul>
        <li><Link to="/Books">Books</Link></li>
        <li><Link to="/Categories">Categories</Link></li>
      </ul>
    </div>

  );
}
