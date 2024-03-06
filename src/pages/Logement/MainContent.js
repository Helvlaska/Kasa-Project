import React, { useEffect, useState } from 'react'; // Importation des hooks React nécessaires
import { useParams } from 'react-router-dom';
import Api from '../ApiLogements.json'
import Arrow from '../../assets/Arrow.svg'
import '../../styles/DropDown.scss'

function MainContent(){

    const { identifiant } = useParams(); // Récupère l'identifiant de l'URL
    const [MainContentData, setMainContentData] = useState(null); // État pour stocker les données du logement
    
    const [dropDown, setDropDown] = useState({}); // Ligne ajoutée

    const startDropDown = (id) => {
        setDropDown(prevState => ({ ...prevState, [id]: !prevState[id] }));
    }

    useEffect(() => {
        // Recherchez les données correspondant à l'identifiant dans le tableau de données JSON
        const data = Api.find(item => item.identifiant === identifiant);
    
        // Met à jour l'état avec les données trouvées
        setMainContentData(data);
      }, [identifiant]);
    
      if (!MainContentData) {
        return <div>Loading...</div>;
      }
    const TagList = (MainContentData["Mots clés"]);
    const équipementsList = (MainContentData.équipements);

    return <div className='Kasa_MainContent'>
        <div className='MainContent_Bloc_Title'>
            <h1 className="MainContent_Title">{MainContentData.title}</h1>
            <p className="MainContent_Lieu">{MainContentData.location}</p>
            <ul className="MainContent_TagList">
                {TagList.map((item, Tag) => (
                    <li key={`${item}-${Tag}`}className='MainContent_Tag'>{item}</li>
                ))}
            </ul>
        </div>
        <div className='MainContent_Bloc_People'>

        </div>
        <div className='MainContent_Bloc_DropDown'>
            <div className='DropDown_Item'>
                <div className='DropDown_Title'> 
                    <h6>Description</h6>
                    <img src={Arrow} alt='Arrow' onClick={() => startDropDown('description')} /> {/*événement onClick qui appelle la fonction startDropDown avec l'index de l'élément en tant qu'argument*/}
                </div>
                    {dropDown['description'] && ( 
                        <div> {/*Utilisation de l'état local pour déterminer si le contenu déroulant doit être affiché*/}
                            <p className='DropDown_Text'>{MainContentData.description}</p>
                        </div>
                    )}   
                </div>
            <div className='DropDown_Item'>
                <div className='DropDown_Title'> 
                    <h6>Équipements</h6>
                    <img src={Arrow} alt='Arrow' onClick={() => startDropDown('équipements')} /> {/*événement onClick qui appelle la fonction startDropDown avec l'index de l'élément en tant qu'argument*/}
                </div>
                {dropDown['équipements'] && ( 
                    <ul className='DropDown_List'> {/*Utilisation de l'état local pour déterminer si le contenu déroulant doit être affiché*/}
                        {équipementsList.map((item, équipements) => (
                            <li key={`${item}-${équipements}`} className='DropDown_Text'>{item}</li>
                        ))}   
                    </ul>
                )}   
            </div>
        </div>
    </div>
}

export default MainContent