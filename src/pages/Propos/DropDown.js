/****IMPORTATIONS****/
import '../../styles/DropDown.scss'
import Api from './ApiContent.json'
import Arrow from '../../assets/Arrow.svg'

function DropDown() {

    function event(){console.log("l'event fonctionne")} 

    return (
        <ul className='DropDown_List'>
            {Api.map((item, index) => (
                <li key={`${item}-${index}`} className='DropDown_Item'>
                    <div className='DropDown_Title'>
                        <h6>{item.Title}</h6>
                        <img src={Arrow} alt='Arrow' onClick={event} />
                    </div>
                    <p className='DropDown_Text'>{item.Content}</p>
                </li>   
            ))}
        </ul>)  
}
export default DropDown