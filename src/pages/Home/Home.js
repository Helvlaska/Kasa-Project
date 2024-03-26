// fichier de construction de pages

/****IMPORTATIONS****/
import './Home.scss'
import SectionImage from '../Componants/SectionImg/SectionImg'
import Image from '../../assets/Section_img_Accueil.png' 
import Gallery from './Gallery'

function Home(){
    return <div className='Kasa_Home'>
        <SectionImage src={Image}>
            <p className='Home_SectionImg_Text'>Chez vous, partout et ailleurs</p>
        </SectionImage>
        <Gallery />
    </div>
}

export default Home