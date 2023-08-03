import data from "../content/data.json"
import "../styles/appartementTags.css"

let carouselImgs = data[0].pictures[0]
let carouselLength = data[0].pictures.length

function AppartementTags(){
    return(
        <div className="tagsContainer">
            {data[0].tags.map((tags) => (
                <p className="tags" key={tags}>{tags}</p>
            ))}
        </div>
    )
}

export default AppartementTags