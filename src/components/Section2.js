/****IMPORTATIONS****/
import '../styles/Section2.scss'
import Section2_img from '../assets/Section2_img.png'

function Section2(){
    return <div className='Kasa_Section2'>
        <img src={Section2_img} alt='Kasa' className='Kasa_Section2_img' />
        <div className='Kasa_Section2_Filter'></div>
    </div>
}

export default Section2