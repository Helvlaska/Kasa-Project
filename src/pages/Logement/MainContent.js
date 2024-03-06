import React, { useEffect, useState } from 'react'; // Importation des hooks React nécessaires
import { useParams } from 'react-router-dom'; // Importation de useParams pour récupérer les paramètres d'URL
import Api from '../ApiLogements.json' // Importation des données d'API
import Arrow from '../../assets/Arrow.svg' // Importation de l'icône flèche
import '../../styles/DropDown.scss' // Importation des styles CSS

function MainContent(){

    const { identifiant } = useParams(); // Récupération de l'identifiant de l'URL
    const [MainContentData, setMainContentData] = useState(null); // État pour stocker les données du logement
    
    const [dropDown, setDropDown] = useState({}); // État pour gérer l'état des éléments déroulants

    const startDropDown = (id) => { // Fonction pour ouvrir ou fermer un élément déroulant
        setDropDown(prevState => ({ ...prevState, [id]: !prevState[id] })); // Utilisation de la fonction setDropDown pour mettre à jour l'état avec l'inversion de la visibilité de l'élément spécifique
    }

    useEffect(() => { // Effet qui s'exécute au chargement et lorsque l'identifiant change
        // Recherche des données correspondant à l'identifiant dans le tableau de données JSON
        const data = Api.find(item => item.identifiant === identifiant);
    
        // Mise à jour de l'état avec les données trouvées
        setMainContentData(data);
      }, [identifiant]); // Dépendance : identifiant de l'URL
    
      if (!MainContentData) { // Si les données du logement ne sont pas chargées
        return <div>Loading...</div>; // Affichage d'un message de chargement
      }
    const TagList = (MainContentData["Mots clés"]); // Liste des mots-clés du logement
    const équipementsList = (MainContentData.équipements); // Liste des équipements du logement

    return <div className='Kasa_MainContent'> {/* Conteneur principal */}
        <div className='MainContent_Bloc_Title'> {/* Bloc de titre */}
            <h1 className="MainContent_Title">{MainContentData.title}</h1> {/* Affichage du titre du logement */}
            <p className="MainContent_Lieu">{MainContentData.location}</p> {/* Affichage de l'emplacement du logement */}
            <ul className="MainContent_TagList"> {/* Liste des mots-clés */}
                {/* Parcours et affichage des mots-clés */}
                {TagList.map((item, Tag) => ( 
                    <li key={`${item}-${Tag}`}className='MainContent_Tag'>{item}</li> 
                ))}
            </ul>
        </div>
        <div className='MainContent_Bloc_People'> {/* Bloc pour les informations sur les personnes */}

        </div>
        <div className='MainContent_Bloc_DropDown'> {/* Bloc pour les éléments déroulants */}
            <div className='DropDown_Item'> {/* Élément déroulant pour la description */}
                <div className='DropDown_Title'> {/* Bloc titre de l'élément déroulant */}
                    <h6>Description</h6> {/* Titre de la description */}
                    <img src={Arrow} alt='Arrow' onClick={() => startDropDown('description')} /> {/* Icône de flèche avec événement onClick pour ouvrir/fermer l'élément */}
                </div>
                    {/* Vérification si l'élément déroulant de la description est ouvert */}
                    {dropDown['description'] && ( 
                        <div> {/* Contenu de l'élément déroulant */}
                            <p className='DropDown_Text'>{MainContentData.description}</p> {/* Affichage de la description */}
                        </div>
                    )}   
                </div>
            <div className='DropDown_Item'> {/* Élément déroulant pour les équipements */}
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
    </div>
}

export default MainContent // Exportation de la fonction MainContent