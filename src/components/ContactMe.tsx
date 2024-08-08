import React from 'react';
import '../styles/ContactMe.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineFilePdf } from 'react-icons/ai';

const ContactMe: React.FC = () => {
  return (
    <div className="contact-me-container">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="https://github.com/Armando-coder-gif" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FaGithub className="contact-icon" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/armando-gonz%C3%A1lez-urbina-379764177/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FaLinkedin className="contact-icon" />
          LinkedIn
        </a>
        <a href="https://docs.google.com/document/d/1q3E5LEH1gAczqcCX49RnkjYiHXUufZ0d/edit?usp=sharing&ouid=114706331604700396250&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="contact-link cv-link">
          <AiOutlineFilePdf className="contact-icon" />
          CV
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
