import React, { useEffect, useState } from 'react';
import './Logo.css';
import logo from './Photos/Afrosoul.png'; // ✅ Import the image

const Logo = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="logo-container">
      <img
        src={logo} // ✅ Use imported variable
        alt="Logo"
        className={fadeIn ? 'fade-in' : ''}
        style={{ width: '230px', height: 'auto' }}
      />
    </div>
  );
};

export default Logo;
