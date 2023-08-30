import leftArrow from "../../../../content/images/left_arrow.svg";
import rightArrow from "../../../../content/images/right_arrow.svg";
import data from "../../../../content/data.json"
import "./styles/carousel.css"
import React, { useState } from 'react';



function Carousel (props) {
    const index = props.appartementIndex
    const [carouselPos, setCarouselPos] = useState(0)
    const carouselImgs = data[index].pictures[carouselPos]
    const carouselLength = data[index].pictures.length

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
                <img src={carouselImgs} alt="Appartement" />
            </div>
            <div className="navArrowContainer">
                <img alt="Flèche de navigation gauche" onClick={leftClick} className="navArrowL" src={leftArrow} />
                <p>{carouselPos + 1}/{carouselLength}</p>
                <img alt="Flèche de navigation droite" onClick={rightClick} className="navArrowR" src={rightArrow} />
            </div>
        </div>
    )
}

export default Carousel

