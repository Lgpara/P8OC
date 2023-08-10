import data from "../../../../content/data.json"
import HiddenContentBox from "../../../Props/HiddenContentBox/HiddenContentBox"
import "./styles/appartementInfos.css"

function AppartementInfos(props){
    const index = props.appartementIndex
    
    return(
        <div className="AppartementInfosContainer">
            <HiddenContentBox headTitleValue="Description" contentValue={data[index].description} />
            <HiddenContentBox headTitleValue="Équipements" contentValue={data[index].equipments.map((equipments) =>(<div key={equipments}>{equipments}</div>))} />
        </div>
    )
}


export default AppartementInfos