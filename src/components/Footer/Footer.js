import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { socialLinks } from '../../config/socialLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me on:</p>
      <div className="social-icons">
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
            data-tooltip="LinkedIn"
          >
            <FaLinkedin />
          </a>
        )}
        {socialLinks.facebook && (
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
            data-tooltip="Facebook"
          >
            <FaFacebook />
          </a>
        )}
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
            data-tooltip="Instagram"
          >
            <FaInstagram />
          </a>
        )}
      </div>
    </footer>
  );
};

export default Footer;
