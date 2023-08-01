import banner2 from "../content/images/banner2.svg"
import "../styles/banner2.css"


function banner_a_propos(){
    return(
        <div className="banner2container">
            <img src={banner2} alt="banner2" className="banner2img" />
        </div>
    )
}

export default banner_a_propos