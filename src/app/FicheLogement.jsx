import Header from "./Header"
import Footer from "./Footer"
import Carousel from "./Carousel"
import AppartementTitle from "./AppartementTitle"
import AppartementTags from "./AppartementTags"
import AppartementInfos from "./AppartementInfos"
import StarRating from "./StarRating"
import Profile from "./Profile"
import "../styles/ficheLogement.css"
import data from "../content/data.json"



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