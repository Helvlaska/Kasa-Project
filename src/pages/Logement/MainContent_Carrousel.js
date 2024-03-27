import { useMainContentData } from '../Data/MainContentData' // Importation de la fonction d'appel a l'Api
import { Carrousel } from '../Componants/Carrousel/Carrousel.js'// Importation du composant réutilisable Carrousel

function CarrouselLogement() {

  const MainContentData = useMainContentData(); // Appel à l'Api

  if (!MainContentData) { // Vérification de la nullité des données
    return <div>Loading...</div>;
  }

  return (
    <Carrousel images={MainContentData["des photos"]} initialIndex={0} />
  );
}

export default CarrouselLogement;
