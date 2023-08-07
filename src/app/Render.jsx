import Carousel from "./Carousel"
import AppartementTitle from "./AppartementTitle"
import AppartementTags from "./AppartementTags"
import AppartementInfos from "./AppartementInfos"
import Profile from "./Profile"


function Render(){
    return(
        <main>
            <Profile />
            <AppartementInfos />
            <Carousel />
            <AppartementTitle />
            <AppartementTags />
        </main>
    )
}

export default Render