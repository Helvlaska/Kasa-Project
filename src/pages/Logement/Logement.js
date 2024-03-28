import Carrousel from "./MainContent_Carrousel"
import MainContentDropDown from "./MainContent_DropDown"
import MainContentTitle from "./MainContent_Title"
import MainContentTag from "./MainContent_Tag"
import MainContentPeople from "./MainContent_People"
import MainContentStarNote from "./MainContent_StarNote"
import './Logement.scss'

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