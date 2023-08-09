import "../styles/404.css"
import { Link } from "react-router-dom"


function Error404 () {
    return (
        <div className="bloc404">
            <div>404</div>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error404
