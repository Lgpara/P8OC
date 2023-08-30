
import "./styles/appartementTags.css"


function AppartementTags(props){
    const data = props.appartementData
    return(
        <div className="tagsContainer">
            {data.tags.map((tags) => (
                <p className="tags" key={tags}>{tags}</p>
            ))}
        </div>
    )
}

export default AppartementTags