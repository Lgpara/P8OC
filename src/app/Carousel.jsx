import leftArrow from '../content/images/left_arrow.svg';
import rightArrow from '../content/images/right_arrow.svg';
import data from "../content/data.json"
import "../styles/carousel.css"
import { carouselPos, carouselScript } from './carouselFunction';

let carouselImgs = data[0].pictures[carouselPos]
let carouselLength = data[0].pictures.length




function Carousel () {
    



    return(
        <div className="carouselContainer">
            <div className="imgContainer">
                <img src={carouselImgs} />
            </div>
            <div className="navArrowContainer">
                <img onClick={() => carouselScript(-1)} className="navArrowL" src={leftArrow} />
                <p>{carouselPos + 1}/{carouselLength}</p>
                <img onClick={() => carouselScript(1)} className="navArrowR" src={rightArrow} />
            </div>
        </div>
    )
}

export default Carousel

