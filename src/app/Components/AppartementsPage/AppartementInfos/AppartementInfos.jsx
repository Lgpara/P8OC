import HiddenContentBox from "../../../Props/HiddenContentBox/HiddenContentBox"
import "./styles/appartementInfos.css"

function AppartementInfos(props){
    const data = props.appartementData
    
    return(
        <div className="AppartementInfosContainer">
            <HiddenContentBox headTitleValue="Description" contentValue={data.description} />
            <HiddenContentBox headTitleValue="Équipements" contentValue={data.equipments.map((equipments) =>(<div key={equipments}>{equipments}</div>))} />
        </div>
    )
}


export default AppartementInfos