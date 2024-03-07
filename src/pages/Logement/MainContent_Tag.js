import React, { useEffect, useState } from 'react'; // Importation des hooks React nécessaires
import { useParams } from 'react-router-dom'; // Importation de useParams pour récupérer les paramètres d'URL
import Api from '../ApiLogements.json' // Importation des données d'API

function MainContentTag(){

    const { identifiant } = useParams(); // Récupération de l'identifiant de l'URL
    const [MainContentData, setMainContentData] = useState(null); // État pour stocker les données du logement

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
    
    return <div className='MainContent_Tag'>
        <ul className="MainContent_TagList"> {/* Liste des mots-clés */}
        {/* Parcours et affichage des mots-clés */}
        {TagList.map((item, Tag) => ( 
            <li key={`${item}-${Tag}`}className='MainContent_Tag'>{item}</li> 
        ))}
    </ul>
        </div>
}

export default MainContentTag;