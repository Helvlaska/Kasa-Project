import { useMainContentData } from '../Data/MainContentData'; // Importation de la fonction d'appel a l'Api


function MainContentPeople(){

  // Utilisation de la fonction d'importation des données de l'Api
  const MainContentData = useMainContentData(); 
  
  // vérification de nullité des données de l'Api
  if (!MainContentData) {
    return <div>Loading...</div>; 
  }

  // Récupération des données de la clef "hote" dans l'api (système de array dans un array)
  const peopleInfo = (MainContentData.hôte); 

  return <div className='MainContent_People'>
    <p className='People_Name'>{peopleInfo.nom}{peopleInfo.name}</p>
    <img src={peopleInfo.photo} alt='Propriétaire' className='People_Picture' />
  </div>
}

export default MainContentPeople;