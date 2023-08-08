import "../styles/contentApropos.css"
import arrow from "../content/images/left_arrow.svg"
import HiddenContentBox from "./HiddenContentBox"
import "../styles/contentAbout.css"



function ContentAbout(){
    const bloc1value = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    const bloc2value = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
    const bloc3value = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
    const bloc4value = "La sécurité est la priorité de Kasa . Aussi bien pour nos hôtes que pour les voyageurs, chaque logement coreespond aux critères de sécyruté établis par nos services. En laissant une note aussi bien à l'hôtes qu'au locataire cela permet a nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return(
        <div className="contentAboutContainer">
            <HiddenContentBox headTitleValue="Fiabilité" contentValue={bloc1value} />
            <HiddenContentBox headTitleValue="Respect" contentValue={bloc2value} />
            <HiddenContentBox headTitleValue="Service" contentValue={bloc3value} />
            <HiddenContentBox headTitleValue="Sécurité" contentValue={bloc4value} />
        </div>
    )
}

export default ContentAbout
