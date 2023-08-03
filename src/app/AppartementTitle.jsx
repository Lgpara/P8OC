import data from "../content/data.json"
import "../styles/appartementTitle.css"

let appartementName = data[0].title
let appartementLoc = data[0].location


function AppartementTitle (){
    return(
        <div className="appartementTitleContainer">
            <h2>{appartementName}</h2>
            <p>{appartementLoc}</p>
        </div>
    )
}

export default AppartementTitle