import data from "../content/data.json"
import "../styles/profile.css"

function Profile(props){
    const index = props.appartementIndex
    const host = data[index].host
    const hostName = host.name
    const hostNameSplit = hostName.split(' ')
    return(
        <div className="profileContainer">
            <div>
                <p>{hostNameSplit[0]}</p>
                <p>{hostNameSplit[1]}</p>
            </div>
            <img src={host.picture} />
        </div>
    )
}

export default Profile