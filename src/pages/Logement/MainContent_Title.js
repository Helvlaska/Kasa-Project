import { useMainContentData } from '../Data/MainContentData'; // Importation de la fonction d'appel a l'Api


function MainContentTitle(){

  const MainContentData = useMainContentData(); // Utilisation de la fonction d'importation des données de l'Api
  
  if (!MainContentData) {
    return <div>Loading...</div>; // vérification de nullité des données de l'Api
  }

  return <div className='MainContent_Title'> {/* Bloc de titre */}
    <h1 className='Title_Title'>{MainContentData.title}</h1> {/* Affichage du titre du logement */}
    <p className='Title_Lieu'>{MainContentData.location}</p> {/* Affichage de l'emplacement du logement */}
  </div>
}

export default MainContentTitle;