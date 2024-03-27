import React from 'react'
import './SectionImg.scss'

function SectionImage({ src, children }) {
  
    return (<section className="SectionImg">
      <img src={src} alt="Section_Image" className='SectionImg_Img' />
      {children}
    </section>
  );
}

export default SectionImage;