import Image from '../../assets/SectionImg_Propos.png' // Importation de l'image pour SectionImage
import SectionImage from '../Componants/SectionImg/SectionImg' // Importation du composant réutilisable SectionImage
import DropDown from './DropDown' // Importation du composant DropDown
import './Propos.scss' // Importation du style de la page

function Propos(){
    return (
        <div className='Propos'>
            {/*Ajout de la valeur de la props déclarée dans le composant réutilisable SectionImage*/}
            <SectionImage src={Image}/>
            <DropDown />
        </div>
    )
}

export default Propos