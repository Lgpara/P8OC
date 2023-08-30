import "./styles/appartementTitle.css"



function AppartementTitle (props){
    const data = props.appartementData
    const appartementName = data.title
    const appartementLoc = data.location
    return(
        <div className="appartementTitleContainer">
            <h2>{appartementName}</h2>
            <p>{appartementLoc}</p>
        </div>
    )
}

export default AppartementTitle