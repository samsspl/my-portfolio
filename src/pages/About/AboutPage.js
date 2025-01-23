import React, { useState } from 'react';
import './AboutPage.css';

const About = () => {
  const [currentPage, setCurrentPage] = useState('introduction');

  const renderContent = () => {
    switch (currentPage) {
      case 'introduction':
        return (
          <div>
            <h2>Introduction</h2>
            <p>
              Welcome to my About page! I am passionate about creating and innovating.
              I have a strong interest in web development and enjoy working on projects
              that challenge me and help me grow.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
              odio vitae vestibulum vestibulum.
            </p>
          </div>
        );
      case 'experience':
        return (
          <div>
            <h2>Experience</h2>
            <p>
              I have several years of experience in web development, focusing on building
              scalable and performant applications. I have worked on a variety of projects
              ranging from small business websites to large enterprise solutions.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <p>
              I have several years of experience in web development, focusing on building
              scalable and performant applications. I have worked on a variety of projects
              ranging from small business websites to large enterprise solutions.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
        );
      case 'hobbies':
        return (
          <div>
            <h2>Hobbies</h2>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
            <p>
              When I’m not coding, you’ll find me hiking, reading, or experimenting with
              photography. I enjoy capturing moments and exploring new places.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius,
              ligula non tempus aliquam, nunc commodo est.
            </p>
          </div>
        );
      default:
        return null;
    }
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
          <h3>About</h3>
          <ul>
            <li
              className={currentPage === 'introduction' ? 'selected' : ''}
              onClick={() => setCurrentPage('introduction')}
              role="button"
              tabIndex={0}
            >
              Introduction
            </li>
            <li
              className={currentPage === 'experience' ? 'selected' : ''}
              onClick={() => setCurrentPage('experience')}
              role="button"
              tabIndex={0}
            >
              Experience
            </li>
            <li
              className={currentPage === 'hobbies' ? 'selected' : ''}
              onClick={() => setCurrentPage('hobbies')}
              role="button"
              tabIndex={0}
            >
              Hobbies
            </li>
          </ul>
        </div>

        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default About;
