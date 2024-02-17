/****IMPORTATIONS****/
import '../../styles/Gallery.scss'
import '../../styles/Thumb.scss'
import Api from '../ApiLogements.json'

function Gallery(){
    return <div className='Kasa_Gallery'>
        {Api.map(item => (
            <div key={item.card} className='Gallery_Thumb'>
                <img src={item.cover} alt='Kasa' className='Gallery_Thumb_Img' />
                <div className='Gallery_Thumb_Filter'></div>
                <h6 className='Gallery_Thumb_Txt'>{item.title}</h6>
            </div>
        ))}
    </div>
}

export default Gallery