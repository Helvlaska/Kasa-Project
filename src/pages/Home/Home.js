// fichier de construction de pages

/****IMPORTATIONS****/
import '../../styles/Home.scss'
import Section1 from '../../components/Section1'
import Body from '../../components/Body'

function Home(){
    return <div className='Kasa_Home'>
        <Section1 />
        <Body />
    </div>
}

export default Home