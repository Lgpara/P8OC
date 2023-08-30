import logo from './LOGO.svg';
import './styles/header.css';
import { NavLink } from 'react-router-dom';
import data from "../../../../content/data.json"
import { useEffect } from 'react';

function Header() {
  useEffect(()=>{  
    localStorage.setItem('Data', JSON.stringify(data));
  })

  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav className="navLinkContainer">
        <NavLink
          className={({ isActive, isPending }) => {
            return isActive ? "navLink selected" : isPending ? "pending" : "navLink";
          }}
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
            className={({ isActive, isPending }) => {
                return isActive ? "navLink selected" : isPending ? "pending" : "navLink";
                }}
          to="/about"
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

