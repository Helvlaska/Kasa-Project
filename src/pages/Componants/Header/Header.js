/****IMPORTATIONS****/
import './Header.scss'
import Logo from '../../../assets/LogoPink.svg'
import { Link } from 'react-router-dom'

function Header(){
    return <div className='Header'>
        <img src={Logo} alt='Kasa' className='Header_Logo' />
        <nav className='Header_Nav'>
            <Link className='Nav_Content' to="/">Accueil</Link>
            <Link className='Nav_Content' to="/Propos">A Propos</Link>
        </nav>
    </div>
}

export default Header