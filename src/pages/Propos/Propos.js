import './Propos.scss'
import SectionImage from '../Componants/SectionImg/SectionImg'
import Image from '../../assets/SectionImg_Propos.png' 
import DropDown from './DropDown'

function Propos(){
    return (
        <div className="Kasa_Propos">
            <SectionImage src={Image}/>
            <DropDown />
        </div>
    )
}

export default Propos