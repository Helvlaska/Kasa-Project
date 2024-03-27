import React, { useState } from 'react' // Import du Hook useState pour gérer l'état local du componant
import Arrow from '../../../assets/Arrow.svg' // Import de l'image de fleche
import './DropDown.scss'

export function DropDown({ title, content }) { // la fonction prend deux props (title, content) en propriétés

  const [dropDown, setDropDown] = useState(false); // État pour gérer l'état de l'élément déroulant

  const startDropDown = () => { // Fonction pour ouvrir ou fermer l'élément déroulant
    setDropDown(prevState => !prevState); // Inversion de l'état actuel
  };

  return (
    <div className='DropDown_Item_Logement DropDown_Item_Propos'>
      <div className='DropDown_Title' onClick={startDropDown}>
        <h6>{title}</h6>
        <img src={Arrow} alt='Arrow' />
      </div>
      {dropDown && ( // Affichage conditionnel du contenu déroulant
        <div className='DropDown_Content'> 
            {/* Analyse du type de contenu de la donnée : si un bloc de texte = renvoyer un <p>, sinon une liste <ul>*/}
            {typeof content === 'string' ? ( 
                <p>{content}</p>
            ) : (
                <ul className='DropDown_Content_List'>
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
      )}
    </div>
  );
}

export default DropDown;
