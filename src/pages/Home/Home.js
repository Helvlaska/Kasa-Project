import Image from '../../assets/SectionImg_Accueil.png' // Import de l'image pour la SectionImage
import SectionImage from '../Componants/SectionImg/SectionImg' // Import du composant SectionImage
import Gallery from './Gallery' // Import du composant Gallery
import './Home.scss' // Import du style de la page

function Home(){
    return <div className='Home'>
        <SectionImage src={Image}> {/*src : props déclaré dans la fonction SectionImage*/}
            {/*children : props déclaré dans la fonction SectionImage*/}
            <p className='SectionImg_Content'>Chez vous, partout et ailleurs</p> 
        </SectionImage>
        <Gallery />
    </div>
}

export default Home