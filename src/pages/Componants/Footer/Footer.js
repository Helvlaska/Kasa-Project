/****IMPORTATIONS****/
import './Footer.scss'
import Logo from '../../../assets/LogoWhite.svg'

function Footer(){
    return <div className='Kasa_Footer'>
        <img src={Logo} alt='Kasa' className='Kasa_Logo' />
        <p className='Footer_Text'>© 2020 Kasa. All rights reserved</p>
    </div>
}

export default Footer