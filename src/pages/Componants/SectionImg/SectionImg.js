import './SectionImg.scss' // Import du style du composant

// Création d'une fonction qui prend comme props src et children = composant réutilisable
function SectionImage({ src, children }) {
  
    return (<section className="SectionImg">
      {/* la src de l'image prendra sa valeur dans la fonction de la page où elle sera déclarée */}
      <img src={src} alt="Section_Image" className='SectionImg_Img' />
      {/* children permet dans cette fonction réutilisable d'ajouter (ou pas) une balise/composant */}
      {children}
    </section>
  );
}

export default SectionImage;
