// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/LoginPage">LoginPage</Link></li>
        <li><Link to="/RegisterPage">RegisterPage</Link></li>
        <li><Link to="/portfolio-details">Portfolio</Link></li>



        {/* Add authentication-related links here */}
      </ul>
    </nav>
  );
};

export default Navbar;

