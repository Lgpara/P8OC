import Header from "./Header"
import Footer from "./Footer"
import Carousel from "./Carousel"
import AppartementTitle from "./AppartementTitle"
import AppartementTags from "./AppartementTags"
import AppartementInfos from "./AppartementInfos"
import StarRating from "./StarRating"
import Profile from "./Profile"
import "../styles/ficheLogement.css"



function FicheLogement(){
    return(
        <main>
            <Header />
            <Carousel />
            <div className="infosBloc">
                <div className="leftPart">
                    <AppartementTitle />
                    <AppartementTags />
                </div>
                <div className="rightPart">
                    <Profile />
                    <StarRating />
                </div>
            </div>
            <AppartementInfos />
            <Footer />
        </main>
    )
}

export default FicheLogement