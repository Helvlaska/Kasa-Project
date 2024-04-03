import { Link } from 'react-router-dom' // Importation de routes via des link
import './Error.scss' // Import du style du composant

function Error() {
    return (
        <div className='Error'>
            <div className='Error_Content'>
                <h1 className='Content_Title'>404</h1>
                <p className='Content_Content'>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            {/* Le link renvoie à la page Home (accueil) */}
            <Link className='Error_Link' to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error