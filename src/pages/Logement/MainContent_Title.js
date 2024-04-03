import { useMainContentData } from '../Data/MainContentData'; // Importation de la fonction d'appel a l'Api


function MainContentTitle(){

  // Utilisation de la fonction d'importation des données de l'Api
  const MainContentData = useMainContentData(); 
  
  // vérification de nullité des données de l'Api
  if (!MainContentData) {
    return <div>Loading...</div>; 
  }

  return <div className='MainContent_Title'>
    <h1 className='Title_Title'>{MainContentData.title}</h1> 
    <p className='Title_Lieu'>{MainContentData.location}</p> 
  </div>
}

export default MainContentTitle;