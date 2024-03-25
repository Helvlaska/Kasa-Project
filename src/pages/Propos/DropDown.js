/****IMPORTATIONS****/
import '../../styles/DropDown.scss'
import Api from './ApiContent.json'
import Arrow from '../../assets/Arrow.svg'
import { useState } from 'react'


function DropDown() {

    const [dropDown, setDropDown] = useState({}); // État pour gérer l'état des éléments déroulants
    const startDropDown = (id) => { // Fonction pour ouvrir ou fermer un élément déroulant
        setDropDown(prevState => ({ ...prevState, [id]: !prevState[id] })); // Utilisation de la fonction setDropDown pour mettre à jour l'état avec l'inversion de la visibilité de l'élément spécifique
    }
    return (
        <ul className='DropDown_List'> {/*Utilisation de la fonction map pour parcourir chaque élément de la liste*/}
            {Api.map((item, id) => (
                <li key={`${item}-${id}`} className='DropDown_Item'>
                    <div className='DropDown_Title'> 
                        <h6>{item.Title}</h6>
                        <img src={Arrow} alt='Arrow' onClick={() => startDropDown(id)} /> {/*événement onClick qui appelle la fonction startDropDown avec l'index de l'élément en tant qu'argument*/}
                    </div>
                    {dropDown[id] && ( 
                        <div> {/*Utilisation de l'état local pour déterminer si le contenu déroulant doit être affiché*/}
                            <p className='DropDown_Text'>{item.Content}</p>
                        </div>)}   
                </li>   
            ))}
        </ul>)  
}
export default DropDown