/****IMPORTATIONS****/
import '../../styles/DropDown.scss'
import Api from './ApiContent.json'
import Arrow from '../../assets/Arrow.svg'
import { useState } from 'react'


function DropDown() {
    const [dropDown, setDropDown] = useState(Array(Api.length).fill(false));
    const startDropDown = (index) => { // Définition de la fonction startDropDown qui prend l'index comme argument
        setDropDown(prevState => { // Appel de la fonction setDropDownStates pour mettre à jour l'état local
            const newState = [...prevState]; // Création d'une nouvelle copie de l'état précédent
            newState[index] = !newState[index]; // Inversion de la visibilité de l'élément spécifique dans le tableau d'états
            return newState; // Retour de la nouvelle copie de l'état mise à jour
        })
    }
    return (
        <ul className='DropDown_List'> {/*Utilisation de la fonction map pour parcourir chaque élément de la liste*/}
            {Api.map((item, index) => (
                <li key={`${item}-${index}`} className='DropDown_Item'>
                    <div className='DropDown_Title'> 
                        <h6>{item.Title}</h6>
                        <img src={Arrow} alt='Arrow' onClick={() => startDropDown(index)} /> {/*événement onClick qui appelle la fonction startDropDown avec l'index de l'élément en tant qu'argument*/}
                    </div>
                    {dropDown[index] && ( 
                        <div> {/*Utilisation de l'état local pour déterminer si le contenu déroulant doit être affiché*/}
                            <p className='DropDown_Text'>{item.Content}</p>
                        </div>)}   
                </li>   
            ))}
        </ul>)  
}
export default DropDown