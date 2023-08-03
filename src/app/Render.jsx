import Carousel from "./Carousel"
import AppartementTitle from "./AppartementTitle"
import AppartementTags from "./AppartementTags"
import AppartementInfos from "./AppartementInfos"


function Render(){
    return(
        <main>
            <AppartementInfos />
            <Carousel />
            <AppartementTitle />
            <AppartementTags />
        </main>
    )
}

export default Render