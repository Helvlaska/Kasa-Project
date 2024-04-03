import { useMainContentData } from '../Data/MainContentData'; // Importation de la fonction d'appel a l'Api

function MainContentTag(){

  // Utilisation de la fonction d'importation des données de l'Api
  const MainContentData = useMainContentData(); 
  
  // vérification de nullité des données de l'Api
  if (!MainContentData) {
    return <div>Loading...</div>; 
  }

  // Récupération des données de la clef "Mots clés" dans l'api (système de array dans un array)
  const TagList = (MainContentData["Mots clés"]);
    
  return <div className='MainContent_Tag'>
    <ul className='MainContent_TagList'>
      {/*On crée une liste avec les données de la clef "mots clés" de l'api*/}
      {TagList.map((item, Tag) => ( 
        <li key={`${item}-${Tag}`} className='TagList_Tag'>{item}</li> 
      ))}
    </ul>
  </div>
}

export default MainContentTag;