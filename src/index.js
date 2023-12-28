//fichier pour lier notre app React a notre HTML

// les imports pour faire fonctionner l'app React
import React from 'react';
import ReactDOM from 'react-dom/client';
//l'import pour appliquer le style général du site
import './styles/index.scss';
//l'import de tout les composants via le fichier App
import App from './components/App';


//on crée une constante pour pointer l'élément HTML sur lequel on va fixer l'app React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//on dit que sur l'élément HTML 'root' on veut renvoyer tout les composants de App