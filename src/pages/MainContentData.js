import { useEffect, useState } from 'react'; // Importation des Hook UseEffect et UseState
import { useParams, useNavigate } from 'react-router-dom'; // Importation de useParams et useNavigate
import Api from './ApiLogements.json'; // Importation fichier Api

export function useMainContentData() { // Rend la fonction useMainContentData exportable
  const { identifiant } = useParams(); // Hook useParams pour l'utilisation de paramètre spécifique
  const navigate = useNavigate(); // Hook useNavigate pour la redirection
  const [MainContentData, setMainContentData] = useState(null);

  useEffect(() => {
    // Recherche des données correspondant à l'identifiant dans le tableau de données JSON
    const data = Api.find(item => item.identifiant === identifiant);

    if (!data) {
      // Si les données ne sont pas trouvées, rediriger vers la page 404
      navigate('/404');
    } else {
      // Mise à jour de l'état avec les données trouvées
      setMainContentData(data);
    }
  }, [identifiant, navigate]); // Dépendances : identifiant de l'URL et la fonction de navigation

  return MainContentData;
}