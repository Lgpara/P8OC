import logo from '../content/images/LOGO.svg';
import "../styles/header.css"
import { Link, link } from "react-router-dom"

function Header (){
    return (
        <header>
            <img src={logo} />
            <nav>
                {/* <a>Accueil</a>
                <a>A Propos</a> */}
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    )
}
export default Header;