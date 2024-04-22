import { useState } from 'react'; // Importation du Hook useState

// Création d'une fonction exportable (réutilisable) avec ses props : totalItems et initialIndex
export function useCarrousel(initialIndex, totalItems) {
  // const de gestion de l'état de CurrentIndex
  // initialIndex = index initial du carrousel renvoie un tableau, currentIndex = initialIndex, setCurrentIndex = modification de la valeur de CurrentIndex
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Fonction pour passer à l'image suivante
  const next = () => {
    // setCurrentIndex va modifier l'état de CurrentIndex
    // setCurrentIndex prend en argument l'indice précédent : (prevIndex)
    // (prevIndex + 1) calcule le nouvel indice en ajoutant 1 à l'indice précédent
    // % totalItems permet de boucler sur les images et de revenir au debut (division avec reste)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // Fonction pour passer à l'image précédente
  const prev = () => {
    // Même logique que pour la fonction next, mais on ajoute totalItem de façon à ne pas aller dans des valeurs négatives
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return { // Renvoie : 
    currentIndex, // Image sur laquelle l'index pointe
    next, // La fonction pour passer à l'image suivante
    prev, // La fonction pour passer à l'image précédente
  };
}
