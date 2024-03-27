import Api from '../Data/ApiLogements.json' // Importation des données
import { Link } from 'react-router-dom'

function Gallery(){
    return <div className='Kasa_Gallery'>
            {Api.map(item => (
                <Link className='Kasa_Link_Logement' key={item.identifiant} to={`/Logement/${item.identifiant}`}>
                    <div key={item.card} className='Gallery_Thumb'>
                        <img src={item.cover} alt='Kasa' className='Gallery_Thumb_Img' />
                        <div className='Gallery_Thumb_Filter'></div>
                        <h6 className='Gallery_Thumb_Txt'>{item.title}{item.titre}</h6>
                    </div>
                </Link>
            ))}
    </div>
}

export default Gallery