import { useCarrousel } from './UseCarrousel' // Importation de la fonction pour faire "fonctionner" le carrousel
import Arrow from '../../../assets/Arrow.svg' // Importation de l'image de flèche
import './Carrousel.scss' // Importation du style du carrousel

// Création d'une fonction exportable (réutilisable) avec ses props : images et initialIndex
export function Carrousel({ images, initialIndex }) { 

  // Création de trois constantes (currentIndex, next, prev) qui prends les propriétés de useCarrousel
  // currentIndex = contien l'index actuel du carrousel, next = image suivante, prev = image précédente
  // useCarrousel prend comme arguments : l'index initial du carrousel et la longueur du tableau d'images
  const { currentIndex, next, prev } = useCarrousel(initialIndex, images.length);
  
  // La fonction va retourner une div avec les paramètres des const établies plus haut
  return (
    <div className='Carrousel'>
      {images.length > 1 && ( // Si le nombre d'images est supérieur à 1 alors ...
        // Bouton avec une écoute d'évènement au click avec prev comme argument
        <button className='Carrousel_Button Carrousel_Button_Prev' onClick={prev}>
          <img className='Button_Img_Prev' src={Arrow} alt='Arrow' />
        </button>
      )}
      {/* L'image elle est toujours présente, peu importe le nombre d'images*/}
      <img className='Carrousel_Img' src={images[currentIndex]} alt={`Carrousel_Picture ${currentIndex}`} />
      {images.length > 1 && ( // Si le nombre d'images est supérieur à 1 alors ...
        // Compteur de la position de l'image
        <div className='Carrousel_Img_Position'>
          {/* index actuel du carrousel +1 (position 0=1)/ Longueur totale des images */}
          <p>{currentIndex + 1}/{images.length}</p>
        </div>
      )}
      {images.length > 1 && ( // Si le nombre d'images est supérieur à 1 alors ...
        // Bouton avec une écoute d'évènement au click avec next comme argument
        <button className='Carrousel_Button Carrousel_Button_Next' onClick={next}>
          <img className='Button_Img_Next' src={Arrow} alt='Arrow' />
        </button>
      )}
    </div>
  );
}
  
  export default Carrousel; // Rend la fonction exportable et réutilisable