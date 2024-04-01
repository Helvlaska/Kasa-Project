/****IMPORTATIONS****/
import './Header.scss'
import Logo from '../../../assets/LogoPink.svg'
import { Link } from 'react-router-dom'

function Header(){
    return <div className='Header'>
        <Link className='Header_Logo' to="/">
            <img src={Logo} alt='Kasa'/>
        </Link>        
        <nav className='Header_Nav'>
            <Link className='Nav_Content' to="/">Accueil</Link>
            <Link className='Nav_Content' to="/Propos">À Propos</Link>
        </nav>
    </div>
}

export default Header