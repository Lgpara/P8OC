import logo from '../content/images/LOGOwhite.svg';
import "../styles/footer.css"


function Footer (){
    return (
        <footer>
            <img src={logo} />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer;