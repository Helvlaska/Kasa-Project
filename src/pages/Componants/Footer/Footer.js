import Logo from '../../../assets/LogoWhite.svg' // Importation de l'image de Logo
import './Footer.scss' // Importation du style du composant

function Footer(){
    return <div className='Footer'>
        <img src={Logo} alt='Kasa logo' className='Footer_Logo' />
        <p className='Footer_Content'>© 2020 Kasa. All rights reserved</p>
    </div>
}

export default Footer