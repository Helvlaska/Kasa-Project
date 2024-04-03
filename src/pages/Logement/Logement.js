import Carrousel from "./MainContent_Carrousel" // Import du composant Carrousel
import MainContentDropDown from "./MainContent_DropDown" // Import du composant DropDown
import MainContentTitle from "./MainContent_Title" // Import du composant Title
import MainContentTag from "./MainContent_Tag" // Import du composant Tag
import MainContentPeople from "./MainContent_People" // Import du composant People
import MainContentStarNote from "./MainContent_StarNote" // Import du composant StarNote
import './Logement.scss' // Import du style de la page

function Logement(){
    return <div className='Logement'>
        <Carrousel />
        <div className="Logement_Title">
            <div className="Title_Tag">
                <MainContentTitle />
                <MainContentTag />
            </div>
            <div className="Title_People">
                <MainContentPeople />
                <MainContentStarNote />
            </div>
        </div>
        <div className="Logement_Content">
            <MainContentDropDown />
        </div>  
    </div>
}

export default Logement