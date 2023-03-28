import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Route } from '../types';

type NavbarProps = {
  currentlyOpen: keyof Route,
  setCurrentlyOpen: React.Dispatch<React.SetStateAction<keyof Route>>,
  algo: string
}

const Navbar = (props: NavbarProps) => {

  const handleClick = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    props.setCurrentlyOpen(target.id);
  };

  return(
    <nav>
      <button id="dashboard"
      onClick={handleClick}
      className={props.currentlyOpen === 'dashboard' ? 'active' : ''}>
        Dashboard
      </button>
      {/* {if props.algo = wtinylfu, display a panel for Adaptivity} */}
      {props.algo === 'W-TinyLFU' &&
        <button id="adaptivity"
        onClick={handleClick}
        className={props.currentlyOpen === 'adaptivity' ? 'active' : ''}>
          Adaptivity
        </button>
      }
      <button id="testpanel" 
      onClick={handleClick} 
      className={props.currentlyOpen === 'testpanel' ? 'active' : ''}>
        Test Panel
      </button>
    </nav>
  )
  
};

export default Navbar;