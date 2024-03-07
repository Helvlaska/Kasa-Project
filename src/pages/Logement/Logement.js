//import Gallery from "./Gallery"
import MainContent from "./MainContent"
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
        <MainContent />

    </div>
}

export default Logement