import { useState } from 'react'; // Importation du Hook UseState
import { useMainContentData } from '../MainContentData'; // Importation de la fonction d'appel a l'Api
import Arrow from '../../assets/Arrow.svg' // Importation de l'icône flèche
import '../../styles/DropDown.scss' // Importation des styles CSS

function MainContentDropDown(){

    const [dropDown, setDropDown] = useState({}); // État pour gérer l'état des éléments déroulants
    const startDropDown = (id) => { // Fonction pour ouvrir ou fermer un élément déroulant
        setDropDown(prevState => ({ ...prevState, [id]: !prevState[id] })); // Utilisation de la fonction setDropDown pour mettre à jour l'état avec l'inversion de la visibilité de l'élément spécifique
    }

    const MainContentData = useMainContentData(); // Utilisation de la fonction d'importation des données de l'Api

    if (!MainContentData) {
        return <div>Loading...</div>; // vérification de nullité des données de l'Api
      }
    
    const équipementsList = (MainContentData.équipements); // Liste des équipements du logement
    
    return <div className='MainContent_DropDown'> {/* Bloc pour les éléments déroulants */}
        <div className='DropDown_Item_Logement'> {/* Élément déroulant pour la description */}
            <div className='DropDown_Title'> {/* Bloc titre de l'élément déroulant */}
                <h6>Description</h6> {/* Titre de la description */}
                <img src={Arrow} alt='Arrow' onClick={() => startDropDown('description')} /> {/* Icône de flèche avec événement onClick pour ouvrir/fermer l'élément */}
            </div>
            {/* Vérification si l'élément déroulant de la description est ouvert */}
            {dropDown['description'] && ( 
                <div className='DropDown_Text'> {/* Contenu de l'élément déroulant */}
                    <p>{MainContentData.description}</p> {/* Affichage de la description */}
                </div>
            )}   
        </div>
        <div className='DropDown_Item_Logement'> {/* Élément déroulant pour les équipements */}
            <div className='DropDown_Title'> {/* Bloc titre de l'élément déroulant */}
                <h6>Équipements</h6> {/* Titre de la description */}
                <img src={Arrow} alt='Arrow' onClick={() => startDropDown('équipements')} /> {/* Icône de flèche avec événement onClick pour ouvrir/fermer l'élément */}
            </div>
            {/* Vérification si l'élément déroulant de la description est ouvert */}
            {dropDown['équipements'] && ( 
                <ul className='DropDown_List'> {/* Liste des équipements */}
                    {/* Parcours et affichage des équipements */}
                    {équipementsList.map((item, équipements) => (
                        <li key={`${item}-${équipements}`} className='DropDown_Text'>{item}</li>
                    ))}   
                </ul>
            )}   
        </div>
    </div>
}

export default MainContentDropDown // Exportation de la fonction MainContentDropDown