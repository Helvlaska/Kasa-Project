import { useMainContentData } from '../MainContentData'; // Importation de la fonction d'appel a l'Api


function MainContentPeople(){

  const MainContentData = useMainContentData(); // Utilisation de la fonction d'importation des données de l'Api
  
  if (!MainContentData) {
    return <div>Loading...</div>; // vérification de nullité des données de l'Api
  }

  const peopleInfo = (MainContentData.hôte); // Infos des propriétaires

  return <div className='MainContent_People'> {/* Bloc pour les informations sur les personnes */}
    <p className='MainContent_People_Name'>{peopleInfo.nom}{peopleInfo.name}</p> {/* Nom du propriétaire */}
    <img src={peopleInfo.photo} alt='Propriétaire' className='MainContent_People_Picture' /> {/* Photo du propriétaire */}
  </div>
}

export default MainContentPeople;