import Api from './ApiContent.json' // Importation du fichier de données
import {DropDown} from '../Componants/DropDown/DropDown' // Importation du composant générique DropDown
import '../Componants/DropDown/DropDown.scss' // Importation du css du composant

function DropDownPropos() {

    return (
        <ul className='DropDown_List'> {/*Utilisation de la fonction map pour parcourir chaque élément de la liste*/}
            {Api.map((item, id) => (
                <li key={id} className='DropDown_Item_Propos'>
                    <DropDown title={item.Title} content={item.Content}/>   
                </li>   
            ))}
        </ul>)
}

export default DropDownPropos