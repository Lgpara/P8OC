import "../styles/contentApropos.css"
import arrow from "../content/images/left_arrow.svg"

function ContentAbout(){
    return(
        <div className="containerApropos">
            <div className="container1">
                <div className="bloc1">
                    <p className="blocTxt">Fiabilité</p>
                    <img src={arrow} />
                </div>
                <div className="aboutBloc1">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>
            </div>
            <div className="container2">
                <div className="bloc2">
                    <p>Respect</p>
                    <img src={arrow} />
                </div>
                <div className="aboutBloc2">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</div>
            </div>
            <div className="container3">
                <div className="bloc3">
                    <p>Service</p>
                    <img src={arrow} />
                </div>
                <div className="aboutBloc3">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</div>
            </div>
            <div className="container4">
                <div className="bloc4">
                    <p>Sécurité</p>
                    <img src={arrow} />
                </div>
                <div className="aboutBloc4">La sécurité est la priorité de Kasa . Aussi bien pour nos hôtes que pour les voyageurs, chaque logement coreespond aux critères de sécyruté établis par nos services. En laissant une note aussi bien à l'hôtes qu'au locataire cela permet a nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
            </div>
        </div>
    )
}

export default ContentAbout