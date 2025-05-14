import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Afrosoul. All rights reserved.</p>
      <p>
        Made with 💖 in Salvador, Bahia · Follow us on 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
      </p>
    </footer>
  );
};

export default Footer;
