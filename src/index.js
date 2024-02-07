//fichier pour lier notre app React a notre HTML et le REPERTOIRE DE PAGES

// les imports pour faire fonctionner l'app React
import React from 'react';
import ReactDOM from 'react-dom/client';
//Les imports pour gérer les routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//l'import pour appliquer le style général du site
import './styles/Normalize.scss'
import './styles/index.scss';
//l'import des components pour construire les pages
import Header from './components/Header';
import Home from './pages/Home/Home';
import Propos from './pages/Home/Propos';
import Footer from './components/Footer';

//on crée une constante pour pointer l'élément HTML sur lequel on va fixer l'app React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aPropos" element={<Propos />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
//on dit que sur l'élément HTML 'root' on veut renvoyer notre structure de page