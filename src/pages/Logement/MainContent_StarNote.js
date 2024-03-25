import { useMainContentData } from '../MainContentData'; // Importation de la fonction d'appel a l'Api
import starEmpty from '../../assets/StarEmpty.png'; // Importation de l'image étoile vide
import starFull from '../../assets/StarFull.png'; // Importation de l'image étoile pleine

const StarRating = ({ note }) => {

  const stars = []; // Initialisation d'un tableau pour stocker les étoiles
  
  for (let i = 0; i < 5; i++) { // i égal à 0, continue tant que i est inférieur à 5, et incrémente i de 1 à chaque itération.
    if (i < note) { // Si l'indice de l'étoile est inférieur à la note
      stars.push(<img className='StarNote_Star' key={i} src={starFull} alt="Full Star" />); // Ajoute une étoile pleine au tableau
    } else {
      stars.push(<img className='StarNote_Star' key={i} src={starEmpty} alt="Empty Star" />); // Sinon, ajoute une étoile vide au tableau
    }
  }
  
  return <div>{stars}</div>; // Renvoie les étoiles
};

function MainContentStarNote(){

  const MainContentData = useMainContentData(); // Utilisation de la fonction d'importation des données de l'Api
  
  if (!MainContentData) {
    return <div>Loading...</div>; // vérification de nullité des données de l'Api
  }

  return <div className='MainContent_StarNote'>
    <StarRating note={MainContentData.note} /> {/* Intégration du composant StarRating avec la note de l'appartement */}
  </div>   
}

export default MainContentStarNote;