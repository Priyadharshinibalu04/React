import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Recipe Landing Page</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cuisine/indian">Indian</Link></li>
          <li><Link to="/cuisine/italian">Italian</Link></li>
          <li><Link to="/cuisine/chinese">Chinese</Link></li>
          <li><Link to="/cuisine/korean">Korean</Link></li>
          <li><Link to="/cuisine/sweets">Sweets</Link></li>
          <li><Link to="/cuisine/ice-cream">Ice Cream</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
