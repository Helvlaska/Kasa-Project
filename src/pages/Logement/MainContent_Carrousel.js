import { useMainContentData } from '../Data/MainContentData' // Importation de la fonction d'appel a l'Api
import { Carrousel } from '../Componants/Carrousel/Carrousel.js'// Importation du composant réutilisable Carrousel

function CarrouselLogement() {

  const MainContentData = useMainContentData(); // Appel à l'Api

  if (!MainContentData) { // Vérification de la nullité des données
    return <div>Loading...</div>;
  }

  return (
    // On utilise la props "image" qui va aller chercher les données sous la clef "des photos"...
    // ... et la props initialIndex pour dire qu'on veut commencer a l'index 0 soit la première image
    <Carrousel images={MainContentData["des photos"]} initialIndex={0} />
  );
}

export default CarrouselLogement;
