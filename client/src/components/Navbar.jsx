import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Navbar = ({ setCurrentlyOpen }) => {

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentlyOpen(e.target.id);
  };

  return(
    <nav>
      <button id="dashboard" onClick={handleClick}>Dashboard</button>
      <button id="testpanel" onClick={handleClick}>Test Panel</button>
    </nav>
  )
  
};

export default Navbar;