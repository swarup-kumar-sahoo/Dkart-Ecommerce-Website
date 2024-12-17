import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo"><Link to="/" onClick={() => setMenuOpen(false)}>Dkart</Link></div>
      {/* Animated Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? "isActive" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <Link to="/mens-fashion" onClick={() => setMenuOpen(false)}>Mens</Link>
          <li><Link to="/womens-fashion" onClick={() => setMenuOpen(false)}>Womens</Link></li>
          <li><Link to="/kids-fashion" onClick={() => setMenuOpen(false)}>Kids</Link></li>
          <li><Link to="/electronics" onClick={() => setMenuOpen(false)}>Electronics</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
