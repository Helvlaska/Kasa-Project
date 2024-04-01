import React, { useState } from 'react' // Import du Hook useState pour gérer l'état local du componant
import Arrow from '../../../assets/Arrow.svg' // Import de l'image de fleche
import './DropDown.scss'

export function DropDown({ title, content }) { // la fonction prend deux props (title, content) en propriétés

  const [dropDown, setDropDown] = useState(false); // État pour gérer l'état de l'élément déroulant

  const classNameAnimation = dropDown ? 'open' : 'closed'; // Variable pour créer de nouvelles class si le drop down est ouvert ou fermé
  
  const startDropDown = () => { // Fonction pour ouvrir ou fermer l'élément déroulant
    setDropDown(prevState => !prevState); // Inversion de l'état actuel
  };

  return (
    <div className='DropDown DropDown_Item_Logement DropDown_Item_Propos' >
      <div className={`DropDown_Title ${classNameAnimation}`} onClick={startDropDown} >
        <h6>{title}</h6>
        <img src={Arrow} alt='Arrow' className='Arrow' />
      </div>
      <div className={`DropDown_Content ${classNameAnimation}`} > 
        {dropDown && (
          <>
            {typeof content === 'string' ? ( // Ajout d'une condition pour déterminer le type de contenu de la donnée (paragraphe, liste,...)
              <p className='Content'>{content}</p>
            ) : (
              <ul className='Content_List'>
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default DropDown;
