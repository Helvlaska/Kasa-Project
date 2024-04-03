import { useMainContentData } from '../Data/MainContentData'; // Importation de la fonction d'appel a l'Api
import starEmpty from '../../assets/StarEmpty.png'; // Importation de l'image étoile vide
import starFull from '../../assets/StarFull.png'; // Importation de l'image étoile pleine

// Création d'une fonction avec la props "note"
const StarRating = ({ note }) => {

  // Initialisation d'un array vide pour stocker les étoiles
  const stars = []; 
  
  for (let i = 0; i < 5; i++) { // i égal à 0, continue tant que i est inférieur à 5, et incrémente i de 1 à chaque itération.
    if (i < note) { // on boucle sur note ...
      // ...Ajoute les étoiles pleine au tableau selon la valeur de note
      stars.push(<img className='StarNote_Star' key={i} src={starFull} alt="Full Star" />); 
    } else {
      // ... le reste on ajoute les étoiles vide au tableau (jusqu'à 5 si besoin)
      stars.push(<img className='StarNote_Star' key={i} src={starEmpty} alt="Empty Star" />);
    }
  }
  
  return <div>{stars}</div>; // Renvoie le array d'étoiles
};

function MainContentStarNote(){

  // Utilisation de la fonction d'importation des données de l'Api
  const MainContentData = useMainContentData(); 
  
  // vérification de nullité des données de l'Api
  if (!MainContentData) {
    return <div>Loading...</div>; 
  }

  return <div className='MainContent_StarNote'>
    {/* Appel de la fonction StarRating pour générer le tableau d'étoiles*/}
    {/*Avec la props note qui prends la valeur de la clef "note" de l'api */}
    <StarRating note={MainContentData.note} /> 
  </div>   
}

export default MainContentStarNote;