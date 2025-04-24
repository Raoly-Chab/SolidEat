// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';

import Inscription from './Inscription';
import Restaurants from './Restaurants';
import Map from './Map';
import Reviews from './Reviews';
import Reservation from './Reservation'; // ✅ ajouté

function App() {
  const toggleFAQ = (e) => {
    const answer = e.currentTarget.querySelector('.faq-answer');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  };

  return (
    <Router>
      <Navbar />

      <div className="container mx-auto p-6">
        <Routes>
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
                  <p>Vous pouvez contribuer et aider des personnes dans le besoin à accéder à des repas.</p>
                  <button className="btn" onClick={() => alert("Faire un don - à venir")}>
                    Je veux aider
                  </button>
                </div>
              </div>

              <div className="image-text">
                <div className="text">
                  <h2>Réserver votre plat</h2>
                  <p>Trouvez un restaurant solidaire près de chez vous et réservez un plat chaud gratuitement.</p>
                  <Link to="/reservation" className="btn">
                    Réserver un plat
                  </Link>
                </div>
                <img src="/images/reserve.jpg" alt="Réserver" />
              </div>

              <hr />

              <div className="faq-title">FAQ</div>
              <div className="faq">
                <div className="faq-list">
                  {[
                    ["Comment réserver un repas ?", "Pour réserver un repas, inscrivez-vous et réservez en quelques clics."],
                    ["Qu'est-ce que SolidEat ?", "Une plateforme solidaire qui permet d'offrir des repas aux plus démunis."],
                    ["Puis-je réserver pour quelqu’un d’autre ?", "Oui, vous pouvez réserver pour quelqu’un d'autre."]
                  ].map(([question, answer], index) => (
                    <div className="faq-item" key={index} onClick={toggleFAQ}>
                      <p>{question}</p>
                      <div className="faq-answer"><p>{answer}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          } />

          {/* ✅ Autres routes */}
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/map" element={<Map />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reservation" element={<Reservation />} /> {/* ✅ Ajout de la page réservation */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
