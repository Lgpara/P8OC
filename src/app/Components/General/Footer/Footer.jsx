import logo from './LOGOwhite.svg';
import "./styles/footer.css"


function Footer (){
    return (
        <footer>
            <img src={logo} alt="Logo du site Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer;
