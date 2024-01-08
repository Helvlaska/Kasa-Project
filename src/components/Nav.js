/****IMPORTATIONS****/
import '../styles/Nav.scss'
import { Link } from 'react-router-dom'

function Nav(){
    return (
        <nav className='Kasa_Nav'>
            <Link className='Kasa_Nav_Txt' to="/">Accueil</Link>
            <Link className='Kasa_Nav_Txt' to="/Test">A Propos</Link>
        </nav>
    )
}

export default Nav