import React, { useEffect, useState } from 'react'; // Importation des hooks React nécessaires
import { useParams } from 'react-router-dom'; // Importation de useParams pour récupérer les paramètres d'URL
import Api from '../ApiLogements.json' // Importation des données d'API
import '../../styles/MainContent_People.scss' // Importation des styles CSS

function MainContentPeople(){

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
    
    const peopleInfo = (MainContentData.hôte); // Infos des propriétaires

    return <div className='MainContent_People'> {/* Bloc pour les informations sur les personnes */}
        <p className='MainContent_People_Name'>{peopleInfo.nom}{peopleInfo.name}</p> {/* Nom du propriétaire */}
        <img src={peopleInfo.photo} alt='Propriétaire' className='MainContent_People_Picture' /> {/* Photo du propriétaire */}
    </div>
}

export default MainContentPeople;