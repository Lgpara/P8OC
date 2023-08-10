import data from "./data.json"
import "./styles/locations.css"
import { Link } from "react-router-dom"
import React, {useState} from "react"

function Location () {

    const [selectedAppartement, setSelectedAppartement] = useState(null)

    const handleClick = (appartementId) => {
        const appartementIndex = data.findIndex(location => location.id === appartementId)
        setSelectedAppartement(appartementIndex)
        console.log(appartementIndex) 
    }


    return (
        <div className="locCardContainer">
            {data.map(location => {
                return (
                    <div className="locCard">
                        <Link onClick={() => handleClick(location.id)} to={`/fiche-logement/${location.id}`} className="imgContainer">
                            <img key={location.id} src={location.cover} alt={location.title} />
                        </Link>
                        <p>{location.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Location