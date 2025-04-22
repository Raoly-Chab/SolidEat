// src/App.js
import React from 'react';
import './App.css'; // au cas où tu veux un CSS global ou Tailwind
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Importation de la barre de navigation

// Composants de chaque page
import Inscription from './Inscription';
import Restaurants from './Restaurants';
import Map from './Map';
import Reviews from './Reviews';

function App() {
  const toggleFAQ = (e) => {
    const answer = e.currentTarget.querySelector('.faq-answer');
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  };

  return (
    <Router>
      {/* Inclusion de la barre de navigation */}
      <Navbar />

      <div className="container mx-auto p-6">
        <Routes>
          {/* Route par défaut */}
          <Route path="/" element={
            <div>
              <div className="header">
                <h1>SolidEat</h1>
                <img src="/images/logo.jpg" alt="Logo" className="logo" />
                <p>
                  SolidEat permet aux personnes en précarité de réserver un repas délicieux via notre
                  plateforme dans un restaurant solidaire, et à d'autres de soutenir cette cause.
                </p>
                <button className="btn" onClick={() => alert("Fonctionnalité à venir")}>
                  En savoir plus
                </button>
              </div>

              <hr />

              <div className="image-text">
                <img src="/images/donation.jpg" alt="Don" />
                <div className="text">
                  <h2>Faire un don</h2>
                  <p>
                    Vous pouvez contribuer et aider des personnes dans le besoin à accéder à des repas.
                    Chaque geste compte pour construire un monde plus solidaire.
                  </p>
                  <button className="btn" onClick={() => alert("Faire un don - à venir")}>
                    Je veux aider
                  </button>
                </div>
              </div>

              <div className="image-text">
                <div className="text">
                  <h2>Réserver votre plat</h2>
                  <p>
                    Trouvez un restaurant solidaire près de chez vous et réservez un plat chaud
                    gratuitement en quelques clics. Simple, rapide et humain.
                  </p>
                  <button className="btn" onClick={() => alert("Réserver un plat - à venir")}>
                    Réserver un plat
                  </button>
                </div>
                <img src="/images/reserve.jpg" alt="Réserver" />
              </div>

              <hr />

              <div className="faq-title">FAQ</div>

              <div className="faq">
                <div className="faq-list">
                  <div className="faq-item" onClick={toggleFAQ}>
                    <p>Comment réserver un repas ?</p>
                    <div className="faq-answer">
                      <p>
                        Pour réserver un repas, il suffit de s'inscrire sur notre plateforme, de choisir
                        un plat et de réserver la date et l'heure.
                      </p>
                    </div>
                  </div>
                  <div className="faq-item" onClick={toggleFAQ}>
                    <p>Qu'est-ce que SolidEat ?</p>
                    <div className="faq-answer">
                      <p>
                        SolidEat est une plateforme qui aide les personnes en précarité à obtenir des
                        repas gratuits grâce aux dons des utilisateurs.
                      </p>
                    </div>
                  </div>
                  <div className="faq-item" onClick={toggleFAQ}>
                    <p>Puis-je réserver pour quelqu’un d’autre ?</p>
                    <div className="faq-answer">
                      <p>
                        Oui, vous pouvez réserver un repas pour quelqu’un d'autre si vous le souhaitez.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } />
          
          {/* Ajoute les autres routes ici */}
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/map" element={<Map />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
