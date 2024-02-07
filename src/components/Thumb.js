/****IMPORTATIONS****/
import '../styles/Thumb.scss'
import Api from '../ApiLocation.json'
/*console.log(Api);
const firstItem = Api[0];
console.log('title', firstItem.title)
const titles = Api.map(item => item.title)
console.log('titles', titles)*/

function Thumb(){

    return (<>
        {Api.map(item => (
                <div key={item.card} className='Gallery_Thumb'>
                    <img src={item.cover} alt='Kasa' className='Gallery_Thumb_Img' />
                    <div className='Gallery_Thumb_Filter'></div>
                    <h6 className='Gallery_Thumb_Txt'>{item.title}</h6>
                </div>
            ))
        }</>)  
}

export default Thumb