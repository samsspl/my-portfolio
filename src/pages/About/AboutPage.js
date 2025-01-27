import React, { useState } from 'react';
import aboutData from './AboutData';
import './AboutPage.css';

const About = () => {
  // Initialize the current page using the first section's key or a fallback
  const [currentPage, setCurrentPage] = useState(aboutData[0]?.key || 'default');

  const renderContent = () => {
    // Find the section corresponding to the current page
    const section = aboutData.find((item) => item.key === currentPage);

    if (section) {
      return (
        <div>
          <h2>{section.title}</h2>
          {/* Render content as multiple paragraphs if present */}
          {section.content &&
            Array.isArray(section.content) && (
              section.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            )}
          {section.content && !Array.isArray(section.content) && (
            <p>{section.content}</p>
          )}
          {/* Render list if present */}
          {section.list && (
            <ul>
              {section.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    // Fallback content for corrupted or missing data
    return (
      <div>
        <h2>Oops!</h2>
        <p>
          Something went wrong. It seems the data for this section is missing or corrupted.
          Please try refreshing the page or contact the site administrator.
        </p>
      </div>
    );
  };

  return (
    <div className="about-page">
      {/* Full-Width Photo Section */}
      <div className="about-photo-section">
        <img src="IMG_5699.png" alt="Your Name" className="about-photo" />
      </div>

      {/* White Section with Legend and Content */}
      <div className="about-content-section">
        <div className="legend">
          <h3>About Me!</h3>
          <ul>
            {/* Dynamically generate list items based on the data */}
            {aboutData.map((item) => (
              <li
                key={item.key}
                className={currentPage === item.key ? 'selected' : ''}
                onClick={() => setCurrentPage(item.key)}
                role="button"
                tabIndex={0}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default About;
