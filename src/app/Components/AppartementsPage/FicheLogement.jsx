import Header from "../General/Header/Header"
import Footer from "../General/Footer/Footer"
import Carousel from "./Carousel/Carousel"
import AppartementTitle from "./AppartementTitle/AppartementTitle"
import AppartementTags from "./AppartementTags/AppartementTags"
import AppartementInfos from "./AppartementInfos/AppartementInfos"
import StarRating from "./StarRating/StarRating"
import Profile from "./Profile/Profile"
import "./styles/ficheLogement.css"
import data from "./../../../content/data.json"



function FicheLogement(){
    const url = window.location.href
    const id = url.substring(url.length - 8)
    const test = data.findIndex(location => location.id === id)

    return(
        <main>
            <Header />
            <Carousel appartementIndex={test} />
            <div className="infosBloc">
                <div className="leftPart">
                    <AppartementTitle appartementIndex={test} />
                    <AppartementTags appartementIndex={test} />
                </div>
                <div className="rightPart">
                    <Profile appartementIndex={test} />
                    <StarRating appartementIndex={test} />
                </div>
            </div>
            <AppartementInfos appartementIndex={test} />
            <Footer />
        </main>
    )
}

export default FicheLogement