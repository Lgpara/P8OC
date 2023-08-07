import data from "../content/data.json"
import "../styles/profile.css"

function Profile(){
    const host = data[0].host
    return(
        <div className="profileContainer">
            <p>{host.name}</p>
            <img src={host.picture} />
        </div>
    )
}

export default Profile