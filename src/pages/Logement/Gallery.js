import React, { useEffect, useState } from 'react'; // Importation des hooks React nécessaires
import { useParams } from 'react-router-dom'; // Importation de useParams pour récupérer les paramètres d'URL
import Api from '../ApiLogements.json'; // Importation des données d'API
import Arrow from '../../assets/Arrow.svg' // Importation de l'icône flèche

function useCarousel(initialIndex, totalItems) { 
  const [currentIndex, setCurrentIndex] = useState(initialIndex); // Initialisation de l'état local pour stocker l'index actuel

  const next = () => { // Fonction pour passer à l'élément suivant dans le carousel
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prev = () => { // Fonction pour passer à l'élément précédent dans le carousel
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return { // Retourne l'index actuel et les fonctions pour passer à l'élément suivant et précédent
    currentIndex,
    next,
    prev,
  };
}

function Gallery() {
  const { identifiant } = useParams(); // Récupération de l'identifiant de l'URL
  const [MainContentData, setMainContentData] = useState(null); // État pour stocker les données du logement

  // Utilisation de la fonction useCarousel pour gérer le carousel
  const { currentIndex, next, prev } = useCarousel(0, MainContentData ? MainContentData["des photos"].length : 0);

  useEffect(() => {
    // Recherche des données correspondant à l'identifiant dans le tableau de données JSON
    const data = Api.find(item => item.identifiant === identifiant);
  
    // Mise à jour de l'état avec les données trouvées
    setMainContentData(data);
  }, [identifiant]); // Dépendance : identifiant de l'URL

  if (!MainContentData) {
    return <div>Loading...</div>;
  }

  // Rendu du composant Gallery
  return (
    <div className="Logement_Gallery">
        <button className='Gallery_Button Gallery_Button_Prev' onClick={prev}> {/* Bouton pour passer à l'image précédente */}
          <img className='Button_Img_Prev' src={Arrow} alt='Arrow' />
        </button>   
        {/* Image actuellement affichée avec son chemin d'accès basé sur l'index actuel */}
        <img className='Gallery_Img' src={MainContentData["des photos"][currentIndex]} alt={`Logement_Picture ${currentIndex}`} />
        <div className='Gallery_Img_Position'>
          <p>{currentIndex + 1}/{MainContentData["des photos"].length}</p>
        </div>
        <button className='Gallery_Button Gallery_Button_Next' onClick={next}> {/* Bouton pour passer à l'image suivante */}
          <img className='Button_Img_Next' src={Arrow} alt='Arrow' />
        </button> 
    </div>
  );
}

export default Gallery;
