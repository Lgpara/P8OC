import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "./styles/starRating.css"


function starRating(props){
    const data = props.appartementData
    const stars = data.rating
    const emptyStars = 5 - stars
    const starsTab = []
    const emptyStarsTab =[]
    for (let i = 0; i < stars; i++){
        starsTab.push(<FontAwesomeIcon icon={faStar} className='star selected' key={i} />)
    }
    for (let i = 0; i < emptyStars; i++){
        emptyStarsTab.push(<FontAwesomeIcon icon={faStar} className='star' key={i} />)
    }
    return(
        <div className='starContainer'>
            {starsTab}
            {emptyStarsTab}
        </div>
    )
}

export default starRating