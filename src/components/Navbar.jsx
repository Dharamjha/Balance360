import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Balance360 Logo" className="logo-img" />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/diet" onClick={() => setMenuOpen(false)}>Diet</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/join-now" className="ctaa-button" onClick={() => setMenuOpen(false)}>Join Now</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;