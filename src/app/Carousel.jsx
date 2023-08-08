import leftArrow from '../content/images/left_arrow.svg';
import rightArrow from '../content/images/right_arrow.svg';
import data from "../content/data.json"
import "../styles/carousel.css"
import React, { useState } from 'react';

// let carouselImgs = data[0].pictures[carouselPos]
// let carouselLength = data[0].pictures.length

let carouselPos = 0


function Carousel () {
    const [imgValue, setImgValue] = useState(data[0].pictures[carouselPos])
    let carouselImgs = useState(data[0].pictures[carouselPos])
    let carouselLength = data[0].pictures.length
    function carouselScript(variable){
        carouselPos = carouselPos + variable
        if(carouselPos > carouselLength - 1){
            carouselPos = 0
        }
        if(carouselPos < 0){
            carouselPos = carouselLength - 1
        }
        console.log(carouselPos)
    }
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

