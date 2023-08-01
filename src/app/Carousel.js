import leftArrow from '../content/images/left_arrow.svg';
import rightArrow from '../content/images/right_arrow.svg';
import data from "../content/data.json"
import "../styles/carousel.css"

let carouselImgs = data[0].pictures[0]

let carouselPosition = 0

function carouselNavigation(z){
    carouselPosition = carouselPosition + z
    if (carouselPosition >= nbdephoto - 1){
        carouselPosition = 0
    }
    if (carouselPosition < 0){
        carouselPosition = nbdephoto - 1 
    }
}

//gauche 
addEventListener("click", function(){
    let z = -1
    carouselNavigation(z)
})
//droite  
addEventListener("click", function(){
    let z = -1
    carouselNavigation(z)
})





function Carousel () {
    return(
        <div className="carouselContainer">
            <div className="imgContainer">
                <img src={carouselImgs} />
            </div>
            <div className="navArrowContainer">
                <img className="navArrowL" src={leftArrow} />
                <p>1/4</p>
                <img className="navArrowR" src={rightArrow} />
            </div>
        </div>
    )
}

export default Carousel