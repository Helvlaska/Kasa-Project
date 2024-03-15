import React, { useEffect, useState } from 'react'; // Importation des hooks React nécessaires
import { useParams } from 'react-router-dom'; // Importation de useParams pour récupérer les paramètres d'URL
import Api from '../ApiLogements.json' // Importation des données d'API
import starEmpty from '../../assets/StarEmpty.png'; // Importation de l'image étoile vide
import starFull from '../../assets/StarFull.png'; // Importation de l'image étoile pleine

const StarRating = ({ note }) => {
    const stars = []; // Initialisation d'un tableau pour stocker les étoiles
  
    for (let i = 0; i < 5; i++) { // i égal à 0, continue tant que i est inférieur à 5, et incrémente i de 1 à chaque itération.
      if (i < note) { // Si l'indice de l'étoile est inférieur à la note
        stars.push(<img key={i} src={starFull} alt="Full Star" />); // Ajoute une étoile pleine au tableau
      } else {
        stars.push(<img key={i} src={starEmpty} alt="Empty Star" />); // Sinon, ajoute une étoile vide au tableau
      }
    }
  
    return <div>{stars}</div>; // Renvoie les étoiles
  };

function MainContentStarNote(){

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
    
    return <div className='MainContent_StarNote'>
        <StarRating note={MainContentData.note} /> {/* Intégration du composant StarRating avec la note de l'appartement */}
    </div>
    
}

export default MainContentStarNote;