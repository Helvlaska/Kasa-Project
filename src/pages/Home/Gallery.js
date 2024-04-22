import Api from '../Data/ApiLogements.json' // Importation des données du fichier Json
import { Link } from 'react-router-dom' // Importation de routes via des link

function Gallery(){
    return <div className='Gallery'>
        {/*On crée une liste des objets de l'api */}
        {Api.map(item => (
            //Chaque item de la liste sera un link auquel on rattache sont id et renvera vers sa propre page 
            <Link className='Gallery_Link' key={item.identifiant} to={`/Logement/${item.identifiant}`}>
                {/*on utilise les clefs/valeur de l'objet pour compléter notre composant */}
                <div key={item.card} className='Gallery_Thumb'> 
                    <img src={item.cover} alt='Logement' className='Thumb_Img' /> {/*ici .cover */}
                    <div className='Thumb_Filter'></div>
                    <h6 className='Thumb_Content'>{item.title}{item.titre}</h6> {/*ici .title et .titre */}
                </div>
            </Link>
        ))}
    </div>
}

export default Gallery
