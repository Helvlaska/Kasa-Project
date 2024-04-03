import { useEffect, useState } from 'react'; // Importation des Hook UseEffect et UseState
import { useParams, useNavigate } from 'react-router-dom'; // Importation de useParams et useNavigate
import Api from './ApiLogements.json'; // Importation fichier Api

export function useMainContentData() { // Rend la fonction useMainContentData exportable donc réutilisable
  const { identifiant } = useParams(); // Hook useParams pour l'utilisation de paramètre spécifique
  const navigate = useNavigate(); // Hook useNavigate pour la redirection
  const [MainContentData, setMainContentData] = useState(null); // Passe l'état de MainContentData à null, et modifiable avec setMainContentData

  useEffect(() => {
    // Recherche des données correspondant à l'identifiant dans le tableau de données JSON
    const data = Api.find(item => item.identifiant === identifiant);

    if (!data) {
      // Si les données ne sont pas trouvées, rediriger vers la page 404
      navigate('/404');
    } else {
      // Sinon : Mise à jour de l'état avec les données trouvées
      setMainContentData(data);
    }
  }, [identifiant, navigate]); // Crée un tableau avec l'identifiant récupéré ou la redirection en cas d'echec

  return MainContentData; // Retourne MainContentData avec son changement d'état
}