import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <img src="./logo 2.png" alt="Logo" />
        </div>

        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>

        <div className="burger" onClick={toggleMenu}>
          <div className={isOpen ? 'line1 open' : 'line1'}></div>
          <div className={isOpen ? 'line2 open' : 'line2'}></div>
          <div className={isOpen ? 'line3 open' : 'line3'}></div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComp;
