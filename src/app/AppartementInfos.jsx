import data from "../content/data.json"
import HiddenContentBox from "./HiddenContentBox"
import "../styles/appartementInfos.css"

function AppartementInfos(){
    
    return(
        <div className="AppartementInfosContainer">
            <HiddenContentBox headTitleValue="Description" contentValue={data[0].description} />
            <HiddenContentBox headTitleValue="Équipements" contentValue={data[0].equipments.map((equipments) =>(<div key={equipments}>{equipments}</div>))} />
        </div>
    )
}


export default AppartementInfos