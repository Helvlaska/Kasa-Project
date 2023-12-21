/****IMPORTATIONS****/
import '../styles/Header.scss'
import Logo from '../assets/Logo.svg'

function Header(){
    return <div className='Kasa_Header'>
        <img src={Logo} alt='Kasa' className='Kasa_Logo' />
    </div>
}

export default Header