import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Route } from '../types';

type NavbarProps = {
  setCurrentlyOpen: React.Dispatch<React.SetStateAction<keyof Route>>
}

const Navbar = (props: NavbarProps) => {

  const handleClick = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    props.setCurrentlyOpen(target.id);
  };

  return(
    <nav>
      <button id="dashboard" onClick={handleClick}>Dashboard</button>
      <button id="testpanel" onClick={handleClick}>Test Panel</button>
    </nav>
  )
  
};

export default Navbar;