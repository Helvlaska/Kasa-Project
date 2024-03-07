//import Gallery from "./Gallery"
import MainContentDropDown from "./MainContent_DropDown"
import MainContentTitle from "./MainContent_Title"
import MainContentTag from "./MainContent_Tag"
import MainContentPeople from "./MainContent_People"
import MainContentStarNote from "./MainContent_StarNote"

function Logement(){
    return <div className='Kasa_Logement'>
        <MainContentTitle />
        <MainContentTag />
        <MainContentPeople />
        <MainContentStarNote />
        <MainContentDropDown />

    </div>
}

export default Logement