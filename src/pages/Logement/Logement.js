//import Gallery from "./Gallery"
import MainContent from "./MainContent"
import MainContentTitle from "./MainContent_Title"
import MainContentTag from "./MainContent_Tag"
import MainContentPeople from "./MainContent_People"

function Logement(){
    return <div className='Kasa_Logement'>
        <MainContentTitle />
        <MainContentTag />
        <MainContentPeople />
        <MainContent />

    </div>
}

export default Logement