import "./styles/profile.css"

function Profile(props){
    const data = props.appartementData
    const host = data.host
    const hostName = host.name
    const hostNameSplit = hostName.split(' ')
    return(
        <div className="profileContainer">
            <div>
                <p>{hostNameSplit[0]}</p>
                <p>{hostNameSplit[1]}</p>
            </div>
            <img src={host.picture} alt="Propriétaire de l'appartement" />
        </div>
    )
}

export default Profile