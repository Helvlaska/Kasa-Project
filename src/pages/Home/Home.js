// fichier de construction de pages

/****IMPORTATIONS****/
import '../../styles/Home.scss'
import '../../styles/Gallery.scss'
import SectionImg from './SectionImg'
import Gallery from './Gallery'

function Home(){
    return <div className='Kasa_Home'>
        <SectionImg />
        <Gallery />
    </div>
}

export default Home