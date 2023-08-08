import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "../styles/starRating.css"



function starRating(props){
    const index = props.appartementIndex
    return(
        <div className='starContainer'>
            <FontAwesomeIcon icon={faStar} className='star selected' />
            <FontAwesomeIcon icon={faStar} className='star selected' />
            <FontAwesomeIcon icon={faStar} className='star selected' />
            <FontAwesomeIcon icon={faStar} className='star' />
            <FontAwesomeIcon icon={faStar} className='star' />
        </div>
    )
}

export default starRating