import React from 'react';
import '../styles/Navbar.css'; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
return (
<nav className="navbar">
<ul className="navbar-nav">
<li className="nav-item">
<NavLink to="/home" activeClassName="active">Home</NavLink>
</li>
<li className="nav-item">
<NavLink to="/gallery" activeClassName="active">Gallery</NavLink>
</li>
<li className="nav-item">
<NavLink to="/releases" activeClassName="active">Releases</NavLink>
</li>
<li className="nav-item">
<NavLink to="/contact" activeClassName="active">Contact</NavLink>
</li>
</ul>
</nav>
);
};

export default Navbar;