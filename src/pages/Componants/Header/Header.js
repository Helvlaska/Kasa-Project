/****IMPORTATIONS****/
import './Header.scss'
import Logo from '../../../assets/LogoPink.svg'
import { Link } from 'react-router-dom'

function Header(){
    return <div className='Kasa_Header'>
        <img src={Logo} alt='Kasa' className='Kasa_Logo' />
        <nav className='Kasa_Nav'>
            <Link className='Kasa_Nav_Txt' to="/">Accueil</Link>
            <Link className='Kasa_Nav_Txt' to="/Propos">A Propos</Link>
        </nav>
    </div>
}

export default Header