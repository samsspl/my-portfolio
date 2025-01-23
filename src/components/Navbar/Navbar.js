import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-link" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/about" className="navbar-link" activeClassName="active-link">
          About
        </NavLink>
        <a
          href="/resume.pdf" // URL to the PDF file
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
          className="navbar-link"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
