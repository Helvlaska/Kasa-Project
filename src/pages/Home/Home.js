// fichier de construction de pages

/****IMPORTATIONS****/
import './Home.scss'
import SectionImage from '../Componants/SectionImg/SectionImg'
import Image from '../../assets/SectionImg_Accueil.png' 
import Gallery from './Gallery'

function Home(){
    return <div className='Home'>
        <SectionImage src={Image}>
            <p className='SectionImg_Content'>Chez vous, partout et ailleurs</p>
        </SectionImage>
        <Gallery />
    </div>
}

export default Home