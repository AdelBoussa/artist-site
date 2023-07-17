import React from 'react';
import '../styles/Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item">
        <Link to="/releases">Releases</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;