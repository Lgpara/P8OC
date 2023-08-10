import data from "../../../../content/data.json"
import "./styles/appartementTitle.css"



function AppartementTitle (props){
    const index = props.appartementIndex
    const appartementName = data[index].title
    const appartementLoc = data[index].location
    return(
        <div className="appartementTitleContainer">
            <h2>{appartementName}</h2>
            <p>{appartementLoc}</p>
        </div>
    )
}

export default AppartementTitle