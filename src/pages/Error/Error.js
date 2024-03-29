import './Error.scss'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='Error'>
            <div className='Error_Content'>
                <h1 className='Content_Title'>404</h1>
                <p className='Content_Content'>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link className='Error_Link' to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error