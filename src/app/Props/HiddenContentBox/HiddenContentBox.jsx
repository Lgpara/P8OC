import arrow from "../../../content/images/left_arrow.svg"
import "./styles/hiddenContentBox.css"
import { useState } from "react"



function HiddenContentBox(props) {
    const headTitleValue = props.headTitleValue
    const contentValue = props.contentValue

    const [animationStatus, setAnimationStatus] = useState(false)
    const animationUpdate = () => {
        setAnimationStatus(!animationStatus)
    }
    

    return (
        <div className="boxContainer">
            <div className="headContainer">
                <p>{headTitleValue}</p>
                <img className={animationStatus ? "arrowAnim" : ""} onClick={animationUpdate} src={arrow} />
            </div>
            <div className={`contentContainer ${animationStatus? "contentAnim" : ""}`}>
                {contentValue}
            </div>
        </div>
    )
}

export default HiddenContentBox


// <HiddenContentBox headTitleValue="" contentValue="" />