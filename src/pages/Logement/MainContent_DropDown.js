import { useMainContentData } from '../MainContentData'; // Importation de la fonction d'appel a l'Api
import {DropDown} from '../Componants/DropDown/DropDown' // Importation du composant générique DropDown
import '../Componants/DropDown/DropDown.scss' // Importation du css du composant

function DropDownLogement() {

    const MainContentData = useMainContentData(); // Utilisation de la fonction d'importation des données de l'Api
    if (!MainContentData) {
        return <div>Loading...</div>; // vérification de nullité des données de l'Api
      }

    return (
        <div className='MainContent_DropDown'>
            <DropDown title='Description' content={MainContentData.description}/>
            <DropDown title='Equipements' content={MainContentData.équipements}/>
        </div>)
}

export default DropDownLogement
