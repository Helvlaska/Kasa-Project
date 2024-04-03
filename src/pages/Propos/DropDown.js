import Api from './ApiContent.json' // Importation du fichier de données
import {DropDown} from '../Componants/DropDown/DropDown' // Importation du composant réutilisable DropDown
import '../Componants/DropDown/DropDown.scss' // Importation du style du composant

function DropDownPropos() {

    return (
        <ul className='DropDown_List'> 
            {/*Crée une liste avec les données de l'api*/}
            {Api.map((item, id) => (
                <li key={id} className='DropDown_Item_Propos'>
                    {/*On donne une valeur au props déclarés dans le composant réutilisable DropDown*/}
                    <DropDown title={item.Title} content={item.Content}/>   
                </li>   
            ))}
        </ul>)
}

export default DropDownPropos