import logo from '../content/images/LOGO.svg';
import "../styles/header.css"

function Header (){
    return (
        <header>
            <img src={logo} />
            <nav>
                <a>Accueil</a>
                <a>A Propos</a>
            </nav>
        </header>
    )
}
export default Header;