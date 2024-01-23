/****IMPORTATIONS****/
import '../styles/DropDown.scss'
import Api from '../ApiTexte.json'

const title = Api.map(item => item.title)
console.log('title', title)
const text = Api.map(item => item.text)
console.log('text', text)

function DropDown() {
    return (<>
        {Api.map(item => (
                <ul key={item.title} className='DropDown_List'>
                    <li className='DropDown_Item'>
                        <h6 className='DropDown_Title'>{item.title}</h6>
                        <p className='DropDown_Text'>{item.text}</p>
                    </li>
                </ul>
            ))
        }</>)  
}
export default DropDown