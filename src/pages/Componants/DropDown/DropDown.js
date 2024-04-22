import React, { useState } from 'react' // Importation du Hook useState
import Arrow from '../../../assets/Arrow.svg' // Importation de l'image de flèche
import './DropDown.scss' // Importation du style du DropDown

// la fonction prend deux props (title, content) en propriétés
export function DropDown({ title, content }) { 

  // État pour gérer l'état de l'élément déroulant : dropDown vaut false par défaut
  const [dropDown, setDropDown] = useState(false); 

  // Fonction conditionnelle : si dropDown ouvert = Appliquer la className 'open' si fermé = className 'closed'
  const classNameAnimation = dropDown ? 'open' : 'closed'; 
  
  const startDropDown = () => { // Fonction pour ouvrir ou fermer l'élément déroulant
    setDropDown(prevState => !prevState); // Inversion de l'état actuel
  };

  // La fonction va retourner une div avec les paramètres des const établies plus haut
  return (
    <div className='DropDown DropDown_Item_Logement DropDown_Item_Propos' >
      {/* Création d'une div avec une className fixe et dynamique selon si le dropDown est ouvert ou fermé, avec un écouteur d'évènement */}
      <div className={`DropDown_Title ${classNameAnimation}`} onClick={startDropDown} >
        <h6>{title}</h6> {/* Donnée title importée via les props */}
        <img src={Arrow} alt='Arrow' className='Arrow' />
      </div>
      {/* Création d'une div avec une className fixe et dynamique selon si le dropDown est ouvert ou fermé */}
      <div className={`DropDown_Content ${classNameAnimation}`} > 
        {/* Condition si le dropDown est ouvert, renvoyer ...*/}
        {dropDown && (
          <>
           {/* Ajout d'une condition pour déterminer le type de contenu de la donnée (paragraphe, liste,...)*/}
            {typeof content === 'string' ? ( 
              // si c'est du type string renvoyer un <p>
              <p className='Content'>{content}</p>
            ) : ( // sinon renvoyer les données sous forme de liste
              <ul className='Content_List'>
                {/* on génère une liste (.map) via le tableau de données (content) */}
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

