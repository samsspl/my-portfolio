import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';
import backgroundPhoto from '../../assets/IMG_4353.png'; // Import the background image

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/about'); // Navigate to the About page
  };

  return (
    <div className="welcome-page">
      {/* Background photo dynamically applied */}
      <div
        className="welcome-background"
        style={{ backgroundImage: `url(${backgroundPhoto})` }}
      ></div>
      <div className="welcome-content">
        <h1>Sai Sam Phyo Linn's Portfolio</h1>
        <p>
          "Program testing can be used to show the presence of bugs, but never to show their absence!" — Edsger Dijkstra
        </p>
        <button className="cta-button" onClick={handleLearnMoreClick}>
          Learn more
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
