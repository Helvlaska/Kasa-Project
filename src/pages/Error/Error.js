import './Error.scss'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='Kaza_Error'>
            <h1 className='Error_Title'>404</h1>
            <p className='Error_Content'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='Error_Link' to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error