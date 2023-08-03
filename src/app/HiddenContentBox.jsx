import arrow from "../content/images/left_arrow.svg"
import data from "../content/data.json"
import "../styles/hiddenContentBox.css"




function HiddenContentBox(props) {
    const headTitleValue = props.headTitleValue
    const contentValue = props.contentValue
    return (
        <div className="boxContainer">
            <div className="headContainer">
                <p>{headTitleValue}</p>
                <img src={arrow} />
            </div>
            <div className="contentContainer">
                {contentValue}
            </div>
        </div>
    )
}

export default HiddenContentBox


// <HiddenContentBox headTitleValue="" contentValue="" />