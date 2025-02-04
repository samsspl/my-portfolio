import React, { useState } from 'react';
import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import ResumeModal from '../Popup/ResumeModal'; // Import the modal component

const Navbar = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false); // Track if pop-up was blocked

  const handleResumeClick = (event) => {
    event.preventDefault(); // Prevents unnecessary navigation

    // Store last visited page
    sessionStorage.setItem('lastPage', location.pathname);

    // Try opening the PDF in a new tab
    const pdfWindow = window.open('/resume.pdf', '_blank');

    if (!pdfWindow || pdfWindow.closed || typeof pdfWindow.closed === 'undefined') {
      // Pop-up was blocked → Show modal instead
      setIsModalOpen(true);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-link">
          Home
        </NavLink>
        <NavLink to="/about" className="navbar-link">
          About
        </NavLink>
        <a href="/resume.pdf" className="navbar-link" onClick={handleResumeClick}>
          Resume
        </a>
      </div>

      {/* Show modal only when pop-ups are blocked */}
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
