/****IMPORTATIONS****/
import '../styles/Section1.scss'
import Section1_img from '../assets/Section1_img.png'

function Section1(){
    return <div className='Kasa_Section1'>
        <img src={Section1_img} alt='Kasa' className='Kasa_Section1_img' />
        <div className='Kasa_Section1_Filter'></div>
        <p className='Kasa_Section1_Txt'>Chez vous, partout et ailleurs</p>
    </div>
}

export default Section1