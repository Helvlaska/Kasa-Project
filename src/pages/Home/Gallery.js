import Api from '../Data/ApiLogements.json' // Importation des données
import { Link } from 'react-router-dom'

function Gallery(){
    return <div className='Gallery'>
            {Api.map(item => (
                <Link className='Gallery_Link' key={item.identifiant} to={`/Logement/${item.identifiant}`}>
                    <div key={item.card} className='Gallery_Thumb'>
                        <img src={item.cover} alt='Logement' className='Thumb_Img' />
                        <div className='Thumb_Filter'></div>
                        <h6 className='Thumb_Content'>{item.title}{item.titre}</h6>
                    </div>
                </Link>
            ))}
    </div>
}

export default Gallery