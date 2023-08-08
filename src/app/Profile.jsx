import data from "../content/data.json"
import "../styles/profile.css"

function Profile(props){
    const index = props.appartementIndex
    const host = data[index].host
    return(
        <div className="profileContainer">
            <p>{host.name}</p>
            <img src={host.picture} />
        </div>
    )
}

export default Profile