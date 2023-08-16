import data from "./data.json"
import "./styles/locations.css"
import { Link } from "react-router-dom"

function Location () {

    return (
        <div className="locCardContainer">
            {data.map(location => {
                return (
                    <div key={location.id} className="locCard">
                        <Link to={`/fiche-logement/${location.id}`} className="imgContainer">
                            <img src={location.cover} alt={location.title} />
                        </Link>
                        <p>{location.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Location