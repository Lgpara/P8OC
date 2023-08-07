import data from "../content/data.json"
let carouselLength = data[0].pictures.length



export let carouselPos = 1


export function carouselScript (variable){
    carouselPos = carouselPos + variable
    if(carouselPos > carouselLength - 1){
        carouselPos = 0
    }
    if(carouselPos < 0){
        carouselPos = carouselLength - 1
    }
    console.log(carouselPos)
}
