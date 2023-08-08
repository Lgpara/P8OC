import leftArrow from '../content/images/left_arrow.svg';
import rightArrow from '../content/images/right_arrow.svg';
import data from "../content/data.json"
import "../styles/carousel.css"
import React, { useState } from 'react';



function Carousel () {
    const [carouselPos, setCarouselPos] = useState(0)
    const carouselImgs = data[0].pictures[carouselPos]
    const carouselLength = data[0].pictures.length

    const leftClick = () => {
        if(carouselPos === 0){
            setCarouselPos(carouselLength - 1)
        } else {
            setCarouselPos(carouselPos - 1)
        }
    }
    const rightClick = () => {
        if(carouselPos === carouselLength - 1){
            setCarouselPos(0)
        }else{
            setCarouselPos(carouselPos + 1)
        }
    }

    return(
        <div className="carouselContainer">
            <div className="imgContainer">
                <img src={carouselImgs} />
            </div>
            <div className="navArrowContainer">
                <img onClick={leftClick} className="navArrowL" src={leftArrow} />
                <p>{carouselPos + 1}/{carouselLength}</p>
                <img onClick={rightClick} className="navArrowR" src={rightArrow} />
            </div>
        </div>
    )
}

export default Carousel

