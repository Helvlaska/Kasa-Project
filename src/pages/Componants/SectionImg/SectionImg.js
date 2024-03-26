import React from 'react'
import './SectionImg.scss'

function SectionImage({ src, children }) {
  
    return (<section className="Kasa_Section_Img">
      <img src={src} alt="Kasa_Image" className='Section_Img' />
      {children}
    </section>
  );
}

export default SectionImage;