import LocationData from "../content/data.json"
import "../styles/locations.css"

function Location () {
    return (
        <div className="locCardContainer">
            {LocationData.map(location => {
                return (
                    <div className="locCard">
                        <div className="imgContainer">
                            <img key={location.id} src={location.cover} alt={location.title} />
                        </div>
                        <p>{location.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Location