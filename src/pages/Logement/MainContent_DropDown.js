import { useMainContentData } from '../Data/MainContentData'; // Importation de la fonction d'appel a l'Api
import {DropDown} from '../Componants/DropDown/DropDown' // Importation du composant réutilisable DropDown
import '../Componants/DropDown/DropDown.scss' // Importation du style du composant

function DropDownLogement() {

    // Utilisation de la fonction d'importation des données de l'Api
    const MainContentData = useMainContentData(); 

    // vérification de nullité des données de l'Api
    if (!MainContentData) {
        return <div>Loading...</div>; 
      }

    return (
        <div className='MainContent_DropDown'>
            {/*Utilisation de la props : title et content déclaré dans la fonction réutilisable DropDown*/}
            {/*Content prend comme valeur, celles des clefs description et équipements de l'api */}
            <DropDown title='Description' content={MainContentData.description}/>
            <DropDown title='Equipements' content={MainContentData.équipements}/>
        </div>)
}

export default DropDownLogement
