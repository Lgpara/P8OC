import logo from './LOGO.svg';
import './styles/header.css';
import { NavLink } from 'react-router-dom';

function Header() {

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

