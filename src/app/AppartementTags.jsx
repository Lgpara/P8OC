import data from "../content/data.json"
import "../styles/appartementTags.css"


function AppartementTags(props){
    const index = props.appartementIndex
    return(
        <div className="tagsContainer">
            {data[index].tags.map((tags) => (
                <p className="tags" key={tags}>{tags}</p>
            ))}
        </div>
    )
}

export default AppartementTags