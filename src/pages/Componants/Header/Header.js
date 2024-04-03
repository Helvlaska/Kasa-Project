import { Link } from 'react-router-dom' // Importation de routes via des link
import Logo from '../../../assets/LogoPink.svg' // Importation de l'image de Logo
import './Header.scss' // Importation du style du composant

function Header(){
    return <div className='Header'>
        <Link className='Header_Logo' to="/"> {/* Le link renvoie à la page Home (accueil) */}
            <img src={Logo} alt='Kasa'/>
        </Link>        
        <nav className='Header_Nav'>
            <Link className='Nav_Content' to="/">Accueil</Link> {/* Le link renvoie à la page Home (accueil) */}
            <Link className='Nav_Content' to="/Propos">À Propos</Link> {/* Le link renvoie à la page Propos (à Propos) */}
        </nav>
    </div>
}

export default Header