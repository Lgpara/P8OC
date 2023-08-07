import banner from '../content/images/banner.svg';
import "../styles/banner.css"

function Banner (){
    return (
        <div className="bannerContainer">
            <div className="bannerImgContainer">
                <img className="bannerImg" src={banner} />
            </div>
            <h1 className="bannerTxt">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner;