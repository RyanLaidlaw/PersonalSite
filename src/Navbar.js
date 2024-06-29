import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Navbar.css'

function Navbar() {
  const location = useLocation();
  
  return (
    <nav>
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/resume' ? 'active' : ''}>
          <Link to="/resume">Resume</Link>
        </li>
        <li className={location.pathname === '/projects' ? 'active': ''}>
            <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
