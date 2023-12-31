/****IMPORTATIONS****/
import '../styles/Header.scss'
import Logo from '../assets/Logo.svg'
import Nav from './Nav'

function Header(){
    return <div className='Kasa_Header'>
        <img src={Logo} alt='Kasa' className='Kasa_Logo' />
        <Nav />
    </div>
}

export default Header