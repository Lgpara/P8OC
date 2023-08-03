import leftArrow from '../content/images/left_arrow.svg';
import rightArrow from '../content/images/right_arrow.svg';
import data from "../content/data.json"
import "../styles/carousel.css"

let carouselImgs = data[0].pictures[0]
let carouselLength = data[0].pictures.length

let carouselPosition = 0



function Carousel () {
    return(
        <div className="carouselContainer">
            <div className="imgContainer">
                <img src={carouselImgs} />
            </div>
            <div className="navArrowContainer">
                <img className="navArrowL" src={leftArrow} />
                <p>1/{carouselLength}</p>
                <img className="navArrowR" src={rightArrow} />
            </div>
        </div>
    )
}

export default Carousel


