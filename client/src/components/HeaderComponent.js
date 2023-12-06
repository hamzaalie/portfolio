// src/components/HeaderComponent.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderComponent.css';

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Your Logo</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/LoginPage">Log In</Link>
          </li>

          <li>
            <Link to="/RegisterPage">Register</Link>
          </li>
          
          <li>
            <Link to="/portfolio-details">Portfolio Details</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
