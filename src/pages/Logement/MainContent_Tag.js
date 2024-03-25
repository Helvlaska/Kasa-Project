import { useMainContentData } from '../MainContentData'; // Importation de la fonction d'appel a l'Api

function MainContentTag(){

  const MainContentData = useMainContentData(); // Utilisation de la fonction d'importation des données de l'Api
  
  if (!MainContentData) {
    return <div>Loading...</div>; // vérification de nullité des données de l'Api
  }

  const TagList = (MainContentData["Mots clés"]); // Liste des mots-clés du logement
    
  return <div className='MainContent_Tag'>
    <ul className="MainContent_TagList"> {/* Liste des mots-clés */}
      {/* Parcours et affichage des mots-clés */}
      {TagList.map((item, Tag) => ( 
        <li key={`${item}-${Tag}`} className='MainContent_TagList_Tag'>{item}</li> 
      ))}
    </ul>
  </div>
}

export default MainContentTag;