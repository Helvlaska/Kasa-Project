import { useCarrousel } from './UseCarrousel'
import Arrow from '../../../assets/Arrow.svg'
import './Carrousel.scss'

export function Carrousel({ images, initialIndex }) {

    const { currentIndex, next, prev } = useCarrousel(initialIndex, images.length);
  
    return (
      <div className='Carrousel'>
        {images.length > 1 && (
          <button className='Carrousel_Button Carrousel_Button_Prev' onClick={prev}>
            <img className='Button_Img_Prev' src={Arrow} alt='Arrow' />
          </button>
        )}
        <img className='Carrousel_Img' src={images[currentIndex]} alt={`Carrousel_Picture ${currentIndex}`} />
        {images.length > 1 && (
          <div className='Carrousel_Img_Position'>
            <p>{currentIndex + 1}/{images.length}</p>
          </div>
        )}
        {images.length > 1 && (
          <button className='Carrousel_Button Carrousel_Button_Next' onClick={next}>
            <img className='Button_Img_Next' src={Arrow} alt='Arrow' />
          </button>
        )}
      </div>
    );
  }
  
  export default Carrousel;