import data from "../content/data.json"
import HiddenContentBox from "./HiddenContentBox"

function AppartementInfos(){
    
    return(
        <div className="AppartementInfosContainer">
            <HiddenContentBox headTitleValue="Description" contentValue={data[0].description} />
            <HiddenContentBox headTitleValue="Équipements" contentValue={data[0].equipments.map((equipments) =>(<p key={equipments}>{equipments}</p>))} />
        </div>
    )
}


export default AppartementInfos